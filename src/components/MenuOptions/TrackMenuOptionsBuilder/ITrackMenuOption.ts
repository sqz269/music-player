import { TrackReadDto } from 'app/backend-service-api/src';

export default abstract class ITrackMenuOption {
  abstract readonly label: string;
  abstract readonly icon?: string;

  abstract readonly trackData: TrackReadDto;
  abstract readonly albumData: TrackReadDto;

  public abstract onClick(): void;

  public abstract addCallback(callback: () => void): ITrackMenuOption;
}
