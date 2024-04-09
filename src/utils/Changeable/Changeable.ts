import { watch, Ref, ref, WatchSource } from 'vue';

export default function useChangeableController<T, E>(
  watched: WatchSource<T>, // This can be a Ref<T>, a reactive object, or a getter function.
  onChange: (value: T) => Promise<E>,
  deepWatch = false
) {
  const state: Ref<E | null> = ref(null);
  watch(
    watched,
    async (value) => {
      state.value = await onChange(value);
    },
    { deep: deepWatch }
  );

  const reload = async () => {
    state.value = await onChange((watched as Ref<T>).value);
  };

  return {
    state,
    reload,
  };
}
