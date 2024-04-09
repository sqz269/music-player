import QueuedTrack from 'src/models/QueuedTrack';
import AudioService from '../domain/AudioService';
import QueueService, { RepeatMode } from '../domain/QueueService';
import { DeepReadonly, readonly, Ref, ref, watch } from 'vue';
import Logger from 'src/utils/Logger';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import { Configuration } from 'app/backend-service-api';
import { AlbumApi } from 'app/backend-service-api';
import { TrackGetMultipleResp } from 'app/backend-service-api';
import { resourceLimits } from 'worker_threads';
import PlaylistService from '../domain/PlaylistService';

export default function useNaiveQueueService(
  audioService: AudioService,
  playlistSerivce: PlaylistService,
  apiConfigProvider: ApiConfigurationProvider<Configuration>
): QueueService {
  const _logger = Logger.getLogger('NaiveQueueService');

  const _apiConfigProvider = apiConfigProvider;
  const _audioService = audioService;

  const _queue: Ref<QueuedTrack[]> = ref([]);

  const _currentIndex: Ref<number | null> = ref(null);
  const _currentTrack: Ref<QueuedTrack | null> = ref(null);
  const _isCurrentTrackInFavorite: Ref<boolean> = ref(false);

  const _isShuffled: Ref<boolean> = ref(false);
  const _repeatMode: Ref<RepeatMode> = ref(RepeatMode.OFF);

  const _hasNext = ref(false);
  const _hasPrevious = ref(false);

  const queue: DeepReadonly<Ref<QueuedTrack[]>> = readonly(_queue);

  const currentIndex: DeepReadonly<Ref<number | null>> =
    readonly(_currentIndex);
  const currentTrack: DeepReadonly<Ref<QueuedTrack | null>> =
    readonly(_currentTrack);
  const isCurrentTrackInFavorite: DeepReadonly<Ref<boolean>> = readonly(
    _isCurrentTrackInFavorite
  );

  const isShuffled: DeepReadonly<Ref<boolean>> = readonly(_isShuffled);
  const repeatMode: DeepReadonly<Ref<RepeatMode>> = readonly(_repeatMode);

  const hasNext: DeepReadonly<Ref<boolean>> = readonly(_hasNext);
  const hasPrevious: DeepReadonly<Ref<boolean>> = readonly(_hasPrevious);

  const initialize = async () => {
    _logger.info('Initializing queue service');

    watch(_audioService.playbackCompletedStream, async (value) => {
      if (value) {
        await playNext();
      }
    });

    watch(_queue, onQueueChanged, { deep: true });
    watch(_currentIndex, _onCurrentlyPlayingChanged);
  };

  const onQueueChanged = async () => {
    if (currentIndex.value === null && _queue.value.length > 0) {
      await skipTo(0);
    }
  };

  const _onCurrentlyPlayingChanged = async () => {
    if (_currentIndex.value === null) {
      _logger.info('No current track');
      return;
    }

    _hasNext.value =
      _currentIndex.value !== null &&
      _currentIndex.value < _queue.value.length - 1;
    _hasPrevious.value =
      _currentIndex.value !== null && _currentIndex.value > 0;

    if (playlistSerivce.isReady.value) {
      _logger.info('Checking if current track is in favorite playlist');
      _isCurrentTrackInFavorite.value = await playlistSerivce.isTrackInPlaylist(
        playlistSerivce.favorite.value!.id!,
        _currentTrack.value!.track.id!
      );
      _logger.info(
        `Current track is ${
          _isCurrentTrackInFavorite.value ? '' : 'not '
        }in favorite playlist`
      );
    }
  };

  const remainingTracksCount = () => {
    return _queue.value.length - (_currentIndex.value ?? 0);
  };

  const _addTracks = async (
    tracks: QueuedTrack[],
    playImmediately = false,
    position: number | undefined
  ) => {
    if (tracks.length === 0) {
      _logger.warn('No tracks to add');
      return 0;
    }

    _logger.info(`Adding ${tracks.length} tracks to queue`);
    if (position !== undefined && playImmediately) {
      _logger.error(
        'Cannot play immediately and specify position at the same time'
      );

      return 0;
    }

    if (position !== undefined && position < 0) {
      _logger.error('Position must be greater than or equal to 0');
      return 0;
    }

    if (position !== undefined && position > _queue.value.length) {
      _logger.error('Position must be less than or equal to queue length');
      return 0;
    }

    if (playImmediately) {
      _queue.value.splice(_currentIndex.value! + 1, 0, ...tracks);
      _logger.info('Added tracks to play immediately');
      await playNext();
    } else if (position !== undefined) {
      _queue.value.splice(position, 0, ...tracks);
      _logger.info(`Added tracks at position ${position}`);
    } else {
      _queue.value.push(...tracks);
      _logger.info('Added tracks to the end of the queue');
    }

    if (
      currentIndex.value === null ||
      currentIndex.value >= _queue.value.length
    ) {
      // PlayNext
    }

    return tracks.length;
  };

  const addTracksByIds = async (
    trackIds: string[],
    playImmediately?: boolean,
    group?: string,
    position?: number
  ) => {
    _logger.info(`Adding tracks by ids: ${trackIds.join(', ')}`);

    // Fetch tracks from API
    let result: TrackGetMultipleResp;
    try {
      const albumApi = new AlbumApi(_apiConfigProvider.getApiConfiguration());

      result = await albumApi.getTracks({
        requestBody: trackIds,
      });
    } catch (error) {
      _logger.error('Failed to fetch tracks', error);
      return 0;
    }

    if (result === null || result.tracks === null) {
      _logger.error('No tracks found');
      return 0;
    }

    if (result.notFound?.length) {
      _logger.error(`Tracks not found: ${result.notFound.join(', ')}`);
    }

    _logger.info(`Fetched ${result.tracks?.length} tracks`);

    // Restore order of the fetched tracks
    const tracks = result.tracks?.sort((a, b) => {
      return trackIds.indexOf(a.id!) - trackIds.indexOf(b.id!);
    });

    const queuedTracks = tracks?.map((track) => {
      return new QueuedTrack(track, null, group);
    });

    return _addTracks(queuedTracks!, playImmediately, position);
  };
  const addTrackById = async (
    trackId: string,
    playImmediately?: boolean,
    group?: string,
    position?: number
  ) => {
    return addTracksByIds([trackId], playImmediately, group, position);
  };

  const removeTrackByIndex = (index: number) => {
    if (index < 0 || index >= _queue.value.length) {
      _logger.error('Index out of bounds');
      return null;
    }

    // Need to update currentIndex if the removed track is before it
    if (_currentIndex.value !== null && index < _currentIndex.value) {
      _currentIndex.value = _currentIndex.value - 1;
    }

    // If the removed track is the current track, stop playback
    if (_currentIndex.value === index) {
      _audioService.stop();
      _currentIndex.value = null;
    }

    return _queue.value.splice(index, 1)[0];
  };

  const removeTrackByItemId = (itemId: string) => {
    const index = _queue.value.findIndex((track) => track.id === itemId);
    if (index === -1) {
      _logger.error('Item not found');
      return null;
    }

    return removeTrackByIndex(index);
  };

  const removeTracksByGroup = (group: string, futureOnly: boolean) => {
    // TODO: need to consider currentIndex
    const removedTracks: QueuedTrack[] = [];

    for (let i = _queue.value.length - 1; i >= 0; i--) {
      if (_queue.value[i].group === group) {
        removedTracks.push(removeTrackByIndex(i)!);
      }
    }

    return removedTracks;
  };

  const clear = () => {
    _queue.value = [];
    _currentIndex.value = null;
    _currentTrack.value = null;
  };

  const reorderQueue = (fromIndex: number, toIndex: number) => {
    if (
      fromIndex < 0 ||
      fromIndex >= _queue.value.length ||
      toIndex < 0 ||
      toIndex >= _queue.value.length
    ) {
      _logger.error('Index out of bounds');
      return;
    }

    const [removed] = _queue.value.splice(fromIndex, 1);
    _queue.value.splice(toIndex, 0, removed);

    if (_currentIndex.value === fromIndex) {
      _currentIndex.value = toIndex;
    } else if (
      fromIndex < _currentIndex.value! &&
      toIndex >= _currentIndex.value!
    ) {
      _currentIndex.value = _currentIndex.value! - 1;
    } else if (
      fromIndex > _currentIndex.value! &&
      toIndex <= _currentIndex.value!
    ) {
      _currentIndex.value = _currentIndex.value! + 1;
    }
  };

  const shuffle = () => {
    _logger.info('Shuffle not implemented');
  };

  const unshuffle = () => {
    _logger.info('Unshuffle not implemented');
  };

  const skipTo = async (index: number) => {
    if (index < 0 || index >= _queue.value.length) {
      _logger.error('Index out of bounds');
      return;
    }

    _currentIndex.value = index;
    _currentTrack.value = _queue.value[index];
    // // FIXME: trackFile?.url is deprecated, Use asset endpoint instead
    // // /api/asset/track/{trackId}
    const url = `https://api-music.marisad.me/api/asset/track/${_currentTrack.value.track.id}`;
    if (url) {
      await _audioService.play(url);
    } else {
      _logger.error('No url found for track');
    }
  };

  const playNext = async () => {
    if (_currentIndex.value === null) {
      _logger.info('No current track, setting to first track');
      await skipTo(0);
      return;
    }

    if (_currentIndex.value < _queue.value.length - 1) {
      await skipTo(_currentIndex.value + 1);
    } else {
      _logger.info('End of queue');
    }
  };

  const playPrevious = async () => {
    if (_currentIndex.value === null) {
      _logger.error('No current track');
      return;
    }

    if (_currentIndex.value > 0) {
      await skipTo(_currentIndex.value - 1);
    } else {
      _logger.info('Beginning of queue');
    }
  };

  return {
    queue,
    currentIndex,
    currentTrack,
    isCurrentTrackInFavorite,
    isShuffled,
    repeatMode,
    initialize,
    hasNext,
    hasPrevious,
    remainingTracksCount,
    addTracksByIds,
    addTrackById,
    removeTrackByIndex,
    removeTrackByItemId,
    removeTracksByGroup,
    clear,
    reorderQueue,
    shuffle,
    unshuffle,
    skipTo,
    playNext,
    playPrevious,
  } as QueueService;
}
