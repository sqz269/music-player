import { DeepReadonly, readonly, ref, Ref } from 'vue';
import Hls, { ErrorData, Events } from 'hls.js';
import { Duration } from 'src/models/Duration';
import AudioService from '../domain/AudioService';
import Logger from 'src/utils/Logger';

export default function useAudioServiceHls(): AudioService {
  const _logger = Logger.getLogger('AudioServiceHls');

  let _audioPlayer: HTMLAudioElement | null;
  let _hls: Hls | null;

  const _isPlaying: Ref = ref(false);
  const _duration: Ref<Duration | null> = ref(null);
  const _position: Ref<Duration | null> = ref(null);
  const _bufferPosition: Ref<Duration | null> = ref(null);

  const _volume: Ref<number> = ref(1);

  const _playbackCompletedEvent: Ref<boolean> = ref(false);
  const _errorStream: Ref<string | null> = ref(null);

  const isPlaying: DeepReadonly<Ref<boolean>> = readonly(_isPlaying);
  const duration: DeepReadonly<Ref<Duration | null>> = readonly(_duration);
  const position: DeepReadonly<Ref<Duration | null>> = readonly(_position);
  const bufferPosition: DeepReadonly<Ref<Duration | null>> =
    readonly(_bufferPosition);

  const volume: DeepReadonly<Ref<number>> = readonly(_volume);

  const playbackCompletedStream: DeepReadonly<Ref<boolean>> = readonly(
    _playbackCompletedEvent
  );
  const errorStream: DeepReadonly<Ref<string | null>> = readonly(_errorStream);

  const _onError = (event: Events.ERROR, data: ErrorData) => {
    if (data.fatal) {
      switch (data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          if (data.response?.code === 404) {
            _logger.error('Failed to load Manifest. HTTP 404', data);
            return;
          }

          _logger.error(
            'Fatal network error encountered, retrying to recover',
            data
          );
          _hls?.startLoad();
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          _logger.error(
            'Fatal media error encountered, retrying to recover',
            data
          );
          _hls?.recoverMediaError();
          break;
        default:
          _logger.error(
            'Unknown fatal error encountered, destroying player',
            data
          );
          _hls?.destroy();
          break;
      }
    }
  };

  const _initializeEventStreams = () => {
    if (_hls === null || _audioPlayer === null) {
      return;
    }

    _hls.on(Events.ERROR, _onError);

    _hls.on(Events.MEDIA_ATTACHED, () => {
      _logger.debug('HLS Media Attached');
    });

    _hls.on(Events.MEDIA_DETACHED, () => {
      _logger.debug('HLS Media Detached');
    });

    _hls.on(Events.MANIFEST_PARSED, (event, data) => {
      _logger.debug(`HLS Manifest Parsed: ${data.levels.length} levels`);
    });

    _hls.on(Events.LEVEL_LOADED, (event, data) => {
      _logger.debug('HLS Level Loaded', data);
    });

    _hls.on(Events.LEVEL_UPDATED, (event, data) => {
      _logger.debug('HLS Level Updated', data);
    });

    _audioPlayer.onplay = () => {
      _isPlaying.value = true;

      if (_playbackCompletedEvent.value) {
        _playbackCompletedEvent.value = false;
      }
    };

    _audioPlayer.onpause = () => {
      _isPlaying.value = false;
    };

    _audioPlayer.onended = () => {
      _playbackCompletedEvent.value = true;
    };

    _audioPlayer.ontimeupdate = () => {
      _position.value = Duration.fromSeconds(_audioPlayer!.currentTime);
    };

    _audioPlayer.onprogress = () => {
      if (_audioPlayer === null) {
        return;
      }

      const buffered = _audioPlayer.buffered;
      if (buffered.length === 0) {
        _bufferPosition.value = Duration.zero();
      }

      const bufferEnd = buffered.end(buffered.length - 1);
      _bufferPosition.value = Duration.fromSeconds(bufferEnd);
    };
  };

  const initialize = async () => {
    if (!Hls.isSupported()) {
      _logger.error('HLS is not supported');
      throw new Error('HLS is not supported');
    }

    _logger.info('Initializing audio service');
    _audioPlayer = new Audio();
    _audioPlayer.preload = 'auto';
    document.body.appendChild(_audioPlayer);

    _hls = new Hls();

    _initializeEventStreams();
    _logger.info('Audio service initialized');
  };

  const play = async (src: string): Promise<Duration> => {
    if (_audioPlayer === null || _hls === null) {
      _logger.error('Audio player is not initialized');
      throw new Error('Audio player is not initialized');
    }

    _logger.info(`Playing audio from ${src}`);
    _hls.stopLoad();
    _hls.loadSource(src);
    _hls.attachMedia(_audioPlayer);

    await _audioPlayer.play();
    _duration.value = Duration.fromSeconds(_audioPlayer.duration);

    return _duration.value;
  };

  const pause = async () => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    await _audioPlayer.pause();
  };

  const resume = async () => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    await _audioPlayer.play();
  };

  const togglePause = async () => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    if (_audioPlayer.paused) {
      await _audioPlayer.play();
    } else {
      await _audioPlayer.pause();
    }
  };

  const stop = async () => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    await _audioPlayer.pause();
    _audioPlayer.currentTime = 0;
  };

  const seek = async (position: Duration) => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    _audioPlayer.currentTime = position.toSeconds();
  };

  const setVolume = async (volume: number) => {
    if (_audioPlayer === null) {
      throw new Error('Audio player is not initialized');
    }

    _audioPlayer.volume = volume;
    _volume.value = volume;
  };

  const getVolume = async () => {
    return _volume.value;
  };

  return {
    isPlaying,
    duration,
    position,
    bufferPosition,

    volume,

    playbackCompletedStream,
    errorStream,

    initialize,
    play,
    pause,
    togglePause,
    resume,
    stop,
    seek,

    setVolume,
    getVolume,
  } as AudioService;
}
