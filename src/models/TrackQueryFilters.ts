import { TrackStratificationMode } from 'app/backend-service-api/src';

export interface TrackQueryFilters {
  releaseDateBegin?: Date;
  releaseDateEnd?: Date;
  circles?: string[];
  originalAlbums?: string[];
  originalTracks?: string[];
  stratificationMode?: TrackStratificationMode;
}
