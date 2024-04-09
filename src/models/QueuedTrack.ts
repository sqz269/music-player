import { TrackReadDto } from 'app/backend-service-api';

export default class QueuedTrack {
  private _id: string;
  private _index: number | null;
  private _group: string;
  private _track: TrackReadDto;

  constructor(
    track: TrackReadDto,
    index: number | null,
    group: string | undefined
  ) {
    this._id = crypto.randomUUID();
    this._index = index;
    this._group = group || 'default';
    this._track = track;
  }

  public get id(): string {
    return this._id;
  }

  public get index(): number | null {
    return this._index;
  }

  public set index(index: number | null) {
    this._index = index;
  }

  public get group(): string {
    return this._group;
  }

  public set group(group: string) {
    this._group = group;
  }

  public get track(): TrackReadDto {
    return this._track;
  }
}
