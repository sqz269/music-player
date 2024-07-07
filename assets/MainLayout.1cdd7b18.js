import { c as createComponent, u as useModelToggleProps, a as useDarkProps, b as useModelToggleEmits, d as useDark, e as useTimeout, i as inject, f as emptyRenderFn, r as ref, g as computed, h as useModelToggle, j as useHistory, w as watch, o as onMounted, n as nextTick, k as onBeforeUnmount, l as withDirectives, m as h, p as hDir, q as hSlot, s as layoutKey, t as getCurrentInstance, v as usePreventScroll, x as provide, y as pageContainerKey, z as isRuntimeSsrPreHydration, A as hMergeSlot, B as getScrollbarWidth, C as reactive, D as onUnmounted, E as defineComponent, F as useQuasar, P as PlaylistVisibility, G as openBlock, H as createBlock, I as withCtx, Q as QDialog, J as createVNode, K as QCardSection, L as QInput, M as QCardActions, N as QBtn, O as QCard, R as createBaseVNode, _ as _export_sfc, S as useRouter, T as unref, U as createElementBlock, V as QSeparator, W as createTextVNode, X as Fragment, Y as renderList, Z as QIcon, $ as toDisplayString, a0 as Ripple, a1 as hUniqueSlot, a2 as QSpinner, a3 as QToggle, a4 as TrackInfo, a5 as createCommentVNode, a6 as isNumber, a7 as isObject, a8 as useFormProps, a9 as position, aa as useFormInject, ab as useFormAttrs, ac as stopAndPrevent, ad as Duration, ae as onBeforeMount, af as resolveComponent, ag as KeepAlive, ah as resolveDynamicComponent } from "./index.bb81baa4.js";
import { T as TouchPan, Q as QResizeObserver, a as QScrollObserver } from "./QScrollObserver.46822bac.js";
import { b as between, Q as QSelect } from "./QSelect.5cc552e1.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.5e53dc66.js";
import { Q as QList } from "./QList.32c8fddc.js";
import { o as outlinedPlaylistAdd, a as outlinedPlaylistPlay, b as outlinedHistory, c as outlinedFavoriteBorder, d as outlinedHome, e as outlinedSearch, f as outlinedRadio, g as outlinedAccountCircle, h as outlinedSettings, i as outlinedLightMode, j as outlinedDarkMode, k as outlinedArrowBack, l as outlinedArrowForward, m as outlinedPlaylistAddCircle, Q as QTooltip, n as outlinedSkipPrevious, p as outlinedPlayArrow, q as outlinedPause, r as outlinedSkipNext, s as outlinedRepeat, t as outlinedShuffle, u as outlinedQueueMusic } from "./QTooltip.912416cf.js";
import { m as matHome, a as matSearch, b as matRadio, Q as QBtnDropdown, c as matFavorite } from "./QBtnDropdown.5a3ef5ec.js";
import { C as ClosePopup } from "./ClosePopup.45084690.js";
import { Q as QImg } from "./QImg.19fc09d0.js";
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
const _sfc_main$a = defineComponent({
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
var PlaylistCreateDialog = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "PlaylistCreateDialog.vue"]]);
const _hoisted_1$6 = { key: 1 };
const _hoisted_2$5 = { class: "text-weight-medium" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, " Create Playlist ", -1);
const _hoisted_4$2 = { class: "text-weight-medium" };
const _sfc_main$9 = defineComponent({
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
var PlaylistNavigationList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "PlaylistNavigationList.vue"]]);
const _hoisted_1$5 = { class: "text-weight-medium" };
const _sfc_main$8 = defineComponent({
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
var NavigationRail = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "NavigationRail.vue"]]);
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
const _hoisted_1$4 = { key: 0 };
const _hoisted_2$4 = { key: 1 };
const _sfc_main$7 = defineComponent({
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
          onClick: (_c = unref(authService)) == null ? void 0 : _c.login,
          rounded: "",
          color: "secondary"
        }, {
          default: withCtx(() => [
            createTextVNode(" Login ")
          ]),
          _: 1
        }, 8, ["onClick"])) : (openBlock(), createBlock(QBtnDropdown, {
          key: 1,
          icon: unref(outlinedAccountCircle),
          flat: "",
          rounded: "",
          unelevated: "",
          color: "secondary"
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
var AccountButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "AccountButton.vue"]]);
const _sfc_main$6 = defineComponent({
  __name: "DropdownSettingsButton",
  setup(__props) {
    const $q = useQuasar();
    ref(false);
    const darkMode = ref($q.dark.isActive);
    watch(darkMode, (value) => {
      $q.dark.set(value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBtnDropdown, {
        icon: unref(outlinedSettings),
        flat: "",
        rounded: "",
        color: "secondary"
      }, {
        default: withCtx(() => [
          createVNode(QList, null, {
            default: withCtx(() => [
              withDirectives((openBlock(), createBlock(QItem, {
                clickable: "",
                dense: ""
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QToggle, {
                        modelValue: darkMode.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => darkMode.value = $event),
                        label: "Dark Mode"
                      }, null, 8, ["modelValue"])
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
      }, 8, ["icon"]);
    };
  }
});
var DropdownSettingsButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "DropdownSettingsButton.vue"]]);
var AppBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  __name: "AppBar",
  setup(__props) {
    const $q = useQuasar();
    const $router = useRouter();
    const goBack = () => {
      $router.back();
    };
    const goForward = () => {
      $router.forward();
    };
    computed(() => {
      return $q.dark.isActive ? outlinedLightMode : outlinedDarkMode;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QHeader, { class: "bg-filter-blur-10 appbar" }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
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
              createVNode(DropdownSettingsButton)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var AppBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-7a76c21d"], ["__file", "AppBar.vue"]]);
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
const _hoisted_1$3 = { class: "text-h6" };
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
        if (playlistService.favorite.value === null) {
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
                      class: "text-subtitle2 link",
                      onClick: _cache[0] || (_cache[0] = ($event) => gotoAlbum(currentTrack.value.albumId))
                    }, toDisplayString(currentTrack.value.albumName), 1),
                    createBaseVNode("div", _hoisted_2$3, [
                      createBaseVNode("div", _hoisted_3$2, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(currentTrack.value.circle, (circle, index) => {
                          return openBlock(), createElementBlock("span", {
                            class: "text-subtitle1 text-bold cursor-pointer artist-name",
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
var TrackCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4990a40a"], ["__file", "TrackCard.vue"]]);
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
            disable: !hasPrevious.value.value,
            icon: unref(outlinedSkipPrevious),
            onClick: (_a = unref(queueService)) == null ? void 0 : _a.playPrevious
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode("Previous")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["disable", "icon", "onClick"]),
          createVNode(QBtn, {
            fab: "",
            class: "q-mx-md",
            round: "",
            size: "md",
            color: "accent",
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
          }, 8, ["disable", "icon", "onClick"])
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
var MediaControl = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2e456a5a"], ["__file", "MediaControl.vue"]]);
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
            class: "q-mx-sm"
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
            class: "q-mx-sm"
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
            class: "q-mx-sm",
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
            class: "q-mx-sm",
            color: ((_a = unref(radioService)) == null ? void 0 : _a.isActive.value) ? "primary" : "disabled",
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
          }, 8, ["icon", "color"])
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(QItem, { class: "full-width" }, {
            default: withCtx(() => [
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QIcon, { name: "volume_up" })
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
var BottomPlayerControlBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "row full-width full-height justify-evenly" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "col-5" };
const _hoisted_4 = { class: "col-3" };
const _sfc_main$1 = defineComponent({
  __name: "BottomPlayerControlBar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QToolbar), { class: "q-pa-md toolbar" }, {
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
var BottomPlayerControlBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5af97ec2"], ["__file", "BottomPlayerControlBar.vue"]]);
const _sfc_main = defineComponent({
  __name: "MainLayout",
  setup(__props) {
    const leftDrawerOpen = ref(false);
    ref(true);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh LpR fFf" }, {
        default: withCtx(() => [
          createVNode(AppBar),
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
          createVNode(QFooter, { bordered: "" }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC4xY2RkN2IxOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9kcmF3ZXIvUURyYXdlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnZS9RUGFnZUNvbnRhaW5lci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZm9vdGVyL1FGb290ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2xheW91dC9RTGF5b3V0LmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9QbGF5bGlzdENyZWF0ZURpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXZnYXRpb25SYWlsL1BsYXlsaXN0TmF2aWdhdGlvbkxpc3QudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmF2Z2F0aW9uUmFpbC9OYXZpZ2F0aW9uUmFpbC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXJUaXRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BhY2UvUVNwYWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY291bnRCdXR0b24udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJvcGRvd25TZXR0aW5nc0J1dHRvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BcHBCYXIudnVlIiwiLi4vLi4vLi4vc3JjL3V0aWxzL0NoYW5nZWFibGUvQ2hhbmdlYWJsZS50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVBsYXllckNvbnRyb2xCYXIvVHJhY2tDYXJkLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQm90dG9tUGxheWVyQ29udHJvbEJhci9NZWRpYUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQm90dG9tUGxheWVyQ29udHJvbEJhci9RdWV1ZUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL2xheW91dHMvTWFpbkxheW91dC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgd2l0aERpcmVjdGl2ZXMsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlSGlzdG9yeSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1oaXN0b3J5LmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgdXNlUHJldmVudFNjcm9sbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wcmV2ZW50LXNjcm9sbC5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3VzZS10aW1lb3V0LmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG91Y2gtcGFuL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG4gICAgbm9NaW5pQW5pbWF0aW9uOiBCb29sZWFuLFxuXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAyM1xuICAgIH0sXG4gICAgc2hvd0lmQWJvdmU6IEJvb2xlYW4sXG5cbiAgICBiZWhhdmlvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2RlZmF1bHQnLCAnZGVza3RvcCcsICdtb2JpbGUnIF0uaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9LFxuXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBvdmVybGF5OiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgbm9Td2lwZU9wZW46IEJvb2xlYW4sXG4gICAgbm9Td2lwZUNsb3NlOiBCb29sZWFuLFxuICAgIG5vU3dpcGVCYWNrZHJvcDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnb25MYXlvdXQnLCAnbWluaVN0YXRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IHByZXZlbnRCb2R5U2Nyb2xsIH0gPSB1c2VQcmV2ZW50U2Nyb2xsKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCwgcmVtb3ZlVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUURyYXdlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgbGV0IGxhc3REZXNrdG9wU3RhdGUsIHRpbWVyTWluaSA9IG51bGwsIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyXG5cbiAgICBjb25zdCBiZWxvd0JyZWFrcG9pbnQgPSByZWYoXG4gICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgIHx8IChwcm9wcy5iZWhhdmlvciAhPT0gJ2Rlc2t0b3AnICYmICRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSA8PSBwcm9wcy5icmVha3BvaW50KVxuICAgIClcblxuICAgIGNvbnN0IGlzTWluaSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5taW5pID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IHNpemUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBpc01pbmkudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5taW5pV2lkdGhcbiAgICAgICAgOiBwcm9wcy53aWR0aFxuICAgICkpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaGlkZU9uUm91dGVDaGFuZ2UgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgICAgJiYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSB8fCBvblNjcmVlbk92ZXJsYXkudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICBhZGRUb0hpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBhcHBseVBvc2l0aW9uKDApXG5cbiAgICAgIGlmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJJbnN0YW5jZSA9ICRsYXlvdXQuaW5zdGFuY2VzWyBvdGhlclNpZGUudmFsdWUgXVxuICAgICAgICBpZiAob3RoZXJJbnN0YW5jZSAhPT0gdm9pZCAwICYmIG90aGVySW5zdGFuY2UuYmVsb3dCcmVha3BvaW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgb3RoZXJJbnN0YW5jZS5oaWRlKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlCYWNrZHJvcCgxKVxuICAgICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZSh0cnVlKVxuICAgICAgICBub0V2ZW50ICE9PSB0cnVlICYmIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQsIG5vRXZlbnQpIHtcbiAgICAgIHJlbW92ZUZyb21IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuXG4gICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogc2l6ZS52YWx1ZSlcblxuICAgICAgY2xlYW51cCgpXG5cbiAgICAgIGlmIChub0V2ZW50ICE9PSB0cnVlKSB7XG4gICAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7IGVtaXQoJ2hpZGUnLCBldnQpIH0sIGR1cmF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRpbWVvdXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdXNlTW9kZWxUb2dnbGUoe1xuICAgICAgc2hvd2luZyxcbiAgICAgIGhpZGVPblJvdXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU2hvdyxcbiAgICAgIGhhbmRsZUhpZGVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRUb0hpc3RvcnksIHJlbW92ZUZyb21IaXN0b3J5IH0gPSB1c2VIaXN0b3J5KHNob3dpbmcsIGhpZGUsIGhpZGVPblJvdXRlQ2hhbmdlKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICBiZWxvd0JyZWFrcG9pbnQsXG4gICAgICBoaWRlXG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRTaWRlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2lkZSA9PT0gJ3JpZ2h0JylcblxuICAgIGNvbnN0IHN0YXRlRGlyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gMSA6IC0xKVxuICAgIClcblxuICAgIGNvbnN0IGZsYWdCYWNrZHJvcEJnID0gcmVmKDApXG4gICAgY29uc3QgZmxhZ1Bhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ01pbmlBbmltYXRlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdDb250ZW50UG9zaXRpb24gPSByZWYoIC8vIHN0YXJ0aW5nIHdpdGggXCJoaWRkZW5cIiBmb3IgU1NSXG4gICAgICBzaXplLnZhbHVlICogc3RhdGVEaXJlY3Rpb24udmFsdWVcbiAgICApXG5cbiAgICBjb25zdCBvdGhlclNpZGUgPSBjb21wdXRlZCgoKSA9PiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JykpXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlICYmIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAgID8gKHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWUgPyBwcm9wcy5taW5pV2lkdGggOiBzaXplLnZhbHVlKVxuICAgICAgICA6IDBcbiAgICApKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YocmlnaHRTaWRlLnZhbHVlID8gJ1InIDogJ0wnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvbkxheW91dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IG9uU2NyZWVuT3ZlcmxheSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnZnVsbHNjcmVlbiBxLWRyYXdlcl9fYmFja2Ryb3AnXG4gICAgICArIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBmbGFnUGFubmluZy52YWx1ZSA9PT0gZmFsc2UgPyAnIGhpZGRlbicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwwLDAsJHsgZmxhZ0JhY2tkcm9wQmcudmFsdWUgKiAwLjQgfSlgXG4gICAgfSkpXG5cbiAgICBjb25zdCBoZWFkZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBmb290ZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBhYm92ZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlICYmIGhlYWRlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlICYmIGZvb3RlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7IHNpemUudmFsdWUgfXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlIH1weClgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBzdHlsZVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oc3R5bGUsIGFib3ZlU3R5bGUudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kcmF3ZXJfX2NvbnRlbnQgZml0ICdcbiAgICAgICsgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnc2Nyb2xsJyA6ICdvdmVyZmxvdy1hdXRvJylcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWRyYXdlciBxLWRyYXdlci0tJHsgcHJvcHMuc2lkZSB9YFxuICAgICAgKyAoZmxhZ01pbmlBbmltYXRlLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tbWluaS1hbmltYXRlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIG5vLXRyYW5zaXRpb24nXG4gICAgICAgICAgOiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycpXG4gICAgICApXG4gICAgICArIChcbiAgICAgICAgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIGZpeGVkIHEtZHJhd2VyLS1vbi10b3AgcS1kcmF3ZXItLW1vYmlsZSBxLWRyYXdlci0tdG9wLXBhZGRpbmcnXG4gICAgICAgICAgOiBgIHEtZHJhd2VyLS0keyBpc01pbmkudmFsdWUgPT09IHRydWUgPyAnbWluaScgOiAnc3RhbmRhcmQnIH1gXG4gICAgICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgfHwgb25MYXlvdXQudmFsdWUgIT09IHRydWUgPyAnIGZpeGVkJyA6ICcnKVxuICAgICAgICAgICsgKHByb3BzLm92ZXJsYXkgPT09IHRydWUgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW9uLXRvcCcgOiAnJylcbiAgICAgICAgICArIChoZWFkZXJTbG90LnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tdG9wLXBhZGRpbmcnIDogJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgb3BlbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHByb3BzLm5vU3dpcGVPcGVuICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHByb3BzLnNpZGUgOiBvdGhlclNpZGUudmFsdWVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25PcGVuUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUNsb3NlICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQmVsb3dCcmVha3BvaW50ICgpIHtcbiAgICAgIHVwZGF0ZUxvY2FsKGJlbG93QnJlYWtwb2ludCwgKFxuICAgICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgICApKVxuICAgIH1cblxuICAgIHdhdGNoKGJlbG93QnJlYWtwb2ludCwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgLy8gZnJvbSBsZyB0byB4c1xuICAgICAgICBsYXN0RGVza3RvcFN0YXRlID0gc2hvd2luZy52YWx1ZVxuICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGhpZGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdtb2JpbGUnXG4gICAgICAgICYmIGxhc3REZXNrdG9wU3RhdGUgIT09IGZhbHNlXG4gICAgICApIHsgLy8gZnJvbSB4cyB0byBsZ1xuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFwcGx5UG9zaXRpb24oMClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgICAgY2xlYW51cCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zaWRlLCAobmV3U2lkZSwgb2xkU2lkZSkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPSB2b2lkIDBcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLnNwYWNlID0gZmFsc2VcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLm9mZnNldCA9IDBcbiAgICAgIH1cblxuICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG5ld1NpZGUgXSA9IGluc3RhbmNlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc2l6ZSA9IHNpemUudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zcGFjZSA9IG9uTGF5b3V0LnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0ub2Zmc2V0ID0gb2Zmc2V0LnZhbHVlXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQudG90YWxXaWR0aCwgKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLmJlaGF2aW9yICsgcHJvcHMuYnJlYWtwb2ludCxcbiAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludFxuICAgIClcblxuICAgIHdhdGNoKCRsYXlvdXQuaXNDb250YWluZXIsIHZhbCA9PiB7XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHZhbCAhPT0gdHJ1ZSlcbiAgICAgIHZhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbGJhcldpZHRoLCAoKSA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAwIDogdm9pZCAwKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7IHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKSB9KVxuXG4gICAgd2F0Y2gob25MYXlvdXQsIHZhbCA9PiB7XG4gICAgICBlbWl0KCdvbkxheW91dCcsIHZhbClcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKHJpZ2h0U2lkZSwgKCkgPT4geyBhcHBseVBvc2l0aW9uKCkgfSlcblxuICAgIHdhdGNoKHNpemUsIHZhbCA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKClcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dChwcm9wcy5taW5pVG9PdmVybGF5LCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1pbmlUb092ZXJsYXksIHZhbCA9PiB7XG4gICAgICB1cGRhdGVTaXplT25MYXlvdXQodmFsLCBzaXplLnZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiAkcS5sYW5nLnJ0bCwgKCkgPT4geyBhcHBseVBvc2l0aW9uKCkgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1pbmksICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5ub01pbmlBbmltYXRpb24pIHJldHVyblxuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmlTdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIHRpbWVyTWluaSAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBpZiAodm0ucHJveHkgJiYgdm0ucHJveHkuJGVsKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gc3BlZWQgaXQgdXAgYW5kIGFwcGx5IGl0IGltbWVkaWF0ZWx5LFxuICAgICAgICAvLyBldmVuIGZhc3RlciB0aGFuIFZ1ZSdzIG5leHRUaWNrIVxuICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LmFkZCgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICB9XG5cbiAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IHRydWVcbiAgICAgIHRpbWVyTWluaSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lck1pbmkgPSBudWxsXG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0Jywgb25MYXlvdXQudmFsdWUpXG4gICAgICBlbWl0KCdtaW5pU3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgIT09IHZvaWQgMCAmJiBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG5cbiAgICAgIGlmICh0aW1lck1pbmkgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTWluaSlcbiAgICAgICAgdGltZXJNaW5pID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9wbGF0Zm9ybS9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgOiB3aW5kb3dIZWlnaHQudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQudmFsdWUgKyBzaXplLnZhbHVlIC0gJGxheW91dC5oZWlnaHQudmFsdWVcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWZvb3RlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLWJvdHRvbSdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWZvb3Rlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtZm9vdGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChcbiAgICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgKyAoZml4ZWQudmFsdWUgIT09IHRydWUgPyAnIGhpZGRlbicgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbSxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2Zvb3RlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJldmVhbGVkICgpIHtcbiAgICAgIGlmIChwcm9wcy5yZXZlYWwgIT09IHRydWUpIHJldHVyblxuXG4gICAgICBjb25zdCB7IGRpcmVjdGlvbiwgcG9zaXRpb24sIGluZmxlY3Rpb25Qb2ludCB9ID0gJGxheW91dC5zY3JvbGwudmFsdWVcblxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIChcbiAgICAgICAgZGlyZWN0aW9uID09PSAndXAnXG4gICAgICAgIHx8IHBvc2l0aW9uIC0gaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICAgIHx8ICRsYXlvdXQuaGVpZ2h0LnZhbHVlIC0gY29udGFpbmVySGVpZ2h0LnZhbHVlIC0gcG9zaXRpb24gLSBzaXplLnZhbHVlIDwgMzAwXG4gICAgICApKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goWyBzaXplLCAkbGF5b3V0LnNjcm9sbCwgJGxheW91dC5oZWlnaHQgXSwgdXBkYXRlUmV2ZWFsZWQpXG5cbiAgICB3YXRjaCgoKSA9PiAkcS5zY3JlZW4uaGVpZ2h0LCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiB1cGRhdGVMb2NhbCh3aW5kb3dIZWlnaHQsIHZhbClcbiAgICB9KVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID0gaW5zdGFuY2VcbiAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHVwZGF0ZUxheW91dCgnc2l6ZScsIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCBvZmZzZXQudmFsdWUpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZVxuICAgICAgICB9KVxuICAgICAgXSlcblxuICAgICAgcHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2Zvb3RlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIHJlYWN0aXZlLCBjb21wdXRlZCwgd2F0Y2gsIHByb3ZpZGUsIG9uVW5tb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5cbmltcG9ydCBRU2Nyb2xsT2JzZXJ2ZXIgZnJvbSAnLi4vc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcydcbmltcG9ydCBRUmVzaXplT2JzZXJ2ZXIgZnJvbSAnLi4vcmVzaXplLW9ic2VydmVyL1FSZXNpemVPYnNlcnZlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMYXlvdXQnLFxuXG4gIHByb3BzOiB7XG4gICAgY29udGFpbmVyOiBCb29sZWFuLFxuICAgIHZpZXc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdoaGggbHByIGZmZicsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gL14oaHxsKWgoaHxyKSBscHIgKGZ8bClmKGZ8cikkLy50ZXN0KHYudG9Mb3dlckNhc2UoKSlcbiAgICB9LFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uLFxuICAgIG9uU2Nyb2xsSGVpZ2h0OiBGdW5jdGlvbixcbiAgICBvblJlc2l6ZTogRnVuY3Rpb25cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIC8vIHBhZ2UgcmVsYXRlZFxuICAgIGNvbnN0IGhlaWdodCA9IHJlZigkcS5zY3JlZW4uaGVpZ2h0KVxuICAgIGNvbnN0IHdpZHRoID0gcmVmKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/IDAgOiAkcS5zY3JlZW4ud2lkdGgpXG4gICAgY29uc3Qgc2Nyb2xsID0gcmVmKHsgcG9zaXRpb246IDAsIGRpcmVjdGlvbjogJ2Rvd24nLCBpbmZsZWN0aW9uUG9pbnQ6IDAgfSlcblxuICAgIC8vIGNvbnRhaW5lciBvbmx5IHByb3BcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSByZWYoMClcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHJlZihpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUgPT09IHRydWUgPyAwIDogZ2V0U2Nyb2xsYmFyV2lkdGgoKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGF5b3V0IHEtbGF5b3V0LS0nXG4gICAgICArIChwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyaXplZCcgOiAnc3RhbmRhcmQnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuY29udGFpbmVyID09PSBmYWxzZVxuICAgICAgICA/IHsgbWluSGVpZ2h0OiAkcS5zY3JlZW4uaGVpZ2h0ICsgJ3B4JyB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICAvLyB1c2VkIGJ5IGNvbnRhaW5lciBvbmx5XG4gICAgY29uc3QgdGFyZ2V0U3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHsgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYCR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgY29uc3QgdGFyZ2V0Q2hpbGRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8ge1xuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXTogMCxcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAtJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlICsgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4KWBcbiAgICAgICAgICB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBvblBhZ2VTY3JvbGwgKGRhdGEpIHtcbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbmZvID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLnRvcCxcbiAgICAgICAgICBkaXJlY3Rpb246IGRhdGEuZGlyZWN0aW9uLFxuICAgICAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGRhdGEuZGlyZWN0aW9uQ2hhbmdlZCxcbiAgICAgICAgICBpbmZsZWN0aW9uUG9pbnQ6IGRhdGEuaW5mbGVjdGlvblBvaW50LnRvcCxcbiAgICAgICAgICBkZWx0YTogZGF0YS5kZWx0YS50b3BcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbC52YWx1ZSA9IGluZm9cbiAgICAgICAgcHJvcHMub25TY3JvbGwgIT09IHZvaWQgMCAmJiBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFnZVJlc2l6ZSAoZGF0YSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQ6IG5ld0hlaWdodCwgd2lkdGg6IG5ld1dpZHRoIH0gPSBkYXRhXG4gICAgICBsZXQgcmVzaXplZCA9IGZhbHNlXG5cbiAgICAgIGlmIChoZWlnaHQudmFsdWUgIT09IG5ld0hlaWdodCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICBoZWlnaHQudmFsdWUgPSBuZXdIZWlnaHRcbiAgICAgICAgcHJvcHMub25TY3JvbGxIZWlnaHQgIT09IHZvaWQgMCAmJiBlbWl0KCdzY3JvbGxIZWlnaHQnLCBuZXdIZWlnaHQpXG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC52YWx1ZSAhPT0gbmV3V2lkdGgpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgd2lkdGgudmFsdWUgPSBuZXdXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplZCA9PT0gdHJ1ZSAmJiBwcm9wcy5vblJlc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVtaXQoJ3Jlc2l6ZScsIGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250YWluZXJSZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIGlmIChjb250YWluZXJIZWlnaHQudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXJIZWlnaHQudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbGJhcldpZHRoICgpIHtcbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQudmFsdWUgPiBjb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgICA/IGdldFNjcm9sbGJhcldpZHRoKClcbiAgICAgICAgICA6IDBcblxuICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgPSB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGVUaW1lciA9IG51bGxcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGVUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IG51bGxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tbGF5b3V0LWFuaW1hdGUnKVxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICAgIGJhY2tkcm9wLWZpbHRlcj1cImJyaWdodG5lc3MoNjAlKVwiXG4gID5cbiAgICA8cS1jYXJkIHN0eWxlPVwid2lkdGg6IDUwMHB4OyBtYXgtd2lkdGg6IDQwdnc7IG1hcmdpbi10b3A6IDEwdmg7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5DcmVhdGUgUGxheWxpc3Q8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICB2LW1vZGVsPVwicGxheWxpc3ROYW1lXCJcbiAgICAgICAgICBsYWJlbD1cIlBsYXlsaXN0IE5hbWVcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICB2LW1vZGVsPVwicGxheWxpc3RWaXNpYmlsaXR5XCJcbiAgICAgICAgICA6b3B0aW9ucz1cInBsYXlsaXN0VmlzaWJsaXR5RHJvcGRvd25PcHRpb25zXCJcbiAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgbGFiZWw9XCJDYW5jZWxcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgbGFiZWw9XCJDcmVhdGVcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVBsYXlsaXN0KClcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IFBsYXlsaXN0U2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1BsYXlsaXN0U2VydmljZSc7XG5pbXBvcnQgeyBQbGF5bGlzdFZpc2liaWxpdHkgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHBsYXlsaXN0U2VydmljZTogUGxheWxpc3RTZXJ2aWNlO1xufT4oKTtcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuLy8gY29uc3QgcGxheWxpc3RTZXJ2aWNlID0gaW5qZWN0PFBsYXlsaXN0U2VydmljZT4oJ3BsYXlsaXN0U2VydmljZScpO1xuXG5jb25zdCBwbGF5bGlzdFZpc2libGl0eURyb3Bkb3duT3B0aW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnUHVibGljJyxcbiAgICB2YWx1ZTogUGxheWxpc3RWaXNpYmlsaXR5LlB1YmxpYyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUHJpdmF0ZScsXG4gICAgdmFsdWU6IFBsYXlsaXN0VmlzaWJpbGl0eS5Qcml2YXRlLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdVbmxpc3RlZCcsXG4gICAgdmFsdWU6IFBsYXlsaXN0VmlzaWJpbGl0eS5Vbmxpc3RlZCxcbiAgfSxcbl07XG5cbmNvbnN0IHBsYXlsaXN0TmFtZSA9IHJlZignJyk7XG5jb25zdCBwbGF5bGlzdFZpc2liaWxpdHkgPSByZWY8UGxheWxpc3RWaXNpYmlsaXR5PihQbGF5bGlzdFZpc2liaWxpdHkuUHJpdmF0ZSk7XG5cbmNvbnN0IGNyZWF0ZVBsYXlsaXN0ID0gKCkgPT4ge1xuICBwcm9wcy5wbGF5bGlzdFNlcnZpY2U/LmNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0TmFtZS52YWx1ZSwgcGxheWxpc3RWaXNpYmlsaXR5LnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAkcS5ub3RpZnkoe1xuICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgbWVzc2FnZTogJ1BsYXlsaXN0IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGNvbG9yOiAncG9zaXRpdmUnLFxuICAgIH0pO1xuICB9KTtcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGlzdCB2LWlmPVwiIXBsYXlsaXN0U2VydmljZT8uaXNSZWFkeS52YWx1ZVwiPlxuICAgIDxxLWl0ZW0gOmluc2V0LWxldmVsPVwiMC4zXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzPVwidW5kZXJsaW5lZCBsaW5rXCJcbiAgICAgICAgICBAY2xpY2s9XCJhdXRoU2VydmljZT8ubG9naW5cIlxuICAgICAgICA+TG9nIGluPC9hPiBvclxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzPVwidW5kZXJsaW5lZCBsaW5rXCJcbiAgICAgICAgICBAY2xpY2s9XCJhdXRoU2VydmljZT8uc2lnbnVwXCJcbiAgICAgICAgPlNpZ24gdXA8L2E+XG4gICAgICAgIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHBsYXlsaXN0c1xuICAgICAgPC9kaXY+XG4gICAgPC9xLWl0ZW0+XG4gIDwvcS1saXN0PlxuICA8ZGl2IHYtZWxzZT5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtaXRlbVxuICAgICAgICB2LWZvcj1cImxpbmsgaW4gY29sbGVjdGlvbk5hdmlnYXRpb25zXCJcbiAgICAgICAgOmtleT1cImxpbmsudGV4dFwiXG4gICAgICAgIHYtcmlwcGxlXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICA6aW5zZXQtbGV2ZWw9XCIwLjNcIlxuICAgICAgICBleGFjdFxuICAgICAgICBhY3RpdmUtY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyZXktOCB0ZXh0LXdlaWdodC1ib2xkZXJcIlxuICAgICAgICBAY2xpY2s9XCJsaW5rLm9uQ2xpY2tcIlxuICAgICAgPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb25cbiAgICAgICAgICAgIDpuYW1lPVwibGluay5pY29uXCJcbiAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt7IGxpbmsudGV4dCB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbiAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LXNtIHEtbXgtbGdcIiAvPlxuXG4gICAgPHEtbGlzdD5cbiAgICAgIDxxLWl0ZW1cbiAgICAgICAgY2xpY2thYmxlXG4gICAgICAgIHYtcmlwcGxlXG4gICAgICAgIDppbnNldC1sZXZlbD1cIjAuM1wiXG4gICAgICAgIEBjbGljaz1cInNob3dDcmVhdGVQbGF5bGlzdERpYWxvZ1wiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0QWRkXCJcbiAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIFBsYXlsaXN0XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICAgIDxxLWl0ZW1cbiAgICAgICAgdi1mb3I9XCJwbGF5bGlzdCBpbiBwbGF5bGlzdFNlcnZpY2U/LnBsYXlsaXN0cy52YWx1ZVwiXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICB2LXJpcHBsZVxuICAgICAgICA6a2V5PVwicGxheWxpc3QuaWRcIlxuICAgICAgICA6aW5zZXQtbGV2ZWw9XCIwLjNcIlxuICAgICAgICBAY2xpY2s9XCJnb3RvUGxheWxpc3QocGxheWxpc3QuaWQhKVwiXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvblxuICAgICAgICAgICAgOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0UGxheVwiXG4gICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7eyBwbGF5bGlzdC5uYW1lIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWRIaXN0b3J5LFxuICBvdXRsaW5lZFBsYXlsaXN0QWRkLFxuICBvdXRsaW5lZFBsYXlsaXN0UGxheSxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBBdXRoZW50aWNhdGlvblNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IFBsYXlsaXN0U2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1BsYXlsaXN0U2VydmljZSc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgUGxheWxpc3RDcmVhdGVEaWFsb2cgZnJvbSAnLi4vRGlhbG9ncy9QbGF5bGlzdENyZWF0ZURpYWxvZy52dWUnO1xuXG4vLyBJbmplY3RlZCBzZXJ2aWNlc1xuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IGF1dGhTZXJ2aWNlID0gaW5qZWN0PEF1dGhlbnRpY2F0aW9uU2VydmljZT4oJ2F1dGhTZXJ2aWNlJyk7XG5jb25zdCBwbGF5bGlzdFNlcnZpY2UgPSBpbmplY3Q8UGxheWxpc3RTZXJ2aWNlPigncGxheWxpc3RTZXJ2aWNlJyk7XG5cbmNvbnN0IGNvbGxlY3Rpb25OYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdIaXN0b3J5JyxcbiAgICBpY29uOiBvdXRsaW5lZEhpc3RvcnksXG4gICAgcm91dGU6IHsgbmFtZTogJ2hpc3RvcnknIH0sXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgZ290b1BsYXlsaXN0KHBsYXlsaXN0U2VydmljZSEuaGlzdG9yeS52YWx1ZSEuaWQhKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0Zhdm9yaXRlJyxcbiAgICBpY29uOiBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdmYXZvcml0ZScgfSxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBnb3RvUGxheWxpc3QocGxheWxpc3RTZXJ2aWNlIS5mYXZvcml0ZS52YWx1ZSEuaWQhKTtcbiAgICB9LFxuICB9LFxuXTtcblxuY29uc3QgZ290b1BsYXlsaXN0ID0gKHBsYXlsaXN0SWQ6IHN0cmluZykgPT4ge1xuICAkcm91dGVyLnB1c2goeyBuYW1lOiAnUGxheWxpc3QnLCBwYXJhbXM6IHsgcGxheWxpc3RJZCB9IH0pO1xufTtcblxuY29uc3Qgc2hvd0NyZWF0ZVBsYXlsaXN0RGlhbG9nID0gKCkgPT4ge1xuICAkcS5kaWFsb2coXG4gICAge1xuICAgICAgY29tcG9uZW50OiBQbGF5bGlzdENyZWF0ZURpYWxvZyxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIHBsYXlsaXN0U2VydmljZSxcbiAgICAgIH0sXG4gICAgfVxuICApO1xufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1saXN0IHBhZGRpbmc+XG4gICAgPHEtaXRlbVxuICAgICAgdi1mb3I9XCJsaW5rIGluIG5hdmlnYXRpb25JdGVtc1wiXG4gICAgICA6a2V5PVwibGluay50ZXh0XCJcbiAgICAgIHYtcmlwcGxlXG4gICAgICBjbGlja2FibGVcbiAgICAgIDppbnNldC1sZXZlbD1cIjAuM1wiXG4gICAgICA6dG89XCJsaW5rLnJvdXRlXCJcbiAgICAgIGV4YWN0XG4gICAgPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgPHEtaWNvblxuICAgICAgICAgIDpuYW1lPVwibGluay5pY29uXCJcbiAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgIC8+XG4gICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7eyBsaW5rLnRleHQgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8L3EtaXRlbT5cbiAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LXNtIHEtbXgtbGdcIiAvPlxuICAgIDxQbGF5bGlzdE5hdmlnYXRpb25MaXN0IC8+XG4gIDwvcS1saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFFMaXN0IH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7XG4gIG91dGxpbmVkSG9tZSxcbiAgb3V0bGluZWRTZWFyY2gsXG4gIG91dGxpbmVkUmFkaW8sXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHsgbWF0SG9tZSwgbWF0U2VhcmNoLCBtYXRSYWRpbyB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCBQbGF5bGlzdE5hdmlnYXRpb25MaXN0IGZyb20gJy4vUGxheWxpc3ROYXZpZ2F0aW9uTGlzdC52dWUnO1xuXG5jb25zdCBuYXZpZ2F0aW9uSXRlbXMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnSG9tZScsXG4gICAgaWNvbjogb3V0bGluZWRIb21lLFxuICAgIGFjdGl2ZUljb246IG1hdEhvbWUsXG4gICAgcm91dGU6IHsgbmFtZTogJ0hvbWUnLCBwYXJhbXM6IHsgcGFnZTogMSB9IH0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnU2VhcmNoJyxcbiAgICBpY29uOiBvdXRsaW5lZFNlYXJjaCxcbiAgICBhY3RpdmVJY29uOiBtYXRTZWFyY2gsXG4gICAgcm91dGU6IHsgbmFtZTogJ1NlYXJjaCcgfSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSYWRpbycsXG4gICAgaWNvbjogb3V0bGluZWRSYWRpbyxcbiAgICBhY3RpdmVJY29uOiBtYXRSYWRpbyxcbiAgICByb3V0ZTogeyBuYW1lOiAnUmFkaW8nIH0sXG4gIH0sXG5dO1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGluc2V0OiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXIgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuaW5zZXQgPT09IHRydWUgPyAnIHEtdG9vbGJhci0taW5zZXQnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUsIHJvbGU6ICd0b29sYmFyJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSAhPT0gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByZXZlYWxlZC52YWx1ZSA9PT0gdHJ1ZSA/IHNpemUudmFsdWUgOiAwXG4gICAgICB9XG4gICAgICBjb25zdCBvZmZzZXQgPSBzaXplLnZhbHVlIC0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb25cbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlXG4gICAgICB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWhlYWRlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLXRvcCdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWhlYWRlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtaGVhZGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHZpZXcgPSAkbGF5b3V0LnJvd3MudmFsdWUudG9wLFxuICAgICAgICBjc3MgPSB7fVxuXG4gICAgICBpZiAodmlld1sgMCBdID09PSAnbCcgJiYgJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKHZpZXdbIDIgXSA9PT0gJ3InICYmICRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheW91dCAocHJvcCwgdmFsKSB7XG4gICAgICAkbGF5b3V0LnVwZGF0ZSgnaGVhZGVyJywgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVzaXplICh7IGhlaWdodCB9KSB7XG4gICAgICB1cGRhdGVMb2NhbChzaXplLCBoZWlnaHQpXG4gICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbCwgc2Nyb2xsID0+IHtcbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCxcbiAgICAgICAgc2Nyb2xsLmRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gPD0gcHJvcHMucmV2ZWFsT2Zmc2V0XG4gICAgICAgIHx8IHNjcm9sbC5wb3NpdGlvbiAtIHNjcm9sbC5pbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7fVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID0gaW5zdGFuY2VcbiAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHVwZGF0ZUxheW91dCgnc2l6ZScsIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCBvZmZzZXQudmFsdWUpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgcHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHtcbiAgICAgICAgICBkZWJvdW5jZTogMCxcbiAgICAgICAgICBvblJlc2l6ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnaGVhZGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiB2LWlmPVwiYXV0aFNlcnZpY2U/LmlzSW5pdGlhbGl6ZWQudmFsdWVcIj5cbiAgICA8cS1idG5cbiAgICAgIHYtaWY9XCIhYXV0aFNlcnZpY2U/LmlzQXV0aGVudGljYXRlZC52YWx1ZVwiXG4gICAgICBAY2xpY2s9XCJhdXRoU2VydmljZT8ubG9naW5cIlxuICAgICAgcm91bmRlZFxuICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgID5cbiAgICAgIExvZ2luXG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0bi1kcm9wZG93blxuICAgICAgdi1lbHNlXG4gICAgICA6aWNvbj1cIm91dGxpbmVkQWNjb3VudENpcmNsZVwiXG4gICAgICBmbGF0XG4gICAgICByb3VuZGVkXG4gICAgICB1bmVsZXZhdGVkXG4gICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBAY2xpY2s9XCJvbkFjY291bnREcm9wZG93bkNsaWNrXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+QWNjb3VudDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgQGNsaWNrPVwib25BY2NvdW50RHJvcGRvd25DbGlja1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlNldHRpbmdzPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgPHEtaXRlbVxuICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICBAY2xpY2s9XCJvbkxvZ291dENsaWNrXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+TG9nb3V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3EtYnRuLWRyb3Bkb3duPlxuICA8L2Rpdj5cblxuICA8c3BhbiB2LWVsc2U+PHEtc3Bpbm5lciAvPiBJbml0aWFsaXppbmcgQXV0aGVudGljYXRpb248L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFFCdG4gfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgb3V0bGluZWRBY2NvdW50Q2lyY2xlIH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5cbmNvbnN0IGF1dGhTZXJ2aWNlID0gaW5qZWN0PEF1dGhlbnRpY2F0aW9uU2VydmljZT4oJ2F1dGhTZXJ2aWNlJyk7XG5cbmNvbnN0IG9uQWNjb3VudERyb3Bkb3duQ2xpY2sgPSAoZXZ0OiBFdmVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnSXRlbSBjbGlja2VkJywgZXZ0KTtcbn07XG5cbmNvbnN0IG9uTG9nb3V0Q2xpY2sgPSAoKSA9PiB7XG4gIGF1dGhTZXJ2aWNlPy5sb2dvdXQoKTtcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtYnRuLWRyb3Bkb3duXG4gICAgOmljb249XCJvdXRsaW5lZFNldHRpbmdzXCJcbiAgICBmbGF0XG4gICAgcm91bmRlZFxuICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgPlxuICAgIDxxLWxpc3Q+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICBkZW5zZVxuICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJkYXJrTW9kZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkRhcmsgTW9kZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgICAgPCEtLSA8cS1pdGVtXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICBkZW5zZVxuICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICA+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS10b2dnbGVcbiAgICAgICAgICAgIHYtbW9kZWw9XCJpZ25vcmVBbGJ1bXNXaXRob3V0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpbHRlciBvdXQgbm8gZGF0ZXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT4gLS0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1idG4tZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRTZXR0aW5ncyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBpZ25vcmVBbGJ1bXNXaXRob3V0RGF0ZSA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGRhcmtNb2RlID0gcmVmKCRxLmRhcmsuaXNBY3RpdmUpO1xuXG53YXRjaChkYXJrTW9kZSwgKHZhbHVlKSA9PiB7XG4gICRxLmRhcmsuc2V0KHZhbHVlKVxufSlcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1oZWFkZXIgY2xhc3M9XCJiZy1maWx0ZXItYmx1ci0xMCBhcHBiYXJcIj5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBkZW5zZVxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgIDppY29uPVwib3V0bGluZWRBcnJvd0JhY2tcIlxuICAgICAgICAgIEBjbGljaz1cImdvQmFja1wiXG4gICAgICAgID48L3EtYnRuPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgOmljb249XCJvdXRsaW5lZEFycm93Rm9yd2FyZFwiXG4gICAgICAgICAgQGNsaWNrPVwiZ29Gb3J3YXJkXCJcbiAgICAgICAgPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgIDxxLXNwYWNlPjwvcS1zcGFjZT5cblxuICAgICAgPEFjY291bnRCdXR0b24gLz5cblxuICAgICAgPERyb3Bkb3duU2V0dGluZ3NCdXR0b24gLz5cblxuICAgIDwvcS10b29sYmFyPlxuICA8L3EtaGVhZGVyPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRBcnJvd0ZvcndhcmQsXG4gIG91dGxpbmVkQXJyb3dCYWNrLFxuICBvdXRsaW5lZExpZ2h0TW9kZSxcbiAgb3V0bGluZWREYXJrTW9kZSxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IEFjY291bnRCdXR0b24gZnJvbSAnLi9BY2NvdW50QnV0dG9uLnZ1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgRHJvcGRvd25TZXR0aW5nc0J1dHRvbiBmcm9tICcuL0Ryb3Bkb3duU2V0dGluZ3NCdXR0b24udnVlJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgZ29CYWNrID0gKCkgPT4ge1xuICAkcm91dGVyLmJhY2soKTtcbn07XG5cbmNvbnN0IGdvRm9yd2FyZCA9ICgpID0+IHtcbiAgJHJvdXRlci5mb3J3YXJkKCk7XG59O1xuXG5jb25zdCB0aGVtZUljb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiAkcS5kYXJrLmlzQWN0aXZlID8gb3V0bGluZWRMaWdodE1vZGUgOiBvdXRsaW5lZERhcmtNb2RlO1xufSk7XG5cbmNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuICAkcS5kYXJrLnNldCghJHEuZGFyay5pc0FjdGl2ZSk7XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi5ib2R5LS1saWdodCAuYXBwYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4zKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMWIxYjFiLCAkYWxwaGE6IDAuNSk7XG5cbiAgLnEtYnRuIHtcbiAgICBjb2xvcjogIzFiMWIxYjtcbiAgfVxufVxuXG4uYm9keS0tZGFyayAuYXBwYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMxYjFiMWIsICRhbHBoYTogMC4zKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuNSk7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgd2F0Y2gsIFJlZiwgcmVmLCBXYXRjaFNvdXJjZSB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNoYW5nZWFibGVDb250cm9sbGVyPFQsIEU+KFxuICB3YXRjaGVkOiBXYXRjaFNvdXJjZTxUPiwgLy8gVGhpcyBjYW4gYmUgYSBSZWY8VD4sIGEgcmVhY3RpdmUgb2JqZWN0LCBvciBhIGdldHRlciBmdW5jdGlvbi5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogVCkgPT4gUHJvbWlzZTxFPixcbiAgZGVlcFdhdGNoID0gZmFsc2Vcbikge1xuICBjb25zdCBzdGF0ZTogUmVmPEUgfCBudWxsPiA9IHJlZihudWxsKTtcbiAgd2F0Y2goXG4gICAgd2F0Y2hlZCxcbiAgICBhc3luYyAodmFsdWUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlID0gYXdhaXQgb25DaGFuZ2UodmFsdWUpO1xuICAgIH0sXG4gICAgeyBkZWVwOiBkZWVwV2F0Y2ggfVxuICApO1xuXG4gIGNvbnN0IHJlbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzdGF0ZS52YWx1ZSA9IGF3YWl0IG9uQ2hhbmdlKCh3YXRjaGVkIGFzIFJlZjxUPikudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc3RhdGUsXG4gICAgcmVsb2FkLFxuICB9O1xufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1jYXJkXG4gICAgZmxhdFxuICAgIHYtaWY9XCJjdXJyZW50VHJhY2sgIT09IG51bGxcIlxuICA+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cImN1cnJlbnRUcmFjay50aHVtYm5haWxzPy5tZWRpdW1cIlxuICAgICAgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+XG4gICAgICAgICAge3sgY3VycmVudFRyYWNrLm5hbWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRleHQtc3VidGl0bGUyIGxpbmtcIlxuICAgICAgICAgIEBjbGljaz1cImdvdG9BbGJ1bShjdXJyZW50VHJhY2shLmFsYnVtSWQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGN1cnJlbnRUcmFjay5hbGJ1bU5hbWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cImFydGlzdHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJtZXRhZGF0YS1lbnRyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXIgYXJ0aXN0LW5hbWVcIlxuICAgICAgICAgICAgICB2LWZvcj1cIihjaXJjbGUsIGluZGV4KSBpbiBjdXJyZW50VHJhY2suY2lyY2xlXCJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZ290b0NpcmNsZShjaXJjbGUuaWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgY2lyY2xlLm5hbWUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtY2FyZC1hY3Rpb25zXG4gICAgICAgIHZlcnRpY2FsXG4gICAgICAgIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weC1tZFwiXG4gICAgICA+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIDppY29uPVwiaXNDdXJyZW50VHJhY2tJbkZhdm9yaXRlUGxheWxpc3RDaGFuZ2VhYmxlQ29udHJvbGxlci5zdGF0ZS52YWx1ZVxuICAgICAgICAgICAgPyBtYXRGYXZvcml0ZVxuICAgICAgICAgICAgOiBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIEBjbGljaz1cIm9uRmF2SWNvbkNsaWNrXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICAgICAgOmljb249XCJvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlXCJcbiAgICAgICAgPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlLFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBtYXRGYXZvcml0ZSB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IFRyYWNrSW5mbyB9IGZyb20gJ3NyYy9tb2RlbHMvVHJhY2tJbmZvJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIENvbXB1dGVkUmVmLCBpbmplY3QsIFJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUGxheWxpc3RTZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUGxheWxpc3RTZXJ2aWNlJztcbmltcG9ydCB1c2VDaGFuZ2VhYmxlQ29udHJvbGxlciBmcm9tICdzcmMvdXRpbHMvQ2hhbmdlYWJsZS9DaGFuZ2VhYmxlJztcbmltcG9ydCBRdWV1ZWRUcmFjayBmcm9tICdzcmMvbW9kZWxzL1F1ZXVlZFRyYWNrJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5pZiAocXVldWVTZXJ2aWNlID09PSB1bmRlZmluZWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdRdWV1ZSBTZXJ2aWNlIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgcGxheWxpc3RTZXJ2aWNlID0gaW5qZWN0PFBsYXlsaXN0U2VydmljZT4oJ3BsYXlsaXN0U2VydmljZScpO1xuXG4vLyBDb21wdXRlZFxuY29uc3QgaXNDdXJyZW50VHJhY2tJbkZhdm9yaXRlUGxheWxpc3RDaGFuZ2VhYmxlQ29udHJvbGxlciA9XG4gIHVzZUNoYW5nZWFibGVDb250cm9sbGVyPFF1ZXVlZFRyYWNrIHwgbnVsbCwgYm9vbGVhbj4oXG4gICAgcXVldWVTZXJ2aWNlLmN1cnJlbnRUcmFjayBhcyBSZWY8UXVldWVkVHJhY2sgfCBudWxsPixcbiAgICBhc3luYyAodHJhY2s6IFF1ZXVlZFRyYWNrIHwgbnVsbCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgICAgaWYgKHRyYWNrID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXlsaXN0U2VydmljZSEuZmF2b3JpdGUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5bGlzdFNlcnZpY2UhLmlzVHJhY2tJblBsYXlsaXN0KFxuICAgICAgICBwbGF5bGlzdFNlcnZpY2UhLmZhdm9yaXRlLnZhbHVlIS5pZCEsXG4gICAgICAgIHRyYWNrLnRyYWNrLmlkIVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICk7XG5cbmNvbnN0IGN1cnJlbnRUcmFjazogQ29tcHV0ZWRSZWY8VHJhY2tJbmZvIHwgbnVsbD4gPSBjb21wdXRlZCgoKSA9PiB7XG4gIGlmIChxdWV1ZVNlcnZpY2UuY3VycmVudFRyYWNrLnZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gVHJhY2tJbmZvLmZyb21UcmFja1JlYWREdG8oXG4gICAgcXVldWVTZXJ2aWNlLmN1cnJlbnRUcmFjay52YWx1ZS50cmFjayBhcyBUcmFja1JlYWREdG9cbiAgKTtcbn0pO1xuXG5jb25zdCBvbkZhdkljb25DbGljayA9IGFzeW5jICgpID0+IHtcbiAgaWYgKGlzQ3VycmVudFRyYWNrSW5GYXZvcml0ZVBsYXlsaXN0Q2hhbmdlYWJsZUNvbnRyb2xsZXIuc3RhdGUudmFsdWUpIHtcbiAgICBhd2FpdCBwbGF5bGlzdFNlcnZpY2U/LnJlbW92ZVRyYWNrRnJvbVBsYXlsaXN0KFxuICAgICAgcGxheWxpc3RTZXJ2aWNlLmZhdm9yaXRlLnZhbHVlIS5pZCEsXG4gICAgICBbcXVldWVTZXJ2aWNlLmN1cnJlbnRUcmFjay52YWx1ZSEudHJhY2suaWQhXVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgcGxheWxpc3RTZXJ2aWNlPy5hZGRUcmFja1RvUGxheWxpc3QoXG4gICAgICBwbGF5bGlzdFNlcnZpY2UuZmF2b3JpdGUudmFsdWUhLmlkISxcbiAgICAgIFtxdWV1ZVNlcnZpY2UuY3VycmVudFRyYWNrLnZhbHVlIS50cmFjay5pZCFdXG4gICAgKTtcbiAgfVxuXG4gIGlzQ3VycmVudFRyYWNrSW5GYXZvcml0ZVBsYXlsaXN0Q2hhbmdlYWJsZUNvbnRyb2xsZXIucmVsb2FkKCk7XG59O1xuXG5jb25zdCBnb3RvQ2lyY2xlID0gKGNpcmNsZUlkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICBwYXJhbXM6IHsgY2lyY2xlSWQ6IGNpcmNsZUlkLnRvU3RyaW5nKCksIHBhZ2U6ICcxJyB9LFxuICB9KTtcbn07XG5cbmNvbnN0IGdvdG9BbGJ1bSA9IChhbGJ1bUlkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQWxidW0nLFxuICAgIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUlkLnRvU3RyaW5nKCkgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXJ0aXN0cyAuYXJ0aXN0LW5hbWU6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICBjb250ZW50OiAnLCAnO1xufVxuXG4jYXJ0aXN0cyAuYXJ0aXN0LW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b3VjaC1wYW4vVG91Y2hQYW4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBoaWRlU2VsZWN0aW9uOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIG1hcmtlckxhYmVsc0NsYXNzOiBTdHJpbmcsXG5cbiAgbGFiZWw6IEJvb2xlYW4sXG4gIGxhYmVsQ29sb3I6IFN0cmluZyxcbiAgbGFiZWxUZXh0Q29sb3I6IFN0cmluZyxcbiAgbGFiZWxBbHdheXM6IEJvb2xlYW4sXG4gIHN3aXRjaExhYmVsU2lkZTogQm9vbGVhbixcblxuICBtYXJrZXJzOiBbIEJvb2xlYW4sIE51bWJlciBdLFxuICBtYXJrZXJMYWJlbHM6IFsgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRnVuY3Rpb24gXSxcbiAgc3dpdGNoTWFya2VyTGFiZWxzU2lkZTogQm9vbGVhbixcblxuICB0cmFja0ltZzogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tJbWc6IFN0cmluZyxcbiAgaW5uZXJUcmFja0NvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkNvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkltZzogU3RyaW5nLFxuXG4gIHRodW1iU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnMjBweCdcbiAgfSxcbiAgdHJhY2tTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICc0cHgnXG4gIH0sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgdGh1bWJDb2xvcjogU3RyaW5nLFxuICB0aHVtYlBhdGg6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ00gNCwgMTAgYSA2LDYgMCAxLDAgMTIsMCBhIDYsNiAwIDEsMCAtMTIsMCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyRW1pdHMgPSBbICdwYW4nLCAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsIGZvcm1BdHRycyB9KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHNsb3RzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICBjb25zdCBhY3RpdmUgPSByZWYoZmFsc2UpXG4gIGNvbnN0IHByZXZlbnRGb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGRyYWdnaW5nID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGF4aXMgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnLS12JyA6ICctLWgnKSlcbiAgY29uc3QgbGFiZWxTaWRlID0gY29tcHV0ZWQoKCkgPT4gJy0nICsgKHByb3BzLnN3aXRjaExhYmVsU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBpc1JldmVyc2VkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IHByb3BzLnJldmVyc2UgPT09IHRydWVcbiAgICAgIDogcHJvcHMucmV2ZXJzZSAhPT0gKCRxLmxhbmcucnRsID09PSB0cnVlKVxuICApKVxuXG4gIGNvbnN0IGlubmVyTWluID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWluKSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1pbiA8IHByb3BzLm1pblxuICAgICAgPyBwcm9wcy5taW5cbiAgICAgIDogcHJvcHMuaW5uZXJNaW5cbiAgKSlcbiAgY29uc3QgaW5uZXJNYXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNYXgpID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWF4ID4gcHJvcHMubWF4XG4gICAgICA/IHByb3BzLm1heFxuICAgICAgOiBwcm9wcy5pbm5lck1heFxuICApKVxuXG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgICAmJiBpbm5lck1pbi52YWx1ZSA8IGlubmVyTWF4LnZhbHVlXG4gICkpXG5cbiAgY29uc3Qgcm91bmRWYWx1ZUZuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5zdGVwID09PSAwKSB7XG4gICAgICByZXR1cm4gdiA9PiB2XG4gICAgfVxuXG4gICAgY29uc3QgZGVjaW1hbHMgPSAoU3RyaW5nKHByb3BzLnN0ZXApLnRyaW0oKS5zcGxpdCgnLicpWyAxIF0gfHwgJycpLmxlbmd0aFxuICAgIHJldHVybiB2ID0+IHBhcnNlRmxvYXQodi50b0ZpeGVkKGRlY2ltYWxzKSlcbiAgfSlcblxuICBjb25zdCBrZXlTdGVwID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnN0ZXAgPT09IDAgPyAxIDogcHJvcHMuc3RlcCkpXG4gIGNvbnN0IHRhYmluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggfHwgMCA6IC0xKSlcblxuICBjb25zdCB0cmFja0xlbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm1heCAtIHByb3BzLm1pbilcbiAgY29uc3QgaW5uZXJCYXJMZW4gPSBjb21wdXRlZCgoKSA9PiBpbm5lck1heC52YWx1ZSAtIGlubmVyTWluLnZhbHVlKVxuXG4gIGNvbnN0IGlubmVyTWluUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWluLnZhbHVlKSlcbiAgY29uc3QgaW5uZXJNYXhSYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNYXgudmFsdWUpKVxuXG4gIGNvbnN0IHBvc2l0aW9uUHJvcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdib3R0b20nIDogJ3RvcCcpXG4gICAgICA6IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JylcbiAgKSlcblxuICBjb25zdCBzaXplUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdoZWlnaHQnIDogJ3dpZHRoJykpXG4gIGNvbnN0IHRoaWNrbmVzc1Byb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcpKVxuICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgcm9sZTogJ3NsaWRlcicsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6IGlubmVyTWluLnZhbHVlLFxuICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBpbm5lck1heC52YWx1ZSxcbiAgICAgICdhcmlhLW9yaWVudGF0aW9uJzogb3JpZW50YXRpb24udmFsdWUsXG4gICAgICAnZGF0YS1zdGVwJzogcHJvcHMuc3RlcFxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJlYWRvbmx5ID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLXJlYWRvbmx5JyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLXNsaWRlciBxLXNsaWRlciR7IGF4aXMudmFsdWUgfSBxLXNsaWRlci0tJHsgYWN0aXZlLnZhbHVlID09PSB0cnVlID8gJycgOiAnaW4nIH1hY3RpdmUgaW5saW5lIG5vLXdyYXAgYFxuICAgICsgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3JvdycgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnIHEtc2xpZGVyLS1lbmFibGVkJyArIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWVkaXRhYmxlJyA6ICcnKSlcbiAgICArIChmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnID8gJyBxLXNsaWRlci0tZm9jdXMnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWwgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbCcgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsLWFsd2F5cycgOiAnJylcbiAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kYXJrJyA6ICcnKVxuICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGVuc2UgcS1zbGlkZXItLWRlbnNlJyArIGF4aXMudmFsdWUgOiAnJylcbiAgKVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSR7IGxhYmVsU2lkZS52YWx1ZSB9YFxuICB9XG4gIGZ1bmN0aW9uIGdldEF4aXNDbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9YFxuICB9XG5cbiAgY29uc3Qgc2VsZWN0aW9uQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBwcm9wcy5zZWxlY3Rpb25Db2xvciB8fCBwcm9wcy5jb2xvclxuICAgIHJldHVybiAncS1zbGlkZXJfX3NlbGVjdGlvbiBhYnNvbHV0ZSdcbiAgICAgICsgKGNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJylcbiAgfSlcbiAgY29uc3QgbWFya2VyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ21hcmtlcnMnKSArICcgYWJzb2x1dGUgb3ZlcmZsb3ctaGlkZGVuJylcbiAgY29uc3QgdHJhY2tDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygndHJhY2stY29udGFpbmVyJykpXG4gIGNvbnN0IHBpbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygncGluJykpXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdsYWJlbCcpKVxuICBjb25zdCB0ZXh0Q29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCd0ZXh0LWNvbnRhaW5lcicpKVxuICBjb25zdCBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZ2V0UG9zaXRpb25DbGFzcygnbWFya2VyLWxhYmVscy1jb250YWluZXInKVxuICAgICsgKHByb3BzLm1hcmtlckxhYmVsc0NsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLm1hcmtlckxhYmVsc0NsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX3RyYWNrIHJlbGF0aXZlLXBvc2l0aW9uIG5vLW91dGxpbmUnXG4gICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgdHJhY2tTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7IFsgdGhpY2tuZXNzUHJvcC52YWx1ZSBdOiBwcm9wcy50cmFja1NpemUgfVxuICAgIGlmIChwcm9wcy50cmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy50cmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJCYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX19pbm5lciBhYnNvbHV0ZSdcbiAgICArIChwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuaW5uZXJUcmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgaW5uZXJCYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBpbm5lckRpZmYgPSBpbm5lck1heFJhdGlvLnZhbHVlIC0gaW5uZXJNaW5SYXRpby52YWx1ZVxuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBpbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIFsgc2l6ZVByb3AudmFsdWUgXTogaW5uZXJEaWZmID09PSAwXG4gICAgICAgID8gJzJweCdcbiAgICAgICAgOiBgJHsgMTAwICogaW5uZXJEaWZmIH0lYFxuICAgIH1cbiAgICBpZiAocHJvcHMuaW5uZXJUcmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5pbm5lclRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBjb252ZXJ0UmF0aW9Ub01vZGVsIChyYXRpbykge1xuICAgIGNvbnN0IHsgbWluLCBtYXgsIHN0ZXAgfSA9IHByb3BzXG4gICAgbGV0IG1vZGVsID0gbWluICsgcmF0aW8gKiAobWF4IC0gbWluKVxuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBjb25zdCBtb2R1bG8gPSAobW9kZWwgLSBpbm5lck1pbi52YWx1ZSkgJSBzdGVwXG4gICAgICBtb2RlbCArPSAoTWF0aC5hYnMobW9kdWxvKSA+PSBzdGVwIC8gMiA/IChtb2R1bG8gPCAwID8gLTEgOiAxKSAqIHN0ZXAgOiAwKSAtIG1vZHVsb1xuICAgIH1cblxuICAgIG1vZGVsID0gcm91bmRWYWx1ZUZuLnZhbHVlKG1vZGVsKVxuXG4gICAgcmV0dXJuIGJldHdlZW4obW9kZWwsIGlubmVyTWluLnZhbHVlLCBpbm5lck1heC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRNb2RlbFRvUmF0aW8gKG1vZGVsKSB7XG4gICAgcmV0dXJuIHRyYWNrTGVuLnZhbHVlID09PSAwXG4gICAgICA/IDBcbiAgICAgIDogKG1vZGVsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREcmFnZ2luZ1JhdGlvIChldnQsIGRyYWdnaW5nKSB7XG4gICAgY29uc3RcbiAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICB2YWwgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGJldHdlZW4oKHBvcy50b3AgLSBkcmFnZ2luZy50b3ApIC8gZHJhZ2dpbmcuaGVpZ2h0LCAwLCAxKVxuICAgICAgICA6IGJldHdlZW4oKHBvcy5sZWZ0IC0gZHJhZ2dpbmcubGVmdCkgLyBkcmFnZ2luZy53aWR0aCwgMCwgMSlcblxuICAgIHJldHVybiBiZXR3ZWVuKFxuICAgICAgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IDEuMCAtIHZhbCA6IHZhbCxcbiAgICAgIGlubmVyTWluUmF0aW8udmFsdWUsXG4gICAgICBpbm5lck1heFJhdGlvLnZhbHVlXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbWFya2VyU3RlcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc051bWJlcihwcm9wcy5tYXJrZXJzKSA9PT0gdHJ1ZSA/IHByb3BzLm1hcmtlcnMgOiBrZXlTdGVwLnZhbHVlKVxuICApXG5cbiAgY29uc3QgbWFya2VyVGlja3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0gW11cbiAgICBjb25zdCBzdGVwID0gbWFya2VyU3RlcC52YWx1ZVxuICAgIGNvbnN0IG1heCA9IHByb3BzLm1heFxuXG4gICAgbGV0IHZhbHVlID0gcHJvcHMubWluXG4gICAgZG8ge1xuICAgICAgYWNjLnB1c2godmFsdWUpXG4gICAgICB2YWx1ZSArPSBzdGVwXG4gICAgfSB3aGlsZSAodmFsdWUgPCBtYXgpXG5cbiAgICBhY2MucHVzaChtYXgpXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4ID0gYCAkeyBtYXJrZXJQcmVmaXhDbGFzcyB9JHsgYXhpcy52YWx1ZSB9LWBcbiAgICByZXR1cm4gbWFya2VyUHJlZml4Q2xhc3NcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgICArIGAkeyBwcmVmaXggfSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH1gXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICByZXR1cm4gZ2V0TWFya2VyTGlzdChwcm9wcy5tYXJrZXJMYWJlbHMpLm1hcCgoZW50cnksIGluZGV4KSA9PiAoe1xuICAgICAgaW5kZXgsXG4gICAgICB2YWx1ZTogZW50cnkudmFsdWUsXG4gICAgICBsYWJlbDogZW50cnkubGFiZWwgfHwgZW50cnkudmFsdWUsXG4gICAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlXG4gICAgICAgICsgKGVudHJ5LmNsYXNzZXMgIT09IHZvaWQgMCA/ICcgJyArIGVudHJ5LmNsYXNzZXMgOiAnJyksXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5nZXRNYXJrZXJMYWJlbFN0eWxlKGVudHJ5LnZhbHVlKSxcbiAgICAgICAgLi4uKGVudHJ5LnN0eWxlIHx8IHt9KVxuICAgICAgfVxuICAgIH0pKVxuICB9KVxuXG4gIGNvbnN0IG1hcmtlclNjb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBtYXJrZXJMaXN0OiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLFxuICAgIG1hcmtlck1hcDogbWFya2VyTGFiZWxzTWFwLnZhbHVlLFxuICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWUsIC8vIFRPRE8gdHMgZGVmaW5pdGlvblxuICAgIGdldFN0eWxlOiBnZXRNYXJrZXJMYWJlbFN0eWxlXG4gIH0pKVxuXG4gIGNvbnN0IG1hcmtlclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSBpbm5lckJhckxlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAnMnB4J1xuICAgICAgOiAxMDAgKiBtYXJrZXJTdGVwLnZhbHVlIC8gaW5uZXJCYXJMZW4udmFsdWVcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbm5lckJhclN0eWxlLnZhbHVlLFxuICAgICAgYmFja2dyb3VuZFNpemU6IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYDJweCAkeyBzaXplIH0lYFxuICAgICAgICA6IGAkeyBzaXplIH0lIDJweGBcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGlzdCAoZGVmKSB7XG4gICAgaWYgKGRlZiA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgaWYgKGRlZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcChkZWZhdWx0TWFya2VyQ29udmVydEZuKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRlZih2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJGbiA9ICh7IHZhbHVlIH0pID0+IHZhbHVlID49IHByb3BzLm1pbiAmJiB2YWx1ZSA8PSBwcm9wcy5tYXhcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZikgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkZWZcbiAgICAgICAgLm1hcChpdGVtID0+IChpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IGl0ZW0gOiB7IHZhbHVlOiBpdGVtIH0pKVxuICAgICAgICAuZmlsdGVyKGZpbHRlckZuKVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWYpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRlZlsga2V5IF1cbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGtleSlcbiAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICB9KS5maWx0ZXIoZmlsdGVyRm4pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbFN0eWxlICh2YWwpIHtcbiAgICByZXR1cm4geyBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHZhbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZSB9JWAgfVxuICB9XG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGFjY1sgZW50cnkudmFsdWUgXSA9IGVudHJ5XG4gICAgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxzQ29udGVudCAoKSB7XG4gICAgaWYgKHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXShtYXJrZXJTY29wZS52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IHNsb3RzWyAnbWFya2VyLWxhYmVsJyBdIHx8IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuXG4gICAgcmV0dXJuIG1hcmtlckxhYmVsc0xpc3QudmFsdWUubWFwKG1hcmtlciA9PiBmbih7XG4gICAgICBtYXJrZXIsXG4gICAgICAuLi5tYXJrZXJTY29wZS52YWx1ZVxuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgcGFuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgcmV0dXJuIFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBvblBhbixcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgWyBvcmllbnRhdGlvbi52YWx1ZSBdOiB0cnVlLFxuICAgICAgICBwcmV2ZW50OiB0cnVlLFxuICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBmdW5jdGlvbiBvblBhbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGRyYWdnaW5nLnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgICAvLyBvbmx5IGlmIHRvdWNoLCBiZWNhdXNlIHdlIGFsc28gaGF2ZSBtb3VzZWRvd24vdXA6XG4gICAgICAgIGV2ZW50LnRvdWNoID09PSB0cnVlICYmIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgICAgIGRyYWdnaW5nLnZhbHVlID0gdm9pZCAwXG4gICAgICAgIGVtaXQoJ3BhbicsICdlbmQnKVxuICAgICAgfVxuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcbiAgICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgZHJhZ2dpbmcudmFsdWUgPSBnZXREcmFnZ2luZyhldmVudC5ldnQpXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdwYW4nLCAnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXIgKCkge1xuICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSgpXG5cbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSB0cnVlXG4gICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSAoKSB7XG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICBvbkJsdXIoKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9iaWxlQ2xpY2sgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXl1cCAoZXZ0KSB7XG4gICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUZXh0Q29udGFpbmVyU3R5bGUgKHJhdGlvKSB7XG4gICAgaWYgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IHAgPSAkcS5sYW5nLnJ0bCAhPT0gcHJvcHMucmV2ZXJzZSA/IDEgLSByYXRpbyA6IHJhdGlvXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoY2FsYygkeyAyICogcCAtIDEgfSAqICR7IHByb3BzLnRodW1iU2l6ZSB9IC8gMiArICR7IDUwIC0gMTAwICogcCB9JSkpYFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRodW1iUmVuZGVyRm4gKHRodW1iKSB7XG4gICAgY29uc3QgZm9jdXNDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9PT0gZmFsc2UgJiYgKGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlIHx8IGZvY3VzLnZhbHVlID09PSAnYm90aCcpXG4gICAgICAgID8gJyBxLXNsaWRlci0tZm9jdXMnXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zbGlkZXJfX3RodW1iIHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfSBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0tJHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfSBhYnNvbHV0ZSBub24tc2VsZWN0YWJsZWBcbiAgICAgICsgZm9jdXNDbGFzcy52YWx1ZVxuICAgICAgKyAodGh1bWIudGh1bWJDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLnRodW1iQ29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgaGVpZ2h0OiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogdGh1bWIucmF0aW8udmFsdWUgfSVgLFxuICAgICAgekluZGV4OiBmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSA/IDIgOiB2b2lkIDBcbiAgICB9KSlcblxuICAgIGNvbnN0IHBpbkNvbG9yID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdGh1bWIubGFiZWxDb2xvci52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsQ29sb3IudmFsdWUgfWBcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiBnZXRUZXh0Q29udGFpbmVyU3R5bGUodGh1bWIucmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dENsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2xpZGVyX190ZXh0J1xuICAgICAgKyAodGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgICkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdGh1bWJDb250ZW50ID0gW1xuICAgICAgICBoKCdzdmcnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXNsaWRlcl9fdGh1bWItc2hhcGUgYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdwYXRoJywgeyBkOiBwcm9wcy50aHVtYlBhdGggfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3Etc2xpZGVyX19mb2N1cy1yaW5nIGZpdCcgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxhYmVsID09PSB0cnVlIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlKSB7XG4gICAgICAgIHRodW1iQ29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBwaW5DbGFzcy52YWx1ZSArICcgYWJzb2x1dGUgZml0IG5vLXBvaW50ZXItZXZlbnRzJyArIHBpbkNvbG9yLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogbGFiZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IHByb3BzLnRodW1iU2l6ZSB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogdGV4dENvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0ZXh0Q29udGFpbmVyU3R5bGUudmFsdWVcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiB0ZXh0Q2xhc3MudmFsdWUgfSwgdGh1bWIubGFiZWwudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBpbmplY3RGb3JtSW5wdXQodGh1bWJDb250ZW50LCAncHVzaCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgLi4udGh1bWIuZ2V0Tm9kZURhdGEoKVxuICAgICAgfSwgdGh1bWJDb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKHNlbGVjdGlvbkJhclN0eWxlLCB0cmFja0NvbnRhaW5lclRhYmluZGV4LCB0cmFja0NvbnRhaW5lckV2ZW50cywgaW5qZWN0VGh1bWIpIHtcbiAgICBjb25zdCB0cmFja0NvbnRlbnQgPSBbXVxuXG4gICAgcHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdpbm5lcicsXG4gICAgICAgIGNsYXNzOiBpbm5lckJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW5uZXJCYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5zZWxlY3Rpb25Db2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJyxcbiAgICAgICAgY2xhc3M6IHNlbGVjdGlvbkJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2VsZWN0aW9uQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubWFya2VycyAhPT0gZmFsc2UgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ21hcmtlcicsXG4gICAgICAgIGNsYXNzOiBtYXJrZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IG1hcmtlclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIGluamVjdFRodW1iKHRyYWNrQ29udGVudClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3RyYWNrQycsXG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgdGFiaW5kZXg6IHRyYWNrQ29udGFpbmVyVGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgLi4udHJhY2tDb250YWluZXJFdmVudHMudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCB0cmFja0NvbnRlbnQpXG4gICAgICAgIF0sXG4gICAgICAgICdzbGlkZScsXG4gICAgICAgIGVkaXRhYmxlLnZhbHVlLCAoKSA9PiBwYW5EaXJlY3RpdmUudmFsdWVcbiAgICAgIClcbiAgICBdXG5cbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZVxuICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICBjb250ZW50WyBhY3Rpb24gXShcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21hcmtlckwnLFxuICAgICAgICAgIGNsYXNzOiBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcy52YWx1ZVxuICAgICAgICB9LCBnZXRNYXJrZXJMYWJlbHNDb250ZW50KCkpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICBhY3RpdmUsXG4gICAgICBmb2N1cyxcbiAgICAgIHByZXZlbnRGb2N1cyxcbiAgICAgIGRyYWdnaW5nLFxuXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGF0dHJpYnV0ZXMsXG5cbiAgICAgIHJvdW5kVmFsdWVGbixcbiAgICAgIGtleVN0ZXAsXG4gICAgICB0cmFja0xlbixcbiAgICAgIGlubmVyTWluLFxuICAgICAgaW5uZXJNaW5SYXRpbyxcbiAgICAgIGlubmVyTWF4LFxuICAgICAgaW5uZXJNYXhSYXRpbyxcbiAgICAgIHBvc2l0aW9uUHJvcCxcbiAgICAgIHNpemVQcm9wLFxuICAgICAgaXNSZXZlcnNlZFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBvbkFjdGl2YXRlLFxuICAgICAgb25Nb2JpbGVDbGljayxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uS2V5dXAsXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgZ2V0VGh1bWJSZW5kZXJGbixcbiAgICAgIGNvbnZlcnRSYXRpb1RvTW9kZWwsXG4gICAgICBjb252ZXJ0TW9kZWxUb1JhdGlvLFxuICAgICAgZ2V0RHJhZ2dpbmdSYXRpb1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdXNlRm9ybUF0dHJzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHVzZVNsaWRlciwge1xuICB1c2VTbGlkZXJQcm9wcyxcbiAgdXNlU2xpZGVyRW1pdHMsXG4gIGtleUNvZGVzXG59IGZyb20gJy4vdXNlLXNsaWRlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgZ2V0Tm9kZURhdGEgPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2xpZGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNsaWRlclByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB2ID09PSBudWxsXG4gICAgfSxcblxuICAgIGxhYmVsVmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXVxuICB9LFxuXG4gIGVtaXRzOiB1c2VTbGlkZXJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgeyBzdGF0ZSwgbWV0aG9kcyB9ID0gdXNlU2xpZGVyKHtcbiAgICAgIHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsXG4gICAgICBmb3JtQXR0cnM6IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICB9KVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGN1clJhdGlvID0gcmVmKDApXG4gICAgY29uc3QgbW9kZWwgPSByZWYoMClcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsICgpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlubmVyTWluLnZhbHVlXG4gICAgICAgIDogYmV0d2Vlbihwcm9wcy5tb2RlbFZhbHVlLCBzdGF0ZS5pbm5lck1pbi52YWx1ZSwgc3RhdGUuaW5uZXJNYXgudmFsdWUpXG4gICAgfVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubW9kZWxWYWx1ZSB9fCR7IHN0YXRlLmlubmVyTWluLnZhbHVlIH18JHsgc3RhdGUuaW5uZXJNYXgudmFsdWUgfWAsXG4gICAgICBub3JtYWxpemVNb2RlbFxuICAgIClcblxuICAgIG5vcm1hbGl6ZU1vZGVsKClcblxuICAgIGNvbnN0IG1vZGVsUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpKVxuICAgIGNvbnN0IHJhdGlvID0gY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGN1clJhdGlvLnZhbHVlIDogbW9kZWxSYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25CYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgWyBzdGF0ZS5wb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgICBbIHN0YXRlLnNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAocmF0aW8udmFsdWUgLSBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb25JbWcgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5zZWxlY3Rpb25JbWcgfSkgIWltcG9ydGFudGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0VGh1bWIgPSBtZXRob2RzLmdldFRodW1iUmVuZGVyRm4oe1xuICAgICAgZm9jdXNWYWx1ZTogdHJ1ZSxcbiAgICAgIGdldE5vZGVEYXRhLFxuICAgICAgcmF0aW8sXG4gICAgICBsYWJlbDogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgICBwcm9wcy5sYWJlbFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHByb3BzLmxhYmVsVmFsdWVcbiAgICAgICAgICA6IG1vZGVsLnZhbHVlXG4gICAgICApKSxcbiAgICAgIHRodW1iQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLnRodW1iQ29sb3IgfHwgcHJvcHMuY29sb3IpLFxuICAgICAgbGFiZWxDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxDb2xvciksXG4gICAgICBsYWJlbFRleHRDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxUZXh0Q29sb3IpXG4gICAgfSlcblxuICAgIGNvbnN0IHRyYWNrQ29udGFpbmVyRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBtZXRob2RzLm9uTW9iaWxlQ2xpY2sgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG9uTW91c2Vkb3duOiBtZXRob2RzLm9uQWN0aXZhdGUsXG4gICAgICAgICAgICBvbkZvY3VzLFxuICAgICAgICAgICAgb25CbHVyOiBtZXRob2RzLm9uQmx1cixcbiAgICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICAgIG9uS2V5dXA6IG1ldGhvZHMub25LZXl1cFxuICAgICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKGNoYW5nZSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwudmFsdWUpXG4gICAgICB9XG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgbW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmcgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoZXZlbnQsIGRyYWdnaW5nID0gc3RhdGUuZHJhZ2dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gbWV0aG9kcy5nZXREcmFnZ2luZ1JhdGlvKGV2ZW50LCBkcmFnZ2luZylcblxuICAgICAgbW9kZWwudmFsdWUgPSBtZXRob2RzLmNvbnZlcnRSYXRpb1RvTW9kZWwocmF0aW8pXG5cbiAgICAgIGN1clJhdGlvLnZhbHVlID0gcHJvcHMuc25hcCAhPT0gdHJ1ZSB8fCBwcm9wcy5zdGVwID09PSAwXG4gICAgICAgID8gcmF0aW9cbiAgICAgICAgOiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoKSB7XG4gICAgICBzdGF0ZS5mb2N1cy52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICAgICAgaWYgKCFrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3RcbiAgICAgICAgc3RlcFZhbCA9IChbIDM0LCAzMyBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IDEwIDogMSkgKiBzdGF0ZS5rZXlTdGVwLnZhbHVlLFxuICAgICAgICBvZmZzZXQgPSAoXG4gICAgICAgICAgKFsgMzQsIDM3LCA0MCBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IC0xIDogMSlcbiAgICAgICAgICAqIChzdGF0ZS5pc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gLTEgOiAxKVxuICAgICAgICAgICogKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gLTEgOiAxKSAqIHN0ZXBWYWxcbiAgICAgICAgKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IGJldHdlZW4oXG4gICAgICAgIHN0YXRlLnJvdW5kVmFsdWVGbi52YWx1ZShtb2RlbC52YWx1ZSArIG9mZnNldCksXG4gICAgICAgIHN0YXRlLmlubmVyTWluLnZhbHVlLFxuICAgICAgICBzdGF0ZS5pbm5lck1heC52YWx1ZVxuICAgICAgKVxuXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXRob2RzLmdldENvbnRlbnQoXG4gICAgICAgIHNlbGVjdGlvbkJhclN0eWxlLFxuICAgICAgICBzdGF0ZS50YWJpbmRleCxcbiAgICAgICAgdHJhY2tDb250YWluZXJFdmVudHMsXG4gICAgICAgIG5vZGUgPT4geyBub2RlLnB1c2goZ2V0VGh1bWIoKSkgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBzdGF0ZS5jbGFzc2VzLnZhbHVlICsgKHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgPyAnIHEtc2xpZGVyLS1uby12YWx1ZScgOiAnJyksXG4gICAgICAgIC4uLnN0YXRlLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgfSwgY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBxLXB0LXNtXCI+XG4gICAgPHEtYnRuXG4gICAgICBmYWJcbiAgICAgIGZsYXRcbiAgICAgIHNpemU9XCJtZFwiXG4gICAgICA6ZGlzYWJsZT1cIiFoYXNQcmV2aW91cy52YWx1ZVwiXG4gICAgICA6aWNvbj1cIm91dGxpbmVkU2tpcFByZXZpb3VzXCJcbiAgICAgIEBjbGljaz1cInF1ZXVlU2VydmljZT8ucGxheVByZXZpb3VzXCJcbiAgICA+XG4gICAgICA8cS10b29sdGlwPlByZXZpb3VzPC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0blxuICAgICAgZmFiXG4gICAgICBjbGFzcz1cInEtbXgtbWRcIlxuICAgICAgcm91bmRcbiAgICAgIHNpemU9XCJtZFwiXG4gICAgICBjb2xvcj1cImFjY2VudFwiXG4gICAgICA6aWNvbj1cIiFhdWRpb1NlcnZpY2U/LmlzUGxheWluZy52YWx1ZSA/IG91dGxpbmVkUGxheUFycm93IDogb3V0bGluZWRQYXVzZVwiXG4gICAgICBAY2xpY2s9XCJhdWRpb1NlcnZpY2U/LnRvZ2dsZVBhdXNlXCJcbiAgICA+XG4gICAgICA8cS10b29sdGlwPnt7XG4gICAgICAgICFhdWRpb1NlcnZpY2U/LmlzUGxheWluZy52YWx1ZSA/ICdQbGF5JyA6ICdQYXVzZSdcbiAgICAgIH19PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0blxuICAgICAgZmxhdFxuICAgICAgZmFiXG4gICAgICBzaXplPVwibWRcIlxuICAgICAgOmRpc2FibGU9XCIhaGFzTmV4dC52YWx1ZVwiXG4gICAgICA6aWNvbj1cIm91dGxpbmVkU2tpcE5leHRcIlxuICAgICAgQGNsaWNrPVwicXVldWVTZXJ2aWNlPy5wbGF5TmV4dFwiXG4gICAgPlxuICAgICAgPHEtdG9vbHRpcD5OZXh0PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cbiAgPC9kaXY+XG5cbiAgPGRpdlxuICAgIGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1wdC1sZ1wiXG4gICAgdi1pZj1cInF1ZXVlU2VydmljZT8uY3VycmVudFRyYWNrICE9PSBudWxsXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgY3VycmVudFRpbWVTdHJpbmcgfX1cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLXNsaWRlclxuICAgICAgICBjbGFzcz1cInByb2dyZXNzLXNtb290aFwiXG4gICAgICAgIHYtbW9kZWw9XCJjdXJyZW50VGltZVwiXG4gICAgICAgIEBwYW49XCJvblBhblwiXG4gICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJvbkNoYW5nZVwiXG4gICAgICAgIDppbm5lci1taW49XCIwXCJcbiAgICAgICAgOmlubmVyLW1heD1cImJ1ZmZlcmVkVGltZVwiXG4gICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgOm1heD1cInRvdGFsVGltZVwiXG4gICAgICAgIDpzdGVwPVwiMC4xXCJcbiAgICAgIC8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIHt7IHRvdGFsVGltZVN0cmluZyB9fVxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZFNraXBOZXh0LFxuICBvdXRsaW5lZFNraXBQcmV2aW91cyxcbiAgb3V0bGluZWRQYXVzZSxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcblxuaW1wb3J0IEF1ZGlvU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0F1ZGlvU2VydmljZSc7XG5pbXBvcnQgUXVldWVTZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIG9uQmVmb3JlTW91bnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCBhdWRpb1NlcnZpY2UgPSBpbmplY3Q8QXVkaW9TZXJ2aWNlPignYXVkaW9TZXJ2aWNlJyk7XG5pZiAoYXVkaW9TZXJ2aWNlID09PSB1bmRlZmluZWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdBdWRpbyBTZXJ2aWNlIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgcXVldWVTZXJ2aWNlID0gaW5qZWN0PFF1ZXVlU2VydmljZT4oJ3F1ZXVlU2VydmljZScpO1xuaWYgKHF1ZXVlU2VydmljZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHRocm93IG5ldyBFcnJvcignUXVldWUgU2VydmljZSBub3QgZm91bmQnKTtcbn1cblxuY29uc3QgY3VycmVudFRpbWUgPSByZWYoMCk7XG5jb25zdCBjdXJyZW50VGltZVN0cmluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIER1cmF0aW9uLmZyb21TZWNvbmRzKGN1cnJlbnRUaW1lLnZhbHVlKS50b0R1cmF0aW9uU3RyaW5nKCk7XG59KTtcbmNvbnN0IHRvdGFsVGltZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGF1ZGlvU2VydmljZS5kdXJhdGlvbj8udmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG59KTtcbmNvbnN0IHRvdGFsVGltZVN0cmluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIER1cmF0aW9uLmZyb21TZWNvbmRzKHRvdGFsVGltZS52YWx1ZSkudG9EdXJhdGlvblN0cmluZygpO1xufSk7XG5cbmNvbnN0IGJ1ZmZlcmVkVGltZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGF1ZGlvU2VydmljZS5idWZmZXJQb3NpdGlvbj8udmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG59KTtcblxuY29uc3QgaGFzTmV4dCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlU2VydmljZS5oYXNOZXh0O1xufSk7XG5jb25zdCBoYXNQcmV2aW91cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlU2VydmljZS5oYXNQcmV2aW91cztcbn0pO1xuXG5jb25zdCBpc1Bhbm5pbmcgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNVcGRhdGluZyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IG9uUGFuID0gKHBoYXNlOiAnc3RhcnQnIHwgJ2VuZCcpID0+IHtcbiAgaWYgKHBoYXNlID09PSAnc3RhcnQnKSB7XG4gICAgaXNQYW5uaW5nLnZhbHVlID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwaGFzZSA9PT0gJ2VuZCcpIHtcbiAgICBpc1Bhbm5pbmcudmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChhdWRpb1NlcnZpY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaXNQYW5uaW5nLnZhbHVlID0gZmFsc2U7XG5cbiAgICAgIGlzVXBkYXRpbmcudmFsdWUgPSB0cnVlO1xuICAgICAgYXVkaW9TZXJ2aWNlLnNlZWsoRHVyYXRpb24uZnJvbVNlY29uZHMoY3VycmVudFRpbWUudmFsdWUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgaXNVcGRhdGluZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBvbkNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xuICBpZiAoaXNQYW5uaW5nLnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNVcGRhdGluZy52YWx1ZSA9IHRydWU7XG4gIGF1ZGlvU2VydmljZT8uc2VlayhEdXJhdGlvbi5mcm9tU2Vjb25kcyh2YWx1ZSB8fCAwKSkudGhlbigoKSA9PiB7XG4gICAgaXNVcGRhdGluZy52YWx1ZSA9IGZhbHNlO1xuICB9KTtcbn07XG5cbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICB3YXRjaChhdWRpb1NlcnZpY2U/LnBvc2l0aW9uLCAodmFsdWUpID0+IHtcbiAgICBpZiAoIWlzVXBkYXRpbmcudmFsdWUpIHtcbiAgICAgIGN1cnJlbnRUaW1lLnZhbHVlID0gdmFsdWU/LnRvU2Vjb25kcygpIHx8IDA7XG4gICAgfVxuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucHJvZ3Jlc3Mtc21vb3RoIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04IHJvdyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPHEtYnRuXG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmljb249XCJvdXRsaW5lZFJlcGVhdFwiXG4gICAgICAgIGNsYXNzPVwicS1teC1zbVwiXG4gICAgICA+XG4gICAgICAgIDxxLXRvb2x0aXA+UmVwZWF0PC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG5cbiAgICAgICAgcm91bmRcbiAgICAgICAgZGVuc2VcbiAgICAgICAgZmxhdFxuICAgICAgICA6aWNvbj1cIm91dGxpbmVkU2h1ZmZsZVwiXG4gICAgICAgIGNsYXNzPVwicS1teC1zbVwiXG4gICAgICA+XG4gICAgICAgIDxxLXRvb2x0aXA+U2h1ZmZsZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPHEtYnRuXG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmljb249XCJvdXRsaW5lZFF1ZXVlTXVzaWNcIlxuICAgICAgICBjbGFzcz1cInEtbXgtc21cIlxuICAgICAgICBAY2xpY2s9XCJnb3RvUXVldWVQYWdlXCJcbiAgICAgID5cbiAgICAgICAgPHEtdG9vbHRpcD5RdWV1ZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPHEtYnRuXG4gICAgICAgIHJvdW5kXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGZsYXRcbiAgICAgICAgOmljb249XCJtYXRSYWRpb1wiXG4gICAgICAgIGNsYXNzPVwicS1teC1zbVwiXG4gICAgICAgIDpjb2xvcj1cInJhZGlvU2VydmljZT8uaXNBY3RpdmUudmFsdWUgPyAncHJpbWFyeScgOiAnZGlzYWJsZWQnXCJcbiAgICAgICAgQGNsaWNrPVwicmFkaW9TZXJ2aWNlPy50b2dnbGUoKVwiXG4gICAgICA+XG4gICAgICAgIDxxLXRvb2x0aXA+e3sgcmFkaW9TZXJ2aWNlPy5pc0FjdGl2ZSB9fTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cS1pdGVtIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJ2b2x1bWVfdXBcIiAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtc2xpZGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwidm9sdW1lXCJcbiAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgIDptYXg9XCIxXCJcbiAgICAgICAgICAgIDpzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwcHhcIlxuICAgICAgICAgICAgdGh1bWItc2l6ZT1cIjEwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRRdWV1ZU11c2ljLFxuICBvdXRsaW5lZFJlcGVhdCxcbiAgb3V0bGluZWRTaHVmZmxlLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBtYXRSYWRpbyB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IGluamVjdCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUmFkaW9TZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUmFkaW9TZXJ2aWNlJztcbmltcG9ydCBBdWRpb1NlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BdWRpb1NlcnZpY2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cbi8vIEluamVjdGVkIHByb3BzXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCByYWRpb1NlcnZpY2UgPSBpbmplY3Q8UmFkaW9TZXJ2aWNlPigncmFkaW9TZXJ2aWNlJyk7XG5jb25zdCBhdWRpb1NlcnZpY2UgPSBpbmplY3Q8QXVkaW9TZXJ2aWNlPignYXVkaW9TZXJ2aWNlJyk7XG5cbmNvbnN0IHZvbHVtZSA9IHJlZigxKTtcblxuY29uc3QgZ290b1F1ZXVlUGFnZSA9ICgpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnUXVldWUnXG4gIH0pO1xufTtcblxuLy8gV2F0Y2ggdm9sdW1lIGNoYW5nZXNcbndhdGNoKHZvbHVtZSwgKG5ld1ZvbHVtZSkgPT4ge1xuICBhdWRpb1NlcnZpY2U/LnNldFZvbHVtZShuZXdWb2x1bWUpO1xufSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJsSGggTHBSIGZGZlwiPlxuICAgIDxBcHBCYXI+PC9BcHBCYXI+XG5cbiAgICA8cS1kcmF3ZXJcbiAgICAgIHNob3ctaWYtYWJvdmVcbiAgICAgIHYtbW9kZWw9XCJsZWZ0RHJhd2VyT3BlblwiXG4gICAgICBzaWRlPVwibGVmdFwiXG4gICAgICBib3JkZXJlZFxuICAgID5cbiAgICAgIDxOYXZpZ2F0aW9uUmFpbD48L05hdmlnYXRpb25SYWlsPlxuICAgIDwvcS1kcmF3ZXI+XG5cblxuICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgPHJvdXRlci12aWV3IHYtc2xvdD1cInsgQ29tcG9uZW50IH1cIj5cbiAgICAgICAgPGtlZXAtYWxpdmUgOmluY2x1ZGU9XCJbJ0hvbWVQYWdlJywgJ0NpcmNsZVBhZ2UnLCAnUXVldWVQYWdlJ11cIj5cbiAgICAgICAgICA8Y29tcG9uZW50IDppcz1cIkNvbXBvbmVudFwiIC8+XG4gICAgICAgIDwva2VlcC1hbGl2ZT5cbiAgICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuXG4gICAgPHEtZm9vdGVyIGJvcmRlcmVkPlxuICAgICAgPEJvdHRvbVBsYXllckNvbnRyb2xCYXI+PC9Cb3R0b21QbGF5ZXJDb250cm9sQmFyPlxuICAgIDwvcS1mb290ZXI+XG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgS2VlcEFsaXZlLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IE5hdmlnYXRpb25SYWlsIGZyb20gJ3NyYy9jb21wb25lbnRzL05hdmdhdGlvblJhaWwvTmF2aWdhdGlvblJhaWwudnVlJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvQXBwQmFyLnZ1ZSc7XG5pbXBvcnQgQm90dG9tUGxheWVyQ29udHJvbEJhciBmcm9tICdzcmMvY29tcG9uZW50cy9Cb3R0b21QbGF5ZXJDb250cm9sQmFyL0JvdHRvbVBsYXllckNvbnRyb2xCYXIudnVlJztcbmNvbnN0IGxlZnREcmF3ZXJPcGVuID0gcmVmKGZhbHNlKTtcbmNvbnN0IHJpZ2h0RHJhd2VyT3BlbiA9IHJlZih0cnVlKTtcblxuY29uc3QgdG9nZ2xlTGVmdERyYXdlciA9ICgpID0+IHtcbiAgbGVmdERyYXdlck9wZW4udmFsdWUgPSAhbGVmdERyYXdlck9wZW4udmFsdWU7XG59O1xuY29uc3QgdG9nZ2xlUmlnaHREcmF3ZXIgPSAoKSA9PiB7XG4gIHJpZ2h0RHJhd2VyT3Blbi52YWx1ZSA9ICFyaWdodERyYXdlck9wZW4udmFsdWU7XG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsic3R5bGUiLCJwb3NpdGlvbiIsInNpemUiLCJvZmZzZXQiLCJoZWlnaHQiLCJ3aWR0aCIsImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlQSxNQUFNLFdBQVc7QUFFakIsSUFBQSxVQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLGNBQWM7QUFBQSxFQUVkLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUVILE1BQU07QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVcsT0FBSyxDQUFFLFFBQVEsT0FBUyxFQUFDLFNBQVMsQ0FBQztBQUFBLElBQy9DO0FBQUEsSUFFRCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBRUQsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLElBQ2YsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELGlCQUFpQjtBQUFBLElBRWpCLFlBQVk7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJ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
