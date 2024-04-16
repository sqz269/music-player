import { UserProfileReadDto } from 'app/backend-service-api/src';
import { DeepReadonly, Ref } from 'vue';

export default interface UserProfileService {
  isReady: DeepReadonly<Ref<boolean>>;
  profile: DeepReadonly<Ref<UserProfileReadDto | null>>;

  initialize: () => Promise<void>;
}
