import { DeepReadonly, Ref } from 'vue';

export interface RadioFilters {
  releaseDateBegin: Date | null;
  releaseDateEnd: Date | null;
  circles: string[] | null;
  originalAlbums: string[] | null;
  originalTracks: string[] | null;
}

export default interface RadioService {
  isActive: DeepReadonly<Ref<boolean>>;
  filters: DeepReadonly<Ref<RadioFilters | null>>;

  initialize: () => Promise<void>;
  setFilters: (filters: RadioFilters | null) => Promise<void>;
  activate: () => Promise<void>;
  deactivate: () => Promise<void>;
  toggle: () => Promise<void>;
}
