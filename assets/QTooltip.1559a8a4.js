import { c as createComponent, u as useModelToggleProps, aF as useTransitionProps, b as useModelToggleEmits, r as ref, g as computed, aG as useTick, e as useTimeout, aH as useTransition, h as useModelToggle, aI as usePortal, w as watch, k as onBeforeUnmount, aq as cleanEvt, am as addEvt, as as getScrollTarget, m as h, aN as Transition, t as getCurrentInstance, q as hSlot, ac as stopAndPrevent } from "./index.1f91f6c0.js";
import { u as useAnchorProps, v as validatePosition, d as validateOffset, p as parsePosition, e as useScrollTarget, f as useAnchor, r as removeClickOutside, s as setPosition, c as clearSelection, g as addClickOutside } from "./QSelect.b14ee0f7.js";
var QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: "jump-down"
    },
    transitionHide: {
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => props.modelValue === null && props.persistent !== true && showing.value === true
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null)
        return;
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
export { QTooltip as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRvb2x0aXAuMTU1OWE4YTQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbHRpcC9RVG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VBbmNob3IsIHsgdXNlQW5jaG9yUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1hbmNob3IuanMnXG5pbXBvcnQgdXNlU2Nyb2xsVGFyZ2V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQb3J0YWwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcG9ydGFsLmpzJ1xuaW1wb3J0IHVzZVRyYW5zaXRpb24sIHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQsIGFkZEV2dCwgY2xlYW5FdnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYWRkQ2xpY2tPdXRzaWRlLCByZW1vdmVDbGlja091dHNpZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NsaWNrLW91dHNpZGUuanMnXG5pbXBvcnQge1xuICB2YWxpZGF0ZVBvc2l0aW9uLCB2YWxpZGF0ZU9mZnNldCwgc2V0UG9zaXRpb24sIHBhcnNlUG9zaXRpb25cbn0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9wb3NpdGlvbi1lbmdpbmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbHRpcCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUFuY2hvclByb3BzLFxuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlVHJhbnNpdGlvblByb3BzLFxuXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBtYXhXaWR0aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0cmFuc2l0aW9uU2hvdzoge1xuICAgICAgZGVmYXVsdDogJ2p1bXAtZG93bidcbiAgICB9LFxuICAgIHRyYW5zaXRpb25IaWRlOiB7XG4gICAgICBkZWZhdWx0OiAnanVtcC11cCdcbiAgICB9LFxuXG4gICAgYW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tIG1pZGRsZScsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIHNlbGY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbWlkZGxlJyxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVQb3NpdGlvblxuICAgIH0sXG4gICAgb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFsgMTQsIDE0IF0sXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlT2Zmc2V0XG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGhpZGVEZWxheToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgbGV0IHVud2F0Y2hQb3NpdGlvbiwgb2JzZXJ2ZXJcblxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBhbmNob3JPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiBwYXJzZVBvc2l0aW9uKHByb3BzLmFuY2hvciwgJHEubGFuZy5ydGwpKVxuICAgIGNvbnN0IHNlbGZPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiBwYXJzZVBvc2l0aW9uKHByb3BzLnNlbGYsICRxLmxhbmcucnRsKSlcbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWUpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljaywgcmVtb3ZlVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgdHJhbnNpdGlvblByb3BzLCB0cmFuc2l0aW9uU3R5bGUgfSA9IHVzZVRyYW5zaXRpb24ocHJvcHMpXG4gICAgY29uc3QgeyBsb2NhbFNjcm9sbFRhcmdldCwgY2hhbmdlU2Nyb2xsRXZlbnQsIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0IH0gPSB1c2VTY3JvbGxUYXJnZXQocHJvcHMsIGNvbmZpZ3VyZVNjcm9sbFRhcmdldClcblxuICAgIGNvbnN0IHsgYW5jaG9yRWwsIGNhblNob3csIGFuY2hvckV2ZW50cyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZywgY29uZmlndXJlQW5jaG9yRWwgfSlcblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdXNlTW9kZWxUb2dnbGUoe1xuICAgICAgc2hvd2luZywgY2FuU2hvdywgaGFuZGxlU2hvdywgaGFuZGxlSGlkZSxcbiAgICAgIGhpZGVPblJvdXRlQ2hhbmdlLFxuICAgICAgcHJvY2Vzc09uTW91bnQ6IHRydWVcbiAgICB9KVxuXG4gICAgT2JqZWN0LmFzc2lnbihhbmNob3JFdmVudHMsIHsgZGVsYXlTaG93LCBkZWxheUhpZGUgfSlcblxuICAgIGNvbnN0IHsgc2hvd1BvcnRhbCwgaGlkZVBvcnRhbCwgcmVuZGVyUG9ydGFsIH0gPSB1c2VQb3J0YWwodm0sIGlubmVyUmVmLCByZW5kZXJQb3J0YWxDb250ZW50LCAndG9vbHRpcCcpXG5cbiAgICAvLyBpZiB3ZSdyZSBvbiBtb2JpbGUsIGxldCdzIGltcHJvdmUgdGhlIGV4cGVyaWVuY2VcbiAgICAvLyBieSBjbG9zaW5nIGl0IHdoZW4gdXNlciB0YXBzIG91dHNpZGUgb2YgaXRcbiAgICBpZiAoJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBjbGlja091dHNpZGVQcm9wcyA9IHtcbiAgICAgICAgYW5jaG9yRWwsXG4gICAgICAgIGlubmVyUmVmLFxuICAgICAgICBvbkNsaWNrT3V0c2lkZSAoZSkge1xuICAgICAgICAgIGhpZGUoZSlcblxuICAgICAgICAgIC8vIHByZXZlbnQgY2xpY2sgaWYgaXQncyBvbiBhIGRpYWxvZyBiYWNrZHJvcFxuICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtZGlhbG9nX19iYWNrZHJvcCcpKSB7XG4gICAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgaGFzQ2xpY2tPdXRzaWRlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgLy8gaXQgZG9lc24ndCBoYXMgZXh0ZXJuYWwgbW9kZWxcbiAgICAgICAgLy8gKG51bGwgaXMgdGhlIGRlZmF1bHQgdmFsdWUpXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgLy8gYW5kIGl0J3Mgbm90IHBlcnNpc3RlbnRcbiAgICAgICAgJiYgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICApXG5cbiAgICAgIHdhdGNoKGhhc0NsaWNrT3V0c2lkZSwgdmFsID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSB2YWwgPT09IHRydWUgPyBhZGRDbGlja091dHNpZGUgOiByZW1vdmVDbGlja091dHNpZGVcbiAgICAgICAgZm4oY2xpY2tPdXRzaWRlUHJvcHMpXG4gICAgICB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGlja091dHNpZGUoY2xpY2tPdXRzaWRlUHJvcHMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCkge1xuICAgICAgc2hvd1BvcnRhbCgpXG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaWNrKCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGljaygoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdXBkYXRlUG9zaXRpb24oKSlcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpbm5lclJlZi52YWx1ZSwgeyBhdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKClcbiAgICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIH0pXG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB3YXRjaChcbiAgICAgICAgICAoKSA9PiAkcS5zY3JlZW4ud2lkdGggKyAnfCcgKyAkcS5zY3JlZW4uaGVpZ2h0ICsgJ3wnICsgcHJvcHMuc2VsZiArICd8JyArIHByb3BzLmFuY2hvciArICd8JyArICRxLmxhbmcucnRsLFxuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1BvcnRhbCh0cnVlKSAvLyBkb25lIHNob3dpbmcgcG9ydGFsXG4gICAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0KSB7XG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIGhpZGVQb3J0YWwoKVxuXG4gICAgICBhbmNob3JDbGVhbnVwKClcblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGlkZVBvcnRhbCh0cnVlKSAvLyBkb25lIGhpZGluZywgbm93IGRlc3Ryb3lcbiAgICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmNob3JDbGVhbnVwICgpIHtcbiAgICAgIGlmIChvYnNlcnZlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICBvYnNlcnZlciA9IHZvaWQgMFxuICAgICAgfVxuXG4gICAgICBpZiAodW53YXRjaFBvc2l0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgdW53YXRjaFBvc2l0aW9uKClcbiAgICAgICAgdW53YXRjaFBvc2l0aW9uID0gdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNsZWFuRXZ0KGFuY2hvckV2ZW50cywgJ3Rvb2x0aXBUZW1wJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoKSB7XG4gICAgICBzZXRQb3NpdGlvbih7XG4gICAgICAgIHRhcmdldEVsOiBpbm5lclJlZi52YWx1ZSxcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5vZmZzZXQsXG4gICAgICAgIGFuY2hvckVsOiBhbmNob3JFbC52YWx1ZSxcbiAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4udmFsdWUsXG4gICAgICAgIHNlbGZPcmlnaW46IHNlbGZPcmlnaW4udmFsdWUsXG4gICAgICAgIG1heEhlaWdodDogcHJvcHMubWF4SGVpZ2h0LFxuICAgICAgICBtYXhXaWR0aDogcHJvcHMubWF4V2lkdGhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsYXlTaG93IChldnQpIHtcbiAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBhbmNob3JFbC52YWx1ZVxuICAgICAgICBjb25zdCBldnRzID0gWyAndG91Y2htb3ZlJywgJ3RvdWNoY2FuY2VsJywgJ3RvdWNoZW5kJywgJ2NsaWNrJyBdXG4gICAgICAgICAgLm1hcChlID0+IChbIHRhcmdldCwgZSwgJ2RlbGF5SGlkZScsICdwYXNzaXZlQ2FwdHVyZScgXSkpXG5cbiAgICAgICAgYWRkRXZ0KGFuY2hvckV2ZW50cywgJ3Rvb2x0aXBUZW1wJywgZXZ0cylcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHsgc2hvdyhldnQpIH0sIHByb3BzLmRlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGF5SGlkZSAoZXZ0KSB7XG4gICAgICBpZiAoJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFuRXZ0KGFuY2hvckV2ZW50cywgJ3Rvb2x0aXBUZW1wJylcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAvLyBkZWxheSBuZWVkZWQgb3RoZXJ3aXNlIHNlbGVjdGlvbiBzdGlsbCBvY2N1cnNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgIH0sIDEwKVxuICAgICAgfVxuXG4gICAgICAvLyBzaG91bGQgcmVtb3ZlVGltZW91dCgpIGlmIHRoaXMgZ2V0cyByZW1vdmVkXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBoaWRlKGV2dCkgfSwgcHJvcHMuaGlkZURlbGF5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZUFuY2hvckVsICgpIHtcbiAgICAgIGlmIChwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlIHx8IGFuY2hvckVsLnZhbHVlID09PSBudWxsKSByZXR1cm5cblxuICAgICAgY29uc3QgZXZ0cyA9ICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICd0b3VjaHN0YXJ0JywgJ2RlbGF5U2hvdycsICdwYXNzaXZlJyBdXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdtb3VzZWVudGVyJywgJ2RlbGF5U2hvdycsICdwYXNzaXZlJyBdLFxuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ21vdXNlbGVhdmUnLCAnZGVsYXlIaWRlJywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgICBdXG5cbiAgICAgIGFkZEV2dChhbmNob3JFdmVudHMsICdhbmNob3InLCBldnRzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAoYW5jaG9yRWwudmFsdWUgIT09IG51bGwgfHwgcHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgPSBnZXRTY3JvbGxUYXJnZXQoYW5jaG9yRWwudmFsdWUsIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgICAgY29uc3QgZm4gPSBwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlXG4gICAgICAgICAgPyB1cGRhdGVQb3NpdGlvblxuICAgICAgICAgIDogaGlkZVxuXG4gICAgICAgIGNoYW5nZVNjcm9sbEV2ZW50KGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlLCBmbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb29sdGlwQ29udGVudCAoKSB7XG4gICAgICByZXR1cm4gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IGgoJ2RpdicsIHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAncS10b29sdGlwIHEtdG9vbHRpcC0tc3R5bGUgcS1wb3NpdGlvbi1lbmdpbmUgbm8tcG9pbnRlci1ldmVudHMnLFxuICAgICAgICAgICAgYXR0cnMuY2xhc3NcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICBhdHRycy5zdHlsZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25TdHlsZS52YWx1ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcm9sZTogJ3Rvb2x0aXAnXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQb3J0YWxDb250ZW50ICgpIHtcbiAgICAgIHJldHVybiBoKFRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcy52YWx1ZSwgZ2V0VG9vbHRpcENvbnRlbnQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGFuY2hvckNsZWFudXApXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7IHVwZGF0ZVBvc2l0aW9uIH0pXG5cbiAgICByZXR1cm4gcmVuZGVyUG9ydGFsXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFvQkEsSUFBQSxXQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLGNBQWM7QUFBQSxFQUVkLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNI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
