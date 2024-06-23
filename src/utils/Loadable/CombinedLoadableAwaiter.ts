import { ref, watch } from 'vue';
import { LoadableState, LoadingStatus } from './LoadableController';

export type CombinedAwaiter = {
  onSuccess: () => void;
}

export function useCombinedLoadableAwaiter<T extends LoadableState<any>[]>(
  ...loadables: T
): LoadableState<void> {
  const _status = ref<LoadingStatus>(LoadingStatus.NotLoaded);
  const _state = ref<void | null>(null);
  const _error = ref<Error | null>(null);

  function setStatus(status: LoadingStatus) {
    _status.value = status;
  }

  function setError(e: Error) {
    _error.value = e;
    setStatus(LoadingStatus.Error);
  }

  function setSuccess() {
    setStatus(LoadingStatus.Success);
  }

  function setLoading() {
    setStatus(LoadingStatus.Loading);
  }

  // Watch all loadables and update combined status accordingly
  watch(
    () => loadables.map(loadable => loadable.status.value),
    (statuses) => {
      if (statuses.some(status => status === LoadingStatus.Loading)) {
        setLoading();
      } else if (statuses.some(status => status === LoadingStatus.Error)) {
        const error = loadables.find(loadable => loadable.status.value === LoadingStatus.Error)?.error.value;
        if (error) {
          setError(error);
        }
      } else if (statuses.every(status => status === LoadingStatus.Success)) {
        setSuccess();
      } else {
        setStatus(LoadingStatus.NotLoaded);
      }
    },
    { immediate: true }
  );

  return {
    status: _status,
    state: _state,
    error: _error,
    setError,
    setSuccess,
    setLoading,
  } as LoadableState<void>;
}
