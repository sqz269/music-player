import { g as computed, c as createComponent, r as ref, e as useTimeout, z as isRuntimeSsrPreHydration, o as onMounted, m as h, aN as Transition, q as hSlot, a2 as QSpinner, w as watch, b6 as vmIsDestroyed, t as getCurrentInstance } from "./index.1f91f6c0.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
const defaultRatio = 1.7778;
var QImg = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    loadingShowDelay: {
      type: [Number, String],
      default: 0
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    errorSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();
    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();
    const placeholderImg = computed(() => props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null);
    const errorImg = computed(() => props.errorSrc !== void 0 ? { src: props.errorSrc, __qerror: true } : null);
    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition q-img__image--`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    function setLoading() {
      removeLoadShowTimeout();
      if (props.loadingShowDelay === 0) {
        isLoading.value = true;
        return;
      }
      registerLoadShowTimeout(() => {
        isLoading.value = true;
      }, props.loadingShowDelay);
    }
    function clearLoading() {
      removeLoadShowTimeout();
      isLoading.value = false;
    }
    function onLoad({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();
        naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
        waitForCompleteness(target, 1);
      }
    }
    function waitForCompleteness(target, count) {
      if (count === 1e3 || vmIsDestroyed(vm) === true)
        return;
      if (target.complete === true) {
        onReady(target);
      } else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(target) {
      if (vmIsDestroyed(vm) === true)
        return;
      position.value = position.value ^ 1;
      images[position.value].value = null;
      clearLoading();
      if (target.getAttribute("__qerror") !== "true") {
        hasError.value = false;
      }
      emit("load", target.currentSrc || target.src);
    }
    function onError(err) {
      removeLoadTimeout();
      clearLoading();
      hasError.value = true;
      images[position.value].value = errorImg.value;
      images[position.value ^ 1].value = placeholderImg.value;
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        Object.assign(data, {
          class: data.class + "current",
          onLoad,
          onError
        });
      } else {
        data.class += "loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value === false) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    {
      let watchSrc = function() {
        watch(
          () => props.src || props.srcset || props.sizes ? {
            src: props.src,
            srcset: props.srcset,
            sizes: props.sizes
          } : null,
          (imgProps) => {
            removeLoadTimeout();
            hasError.value = false;
            if (imgProps === null) {
              clearLoading();
              images[position.value ^ 1].value = placeholderImg.value;
            } else {
              setLoading();
            }
            images[position.value].value = imgProps;
          },
          { immediate: true }
        );
      };
      if (isRuntimeSsrPreHydration.value === true) {
        onMounted(watchSrc);
      } else {
        watchSrc();
      }
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (images[0].value !== null) {
        content.push(
          getImage(0)
        );
      }
      if (images[1].value !== null) {
        content.push(
          getImage(1)
        );
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        key: "main",
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
export { QImg as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUltZy42NTIzZWViZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcmF0aW8uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2ltZy9RSW1nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlUmF0aW9Qcm9wcyA9IHtcbiAgcmF0aW86IFsgU3RyaW5nLCBOdW1iZXIgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIG5hdHVyYWxSYXRpbykge1xuICAvLyByZXR1cm4gcmF0aW9TdHlsZVxuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHJhdGlvID0gTnVtYmVyKFxuICAgICAgcHJvcHMucmF0aW8gfHwgKG5hdHVyYWxSYXRpbyAhPT0gdm9pZCAwID8gbmF0dXJhbFJhdGlvLnZhbHVlIDogdm9pZCAwKVxuICAgIClcblxuICAgIHJldHVybiBpc05hTihyYXRpbykgIT09IHRydWUgJiYgcmF0aW8gPiAwXG4gICAgICA/IHsgcGFkZGluZ0JvdHRvbTogYCR7IDEwMCAvIHJhdGlvIH0lYCB9XG4gICAgICA6IG51bGxcbiAgfSlcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIFRyYW5zaXRpb24sIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFTcGlubmVyIGZyb20gJy4uL3NwaW5uZXIvUVNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5pbXBvcnQgdXNlUmF0aW8sIHsgdXNlUmF0aW9Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJhdGlvLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0LmpzJ1xuXG5jb25zdCBkZWZhdWx0UmF0aW8gPSAxLjc3NzggLyogMTYvOSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUltZycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSYXRpb1Byb3BzLFxuXG4gICAgc3JjOiBTdHJpbmcsXG4gICAgc3Jjc2V0OiBTdHJpbmcsXG4gICAgc2l6ZXM6IFN0cmluZyxcblxuICAgIGFsdDogU3RyaW5nLFxuICAgIGNyb3Nzb3JpZ2luOiBTdHJpbmcsXG4gICAgZGVjb2Rpbmc6IFN0cmluZyxcbiAgICByZWZlcnJlcnBvbGljeTogU3RyaW5nLFxuXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xhenknXG4gICAgfSxcbiAgICBsb2FkaW5nU2hvd0RlbGF5OiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGZldGNocHJpb3JpdHk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJ1xuICAgIH0sXG4gICAgd2lkdGg6IFN0cmluZyxcbiAgICBoZWlnaHQ6IFN0cmluZyxcbiAgICBpbml0aWFsUmF0aW86IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRSYXRpb1xuICAgIH0sXG5cbiAgICBwbGFjZWhvbGRlclNyYzogU3RyaW5nLFxuICAgIGVycm9yU3JjOiBTdHJpbmcsXG5cbiAgICBmaXQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjb3ZlcidcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnNTAlIDUwJSdcbiAgICB9LFxuXG4gICAgaW1nQ2xhc3M6IFN0cmluZyxcbiAgICBpbWdTdHlsZTogT2JqZWN0LFxuXG4gICAgbm9TcGlubmVyOiBCb29sZWFuLFxuICAgIG5vTmF0aXZlTWVudTogQm9vbGVhbixcbiAgICBub1RyYW5zaXRpb246IEJvb2xlYW4sXG5cbiAgICBzcGlubmVyQ29sb3I6IFN0cmluZyxcbiAgICBzcGlubmVyU2l6ZTogU3RyaW5nXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2xvYWQnLCAnZXJyb3InIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBuYXR1cmFsUmF0aW8gPSByZWYocHJvcHMuaW5pdGlhbFJhdGlvKVxuICAgIGNvbnN0IHJhdGlvU3R5bGUgPSB1c2VSYXRpbyhwcm9wcywgbmF0dXJhbFJhdGlvKVxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckxvYWRUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVMb2FkVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyTG9hZFNob3dUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVMb2FkU2hvd1RpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbWcgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5wbGFjZWhvbGRlclNyYyAhPT0gdm9pZCAwXG4gICAgICAgID8geyBzcmM6IHByb3BzLnBsYWNlaG9sZGVyU3JjIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IGVycm9ySW1nID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZXJyb3JTcmMgIT09IHZvaWQgMFxuICAgICAgICA/IHsgc3JjOiBwcm9wcy5lcnJvclNyYywgX19xZXJyb3I6IHRydWUgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgY29uc3QgaW1hZ2VzID0gW1xuICAgICAgcmVmKG51bGwpLFxuICAgICAgcmVmKHBsYWNlaG9sZGVySW1nLnZhbHVlKVxuICAgIF1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gcmVmKDApXG5cbiAgICBjb25zdCBpc0xvYWRpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaGFzRXJyb3IgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZyBxLWltZy0tJHsgcHJvcHMubm9OYXRpdmVNZW51ID09PSB0cnVlID8gJ25vLScgOiAnJyB9bWVudWBcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodFxuICAgIH0pKVxuXG4gICAgY29uc3QgaW1nQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtaW1nX19pbWFnZSAkeyBwcm9wcy5pbWdDbGFzcyAhPT0gdm9pZCAwID8gcHJvcHMuaW1nQ2xhc3MgKyAnICcgOiAnJyB9YFxuICAgICAgKyBgcS1pbWdfX2ltYWdlLS13aXRoJHsgcHJvcHMubm9UcmFuc2l0aW9uID09PSB0cnVlID8gJ291dCcgOiAnJyB9LXRyYW5zaXRpb25gXG4gICAgICArICcgcS1pbWdfX2ltYWdlLS0nXG4gICAgKVxuXG4gICAgY29uc3QgaW1nU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4ucHJvcHMuaW1nU3R5bGUsXG4gICAgICBvYmplY3RGaXQ6IHByb3BzLmZpdCxcbiAgICAgIG9iamVjdFBvc2l0aW9uOiBwcm9wcy5wb3NpdGlvblxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gc2V0TG9hZGluZyAoKSB7XG4gICAgICByZW1vdmVMb2FkU2hvd1RpbWVvdXQoKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZ1Nob3dEZWxheSA9PT0gMCkge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZWdpc3RlckxvYWRTaG93VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlzTG9hZGluZy52YWx1ZSA9IHRydWVcbiAgICAgIH0sIHByb3BzLmxvYWRpbmdTaG93RGVsYXkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJMb2FkaW5nICgpIHtcbiAgICAgIHJlbW92ZUxvYWRTaG93VGltZW91dCgpXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoeyB0YXJnZXQgfSkge1xuICAgICAgaWYgKHZtSXNEZXN0cm95ZWQodm0pID09PSBmYWxzZSkge1xuICAgICAgICByZW1vdmVMb2FkVGltZW91dCgpXG5cbiAgICAgICAgbmF0dXJhbFJhdGlvLnZhbHVlID0gdGFyZ2V0Lm5hdHVyYWxIZWlnaHQgPT09IDBcbiAgICAgICAgICA/IDAuNVxuICAgICAgICAgIDogdGFyZ2V0Lm5hdHVyYWxXaWR0aCAvIHRhcmdldC5uYXR1cmFsSGVpZ2h0XG5cbiAgICAgICAgd2FpdEZvckNvbXBsZXRlbmVzcyh0YXJnZXQsIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FpdEZvckNvbXBsZXRlbmVzcyAodGFyZ2V0LCBjb3VudCkge1xuICAgICAgLy8gcHJvdGVjdCBhZ2FpbnN0IHJ1bm5pbmcgZm9yZXZlclxuICAgICAgaWYgKGNvdW50ID09PSAxMDAwIHx8IHZtSXNEZXN0cm95ZWQodm0pID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgaWYgKHRhcmdldC5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBvblJlYWR5KHRhcmdldClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZWdpc3RlckxvYWRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3YWl0Rm9yQ29tcGxldGVuZXNzKHRhcmdldCwgY291bnQgKyAxKVxuICAgICAgICB9LCA1MClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5ICh0YXJnZXQpIHtcbiAgICAgIGlmICh2bUlzRGVzdHJveWVkKHZtKSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIHBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb24udmFsdWUgXiAxXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBudWxsXG5cbiAgICAgIGNsZWFyTG9hZGluZygpXG5cbiAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKCdfX3FlcnJvcicpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgaGFzRXJyb3IudmFsdWUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdsb2FkJywgdGFyZ2V0LmN1cnJlbnRTcmMgfHwgdGFyZ2V0LnNyYylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yIChlcnIpIHtcbiAgICAgIHJlbW92ZUxvYWRUaW1lb3V0KClcbiAgICAgIGNsZWFyTG9hZGluZygpXG5cbiAgICAgIGhhc0Vycm9yLnZhbHVlID0gdHJ1ZVxuICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBdLnZhbHVlID0gZXJyb3JJbWcudmFsdWVcbiAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXiAxIF0udmFsdWUgPSBwbGFjZWhvbGRlckltZy52YWx1ZVxuXG4gICAgICBlbWl0KCdlcnJvcicsIGVycilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbWFnZSAoaW5kZXgpIHtcbiAgICAgIGNvbnN0IGltZyA9IGltYWdlc1sgaW5kZXggXS52YWx1ZVxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBrZXk6ICdpbWdfJyArIGluZGV4LFxuICAgICAgICBjbGFzczogaW1nQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZS52YWx1ZSxcbiAgICAgICAgYWx0OiBwcm9wcy5hbHQsXG4gICAgICAgIGNyb3Nzb3JpZ2luOiBwcm9wcy5jcm9zc29yaWdpbixcbiAgICAgICAgZGVjb2Rpbmc6IHByb3BzLmRlY29kaW5nLFxuICAgICAgICByZWZlcnJlcnBvbGljeTogcHJvcHMucmVmZXJyZXJwb2xpY3ksXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGxvYWRpbmc6IHByb3BzLmxvYWRpbmcsXG4gICAgICAgIGZldGNocHJpb3JpdHk6IHByb3BzLmZldGNocHJpb3JpdHksXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgZHJhZ2dhYmxlOiBwcm9wcy5kcmFnZ2FibGUsXG4gICAgICAgIC4uLmltZ1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24udmFsdWUgPT09IGluZGV4KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIGNsYXNzOiBkYXRhLmNsYXNzICsgJ2N1cnJlbnQnLFxuICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICBvbkVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5jbGFzcyArPSAnbG9hZGVkJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6ICdxLWltZ19fY29udGFpbmVyIGFic29sdXRlLWZ1bGwnLCBrZXk6ICdpbWcnICsgaW5kZXggfSxcbiAgICAgICAgaCgnaW1nJywgZGF0YSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGlmIChpc0xvYWRpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnY29udGVudCcsXG4gICAgICAgICAgY2xhc3M6ICdxLWltZ19fY29udGVudCBhYnNvbHV0ZS1mdWxsIHEtYW5jaG9yLS1za2lwJ1xuICAgICAgICB9LCBoU2xvdChzbG90c1sgaGFzRXJyb3IudmFsdWUgPT09IHRydWUgPyAnZXJyb3InIDogJ2RlZmF1bHQnIF0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgY2xhc3M6ICdxLWltZ19fbG9hZGluZyBhYnNvbHV0ZS1mdWxsIGZsZXggZmxleC1jZW50ZXInXG4gICAgICB9LCAoXG4gICAgICAgIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdHMubG9hZGluZygpXG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIHByb3BzLm5vU3Bpbm5lciA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIGgoUVNwaW5uZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuc3Bpbm5lckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHByb3BzLnNwaW5uZXJTaXplXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICApKVxuICAgIH1cblxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUpIHtcbiAgICAgIGZ1bmN0aW9uIHdhdGNoU3JjICgpIHtcbiAgICAgICAgd2F0Y2goXG4gICAgICAgICAgKCkgPT4gKFxuICAgICAgICAgICAgcHJvcHMuc3JjIHx8IHByb3BzLnNyY3NldCB8fCBwcm9wcy5zaXplc1xuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogcHJvcHMuc3JjLFxuICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBwcm9wcy5zcmNzZXQsXG4gICAgICAgICAgICAgICAgICBzaXplczogcHJvcHMuc2l6ZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICksXG4gICAgICAgICAgaW1nUHJvcHMgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTG9hZFRpbWVvdXQoKVxuICAgICAgICAgICAgaGFzRXJyb3IudmFsdWUgPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAoaW1nUHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY2xlYXJMb2FkaW5nKClcbiAgICAgICAgICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBeIDEgXS52YWx1ZSA9IHBsYWNlaG9sZGVySW1nLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXS52YWx1ZSA9IGltZ1Byb3BzXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGltbWVkaWF0ZTogdHJ1ZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBvbk1vdW50ZWQod2F0Y2hTcmMpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2F0Y2hTcmMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gW11cblxuICAgICAgaWYgKHJhdGlvU3R5bGUudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsga2V5OiAnZmlsbGVyJywgc3R5bGU6IHJhdGlvU3R5bGUudmFsdWUgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2VzWyAwIF0udmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGdldEltYWdlKDApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlc1sgMSBdLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBnZXRJbWFnZSgxKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgaChUcmFuc2l0aW9uLCB7IG5hbWU6ICdxLXRyYW5zaXRpb24tLWZhZGUnIH0sIGdldENvbnRlbnQpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ21haW4nLFxuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5hbHRcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFTyxNQUFNLGdCQUFnQjtBQUFBLEVBQzNCLE9BQU8sQ0FBRSxRQUFRLE1BQVE7QUFDM0I7QUFFZSxTQUFBLFNBQVUsT0FBTyxjQUFjO0FBRTVDLFNBQU8sU0FBUyxNQUFNO0FBQ3BCLFVBQU0sUUFBUTtBQUFBLE1BQ1osTUFBTSxVQUFVLGlCQUFpQixTQUFTLGFBQWEsUUFBUTtBQUFBLElBQ2hFO0FBRUQsV0FBTyxN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
