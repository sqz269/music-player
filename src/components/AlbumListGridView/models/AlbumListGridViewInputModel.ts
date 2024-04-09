import { AlbumOrderOptions, SortOrder } from 'app/backend-service-api';

export default interface AlbumListGridViewInputModel<T = any> {
  page: number;
  sortOrder: SortOrder;
  sortField: AlbumOrderOptions;
}
