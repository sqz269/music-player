import {
  AlbumOrderOptions,
  AlbumReadDto,
  SortOrder,
} from 'app/backend-service-api';

export default interface AlbumListGridViewViewModel {
  currentPage: number;
  totalPages: number;

  sortOrder: SortOrder;
  sortField: AlbumOrderOptions;

  albums: AlbumReadDto[];
}
