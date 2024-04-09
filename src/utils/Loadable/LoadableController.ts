import { ref, Ref } from 'vue';

export enum LoadingStatus {
  NotLoaded = 'NotLoaded',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error',
}

export type LoadableState<T> = {
  status: Ref<LoadingStatus>;
  state: Ref<T | null>;
  error: Ref<Error | null>;
  setError: (e: Error) => void;
  setLoading: () => void;
  setSuccess: (state: T) => void;
};

export function useLoadableController<T>(): LoadableState<T> {
  const _status = ref<LoadingStatus>(LoadingStatus.NotLoaded);
  const _state = ref<T | null>(null) as Ref<T | null>;
  const _error = ref<Error | null>(null);

  function setStatus(status: LoadingStatus) {
    _status.value = status;
  }

  function setError(e: Error) {
    _error.value = e;
    setStatus(LoadingStatus.Error);
  }

  function setSuccess(state: T) {
    _state.value = state;
    setStatus(LoadingStatus.Success);
  }

  function setLoading() {
    setStatus(LoadingStatus.Loading);
  }

  return {
    status: _status,
    state: _state,
    error: _error,
    setError,
    setSuccess,
    setLoading,
  } as LoadableState<T>;
}
