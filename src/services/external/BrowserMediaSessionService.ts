import { Duration } from 'src/models/Duration';
import AudioService from '../domain/AudioService';
import MediaSessionService from '../domain/MediaSessionService';
import QueueService from '../domain/QueueService';
import Logger from 'src/utils/Logger';
import { TrackReadDto } from 'app/backend-service-api';
import { TrackInfo } from 'src/models/TrackInfo';
import { watch } from 'vue';
import QueuedTrack from 'src/models/QueuedTrack';

export default function useBrowserMediaSessionService(
  audioService: AudioService,
  queueService: QueueService
): MediaSessionService {
  const _logger = Logger.getLogger('BrowserMediaSessionService');

  const _attachEventHandlers = () => {
    watch(queueService.currentTrack, (track) => {
      if (track) {
        _setMediaMetadata(track.track as TrackReadDto);
      }

      if (audioService.isPlaying.value) {
        navigator.mediaSession.playbackState = 'playing';
      } else if (audioService.isPlaying.value === false) {
        navigator.mediaSession.playbackState = 'paused';
      }
    });

    watch(audioService.isPlaying, (isPlaying) => {
      if (isPlaying) {
        navigator.mediaSession.playbackState = 'playing';
      } else {
        navigator.mediaSession.playbackState = 'paused';
      }
    });

    watch(audioService.position, (position) => {
      if (position) {
        navigator.mediaSession.setPositionState({
          duration: audioService.duration.value?.toSeconds(),
          playbackRate: 1,
          position: position.toSeconds(),
        });
      } else {
        navigator.mediaSession.setPositionState({
          duration: audioService.duration.value?.toSeconds(),
          playbackRate: 1,
          position: 0,
        });
      }
    });

    watch(audioService.playbackCompletedStream, (completed) => {
      if (completed) {
        navigator.mediaSession.playbackState = 'none';
      }
    });
  };

  const _setMediaMetadata = (track: TrackReadDto) => {
    const trackInfo = TrackInfo.fromTrackReadDto(track);
    _logger.info('Setting media metadata', trackInfo);

    const artwork = [];
    if (trackInfo.thumbnails) {
      artwork.push({
        src: trackInfo.thumbnails.medium,
        sizes: '512x512',
        type: 'image/png',
      });
    }

    navigator.mediaSession.metadata = new MediaMetadata({
      title: trackInfo.name,
      artist: trackInfo.circle.map((c) => c.name).join(', '),
      album: trackInfo.albumName,
      artwork,
    });
  };

  const initialize = async () => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => {
        if (audioService.isPlaying.value) {
          audioService.pause();
        } else {
          audioService.resume();
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        audioService.pause();
      });

      navigator.mediaSession.setActionHandler('previoustrack', () => {
        queueService.playPrevious();
      });

      navigator.mediaSession.setActionHandler('nexttrack', () => {
        queueService.playNext();
      });

      // navigator.mediaSession.setActionHandler('seekbackward', () => {
      //   audioService.seekBackward();
      // });

      // navigator.mediaSession.setActionHandler('seekforward', () => {
      //   audioService.seekForward();
      // });

      navigator.mediaSession.setActionHandler('seekto', (details) => {
        audioService.seek(Duration.fromSeconds(details.seekTime!));
      });

      navigator.mediaSession.setActionHandler('stop', () => {
        audioService.stop();
      });

      _attachEventHandlers();
      _logger.info('Media Session API is initialized');
    } else {
      _logger.warn('Media Session API is not supported');
    }
  };

  return {
    initialize,
  };
}
