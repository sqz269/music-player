import { TrackQueryFilters } from './TrackQueryFilters';

export class RadioConfigSLEntry {
  public readonly name: string;
  public filters: TrackQueryFilters | null = null;
  public seed: string | null = null;
  public offset = 0;

  constructor(name: string) {
    this.name = name;
  }
}
