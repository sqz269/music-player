import { watch } from 'vue';
import { authService, playlistService, queueService } from '../_services';
import HistoryTrackingService from '../domain/HistoryTrackingService';

export default function useBasicUserHistoryTrackingService(): HistoryTrackingService {
  const initialize = async () => {
    listenForPlaybackEvents();
  }

  const _shouldTrack = () => {
    return authService.isAuthenticated.value &&
      playlistService.isReady.value;
  }

  const listenForPlaybackEvents = () => {
    watch(queueService.currentTrack, async (newTrack) => {
      if (!_shouldTrack()) {
        return;
      }

      if (newTrack) {
        await addHistory(newTrack.track.id!);
      }
    });
  }

  const addHistory = async (trackId: string) => {
    if (!_shouldTrack()) {
      return;
    }

    playlistService.addTrackToPlaylist(
      playlistService.history.value!.id!,
      [trackId]
    )
  }

  const addHistoryWithPosition = async (trackId: string) => {
    if (!_shouldTrack()) {
      return;
    }

    playlistService.addTrackToPlaylist(
      playlistService.history.value!.id!,
      [trackId],
      // position
    )
  }

  return {
    initialize,
    listenForPlaybackEvents,
    addHistory,
    addHistoryWithPosition
  }
}
