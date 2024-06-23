import { AlbumOrderOptions, SortOrder } from 'app/backend-service-api';

export default interface AlbumListGridViewInputModel {
  page: number;
  sortOrder: SortOrder;
  sortField: AlbumOrderOptions;
}
