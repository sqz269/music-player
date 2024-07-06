import { TrackQueryFilters } from 'src/models/TrackQueryFilters';
import { DeepReadonly, Ref } from 'vue';

export default interface RadioService {
  isActive: DeepReadonly<Ref<boolean>>;
  filters: DeepReadonly<Ref<TrackQueryFilters | null>>;

  initialize: () => Promise<void>;
  setFilters: (filters: TrackQueryFilters | null) => Promise<void>;
  activate: () => Promise<void>;
  deactivate: () => Promise<void>;
  toggle: () => Promise<void>;
}
