import {
  Configuration,
  PlaylistReadDto,
  PlaylistType,
} from 'app/backend-service-api';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import PlaylistService from '../domain/PlaylistService';
import { readonly, ref, watch } from 'vue';
import AuthenticationService from '../domain/AuthenticationService';
import Logger from 'src/utils/Logger';
import {
  PlaylistApi,
  PlaylistItemsApi,
  PlaylistVisibility,
} from 'app/backend-service-api';

export default function useApiOndemandPlaylistService(
  apiConfigProvider: ApiConfigurationProvider<Configuration>,
  authService: AuthenticationService
): PlaylistService {
  const _logger = Logger.getLogger('ApiOndemandPlaylistService');

  const _apiConfigProvider = apiConfigProvider;
  const _authenticationService = authService;

  const _isReady = ref(false);
  const _playlists = ref<PlaylistReadDto[]>([]);

  const _favorite = ref<PlaylistReadDto | null>(null);
  const _history = ref<PlaylistReadDto | null>(null);
  const _queue = ref<PlaylistReadDto | null>(null);

  const isReady = readonly(_isReady);
  const playlists = readonly(_playlists);

  const favorite = readonly(_favorite);
  const history = readonly(_history);
  const queue = readonly(_queue);

  const _update = async (): Promise<void> => {
    if (!_authenticationService.isAuthenticated.value) {
      _logger.error('_update called before user is authenticated');
      return;
    }

    _logger.info('Updating Playlists');
    const playlistApi = new PlaylistApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    const playlists = await playlistApi.getCurrentUserPlaylists();

    if (!playlists) {
      _logger.error('Failed to fetch playlists');
      return;
    }

    _playlists.value = playlists;

    const favorite = playlists.find(
      (playlist) => playlist.type === PlaylistType.Favorite
    );
    if (favorite) {
      _favorite.value = favorite;
    }

    const history = playlists.find(
      (playlist) => playlist.type === PlaylistType.History
    );
    if (history) {
      _history.value = history;
    }

    const queue = playlists.find(
      (playlist) => playlist.type === PlaylistType.Queue
    );
    if (queue) {
      _queue.value = queue;
    }

    _logger.info('Playlists updated');
    _isReady.value = true;
  };

  const _deinitialize = async (): Promise<void> => {
    _logger.info('Deinitializing');
  };

  const initialize = async (): Promise<void> => {
    if (
      !_authenticationService.isInitialized.value ||
      !_authenticationService.isAuthenticated.value
    ) {
      _logger.info(
        'Authentication service not initialized or User is not authenticated, Defering initialization'
      );

      watch(_authenticationService.isAuthenticated, async () => {
        if (_authenticationService.isAuthenticated.value) {
          _logger.info('User authenticated, initializing');
          await _update();
        } else {
          _logger.info('User logged out, deinitializing');
          await _deinitialize();
        }
      });
      return;
    }

    await _update();
  };

  const createPlaylist = async (
    name: string,
    visibility?: PlaylistVisibility
  ): Promise<void> => {
    if (!isReady.value) {
      _logger.error('createPlaylist called before initialization');
      return;
    }

    const playlistApi = new PlaylistApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    await playlistApi.addPlaylist({
      playlistInfo: {
        name: name,
        visibility: visibility,
      },
    });

    await _update();
  };

  const updatePlaylist = async (
    playlistId: string,
    name?: string,
    visibility?: PlaylistVisibility
  ): Promise<void> => {
    if (!isReady.value) {
      _logger.error('updatePlaylist called before initialization');
      return;
    }

    const playlistApi = new PlaylistApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    await playlistApi.updatePlaylistInfo({
      playlistId: playlistId,
      playlistInfo: {
        name: name,
        visibility: visibility,
      },
    });

    await _update();
  };

  const deletePlaylist = async (id: string): Promise<void> => {
    if (!isReady.value) {
      _logger.error('deletePlaylist called before initialization');
      return;
    }

    const playlistApi = new PlaylistApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    await playlistApi.deletePlaylist({
      playlistId: id,
    });

    await _update();
  };

  const getPlaylistTracks = async (
    playlistId: string,
    start: number,
    limit: number
  ): Promise<string[]> => {
    if (!isReady.value) {
      _logger.error('getPlaylistTracks called before initialization');
      return [];
    }

    const playlistItemsApi = new PlaylistItemsApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    const playlistItems = await playlistItemsApi.getPlaylistItems({
      playlistId: playlistId,
      start: start,
      limit: limit,
    });

    return playlistItems.map((item) => item.trackId!);
  };

  const addTrackToPlaylist = async (
    playlistId: string,
    trackIds: string[]
  ): Promise<void> => {
    if (!isReady.value) {
      _logger.error('addTrackToPlaylist called before initialization');
      return;
    }

    const playlistItemsApi = new PlaylistItemsApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    await playlistItemsApi.addTrackToPlaylist({
      playlistId: playlistId,
      requestBody: trackIds,
    });

    await _update();
  };

  const removeTrackFromPlaylist = async (
    playlistId: string,
    trackIds: string[]
  ): Promise<void> => {
    if (!isReady.value) {
      _logger.error('removeTrackFromPlaylist called before initialization');
      return;
    }

    const playlistItemsApi = new PlaylistItemsApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    await playlistItemsApi.deleteTrackFromPlaylist({
      playlistId: playlistId,
      requestBody: trackIds,
    });

    await _update();
  };

  const isTracksInPlaylist = async (
    playlistId: string,
    trackIds: string[]
  ): Promise<Map<string, boolean>> => {
    if (!isReady.value) {
      _logger.error('isTracksInPlaylist called before initialization');
      return new Map();
    }

    _logger.info(
      `Checking if tracks ${trackIds.join(', ')} in playlist ${playlistId}`
    );
    const playlistItemsApi = new PlaylistItemsApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );

    const map = new Map<string, boolean>();
    trackIds.forEach((trackId) => {
      map.set(trackId, false);
    });

    // TODO: implement this method in the backend
    // For now, we just going to retrieve all playlist
    // items and check if the track is in the playlist
    let offset = 0;
    while (true) {
      const items = await playlistItemsApi.getPlaylistItems({
        playlistId: playlistId,
        start: offset,
        limit: 50,
      });
      _logger.info(`Fetched ${items.length} items from playlist ${playlistId}`);

      if (items === undefined || items.length === 0) {
        break;
      }
      items.forEach((item) => {
        if (map.has(item.trackId!)) {
          map.set(item.trackId!, true);
        }
      });

      if (items.length < 50) {
        break;
      }
      offset += items.length;
    }

    _logger.info(
      `Tracks in playlist ${playlistId}: ${JSON.stringify(
        Object.fromEntries(map)
      )}`
    );

    return map;
  };

  const isTrackInPlaylist = async (
    playlistId: string,
    trackId: string
  ): Promise<boolean> => {
    return (await isTracksInPlaylist(playlistId, [trackId])).get(trackId)!;
  };

  return {
    isReady,
    playlists,
    favorite,
    history,
    queue,
    initialize,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getPlaylistTracks,
    addTrackToPlaylist,
    removeTrackFromPlaylist,
    isTracksInPlaylist,
    isTrackInPlaylist,
  } as PlaylistService;
}
