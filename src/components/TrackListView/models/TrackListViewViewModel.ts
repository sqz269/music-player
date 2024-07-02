import { SortOrder, TrackOrderOptions, TrackReadDto } from 'app/backend-service-api';

export default interface TrackListViewViewModel {
  currentPage: number;
  totalPages: number;

  sortOrder: SortOrder;
  sortField: TrackOrderOptions;

  tracks: TrackReadDto[];
}
