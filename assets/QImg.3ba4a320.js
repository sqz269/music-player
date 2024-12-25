import { g as computed, c as createComponent, r as ref, e as useTimeout, z as isRuntimeSsrPreHydration, o as onMounted, m as h, aR as Transition, q as hSlot, a7 as QSpinner, w as watch, b7 as vmIsDestroyed, t as getCurrentInstance } from "./index.404bd6b0.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUltZy4zYmE0YTMyMC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtcmF0aW8vdXNlLXJhdGlvLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbWcvUUltZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVJhdGlvUHJvcHMgPSB7XG4gIHJhdGlvOiBbIFN0cmluZywgTnVtYmVyIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBuYXR1cmFsUmF0aW8pIHtcbiAgLy8gcmV0dXJuIHJhdGlvU3R5bGVcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCByYXRpbyA9IE51bWJlcihcbiAgICAgIHByb3BzLnJhdGlvIHx8IChuYXR1cmFsUmF0aW8gIT09IHZvaWQgMCA/IG5hdHVyYWxSYXRpby52YWx1ZSA6IHZvaWQgMClcbiAgICApXG5cbiAgICByZXR1cm4gaXNOYU4ocmF0aW8pICE9PSB0cnVlICYmIHJhdGlvID4gMFxuICAgICAgPyB7IHBhZGRpbmdCb3R0b206IGAkeyAxMDAgLyByYXRpbyB9JWAgfVxuICAgICAgOiBudWxsXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBUcmFuc2l0aW9uLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuaW1wb3J0IHVzZVJhdGlvLCB7IHVzZVJhdGlvUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1yYXRpby91c2UtcmF0aW8uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC91c2UtdGltZW91dC5qcydcblxuY29uc3QgZGVmYXVsdFJhdGlvID0gMS43Nzc4IC8qIDE2LzkgKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJbWcnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUmF0aW9Qcm9wcyxcblxuICAgIHNyYzogU3RyaW5nLFxuICAgIHNyY3NldDogU3RyaW5nLFxuICAgIHNpemVzOiBTdHJpbmcsXG5cbiAgICBhbHQ6IFN0cmluZyxcbiAgICBjcm9zc29yaWdpbjogU3RyaW5nLFxuICAgIGRlY29kaW5nOiBTdHJpbmcsXG4gICAgcmVmZXJyZXJwb2xpY3k6IFN0cmluZyxcblxuICAgIGRyYWdnYWJsZTogQm9vbGVhbixcblxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsYXp5J1xuICAgIH0sXG4gICAgbG9hZGluZ1Nob3dEZWxheToge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG5cbiAgICBmZXRjaHByaW9yaXR5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYXV0bydcbiAgICB9LFxuICAgIHdpZHRoOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gICAgaW5pdGlhbFJhdGlvOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiBkZWZhdWx0UmF0aW9cbiAgICB9LFxuXG4gICAgcGxhY2Vob2xkZXJTcmM6IFN0cmluZyxcbiAgICBlcnJvclNyYzogU3RyaW5nLFxuXG4gICAgZml0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY292ZXInXG4gICAgfSxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzUwJSA1MCUnXG4gICAgfSxcblxuICAgIGltZ0NsYXNzOiBTdHJpbmcsXG4gICAgaW1nU3R5bGU6IE9iamVjdCxcblxuICAgIG5vU3Bpbm5lcjogQm9vbGVhbixcbiAgICBub05hdGl2ZU1lbnU6IEJvb2xlYW4sXG4gICAgbm9UcmFuc2l0aW9uOiBCb29sZWFuLFxuXG4gICAgc3Bpbm5lckNvbG9yOiBTdHJpbmcsXG4gICAgc3Bpbm5lclNpemU6IFN0cmluZ1xuICB9LFxuXG4gIGVtaXRzOiBbICdsb2FkJywgJ2Vycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgbmF0dXJhbFJhdGlvID0gcmVmKHByb3BzLmluaXRpYWxSYXRpbylcbiAgICBjb25zdCByYXRpb1N0eWxlID0gdXNlUmF0aW8ocHJvcHMsIG5hdHVyYWxSYXRpbylcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJMb2FkVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlTG9hZFRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlckxvYWRTaG93VGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlTG9hZFNob3dUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0IHBsYWNlaG9sZGVySW1nID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMucGxhY2Vob2xkZXJTcmMgIT09IHZvaWQgMFxuICAgICAgICA/IHsgc3JjOiBwcm9wcy5wbGFjZWhvbGRlclNyYyB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBlcnJvckltZyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmVycm9yU3JjICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IHNyYzogcHJvcHMuZXJyb3JTcmMsIF9fcWVycm9yOiB0cnVlIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IGltYWdlcyA9IFtcbiAgICAgIHJlZihudWxsKSxcbiAgICAgIHJlZihwbGFjZWhvbGRlckltZy52YWx1ZSlcbiAgICBdXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHJlZigwKVxuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhhc0Vycm9yID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1pbWcgcS1pbWctLSR7IHByb3BzLm5vTmF0aXZlTWVudSA9PT0gdHJ1ZSA/ICduby0nIDogJycgfW1lbnVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICB9KSlcblxuICAgIGNvbnN0IGltZ0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZ19faW1hZ2UgJHsgcHJvcHMuaW1nQ2xhc3MgIT09IHZvaWQgMCA/IHByb3BzLmltZ0NsYXNzICsgJyAnIDogJycgfWBcbiAgICAgICsgYHEtaW1nX19pbWFnZS0td2l0aCR7IHByb3BzLm5vVHJhbnNpdGlvbiA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYFxuICAgICAgKyAnIHEtaW1nX19pbWFnZS0tJ1xuICAgIClcblxuICAgIGNvbnN0IGltZ1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLmltZ1N0eWxlLFxuICAgICAgb2JqZWN0Rml0OiBwcm9wcy5maXQsXG4gICAgICBvYmplY3RQb3NpdGlvbjogcHJvcHMucG9zaXRpb25cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIHNldExvYWRpbmcgKCkge1xuICAgICAgcmVtb3ZlTG9hZFNob3dUaW1lb3V0KClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmdTaG93RGVsYXkgPT09IDApIHtcbiAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJMb2FkU2hvd1RpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgICB9LCBwcm9wcy5sb2FkaW5nU2hvd0RlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTG9hZGluZyAoKSB7XG4gICAgICByZW1vdmVMb2FkU2hvd1RpbWVvdXQoKVxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKHsgdGFyZ2V0IH0pIHtcbiAgICAgIGlmICh2bUlzRGVzdHJveWVkKHZtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVtb3ZlTG9hZFRpbWVvdXQoKVxuXG4gICAgICAgIG5hdHVyYWxSYXRpby52YWx1ZSA9IHRhcmdldC5uYXR1cmFsSGVpZ2h0ID09PSAwXG4gICAgICAgICAgPyAwLjVcbiAgICAgICAgICA6IHRhcmdldC5uYXR1cmFsV2lkdGggLyB0YXJnZXQubmF0dXJhbEhlaWdodFxuXG4gICAgICAgIHdhaXRGb3JDb21wbGV0ZW5lc3ModGFyZ2V0LCAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRGb3JDb21wbGV0ZW5lc3MgKHRhcmdldCwgY291bnQpIHtcbiAgICAgIC8vIHByb3RlY3QgYWdhaW5zdCBydW5uaW5nIGZvcmV2ZXJcbiAgICAgIGlmIChjb3VudCA9PT0gMTAwMCB8fCB2bUlzRGVzdHJveWVkKHZtKSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0YXJnZXQuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgb25SZWFkeSh0YXJnZXQpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVnaXN0ZXJMb2FkVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdEZvckNvbXBsZXRlbmVzcyh0YXJnZXQsIGNvdW50ICsgMSlcbiAgICAgICAgfSwgNTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSAodGFyZ2V0KSB7XG4gICAgICBpZiAodm1Jc0Rlc3Ryb3llZCh2bSkgPT09IHRydWUpIHJldHVyblxuXG4gICAgICBwb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uLnZhbHVlIF4gMVxuICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBdLnZhbHVlID0gbnVsbFxuXG4gICAgICBjbGVhckxvYWRpbmcoKVxuXG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnX19xZXJyb3InKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgIGhhc0Vycm9yLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgZW1pdCgnbG9hZCcsIHRhcmdldC5jdXJyZW50U3JjIHx8IHRhcmdldC5zcmMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FcnJvciAoZXJyKSB7XG4gICAgICByZW1vdmVMb2FkVGltZW91dCgpXG4gICAgICBjbGVhckxvYWRpbmcoKVxuXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IHRydWVcbiAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXS52YWx1ZSA9IGVycm9ySW1nLnZhbHVlXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF4gMSBdLnZhbHVlID0gcGxhY2Vob2xkZXJJbWcudmFsdWVcblxuICAgICAgZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2UgKGluZGV4KSB7XG4gICAgICBjb25zdCBpbWcgPSBpbWFnZXNbIGluZGV4IF0udmFsdWVcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5OiAnaW1nXycgKyBpbmRleCxcbiAgICAgICAgY2xhc3M6IGltZ0NsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUudmFsdWUsXG4gICAgICAgIGFsdDogcHJvcHMuYWx0LFxuICAgICAgICBjcm9zc29yaWdpbjogcHJvcHMuY3Jvc3NvcmlnaW4sXG4gICAgICAgIGRlY29kaW5nOiBwcm9wcy5kZWNvZGluZyxcbiAgICAgICAgcmVmZXJyZXJwb2xpY3k6IHByb3BzLnJlZmVycmVycG9saWN5LFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBsb2FkaW5nOiBwcm9wcy5sb2FkaW5nLFxuICAgICAgICBmZXRjaHByaW9yaXR5OiBwcm9wcy5mZXRjaHByaW9yaXR5LFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgIGRyYWdnYWJsZTogcHJvcHMuZHJhZ2dhYmxlLFxuICAgICAgICAuLi5pbWdcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uLnZhbHVlID09PSBpbmRleCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogZGF0YS5jbGFzcyArICdjdXJyZW50JyxcbiAgICAgICAgICBvbkxvYWQsXG4gICAgICAgICAgb25FcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEuY2xhc3MgKz0gJ2xvYWRlZCdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiAncS1pbWdfX2NvbnRhaW5lciBhYnNvbHV0ZS1mdWxsJywga2V5OiAnaW1nJyArIGluZGV4IH0sXG4gICAgICAgIGgoJ2ltZycsIGRhdGEpXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBpZiAoaXNMb2FkaW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1pbWdfX2NvbnRlbnQgYWJzb2x1dGUtZnVsbCBxLWFuY2hvci0tc2tpcCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHNbIGhhc0Vycm9yLnZhbHVlID09PSB0cnVlID8gJ2Vycm9yJyA6ICdkZWZhdWx0JyBdKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgIGNsYXNzOiAncS1pbWdfX2xvYWRpbmcgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgKFxuICAgICAgICBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBwcm9wcy5ub1NwaW5uZXIgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBoKFFTcGlubmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLnNwaW5uZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwcm9wcy5zcGlubmVyU2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgKSlcbiAgICB9XG5cbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fICE9PSB0cnVlKSB7XG4gICAgICBmdW5jdGlvbiB3YXRjaFNyYyAoKSB7XG4gICAgICAgIHdhdGNoKFxuICAgICAgICAgICgpID0+IChcbiAgICAgICAgICAgIHByb3BzLnNyYyB8fCBwcm9wcy5zcmNzZXQgfHwgcHJvcHMuc2l6ZXNcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBzcmM6IHByb3BzLnNyYyxcbiAgICAgICAgICAgICAgICAgIHNyY3NldDogcHJvcHMuc3Jjc2V0LFxuICAgICAgICAgICAgICAgICAgc2l6ZXM6IHByb3BzLnNpemVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICApLFxuICAgICAgICAgIGltZ1Byb3BzID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUxvYWRUaW1lb3V0KClcbiAgICAgICAgICAgIGhhc0Vycm9yLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgaWYgKGltZ1Byb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNsZWFyTG9hZGluZygpXG4gICAgICAgICAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXiAxIF0udmFsdWUgPSBwbGFjZWhvbGRlckltZy52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBpbWdQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgb25Nb3VudGVkKHdhdGNoU3JjKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdhdGNoU3JjKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IFtdXG5cbiAgICAgIGlmIChyYXRpb1N0eWxlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGtleTogJ2ZpbGxlcicsIHN0eWxlOiByYXRpb1N0eWxlLnZhbHVlIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGltYWdlc1sgMCBdLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBnZXRJbWFnZSgwKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChpbWFnZXNbIDEgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgZ2V0SW1hZ2UoMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb250ZW50LnB1c2goXG4gICAgICAgIGgoVHJhbnNpdGlvbiwgeyBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyB9LCBnZXRDb250ZW50KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYWluJyxcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ2ltZycsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMuYWx0XG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRU8sTUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixPQUFPLENBQUUsUUFBUSxNQUFRO0FBQzNCO0FBRWUsU0FBQSxTQUFVLE9BQU8sY0FBYztBQUU1QyxTQUFPLFNBQVMsTUFBTTtBQUNwQixVQUFNLFFBQVE7QUFBQSxNQUNaLE1BQU0s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
