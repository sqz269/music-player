import { SortOrder, TrackOrderOptions } from 'app/backend-service-api';
import { TrackQueryFilters } from 'src/models/TrackQueryFilters';

export interface TrackListViewInputModel {
  filters?: TrackQueryFilters;

  page: number;
  sortOrder: SortOrder;
  sortField: TrackOrderOptions;
}
