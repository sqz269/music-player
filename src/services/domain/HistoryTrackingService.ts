import { TimeSpan } from "app/backend-service-api/dist/models/TimeSpan";

export default interface HistoryTrackingService {
  initialize: () => Promise<void>;

  listenForPlaybackEvents: () => void;

  addHistory: (trackId: string) => Promise<void>;
  addHistoryWithPosition: (trackId: string, position: TimeSpan) => Promise<void>;
}
