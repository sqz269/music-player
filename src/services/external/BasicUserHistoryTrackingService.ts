import { watch } from "vue";
import { authService, playlistService, queueService } from "../_services";
import HistoryTrackingService from "../domain/HistoryTrackingService";
import { addYears } from "date-fns";
import { TimeSpan } from "app/backend-service-api/src/models/TimeSpan";

export default function useBasicUserHistoryTrackingService(): HistoryTrackingService {
  const initialize = async () => {
    listenForPlaybackEvents();
  }

  const _shouldTrack = () => {
    return authService.isAuthenticated.value &&
      playlistService.isReady.value;
  }

  const listenForPlaybackEvents = () => {
    watch(queueService.currentTrack, async (newTrack, oldTrack) => {
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

  const addHistoryWithPosition = async (trackId: string, position: TimeSpan) => {
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
