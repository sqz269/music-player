import { readonly, ref, watch } from 'vue';
import QueueService, { QueueAddMode } from '../domain/QueueService';
import RadioService, { RadioFilters } from '../domain/RadioService';
import Logger from 'src/utils/Logger';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import { Configuration, TrackReadDto } from 'app/backend-service-api';
import { AlbumApi } from 'app/backend-service-api';

export default function useSimpleRadioService(
  queueService: QueueService,
  apiConfigProvider: ApiConfigurationProvider<Configuration>
): RadioService {
  const _logger = Logger.getLogger('SimpleRadioService');

  const _queueService = queueService;
  const _apiConfigProvider = apiConfigProvider;

  const _isActive = ref(false);
  const isActive = readonly(_isActive);

  const _filters = ref<RadioFilters | null>(null);
  const filters = readonly(_filters);

  const initialize = async () => {
    _logger.debug('Initializing SimpleRadioService');
    watch(_queueService.currentIndex, _onCurrentlyPlayingChanged);
    watch(_isActive, (newValue) => {
      if (newValue) {
        _onRadioActivated();
      } else {
        _onRadioDeactivated();
      }
    });

    _logger.debug('SimpleRadioService initialized');
  };

  const _getSampleTrack = async (): Promise<TrackReadDto[]> => {
    _logger.debug('Getting random sample track');
    const albumApi = new AlbumApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );

    const circleIds = _filters.value?.circles?.length ? _filters.value.circles : undefined;
    const originalAlbumIds = _filters.value?.originalAlbums?.length ? _filters.value.originalAlbums : undefined;
    const originalTrackIds = _filters.value?.originalTracks?.length ? _filters.value.originalTracks : undefined;

    console.log('Getting random sample track', {
      circleIds,
      originalAlbumIds,
      originalTrackIds,
    });

    const tracks = await albumApi.getRandomSampleTrack({
      releaseDateBegin: filters.value?.releaseDateBegin || undefined,
      releaseDateEnd: filters.value?.releaseDateEnd || undefined,
      circleIds,
      originalAlbumIds,
      originalTrackIds,
      limit: 10,
    });

    return tracks;
  }

  const _loadMoreTracks = async () => {
    _logger.debug('Loading more tracks for radio, filters: ', filters.value);

    const tracks = await _getSampleTrack();
    const trackIds = tracks.map((track) => track.id!);

    if (trackIds.length > 0) {
      _logger.debug(`Adding ${trackIds.length} tracks to the queue`);
      _queueService.addTracksByIds(trackIds, QueueAddMode.APPEND_LAST);
    }
  };

  const _onCurrentlyPlayingChanged = async () => {
    _logger.debug('Currently playing track changed');
    if (isActive.value && _queueService.remainingTracksCount() <= 10) {
      _logger.debug('Less than 10 tracks remaining, loading more tracks');
      await _loadMoreTracks();
    } else {
      _logger.debug('More than 10 tracks remaining, not loading more tracks');
    }
  };

  const _onRadioActivated = async () => {
    // Handle the radio activation
    _logger.debug('Radio activated');
    await _loadMoreTracks();
  };

  const _onRadioDeactivated = async () => {
    // Handle the radio deactivation
    _logger.debug('Radio deactivated');
    _queueService.removeTracksByGroup('radio', true);
  };

  const activate = async () => {
    // Activate the radio service
    _isActive.value = true;

    await _onRadioActivated();
  };

  const deactivate = async () => {
    // Deactivate the radio service
    _isActive.value = false;

    await _onRadioDeactivated();
  };

  const setFilters = async (filters: RadioFilters | null) => {
    // Set the filters for the radio service
    _logger.debug('Setting radio filters');
    _logger.debug('New filters: ', filters);
    _filters.value = filters;
  };

  const toggle = async () => {
    if (_isActive.value) {
      await deactivate();
    } else {
      await activate();
    }
  };

  return {
    isActive,
    filters,
    initialize,
    activate,
    deactivate,
    setFilters,
    toggle,
  } as RadioService;
}
