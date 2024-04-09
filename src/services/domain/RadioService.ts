import { DeepReadonly, Ref } from 'vue';

export default interface RadioService {
  isActive: DeepReadonly<Ref<boolean>>;

  initialize: () => Promise<void>;
  activate: () => Promise<void>;
  deactivate: () => Promise<void>;
  toggle: () => Promise<void>;
}
