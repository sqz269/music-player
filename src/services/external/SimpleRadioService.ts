import { readonly, ref, watch } from 'vue';
import QueueService from '../domain/QueueService';
import RadioService from '../domain/RadioService';
import Logger from 'src/utils/Logger';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import { Configuration } from 'app/backend-service-api';
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

  const _loadMoreTracks = async () => {
    _logger.debug('Loading more tracks for radio');
    const albumApi = new AlbumApi(
      _apiConfigProvider.getApiConfigurationWithAuth()
    );
    const tracks = await albumApi.getRandomSampleTrack({
      limit: 10,
    });

    const trackIds = tracks.map((track) => track.id!);

    if (trackIds.length > 0) {
      _logger.debug(`Adding ${trackIds.length} tracks to the queue`);
      _queueService.addTracksByIds(trackIds, false, 'radio');
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

  const toggle = async () => {
    if (_isActive.value) {
      await deactivate();
    } else {
      await activate();
    }
  };

  return {
    isActive,
    initialize,
    activate,
    deactivate,
    toggle,
  } as RadioService;
}
