import { Q as QResizeObserver, T as TouchPan, a as QScrollObserver } from "./QScrollObserver.0c525b30.js";
import { c as createComponent, i as inject, e as emptyRenderFn, r as ref, a as computed, w as watch, o as onBeforeUnmount, h as hUniqueSlot, b as h, g as getCurrentInstance, l as layoutKey, u as useModelToggleProps, d as useDarkProps, f as useModelToggleEmits, j as useDark, k as useTimeout, m as useModelToggle, n as useHistory, p as onMounted, q as nextTick, s as withDirectives, t as hDir, v as hSlot, x as usePreventScroll, y as provide, z as pageContainerKey, A as isRuntimeSsrPreHydration, B as hMergeSlot, C as getScrollbarWidth, D as reactive, E as onUnmounted, F as defineComponent, P as PlaylistVisibility, G as openBlock, H as createBlock, I as withCtx, Q as QDialog, J as createVNode, K as QCardSection, L as QInput, M as QCardActions, N as QBtn, O as QCard, R as createBaseVNode, _ as _export_sfc, S as useRouter, T as unref, U as createElementBlock, V as QSeparator, W as createTextVNode, X as Fragment, Y as renderList, Z as QIcon, $ as toDisplayString, a0 as Ripple, a1 as QSpinner, a2 as TrackInfo, a3 as createCommentVNode, a4 as isNumber, a5 as isObject, a6 as useFormProps, a7 as position, a8 as useFormInject, a9 as useFormAttrs, aa as stopAndPrevent, ab as Duration, ac as onBeforeMount, ad as normalizeClass, ae as resolveComponent, af as KeepAlive, ag as resolveDynamicComponent } from "./index.cb74a5dd.js";
import { b as between, Q as QSelect } from "./QSelect.c461071b.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.bf92eb31.js";
import { Q as QList } from "./QList.33e6d12e.js";
import { u as useQuasar, o as outlinedPlaylistAdd, a as outlinedPlaylistPlay, b as outlinedHistory, c as outlinedFavoriteBorder, d as outlinedHome, m as matHome, e as outlinedSearch, f as matSearch, g as outlinedRadio, h as matRadio, Q as QBtnDropdown, i as outlinedAccountCircle, j as outlinedArrowBack, k as outlinedArrowForward, l as outlinedBugReport, n as matFavorite, p as outlinedPlaylistAddCircle, q as QTooltip, r as outlinedSkipPrevious, s as outlinedPlayArrow, t as outlinedPause, v as outlinedSkipNext, w as outlinedRepeat, x as outlinedShuffle, y as outlinedQueueMusic } from "./QTooltip.a0bffec8.js";
import { C as ClosePopup } from "./ClosePopup.6b8aa7b2.js";
import { Q as QImg } from "./QImg.b52c6012.js";
var QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const duration = 150;
var QDrawer = createComponent({
  name: "QDrawer",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useDarkProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (v) => ["default", "desktop", "mobile"].includes(v),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...useModelToggleEmits,
    "onLayout",
    "miniState"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QDrawer needs to be child of QLayout");
      return emptyRenderFn;
    }
    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;
    const belowBreakpoint = ref(
      props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint
    );
    const isMini = computed(
      () => props.mini === true && belowBreakpoint.value !== true
    );
    const size = computed(() => isMini.value === true ? props.miniWidth : props.width);
    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false ? true : props.modelValue === true
    );
    const hideOnRouteChange = computed(
      () => props.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );
    function handleShow(evt, noEvent) {
      addToHistory();
      evt !== false && $layout.animate();
      applyPosition(0);
      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[otherSide.value];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }
        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      } else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }
      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit("show", evt);
      }, duration);
    }
    function handleHide(evt, noEvent) {
      removeFromHistory();
      evt !== false && $layout.animate();
      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);
      cleanup();
      if (noEvent !== true) {
        registerTimeout(() => {
          emit("hide", evt);
        }, duration);
      } else {
        removeTimeout();
      }
    }
    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const instance = {
      belowBreakpoint,
      hide
    };
    const rightSide = computed(() => props.side === "right");
    const stateDirection = computed(
      () => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );
    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref(
      size.value * stateDirection.value
    );
    const otherSide = computed(() => rightSide.value === true ? "left" : "right");
    const offset = computed(() => showing.value === true && belowBreakpoint.value === false && props.overlay === false ? props.miniToOverlay === true ? props.miniWidth : size.value : 0);
    const fixed = computed(
      () => props.overlay === true || props.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") !== -1 || $q.platform.is.ios === true && $layout.isContainer.value === true
    );
    const onLayout = computed(
      () => props.overlay === false && showing.value === true && belowBreakpoint.value === false
    );
    const onScreenOverlay = computed(
      () => props.overlay === true && showing.value === true && belowBreakpoint.value === false
    );
    const backdropClass = computed(
      () => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : "")
    );
    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * 0.4})`
    }));
    const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
    const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
    const aboveStyle = computed(() => {
      const css = {};
      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${$layout.header.offset}px`;
        } else if ($layout.header.space === true) {
          css.top = `${$layout.header.size}px`;
        }
      }
      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${$layout.footer.offset}px`;
        } else if ($layout.footer.space === true) {
          css.bottom = `${$layout.footer.size}px`;
        }
      }
      return css;
    });
    const style = computed(() => {
      const style2 = {
        width: `${size.value}px`,
        transform: `translateX(${flagContentPosition.value}px)`
      };
      return belowBreakpoint.value === true ? style2 : Object.assign(style2, aboveStyle.value);
    });
    const contentClass = computed(
      () => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto")
    );
    const classes = computed(
      () => `q-drawer q-drawer--${props.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props.overlay === true || props.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : ""))
    );
    const openDirective = computed(() => {
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;
      return [[
        TouchPan,
        onOpenPan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const contentCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const backdropCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function updateBelowBreakpoint() {
      updateLocal(belowBreakpoint, props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
    }
    watch(belowBreakpoint, (val) => {
      if (val === true) {
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      } else if (props.overlay === false && props.behavior !== "mobile" && lastDesktopState !== false) {
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        } else {
          show(false);
        }
      }
    });
    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[oldSide] === instance) {
        $layout.instances[oldSide] = void 0;
        $layout[oldSide].space = false;
        $layout[oldSide].offset = 0;
      }
      $layout.instances[newSide] = instance;
      $layout[newSide].size = size.value;
      $layout[newSide].space = onLayout.value;
      $layout[newSide].offset = offset.value;
    });
    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });
    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );
    watch($layout.isContainer, (val) => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });
    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(onLayout, (val) => {
      emit("onLayout", val);
      updateLayout("space", val);
    });
    watch(rightSide, () => {
      applyPosition();
    });
    watch(size, (val) => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });
    watch(() => props.miniToOverlay, (val) => {
      updateSizeOnLayout(val, size.value);
    });
    watch(() => $q.lang.rtl, () => {
      applyPosition();
    });
    watch(() => props.mini, () => {
      if (props.noMiniAnimation)
        return;
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });
    watch(isMini, (val) => {
      emit("miniState", val);
    });
    function applyPosition(position2) {
      if (position2 === void 0) {
        nextTick(() => {
          position2 = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position2);
        });
      } else {
        if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position2) === size.value)) {
          position2 += stateDirection.value * $layout.scrollbarWidth.value;
        }
        flagContentPosition.value = position2;
      }
    }
    function applyBackdrop(x) {
      flagBackdropBg.value = x;
    }
    function setScrollable(v) {
      const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
      action !== "" && document.body.classList[action]("q-body--drawer-toggle");
    }
    function animateMini() {
      timerMini !== null && clearTimeout(timerMini);
      if (vm.proxy && vm.proxy.$el) {
        vm.proxy.$el.classList.add("q-drawer--mini-animate");
      }
      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        if (vm && vm.proxy && vm.proxy.$el) {
          vm.proxy.$el.classList.remove("q-drawer--mini-animate");
        }
      }, 150);
    }
    function onOpenPan(evt) {
      if (showing.value !== false) {
        return;
      }
      const width = size.value, position2 = between(evt.distance.x, 0, width);
      if (evt.isFinal === true) {
        const opened = position2 >= Math.min(75, width);
        if (opened === true) {
          show();
        } else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width - position2, 0) : Math.min(0, position2 - width)
      );
      applyBackdrop(
        between(position2 / width, 0, 1)
      );
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function onClosePan(evt) {
      if (showing.value !== true) {
        return;
      }
      const width = size.value, dir = evt.direction === props.side, position2 = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width) : 0;
      if (evt.isFinal === true) {
        const opened = Math.abs(position2) < Math.min(75, width);
        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        } else {
          hide();
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(stateDirection.value * position2);
      applyBackdrop(between(1 - position2 / width, 0, 1));
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function cleanup() {
      preventBodyScroll(false);
      setScrollable(true);
    }
    function updateLayout(prop, val) {
      $layout.update(props.side, prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function updateSizeOnLayout(miniToOverlay, size2) {
      updateLayout("size", miniToOverlay === true ? props.miniWidth : size2);
    }
    $layout.instances[props.side] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout("space", onLayout.value);
    updateLayout("offset", offset.value);
    if (props.showIfAbove === true && props.modelValue !== true && showing.value === true && props["onUpdate:modelValue"] !== void 0) {
      emit("update:modelValue", true);
    }
    onMounted(() => {
      emit("onLayout", onLayout.value);
      emit("miniState", isMini.value);
      lastDesktopState = props.showIfAbove === true;
      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };
      if ($layout.totalWidth.value !== 0) {
        nextTick(fn);
        return;
      }
      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;
        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        } else {
          fn();
        }
      });
    });
    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();
      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }
      showing.value === true && cleanup();
      if ($layout.instances[props.side] === instance) {
        $layout.instances[props.side] = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = [];
      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h("div", {
              key: "open",
              class: `q-drawer__opener fixed-${props.side}`,
              "aria-hidden": "true"
            }),
            openDirective.value
          )
        );
        child.push(
          hDir(
            "div",
            {
              ref: "backdrop",
              class: backdropClass.value,
              style: backdropStyle.value,
              "aria-hidden": "true",
              onClick: hide
            },
            void 0,
            "backdrop",
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }
      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h(
          "div",
          {
            ...attrs,
            key: "" + mini,
            class: [
              contentClass.value,
              attrs.class
            ]
          },
          mini === true ? slots.mini() : hSlot(slots.default)
        )
      ];
      if (props.elevated === true && showing.value === true) {
        content.push(
          h("div", {
            class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
          })
        );
      }
      child.push(
        hDir(
          "aside",
          { ref: "content", class: classes.value, style: style.value },
          content,
          "contentclose",
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );
      return h("div", { class: "q-drawer-container" }, child);
    };
  }
});
var QPageContainer = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
    provide(pageContainerKey, true);
    const style = computed(() => {
      const css = {};
      if ($layout.header.space === true) {
        css.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style.value
    }, hSlot(slots.default));
  }
});
var QFooter = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("F") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = $layout.scroll.value.position + containerHeight.value + size.value - $layout.height.value;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.bottom, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function updateRevealed() {
      if (props.reveal !== true)
        return;
      const { direction, position: position2, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position2 - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position2 - size.value < 300);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch([size, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      ]);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
var QLayout = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard")
    );
    const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }
      if (resized === true && props.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height2 }) {
      if (containerHeight.value !== height2) {
        containerHeight.value = height2;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props.container === true) {
        const width2 = height.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width2) {
          scrollbarWidth.value = width2;
        }
      }
    }
    let animateTimer = null;
    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),
      rootRef,
      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer === null) {
          if (el.scrollHeight > $q.screen.height) {
            return;
          }
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer);
        }
        timer = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer !== null && action === "remove") {
          clearTimeout(timer);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer = null;
      const el = document.body;
      watch(
        () => props.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Create Playlist", -1);
const _sfc_main$9 = defineComponent({
  __name: "PlaylistCreateDialog",
  props: {
    playlistService: {}
  },
  setup(__props) {
    const props = __props;
    const $q = useQuasar();
    const playlistVisiblityDropdownOptions = [
      {
        label: "Public",
        value: PlaylistVisibility.Public
      },
      {
        label: "Private",
        value: PlaylistVisibility.Private
      },
      {
        label: "Unlisted",
        value: PlaylistVisibility.Unlisted
      }
    ];
    const playlistName = ref("");
    const playlistVisibility = ref(PlaylistVisibility.Private);
    const createPlaylist = () => {
      var _a;
      (_a = props.playlistService) == null ? void 0 : _a.createPlaylist(playlistName.value, playlistVisibility.value).then(() => {
        $q.notify({
          position: "top",
          message: "Playlist created successfully",
          color: "positive"
        });
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        position: "top",
        "backdrop-filter": "brightness(60%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "500px", "max-width": "40vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$7
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    modelValue: playlistName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => playlistName.value = $event),
                    label: "Playlist Name"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QSelect, {
                    modelValue: playlistVisibility.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => playlistVisibility.value = $event),
                    options: playlistVisiblityDropdownOptions,
                    label: "Visibility"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    color: "primary",
                    flat: ""
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  withDirectives(createVNode(QBtn, {
                    label: "Create",
                    color: "primary",
                    flat: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => createPlaylist())
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var PlaylistCreateDialog = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "PlaylistCreateDialog.vue"]]);
const _hoisted_1$6 = { key: 1 };
const _hoisted_2$5 = { class: "text-weight-medium" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, " Create Playlist ", -1);
const _hoisted_4$2 = { class: "text-weight-medium" };
const _sfc_main$8 = defineComponent({
  __name: "PlaylistNavigationList",
  setup(__props) {
    const $q = useQuasar();
    const $router = useRouter();
    const authService = inject("authService");
    const playlistService = inject("playlistService");
    const collectionNavigations = [
      {
        text: "History",
        icon: outlinedHistory,
        route: { name: "history" },
        onClick: () => {
          gotoPlaylist(playlistService.history.value.id);
        }
      },
      {
        text: "Favorite",
        icon: outlinedFavoriteBorder,
        route: { name: "favorite" },
        onClick: () => {
          gotoPlaylist(playlistService.favorite.value.id);
        }
      }
    ];
    const gotoPlaylist = (playlistId) => {
      $router.push({ name: "Playlist", params: { playlistId } });
    };
    const showCreatePlaylistDialog = () => {
      $q.dialog(
        {
          component: PlaylistCreateDialog,
          componentProps: {
            playlistService
          }
        }
      );
    };
    return (_ctx, _cache) => {
      var _a;
      return !((_a = unref(playlistService)) == null ? void 0 : _a.isReady.value) ? (openBlock(), createBlock(QList, { key: 0 }, {
        default: withCtx(() => [
          createVNode(QItem, { "inset-level": 0.3 }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createBaseVNode("a", {
                  class: "underlined link",
                  onClick: _cache[0] || (_cache[0] = (...args) => {
                    var _a2, _b;
                    return ((_a2 = unref(authService)) == null ? void 0 : _a2.login) && ((_b = unref(authService)) == null ? void 0 : _b.login(...args));
                  })
                }, "Log in"),
                createTextVNode(" or "),
                createBaseVNode("a", {
                  class: "underlined link",
                  onClick: _cache[1] || (_cache[1] = (...args) => {
                    var _a2, _b;
                    return ((_a2 = unref(authService)) == null ? void 0 : _a2.signup) && ((_b = unref(authService)) == null ? void 0 : _b.signup(...args));
                  })
                }, "Sign up"),
                createTextVNode(" to create and manage playlists ")
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(QList, null, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(collectionNavigations, (link) => {
              return withDirectives(createVNode(QItem, {
                key: link.text,
                clickable: "",
                "inset-level": 0.3,
                exact: "",
                "active-class": "text-white bg-grey-8 text-weight-bolder",
                onClick: link.onClick
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: link.icon,
                        size: "24px"
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_2$5, toDisplayString(link.text), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onClick"]), [
                [Ripple]
              ]);
            }), 64))
          ]),
          _: 1
        }),
        createVNode(QSeparator, { class: "q-my-sm q-mx-lg" }),
        createVNode(QList, null, {
          default: withCtx(() => {
            var _a2;
            return [
              withDirectives((openBlock(), createBlock(QItem, {
                clickable: "",
                "inset-level": 0.3,
                onClick: showCreatePlaylistDialog
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: unref(outlinedPlaylistAdd),
                        size: "24px"
                      }, null, 8, ["name"])
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          _hoisted_3$3
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })), [
                [Ripple]
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList((_a2 = unref(playlistService)) == null ? void 0 : _a2.playlists.value, (playlist) => {
                return withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  key: playlist.id,
                  "inset-level": 0.3,
                  onClick: ($event) => gotoPlaylist(playlist.id)
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QIcon, {
                          name: unref(outlinedPlaylistPlay),
                          size: "24px"
                        }, null, 8, ["name"])
                      ]),
                      _: 1
                    }),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_4$2, toDisplayString(playlist.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"])), [
                  [Ripple]
                ]);
              }), 128))
            ];
          }),
          _: 1
        })
      ]));
    };
  }
});
var PlaylistNavigationList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "PlaylistNavigationList.vue"]]);
const _hoisted_1$5 = { class: "text-weight-medium" };
const _sfc_main$7 = defineComponent({
  __name: "NavigationRail",
  setup(__props) {
    const navigationItems = [
      {
        text: "Home",
        icon: outlinedHome,
        activeIcon: matHome,
        route: { name: "Home", params: { page: 1 } }
      },
      {
        text: "Search",
        icon: outlinedSearch,
        activeIcon: matSearch,
        route: { name: "Search" }
      },
      {
        text: "Radio",
        icon: outlinedRadio,
        activeIcon: matRadio,
        route: { name: "Radio" }
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QList), { padding: "" }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(navigationItems, (link) => {
            return withDirectives(createVNode(QItem, {
              key: link.text,
              clickable: "",
              "inset-level": 0.3,
              to: link.route,
              exact: ""
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: link.icon,
                      size: "24px"
                    }, null, 8, ["name"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_1$5, toDisplayString(link.text), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["to"]), [
              [Ripple]
            ]);
          }), 64)),
          createVNode(QSeparator, { class: "q-my-sm q-mx-lg" }),
          createVNode(PlaylistNavigationList)
        ]),
        _: 1
      });
    };
  }
});
var NavigationRail = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "NavigationRail.vue"]]);
var QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const space = h("div", { class: "q-space" });
var QSpace = createComponent({
  name: "QSpace",
  setup() {
    return () => space;
  }
});
var QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
  }
});
const _hoisted_1$4 = { key: 0 };
const _hoisted_2$4 = { key: 1 };
const _sfc_main$6 = defineComponent({
  __name: "AccountButton",
  setup(__props) {
    const authService = inject("authService");
    const onAccountDropdownClick = (evt) => {
      console.log("Item clicked", evt);
    };
    const onLogoutClick = () => {
      authService == null ? void 0 : authService.logout();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return ((_a = unref(authService)) == null ? void 0 : _a.isInitialized.value) ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        !((_b = unref(authService)) == null ? void 0 : _b.isAuthenticated.value) ? (openBlock(), createBlock(unref(QBtn), {
          key: 0,
          onClick: (_c = unref(authService)) == null ? void 0 : _c.login
        }, {
          default: withCtx(() => [
            createTextVNode(" Login ")
          ]),
          _: 1
        }, 8, ["onClick"])) : (openBlock(), createBlock(QBtnDropdown, {
          key: 1,
          icon: unref(outlinedAccountCircle),
          flat: "",
          rounded: ""
        }, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: onAccountDropdownClick
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Account")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ]),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: onAccountDropdownClick
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Settings")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ]),
                createVNode(QSeparator),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: onLogoutClick
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("Logout")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })), [
                  [ClosePopup]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["icon"]))
      ])) : (openBlock(), createElementBlock("span", _hoisted_2$4, [
        createVNode(QSpinner),
        createTextVNode(" Initializing Authentication")
      ]));
    };
  }
});
var AccountButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "AccountButton.vue"]]);
const _sfc_main$5 = defineComponent({
  __name: "AppBar",
  setup(__props) {
    const $router = useRouter();
    const goBack = () => {
      $router.back();
    };
    const goForward = () => {
      $router.forward();
    };
    const goDebug = () => {
      $router.push({
        name: "Debug"
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QToolbar, null, {
        default: withCtx(() => [
          createVNode(QToolbarTitle, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                round: "",
                dense: "",
                flat: "",
                size: "lg",
                icon: unref(outlinedArrowBack),
                onClick: goBack
              }, null, 8, ["icon"]),
              createVNode(QBtn, {
                round: "",
                dense: "",
                flat: "",
                size: "lg",
                icon: unref(outlinedArrowForward),
                onClick: goForward
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          createVNode(QSpace),
          createVNode(AccountButton),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            size: "lg",
            icon: unref(outlinedBugReport),
            onClick: goDebug
          }, null, 8, ["icon"])
        ]),
        _: 1
      });
    };
  }
});
var AppBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "AppBar.vue"]]);
function useChangeableController(watched, onChange, deepWatch = false) {
  const state = ref(null);
  watch(
    watched,
    async (value) => {
      state.value = await onChange(value);
    },
    { deep: deepWatch }
  );
  const reload = async () => {
    state.value = await onChange(watched.value);
  };
  return {
    state,
    reload
  };
}
var TrackCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "text-dark text-h6" };
const _hoisted_2$3 = { class: "row" };
const _hoisted_3$2 = {
  id: "artists",
  class: "metadata-entry"
};
const _hoisted_4$1 = ["onClick"];
const _sfc_main$4 = defineComponent({
  __name: "TrackCard",
  setup(__props) {
    const $router = useRouter();
    const queueService = inject("queueService");
    if (queueService === void 0) {
      throw new Error("Queue Service not found");
    }
    const playlistService = inject("playlistService");
    const isCurrentTrackInFavoritePlaylistChangeableController = useChangeableController(
      queueService.currentTrack,
      async (track) => {
        if (track === null) {
          return false;
        }
        const result = await playlistService.isTrackInPlaylist(
          playlistService.favorite.value.id,
          track.track.id
        );
        return result;
      }
    );
    const currentTrack = computed(() => {
      if (queueService.currentTrack.value === null) {
        return null;
      }
      return TrackInfo.fromTrackReadDto(
        queueService.currentTrack.value.track
      );
    });
    const onFavIconClick = async () => {
      if (isCurrentTrackInFavoritePlaylistChangeableController.state.value) {
        await (playlistService == null ? void 0 : playlistService.removeTrackFromPlaylist(
          playlistService.favorite.value.id,
          [queueService.currentTrack.value.track.id]
        ));
      } else {
        await (playlistService == null ? void 0 : playlistService.addTrackToPlaylist(
          playlistService.favorite.value.id,
          [queueService.currentTrack.value.track.id]
        ));
      }
      isCurrentTrackInFavoritePlaylistChangeableController.reload();
    };
    const gotoCircle = (circleId) => {
      $router.push({
        name: "CircleAlbums",
        params: { circleId: circleId.toString(), page: "1" }
      });
    };
    const gotoAlbum = (albumId) => {
      $router.push({
        name: "Album",
        params: { albumId: albumId.toString() }
      });
    };
    return (_ctx, _cache) => {
      return currentTrack.value !== null ? (openBlock(), createBlock(QCard, {
        key: 0,
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { horizontal: "" }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(QImg, {
                  style: { "height": "125px", "max-width": "125px" },
                  src: (_a = currentTrack.value.thumbnails) == null ? void 0 : _a.medium
                }, null, 8, ["src"]),
                createVNode(QCardSection, { class: "justify-around q-py-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$3, toDisplayString(currentTrack.value.name), 1),
                    createBaseVNode("div", {
                      class: "text-dark text-subtitle2 link",
                      onClick: _cache[0] || (_cache[0] = ($event) => gotoAlbum(currentTrack.value.albumId))
                    }, toDisplayString(currentTrack.value.albumName), 1),
                    createBaseVNode("div", _hoisted_2$3, [
                      createBaseVNode("div", _hoisted_3$2, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(currentTrack.value.circle, (circle, index) => {
                          return openBlock(), createElementBlock("span", {
                            class: "text-dark text-subtitle1 text-bold cursor-pointer artist-name",
                            key: index,
                            onClick: ($event) => gotoCircle(circle.id)
                          }, toDisplayString(circle.name), 9, _hoisted_4$1);
                        }), 128))
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, {
                  vertical: "",
                  class: "justify-around q-px-md"
                }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      size: "md",
                      color: "red",
                      icon: unref(isCurrentTrackInFavoritePlaylistChangeableController).state.value ? unref(matFavorite) : unref(outlinedFavoriteBorder),
                      onClick: onFavIconClick
                    }, null, 8, ["icon"]),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      size: "md",
                      color: "accent",
                      icon: unref(outlinedPlaylistAddCircle)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var TrackCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-44274ed2"], ["__file", "TrackCard.vue"]]);
const markerPrefixClass = "q-slider__marker-labels";
const defaultMarkerConvertFn = (v) => ({ value: v });
const defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
const keyCodes = [34, 37, 40, 33, 39, 38];
const useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  hideSelection: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
const useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue, updatePosition, getDragging, formAttrs }) {
  const { props, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = useDark(props, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props.vertical === true ? props.reverse === true : props.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props.innerMin) === true || props.innerMin < props.min ? props.min : props.innerMin);
  const innerMax = computed(() => isNaN(props.innerMax) === true || props.innerMax > props.max ? props.max : props.innerMax);
  const editable = computed(() => props.disable !== true && props.readonly !== true && innerMin.value < innerMax.value);
  const roundValueFn = computed(() => {
    if (props.step === 0) {
      return (v) => v;
    }
    const decimals = (String(props.step).trim().split(".")[1] || "").length;
    return (v) => parseFloat(v.toFixed(decimals));
  });
  const keyStep = computed(() => props.step === 0 ? 1 : props.step);
  const tabindex = computed(() => editable.value === true ? props.tabindex || 0 : -1);
  const trackLen = computed(() => props.max - props.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props.vertical === true ? "width" : "height");
  const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props.step
    };
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props.vertical === true ? "row" : "column") + (props.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props.label || props.labelAlways === true ? " q-slider--label" : "") + (props.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props.selectionColor || props.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props.markerLabelsClass !== void 0 ? ` ${props.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props.trackSize };
    if (props.trackImg !== void 0) {
      acc.backgroundImage = `url(${props.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props.innerTrackColor !== void 0 ? ` bg-${props.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const innerDiff = innerMaxRatio.value - innerMinRatio.value;
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: innerDiff === 0 ? "2px" : `${100 * innerDiff}%`
    };
    if (props.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step } = props;
    let model = min + ratio * (max - min);
    if (step > 0) {
      const modulo = (model - innerMin.value) % step;
      model += (Math.abs(modulo) >= step / 2 ? (modulo < 0 ? -1 : 1) * step : 0) - modulo;
    }
    model = roundValueFn.value(model);
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props.markers) === true ? props.markers : keyStep.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step = markerStep.value;
    const max = props.max;
    let value = props.min;
    do {
      acc.push(value);
      value += step;
    } while (value < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    return getMarkerList(props.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    const size = innerBarLen.value === 0 ? "2px" : 100 * markerStep.value / innerBarLen.value;
    return {
      ...innerBarStyle.value,
      backgroundSize: props.vertical === true ? `2px ${size}%` : `${size}% 2px`
    };
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value) => {
        const item = def(value);
        return isObject(item) === true ? { ...item, value } : { value, label: item };
      });
    }
    const filterFn = ({ value }) => value >= props.min && value <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value = Number(key);
      return isObject(item) === true ? { ...item, value } : { value, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue();
    }
  }
  function onBlur() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue(true);
    onBlur();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue(true);
  }
  function onKeyup(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style = computed(() => ({
      width: props.thumbSize,
      height: props.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props.label === true || props.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props.name !== void 0 && props.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props.markerLabels !== false) {
      const action = props.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      roundValueFn,
      keyStep,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur,
      onKeyup,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
const getNodeData = () => ({});
var QSlider = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props.modelValue === null ? state.innerMin.value : between(props.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props.labelValue !== void 0 ? props.labelValue : model.value),
      thumbColor: computed(() => props.thumbColor || props.color),
      labelColor: computed(() => props.labelColor),
      labelTextColor: computed(() => props.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue(change) {
      if (model.value !== props.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props.snap !== true || props.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.keyStep.value, offset = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        state.roundValueFn.value(model.value + offset),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props.modelValue
      }, content);
    };
  }
});
var MediaControl_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "row full-width justify-center q-pt-sm" };
const _hoisted_2$2 = {
  key: 0,
  class: "row full-width q-pt-lg"
};
const _sfc_main$3 = defineComponent({
  __name: "MediaControl",
  setup(__props) {
    const audioService = inject("audioService");
    if (audioService === void 0) {
      throw new Error("Audio Service not found");
    }
    const queueService = inject("queueService");
    if (queueService === void 0) {
      throw new Error("Queue Service not found");
    }
    const currentTime = ref(0);
    const currentTimeString = computed(() => {
      return Duration.fromSeconds(currentTime.value).toDurationString();
    });
    const totalTime = computed(() => {
      var _a, _b;
      return ((_b = (_a = audioService.duration) == null ? void 0 : _a.value) == null ? void 0 : _b.toSeconds()) || 0;
    });
    const totalTimeString = computed(() => {
      return Duration.fromSeconds(totalTime.value).toDurationString();
    });
    const bufferedTime = computed(() => {
      var _a, _b;
      return ((_b = (_a = audioService.bufferPosition) == null ? void 0 : _a.value) == null ? void 0 : _b.toSeconds()) || 0;
    });
    const hasNext = computed(() => {
      return queueService.hasNext;
    });
    const hasPrevious = computed(() => {
      return queueService.hasPrevious;
    });
    const isPanning = ref(false);
    const isUpdating = ref(false);
    const onPan = (phase) => {
      if (phase === "start") {
        isPanning.value = true;
      } else if (phase === "end") {
        isPanning.value = false;
        if (audioService !== void 0) {
          isPanning.value = false;
          isUpdating.value = true;
          audioService.seek(Duration.fromSeconds(currentTime.value)).then(() => {
            isUpdating.value = false;
          });
        }
      }
    };
    const onChange = (value) => {
      if (isPanning.value) {
        return;
      }
      isUpdating.value = true;
      audioService == null ? void 0 : audioService.seek(Duration.fromSeconds(value || 0)).then(() => {
        isUpdating.value = false;
      });
    };
    onBeforeMount(() => {
      watch(audioService == null ? void 0 : audioService.position, (value) => {
        if (!isUpdating.value) {
          currentTime.value = (value == null ? void 0 : value.toSeconds()) || 0;
        }
      });
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(QBtn, {
            fab: "",
            flat: "",
            size: "md",
            color: hasPrevious.value.value ? "grey-10" : "grey-5",
            disable: !hasPrevious.value.value,
            icon: unref(outlinedSkipPrevious),
            onClick: (_a = unref(queueService)) == null ? void 0 : _a.playPrevious
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(hasPrevious.value.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["color", "disable", "icon", "onClick"]),
          createVNode(QBtn, {
            fab: "",
            class: "q-mx-md",
            round: "",
            size: "md",
            color: "grey-10",
            icon: !((_b = unref(audioService)) == null ? void 0 : _b.isPlaying.value) ? unref(outlinedPlayArrow) : unref(outlinedPause),
            onClick: (_c = unref(audioService)) == null ? void 0 : _c.togglePause
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString(!((_a2 = unref(audioService)) == null ? void 0 : _a2.isPlaying.value) ? "Play" : "Pause"), 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon", "onClick"]),
          createVNode(QBtn, {
            flat: "",
            fab: "",
            size: "md",
            color: hasNext.value.value ? "grey-10" : "grey-5",
            disable: !hasNext.value.value,
            icon: unref(outlinedSkipNext),
            onClick: (_d = unref(queueService)) == null ? void 0 : _d.playNext
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode("Next")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["color", "disable", "icon", "onClick"])
        ]),
        ((_e = unref(queueService)) == null ? void 0 : _e.currentTrack) !== null ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(QItemSection, { side: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(currentTimeString.value), 1)
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QSlider, {
                class: "progress-smooth",
                modelValue: currentTime.value,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => currentTime.value = $event),
                  onChange
                ],
                onPan,
                "inner-min": 0,
                "inner-max": bufferedTime.value,
                min: 0,
                max: totalTime.value,
                step: 0.1
              }, null, 8, ["modelValue", "inner-max", "max"])
            ]),
            _: 1
          }),
          createVNode(QItemSection, { side: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(totalTimeString.value), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var MediaControl = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fff8e728"], ["__file", "MediaControl.vue"]]);
const _hoisted_1$1 = { class: "row full-width full-height justify-end items-center" };
const _hoisted_2$1 = { class: "col-8 row justify-end" };
const _hoisted_3$1 = { class: "col" };
const _sfc_main$2 = defineComponent({
  __name: "QueueControl",
  setup(__props) {
    const $router = useRouter();
    const radioService = inject("radioService");
    const audioService = inject("audioService");
    const volume = ref(1);
    const gotoQueuePage = () => {
      $router.push({
        name: "Queue"
      });
    };
    watch(volume, (newVolume) => {
      audioService == null ? void 0 : audioService.setVolume(newVolume);
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedRepeat),
            class: "text-dark q-mx-sm"
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode("Repeat")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedShuffle),
            class: "text-dark q-mx-sm"
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode("Shuffle")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedQueueMusic),
            class: "text-dark q-mx-sm",
            onClick: gotoQueuePage
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode("Queue")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(matRadio),
            class: normalizeClass(["q-mx-sm", ((_a = unref(radioService)) == null ? void 0 : _a.isActive.value) ? "text-primary" : "text-dark"]),
            onClick: _cache[0] || (_cache[0] = ($event) => {
              var _a2;
              return (_a2 = unref(radioService)) == null ? void 0 : _a2.toggle();
            })
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(toDisplayString((_a2 = unref(radioService)) == null ? void 0 : _a2.isActive), 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon", "class"])
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(QItem, { class: "full-width" }, {
            default: withCtx(() => [
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: "volume_up",
                    class: "text-dark"
                  })
                ]),
                _: 1
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QSlider, {
                    modelValue: volume.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => volume.value = $event),
                    min: 0,
                    max: 1,
                    step: 0.01,
                    style: { "max-width": "100px" },
                    "thumb-size": "10px"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
var QueueControl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "QueueControl.vue"]]);
const _hoisted_1 = { class: "row full-width full-height justify-evenly" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "col-5" };
const _hoisted_4 = { class: "col-3" };
const _sfc_main$1 = defineComponent({
  __name: "BottomPlayerControlBar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QToolbar), { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(TrackCard)
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(MediaControl)
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(QueueControl)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var BottomPlayerControlBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "BottomPlayerControlBar.vue"]]);
const _sfc_main = defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const leftDrawerOpen = ref(false);
    ref(true);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh LpR fFf" }, {
        default: withCtx(() => [
          createVNode(QHeader, { class: "bg-primary text-white" }, {
            default: withCtx(() => [
              createVNode(AppBar)
            ]),
            _: 1
          }),
          createVNode(QDrawer, {
            "show-if-above": "",
            modelValue: leftDrawerOpen.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leftDrawerOpen.value = $event),
            side: "left",
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(NavigationRail)
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component }) => [
                  (openBlock(), createBlock(KeepAlive, { include: ["HomePage", "CirclePage", "QueuePage"] }, [
                    (openBlock(), createBlock(resolveDynamicComponent(Component)))
                  ], 1024))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QFooter, {
            bordered: "",
            class: "bg-white"
          }, {
            default: withCtx(() => [
              createVNode(BottomPlayerControlBar)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "MainLayout.vue"]]);
export { MainLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC44MzQzMTI3Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZHJhd2VyL1FEcmF3ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2VDb250YWluZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9sYXlvdXQvUUxheW91dC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvUGxheWxpc3RDcmVhdGVEaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmF2Z2F0aW9uUmFpbC9QbGF5bGlzdE5hdmlnYXRpb25MaXN0LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmdhdGlvblJhaWwvTmF2aWdhdGlvblJhaWwudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwYWNlL1FTcGFjZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbGJhci9RVG9vbGJhci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY291bnRCdXR0b24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQXBwQmFyLnZ1ZSIsIi4uLy4uLy4uL3NyYy91dGlscy9DaGFuZ2VhYmxlL0NoYW5nZWFibGUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Cb3R0b21QbGF5ZXJDb250cm9sQmFyL1RyYWNrQ2FyZC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci91c2Utc2xpZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvUVNsaWRlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVBsYXllckNvbnRyb2xCYXIvTWVkaWFDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVBsYXllckNvbnRyb2xCYXIvUXVldWVDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXZlYWxlZC52YWx1ZSA9PT0gdHJ1ZSA/IHNpemUudmFsdWUgOiAwXG4gICAgICB9XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaXplLnZhbHVlIC0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb25cbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlXG4gICAgICB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWhlYWRlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLXRvcCdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWhlYWRlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtaGVhZGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHZpZXcgPSAkbGF5b3V0LnJvd3MudmFsdWUudG9wLFxuICAgICAgICBjc3MgPSB7fVxuXG4gICAgICBpZiAodmlld1sgMCBdID09PSAnbCcgJiYgJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKHZpZXdbIDIgXSA9PT0gJ3InICYmICRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheW91dCAocHJvcCwgdmFsKSB7XG4gICAgICAkbGF5b3V0LnVwZGF0ZSgnaGVhZGVyJywgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVzaXplICh7IGhlaWdodCB9KSB7XG4gICAgICB1cGRhdGVMb2NhbChzaXplLCBoZWlnaHQpXG4gICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbCwgc2Nyb2xsID0+IHtcbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCxcbiAgICAgICAgc2Nyb2xsLmRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gPD0gcHJvcHMucmV2ZWFsT2Zmc2V0XG4gICAgICAgIHx8IHNjcm9sbC5wb3NpdGlvbiAtIHNjcm9sbC5pbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID0gaW5zdGFuY2VcbiAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHVwZGF0ZUxheW91dCgnc2l6ZScsIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCBvZmZzZXQudmFsdWUpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgcHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnaGVhZGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHdpdGhEaXJlY3RpdmVzLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuaW1wb3J0IHVzZVByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcHJldmVudC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuY29uc3QgZHVyYXRpb24gPSAxNTBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FEcmF3ZXInLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIHNpZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsZWZ0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdsZWZ0JywgJ3JpZ2h0JyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcblxuICAgIHdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9LFxuXG4gICAgbWluaTogQm9vbGVhbixcbiAgICBtaW5pVG9PdmVybGF5OiBCb29sZWFuLFxuICAgIG1pbmlXaWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTdcbiAgICB9LFxuICAgIG5vTWluaUFuaW1hdGlvbjogQm9vbGVhbixcblxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwMjNcbiAgICB9LFxuICAgIHNob3dJZkFib3ZlOiBCb29sZWFuLFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ2Rlc2t0b3AnLCAnbW9iaWxlJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgb3ZlcmxheTogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vU3dpcGVPcGVuOiBCb29sZWFuLFxuICAgIG5vU3dpcGVDbG9zZTogQm9vbGVhbixcbiAgICBub1N3aXBlQmFja2Ryb3A6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlRW1pdHMsXG4gICAgJ29uTGF5b3V0JywgJ21pbmlTdGF0ZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBwcmV2ZW50Qm9keVNjcm9sbCB9ID0gdXNlUHJldmVudFNjcm9sbCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQsIHJlbW92ZVRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FEcmF3ZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgICByZXR1cm4gZW1wdHlSZW5kZXJGblxuICAgIH1cblxuICAgIGxldCBsYXN0RGVza3RvcFN0YXRlLCB0aW1lck1pbmkgPSBudWxsLCBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlclxuXG4gICAgY29uc3QgYmVsb3dCcmVha3BvaW50ID0gcmVmKFxuICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICApXG5cbiAgICBjb25zdCBpc01pbmkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubWluaSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBzaXplID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgaXNNaW5pLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubWluaVdpZHRoXG4gICAgICAgIDogcHJvcHMud2lkdGhcbiAgICApKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgfHwgb25TY3JlZW5PdmVybGF5LnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCwgbm9FdmVudCkge1xuICAgICAgYWRkVG9IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgYXBwbHlQb3NpdGlvbigwKVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG90aGVySW5zdGFuY2UgPSAkbGF5b3V0Lmluc3RhbmNlc1sgb3RoZXJTaWRlLnZhbHVlIF1cbiAgICAgICAgaWYgKG90aGVySW5zdGFuY2UgIT09IHZvaWQgMCAmJiBvdGhlckluc3RhbmNlLmJlbG93QnJlYWtwb2ludCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG90aGVySW5zdGFuY2UuaGlkZShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICByZW1vdmVGcm9tSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcblxuICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHNpemUudmFsdWUpXG5cbiAgICAgIGNsZWFudXAoKVxuXG4gICAgICBpZiAobm9FdmVudCAhPT0gdHJ1ZSkge1xuICAgICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBlbWl0KCdoaWRlJywgZXZ0KSB9LCBkdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9ID0gdXNlSGlzdG9yeShzaG93aW5nLCBoaWRlLCBoaWRlT25Sb3V0ZUNoYW5nZSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgYmVsb3dCcmVha3BvaW50LFxuICAgICAgaGlkZVxuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNpZGUgPT09ICdyaWdodCcpXG5cbiAgICBjb25zdCBzdGF0ZURpcmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAtMSlcbiAgICApXG5cbiAgICBjb25zdCBmbGFnQmFja2Ryb3BCZyA9IHJlZigwKVxuICAgIGNvbnN0IGZsYWdQYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdNaW5pQW5pbWF0ZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnQ29udGVudFBvc2l0aW9uID0gcmVmKCAvLyBzdGFydGluZyB3aXRoIFwiaGlkZGVuXCIgZm9yIFNTUlxuICAgICAgc2l6ZS52YWx1ZSAqIHN0YXRlRGlyZWN0aW9uLnZhbHVlXG4gICAgKVxuXG4gICAgY29uc3Qgb3RoZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcpKVxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICA/IChwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gcHJvcHMubWluaVdpZHRoIDogc2l6ZS52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKHJpZ2h0U2lkZS52YWx1ZSA/ICdSJyA6ICdMJykgIT09IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb25MYXlvdXQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBvblNjcmVlbk92ZXJsYXkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ2Z1bGxzY3JlZW4gcS1kcmF3ZXJfX2JhY2tkcm9wJ1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IGZhbHNlID8gJyBoaWRkZW4nIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsMCwwLCR7IGZsYWdCYWNrZHJvcEJnLnZhbHVlICogMC40IH0pYFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGVhZGVyU2xvdCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDIgXSA9PT0gJ3InXG4gICAgICAgIDogJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMCBdID09PSAnbCdcbiAgICApKVxuXG4gICAgY29uc3QgZm9vdGVyU2xvdCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDIgXSA9PT0gJ3InXG4gICAgICAgIDogJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMCBdID09PSAnbCdcbiAgICApKVxuXG4gICAgY29uc3QgYWJvdmVTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSAmJiBoZWFkZXJTbG90LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MudG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLm9mZnNldCB9cHhgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MudG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSAmJiBmb290ZXJTbG90LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MuYm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLm9mZnNldCB9cHhgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MuYm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGAkeyBzaXplLnZhbHVlIH1weGAsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsgZmxhZ0NvbnRlbnRQb3NpdGlvbi52YWx1ZSB9cHgpYFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gc3R5bGVcbiAgICAgICAgOiBPYmplY3QuYXNzaWduKHN0eWxlLCBhYm92ZVN0eWxlLnZhbHVlKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZHJhd2VyX19jb250ZW50IGZpdCAnXG4gICAgICArICgkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlID8gJ3Njcm9sbCcgOiAnb3ZlcmZsb3ctYXV0bycpXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1kcmF3ZXIgcS1kcmF3ZXItLSR7IHByb3BzLnNpZGUgfWBcbiAgICAgICsgKGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW1pbmktYW5pbWF0ZScgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWRyYXdlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKFxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJyBuby10cmFuc2l0aW9uJ1xuICAgICAgICAgIDogKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnKVxuICAgICAgKVxuICAgICAgKyAoXG4gICAgICAgIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJyBmaXhlZCBxLWRyYXdlci0tb24tdG9wIHEtZHJhd2VyLS1tb2JpbGUgcS1kcmF3ZXItLXRvcC1wYWRkaW5nJ1xuICAgICAgICAgIDogYCBxLWRyYXdlci0tJHsgaXNNaW5pLnZhbHVlID09PSB0cnVlID8gJ21pbmknIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlIHx8IG9uTGF5b3V0LnZhbHVlICE9PSB0cnVlID8gJyBmaXhlZCcgOiAnJylcbiAgICAgICAgICArIChwcm9wcy5vdmVybGF5ID09PSB0cnVlIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1vbi10b3AnIDogJycpXG4gICAgICAgICAgKyAoaGVhZGVyU2xvdC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLXRvcC1wYWRkaW5nJyA6ICcnKVxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IG9wZW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBwcm9wcy5ub1N3aXBlT3BlbiAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBwcm9wcy5zaWRlIDogb3RoZXJTaWRlLnZhbHVlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uT3BlblBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlICYmIHByb3BzLm5vU3dpcGVDbG9zZSAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBvdGhlclNpZGUudmFsdWUgOiBwcm9wcy5zaWRlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uQ2xvc2VQYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGJhY2tkcm9wQ2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBvdGhlclNpZGUudmFsdWUgOiBwcm9wcy5zaWRlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uQ2xvc2VQYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJlbG93QnJlYWtwb2ludCAoKSB7XG4gICAgICB1cGRhdGVMb2NhbChiZWxvd0JyZWFrcG9pbnQsIChcbiAgICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICAgIHx8IChwcm9wcy5iZWhhdmlvciAhPT0gJ2Rlc2t0b3AnICYmICRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSA8PSBwcm9wcy5icmVha3BvaW50KVxuICAgICAgKSlcbiAgICB9XG5cbiAgICB3YXRjaChiZWxvd0JyZWFrcG9pbnQsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7IC8vIGZyb20gbGcgdG8geHNcbiAgICAgICAgbGFzdERlc2t0b3BTdGF0ZSA9IHNob3dpbmcudmFsdWVcbiAgICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBoaWRlKGZhbHNlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAgICYmIHByb3BzLmJlaGF2aW9yICE9PSAnbW9iaWxlJ1xuICAgICAgICAmJiBsYXN0RGVza3RvcFN0YXRlICE9PSBmYWxzZVxuICAgICAgKSB7IC8vIGZyb20geHMgdG8gbGdcbiAgICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGNsZWFudXAoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2lkZSwgKG5ld1NpZGUsIG9sZFNpZGUpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlc1sgb2xkU2lkZSBdID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgb2xkU2lkZSBdID0gdm9pZCAwXG4gICAgICAgICRsYXlvdXRbIG9sZFNpZGUgXS5zcGFjZSA9IGZhbHNlXG4gICAgICAgICRsYXlvdXRbIG9sZFNpZGUgXS5vZmZzZXQgPSAwXG4gICAgICB9XG5cbiAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBuZXdTaWRlIF0gPSBpbnN0YW5jZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNpemUgPSBzaXplLnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc3BhY2UgPSBvbkxheW91dC52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLm9mZnNldCA9IG9mZnNldC52YWx1ZVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnRvdGFsV2lkdGgsICgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50KClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy5iZWhhdmlvciArIHByb3BzLmJyZWFrcG9pbnQsXG4gICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnRcbiAgICApXG5cbiAgICB3YXRjaCgkbGF5b3V0LmlzQ29udGFpbmVyLCB2YWwgPT4ge1xuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh2YWwgIT09IHRydWUpXG4gICAgICB2YWwgPT09IHRydWUgJiYgdXBkYXRlQmVsb3dCcmVha3BvaW50KClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGxiYXJXaWR0aCwgKCkgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbihzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHZvaWQgMClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4geyB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbCkgfSlcblxuICAgIHdhdGNoKG9uTGF5b3V0LCB2YWwgPT4ge1xuICAgICAgZW1pdCgnb25MYXlvdXQnLCB2YWwpXG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChyaWdodFNpZGUsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaChzaXplLCB2YWwgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbigpXG4gICAgICB1cGRhdGVTaXplT25MYXlvdXQocHJvcHMubWluaVRvT3ZlcmxheSwgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pVG9PdmVybGF5LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHZhbCwgc2l6ZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gJHEubGFuZy5ydGwsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pLCAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubm9NaW5pQW5pbWF0aW9uKSByZXR1cm5cbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGFuaW1hdGVNaW5pKClcbiAgICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goaXNNaW5pLCB2YWwgPT4geyBlbWl0KCdtaW5pU3RhdGUnLCB2YWwpIH0pXG5cbiAgICBmdW5jdGlvbiBhcHBseVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHBvc2l0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBzaXplLnZhbHVlXG4gICAgICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHBvc2l0aW9uKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSB8fCBNYXRoLmFicyhwb3NpdGlvbikgPT09IHNpemUudmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgIHBvc2l0aW9uICs9IHN0YXRlRGlyZWN0aW9uLnZhbHVlICogJGxheW91dC5zY3JvbGxiYXJXaWR0aC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZ0NvbnRlbnRQb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlCYWNrZHJvcCAoeCkge1xuICAgICAgZmxhZ0JhY2tkcm9wQmcudmFsdWUgPSB4XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsYWJsZSAodikge1xuICAgICAgY29uc3QgYWN0aW9uID0gdiA9PT0gdHJ1ZVxuICAgICAgICA/ICdyZW1vdmUnXG4gICAgICAgIDogKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnYWRkJyA6ICcnKVxuXG4gICAgICBhY3Rpb24gIT09ICcnICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0WyBhY3Rpb24gXSgncS1ib2R5LS1kcmF3ZXItdG9nZ2xlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlTWluaSAoKSB7XG4gICAgICB0aW1lck1pbmkgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRpbWVyTWluaSlcblxuICAgICAgaWYgKHZtLnByb3h5ICYmIHZtLnByb3h5LiRlbCkge1xuICAgICAgICAvLyBuZWVkIHRvIHNwZWVkIGl0IHVwIGFuZCBhcHBseSBpdCBpbW1lZGlhdGVseSxcbiAgICAgICAgLy8gZXZlbiBmYXN0ZXIgdGhhbiBWdWUncyBuZXh0VGljayFcbiAgICAgICAgdm0ucHJveHkuJGVsLmNsYXNzTGlzdC5hZGQoJ3EtZHJhd2VyLS1taW5pLWFuaW1hdGUnKVxuICAgICAgfVxuXG4gICAgICBmbGFnTWluaUFuaW1hdGUudmFsdWUgPSB0cnVlXG4gICAgICB0aW1lck1pbmkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXJNaW5pID0gbnVsbFxuICAgICAgICBmbGFnTWluaUFuaW1hdGUudmFsdWUgPSBmYWxzZVxuICAgICAgICBpZiAodm0gJiYgdm0ucHJveHkgJiYgdm0ucHJveHkuJGVsKSB7XG4gICAgICAgICAgdm0ucHJveHkuJGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3EtZHJhd2VyLS1taW5pLWFuaW1hdGUnKVxuICAgICAgICB9XG4gICAgICB9LCAxNTApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25PcGVuUGFuIChldnQpIHtcbiAgICAgIGlmIChzaG93aW5nLnZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIG9wZW5lZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbiA9IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gcG9zaXRpb24gPj0gTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzaG93KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogd2lkdGgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKFxuICAgICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyByaWdodFNpZGUudmFsdWUgIT09IHRydWUgOiByaWdodFNpZGUudmFsdWUpXG4gICAgICAgICAgPyBNYXRoLm1heCh3aWR0aCAtIHBvc2l0aW9uLCAwKVxuICAgICAgICAgIDogTWF0aC5taW4oMCwgcG9zaXRpb24gLSB3aWR0aClcbiAgICAgIClcbiAgICAgIGFwcGx5QmFja2Ryb3AoXG4gICAgICAgIGJldHdlZW4ocG9zaXRpb24gLyB3aWR0aCwgMCwgMSlcbiAgICAgIClcblxuICAgICAgaWYgKGV2dC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xvc2VQYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgLy8gc29tZSBicm93c2VycyBtaWdodCBjYXB0dXJlIGFuZCB0cmlnZ2VyIHRoaXNcbiAgICAgICAgLy8gZXZlbiBpZiBEcmF3ZXIgaGFzIGp1c3QgYmVlbiBjbG9zZWQgKGJ1dCBhbmltYXRpb24gaXMgc3RpbGwgcGVuZGluZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHdpZHRoID0gc2l6ZS52YWx1ZSxcbiAgICAgICAgZGlyID0gZXZ0LmRpcmVjdGlvbiA9PT0gcHJvcHMuc2lkZSxcbiAgICAgICAgcG9zaXRpb24gPSAoJHEubGFuZy5ydGwgPT09IHRydWUgPyBkaXIgIT09IHRydWUgOiBkaXIpXG4gICAgICAgICAgPyBiZXR3ZWVuKGV2dC5kaXN0YW5jZS54LCAwLCB3aWR0aClcbiAgICAgICAgICA6IDBcblxuICAgICAgaWYgKGV2dC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IE1hdGguYWJzKHBvc2l0aW9uKSA8IE1hdGgubWluKDc1LCB3aWR0aClcblxuICAgICAgICBpZiAob3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDEpXG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHBvc2l0aW9uKVxuICAgICAgYXBwbHlCYWNrZHJvcChiZXR3ZWVuKDEgLSBwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKSlcblxuICAgICAgaWYgKGV2dC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgcHJldmVudEJvZHlTY3JvbGwoZmFsc2UpXG4gICAgICBzZXRTY3JvbGxhYmxlKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKHByb3BzLnNpZGUsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTaXplT25MYXlvdXQgKG1pbmlUb092ZXJsYXksIHNpemUpIHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIG1pbmlUb092ZXJsYXkgPT09IHRydWUgPyBwcm9wcy5taW5pV2lkdGggOiBzaXplKVxuICAgIH1cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzWyBwcm9wcy5zaWRlIF0gPSBpbnN0YW5jZVxuICAgIHVwZGF0ZVNpemVPbkxheW91dChwcm9wcy5taW5pVG9PdmVybGF5LCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBvbkxheW91dC52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIGlmIChcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlXG4gICAgICAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMFxuICAgICkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0cnVlKVxuICAgIH1cblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBlbWl0KCdvbkxheW91dCcsIG9uTGF5b3V0LnZhbHVlKVxuICAgICAgZW1pdCgnbWluaVN0YXRlJywgaXNNaW5pLnZhbHVlKVxuXG4gICAgICBsYXN0RGVza3RvcFN0YXRlID0gcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcblxuICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyBoYW5kbGVTaG93IDogaGFuZGxlSGlkZVxuICAgICAgICBhY3Rpb24oZmFsc2UsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGlmICgkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgIT09IDApIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgYWxsIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAgICAgICAgLy8gaGF2ZSBiZWVuIHVwZGF0ZWQgYmVmb3JlIGNhbGxpbmcgaGFuZGxlU2hvdy9oYW5kbGVIaWRlKClcbiAgICAgICAgbmV4dFRpY2soZm4pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciA9IHdhdGNoKCRsYXlvdXQudG90YWxXaWR0aCwgKCkgPT4ge1xuICAgICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gdm9pZCAwXG5cbiAgICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IGZhbHNlICYmIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzaG93KGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZuKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyICE9PSB2b2lkIDAgJiYgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIoKVxuXG4gICAgICBpZiAodGltZXJNaW5pICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG4gICAgICAgIHRpbWVyTWluaSA9IG51bGxcbiAgICAgIH1cblxuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBjbGVhbnVwKClcblxuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzWyBwcm9wcy5zaWRlIF0gPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBwcm9wcy5zaWRlIF0gPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtdXG5cbiAgICAgIGlmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcHJvcHMubm9Td2lwZU9wZW4gPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGtleTogJ29wZW4nLFxuICAgICAgICAgICAgICBjbGFzczogYHEtZHJhd2VyX19vcGVuZXIgZml4ZWQtJHsgcHJvcHMuc2lkZSB9YCxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG9wZW5EaXJlY3RpdmUudmFsdWVcbiAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGhEaXIoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiAnYmFja2Ryb3AnLFxuICAgICAgICAgICAgICBjbGFzczogYmFja2Ryb3BDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IGJhY2tkcm9wU3R5bGUudmFsdWUsXG4gICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICAgb25DbGljazogaGlkZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgICdiYWNrZHJvcCcsXG4gICAgICAgICAgICBwcm9wcy5ub1N3aXBlQmFja2Ryb3AgIT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICgpID0+IGJhY2tkcm9wQ2xvc2VEaXJlY3RpdmUudmFsdWVcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWluaSA9IGlzTWluaS52YWx1ZSA9PT0gdHJ1ZSAmJiBzbG90cy5taW5pICE9PSB2b2lkIDBcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICBrZXk6ICcnICsgbWluaSwgLy8gcmVxdWlyZWQgb3RoZXJ3aXNlIFZ1ZSB3aWxsIG5vdCBkaWZmIGNvcnJlY3RseVxuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBjb250ZW50Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICBhdHRycy5jbGFzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSwgbWluaSA9PT0gdHJ1ZVxuICAgICAgICAgID8gc2xvdHMubWluaSgpXG4gICAgICAgICAgOiBoU2xvdChzbG90cy5kZWZhdWx0KVxuICAgICAgICApXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoRGlyKFxuICAgICAgICAgICdhc2lkZScsXG4gICAgICAgICAgeyByZWY6ICdjb250ZW50JywgY2xhc3M6IGNsYXNzZXMudmFsdWUsIHN0eWxlOiBzdHlsZS52YWx1ZSB9LFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgJ2NvbnRlbnRjbG9zZScsXG4gICAgICAgICAgcHJvcHMubm9Td2lwZUNsb3NlICE9PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAoKSA9PiBjb250ZW50Q2xvc2VEaXJlY3RpdmUudmFsdWVcbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3EtZHJhd2VyLWNvbnRhaW5lcicgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIHByb3ZpZGUsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyS2V5LCBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnZUNvbnRhaW5lcicsXG5cbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRUGFnZUNvbnRhaW5lciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgcHJvdmlkZShwYWdlQ29udGFpbmVyS2V5LCB0cnVlKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjc3MgPSB7fVxuXG4gICAgICBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdUb3AgPSBgJHsgJGxheW91dC5oZWFkZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnTGVmdCcgOiAnUmlnaHQnIH1gIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ0JvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ1JpZ2h0JyA6ICdMZWZ0JyB9YCBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6ICdxLXBhZ2UtY29udGFpbmVyJyxcbiAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmltcG9ydCBRUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi4vcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRm9vdGVyJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICByZXZlYWw6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUZvb3RlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSByZWYoXG4gICAgICBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUgfHwgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IDBcbiAgICAgICAgOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICApXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKCdGJykgIT09IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSByZXR1cm5cblxuICAgICAgY29uc3QgeyBkaXJlY3Rpb24sIHBvc2l0aW9uLCBpbmZsZWN0aW9uUG9pbnQgfSA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlXG5cbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCAoXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICB8fCBwb3NpdGlvbiAtIGluZmxlY3Rpb25Qb2ludCA8IDEwMFxuICAgICAgICB8fCAkbGF5b3V0LmhlaWdodC52YWx1ZSAtIGNvbnRhaW5lckhlaWdodC52YWx1ZSAtIHBvc2l0aW9uIC0gc2l6ZS52YWx1ZSA8IDMwMFxuICAgICAgKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGV2dCkge1xuICAgICAgaWYgKHJldmVhbE9uRm9jdXMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2ZvY3VzaW4nLCBldnQpXG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlYWwsIHZhbCA9PiB7XG4gICAgICB2YWwgPT09IGZhbHNlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaChyZXZlYWxlZCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBlbWl0KCdyZXZlYWwnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKFsgc2l6ZSwgJGxheW91dC5zY3JvbGwsICRsYXlvdXQuaGVpZ2h0IF0sIHVwZGF0ZVJldmVhbGVkKVxuXG4gICAgd2F0Y2goKCkgPT4gJHEuc2NyZWVuLmhlaWdodCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgdXBkYXRlTG9jYWwod2luZG93SGVpZ2h0LCB2YWwpXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIF0pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdmb290ZXInLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIG9uRm9jdXNpblxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCByZWFjdGl2ZSwgY29tcHV0ZWQsIHdhdGNoLCBwcm92aWRlLCBvblVubW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL3BsYXRmb3JtL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGF5b3V0JyxcblxuICBwcm9wczoge1xuICAgIGNvbnRhaW5lcjogQm9vbGVhbixcbiAgICB2aWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGhoIGxwciBmZmYnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IC9eKGh8bCloKGh8cikgbHByIChmfGwpZihmfHIpJC8udGVzdCh2LnRvTG93ZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvbixcbiAgICBvblNjcm9sbEhlaWdodDogRnVuY3Rpb24sXG4gICAgb25SZXNpemU6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICAvLyBwYWdlIHJlbGF0ZWRcbiAgICBjb25zdCBoZWlnaHQgPSByZWYoJHEuc2NyZWVuLmhlaWdodClcbiAgICBjb25zdCB3aWR0aCA9IHJlZihwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAwIDogJHEuc2NyZWVuLndpZHRoKVxuICAgIGNvbnN0IHNjcm9sbCA9IHJlZih7IHBvc2l0aW9uOiAwLCBkaXJlY3Rpb246ICdkb3duJywgaW5mbGVjdGlvblBvaW50OiAwIH0pXG5cbiAgICAvLyBjb250YWluZXIgb25seSBwcm9wXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcmVmKDApXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSByZWYoaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IGdldFNjcm9sbGJhcldpZHRoKCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxheW91dCBxLWxheW91dC0tJ1xuICAgICAgKyAocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcml6ZWQnIDogJ3N0YW5kYXJkJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvbnRhaW5lciA9PT0gZmFsc2VcbiAgICAgICAgPyB7IG1pbkhlaWdodDogJHEuc2NyZWVuLmhlaWdodCArICdweCcgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgLy8gdXNlZCBieSBjb250YWluZXIgb25seVxuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7IFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IHRhcmdldENoaWxkU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IDAsXG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgLSR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weClgXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25QYWdlU2Nyb2xsIChkYXRhKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkYXRhLmRpcmVjdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBkYXRhLmRpcmVjdGlvbkNoYW5nZWQsXG4gICAgICAgICAgaW5mbGVjdGlvblBvaW50OiBkYXRhLmluZmxlY3Rpb25Qb2ludC50b3AsXG4gICAgICAgICAgZGVsdGE6IGRhdGEuZGVsdGEudG9wXG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwudmFsdWUgPSBpbmZvXG4gICAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ2VSZXNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiBuZXdIZWlnaHQsIHdpZHRoOiBuZXdXaWR0aCB9ID0gZGF0YVxuICAgICAgbGV0IHJlc2l6ZWQgPSBmYWxzZVxuXG4gICAgICBpZiAoaGVpZ2h0LnZhbHVlICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gbmV3SGVpZ2h0XG4gICAgICAgIHByb3BzLm9uU2Nyb2xsSGVpZ2h0ICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsSGVpZ2h0JywgbmV3SGVpZ2h0KVxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgICBpZiAod2lkdGgudmFsdWUgIT09IG5ld1dpZHRoKSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIHdpZHRoLnZhbHVlID0gbmV3V2lkdGhcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc2l6ZWQgPT09IHRydWUgJiYgcHJvcHMub25SZXNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0KCdyZXNpemUnLCBkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udGFpbmVyUmVzaXplICh7IGhlaWdodCB9KSB7XG4gICAgICBpZiAoY29udGFpbmVySGVpZ2h0LnZhbHVlICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY29udGFpbmVySGVpZ2h0LnZhbHVlID0gaGVpZ2h0XG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxiYXJXaWR0aCAoKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0LnZhbHVlID4gY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgICAgPyBnZXRTY3JvbGxiYXJXaWR0aCgpXG4gICAgICAgICAgOiAwXG5cbiAgICAgICAgaWYgKHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSB3aWR0aCkge1xuICAgICAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlID0gd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhbmltYXRlVGltZXIgPSBudWxsXG5cbiAgICBjb25zdCAkbGF5b3V0ID0ge1xuICAgICAgaW5zdGFuY2VzOiB7fSxcbiAgICAgIHZpZXc6IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpZXcpLFxuICAgICAgaXNDb250YWluZXI6IGNvbXB1dGVkKCgpID0+IHByb3BzLmNvbnRhaW5lciksXG5cbiAgICAgIHJvb3RSZWYsXG5cbiAgICAgIGhlaWdodCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHNjcm9sbGJhcldpZHRoLFxuICAgICAgdG90YWxXaWR0aDogY29tcHV0ZWQoKCkgPT4gd2lkdGgudmFsdWUgKyBzY3JvbGxiYXJXaWR0aC52YWx1ZSksXG5cbiAgICAgIHJvd3M6IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHByb3BzLnZpZXcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiByb3dzWyAwIF0uc3BsaXQoJycpLFxuICAgICAgICAgIG1pZGRsZTogcm93c1sgMSBdLnNwbGl0KCcnKSxcbiAgICAgICAgICBib3R0b206IHJvd3NbIDIgXS5zcGxpdCgnJylcbiAgICAgICAgfVxuICAgICAgfSksXG5cbiAgICAgIGhlYWRlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIHJpZ2h0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBmb290ZXI6IHJlYWN0aXZlKHsgc2l6ZTogMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBsZWZ0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG5cbiAgICAgIHNjcm9sbCxcblxuICAgICAgYW5pbWF0ZSAoKSB7XG4gICAgICAgIGlmIChhbmltYXRlVGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBudWxsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfSwgMTU1KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlIChwYXJ0LCBwcm9wLCB2YWwpIHtcbiAgICAgICAgJGxheW91dFsgcGFydCBdWyBwcm9wIF0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm92aWRlKGxheW91dEtleSwgJGxheW91dClcblxuICAgIC8vIHByZXZlbnQgc2Nyb2xsYmFyIGZsaWNrZXIgd2hpbGUgcmVzaXppbmcgd2luZG93IGhlaWdodFxuICAgIC8vIGlmIG5vIHBhZ2Ugc2Nyb2xsYmFyIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUgJiYgZ2V0U2Nyb2xsYmFyV2lkdGgoKSA+IDApIHtcbiAgICAgIGxldCB0aW1lciA9IG51bGxcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keVxuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGlkZVNjcm9sbGJhciAoKSB7XG4gICAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBzY3JvbGxiYXIgdGhlbiB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cblxuICAgICAgICAgIGlmIChlbC5zY3JvbGxIZWlnaHQgPiAkcS5zY3JlZW4uaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlLXNjcm9sbGJhcicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHJlc3RvcmVTY3JvbGxiYXIsIDMwMClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsRXZlbnQgKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZXIgIT09IG51bGwgJiYgYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsYmFyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1sgYCR7IGFjdGlvbiB9RXZlbnRMaXN0ZW5lcmAgXSgncmVzaXplJywgaGlkZVNjcm9sbGJhcilcbiAgICAgIH1cblxuICAgICAgd2F0Y2goXG4gICAgICAgICgpID0+IChwcm9wcy5jb250YWluZXIgIT09IHRydWUgPyAnYWRkJyA6ICdyZW1vdmUnKSxcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnRcbiAgICAgIClcblxuICAgICAgcHJvcHMuY29udGFpbmVyICE9PSB0cnVlICYmIHVwZGF0ZVNjcm9sbEV2ZW50KCdhZGQnKVxuXG4gICAgICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbEV2ZW50KCdyZW1vdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwgeyBvblNjcm9sbDogb25QYWdlU2Nyb2xsIH0pLFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogb25QYWdlUmVzaXplIH0pXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBsYXlvdXQgPSBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJlZjogcHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gdm9pZCAwIDogcm9vdFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50KVxuXG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dC1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuJyxcbiAgICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvbkNvbnRhaW5lclJlc2l6ZSB9KSxcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwnLFxuICAgICAgICAgICAgc3R5bGU6IHRhcmdldFN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiB0YXJnZXRDaGlsZFN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9LCBbIGxheW91dCBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXlvdXRcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDYwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA0MHZ3OyBtYXJnaW4tdG9wOiAxMHZoOyBib3JkZXItcmFkaXVzOiA1cHg7XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+Q3JlYXRlIFBsYXlsaXN0PC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgdi1tb2RlbD1cInBsYXlsaXN0TmFtZVwiXG4gICAgICAgICAgbGFiZWw9XCJQbGF5bGlzdCBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgdi1tb2RlbD1cInBsYXlsaXN0VmlzaWJpbGl0eVwiXG4gICAgICAgICAgOm9wdGlvbnM9XCJwbGF5bGlzdFZpc2libGl0eURyb3Bkb3duT3B0aW9uc1wiXG4gICAgICAgICAgbGFiZWw9XCJWaXNpYmlsaXR5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGxhYmVsPVwiQ2FuY2VsXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgIC8+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGxhYmVsPVwiQ3JlYXRlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVQbGF5bGlzdCgpXCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBQbGF5bGlzdFNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9QbGF5bGlzdFNlcnZpY2UnO1xuaW1wb3J0IHsgUGxheWxpc3RWaXNpYmlsaXR5IH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBwbGF5bGlzdFNlcnZpY2U6IFBsYXlsaXN0U2VydmljZTtcbn0+KCk7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbi8vIGNvbnN0IHBsYXlsaXN0U2VydmljZSA9IGluamVjdDxQbGF5bGlzdFNlcnZpY2U+KCdwbGF5bGlzdFNlcnZpY2UnKTtcblxuY29uc3QgcGxheWxpc3RWaXNpYmxpdHlEcm9wZG93bk9wdGlvbnMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1B1YmxpYycsXG4gICAgdmFsdWU6IFBsYXlsaXN0VmlzaWJpbGl0eS5QdWJsaWMsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1ByaXZhdGUnLFxuICAgIHZhbHVlOiBQbGF5bGlzdFZpc2liaWxpdHkuUHJpdmF0ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVW5saXN0ZWQnLFxuICAgIHZhbHVlOiBQbGF5bGlzdFZpc2liaWxpdHkuVW5saXN0ZWQsXG4gIH0sXG5dO1xuXG5jb25zdCBwbGF5bGlzdE5hbWUgPSByZWYoJycpO1xuY29uc3QgcGxheWxpc3RWaXNpYmlsaXR5ID0gcmVmPFBsYXlsaXN0VmlzaWJpbGl0eT4oUGxheWxpc3RWaXNpYmlsaXR5LlByaXZhdGUpO1xuXG5jb25zdCBjcmVhdGVQbGF5bGlzdCA9ICgpID0+IHtcbiAgcHJvcHMucGxheWxpc3RTZXJ2aWNlPy5jcmVhdGVQbGF5bGlzdChwbGF5bGlzdE5hbWUudmFsdWUsIHBsYXlsaXN0VmlzaWJpbGl0eS52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgIG1lc3NhZ2U6ICdQbGF5bGlzdCBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICBjb2xvcjogJ3Bvc2l0aXZlJyxcbiAgICB9KTtcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWxpc3Qgdi1pZj1cIiFwbGF5bGlzdFNlcnZpY2U/LmlzUmVhZHkudmFsdWVcIj5cbiAgICA8cS1pdGVtIDppbnNldC1sZXZlbD1cIjAuM1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzcz1cInVuZGVybGluZWQgbGlua1wiXG4gICAgICAgICAgQGNsaWNrPVwiYXV0aFNlcnZpY2U/LmxvZ2luXCJcbiAgICAgICAgPkxvZyBpbjwvYT4gb3JcbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzcz1cInVuZGVybGluZWQgbGlua1wiXG4gICAgICAgICAgQGNsaWNrPVwiYXV0aFNlcnZpY2U/LnNpZ251cFwiXG4gICAgICAgID5TaWduIHVwPC9hPlxuICAgICAgICB0byBjcmVhdGUgYW5kIG1hbmFnZSBwbGF5bGlzdHNcbiAgICAgIDwvZGl2PlxuICAgIDwvcS1pdGVtPlxuICA8L3EtbGlzdD5cbiAgPGRpdiB2LWVsc2U+XG4gICAgPHEtbGlzdD5cbiAgICAgIDxxLWl0ZW1cbiAgICAgICAgdi1mb3I9XCJsaW5rIGluIGNvbGxlY3Rpb25OYXZpZ2F0aW9uc1wiXG4gICAgICAgIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICB2LXJpcHBsZVxuICAgICAgICBjbGlja2FibGVcbiAgICAgICAgOmluc2V0LWxldmVsPVwiMC4zXCJcbiAgICAgICAgZXhhY3RcbiAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCJcbiAgICAgICAgQGNsaWNrPVwibGluay5vbkNsaWNrXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uXG4gICAgICAgICAgICA6bmFtZT1cImxpbmsuaWNvblwiXG4gICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7eyBsaW5rLnRleHQgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuXG4gICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbSBxLW14LWxnXCIgLz5cblxuICAgIDxxLWxpc3Q+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICB2LXJpcHBsZVxuICAgICAgICA6aW5zZXQtbGV2ZWw9XCIwLjNcIlxuICAgICAgICBAY2xpY2s9XCJzaG93Q3JlYXRlUGxheWxpc3REaWFsb2dcIlxuICAgICAgPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIDpuYW1lPVwib3V0bGluZWRQbGF5bGlzdEFkZFwiXG4gICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIENyZWF0ZSBQbGF5bGlzdFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIHYtZm9yPVwicGxheWxpc3QgaW4gcGxheWxpc3RTZXJ2aWNlPy5wbGF5bGlzdHMudmFsdWVcIlxuICAgICAgICBjbGlja2FibGVcbiAgICAgICAgdi1yaXBwbGVcbiAgICAgICAgOmtleT1cInBsYXlsaXN0LmlkXCJcbiAgICAgICAgOmluc2V0LWxldmVsPVwiMC4zXCJcbiAgICAgICAgQGNsaWNrPVwiZ290b1BsYXlsaXN0KHBsYXlsaXN0LmlkISlcIlxuICAgICAgPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIDpuYW1lPVwib3V0bGluZWRQbGF5bGlzdFBsYXlcIlxuICAgICAgICAgICAgc2l6ZT1cIjI0cHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3sgcGxheWxpc3QubmFtZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkSGlzdG9yeSxcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcbiAgb3V0bGluZWRQbGF5bGlzdFBsYXksXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgQXV0aGVudGljYXRpb25TZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCBQbGF5bGlzdFNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9QbGF5bGlzdFNlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFBsYXlsaXN0Q3JlYXRlRGlhbG9nIGZyb20gJy4uL0RpYWxvZ3MvUGxheWxpc3RDcmVhdGVEaWFsb2cudnVlJztcblxuLy8gSW5qZWN0ZWQgc2VydmljZXNcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBhdXRoU2VydmljZSA9IGluamVjdDxBdXRoZW50aWNhdGlvblNlcnZpY2U+KCdhdXRoU2VydmljZScpO1xuY29uc3QgcGxheWxpc3RTZXJ2aWNlID0gaW5qZWN0PFBsYXlsaXN0U2VydmljZT4oJ3BsYXlsaXN0U2VydmljZScpO1xuXG5jb25zdCBjb2xsZWN0aW9uTmF2aWdhdGlvbnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnSGlzdG9yeScsXG4gICAgaWNvbjogb3V0bGluZWRIaXN0b3J5LFxuICAgIHJvdXRlOiB7IG5hbWU6ICdoaXN0b3J5JyB9LFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGdvdG9QbGF5bGlzdChwbGF5bGlzdFNlcnZpY2UhLmhpc3RvcnkudmFsdWUhLmlkISk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGYXZvcml0ZScsXG4gICAgaWNvbjogb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgICByb3V0ZTogeyBuYW1lOiAnZmF2b3JpdGUnIH0sXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgZ290b1BsYXlsaXN0KHBsYXlsaXN0U2VydmljZSEuZmF2b3JpdGUudmFsdWUhLmlkISk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmNvbnN0IGdvdG9QbGF5bGlzdCA9IChwbGF5bGlzdElkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHsgbmFtZTogJ1BsYXlsaXN0JywgcGFyYW1zOiB7IHBsYXlsaXN0SWQgfSB9KTtcbn07XG5cbmNvbnN0IHNob3dDcmVhdGVQbGF5bGlzdERpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogUGxheWxpc3RDcmVhdGVEaWFsb2csXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBwbGF5bGlzdFNlcnZpY2UsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGlzdCBwYWRkaW5nPlxuICAgIDxxLWl0ZW1cbiAgICAgIHYtZm9yPVwibGluayBpbiBuYXZpZ2F0aW9uSXRlbXNcIlxuICAgICAgOmtleT1cImxpbmsudGV4dFwiXG4gICAgICB2LXJpcHBsZVxuICAgICAgY2xpY2thYmxlXG4gICAgICA6aW5zZXQtbGV2ZWw9XCIwLjNcIlxuICAgICAgOnRvPVwibGluay5yb3V0ZVwiXG4gICAgICBleGFjdFxuICAgID5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgIDxxLWljb25cbiAgICAgICAgICA6bmFtZT1cImxpbmsuaWNvblwiXG4gICAgICAgICAgc2l6ZT1cIjI0cHhcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAge3sgbGluay50ZXh0IH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPC9xLWl0ZW0+XG4gICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbSBxLW14LWxnXCIgLz5cbiAgICA8UGxheWxpc3ROYXZpZ2F0aW9uTGlzdCAvPlxuICA8L3EtbGlzdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBRTGlzdCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQge1xuICBvdXRsaW5lZEhvbWUsXG4gIG91dGxpbmVkU2VhcmNoLFxuICBvdXRsaW5lZFJhZGlvLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7IG1hdEhvbWUsIG1hdFNlYXJjaCwgbWF0UmFkaW8gfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgUGxheWxpc3ROYXZpZ2F0aW9uTGlzdCBmcm9tICcuL1BsYXlsaXN0TmF2aWdhdGlvbkxpc3QudnVlJztcblxuY29uc3QgbmF2aWdhdGlvbkl0ZW1zID0gW1xuICB7XG4gICAgdGV4dDogJ0hvbWUnLFxuICAgIGljb246IG91dGxpbmVkSG9tZSxcbiAgICBhY3RpdmVJY29uOiBtYXRIb21lLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdIb21lJywgcGFyYW1zOiB7IHBhZ2U6IDEgfSB9LFxuICB9LFxuICB7XG4gICAgdGV4dDogJ1NlYXJjaCcsXG4gICAgaWNvbjogb3V0bGluZWRTZWFyY2gsXG4gICAgYWN0aXZlSWNvbjogbWF0U2VhcmNoLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdTZWFyY2gnIH0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnUmFkaW8nLFxuICAgIGljb246IG91dGxpbmVkUmFkaW8sXG4gICAgYWN0aXZlSWNvbjogbWF0UmFkaW8sXG4gICAgcm91dGU6IHsgbmFtZTogJ1JhZGlvJyB9LFxuICB9LFxuXTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyVGl0bGUnLFxuXG4gIHByb3BzOiB7XG4gICAgc2hyaW5rOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXJfX3RpdGxlIGVsbGlwc2lzJ1xuICAgICAgKyAocHJvcHMuc2hyaW5rID09PSB0cnVlID8gJyBjb2wtc2hyaW5rJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHNwYWNlID0gaCgnZGl2JywgeyBjbGFzczogJ3Etc3BhY2UnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3BhY2UnLFxuXG4gIHNldHVwICgpIHtcbiAgICByZXR1cm4gKCkgPT4gc3BhY2VcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmluc2V0ID09PSB0cnVlID8gJyBxLXRvb2xiYXItLWluc2V0JyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlLCByb2xlOiAndG9vbGJhcicgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgdi1pZj1cImF1dGhTZXJ2aWNlPy5pc0luaXRpYWxpemVkLnZhbHVlXCI+XG4gICAgPHEtYnRuXG4gICAgICB2LWlmPVwiIWF1dGhTZXJ2aWNlPy5pc0F1dGhlbnRpY2F0ZWQudmFsdWVcIlxuICAgICAgQGNsaWNrPVwiYXV0aFNlcnZpY2U/LmxvZ2luXCJcbiAgICA+XG4gICAgICBMb2dpblxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG4tZHJvcGRvd25cbiAgICAgIHYtZWxzZVxuICAgICAgOmljb249XCJvdXRsaW5lZEFjY291bnRDaXJjbGVcIlxuICAgICAgZmxhdFxuICAgICAgcm91bmRlZFxuICAgID5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwib25BY2NvdW50RHJvcGRvd25DbGlja1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkFjY291bnQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgIEBjbGljaz1cIm9uQWNjb3VudERyb3Bkb3duQ2xpY2tcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5TZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwib25Mb2dvdXRDbGlja1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkxvZ291dDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWJ0bi1kcm9wZG93bj5cbiAgPC9kaXY+XG5cbiAgPHNwYW4gdi1lbHNlPjxxLXNwaW5uZXIgLz4gSW5pdGlhbGl6aW5nIEF1dGhlbnRpY2F0aW9uPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBRQnRuIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IG91dGxpbmVkQWNjb3VudENpcmNsZSB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCBBdXRoZW50aWNhdGlvblNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuXG5jb25zdCBhdXRoU2VydmljZSA9IGluamVjdDxBdXRoZW50aWNhdGlvblNlcnZpY2U+KCdhdXRoU2VydmljZScpO1xuXG5jb25zdCBvbkFjY291bnREcm9wZG93bkNsaWNrID0gKGV2dDogRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coJ0l0ZW0gY2xpY2tlZCcsIGV2dCk7XG59O1xuXG5jb25zdCBvbkxvZ291dENsaWNrID0gKCkgPT4ge1xuICBhdXRoU2VydmljZT8ubG9nb3V0KCk7XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXRvb2xiYXI+XG4gICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgIDxxLWJ0blxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBmbGF0XG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIDppY29uPVwib3V0bGluZWRBcnJvd0JhY2tcIlxuICAgICAgICBAY2xpY2s9XCJnb0JhY2tcIlxuICAgICAgPjwvcS1idG4+XG4gICAgICA8cS1idG5cbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgZmxhdFxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICA6aWNvbj1cIm91dGxpbmVkQXJyb3dGb3J3YXJkXCJcbiAgICAgICAgQGNsaWNrPVwiZ29Gb3J3YXJkXCJcbiAgICAgID5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICA8cS1zcGFjZT48L3Etc3BhY2U+XG5cbiAgICA8QWNjb3VudEJ1dHRvbiAvPlxuXG4gICAgPHEtYnRuXG4gICAgICByb3VuZFxuICAgICAgZGVuc2VcbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJsZ1wiXG4gICAgICA6aWNvbj1cIm91dGxpbmVkQnVnUmVwb3J0XCJcbiAgICAgIEBjbGljaz1cImdvRGVidWdcIlxuICAgID48L3EtYnRuPlxuICA8L3EtdG9vbGJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEFycm93Rm9yd2FyZCxcbiAgb3V0bGluZWRBcnJvd0JhY2ssXG4gIG91dGxpbmVkQnVnUmVwb3J0LFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgQWNjb3VudEJ1dHRvbiBmcm9tICcuL0FjY291bnRCdXR0b24udnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IGdvQmFjayA9ICgpID0+IHtcbiAgJHJvdXRlci5iYWNrKCk7XG59O1xuXG5jb25zdCBnb0ZvcndhcmQgPSAoKSA9PiB7XG4gICRyb3V0ZXIuZm9yd2FyZCgpO1xufTtcblxuY29uc3QgZ29EZWJ1ZyA9ICgpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnRGVidWcnLFxuICB9KTtcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHdhdGNoLCBSZWYsIHJlZiwgV2F0Y2hTb3VyY2UgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDaGFuZ2VhYmxlQ29udHJvbGxlcjxULCBFPihcbiAgd2F0Y2hlZDogV2F0Y2hTb3VyY2U8VD4sIC8vIFRoaXMgY2FuIGJlIGEgUmVmPFQ+LCBhIHJlYWN0aXZlIG9iamVjdCwgb3IgYSBnZXR0ZXIgZnVuY3Rpb24uXG4gIG9uQ2hhbmdlOiAodmFsdWU6IFQpID0+IFByb21pc2U8RT4sXG4gIGRlZXBXYXRjaCA9IGZhbHNlXG4pIHtcbiAgY29uc3Qgc3RhdGU6IFJlZjxFIHwgbnVsbD4gPSByZWYobnVsbCk7XG4gIHdhdGNoKFxuICAgIHdhdGNoZWQsXG4gICAgYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IGF3YWl0IG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9LFxuICAgIHsgZGVlcDogZGVlcFdhdGNoIH1cbiAgKTtcblxuICBjb25zdCByZWxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgc3RhdGUudmFsdWUgPSBhd2FpdCBvbkNoYW5nZSgod2F0Y2hlZCBhcyBSZWY8VD4pLnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIHJlbG9hZCxcbiAgfTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBmbGF0IHYtaWY9XCJjdXJyZW50VHJhY2sgIT09IG51bGxcIj5cbiAgICA8cS1jYXJkLXNlY3Rpb24gaG9yaXpvbnRhbD5cbiAgICAgIDxxLWltZ1xuICAgICAgICBzdHlsZT1cImhlaWdodDogMTI1cHg7IG1heC13aWR0aDogMTI1cHhcIlxuICAgICAgICA6c3JjPVwiY3VycmVudFRyYWNrLnRodW1ibmFpbHM/Lm1lZGl1bVwiXG4gICAgICAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZGFyayB0ZXh0LWg2XCI+XG4gICAgICAgICAge3sgY3VycmVudFRyYWNrLm5hbWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWRhcmsgdGV4dC1zdWJ0aXRsZTIgbGlua1wiIEBjbGljaz1cImdvdG9BbGJ1bShjdXJyZW50VHJhY2shLmFsYnVtSWQpXCI+XG4gICAgICAgICAge3sgY3VycmVudFRyYWNrLmFsYnVtTmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJhcnRpc3RzXCIgY2xhc3M9XCJtZXRhZGF0YS1lbnRyeVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhcmsgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyIGFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgdi1mb3I9XCIoY2lyY2xlLCBpbmRleCkgaW4gY3VycmVudFRyYWNrLmNpcmNsZVwiXG4gICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImdvdG9DaXJjbGUoY2lyY2xlLmlkKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNpcmNsZS5uYW1lIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgOmljb249XCJcbiAgICAgICAgICAgIGlzQ3VycmVudFRyYWNrSW5GYXZvcml0ZVBsYXlsaXN0Q2hhbmdlYWJsZUNvbnRyb2xsZXIuc3RhdGUudmFsdWVcbiAgICAgICAgICAgICAgPyBtYXRGYXZvcml0ZVxuICAgICAgICAgICAgICA6IG91dGxpbmVkRmF2b3JpdGVCb3JkZXJcbiAgICAgICAgICBcIlxuICAgICAgICAgIEBjbGljaz1cIm9uRmF2SWNvbkNsaWNrXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAgICAgOmljb249XCJvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlXCJcbiAgICAgICAgPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlLFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBtYXRGYXZvcml0ZSB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IFRyYWNrSW5mbyB9IGZyb20gJ3NyYy9tb2RlbHMvVHJhY2tJbmZvJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIENvbXB1dGVkUmVmLCBpbmplY3QsIFJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IFBsYXlsaXN0U2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1BsYXlsaXN0U2VydmljZSc7XG5pbXBvcnQgdXNlQ2hhbmdlYWJsZUNvbnRyb2xsZXIgZnJvbSAnc3JjL3V0aWxzL0NoYW5nZWFibGUvQ2hhbmdlYWJsZSc7XG5pbXBvcnQgUXVldWVkVHJhY2sgZnJvbSAnc3JjL21vZGVscy9RdWV1ZWRUcmFjayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcblxuLy8gSW5qZWN0ZWQgc2VydmljZXMvZGF0YVxuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcXVldWVTZXJ2aWNlID0gaW5qZWN0PFF1ZXVlU2VydmljZT4oJ3F1ZXVlU2VydmljZScpO1xuaWYgKHF1ZXVlU2VydmljZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHRocm93IG5ldyBFcnJvcignUXVldWUgU2VydmljZSBub3QgZm91bmQnKTtcbn1cbmNvbnN0IHBsYXlsaXN0U2VydmljZSA9IGluamVjdDxQbGF5bGlzdFNlcnZpY2U+KCdwbGF5bGlzdFNlcnZpY2UnKTtcblxuLy8gQ29tcHV0ZWRcbmNvbnN0IGlzQ3VycmVudFRyYWNrSW5GYXZvcml0ZVBsYXlsaXN0Q2hhbmdlYWJsZUNvbnRyb2xsZXIgPVxuICB1c2VDaGFuZ2VhYmxlQ29udHJvbGxlcjxRdWV1ZWRUcmFjayB8IG51bGwsIGJvb2xlYW4+KFxuICAgIHF1ZXVlU2VydmljZS5jdXJyZW50VHJhY2sgYXMgUmVmPFF1ZXVlZFRyYWNrIHwgbnVsbD4sXG4gICAgYXN5bmMgKHRyYWNrOiBRdWV1ZWRUcmFjayB8IG51bGwpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICAgIGlmICh0cmFjayA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsYXlsaXN0U2VydmljZSEuaXNUcmFja0luUGxheWxpc3QoXG4gICAgICAgIHBsYXlsaXN0U2VydmljZSEuZmF2b3JpdGUudmFsdWUhLmlkISxcbiAgICAgICAgdHJhY2sudHJhY2suaWQhXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgKTtcblxuY29uc3QgY3VycmVudFRyYWNrOiBDb21wdXRlZFJlZjxUcmFja0luZm8gfCBudWxsPiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgaWYgKHF1ZXVlU2VydmljZS5jdXJyZW50VHJhY2sudmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBUcmFja0luZm8uZnJvbVRyYWNrUmVhZER0byhcbiAgICBxdWV1ZVNlcnZpY2UuY3VycmVudFRyYWNrLnZhbHVlLnRyYWNrIGFzIFRyYWNrUmVhZER0b1xuICApO1xufSk7XG5cbmNvbnN0IG9uRmF2SWNvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoaXNDdXJyZW50VHJhY2tJbkZhdm9yaXRlUGxheWxpc3RDaGFuZ2VhYmxlQ29udHJvbGxlci5zdGF0ZS52YWx1ZSkge1xuICAgIGF3YWl0IHBsYXlsaXN0U2VydmljZT8ucmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QoXG4gICAgICBwbGF5bGlzdFNlcnZpY2UuZmF2b3JpdGUudmFsdWUhLmlkISxcbiAgICAgIFtxdWV1ZVNlcnZpY2UuY3VycmVudFRyYWNrLnZhbHVlIS50cmFjay5pZCFdXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBwbGF5bGlzdFNlcnZpY2U/LmFkZFRyYWNrVG9QbGF5bGlzdChcbiAgICAgIHBsYXlsaXN0U2VydmljZS5mYXZvcml0ZS52YWx1ZSEuaWQhLFxuICAgICAgW3F1ZXVlU2VydmljZS5jdXJyZW50VHJhY2sudmFsdWUhLnRyYWNrLmlkIV1cbiAgICApO1xuICB9XG5cbiAgaXNDdXJyZW50VHJhY2tJbkZhdm9yaXRlUGxheWxpc3RDaGFuZ2VhYmxlQ29udHJvbGxlci5yZWxvYWQoKTtcbn07XG5cbmNvbnN0IGdvdG9DaXJjbGUgPSAoY2lyY2xlSWQ6IHN0cmluZykgPT4ge1xuICAkcm91dGVyLnB1c2goe1xuICAgIG5hbWU6ICdDaXJjbGVBbGJ1bXMnLFxuICAgIHBhcmFtczogeyBjaXJjbGVJZDogY2lyY2xlSWQudG9TdHJpbmcoKSwgcGFnZTogJzEnIH0sXG4gIH0pO1xufTtcblxuY29uc3QgZ290b0FsYnVtID0gKGFsYnVtSWQ6IHN0cmluZykgPT4ge1xuICAkcm91dGVyLnB1c2goe1xuICAgIG5hbWU6ICdBbGJ1bScsXG4gICAgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtSWQudG9TdHJpbmcoKSB9LFxuICB9KTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcsICc7XG59XG5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FydGlzdHMgLmFydGlzdC1uYW1lOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvdWNoLXBhbi9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IG1hcmtlclByZWZpeENsYXNzID0gJ3Etc2xpZGVyX19tYXJrZXItbGFiZWxzJ1xuY29uc3QgZGVmYXVsdE1hcmtlckNvbnZlcnRGbiA9IHYgPT4gKHsgdmFsdWU6IHYgfSlcbmNvbnN0IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuID0gKHsgbWFya2VyIH0pID0+IGgoJ2RpdicsIHtcbiAga2V5OiBtYXJrZXIudmFsdWUsXG4gIHN0eWxlOiBtYXJrZXIuc3R5bGUsXG4gIGNsYXNzOiBtYXJrZXIuY2xhc3Nlc1xufSwgbWFya2VyLmxhYmVsKVxuXG4vLyBQR0RPV04sIExFRlQsIERPV04sIFBHVVAsIFJJR0hULCBVUFxuZXhwb3J0IGNvbnN0IGtleUNvZGVzID0gWyAzNCwgMzcsIDQwLCAzMywgMzksIDM4IF1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlclByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZUZvcm1Qcm9wcyxcblxuICBtaW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBtYXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMTAwXG4gIH0sXG4gIGlubmVyTWluOiBOdW1iZXIsXG4gIGlubmVyTWF4OiBOdW1iZXIsXG5cbiAgc3RlcDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID49IDBcbiAgfSxcblxuICBzbmFwOiBCb29sZWFuLFxuXG4gIHZlcnRpY2FsOiBCb29sZWFuLFxuICByZXZlcnNlOiBCb29sZWFuLFxuXG4gIGhpZGVTZWxlY3Rpb246IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgbWFya2VyTGFiZWxzQ2xhc3M6IFN0cmluZyxcblxuICBsYWJlbDogQm9vbGVhbixcbiAgbGFiZWxDb2xvcjogU3RyaW5nLFxuICBsYWJlbFRleHRDb2xvcjogU3RyaW5nLFxuICBsYWJlbEFsd2F5czogQm9vbGVhbixcbiAgc3dpdGNoTGFiZWxTaWRlOiBCb29sZWFuLFxuXG4gIG1hcmtlcnM6IFsgQm9vbGVhbiwgTnVtYmVyIF0sXG4gIG1hcmtlckxhYmVsczogWyBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBGdW5jdGlvbiBdLFxuICBzd2l0Y2hNYXJrZXJMYWJlbHNTaWRlOiBCb29sZWFuLFxuXG4gIHRyYWNrSW1nOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcbiAgaW5uZXJUcmFja0ltZzogU3RyaW5nLFxuICBpbm5lclRyYWNrQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uSW1nOiBTdHJpbmcsXG5cbiAgdGh1bWJTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcyMHB4J1xuICB9LFxuICB0cmFja1NpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzRweCdcbiAgfSxcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICB0aHVtYkNvbG9yOiBTdHJpbmcsXG4gIHRodW1iUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnTSA0LCAxMCBhIDYsNiAwIDEsMCAxMiwwIGEgNiw2IDAgMSwwIC0xMiwwJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJFbWl0cyA9IFsgJ3BhbicsICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZywgZm9ybUF0dHJzIH0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgc2xvdHMsIHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGFjdGl2ZSA9IHJlZihmYWxzZSlcbiAgY29uc3QgcHJldmVudEZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBmb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZHJhZ2dpbmcgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgYXhpcyA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICctLXYnIDogJy0taCcpKVxuICBjb25zdCBsYWJlbFNpZGUgPSBjb21wdXRlZCgoKSA9PiAnLScgKyAocHJvcHMuc3dpdGNoTGFiZWxTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICkpXG5cbiAgY29uc3QgaW5uZXJNaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNaW4pID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWluIDwgcHJvcHMubWluXG4gICAgICA/IHByb3BzLm1pblxuICAgICAgOiBwcm9wcy5pbm5lck1pblxuICApKVxuICBjb25zdCBpbm5lck1heCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1heCkgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNYXggPiBwcm9wcy5tYXhcbiAgICAgID8gcHJvcHMubWF4XG4gICAgICA6IHByb3BzLmlubmVyTWF4XG4gICkpXG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICAgICYmIGlubmVyTWluLnZhbHVlIDwgaW5uZXJNYXgudmFsdWVcbiAgKSlcblxuICBjb25zdCByb3VuZFZhbHVlRm4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnN0ZXAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ID0+IHZcbiAgICB9XG5cbiAgICBjb25zdCBkZWNpbWFscyA9IChTdHJpbmcocHJvcHMuc3RlcCkudHJpbSgpLnNwbGl0KCcuJylbIDEgXSB8fCAnJykubGVuZ3RoXG4gICAgcmV0dXJuIHYgPT4gcGFyc2VGbG9hdCh2LnRvRml4ZWQoZGVjaW1hbHMpKVxuICB9KVxuXG4gIGNvbnN0IGtleVN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGlubmVyRGlmZiA9IGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlXG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBpbm5lckRpZmYgPT09IDBcbiAgICAgICAgPyAnMnB4J1xuICAgICAgICA6IGAkeyAxMDAgKiBpbm5lckRpZmYgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIGlubmVyTWluLnZhbHVlKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgbW9kZWwgPSByb3VuZFZhbHVlRm4udmFsdWUobW9kZWwpXG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IGtleVN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IGlubmVyQmFyTGVuLnZhbHVlID09PSAwXG4gICAgICA/ICcycHgnXG4gICAgICA6IDEwMCAqIG1hcmtlclN0ZXAudmFsdWUgLyBpbm5lckJhckxlbi52YWx1ZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgcm91bmRWYWx1ZUZuLFxuICAgICAga2V5U3RlcCxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBnZXROb2RlRGF0YSA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2xpZGVyUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IHYgPT09IG51bGxcbiAgICB9LFxuXG4gICAgbGFiZWxWYWx1ZTogWyBTdHJpbmcsIE51bWJlciBdXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVNsaWRlckVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHN0YXRlLCBtZXRob2RzIH0gPSB1c2VTbGlkZXIoe1xuICAgICAgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZyxcbiAgICAgIGZvcm1BdHRyczogdXNlRm9ybUF0dHJzKHByb3BzKVxuICAgIH0pXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY3VyUmF0aW8gPSByZWYoMClcbiAgICBjb25zdCBtb2RlbCA9IHJlZigwKVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTW9kZWwgKCkge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaW5uZXJNaW4udmFsdWVcbiAgICAgICAgOiBiZXR3ZWVuKHByb3BzLm1vZGVsVmFsdWUsIHN0YXRlLmlubmVyTWluLnZhbHVlLCBzdGF0ZS5pbm5lck1heC52YWx1ZSlcbiAgICB9XG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IGAkeyBwcm9wcy5tb2RlbFZhbHVlIH18JHsgc3RhdGUuaW5uZXJNaW4udmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1heC52YWx1ZSB9YCxcbiAgICAgIG5vcm1hbGl6ZU1vZGVsXG4gICAgKVxuXG4gICAgbm9ybWFsaXplTW9kZWwoKVxuXG4gICAgY29uc3QgbW9kZWxSYXRpbyA9IGNvbXB1dGVkKCgpID0+IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSkpXG4gICAgY29uc3QgcmF0aW8gPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuYWN0aXZlLnZhbHVlID09PSB0cnVlID8gY3VyUmF0aW8udmFsdWUgOiBtb2RlbFJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICBbIHN0YXRlLnBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICAgIFsgc3RhdGUuc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChyYXRpby52YWx1ZSAtIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbkltZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnNlbGVjdGlvbkltZyB9KSAhaW1wb3J0YW50YFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBnZXRUaHVtYiA9IG1ldGhvZHMuZ2V0VGh1bWJSZW5kZXJGbih7XG4gICAgICBmb2N1c1ZhbHVlOiB0cnVlLFxuICAgICAgZ2V0Tm9kZURhdGEsXG4gICAgICByYXRpbyxcbiAgICAgIGxhYmVsOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIHByb3BzLmxhYmVsVmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gcHJvcHMubGFiZWxWYWx1ZVxuICAgICAgICAgIDogbW9kZWwudmFsdWVcbiAgICAgICkpLFxuICAgICAgdGh1bWJDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMudGh1bWJDb2xvciB8fCBwcm9wcy5jb2xvciksXG4gICAgICBsYWJlbENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbENvbG9yKSxcbiAgICAgIGxhYmVsVGV4dENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbFRleHRDb2xvcilcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhY2tDb250YWluZXJFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG1ldGhvZHMub25Nb2JpbGVDbGljayB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgb25Nb3VzZWRvd246IG1ldGhvZHMub25BY3RpdmF0ZSxcbiAgICAgICAgICAgIG9uRm9jdXMsXG4gICAgICAgICAgICBvbkJsdXI6IG1ldGhvZHMub25CbHVyLFxuICAgICAgICAgICAgb25LZXlkb3duLFxuICAgICAgICAgICAgb25LZXl1cDogbWV0aG9kcy5vbktleXVwXG4gICAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAoY2hhbmdlKSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBlbWl0KCdjaGFuZ2UnLCBtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREcmFnZ2luZyAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uIChldmVudCwgZHJhZ2dpbmcgPSBzdGF0ZS5kcmFnZ2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBtZXRob2RzLmdldERyYWdnaW5nUmF0aW8oZXZlbnQsIGRyYWdnaW5nKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IG1ldGhvZHMuY29udmVydFJhdGlvVG9Nb2RlbChyYXRpbylcblxuICAgICAgY3VyUmF0aW8udmFsdWUgPSBwcm9wcy5zbmFwICE9PSB0cnVlIHx8IHByb3BzLnN0ZXAgPT09IDBcbiAgICAgICAgPyByYXRpb1xuICAgICAgICA6IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzICgpIHtcbiAgICAgIHN0YXRlLmZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gICAgICBpZiAoIWtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLmtleVN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgc3RhdGUucm91bmRWYWx1ZUZuLnZhbHVlKG1vZGVsLnZhbHVlICsgb2Zmc2V0KSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGp1c3RpZnktY2VudGVyIHEtcHQtc21cIj5cbiAgICA8cS1idG5cbiAgICAgIGZhYlxuICAgICAgZmxhdFxuICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgIDpjb2xvcj1cImhhc1ByZXZpb3VzLnZhbHVlID8gJ2dyZXktMTAnIDogJ2dyZXktNSdcIlxuICAgICAgOmRpc2FibGU9XCIhaGFzUHJldmlvdXMudmFsdWVcIlxuICAgICAgOmljb249XCJvdXRsaW5lZFNraXBQcmV2aW91c1wiXG4gICAgICBAY2xpY2s9XCJxdWV1ZVNlcnZpY2U/LnBsYXlQcmV2aW91c1wiXG4gICAgPlxuICAgICAgPHEtdG9vbHRpcD57eyBoYXNQcmV2aW91cy52YWx1ZSB9fTwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG5cbiAgICAgIGZhYlxuICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgIHJvdW5kXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgY29sb3I9XCJncmV5LTEwXCJcbiAgICAgIDppY29uPVwiIWF1ZGlvU2VydmljZT8uaXNQbGF5aW5nLnZhbHVlID8gb3V0bGluZWRQbGF5QXJyb3cgOiBvdXRsaW5lZFBhdXNlXCJcbiAgICAgIEBjbGljaz1cImF1ZGlvU2VydmljZT8udG9nZ2xlUGF1c2VcIlxuICAgID5cbiAgICAgIDxxLXRvb2x0aXA+e3tcbiAgICAgICAgIWF1ZGlvU2VydmljZT8uaXNQbGF5aW5nLnZhbHVlID8gJ1BsYXknIDogJ1BhdXNlJ1xuICAgICAgfX08L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuXG4gICAgPHEtYnRuXG4gICAgICBmbGF0XG4gICAgICBmYWJcbiAgICAgIHNpemU9XCJtZFwiXG4gICAgICA6Y29sb3I9XCJoYXNOZXh0LnZhbHVlID8gJ2dyZXktMTAnIDogJ2dyZXktNSdcIlxuICAgICAgOmRpc2FibGU9XCIhaGFzTmV4dC52YWx1ZVwiXG4gICAgICA6aWNvbj1cIm91dGxpbmVkU2tpcE5leHRcIlxuICAgICAgQGNsaWNrPVwicXVldWVTZXJ2aWNlPy5wbGF5TmV4dFwiXG4gICAgPlxuICAgICAgPHEtdG9vbHRpcD5OZXh0PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgIGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1wdC1sZ1wiXG4gICAgdi1pZj1cInF1ZXVlU2VydmljZT8uY3VycmVudFRyYWNrICE9PSBudWxsXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgY3VycmVudFRpbWVTdHJpbmcgfX1cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLXNsaWRlclxuICAgICAgICBjbGFzcz1cInByb2dyZXNzLXNtb290aFwiXG4gICAgICAgIHYtbW9kZWw9XCJjdXJyZW50VGltZVwiXG4gICAgICAgIEBwYW49XCJvblBhblwiXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJvbkNoYW5nZVwiXG4gICAgICAgIDppbm5lci1taW49XCIwXCJcbiAgICAgICAgOmlubmVyLW1heD1cImJ1ZmZlcmVkVGltZVwiXG4gICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgOm1heD1cInRvdGFsVGltZVwiXG4gICAgICAgIDpzdGVwPVwiMC4xXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIHt7IHRvdGFsVGltZVN0cmluZyB9fVxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZFNraXBOZXh0LFxuICBvdXRsaW5lZFNraXBQcmV2aW91cyxcbiAgb3V0bGluZWRQYXVzZSxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcblxuaW1wb3J0IEF1ZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0F1ZGlvU2VydmljZSc7XG5pbXBvcnQgUXVldWVTZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIG9uQmVmb3JlTW91bnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCBhdWRpb1NlcnZpY2UgPSBpbmplY3Q8QXVkaW9TZXJ2aWNlPignYXVkaW9TZXJ2aWNlJyk7XG5pZiAoYXVkaW9TZXJ2aWNlID09PSB1bmRlZmluZWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdBdWRpbyBTZXJ2aWNlIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgcXVldWVTZXJ2aWNlID0gaW5qZWN0PFF1ZXVlU2VydmljZT4oJ3F1ZXVlU2VydmljZScpO1xuaWYgKHF1ZXVlU2VydmljZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHRocm93IG5ldyBFcnJvcignUXVldWUgU2VydmljZSBub3QgZm91bmQnKTtcbn1cblxuY29uc3QgY3VycmVudFRpbWUgPSByZWYoMCk7XG5jb25zdCBjdXJyZW50VGltZVN0cmluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIER1cmF0aW9uLmZyb21TZWNvbmRzKGN1cnJlbnRUaW1lLnZhbHVlKS50b0R1cmF0aW9uU3RyaW5nKCk7XG59KTtcbmNvbnN0IHRvdGFsVGltZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGF1ZGlvU2VydmljZS5kdXJhdGlvbj8udmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG59KTtcbmNvbnN0IHRvdGFsVGltZVN0cmluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIER1cmF0aW9uLmZyb21TZWNvbmRzKHRvdGFsVGltZS52YWx1ZSkudG9EdXJhdGlvblN0cmluZygpO1xufSk7XG5cbmNvbnN0IGJ1ZmZlcmVkVGltZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGF1ZGlvU2VydmljZS5idWZmZXJQb3NpdGlvbj8udmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG59KTtcblxuY29uc3QgaGFzTmV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlU2VydmljZS5oYXNOZXh0O1xufSk7XG5jb25zdCBoYXNQcmV2aW91cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlU2VydmljZS5oYXNQcmV2aW91cztcbn0pO1xuXG5jb25zdCBpc1Bhbm5pbmcgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNVcGRhdGluZyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IG9uUGFuID0gKHBoYXNlOiAnc3RhcnQnIHwgJ2VuZCcpID0+IHtcbiAgaWYgKHBoYXNlID09PSAnc3RhcnQnKSB7XG4gICAgaXNQYW5uaW5nLnZhbHVlID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwaGFzZSA9PT0gJ2VuZCcpIHtcbiAgICBpc1Bhbm5pbmcudmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChhdWRpb1NlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaXNQYW5uaW5nLnZhbHVlID0gZmFsc2U7XG5cbiAgICAgIGlzVXBkYXRpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgYXVkaW9TZXJ2aWNlLnNlZWsoRHVyYXRpb24uZnJvbVNlY29uZHMoY3VycmVudFRpbWUudmFsdWUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgaXNVcGRhdGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBvbkNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoaXNQYW5uaW5nLnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNVcGRhdGluZy52YWx1ZSA9IHRydWU7XG4gIGF1ZGlvU2VydmljZT8uc2VlayhEdXJhdGlvbi5mcm9tU2Vjb25kcyh2YWx1ZSB8fCAwKSkudGhlbigoKSA9PiB7XG4gICAgaXNVcGRhdGluZy52YWx1ZSA9IGZhbHNlO1xuICB9KTtcbn07XG5cbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICB3YXRjaChhdWRpb1NlcnZpY2U/LnBvc2l0aW9uLCAodmFsdWUpID0+IHtcbiAgICBpZiAoIWlzVXBkYXRpbmcudmFsdWUpIHtcbiAgICAgIGN1cnJlbnRUaW1lLnZhbHVlID0gdmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG4gICAgfVxuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucHJvZ3Jlc3Mtc21vb3RoIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04IHJvdyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFJlcGVhdFwiIGNsYXNzPVwidGV4dC1kYXJrIHEtbXgtc21cIj5cbiAgICAgICAgPHEtdG9vbHRpcD5SZXBlYXQ8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRTaHVmZmxlXCIgY2xhc3M9XCJ0ZXh0LWRhcmsgcS1teC1zbVwiPlxuICAgICAgICA8cS10b29sdGlwPlNodWZmbGU8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0blxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBmbGF0XG4gICAgICAgIDppY29uPVwib3V0bGluZWRRdWV1ZU11c2ljXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhcmsgcS1teC1zbVwiXG4gICAgICAgIEBjbGljaz1cImdvdG9RdWV1ZVBhZ2VcIlxuICAgICAgPlxuICAgICAgICA8cS10b29sdGlwPlF1ZXVlPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG5cbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgZmxhdFxuICAgICAgICA6aWNvbj1cIm1hdFJhZGlvXCJcbiAgICAgICAgY2xhc3M9XCJxLW14LXNtXCJcbiAgICAgICAgOmNsYXNzPVwicmFkaW9TZXJ2aWNlPy5pc0FjdGl2ZS52YWx1ZSA/ICd0ZXh0LXByaW1hcnknIDogJ3RleHQtZGFyaydcIlxuICAgICAgICBAY2xpY2s9XCJyYWRpb1NlcnZpY2U/LnRvZ2dsZSgpXCJcbiAgICAgID5cbiAgICAgICAgPHEtdG9vbHRpcD57eyByYWRpb1NlcnZpY2U/LmlzQWN0aXZlIH19PC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cInZvbHVtZV91cFwiIGNsYXNzPVwidGV4dC1kYXJrXCIgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLXNsaWRlclxuICAgICAgICAgICAgdi1tb2RlbD1cInZvbHVtZVwiXG4gICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICA6bWF4PVwiMVwiXG4gICAgICAgICAgICA6c3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMHB4XCJcbiAgICAgICAgICAgIHRodW1iLXNpemU9XCIxMHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUXVldWVNdXNpYyxcbiAgb3V0bGluZWRSZXBlYXQsXG4gIG91dGxpbmVkU2h1ZmZsZSxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgbWF0UmFkaW8gfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgeyBpbmplY3QsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IFJhZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1JhZGlvU2VydmljZSc7XG5pbXBvcnQgQXVkaW9TZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXVkaW9TZXJ2aWNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG4vLyBJbmplY3RlZCBwcm9wc1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcmFkaW9TZXJ2aWNlID0gaW5qZWN0PFJhZGlvU2VydmljZT4oJ3JhZGlvU2VydmljZScpO1xuY29uc3QgYXVkaW9TZXJ2aWNlID0gaW5qZWN0PEF1ZGlvU2VydmljZT4oJ2F1ZGlvU2VydmljZScpO1xuXG5jb25zdCB2b2x1bWUgPSByZWYoMSk7XG5cbmNvbnN0IGdvdG9RdWV1ZVBhZ2UgPSAoKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ1F1ZXVlJ1xuICB9KTtcbn07XG5cbi8vIFdhdGNoIHZvbHVtZSBjaGFuZ2VzXG53YXRjaCh2b2x1bWUsIChuZXdWb2x1bWUpID0+IHtcbiAgYXVkaW9TZXJ2aWNlPy5zZXRWb2x1bWUobmV3Vm9sdW1lKTtcbn0pO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwibEhoIExwUiBmRmZcIj5cbiAgICA8cS1oZWFkZXIgY2xhc3M9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5cbiAgICAgIDxBcHBCYXI+PC9BcHBCYXI+XG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWRyYXdlclxuICAgICAgc2hvdy1pZi1hYm92ZVxuICAgICAgdi1tb2RlbD1cImxlZnREcmF3ZXJPcGVuXCJcbiAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgIGJvcmRlcmVkXG4gICAgPlxuICAgICAgPE5hdmlnYXRpb25SYWlsPjwvTmF2aWdhdGlvblJhaWw+XG4gICAgPC9xLWRyYXdlcj5cblxuXG4gICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICA8cm91dGVyLXZpZXcgdi1zbG90PVwieyBDb21wb25lbnQgfVwiPlxuICAgICAgICA8a2VlcC1hbGl2ZSA6aW5jbHVkZT1cIlsnSG9tZVBhZ2UnLCAnQ2lyY2xlUGFnZScsICdRdWV1ZVBhZ2UnXVwiPlxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiQ29tcG9uZW50XCIgLz5cbiAgICAgICAgPC9rZWVwLWFsaXZlPlxuICAgICAgPC9yb3V0ZXItdmlldz5cbiAgICA8L3EtcGFnZS1jb250YWluZXI+XG5cbiAgICA8cS1mb290ZXJcbiAgICAgIGJvcmRlcmVkXG4gICAgICBjbGFzcz1cImJnLXdoaXRlXCJcbiAgICA+XG4gICAgICA8Qm90dG9tUGxheWVyQ29udHJvbEJhcj48L0JvdHRvbVBsYXllckNvbnRyb2xCYXI+XG4gICAgPC9xLWZvb3Rlcj5cbiAgPC9xLWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBLZWVwQWxpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgTmF2aWdhdGlvblJhaWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvTmF2Z2F0aW9uUmFpbC9OYXZpZ2F0aW9uUmFpbC52dWUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdzcmMvY29tcG9uZW50cy9BcHBCYXIudnVlJztcbmltcG9ydCBCb3R0b21QbGF5ZXJDb250cm9sQmFyIGZyb20gJ3NyYy9jb21wb25lbnRzL0JvdHRvbVBsYXllckNvbnRyb2xCYXIvQm90dG9tUGxheWVyQ29udHJvbEJhci52dWUnO1xuY29uc3QgbGVmdERyYXdlck9wZW4gPSByZWYoZmFsc2UpO1xuY29uc3QgcmlnaHREcmF3ZXJPcGVuID0gcmVmKHRydWUpO1xuXG5jb25zdCB0b2dnbGVMZWZ0RHJhd2VyID0gKCkgPT4ge1xuICBsZWZ0RHJhd2VyT3Blbi52YWx1ZSA9ICFsZWZ0RHJhd2VyT3Blbi52YWx1ZTtcbn07XG5jb25zdCB0b2dnbGVSaWdodERyYXdlciA9ICgpID0+IHtcbiAgcmlnaHREcmF3ZXJPcGVuLnZhbHVlID0gIXJpZ2h0RHJhd2VyT3Blbi52YWx1ZTtcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJvZmZzZXQiLCJzdHlsZSIsInBvc2l0aW9uIiwic2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZHJhZ2dpbmciLCJjbGFzc2VzIiwicmF0aW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsSUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDRCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBQ0QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBRVYsWUFBWTtBQUFBLE1BQ1YsTUFBTSxDQUFFLFFBQVEsTUFBUTtBQUFBLE1BQ3hCLFNBQVM7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBRUQsT0FBTyxDQUFFLFVBQVUsU0FBVztBQUFBLEVBRTlCLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBSSxFQUFBLElBQUssbUJBQW9CO0FBRTlDLFVBQU0sVUFBVSxPQUFPLFdBQVcsYUFBYTtBQUMvQyxRQUFJLFlBQVksZUFBZTtBQUM3QixjQUFRLE1BQU0sc0NBQXNDO0FBQ3BELGFBQU87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
