import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.f6bcad96.js";
import { Q as QTooltip } from "./QTooltip.81614d1f.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.33f9fcba.js";
import { Q as QList } from "./QList.5cc0ff62.js";
import { j as useVirtualScrollProps, k as useVirtualScroll, l as commonVirtScrollPropsList, Q as QSelect, m as QChip, a as QMenu } from "./QSelect.9bb1c361.js";
import { E as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, J as createVNode, T as unref, R as createBaseVNode, H as createBlock, aa as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, V as QSeparator, _ as _export_sfc, br as pushScopeId, bs as popScopeId, c as createComponent, m as h, q as hSlot, a1 as hUniqueSlot, Z as QIcon, t as getCurrentInstance, g as computed, a as useDarkProps, d as useDark, aw as scrollTargetProp, r as ref, w as watch, aj as onBeforeMount, o as onMounted, aX as onActivated, aW as onDeactivated, k as onBeforeUnmount, ax as getScrollTarget, av as listenOpts, A as hMergeSlot, aF as useSizeProps, aG as useSize, bt as vmHasRouter, bu as History, ab as isNumber, bv as isDate, ac as isObject, n as nextTick, bw as injectMultipleProps, bx as QCheckbox, bb as injectProp, N as QBtn, i as inject, I as withCtx, W as createTextVNode, by as QueueAddMode, ai as Duration, Q as QDialog, K as QCardSection, O as QCard, F as useQuasar, l as withDirectives, b8 as QAvatar, M as QCardActions, bn as useLoadableController, bm as AlbumApi } from "./index.99fa97b6.js";
import { Q as QPage } from "./QPage.4e55eb86.js";
import { C as ClosePopup } from "./ClosePopup.b10a77bd.js";
import { p as outlinedPlayArrow, c as outlinedFavoriteBorder, v as outlinedMoreHoriz, w as outlinedDescription, x as outlinedEditNote } from "./index.020b7c4d.js";
import { Q as QImg } from "./QImg.62c3a240.js";
import { D as DataSourceButton } from "./DataSourceButton.044d43d2.js";
import { T as TrackMenu, a as TrackMenuOptionsBuilder } from "./TrackMenuOptionBuilder.ddb2ff4c.js";
import { c as QToolbar, Q as QToolbarTitle, e as matPreview, f as matOpenInNew, g as matFileDownload } from "./QToolbar.f6c82e1b.js";
import "./UrlUtils.da180cca.js";
var AlbumInfoSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-74c424d0"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "row full-width q-px-none q-pt-lg" };
const _hoisted_2$3 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3$2 = { class: "col-8" };
const _hoisted_4$1 = { class: "row full-width full-height items-end" };
const _hoisted_5$1 = { class: "col-12" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Album", -1));
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = {
  id: "artists",
  class: "metadata-entry"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 0,
  id: "release-date",
  class: "metadata-entry"
};
const _hoisted_13 = { class: "text-subtitle1" };
const _sfc_main$4 = defineComponent({
  __name: "AlbumInfoSection",
  props: {
    album: {}
  },
  setup(__props) {
    const $router = useRouter();
    const props = __props;
    const initializeViewModel = () => {
      var _a, _b, _c, _d;
      const albumArtists = (_a = props.album.albumArtist) == null ? void 0 : _a.reduce((acc, artist) => {
        acc[artist.id] = artist.name;
        return acc;
      }, {});
      console.log("albumArtists", albumArtists);
      return {
        albumName: ((_b = props.album.name) == null ? void 0 : _b._default) || "",
        albumArtists,
        albumCoverUrl: ((_d = (_c = props.album.thumbnail) == null ? void 0 : _c.large) == null ? void 0 : _d.url) || null,
        releaseDate: props.album.releaseDate || null,
        dataSources: props.album.dataSource || []
      };
    };
    const viewModel = initializeViewModel();
    const gotoCircle = (circleId) => {
      $router.push({
        name: "CircleAlbums",
        params: { circleId, page: "1" }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(DataSourceButton, {
          dataSources: unref(viewModel).dataSources
        }, null, 8, ["dataSources"]),
        createBaseVNode("div", _hoisted_2$3, [
          unref(viewModel).albumCoverUrl ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: unref(viewModel).albumCoverUrl,
            ratio: "1"
          }, null, 8, ["src"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              _hoisted_6$1,
              createBaseVNode("h3", _hoisted_7, toDisplayString(unref(viewModel).albumName), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(viewModel).albumArtists, (artistName, artistId) => {
                    return openBlock(), createElementBlock("span", {
                      class: "text-subtitle1 text-bold cursor-pointer artist-name",
                      onClick: ($event) => gotoCircle(artistId),
                      key: artistId
                    }, toDisplayString(artistName), 9, _hoisted_11);
                  }), 128))
                ]),
                createVNode(QSeparator, {
                  vertical: "",
                  spaced: ""
                }),
                unref(viewModel).releaseDate ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, toDisplayString(unref(viewModel).releaseDate.toLocaleDateString()), 1)
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var AlbumInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-74c424d0"], ["__file", "AlbumInfoSection.vue"]]);
var QTh = createComponent({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const onClick = (evt) => {
      emit("click", evt);
    };
    return () => {
      if (props.props === void 0) {
        return h("th", {
          class: props.autoWidth === true ? "q-table--col-auto-width" : "",
          onClick
        }, hSlot(slots.default));
      }
      let col, child;
      const name = vm.vnode.key;
      if (name) {
        col = props.props.colsMap[name];
        if (col === void 0)
          return;
      } else {
        col = props.props.col;
      }
      if (col.sortable === true) {
        const action = col.align === "right" ? "unshift" : "push";
        child = hUniqueSlot(slots.default, []);
        child[action](
          h(QIcon, {
            class: col.__iconClass,
            name: $q.iconSet.table.arrowUp
          })
        );
      } else {
        child = hSlot(slots.default);
      }
      const data = {
        class: col.__thClass + (props.autoWidth === true ? " q-table--col-auto-width" : ""),
        style: col.headerStyle,
        onClick: (evt) => {
          col.sortable === true && props.props.sort(col);
          onClick(evt);
        }
      };
      return h("th", data, child);
    };
  }
});
var QTr = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-tr" + (props.props === void 0 || props.props.header === true ? "" : " " + props.props.__trClass) + (props.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
  }
});
var QTd = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name = vm.vnode.key;
      const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
      if (col === void 0)
        return;
      const { row } = props.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
const separatorValues = ["horizontal", "vertical", "cell", "none"];
var QMarkupTable = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
function getTableMiddle(props, content) {
  return h("div", props, [
    h("table", { class: "q-table" }, content)
  ]);
}
const comps = {
  list: QList,
  table: QMarkupTable
};
const typeOptions = ["list", "table", "__qtable"];
var QVirtualScroll = createComponent({
  name: "QVirtualScroll",
  props: {
    ...useVirtualScrollProps,
    type: {
      type: String,
      default: "list",
      validator: (v) => typeOptions.includes(v)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: scrollTargetProp
  },
  setup(props, { slots, attrs }) {
    let localScrollTarget;
    const rootRef = ref(null);
    const virtualScrollLength = computed(() => props.itemsSize >= 0 && props.itemsFn !== void 0 ? parseInt(props.itemsSize, 10) : Array.isArray(props.items) ? props.items.length : 0);
    const {
      virtualScrollSliceRange,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl
    });
    const virtualScrollScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const mapFn = (item, i) => ({
        index: virtualScrollSliceRange.value.from + i,
        item
      });
      return props.itemsFn === void 0 ? props.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
    });
    const classes = computed(
      () => "q-virtual-scroll q-virtual-scroll" + (props.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props.scrollTarget !== void 0 ? "" : " scroll")
    );
    const attributes = computed(() => props.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    watch(virtualScrollLength, () => {
      localResetVirtualScroll();
    });
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function getVirtualScrollEl() {
      return rootRef.value.$el || rootRef.value;
    }
    function getVirtualScrollTarget() {
      return localScrollTarget;
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(getVirtualScrollEl(), props.scrollTarget);
      localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
        localScrollTarget = void 0;
      }
    }
    function __getVirtualChildren() {
      let child = padVirtualScroll(
        props.type === "list" ? "div" : "tbody",
        virtualScrollScope.value.map(slots.default)
      );
      if (slots.before !== void 0) {
        child = slots.before().concat(child);
      }
      return hMergeSlot(slots.after, child);
    }
    onBeforeMount(() => {
      localResetVirtualScroll();
    });
    onMounted(() => {
      configureScrollTarget();
    });
    onActivated(() => {
      configureScrollTarget();
    });
    onDeactivated(() => {
      unconfigureScrollTarget();
    });
    onBeforeUnmount(() => {
      unconfigureScrollTarget();
    });
    return () => {
      if (slots.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return props.type === "__qtable" ? getTableMiddle(
        { ref: rootRef, class: "q-table__middle " + classes.value },
        __getVirtualChildren()
      ) : h(comps[props.type], {
        ...attrs,
        ref: rootRef,
        class: [attrs.class, classes.value],
        ...attributes.value
      }, __getVirtualChildren);
    };
  }
});
const defaultSizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function width(val, reverse, $q) {
  return {
    transform: reverse === true ? `translateX(${$q.lang.rtl === true ? "-" : ""}100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
  };
}
var QLinearProgress = createComponent({
  name: "QLinearProgress",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(props, { slots }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, defaultSizes);
    const motion = computed(() => props.indeterminate === true || props.query === true);
    const widthReverse = computed(() => props.reverse !== props.query);
    const style = computed(() => ({
      ...sizeStyle.value !== null ? sizeStyle.value : {},
      "--q-linear-progress-speed": `${props.animationSpeed}ms`
    }));
    const classes = computed(
      () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const trackStyle = computed(() => width(props.buffer !== void 0 ? props.buffer : 1, widthReverse.value, proxy.$q));
    const transitionSuffix = computed(() => `with${props.instantFeedback === true ? "out" : ""}-transition`);
    const trackClass = computed(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${transitionSuffix.value} q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
    );
    const modelStyle = computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
    const modelClass = computed(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${transitionSuffix.value} q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = computed(() => ({ width: `${props.value * 100}%` }));
    const stripeClass = computed(
      () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"} q-linear-progress__stripe--${transitionSuffix.value}`
    );
    return () => {
      const child = [
        h("div", {
          class: trackClass.value,
          style: trackStyle.value
        }),
        h("div", {
          class: modelClass.value,
          style: modelStyle.value
        })
      ];
      props.stripe === true && motion.value === false && child.push(
        h("div", {
          class: stripeClass.value,
          style: stripeStyle.value
        })
      );
      return h("div", {
        class: classes.value,
        style: style.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": props.indeterminate === true ? void 0 : props.value
      }, hMergeSlot(slots.default, child));
    };
  }
});
let counter = 0;
const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true)
      return;
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true)
      return;
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
const useTableSortProps = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (v) => v === "ad" || v === "da",
    default: "ad"
  }
};
function useTableSort(props, computedPagination, colList, setPagination) {
  const columnToSort = computed(() => {
    const { sortBy } = computedPagination.value;
    return sortBy ? colList.value.find((def) => def.name === sortBy) || null : null;
  });
  const computedSortMethod = computed(() => props.sortMethod !== void 0 ? props.sortMethod : (data, sortBy, descending) => {
    const col = colList.value.find((def) => def.name === sortBy);
    if (col === void 0 || col.field === void 0) {
      return data;
    }
    const dir = descending === true ? -1 : 1, val = typeof col.field === "function" ? (v) => col.field(v) : (v) => v[col.field];
    return data.sort((a, b) => {
      let A = val(a), B = val(b);
      if (col.rawSort !== void 0) {
        return col.rawSort(A, B, a, b) * dir;
      }
      if (A === null || A === void 0) {
        return -1 * dir;
      }
      if (B === null || B === void 0) {
        return 1 * dir;
      }
      if (col.sort !== void 0) {
        return col.sort(A, B, a, b) * dir;
      }
      if (isNumber(A) === true && isNumber(B) === true) {
        return (A - B) * dir;
      }
      if (isDate(A) === true && isDate(B) === true) {
        return sortDate(A, B) * dir;
      }
      if (typeof A === "boolean" && typeof B === "boolean") {
        return (A - B) * dir;
      }
      [A, B] = [A, B].map((s) => (s + "").toLocaleString().toLowerCase());
      return A < B ? -1 * dir : A === B ? 0 : dir;
    });
  });
  function sort(col) {
    let sortOrder = props.columnSortOrder;
    if (isObject(col) === true) {
      if (col.sortOrder) {
        sortOrder = col.sortOrder;
      }
      col = col.name;
    } else {
      const def = colList.value.find((def2) => def2.name === col);
      if (def !== void 0 && def.sortOrder) {
        sortOrder = def.sortOrder;
      }
    }
    let { sortBy, descending } = computedPagination.value;
    if (sortBy !== col) {
      sortBy = col;
      descending = sortOrder === "da";
    } else if (props.binaryStateSort === true) {
      descending = !descending;
    } else if (descending === true) {
      if (sortOrder === "ad") {
        sortBy = null;
      } else {
        descending = false;
      }
    } else {
      if (sortOrder === "ad") {
        descending = true;
      } else {
        sortBy = null;
      }
    }
    setPagination({ sortBy, descending, page: 1 });
  }
  return {
    columnToSort,
    computedSortMethod,
    sort
  };
}
const useTableFilterProps = {
  filter: [String, Object],
  filterMethod: Function
};
function useTableFilter(props, setPagination) {
  const computedFilterMethod = computed(() => props.filterMethod !== void 0 ? props.filterMethod : (rows, terms, cols, cellValue) => {
    const lowerTerms = terms ? terms.toLowerCase() : "";
    return rows.filter(
      (row) => cols.some((col) => {
        const val = cellValue(col, row) + "";
        const haystack = val === "undefined" || val === "null" ? "" : val.toLowerCase();
        return haystack.indexOf(lowerTerms) !== -1;
      })
    );
  });
  watch(
    () => props.filter,
    () => {
      nextTick(() => {
        setPagination({ page: 1 }, true);
      });
    },
    { deep: true }
  );
  return { computedFilterMethod };
}
function samePagination(oldPag, newPag) {
  for (const prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }
  return true;
}
function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }
  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }
  return p;
}
const useTablePaginationProps = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function useTablePaginationState(vm, getCellValue) {
  const { props, emit } = vm;
  const innerPagination = ref(
    Object.assign({
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: props.rowsPerPageOptions.length !== 0 ? props.rowsPerPageOptions[0] : 5
    }, props.pagination)
  );
  const computedPagination = computed(() => {
    const pag = props["onUpdate:pagination"] !== void 0 ? { ...innerPagination.value, ...props.pagination } : innerPagination.value;
    return fixPagination(pag);
  });
  const isServerSide = computed(() => computedPagination.value.rowsNumber !== void 0);
  function sendServerRequest(pagination) {
    requestServerInteraction({
      pagination,
      filter: props.filter
    });
  }
  function requestServerInteraction(prop = {}) {
    nextTick(() => {
      emit("request", {
        pagination: prop.pagination || computedPagination.value,
        filter: prop.filter || props.filter,
        getCellValue
      });
    });
  }
  function setPagination(val, forceServerRequest) {
    const newPagination = fixPagination({
      ...computedPagination.value,
      ...val
    });
    if (samePagination(computedPagination.value, newPagination) === true) {
      if (isServerSide.value === true && forceServerRequest === true) {
        sendServerRequest(newPagination);
      }
      return;
    }
    if (isServerSide.value === true) {
      sendServerRequest(newPagination);
      return;
    }
    if (props.pagination !== void 0 && props["onUpdate:pagination"] !== void 0) {
      emit("update:pagination", newPagination);
    } else {
      innerPagination.value = newPagination;
    }
  }
  return {
    innerPagination,
    computedPagination,
    isServerSide,
    requestServerInteraction,
    setPagination
  };
}
function useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber) {
  const { props, emit, proxy: { $q } } = vm;
  const computedRowsNumber = computed(() => isServerSide.value === true ? computedPagination.value.rowsNumber || 0 : filteredSortedRowsNumber.value);
  const firstRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return (page - 1) * rowsPerPage;
  });
  const lastRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return page * rowsPerPage;
  });
  const isFirstPage = computed(() => computedPagination.value.page === 1);
  const pagesNumber = computed(() => computedPagination.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(computedRowsNumber.value / computedPagination.value.rowsPerPage)
  ));
  const isLastPage = computed(() => lastRowIndex.value === 0 ? true : computedPagination.value.page >= pagesNumber.value);
  const computedRowsPerPageOptions = computed(() => {
    const opts = props.rowsPerPageOptions.includes(innerPagination.value.rowsPerPage) ? props.rowsPerPageOptions : [innerPagination.value.rowsPerPage].concat(props.rowsPerPageOptions);
    return opts.map((count) => ({
      label: count === 0 ? $q.lang.table.allRows : "" + count,
      value: count
    }));
  });
  watch(pagesNumber, (lastPage2, oldLastPage) => {
    if (lastPage2 === oldLastPage)
      return;
    const currentPage = computedPagination.value.page;
    if (lastPage2 && !currentPage) {
      setPagination({ page: 1 });
    } else if (lastPage2 < currentPage) {
      setPagination({ page: lastPage2 });
    }
  });
  function firstPage() {
    setPagination({ page: 1 });
  }
  function prevPage() {
    const { page } = computedPagination.value;
    if (page > 1) {
      setPagination({ page: page - 1 });
    }
  }
  function nextPage() {
    const { page, rowsPerPage } = computedPagination.value;
    if (lastRowIndex.value > 0 && page * rowsPerPage < computedRowsNumber.value) {
      setPagination({ page: page + 1 });
    }
  }
  function lastPage() {
    setPagination({ page: pagesNumber.value });
  }
  if (props["onUpdate:pagination"] !== void 0) {
    emit("update:pagination", { ...computedPagination.value });
  }
  return {
    firstRowIndex,
    lastRowIndex,
    isFirstPage,
    isLastPage,
    pagesNumber,
    computedRowsPerPageOptions,
    computedRowsNumber,
    firstPage,
    prevPage,
    nextPage,
    lastPage
  };
}
const useTableRowSelectionProps = {
  selection: {
    type: String,
    default: "none",
    validator: (v) => ["single", "multiple", "none"].includes(v)
  },
  selected: {
    type: Array,
    default: () => []
  }
};
const useTableRowSelectionEmits = ["update:selected", "selection"];
function useTableRowSelection(props, emit, computedRows, getRowKey) {
  const selectedKeys = computed(() => {
    const keys = {};
    props.selected.map(getRowKey.value).forEach((key) => {
      keys[key] = true;
    });
    return keys;
  });
  const hasSelectionMode = computed(() => {
    return props.selection !== "none";
  });
  const singleSelection = computed(() => {
    return props.selection === "single";
  });
  const multipleSelection = computed(() => {
    return props.selection === "multiple";
  });
  const allRowsSelected = computed(
    () => computedRows.value.length !== 0 && computedRows.value.every(
      (row) => selectedKeys.value[getRowKey.value(row)] === true
    )
  );
  const someRowsSelected = computed(
    () => allRowsSelected.value !== true && computedRows.value.some((row) => selectedKeys.value[getRowKey.value(row)] === true)
  );
  const rowsSelectedNumber = computed(() => props.selected.length);
  function isRowSelected(key) {
    return selectedKeys.value[key] === true;
  }
  function clearSelection() {
    emit("update:selected", []);
  }
  function updateSelection(keys, rows, added, evt) {
    emit("selection", { rows, added, keys, evt });
    const payload = singleSelection.value === true ? added === true ? rows : [] : added === true ? props.selected.concat(rows) : props.selected.filter(
      (row) => keys.includes(getRowKey.value(row)) === false
    );
    emit("update:selected", payload);
  }
  return {
    hasSelectionMode,
    singleSelection,
    multipleSelection,
    allRowsSelected,
    someRowsSelected,
    rowsSelectedNumber,
    isRowSelected,
    clearSelection,
    updateSelection
  };
}
function getVal(val) {
  return Array.isArray(val) ? val.slice() : [];
}
const useTableRowExpandProps = {
  expanded: Array
};
const useTableRowExpandEmits = ["update:expanded"];
function useTableRowExpand(props, emit) {
  const innerExpanded = ref(getVal(props.expanded));
  watch(() => props.expanded, (val) => {
    innerExpanded.value = getVal(val);
  });
  function isRowExpanded(key) {
    return innerExpanded.value.includes(key);
  }
  function setExpanded(val) {
    if (props.expanded !== void 0) {
      emit("update:expanded", val);
    } else {
      innerExpanded.value = val;
    }
  }
  function updateExpanded(key, add) {
    const target = innerExpanded.value.slice();
    const index = target.indexOf(key);
    if (add === true) {
      if (index === -1) {
        target.push(key);
        setExpanded(target);
      }
    } else if (index !== -1) {
      target.splice(index, 1);
      setExpanded(target);
    }
  }
  return {
    isRowExpanded,
    setExpanded,
    updateExpanded
  };
}
const useTableColumnSelectionProps = {
  visibleColumns: Array
};
function useTableColumnSelection(props, computedPagination, hasSelectionMode) {
  const colList = computed(() => {
    if (props.columns !== void 0) {
      return props.columns;
    }
    const row = props.rows[0];
    return row !== void 0 ? Object.keys(row).map((name) => ({
      name,
      label: name.toUpperCase(),
      field: name,
      align: isNumber(row[name]) ? "right" : "left",
      sortable: true
    })) : [];
  });
  const computedCols = computed(() => {
    const { sortBy, descending } = computedPagination.value;
    const cols = props.visibleColumns !== void 0 ? colList.value.filter((col) => col.required === true || props.visibleColumns.includes(col.name) === true) : colList.value;
    return cols.map((col) => {
      const align = col.align || "right";
      const alignClass = `text-${align}`;
      return {
        ...col,
        align,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${align}`,
        __thClass: alignClass + (col.headerClasses !== void 0 ? " " + col.headerClasses : "") + (col.sortable === true ? " sortable" : "") + (col.name === sortBy ? ` sorted ${descending === true ? "sort-desc" : ""}` : ""),
        __tdStyle: col.style !== void 0 ? typeof col.style !== "function" ? () => col.style : col.style : () => null,
        __tdClass: col.classes !== void 0 ? typeof col.classes !== "function" ? () => alignClass + " " + col.classes : (row) => alignClass + " " + col.classes(row) : () => alignClass
      };
    });
  });
  const computedColsMap = computed(() => {
    const names = {};
    computedCols.value.forEach((col) => {
      names[col.name] = col;
    });
    return names;
  });
  const computedColspan = computed(() => {
    return props.tableColspan !== void 0 ? props.tableColspan : computedCols.value.length + (hasSelectionMode.value === true ? 1 : 0);
  });
  return {
    colList,
    computedCols,
    computedColsMap,
    computedColspan
  };
}
const bottomClass = "q-table__bottom row items-center";
const virtScrollPassthroughProps = {};
commonVirtScrollPropsList.forEach((p) => {
  virtScrollPassthroughProps[p] = {};
});
var QTable = createComponent({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      required: true
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => ["horizontal", "vertical", "cell", "none"].includes(v)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {},
    ...virtScrollPassthroughProps,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...useDarkProps,
    ...useFullscreenProps,
    ...useTableColumnSelectionProps,
    ...useTableFilterProps,
    ...useTablePaginationProps,
    ...useTableRowExpandProps,
    ...useTableRowSelectionProps,
    ...useTableSortProps
  },
  emits: [
    "request",
    "virtualScroll",
    ...useFullscreenEmits,
    ...useTableRowExpandEmits,
    ...useTableRowSelectionEmits
  ],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const getRowKey = computed(() => typeof props.rowKey === "function" ? props.rowKey : (row) => row[props.rowKey]);
    const rootRef = ref(null);
    const virtScrollRef = ref(null);
    const hasVirtScroll = computed(() => props.grid !== true && props.virtualScroll === true);
    const cardDefaultClass = computed(
      () => " q-table__card" + (isDark.value === true ? " q-table__card--dark q-dark" : "") + (props.square === true ? " q-table--square" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "")
    );
    const __containerClass = computed(
      () => `q-table__container q-table--${props.separator}-separator column no-wrap` + (props.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
    );
    const containerClass = computed(
      () => __containerClass.value + (props.loading === true ? " q-table--loading" : "")
    );
    watch(
      () => props.tableStyle + props.tableClass + props.tableHeaderStyle + props.tableHeaderClass + __containerClass.value,
      () => {
        hasVirtScroll.value === true && virtScrollRef.value !== null && virtScrollRef.value.reset();
      }
    );
    const {
      innerPagination,
      computedPagination,
      isServerSide,
      requestServerInteraction,
      setPagination
    } = useTablePaginationState(vm, getCellValue);
    const { computedFilterMethod } = useTableFilter(props, setPagination);
    const { isRowExpanded, setExpanded, updateExpanded } = useTableRowExpand(props, emit);
    const filteredSortedRows = computed(() => {
      let rows = props.rows;
      if (isServerSide.value === true || rows.length === 0) {
        return rows;
      }
      const { sortBy, descending } = computedPagination.value;
      if (props.filter) {
        rows = computedFilterMethod.value(rows, props.filter, computedCols.value, getCellValue);
      }
      if (columnToSort.value !== null) {
        rows = computedSortMethod.value(
          props.rows === rows ? rows.slice() : rows,
          sortBy,
          descending
        );
      }
      return rows;
    });
    const filteredSortedRowsNumber = computed(() => filteredSortedRows.value.length);
    const computedRows = computed(() => {
      let rows = filteredSortedRows.value;
      if (isServerSide.value === true) {
        return rows;
      }
      const { rowsPerPage } = computedPagination.value;
      if (rowsPerPage !== 0) {
        if (firstRowIndex.value === 0 && props.rows !== rows) {
          if (rows.length > lastRowIndex.value) {
            rows = rows.slice(0, lastRowIndex.value);
          }
        } else {
          rows = rows.slice(firstRowIndex.value, lastRowIndex.value);
        }
      }
      return rows;
    });
    const {
      hasSelectionMode,
      singleSelection,
      multipleSelection,
      allRowsSelected,
      someRowsSelected,
      rowsSelectedNumber,
      isRowSelected,
      clearSelection,
      updateSelection
    } = useTableRowSelection(props, emit, computedRows, getRowKey);
    const { colList, computedCols, computedColsMap, computedColspan } = useTableColumnSelection(props, computedPagination, hasSelectionMode);
    const { columnToSort, computedSortMethod, sort } = useTableSort(props, computedPagination, colList, setPagination);
    const {
      firstRowIndex,
      lastRowIndex,
      isFirstPage,
      isLastPage,
      pagesNumber,
      computedRowsPerPageOptions,
      computedRowsNumber,
      firstPage,
      prevPage,
      nextPage,
      lastPage
    } = useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber);
    const nothingToDisplay = computed(() => computedRows.value.length === 0);
    const virtProps = computed(() => {
      const acc = {};
      commonVirtScrollPropsList.forEach((p) => {
        acc[p] = props[p];
      });
      if (acc.virtualScrollItemSize === void 0) {
        acc.virtualScrollItemSize = props.dense === true ? 28 : 48;
      }
      return acc;
    });
    function resetVirtualScroll() {
      hasVirtScroll.value === true && virtScrollRef.value.reset();
    }
    function getBody() {
      if (props.grid === true) {
        return getGridBody();
      }
      const header = props.hideHeader !== true ? getTHead : null;
      if (hasVirtScroll.value === true) {
        const topRow = slots["top-row"];
        const bottomRow = slots["bottom-row"];
        const virtSlots = {
          default: (props2) => getTBodyTR(props2.item, slots.body, props2.index)
        };
        if (topRow !== void 0) {
          const topContent = h("tbody", topRow({ cols: computedCols.value }));
          virtSlots.before = header === null ? () => topContent : () => [header()].concat(topContent);
        } else if (header !== null) {
          virtSlots.before = header;
        }
        if (bottomRow !== void 0) {
          virtSlots.after = () => h("tbody", bottomRow({ cols: computedCols.value }));
        }
        return h(QVirtualScroll, {
          ref: virtScrollRef,
          class: props.tableClass,
          style: props.tableStyle,
          ...virtProps.value,
          scrollTarget: props.virtualScrollTarget,
          items: computedRows.value,
          type: "__qtable",
          tableColspan: computedColspan.value,
          onVirtualScroll: onVScroll
        }, virtSlots);
      }
      const child = [
        getTBody()
      ];
      if (header !== null) {
        child.unshift(header());
      }
      return getTableMiddle({
        class: ["q-table__middle scroll", props.tableClass],
        style: props.tableStyle
      }, child);
    }
    function scrollTo(toIndex, edge) {
      if (virtScrollRef.value !== null) {
        virtScrollRef.value.scrollTo(toIndex, edge);
        return;
      }
      toIndex = parseInt(toIndex, 10);
      const rowEl = rootRef.value.querySelector(`tbody tr:nth-of-type(${toIndex + 1})`);
      if (rowEl !== null) {
        const scrollTarget = rootRef.value.querySelector(".q-table__middle.scroll");
        const offsetTop = rowEl.offsetTop - props.virtualScrollStickySizeStart;
        const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
        scrollTarget.scrollTop = offsetTop;
        emit("virtualScroll", {
          index: toIndex,
          from: 0,
          to: innerPagination.value.rowsPerPage - 1,
          direction
        });
      }
    }
    function onVScroll(info) {
      emit("virtualScroll", info);
    }
    function getProgress() {
      return [
        h(QLinearProgress, {
          class: "q-table__linear-progress",
          color: props.color,
          dark: isDark.value,
          indeterminate: true,
          trackColor: "transparent"
        })
      ];
    }
    function getTBodyTR(row, bodySlot, pageIndex) {
      const key = getRowKey.value(row), selected = isRowSelected(key);
      if (bodySlot !== void 0) {
        return bodySlot(
          getBodyScope({
            key,
            row,
            pageIndex,
            __trClass: selected ? "selected" : ""
          })
        );
      }
      const bodyCell = slots["body-cell"], child = computedCols.value.map((col) => {
        const bodyCellCol = slots[`body-cell-${col.name}`], slot = bodyCellCol !== void 0 ? bodyCellCol : bodyCell;
        return slot !== void 0 ? slot(getBodyCellScope({ key, row, pageIndex, col })) : h("td", {
          class: col.__tdClass(row),
          style: col.__tdStyle(row)
        }, getCellValue(col, row));
      });
      if (hasSelectionMode.value === true) {
        const slot = slots["body-selection"];
        const content = slot !== void 0 ? slot(getBodySelectionScope({ key, row, pageIndex })) : [
          h(QCheckbox, {
            modelValue: selected,
            color: props.color,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": (adding, evt) => {
              updateSelection([key], [row], adding, evt);
            }
          })
        ];
        child.unshift(
          h("td", { class: "q-table--col-auto-width" }, content)
        );
      }
      const data = { key, class: { selected } };
      if (props.onRowClick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onClick = (evt) => {
          emit("rowClick", evt, row, pageIndex);
        };
      }
      if (props.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("rowDblclick", evt, row, pageIndex);
        };
      }
      if (props.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("rowContextmenu", evt, row, pageIndex);
        };
      }
      return h("tr", data, child);
    }
    function getTBody() {
      const body = slots.body, topRow = slots["top-row"], bottomRow = slots["bottom-row"];
      let child = computedRows.value.map(
        (row, pageIndex) => getTBodyTR(row, body, pageIndex)
      );
      if (topRow !== void 0) {
        child = topRow({ cols: computedCols.value }).concat(child);
      }
      if (bottomRow !== void 0) {
        child = child.concat(bottomRow({ cols: computedCols.value }));
      }
      return h("tbody", child);
    }
    function getBodyScope(data) {
      injectBodyCommonScope(data);
      data.cols = data.cols.map(
        (col) => injectProp({ ...col }, "value", () => getCellValue(col, data.row))
      );
      return data;
    }
    function getBodyCellScope(data) {
      injectBodyCommonScope(data);
      injectProp(data, "value", () => getCellValue(data.col, data.row));
      return data;
    }
    function getBodySelectionScope(data) {
      injectBodyCommonScope(data);
      return data;
    }
    function injectBodyCommonScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        colsMap: computedColsMap.value,
        sort,
        rowIndex: firstRowIndex.value + data.pageIndex,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      hasSelectionMode.value === true && injectProp(
        data,
        "selected",
        () => isRowSelected(data.key),
        (adding, evt) => {
          updateSelection([data.key], [data.row], adding, evt);
        }
      );
      injectProp(
        data,
        "expand",
        () => isRowExpanded(data.key),
        (adding) => {
          updateExpanded(data.key, adding);
        }
      );
    }
    function getCellValue(col, row) {
      const val = typeof col.field === "function" ? col.field(row) : row[col.field];
      return col.format !== void 0 ? col.format(val, row) : val;
    }
    const marginalsScope = computed(() => ({
      pagination: computedPagination.value,
      pagesNumber: pagesNumber.value,
      isFirstPage: isFirstPage.value,
      isLastPage: isLastPage.value,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      inFullscreen: inFullscreen.value,
      toggleFullscreen
    }));
    function getTopDiv() {
      const top = slots.top, topLeft = slots["top-left"], topRight = slots["top-right"], topSelection = slots["top-selection"], hasSelection = hasSelectionMode.value === true && topSelection !== void 0 && rowsSelectedNumber.value > 0, topClass = "q-table__top relative-position row items-center";
      if (top !== void 0) {
        return h("div", { class: topClass }, [top(marginalsScope.value)]);
      }
      let child;
      if (hasSelection === true) {
        child = topSelection(marginalsScope.value).slice();
      } else {
        child = [];
        if (topLeft !== void 0) {
          child.push(
            h("div", { class: "q-table__control" }, [
              topLeft(marginalsScope.value)
            ])
          );
        } else if (props.title) {
          child.push(
            h("div", { class: "q-table__control" }, [
              h("div", {
                class: ["q-table__title", props.titleClass]
              }, props.title)
            ])
          );
        }
      }
      if (topRight !== void 0) {
        child.push(
          h("div", { class: "q-table__separator col" })
        );
        child.push(
          h("div", { class: "q-table__control" }, [
            topRight(marginalsScope.value)
          ])
        );
      }
      if (child.length === 0)
        return;
      return h("div", { class: topClass }, child);
    }
    const headerSelectedValue = computed(() => someRowsSelected.value === true ? null : allRowsSelected.value);
    function getTHead() {
      const child = getTHeadTR();
      if (props.loading === true && slots.loading === void 0) {
        child.push(
          h("tr", { class: "q-table__progress" }, [
            h("th", {
              class: "relative-position",
              colspan: computedColspan.value
            }, getProgress())
          ])
        );
      }
      return h("thead", child);
    }
    function getTHeadTR() {
      const header = slots.header, headerCell = slots["header-cell"];
      if (header !== void 0) {
        return header(
          getHeaderScope({ header: true })
        ).slice();
      }
      const child = computedCols.value.map((col) => {
        const headerCellCol = slots[`header-cell-${col.name}`], slot = headerCellCol !== void 0 ? headerCellCol : headerCell, props2 = getHeaderScope({ col });
        return slot !== void 0 ? slot(props2) : h(QTh, {
          key: col.name,
          props: props2
        }, () => col.label);
      });
      if (singleSelection.value === true && props.grid !== true) {
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, " ")
        );
      } else if (multipleSelection.value === true) {
        const slot = slots["header-selection"];
        const content = slot !== void 0 ? slot(getHeaderScope({})) : [
          h(QCheckbox, {
            color: props.color,
            modelValue: headerSelectedValue.value,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": onMultipleSelectionSet
          })
        ];
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, content)
        );
      }
      return [
        h("tr", {
          class: props.tableHeaderClass,
          style: props.tableHeaderStyle
        }, child)
      ];
    }
    function getHeaderScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        sort,
        colsMap: computedColsMap.value,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      if (multipleSelection.value === true) {
        injectProp(
          data,
          "selected",
          () => headerSelectedValue.value,
          onMultipleSelectionSet
        );
      }
      return data;
    }
    function onMultipleSelectionSet(val) {
      if (someRowsSelected.value === true) {
        val = false;
      }
      updateSelection(
        computedRows.value.map(getRowKey.value),
        computedRows.value,
        val
      );
    }
    const navIcon = computed(() => {
      const ico = [
        props.iconFirstPage || $q.iconSet.table.firstPage,
        props.iconPrevPage || $q.iconSet.table.prevPage,
        props.iconNextPage || $q.iconSet.table.nextPage,
        props.iconLastPage || $q.iconSet.table.lastPage
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    function getBottomDiv() {
      if (props.hideBottom === true)
        return;
      if (nothingToDisplay.value === true) {
        if (props.hideNoData === true)
          return;
        const message = props.loading === true ? props.loadingLabel || $q.lang.table.loading : props.filter ? props.noResultsLabel || $q.lang.table.noResults : props.noDataLabel || $q.lang.table.noData;
        const noData = slots["no-data"];
        const children = noData !== void 0 ? [noData({ message, icon: $q.iconSet.table.warning, filter: props.filter })] : [
          h(QIcon, {
            class: "q-table__bottom-nodata-icon",
            name: $q.iconSet.table.warning
          }),
          message
        ];
        return h("div", { class: bottomClass + " q-table__bottom--nodata" }, children);
      }
      const bottom = slots.bottom;
      if (bottom !== void 0) {
        return h("div", { class: bottomClass }, [bottom(marginalsScope.value)]);
      }
      const child = props.hideSelectedBanner !== true && hasSelectionMode.value === true && rowsSelectedNumber.value > 0 ? [
        h("div", { class: "q-table__control" }, [
          h("div", [
            (props.selectedRowsLabel || $q.lang.table.selectedRecords)(rowsSelectedNumber.value)
          ])
        ])
      ] : [];
      if (props.hidePagination !== true) {
        return h("div", {
          class: bottomClass + " justify-end"
        }, getPaginationDiv(child));
      }
      if (child.length !== 0) {
        return h("div", { class: bottomClass }, child);
      }
    }
    function onPagSelection(pag) {
      setPagination({
        page: 1,
        rowsPerPage: pag.value
      });
    }
    function getPaginationDiv(child) {
      let control;
      const { rowsPerPage } = computedPagination.value, paginationLabel = props.paginationLabel || $q.lang.table.pagination, paginationSlot = slots.pagination, hasOpts = props.rowsPerPageOptions.length > 1;
      child.push(
        h("div", { class: "q-table__separator col" })
      );
      if (hasOpts === true) {
        child.push(
          h("div", { class: "q-table__control" }, [
            h("span", { class: "q-table__bottom-item" }, [
              props.rowsPerPageLabel || $q.lang.table.recordsPerPage
            ]),
            h(QSelect, {
              class: "q-table__select inline q-table__bottom-item",
              color: props.color,
              modelValue: rowsPerPage,
              options: computedRowsPerPageOptions.value,
              displayValue: rowsPerPage === 0 ? $q.lang.table.allRows : rowsPerPage,
              dark: isDark.value,
              borderless: true,
              dense: true,
              optionsDense: true,
              optionsCover: true,
              "onUpdate:modelValue": onPagSelection
            })
          ])
        );
      }
      if (paginationSlot !== void 0) {
        control = paginationSlot(marginalsScope.value);
      } else {
        control = [
          h("span", rowsPerPage !== 0 ? { class: "q-table__bottom-item" } : {}, [
            rowsPerPage ? paginationLabel(firstRowIndex.value + 1, Math.min(lastRowIndex.value, computedRowsNumber.value), computedRowsNumber.value) : paginationLabel(1, filteredSortedRowsNumber.value, computedRowsNumber.value)
          ])
        ];
        if (rowsPerPage !== 0 && pagesNumber.value > 1) {
          const btnProps = {
            color: props.color,
            round: true,
            dense: true,
            flat: true
          };
          if (props.dense === true) {
            btnProps.size = "sm";
          }
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgFirst",
              ...btnProps,
              icon: navIcon.value[0],
              disable: isFirstPage.value,
              onClick: firstPage
            })
          );
          control.push(
            h(QBtn, {
              key: "pgPrev",
              ...btnProps,
              icon: navIcon.value[1],
              disable: isFirstPage.value,
              onClick: prevPage
            }),
            h(QBtn, {
              key: "pgNext",
              ...btnProps,
              icon: navIcon.value[2],
              disable: isLastPage.value,
              onClick: nextPage
            })
          );
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgLast",
              ...btnProps,
              icon: navIcon.value[3],
              disable: isLastPage.value,
              onClick: lastPage
            })
          );
        }
      }
      child.push(
        h("div", { class: "q-table__control" }, control)
      );
      return child;
    }
    function getGridHeader() {
      const child = props.gridHeader === true ? [
        h("table", { class: "q-table" }, [
          getTHead()
        ])
      ] : props.loading === true && slots.loading === void 0 ? getProgress() : void 0;
      return h("div", { class: "q-table__middle" }, child);
    }
    function getGridBody() {
      const item = slots.item !== void 0 ? slots.item : (scope) => {
        const child = scope.cols.map(
          (col) => h("div", { class: "q-table__grid-item-row" }, [
            h("div", { class: "q-table__grid-item-title" }, [col.label]),
            h("div", { class: "q-table__grid-item-value" }, [col.value])
          ])
        );
        if (hasSelectionMode.value === true) {
          const slot = slots["body-selection"];
          const content = slot !== void 0 ? slot(scope) : [
            h(QCheckbox, {
              modelValue: scope.selected,
              color: props.color,
              dark: isDark.value,
              dense: props.dense,
              "onUpdate:modelValue": (adding, evt) => {
                updateSelection([scope.key], [scope.row], adding, evt);
              }
            })
          ];
          child.unshift(
            h("div", { class: "q-table__grid-item-row" }, content),
            h(QSeparator, { dark: isDark.value })
          );
        }
        const data = {
          class: [
            "q-table__grid-item-card" + cardDefaultClass.value,
            props.cardClass
          ],
          style: props.cardStyle
        };
        if (props.onRowClick !== void 0 || props.onRowDblclick !== void 0) {
          data.class[0] += " cursor-pointer";
          if (props.onRowClick !== void 0) {
            data.onClick = (evt) => {
              emit("RowClick", evt, scope.row, scope.pageIndex);
            };
          }
          if (props.onRowDblclick !== void 0) {
            data.onDblclick = (evt) => {
              emit("RowDblclick", evt, scope.row, scope.pageIndex);
            };
          }
        }
        return h("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (scope.selected === true ? " q-table__grid-item--selected" : "")
        }, [
          h("div", data, child)
        ]);
      };
      return h("div", {
        class: [
          "q-table__grid-content row",
          props.cardContainerClass
        ],
        style: props.cardContainerStyle
      }, computedRows.value.map((row, pageIndex) => {
        return item(getBodyScope({
          key: getRowKey.value(row),
          row,
          pageIndex
        }));
      }));
    }
    Object.assign(vm.proxy, {
      requestServerInteraction,
      setPagination,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      isRowSelected,
      clearSelection,
      isRowExpanded,
      setExpanded,
      sort,
      resetVirtualScroll,
      scrollTo,
      getCellValue
    });
    injectMultipleProps(vm.proxy, {
      filteredSortedRows: () => filteredSortedRows.value,
      computedRows: () => computedRows.value,
      computedRowsNumber: () => computedRowsNumber.value
    });
    return () => {
      const child = [getTopDiv()];
      const data = { ref: rootRef, class: containerClass.value };
      if (props.grid === true) {
        child.push(getGridHeader());
      } else {
        Object.assign(data, {
          class: [data.class, props.cardClass],
          style: props.cardStyle
        });
      }
      child.push(
        getBody(),
        getBottomDiv()
      );
      if (props.loading === true && slots.loading !== void 0) {
        child.push(
          slots.loading()
        );
      }
      return h("div", data, child);
    };
  }
});
const _hoisted_1$3 = { class: "track-list-table row full-width q-px-none q-pt-lg" };
const _hoisted_2$2 = { class: "flex row items-center text-subtitle1 text-bold" };
const _hoisted_3$1 = { class: "underline-on-hover pointer-on-hover" };
const _sfc_main$3 = defineComponent({
  __name: "TrackListTable",
  props: {
    tracks: {}
  },
  setup(__props) {
    const $router = useRouter();
    const queueService = inject("queueService");
    const hoveringWhich = ref();
    const trackMenuOptionsCreator = (track, album) => new TrackMenuOptionsBuilder(track, album).addPlayNextOption().addAddToQueueOption().addSearchOnYoutubeOption().build();
    const pagination = {
      rowsPerPage: 0,
      descending: true
    };
    const columns = [
      {
        name: "index",
        required: true,
        label: "#",
        align: "center",
        field: (row) => row.index,
        format: (val) => `${val}`,
        style: "width: 24px",
        sortable: false
      },
      {
        name: "title",
        required: true,
        label: "TITLE",
        align: "left",
        field: (row) => {
          var _a;
          return (_a = row.name) == null ? void 0 : _a._default;
        },
        format: (val) => `${val}`,
        classes: "text-h4",
        sortable: false
      },
      {
        name: "original",
        required: false,
        label: "ORIGINAL",
        align: "left",
        field: (row) => row.original,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "duration",
        required: true,
        label: "DURATION",
        align: "right",
        field: (row) => row.duration,
        format: (val) => `${Duration.fromDurationString(val).toDurationString()}`,
        sortable: false
      }
    ];
    const props = __props;
    const goToOriginalTrackPage = (originalTrackId) => {
      $router.push({
        name: "OriginalTrack",
        params: { originalId: originalTrackId, page: 1 }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tracks.entries(), ([disc, tracks]) => {
          return openBlock(), createElementBlock("div", {
            key: disc.id,
            class: "col-12 q-pt-md q-px-md q-pb-lg"
          }, [
            createVNode(unref(QTable), {
              rows: tracks,
              class: "bg-transparent",
              columns,
              pagination,
              separator: "none",
              "row-key": "id",
              flat: "",
              "hide-bottom": "",
              "virtual-scroll": "",
              "hide-pagination": ""
            }, {
              header: withCtx((props2) => [
                createVNode(QTr, { props: props2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props2.cols, (col) => {
                      return openBlock(), createBlock(QTh, {
                        key: col.name,
                        props: props2,
                        class: "border-bottom-thin"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(col.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-index": withCtx((props2) => [
                createVNode(QTd, {
                  props: props2,
                  class: "q-pa-sm"
                }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      size: "13px",
                      onMouseover: ($event) => hoveringWhich.value = props2.key,
                      onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                      label: hoveringWhich.value !== props2.key ? props2.value : void 0,
                      icon: hoveringWhich.value === props2.key ? unref(outlinedPlayArrow) : void 0,
                      onClick: ($event) => {
                        var _a;
                        return (_a = unref(queueService)) == null ? void 0 : _a.addTrackById(props2.key, unref(QueueAddMode).PLAY_IMMEDIATELY);
                      }
                    }, null, 8, ["onMouseover", "label", "icon", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-title": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$2, [
                      createBaseVNode("div", _hoisted_3$1, toDisplayString(props2.value), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-original": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props2.value, (prop) => {
                      return openBlock(), createBlock(QChip, {
                        square: "",
                        key: prop.id,
                        clickable: "",
                        onClick: ($event) => goToOriginalTrackPage(prop.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(prop.title.en), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props2.value), 1)
                  ]),
                  _: 2
                }, 1032, ["props"]),
                createVNode(TrackMenu, {
                  options: trackMenuOptionsCreator(props2.row, disc)
                }, null, 8, ["options"])
              ]),
              _: 2
            }, 1032, ["rows"])
          ]);
        }), 128))
      ]);
    };
  }
});
var TrackListTable = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "TrackListTable.vue"]]);
class AssetUtils {
  static downloadAsset(asset) {
    const a = document.createElement("a");
    a.href = `${asset.url}?download=true`;
    a.target = "_blank";
    a.click();
  }
  static openAssetInNewTab(asset) {
    window.open(asset.url, "_blank");
  }
}
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = defineComponent({
  __name: "AssetPreviewDialog",
  props: {
    asset: {}
  },
  setup(__props) {
    const PREVIEWABLE_MIME_TYPES = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/x-icon",
      "text/plain",
      "text/html",
      "text/xml",
      "video/mp4",
      "video/webm",
      "video/mpeg",
      "audio/mpeg3",
      "audio/ogg",
      "audio/mp4",
      "audio/flac",
      "audio/midi"
    ];
    const isPreviewable = (asset) => {
      if (!asset.mime) {
        return false;
      }
      return PREVIEWABLE_MIME_TYPES.includes(asset.mime);
    };
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        position: "top",
        "backdrop-filter": "brightness(50%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "1200px", "max-width": "80vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Preview of " + toDisplayString(props.asset.name), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QBtn, {
                    flat: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(AssetUtils).downloadAsset(props.asset))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Download ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              isPreviewable(props.asset) ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                default: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.asset.url,
                    width: "100%",
                    height: "600"
                  }, null, 8, _hoisted_1$2)
                ]),
                _: 1
              })) : (openBlock(), createBlock(QCardSection, { key: 1 }, {
                default: withCtx(() => [
                  createTextVNode(" Preview not available for this asset. (Unsupported MIME type: " + toDisplayString(props.asset.mime) + ") ", 1)
                ]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var AssetPreviewDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "AssetPreviewDialog.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Album Assets", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-center" }, "No assets found", -1);
const _sfc_main$1 = defineComponent({
  __name: "AlbumAssetsViewerDialog",
  props: {
    album: {}
  },
  setup(__props) {
    const $q = useQuasar();
    const props = __props;
    const albumAssets = computed(() => {
      return props.album.otherFiles;
    });
    const previewAsset = (asset) => {
      $q.dialog({
        component: AssetPreviewDialog,
        componentProps: {
          asset
        }
      });
    };
    const tableColumns = [
      {
        name: "id",
        label: "Asset ID",
        align: "center",
        field: (row) => row.id
      },
      {
        name: "name",
        label: "Name",
        align: "left",
        field: (row) => row.name
      },
      {
        name: "size",
        label: "Size (MB)",
        align: "center",
        field: (row) => row.size,
        format: (val) => `${(val / 1024 / 1024).toFixed(2)}`
      },
      {
        name: "mime-type",
        label: "Content Type",
        align: "center",
        field: (row) => row.mime
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QDialog), {
        position: "top",
        "backdrop-filter": "brightness(50%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "1200px", "max-width": "80vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$1
                ]),
                _: 1
              }),
              albumAssets.value.length > 0 ? (openBlock(), createBlock(QCardSection, {
                key: 0,
                class: "q-pt-none"
              }, {
                default: withCtx(() => [
                  createVNode(QTable, {
                    rows: albumAssets.value,
                    columns: tableColumns,
                    class: "bg-transparent",
                    "row-key": "id",
                    flat: "",
                    "hide-bottom": ""
                  }, {
                    body: withCtx((props2) => [
                      createVNode(QTr, { props: props2 }, {
                        default: withCtx(() => [
                          createVNode(QTd, {
                            key: "id",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.id), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "name",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "size",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString((props2.row.size / 1024 / 1024).toFixed(2)), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "mime-type",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.mime), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QMenu, { "touch-position": "" }, {
                            default: withCtx(() => [
                              createVNode(QList, { style: { "min-width": "100px" } }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => previewAsset(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matPreview) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Preview")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => unref(AssetUtils).openAssetInNewTab(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matOpenInNew) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Open in new tab")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => unref(AssetUtils).downloadAsset(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matFileDownload) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Download")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 1
                  }, 8, ["rows"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(QCardSection, {
                key: 1,
                class: "q-pb-none"
              }, {
                default: withCtx(() => [
                  _hoisted_2$1
                ]),
                _: 1
              })),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    label: "Close"
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
var AlbumAssetsViewerDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AlbumAssetsViewerDialog.vue"]]);
var AlbumPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-15368368"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row col-all q-mt-lg album-page-body" };
const _hoisted_2 = { class: "col-12 q-pt-md" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Error", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1" }, "Failed to load album", -1));
const _hoisted_5 = { class: "text-caption" };
const _hoisted_6 = { class: "text-caption" };
const _sfc_main = defineComponent({
  __name: "AlbumPage",
  setup(__props) {
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    const $q = useQuasar();
    const $router = useRouter();
    const routeParams = {
      albumId: computed(() => $router.currentRoute.value.params.albumId)
    };
    const controller = useLoadableController();
    const queueService = inject("queueService");
    const initializeViewModelSingleDisc = (master) => {
      const tracks = /* @__PURE__ */ new Map();
      if (master.tracks) {
        master.tracks.sort((a, b) => a.index - b.index);
        tracks.set(master, master.tracks);
      }
      return {
        masterAlbum: master,
        discs: [],
        tracks
      };
    };
    const initializeViewModelMultiDisc = (master, discs) => {
      const tracks = /* @__PURE__ */ new Map();
      if (master.tracks) {
        tracks.set(master, master.tracks);
      }
      discs.forEach((disc) => {
        if (disc.tracks) {
          disc.tracks.sort((a, b) => a.index - b.index);
          tracks.set(disc, disc.tracks);
        }
      });
      return {
        masterAlbum: master,
        discs,
        tracks
      };
    };
    const initializeViewModel = (master, discs) => {
      if (discs.length > 0) {
        return initializeViewModelMultiDisc(master, discs);
      } else {
        return initializeViewModelSingleDisc(master);
      }
    };
    const loadMultiDiscAlbum = async (masterAlbumId) => {
      var _a;
      const albumApi = new AlbumApi(
        apiConfigProvider.getApiConfigurationWithAuth()
      );
      const masterAlbum = await albumApi.getAlbum({
        id: masterAlbumId
      });
      const discs = await Promise.all(
        ((_a = masterAlbum.childAlbums) == null ? void 0 : _a.map(
          (childAlbum) => albumApi.getAlbum({
            id: childAlbum.id
          })
        )) || []
      );
      return {
        master: masterAlbum,
        discs
      };
    };
    const load = async (albumId) => {
      var _a;
      controller.setLoading();
      try {
        const albumApi = new AlbumApi(
          apiConfigProvider.getApiConfigurationWithAuth()
        );
        const album = await albumApi.getAlbum({
          id: albumId
        });
        const isMultiDisc = album.parentAlbum || (((_a = album == null ? void 0 : album.childAlbums) == null ? void 0 : _a.length) || 0) > 0;
        let viewModel;
        if (isMultiDisc) {
          const isMaster = !album.parentAlbum && album.discNumber === 0;
          if (!isMaster) {
            $router.replace({
              name: "Album",
              params: { albumId: album.parentAlbum.id }
            });
          }
          const masterAlbumId = album.id;
          const { master, discs } = await loadMultiDiscAlbum(masterAlbumId);
          viewModel = initializeViewModel(master, discs);
        } else {
          viewModel = initializeViewModel(album, []);
        }
        controller.setSuccess(viewModel);
      } catch (error) {
        controller.setError(error);
        throw error;
      }
    };
    const showAlbumAssetDialog = (album) => {
      $q.dialog(
        {
          component: AlbumAssetsViewerDialog,
          componentProps: {
            album
          }
        }
      );
    };
    const playAlbum = (viewModel, addMode) => {
      const tracks = Array.from(viewModel.tracks.values()).reduce((acc, val) => acc.concat(val), []);
      const trackIds = tracks.map((track) => track.id);
      queueService == null ? void 0 : queueService.addTracksByIds(trackIds, addMode);
    };
    onMounted(() => {
      load(routeParams.albumId.value);
      watch(routeParams.albumId, async (albumId) => {
        await load(albumId);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(LoadableElement, { "state-controller": unref(controller) }, {
            loading: withCtx(() => [
              createVNode(QSpinnerGears, { size: "100px" })
            ]),
            default: withCtx(({ data }) => [
              createVNode(AlbumInfoSection, {
                album: data.masterAlbum
              }, null, 8, ["album"]),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, {
                    fab: "",
                    round: "",
                    class: "play-btn q-mx-md",
                    icon: unref(outlinedPlayArrow),
                    onClick: ($event) => playAlbum(data, unref(QueueAddMode).PLAY_IMMEDIATELY)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          createTextVNode("Play")
                        ]),
                        _: 1
                      }),
                      createVNode(QMenu, {
                        "touch-position": "",
                        "context-menu": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "min-width": "150px" } }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => playAlbum(data, unref(QueueAddMode).APPEND_NEXT)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Play Next")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => playAlbum(data, unref(QueueAddMode).APPEND_LAST)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Add to Queue")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["icon", "onClick"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "like-btn q-mx-md",
                    icon: unref(outlinedFavoriteBorder)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          createTextVNode("Save")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedMoreHoriz)
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, {
                        fit: "",
                        anchor: "center middle",
                        self: "top middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, null, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => showAlbumAssetDialog(data.masterAlbum)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, {
                                        icon: unref(outlinedDescription),
                                        size: "lg"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("View Other Assets")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, {
                                        icon: unref(outlinedEditNote),
                                        size: "lg"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Attribute Editor")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["icon"])
                ]),
                createVNode(TrackListTable, {
                  tracks: data.tracks
                }, null, 8, ["tracks"])
              ])
            ]),
            error: withCtx(({ error }) => [
              createVNode(unref(QCard), {
                class: "q-ma-md",
                style: { "max-width": "400px" }
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_3,
                      _hoisted_4,
                      createBaseVNode("div", _hoisted_5, toDisplayString(error == null ? void 0 : error.message), 1),
                      createBaseVNode("div", _hoisted_6, toDisplayString(error == null ? void 0 : error.stack), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QSeparator, { inset: "" }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(error == null ? void 0 : error.stack), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["state-controller"])
        ]),
        _: 1
      });
    };
  }
});
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15368368"], ["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmJlNGRmZjc1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZnVsbHNjcmVlbi91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUuc29ydC9zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXBhZ2luYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1leHBhbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUYWJsZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9UcmFja0xpc3RUYWJsZS52dWUiLCIuLi8uLi8uLi9zcmMvdXRpbHMvQXNzZXRVdGlscy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvQXNzZXRQcmV2aWV3RGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0FsYnVtUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1weC1ub25lIHEtcHQtbGdcIj5cbiAgICA8RGF0YVNvdXJjZUJ1dHRvbiA6ZGF0YVNvdXJjZXM9XCJ2aWV3TW9kZWwuZGF0YVNvdXJjZXNcIj48L0RhdGFTb3VyY2VCdXR0b24+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjb2wtNCBxLXB4LW1kXCJcbiAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiXG4gICAgPlxuICAgICAgPHEtaW1nXG4gICAgICAgIDpzcmM9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICAgIHJhdGlvPVwiMVwiXG4gICAgICAgIHYtaWY9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICA+XG4gICAgICA8L3EtaW1nPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPkFsYnVtPC9kaXY+XG4gICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPlxuICAgICAgICAgICAge3sgdmlld01vZGVsLmFsYnVtTmFtZSB9fVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJhcnRpc3RzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZXRhZGF0YS1lbnRyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXIgYXJ0aXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImdvdG9DaXJjbGUoYXJ0aXN0SWQgYXMgc3RyaW5nKVwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoYXJ0aXN0TmFtZSwgYXJ0aXN0SWQpIGluIHZpZXdNb2RlbC5hbGJ1bUFydGlzdHNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJhcnRpc3RJZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBhcnRpc3ROYW1lIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3JcbiAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgc3BhY2VkXG4gICAgICAgICAgICA+PC9xLXNlcGFyYXRvcj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cInJlbGVhc2UtZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWV0YWRhdGEtZW50cnlcIlxuICAgICAgICAgICAgICB2LWlmPVwidmlld01vZGVsLnJlbGVhc2VEYXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgICAge3sgdmlld01vZGVsLnJlbGVhc2VEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFsYnVtUmVhZER0byB9IGZyb20gJ2JhY2tlbmQtYXBpLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7XG4gIG91dGxpbmVkSW5mbyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IERhdGFTb3VyY2VCdXR0b24gZnJvbSAnLi4vRGF0YVNvdXJjZUJ0bi9EYXRhU291cmNlQnV0dG9uLnZ1ZSc7XG5cbmludGVyZmFjZSBBbGJ1bUluZm9TZWN0aW9uUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCB7XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xuICAvLyBBcnRpc3QgaWQgLT4gYXJ0aXN0IG5hbWUsIGlkIG5lZWRlZCBmb3IgbmF2aWdhdGlvblxuICBhbGJ1bUFydGlzdHM6IHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYWxidW1Db3ZlclVybDogc3RyaW5nIHwgbnVsbDtcblxuICByZWxlYXNlRGF0ZTogRGF0ZSB8IG51bGw7XG5cbiAgLy8gRGF0YSBwcm92aWRlcnNcbiAgZGF0YVNvdXJjZXM6IHN0cmluZ1tdO1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtSW5mb1NlY3Rpb25Qcm9wcz4oKTtcbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoKTogQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IGFsYnVtQXJ0aXN0cyA9IHByb3BzLmFsYnVtLmFsYnVtQXJ0aXN0Py5yZWR1Y2UoKGFjYywgYXJ0aXN0KSA9PiB7XG4gICAgYWNjW2FydGlzdC5pZCFdID0gYXJ0aXN0Lm5hbWUhO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfSk7XG5cbiAgY29uc29sZS5sb2coJ2FsYnVtQXJ0aXN0cycsIGFsYnVtQXJ0aXN0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGJ1bU5hbWU6IHByb3BzLmFsYnVtLm5hbWU/Ll9kZWZhdWx0IHx8ICcnLFxuICAgIGFsYnVtQXJ0aXN0cyxcbiAgICBhbGJ1bUNvdmVyVXJsOiBwcm9wcy5hbGJ1bS50aHVtYm5haWw/LmxhcmdlPy51cmwgfHwgbnVsbCxcbiAgICByZWxlYXNlRGF0ZTogcHJvcHMuYWxidW0ucmVsZWFzZURhdGUgfHwgbnVsbCxcbiAgICBkYXRhU291cmNlczogcHJvcHMuYWxidW0uZGF0YVNvdXJjZSB8fCBbXSxcbiAgfSBhcyBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsO1xufTtcblxuY29uc3Qgdmlld01vZGVsOiBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbCgpO1xuXG5jb25zdCBnb3RvQ2lyY2xlID0gKGNpcmNsZUlkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICBwYXJhbXM6IHsgY2lyY2xlSWQsIHBhZ2U6ICcxJyB9LFxuICB9KTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcsICc7XG59XG5cbi5xLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGgnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3Qgb25DbGljayA9IGV2dCA9PiB7IGVtaXQoJ2NsaWNrJywgZXZ0KSB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ3RoJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycsXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbCwgY2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sc01hcFsgbmFtZSBdXG4gICAgICAgIGlmIChjb2wgPT09IHZvaWQgMCkgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpXG4gICAgICAgICAgb25DbGljayhldnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRyJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cidcbiAgICAgICsgKHByb3BzLnByb3BzID09PSB2b2lkIDAgfHwgcHJvcHMucHJvcHMuaGVhZGVyID09PSB0cnVlID8gJycgOiAnICcgKyBwcm9wcy5wcm9wcy5fX3RyQ2xhc3MpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRyLS1uby1ob3ZlcicgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndHInLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHMucHJvcHNcblxuICAgICAgcmV0dXJuIGgoJ3RkJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArIGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0UHJvcFxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXNpemUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogNixcbiAgbGc6IDEwLFxuICB4bDogMTRcbn1cblxuZnVuY3Rpb24gd2lkdGggKHZhbCwgcmV2ZXJzZSwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHJldmVyc2UgPT09IHRydWVcbiAgICAgID8gYHRyYW5zbGF0ZVgoJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnLScgOiAnJyB9MTAwJSkgc2NhbGUzZCgkeyAtdmFsIH0sMSwxKWBcbiAgICAgIDogYHNjYWxlM2QoJHsgdmFsIH0sMSwxKWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpbmVhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgYnVmZmVyOiBOdW1iZXIsXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgc3RyaXBlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAyMTAwXG4gICAgfSxcblxuICAgIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBtb3Rpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlKVxuICAgIGNvbnN0IHdpZHRoUmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnJldmVyc2UgIT09IHByb3BzLnF1ZXJ5KVxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLihzaXplU3R5bGUudmFsdWUgIT09IG51bGwgPyBzaXplU3R5bGUudmFsdWUgOiB7fSksXG4gICAgICAnLS1xLWxpbmVhci1wcm9ncmVzcy1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzcydcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUgPyAnIHEtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcm91bmRlZC1ib3JkZXJzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChwcm9wcy5idWZmZXIgIT09IHZvaWQgMCA/IHByb3BzLmJ1ZmZlciA6IDEsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdWZmaXggPSBjb21wdXRlZCgoKSA9PiBgd2l0aCR7IHByb3BzLmluc3RhbnRGZWVkYmFjayA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYClcblxuICAgIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX190cmFjayBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9YFxuICAgICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbW9kZWxTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiBwcm9wcy52YWx1ZSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgbW9kZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyBtb3Rpb24udmFsdWUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYFxuICAgIClcblxuICAgIGNvbnN0IHN0cmlwZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHsgd2lkdGg6IGAkeyBwcm9wcy52YWx1ZSAqIDEwMCB9JWAgfSkpXG4gICAgY29uc3Qgc3RyaXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUgYWJzb2x1dGUtJHsgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBtb2RlbENsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBtb2RlbFN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLnN0cmlwZSA9PT0gdHJ1ZSAmJiBtb3Rpb24udmFsdWUgPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc3RyaXBlQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHN0cmlwZVN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiAxLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWVcbiAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgIDogcHJvcHMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY2hpbGQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3BsdWdpbnMvcHJpdmF0ZS5oaXN0b3J5L0hpc3RvcnkuanMnXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5cbmxldCBjb3VudGVyID0gMFxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlblByb3BzID0ge1xuICBmdWxsc2NyZWVuOiBCb29sZWFuLFxuICBub1JvdXRlRnVsbHNjcmVlbkV4aXQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5FbWl0cyA9IFsgJ3VwZGF0ZTpmdWxsc2NyZWVuJywgJ2Z1bGxzY3JlZW4nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSB2bVxuXG4gIGxldCBoaXN0b3J5RW50cnksIGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBjb250YWluZXJcbiAgY29uc3QgaW5GdWxsc2NyZWVuID0gcmVmKGZhbHNlKVxuXG4gIHZtSGFzUm91dGVyKHZtKSA9PT0gdHJ1ZSAmJiB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICBwcm9wcy5ub1JvdXRlRnVsbHNjcmVlbkV4aXQgIT09IHRydWUgJiYgZXhpdEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHYpIHtcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfSlcblxuICB3YXRjaChpbkZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdilcbiAgICBlbWl0KCdmdWxsc2NyZWVuJywgdilcbiAgfSlcblxuICBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBleGl0RnVsbHNjcmVlbigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RnVsbHNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSB0cnVlXG4gICAgY29udGFpbmVyID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBwcm94eS4kZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm94eS4kZWwpXG5cbiAgICBjb3VudGVyKytcbiAgICBpZiAoY291bnRlciA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuICAgIH1cblxuICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGhhbmRsZXI6IGV4aXRGdWxsc2NyZWVuXG4gICAgfVxuICAgIEhpc3RvcnkuYWRkKGhpc3RvcnlFbnRyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB0cnVlKSByZXR1cm5cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnNvcnQvc29ydC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc0RhdGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVNvcnRQcm9wcyA9IHtcbiAgc29ydE1ldGhvZDogRnVuY3Rpb24sXG4gIGJpbmFyeVN0YXRlU29ydDogQm9vbGVhbixcbiAgY29sdW1uU29ydE9yZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID09PSAnYWQnIHx8IHYgPT09ICdkYScsXG4gICAgZGVmYXVsdDogJ2FkJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVNvcnQgKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pIHtcbiAgY29uc3QgY29sdW1uVG9Tb3J0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5IH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBzb3J0QnlcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gc29ydEJ5KSB8fCBudWxsXG4gICAgICA6IG51bGxcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZFNvcnRNZXRob2QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc29ydE1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnNvcnRNZXRob2RcbiAgICAgIDogKGRhdGEsIHNvcnRCeSwgZGVzY2VuZGluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSlcbiAgICAgICAgICBpZiAoY29sID09PSB2b2lkIDAgfHwgY29sLmZpZWxkID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGRpciA9IGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEsXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgID8gdiA9PiBjb2wuZmllbGQodilcbiAgICAgICAgICAgICAgOiB2ID0+IHZbIGNvbC5maWVsZCBdXG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgQSA9IHZhbChhKSxcbiAgICAgICAgICAgICAgQiA9IHZhbChiKVxuXG4gICAgICAgICAgICBpZiAoY29sLnJhd1NvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnJhd1NvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBID09PSBudWxsIHx8IEEgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gLTEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCID09PSBudWxsIHx8IEIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5zb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgLy8gZ2V0cyBjYWxsZWQgd2l0aG91dCByb3dzIHRoYXQgaGF2ZSBudWxsL3VuZGVmaW5lZCBhcyB2YWx1ZVxuICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGFib3ZlIHR3byBzdGF0ZW1lbnRzXG4gICAgICAgICAgICAgIHJldHVybiBjb2wuc29ydChBLCBCLCBhLCBiKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKEEpID09PSB0cnVlICYmIGlzTnVtYmVyKEIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEYXRlKEEpID09PSB0cnVlICYmIGlzRGF0ZShCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc29ydERhdGUoQSwgQikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgQSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBCID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChBIC0gQikgKiBkaXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgWyBBLCBCIF0gPSBbIEEsIEIgXS5tYXAocyA9PiAocyArICcnKS50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHJldHVybiBBIDwgQlxuICAgICAgICAgICAgICA/IC0xICogZGlyXG4gICAgICAgICAgICAgIDogKEEgPT09IEIgPyAwIDogZGlyKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgKSlcblxuICBmdW5jdGlvbiBzb3J0IChjb2wgLyogU3RyaW5nKGNvbCBuYW1lKSBvciBPYmplY3QoY29sIGRlZmluaXRpb24pICovKSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IHByb3BzLmNvbHVtblNvcnRPcmRlclxuXG4gICAgaWYgKGlzT2JqZWN0KGNvbCkgPT09IHRydWUpIHtcbiAgICAgIGlmIChjb2wuc29ydE9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IGNvbC5zb3J0T3JkZXJcbiAgICAgIH1cblxuICAgICAgY29sID0gY29sLm5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBkZWYgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBjb2wpXG4gICAgICBpZiAoZGVmICE9PSB2b2lkIDAgJiYgZGVmLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWYuc29ydE9yZGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGlmIChzb3J0QnkgIT09IGNvbCkge1xuICAgICAgc29ydEJ5ID0gY29sXG4gICAgICBkZXNjZW5kaW5nID0gc29ydE9yZGVyID09PSAnZGEnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmJpbmFyeVN0YXRlU29ydCA9PT0gdHJ1ZSkge1xuICAgICAgZGVzY2VuZGluZyA9ICFkZXNjZW5kaW5nXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlc2NlbmRpbmcgPT09IHRydWUpIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09ICdhZCcpIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHsgLy8gYXNjZW5kaW5nXG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFBhZ2luYXRpb24oeyBzb3J0QnksIGRlc2NlbmRpbmcsIHBhZ2U6IDEgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29sdW1uVG9Tb3J0LFxuICAgIGNvbXB1dGVkU29ydE1ldGhvZCxcbiAgICBzb3J0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2sgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUZpbHRlclByb3BzID0ge1xuICBmaWx0ZXI6IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgZmlsdGVyTWV0aG9kOiBGdW5jdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVGaWx0ZXIgKHByb3BzLCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbXB1dGVkRmlsdGVyTWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmZpbHRlck1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLmZpbHRlck1ldGhvZFxuICAgICAgOiAocm93cywgdGVybXMsIGNvbHMsIGNlbGxWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyVGVybXMgPSB0ZXJtcyA/IHRlcm1zLnRvTG93ZXJDYXNlKCkgOiAnJ1xuICAgICAgICAgIHJldHVybiByb3dzLmZpbHRlcihcbiAgICAgICAgICAgIHJvdyA9PiBjb2xzLnNvbWUoY29sID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gY2VsbFZhbHVlKGNvbCwgcm93KSArICcnXG4gICAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gKHZhbCA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsID09PSAnbnVsbCcpID8gJycgOiB2YWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihsb3dlclRlcm1zKSAhPT0gLTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICkpXG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gcHJvcHMuZmlsdGVyLFxuICAgICgpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgcmV0dXJuIHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBzYW1lUGFnaW5hdGlvbiAob2xkUGFnLCBuZXdQYWcpIHtcbiAgZm9yIChjb25zdCBwcm9wIGluIG5ld1BhZykge1xuICAgIGlmIChuZXdQYWdbIHByb3AgXSAhPT0gb2xkUGFnWyBwcm9wIF0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaXhQYWdpbmF0aW9uIChwKSB7XG4gIGlmIChwLnBhZ2UgPCAxKSB7XG4gICAgcC5wYWdlID0gMVxuICB9XG4gIGlmIChwLnJvd3NQZXJQYWdlICE9PSB2b2lkIDAgJiYgcC5yb3dzUGVyUGFnZSA8IDEpIHtcbiAgICBwLnJvd3NQZXJQYWdlID0gMFxuICB9XG4gIHJldHVybiBwXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyA9IHtcbiAgcGFnaW5hdGlvbjogT2JqZWN0LFxuICByb3dzUGVyUGFnZU9wdGlvbnM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiAoKSA9PiBbIDUsIDcsIDEwLCAxNSwgMjAsIDI1LCA1MCwgMCBdXG4gIH0sXG5cbiAgJ29uVXBkYXRlOnBhZ2luYXRpb24nOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSAodm0sIGdldENlbGxWYWx1ZSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0IH0gPSB2bVxuXG4gIGNvbnN0IGlubmVyUGFnaW5hdGlvbiA9IHJlZihcbiAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNvcnRCeTogbnVsbCxcbiAgICAgIGRlc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogMSxcbiAgICAgIHJvd3NQZXJQYWdlOiBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMubGVuZ3RoICE9PSAwXG4gICAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zWyAwIF1cbiAgICAgICAgOiA1XG4gICAgfSwgcHJvcHMucGFnaW5hdGlvbilcbiAgKVxuXG4gIGNvbnN0IGNvbXB1dGVkUGFnaW5hdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwYWcgPSBwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgPyB7IC4uLmlubmVyUGFnaW5hdGlvbi52YWx1ZSwgLi4ucHJvcHMucGFnaW5hdGlvbiB9XG4gICAgICA6IGlubmVyUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgcmV0dXJuIGZpeFBhZ2luYXRpb24ocGFnKVxuICB9KVxuXG4gIGNvbnN0IGlzU2VydmVyU2lkZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyICE9PSB2b2lkIDApXG5cbiAgZnVuY3Rpb24gc2VuZFNlcnZlclJlcXVlc3QgKHBhZ2luYXRpb24pIHtcbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24oe1xuICAgICAgcGFnaW5hdGlvbixcbiAgICAgIGZpbHRlcjogcHJvcHMuZmlsdGVyXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbiAocHJvcCA9IHt9KSB7XG4gICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgZW1pdCgncmVxdWVzdCcsIHtcbiAgICAgICAgcGFnaW5hdGlvbjogcHJvcC5wYWdpbmF0aW9uIHx8IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgZmlsdGVyOiBwcm9wLmZpbHRlciB8fCBwcm9wcy5maWx0ZXIsXG4gICAgICAgIGdldENlbGxWYWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFnaW5hdGlvbiAodmFsLCBmb3JjZVNlcnZlclJlcXVlc3QpIHtcbiAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0gZml4UGFnaW5hdGlvbih7XG4gICAgICAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAuLi52YWxcbiAgICB9KVxuXG4gICAgaWYgKHNhbWVQYWdpbmF0aW9uKGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSwgbmV3UGFnaW5hdGlvbikgPT09IHRydWUpIHtcbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgJiYgZm9yY2VTZXJ2ZXJSZXF1ZXN0ID09PSB0cnVlKSB7XG4gICAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMucGFnaW5hdGlvbiAhPT0gdm9pZCAwXG4gICAgICAmJiBwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMFxuICAgICkge1xuICAgICAgZW1pdCgndXBkYXRlOnBhZ2luYXRpb24nLCBuZXdQYWdpbmF0aW9uKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbi52YWx1ZSA9IG5ld1BhZ2luYXRpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICBjb21wdXRlZFBhZ2luYXRpb24sXG4gICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgIHNldFBhZ2luYXRpb25cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uICh2bSwgaW5uZXJQYWdpbmF0aW9uLCBjb21wdXRlZFBhZ2luYXRpb24sIGlzU2VydmVyU2lkZSwgc2V0UGFnaW5hdGlvbiwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyKSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgY29uc3QgY29tcHV0ZWRSb3dzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciB8fCAwXG4gICAgICA6IGZpbHRlcmVkU29ydGVkUm93c051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGZpcnN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIChwYWdlIC0gMSkgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGxhc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gcGFnZSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgaXNGaXJzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA9PT0gMSlcblxuICBjb25zdCBwYWdlc051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgPT09IDBcbiAgICAgID8gMVxuICAgICAgOiBNYXRoLm1heChcbiAgICAgICAgMSxcbiAgICAgICAgTWF0aC5jZWlsKGNvbXB1dGVkUm93c051bWJlci52YWx1ZSAvIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgIClcbiAgKSlcblxuICBjb25zdCBpc0xhc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGxhc3RSb3dJbmRleC52YWx1ZSA9PT0gMFxuICAgICAgPyB0cnVlXG4gICAgICA6IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID49IHBhZ2VzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgb3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5pbmNsdWRlcyhpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1xuICAgICAgOiBbIGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSBdLmNvbmNhdChwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMpXG5cbiAgICByZXR1cm4gb3B0cy5tYXAoY291bnQgPT4gKHtcbiAgICAgIGxhYmVsOiBjb3VudCA9PT0gMCA/ICRxLmxhbmcudGFibGUuYWxsUm93cyA6ICcnICsgY291bnQsXG4gICAgICB2YWx1ZTogY291bnRcbiAgICB9KSlcbiAgfSlcblxuICB3YXRjaChwYWdlc051bWJlciwgKGxhc3RQYWdlLCBvbGRMYXN0UGFnZSkgPT4ge1xuICAgIGlmIChsYXN0UGFnZSA9PT0gb2xkTGFzdFBhZ2UpIHJldHVyblxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoICE9PSAwICYmIGNvbXB1dGVkUm93cy52YWx1ZS5ldmVyeShcbiAgICAgIHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWVcbiAgICApXG4gIClcblxuICBjb25zdCBzb21lUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGxSb3dzU2VsZWN0ZWQudmFsdWUgIT09IHRydWVcbiAgICAmJiBjb21wdXRlZFJvd3MudmFsdWUuc29tZShyb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlKVxuICApXG5cbiAgY29uc3Qgcm93c1NlbGVjdGVkTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQubGVuZ3RoKVxuXG4gIGZ1bmN0aW9uIGlzUm93U2VsZWN0ZWQgKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RlZEtleXMudmFsdWVbIGtleSBdID09PSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoKSB7XG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgW10pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKGtleXMsIHJvd3MsIGFkZGVkLCBldnQpIHtcbiAgICBlbWl0KCdzZWxlY3Rpb24nLCB7IHJvd3MsIGFkZGVkLCBrZXlzLCBldnQgfSlcblxuICAgIGNvbnN0IHBheWxvYWQgPSBzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgID8gKGFkZGVkID09PSB0cnVlID8gcm93cyA6IFtdKVxuICAgICAgOiAoXG4gICAgICAgICAgYWRkZWQgPT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuc2VsZWN0ZWQuY29uY2F0KHJvd3MpXG4gICAgICAgICAgICA6IHByb3BzLnNlbGVjdGVkLmZpbHRlcihcbiAgICAgICAgICAgICAgcm93ID0+IGtleXMuaW5jbHVkZXMoZ2V0Um93S2V5LnZhbHVlKHJvdykpID09PSBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBwYXlsb2FkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICBpc1Jvd1NlbGVjdGVkLFxuICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgIHVwZGF0ZVNlbGVjdGlvblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRWYWwgKHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgPyB2YWwuc2xpY2UoKVxuICAgIDogW11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kUHJvcHMgPSB7XG4gIGV4cGFuZGVkOiBBcnJheSAvLyB2LW1vZGVsOmV4cGFuZGVkXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzID0gWyAndXBkYXRlOmV4cGFuZGVkJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd0V4cGFuZCAocHJvcHMsIGVtaXQpIHtcbiAgY29uc3QgaW5uZXJFeHBhbmRlZCA9IHJlZihnZXRWYWwocHJvcHMuZXhwYW5kZWQpKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmV4cGFuZGVkLCB2YWwgPT4ge1xuICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSBnZXRWYWwodmFsKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGlzUm93RXhwYW5kZWQgKGtleSkge1xuICAgIHJldHVybiBpbm5lckV4cGFuZGVkLnZhbHVlLmluY2x1ZGVzKGtleSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEV4cGFuZGVkICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZXhwYW5kZWQgIT09IHZvaWQgMCkge1xuICAgICAgZW1pdCgndXBkYXRlOmV4cGFuZGVkJywgdmFsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFeHBhbmRlZCAoa2V5LCBhZGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbm5lckV4cGFuZGVkLnZhbHVlLnNsaWNlKClcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleE9mKGtleSlcblxuICAgIGlmIChhZGQgPT09IHRydWUpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goa2V5KVxuICAgICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFyZ2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzUm93RXhwYW5kZWQsXG4gICAgc2V0RXhwYW5kZWQsXG4gICAgdXBkYXRlRXhwYW5kZWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlQ29sdW1uczogQXJyYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uIChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKSB7XG4gIGNvbnN0IGNvbExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbHVtbnMgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbHVtbnNcbiAgICB9XG5cbiAgICAvLyB3ZSBpbmZlciBjb2x1bW5zIGZyb20gZmlyc3Qgcm93XG4gICAgY29uc3Qgcm93ID0gcHJvcHMucm93c1sgMCBdXG5cbiAgICByZXR1cm4gcm93ICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmtleXMocm93KS5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgYWxpZ246IGlzTnVtYmVyKHJvd1sgbmFtZSBdKSA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICAgIDogW11cbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgY29uc3QgY29scyA9IHByb3BzLnZpc2libGVDb2x1bW5zICE9PSB2b2lkIDBcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maWx0ZXIoY29sID0+IGNvbC5yZXF1aXJlZCA9PT0gdHJ1ZSB8fCBwcm9wcy52aXNpYmxlQ29sdW1ucy5pbmNsdWRlcyhjb2wubmFtZSkgPT09IHRydWUpXG4gICAgICA6IGNvbExpc3QudmFsdWVcblxuICAgIHJldHVybiBjb2xzLm1hcChjb2wgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBjb2wuYWxpZ24gfHwgJ3JpZ2h0J1xuICAgICAgY29uc3QgYWxpZ25DbGFzcyA9IGB0ZXh0LSR7IGFsaWduIH1gXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbCxcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIF9faWNvbkNsYXNzOiBgcS10YWJsZV9fc29ydC1pY29uIHEtdGFibGVfX3NvcnQtaWNvbi0tJHsgYWxpZ24gfWAsXG4gICAgICAgIF9fdGhDbGFzczogYWxpZ25DbGFzc1xuICAgICAgICAgICsgKGNvbC5oZWFkZXJDbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBjb2wuaGVhZGVyQ2xhc3NlcyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSA/ICcgc29ydGFibGUnIDogJycpXG4gICAgICAgICAgKyAoY29sLm5hbWUgPT09IHNvcnRCeSA/IGAgc29ydGVkICR7IGRlc2NlbmRpbmcgPT09IHRydWUgPyAnc29ydC1kZXNjJyA6ICcnIH1gIDogJycpLFxuXG4gICAgICAgIF9fdGRTdHlsZTogY29sLnN0eWxlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5zdHlsZSAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gY29sLnN0eWxlXG4gICAgICAgICAgICAgICAgOiBjb2wuc3R5bGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IG51bGwsXG5cbiAgICAgICAgX190ZENsYXNzOiBjb2wuY2xhc3NlcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuY2xhc3NlcyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzXG4gICAgICAgICAgICAgICAgOiByb3cgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzKHJvdylcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IGFsaWduQ2xhc3NcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IHt9XG4gICAgY29tcHV0ZWRDb2xzLnZhbHVlLmZvckVhY2goY29sID0+IHtcbiAgICAgIG5hbWVzWyBjb2wubmFtZSBdID0gY29sXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXNcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNwYW4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnRhYmxlQ29sc3BhblxuICAgICAgOiBjb21wdXRlZENvbHMudmFsdWUubGVuZ3RoICsgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgPyAxIDogMClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGNvbExpc3QsXG4gICAgY29tcHV0ZWRDb2xzLFxuICAgIGNvbXB1dGVkQ29sc01hcCxcbiAgICBjb21wdXRlZENvbHNwYW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFUaCBmcm9tICcuL1FUaC5qcydcblxuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRVmlydHVhbFNjcm9sbCBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcydcbmltcG9ydCBRU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9RU2VsZWN0LmpzJ1xuaW1wb3J0IFFMaW5lYXJQcm9ncmVzcyBmcm9tICcuLi9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzJ1xuaW1wb3J0IFFDaGVja2JveCBmcm9tICcuLi9jaGVja2JveC9RQ2hlY2tib3guanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcblxuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4vZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IGNvbW1vblZpcnRTY3JvbGxQcm9wc0xpc3QgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlRnVsbHNjcmVlbiwgeyB1c2VGdWxsc2NyZWVuUHJvcHMsIHVzZUZ1bGxzY3JlZW5FbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZ1bGxzY3JlZW4vdXNlLWZ1bGxzY3JlZW4uanMnXG5cbmltcG9ydCB7IHVzZVRhYmxlU29ydCwgdXNlVGFibGVTb3J0UHJvcHMgfSBmcm9tICcuL3RhYmxlLXNvcnQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUZpbHRlciwgdXNlVGFibGVGaWx0ZXJQcm9wcyB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUsIHVzZVRhYmxlUGFnaW5hdGlvbiwgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLXBhZ2luYXRpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd1NlbGVjdGlvbiwgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcywgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LXNlbGVjdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93RXhwYW5kLCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzLCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctZXhwYW5kLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24sIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMnXG5cbmltcG9ydCB7IGluamVjdFByb3AsIGluamVjdE11bHRpcGxlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmluamVjdC1vYmotcHJvcC9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IGJvdHRvbUNsYXNzID0gJ3EtdGFibGVfX2JvdHRvbSByb3cgaXRlbXMtY2VudGVyJ1xuXG5jb25zdCB2aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wcyA9IHt9XG5jb21tb25WaXJ0U2Nyb2xsUHJvcHNMaXN0LmZvckVhY2gocCA9PiB7IHZpcnRTY3JvbGxQYXNzdGhyb3VnaFByb3BzWyBwIF0gPSB7fSB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvd0tleToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG4gICAgICBkZWZhdWx0OiAnaWQnXG4gICAgfSxcblxuICAgIGNvbHVtbnM6IEFycmF5LFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICBpY29uRmlyc3RQYWdlOiBTdHJpbmcsXG4gICAgaWNvblByZXZQYWdlOiBTdHJpbmcsXG4gICAgaWNvbk5leHRQYWdlOiBTdHJpbmcsXG4gICAgaWNvbkxhc3RQYWdlOiBTdHJpbmcsXG5cbiAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgaGlkZUhlYWRlcjogQm9vbGVhbixcblxuICAgIGdyaWQ6IEJvb2xlYW4sXG4gICAgZ3JpZEhlYWRlcjogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICB3cmFwQ2VsbHM6IEJvb2xlYW4sXG5cbiAgICB2aXJ0dWFsU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZpcnR1YWxTY3JvbGxUYXJnZXQ6IHt9LFxuICAgIC4uLnZpcnRTY3JvbGxQYXNzdGhyb3VnaFByb3BzLFxuXG4gICAgbm9EYXRhTGFiZWw6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNMYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmdMYWJlbDogU3RyaW5nLFxuICAgIHNlbGVjdGVkUm93c0xhYmVsOiBGdW5jdGlvbixcbiAgICByb3dzUGVyUGFnZUxhYmVsOiBTdHJpbmcsXG4gICAgcGFnaW5hdGlvbkxhYmVsOiBGdW5jdGlvbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZ3JleS04J1xuICAgIH0sXG5cbiAgICB0aXRsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgaGlkZUJvdHRvbTogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWRCYW5uZXI6IEJvb2xlYW4sXG4gICAgaGlkZU5vRGF0YTogQm9vbGVhbixcbiAgICBoaWRlUGFnaW5hdGlvbjogQm9vbGVhbixcblxuICAgIG9uUm93Q2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93RGJsY2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93Q29udGV4dG1lbnU6IEZ1bmN0aW9uLFxuXG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5Qcm9wcyxcblxuICAgIC4uLnVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVGaWx0ZXJQcm9wcyxcbiAgICAuLi51c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZFByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVTb3J0UHJvcHNcbiAgfSxcblxuICBlbWl0czogW1xuICAgICdyZXF1ZXN0JywgJ3ZpcnR1YWxTY3JvbGwnLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5FbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZEVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHNcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGluRnVsbHNjcmVlbiwgdG9nZ2xlRnVsbHNjcmVlbiB9ID0gdXNlRnVsbHNjcmVlbigpXG5cbiAgICBjb25zdCBnZXRSb3dLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlb2YgcHJvcHMucm93S2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMucm93S2V5XG4gICAgICAgIDogcm93ID0+IHJvd1sgcHJvcHMucm93S2V5IF1cbiAgICApKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHZpcnRTY3JvbGxSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBoYXNWaXJ0U2Nyb2xsID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ3JpZCAhPT0gdHJ1ZSAmJiBwcm9wcy52aXJ0dWFsU2Nyb2xsID09PSB0cnVlKVxuXG4gICAgY29uc3QgY2FyZERlZmF1bHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnIHEtdGFibGVfX2NhcmQnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXRhYmxlLS1zcXVhcmUnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXRhYmxlLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IF9fY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlLS0keyBwcm9wcy5zZXBhcmF0b3IgfS1zZXBhcmF0b3IgY29sdW1uIG5vLXdyYXBgXG4gICAgICArIChwcm9wcy5ncmlkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ncmlkJyA6IGNhcmREZWZhdWx0Q2xhc3MudmFsdWUpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGUtLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy53cmFwQ2VsbHMgPT09IGZhbHNlID8gJyBxLXRhYmxlLS1uby13cmFwJyA6ICcnKVxuICAgICAgKyAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlID8gJyBmdWxsc2NyZWVuIHNjcm9sbCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBfX2NvbnRhaW5lckNsYXNzLnZhbHVlICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtdGFibGUtLWxvYWRpbmcnIDogJycpXG4gICAgKVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy50YWJsZVN0eWxlICsgcHJvcHMudGFibGVDbGFzcyArIHByb3BzLnRhYmxlSGVhZGVyU3R5bGUgKyBwcm9wcy50YWJsZUhlYWRlckNsYXNzICsgX19jb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICgpID0+IHsgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKSB9XG4gICAgKVxuXG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlKHZtLCBnZXRDZWxsVmFsdWUpXG5cbiAgICBjb25zdCB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH0gPSB1c2VUYWJsZUZpbHRlcihwcm9wcywgc2V0UGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGlzUm93RXhwYW5kZWQsIHNldEV4cGFuZGVkLCB1cGRhdGVFeHBhbmRlZCB9ID0gdXNlVGFibGVSb3dFeHBhbmQocHJvcHMsIGVtaXQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IHByb3BzLnJvd3NcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSB8fCByb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkRmlsdGVyTWV0aG9kLnZhbHVlKHJvd3MsIHByb3BzLmZpbHRlciwgY29tcHV0ZWRDb2xzLnZhbHVlLCBnZXRDZWxsVmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5Ub1NvcnQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkU29ydE1ldGhvZC52YWx1ZShcbiAgICAgICAgICBwcm9wcy5yb3dzID09PSByb3dzID8gcm93cy5zbGljZSgpIDogcm93cyxcbiAgICAgICAgICBzb3J0QnksXG4gICAgICAgICAgZGVzY2VuZGluZ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjb21wdXRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZVxuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocm93c1BlclBhZ2UgIT09IDApIHtcbiAgICAgICAgaWYgKGZpcnN0Um93SW5kZXgudmFsdWUgPT09IDAgJiYgcHJvcHMucm93cyAhPT0gcm93cykge1xuICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IGxhc3RSb3dJbmRleC52YWx1ZSkge1xuICAgICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoMCwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByb3dzID0gcm93cy5zbGljZShmaXJzdFJvd0luZGV4LnZhbHVlLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3Qge1xuICAgICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgdXBkYXRlU2VsZWN0aW9uXG4gICAgfSA9IHVzZVRhYmxlUm93U2VsZWN0aW9uKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSlcblxuICAgIGNvbnN0IHsgY29sTGlzdCwgY29tcHV0ZWRDb2xzLCBjb21wdXRlZENvbHNNYXAsIGNvbXB1dGVkQ29sc3BhbiB9ID0gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24ocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSlcblxuICAgIGNvbnN0IHsgY29sdW1uVG9Tb3J0LCBjb21wdXRlZFNvcnRNZXRob2QsIHNvcnQgfSA9IHVzZVRhYmxlU29ydChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKVxuXG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RSb3dJbmRleCxcbiAgICAgIGxhc3RSb3dJbmRleCxcbiAgICAgIGlzRmlyc3RQYWdlLFxuICAgICAgaXNMYXN0UGFnZSxcbiAgICAgIHBhZ2VzTnVtYmVyLFxuICAgICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZVxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb24odm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcilcblxuICAgIGNvbnN0IG5vdGhpbmdUb0Rpc3BsYXkgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID09PSAwKVxuXG4gICAgY29uc3QgdmlydFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgY29tbW9uVmlydFNjcm9sbFByb3BzTGlzdFxuICAgICAgICAuZm9yRWFjaChwID0+IHsgYWNjWyBwIF0gPSBwcm9wc1sgcCBdIH0pXG5cbiAgICAgIGlmIChhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHByb3BzLmRlbnNlID09PSB0cnVlID8gMjggOiA0OFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0VmlydHVhbFNjcm9sbCAoKSB7XG4gICAgICBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEdyaWRCb2R5KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZGVyID0gcHJvcHMuaGlkZUhlYWRlciAhPT0gdHJ1ZSA/IGdldFRIZWFkIDogbnVsbFxuXG4gICAgICBpZiAoaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF1cbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgICAgY29uc3QgdmlydFNsb3RzID0ge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFRCb2R5VFIocHJvcHMuaXRlbSwgc2xvdHMuYm9keSwgcHJvcHMuaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDb250ZW50ID0gaCgndGJvZHknLCB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG5cbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyID09PSBudWxsXG4gICAgICAgICAgICA/ICgpID0+IHRvcENvbnRlbnRcbiAgICAgICAgICAgIDogKCkgPT4gWyBoZWFkZXIoKSBdLmNvbmNhdCh0b3BDb250ZW50KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHZpcnRTbG90cy5hZnRlciA9ICgpID0+IGgoJ3Rib2R5JywgYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoUVZpcnR1YWxTY3JvbGwsIHtcbiAgICAgICAgICByZWY6IHZpcnRTY3JvbGxSZWYsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGUsXG4gICAgICAgICAgLi4udmlydFByb3BzLnZhbHVlLFxuICAgICAgICAgIHNjcm9sbFRhcmdldDogcHJvcHMudmlydHVhbFNjcm9sbFRhcmdldCxcbiAgICAgICAgICBpdGVtczogY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICAgIHR5cGU6ICdfX3F0YWJsZScsXG4gICAgICAgICAgdGFibGVDb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWUsXG4gICAgICAgICAgb25WaXJ0dWFsU2Nyb2xsOiBvblZTY3JvbGxcbiAgICAgICAgfSwgdmlydFNsb3RzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgZ2V0VEJvZHkoKVxuICAgICAgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoaGVhZGVyKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRUYWJsZU1pZGRsZSh7XG4gICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX19taWRkbGUgc2Nyb2xsJywgcHJvcHMudGFibGVDbGFzcyBdLFxuICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZVxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICAgIGlmICh2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHZpcnRTY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG8odG9JbmRleCwgZWRnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRvSW5kZXggPSBwYXJzZUludCh0b0luZGV4LCAxMClcbiAgICAgIGNvbnN0IHJvd0VsID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKGB0Ym9keSB0cjpudGgtb2YtdHlwZSgkeyB0b0luZGV4ICsgMSB9KWApXG5cbiAgICAgIGlmIChyb3dFbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLXRhYmxlX19taWRkbGUuc2Nyb2xsJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gcm93RWwub2Zmc2V0VG9wIC0gcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydFxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZSdcblxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wXG5cbiAgICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgICBpbmRleDogdG9JbmRleCxcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgLSAxLFxuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVlNjcm9sbCAoaW5mbykge1xuICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIGluZm8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaChRTGluZWFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2xpbmVhci1wcm9ncmVzcycsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keVRSIChyb3csIGJvZHlTbG90LCBwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGtleSA9IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICBzZWxlY3RlZCA9IGlzUm93U2VsZWN0ZWQoa2V5KVxuXG4gICAgICBpZiAoYm9keVNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIHBhZ2VJbmRleCxcbiAgICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHlDZWxsID0gc2xvdHNbICdib2R5LWNlbGwnIF0sXG4gICAgICAgIGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBib2R5Q2VsbENvbCA9IHNsb3RzWyBgYm9keS1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgICBzbG90ID0gYm9keUNlbGxDb2wgIT09IHZvaWQgMCA/IGJvZHlDZWxsQ29sIDogYm9keUNlbGxcblxuICAgICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gc2xvdChnZXRCb2R5Q2VsbFNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCwgY29sIH0pKVxuICAgICAgICAgICAgOiBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgICAgICAgfSwgZ2V0Q2VsbFZhbHVlKGNvbCwgcm93KSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRCb2R5U2VsZWN0aW9uU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4IH0pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBrZXkgXSwgWyByb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGQnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHsga2V5LCBjbGFzczogeyBzZWxlY3RlZCB9IH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgncm93Q2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ3Jvd0RibGNsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdyb3dDb250ZXh0bWVudScsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RyJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHkgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgYm9keSA9IHNsb3RzLmJvZHksXG4gICAgICAgIHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXSxcbiAgICAgICAgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgIGxldCBjaGlsZCA9IGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoXG4gICAgICAgIChyb3csIHBhZ2VJbmRleCkgPT4gZ2V0VEJvZHlUUihyb3csIGJvZHksIHBhZ2VJbmRleClcbiAgICAgIClcblxuICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pLmNvbmNhdChjaGlsZClcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLmNvbmNhdChib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0Ym9keScsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG5cbiAgICAgIGRhdGEuY29scyA9IGRhdGEuY29scy5tYXAoXG4gICAgICAgIGNvbCA9PiBpbmplY3RQcm9wKHsgLi4uY29sIH0sICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShjb2wsIGRhdGEucm93KSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5Q2VsbFNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIGluamVjdFByb3AoZGF0YSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGRhdGEuY29sLCBkYXRhLnJvdykpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTZWxlY3Rpb25TY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdEJvZHlDb21tb25TY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICByb3dJbmRleDogZmlyc3RSb3dJbmRleC52YWx1ZSArIGRhdGEucGFnZUluZGV4LFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICgpID0+IGlzUm93U2VsZWN0ZWQoZGF0YS5rZXkpLFxuICAgICAgICAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBkYXRhLmtleSBdLCBbIGRhdGEucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdleHBhbmQnLFxuICAgICAgICAoKSA9PiBpc1Jvd0V4cGFuZGVkKGRhdGEua2V5KSxcbiAgICAgICAgYWRkaW5nID0+IHsgdXBkYXRlRXhwYW5kZWQoZGF0YS5rZXksIGFkZGluZykgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENlbGxWYWx1ZSAoY29sLCByb3cpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBjb2wuZmllbGQgPT09ICdmdW5jdGlvbicgPyBjb2wuZmllbGQocm93KSA6IHJvd1sgY29sLmZpZWxkIF1cbiAgICAgIHJldHVybiBjb2wuZm9ybWF0ICE9PSB2b2lkIDAgPyBjb2wuZm9ybWF0KHZhbCwgcm93KSA6IHZhbFxuICAgIH1cblxuICAgIGNvbnN0IG1hcmdpbmFsc1Njb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHBhZ2luYXRpb246IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIHBhZ2VzTnVtYmVyOiBwYWdlc051bWJlci52YWx1ZSxcbiAgICAgIGlzRmlyc3RQYWdlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgIGlzTGFzdFBhZ2U6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG5cbiAgICAgIGluRnVsbHNjcmVlbjogaW5GdWxsc2NyZWVuLnZhbHVlLFxuICAgICAgdG9nZ2xlRnVsbHNjcmVlblxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9wRGl2ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHRvcCA9IHNsb3RzLnRvcCxcbiAgICAgICAgdG9wTGVmdCA9IHNsb3RzWyAndG9wLWxlZnQnIF0sXG4gICAgICAgIHRvcFJpZ2h0ID0gc2xvdHNbICd0b3AtcmlnaHQnIF0sXG4gICAgICAgIHRvcFNlbGVjdGlvbiA9IHNsb3RzWyAndG9wLXNlbGVjdGlvbicgXSxcbiAgICAgICAgaGFzU2VsZWN0aW9uID0gaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIHRvcFNlbGVjdGlvbiAhPT0gdm9pZCAwXG4gICAgICAgICAgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMCxcbiAgICAgICAgdG9wQ2xhc3MgPSAncS10YWJsZV9fdG9wIHJlbGF0aXZlLXBvc2l0aW9uIHJvdyBpdGVtcy1jZW50ZXInXG5cbiAgICAgIGlmICh0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgWyB0b3AobWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGxldCBjaGlsZFxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkID0gdG9wU2VsZWN0aW9uKG1hcmdpbmFsc1Njb3BlLnZhbHVlKS5zbGljZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBbXVxuXG4gICAgICAgIGlmICh0b3BMZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgdG9wTGVmdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogWyAncS10YWJsZV9fdGl0bGUnLCBwcm9wcy50aXRsZUNsYXNzIF1cbiAgICAgICAgICAgICAgfSwgcHJvcHMudGl0bGUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wUmlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgICApXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIHRvcFJpZ2h0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU2VsZWN0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogYWxsUm93c1NlbGVjdGVkLnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZ2V0VEhlYWRUUigpXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3RyJywgeyBjbGFzczogJ3EtdGFibGVfX3Byb2dyZXNzJyB9LCBbXG4gICAgICAgICAgICBoKCd0aCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZVxuICAgICAgICAgICAgfSwgZ2V0UHJvZ3Jlc3MoKSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aGVhZCcsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkVFIgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgaGVhZGVyID0gc2xvdHMuaGVhZGVyLFxuICAgICAgICBoZWFkZXJDZWxsID0gc2xvdHNbICdoZWFkZXItY2VsbCcgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcihcbiAgICAgICAgICBnZXRIZWFkZXJTY29wZSh7IGhlYWRlcjogdHJ1ZSB9KVxuICAgICAgICApLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaGVhZGVyQ2VsbENvbCA9IHNsb3RzWyBgaGVhZGVyLWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICBzbG90ID0gaGVhZGVyQ2VsbENvbCAhPT0gdm9pZCAwID8gaGVhZGVyQ2VsbENvbCA6IGhlYWRlckNlbGwsXG4gICAgICAgICAgcHJvcHMgPSBnZXRIZWFkZXJTY29wZSh7IGNvbCB9KVxuXG4gICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QocHJvcHMpXG4gICAgICAgICAgOiBoKFFUaCwge1xuICAgICAgICAgICAga2V5OiBjb2wubmFtZSxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgfSwgKCkgPT4gY29sLmxhYmVsKVxuICAgICAgfSlcblxuICAgICAgaWYgKHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ncmlkICE9PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sICcgJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnaGVhZGVyLXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEhlYWRlclNjb3BlKHt9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgndHInLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlSGVhZGVyU3R5bGVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdFByb3AoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAgICgpID0+IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NdWx0aXBsZVNlbGVjdGlvblNldCAodmFsKSB7XG4gICAgICBpZiAoc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoZ2V0Um93S2V5LnZhbHVlKSxcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICB2YWxcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZJY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUuZmlyc3RQYWdlLFxuICAgICAgICBwcm9wcy5pY29uUHJldlBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5wcmV2UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbk5leHRQYWdlIHx8ICRxLmljb25TZXQudGFibGUubmV4dFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25MYXN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmxhc3RQYWdlXG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJvdHRvbURpdiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZUJvdHRvbSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGlmIChub3RoaW5nVG9EaXNwbGF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5oaWRlTm9EYXRhID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgID8gcHJvcHMubG9hZGluZ0xhYmVsIHx8ICRxLmxhbmcudGFibGUubG9hZGluZ1xuICAgICAgICAgIDogKHByb3BzLmZpbHRlciA/IHByb3BzLm5vUmVzdWx0c0xhYmVsIHx8ICRxLmxhbmcudGFibGUubm9SZXN1bHRzIDogcHJvcHMubm9EYXRhTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub0RhdGEpXG5cbiAgICAgICAgY29uc3Qgbm9EYXRhID0gc2xvdHNbICduby1kYXRhJyBdXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9EYXRhICE9PSB2b2lkIDBcbiAgICAgICAgICA/IFsgbm9EYXRhKHsgbWVzc2FnZSwgaWNvbjogJHEuaWNvblNldC50YWJsZS53YXJuaW5nLCBmaWx0ZXI6IHByb3BzLmZpbHRlciB9KSBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1ub2RhdGEtaWNvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS53YXJuaW5nXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBxLXRhYmxlX19ib3R0b20tLW5vZGF0YScgfSwgY2hpbGRyZW4pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdHRvbSA9IHNsb3RzLmJvdHRvbVxuXG4gICAgICBpZiAoYm90dG9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIFsgYm90dG9tKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmhpZGVTZWxlY3RlZEJhbm5lciAhPT0gdHJ1ZSAmJiBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgKHByb3BzLnNlbGVjdGVkUm93c0xhYmVsIHx8ICRxLmxhbmcudGFibGUuc2VsZWN0ZWRSZWNvcmRzKShyb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMuaGlkZVBhZ2luYXRpb24gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogYm90dG9tQ2xhc3MgKyAnIGp1c3RpZnktZW5kJ1xuICAgICAgICB9LCBnZXRQYWdpbmF0aW9uRGl2KGNoaWxkKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgY2hpbGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdTZWxlY3Rpb24gKHBhZykge1xuICAgICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHJvd3NQZXJQYWdlOiBwYWcudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbkRpdiAoY2hpbGQpIHtcbiAgICAgIGxldCBjb250cm9sXG4gICAgICBjb25zdFxuICAgICAgICB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIHBhZ2luYXRpb25MYWJlbCA9IHByb3BzLnBhZ2luYXRpb25MYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnBhZ2luYXRpb24sXG4gICAgICAgIHBhZ2luYXRpb25TbG90ID0gc2xvdHMucGFnaW5hdGlvbixcbiAgICAgICAgaGFzT3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgKVxuXG4gICAgICBpZiAoaGFzT3B0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9LCBbXG4gICAgICAgICAgICAgIHByb3BzLnJvd3NQZXJQYWdlTGFiZWwgfHwgJHEubGFuZy50YWJsZS5yZWNvcmRzUGVyUGFnZVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBoKFFTZWxlY3QsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19zZWxlY3QgaW5saW5lIHEtdGFibGVfX2JvdHRvbS1pdGVtJyxcbiAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcm93c1BlclBhZ2UgPT09IDBcbiAgICAgICAgICAgICAgICA/ICRxLmxhbmcudGFibGUuYWxsUm93c1xuICAgICAgICAgICAgICAgIDogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNEZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0NvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uUGFnU2VsZWN0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRpb25TbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29udHJvbCA9IHBhZ2luYXRpb25TbG90KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRyb2wgPSBbXG4gICAgICAgICAgaCgnc3BhbicsIHJvd3NQZXJQYWdlICE9PSAwID8geyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9IDoge30sIFtcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlXG4gICAgICAgICAgICAgID8gcGFnaW5hdGlvbkxhYmVsKGZpcnN0Um93SW5kZXgudmFsdWUgKyAxLCBNYXRoLm1pbihsYXN0Um93SW5kZXgudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSksIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgOiBwYWdpbmF0aW9uTGFiZWwoMSwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCAmJiBwYWdlc051bWJlci52YWx1ZSA+IDEpIHtcbiAgICAgICAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBmbGF0OiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzLmRlbnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBidG5Qcm9wcy5zaXplID0gJ3NtJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdGaXJzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAwIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBmaXJzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnUHJldicsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAxIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBwcmV2UGFnZVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ05leHQnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMiBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBuZXh0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTGFzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAzIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGxhc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgY29udHJvbClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmdyaWRIZWFkZXIgPT09IHRydWVcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBbXG4gICAgICAgICAgICAgIGdldFRIZWFkKGgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IGdldFByb2dyZXNzKGgpXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX21pZGRsZScgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEJvZHkgKCkge1xuICAgICAgY29uc3QgaXRlbSA9IHNsb3RzLml0ZW0gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLml0ZW1cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBzY29wZS5jb2xzLm1hcChcbiAgICAgICAgICAgIGNvbCA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXRpdGxlJyB9LCBbIGNvbC5sYWJlbCBdKSxcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS12YWx1ZScgfSwgWyBjb2wudmFsdWUgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gc2xvdChzY29wZSlcbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzY29wZS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBzY29wZS5rZXkgXSwgWyBzY29wZS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgY29udGVudCksXG4gICAgICAgICAgICAgIGgoUVNlcGFyYXRvciwgeyBkYXJrOiBpc0RhcmsudmFsdWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgJ3EtdGFibGVfX2dyaWQtaXRlbS1jYXJkJyArIGNhcmREZWZhdWx0Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHByb3BzLmNhcmRDbGFzc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICAgIHx8IHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YS5jbGFzc1sgMCBdICs9ICcgY3Vyc29yLXBvaW50ZXInXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbSBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMnXG4gICAgICAgICAgICAgICsgKHNjb3BlLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLXRhYmxlX19ncmlkLWl0ZW0tLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJsZV9fZ3JpZC1jb250ZW50IHJvdycsXG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRhaW5lckNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkQ29udGFpbmVyU3R5bGVcbiAgICAgIH0sIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoKHJvdywgcGFnZUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtKGdldEJvZHlTY29wZSh7XG4gICAgICAgICAga2V5OiBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgcGFnZUluZGV4XG4gICAgICAgIH0pKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzIGFuZCBuZWVkZWQgY29tcHV0ZWQgcHJvcHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgaXNSb3dFeHBhbmRlZCxcbiAgICAgIHNldEV4cGFuZGVkLFxuICAgICAgc29ydCxcbiAgICAgIHJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHNjcm9sbFRvLFxuICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgfSlcblxuICAgIGluamVjdE11bHRpcGxlUHJvcHModm0ucHJveHksIHtcbiAgICAgIGZpbHRlcmVkU29ydGVkUm93czogKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzOiAoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXI6ICgpID0+IGNvbXB1dGVkUm93c051bWJlci52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbIGdldFRvcERpdigpIF1cbiAgICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNvbnRhaW5lckNsYXNzLnZhbHVlIH1cblxuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChnZXRHcmlkSGVhZGVyKCkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgY2xhc3M6IFsgZGF0YS5jbGFzcywgcHJvcHMuY2FyZENsYXNzIF0sXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBnZXRCb2R5KCksXG4gICAgICAgIGdldEJvdHRvbURpdigpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0cmFjay1saXN0LXRhYmxlIHJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCI+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCJbZGlzYywgdHJhY2tzXSBpbiBwcm9wcy50cmFja3MuZW50cmllcygpXCJcbiAgICAgIHYtYmluZDprZXk9XCJkaXNjLmlkIVwiXG4gICAgICBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWQgcS1wYi1sZ1wiXG4gICAgPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgOnJvd3M9XCJ0cmFja3NcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgdmlydHVhbC1zY3JvbGxcbiAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGhcbiAgICAgICAgICAgICAgdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJjb2wubmFtZVwiXG4gICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItYm90dG9tLXRoaW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgIDwvcS10aD5cbiAgICAgICAgICA8L3EtdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaW5kZXg9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICBjbGFzcz1cInEtcGEtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHNpemU9XCIxM3B4XCJcbiAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cImhvdmVyaW5nV2hpY2ggPSBwcm9wcy5rZXlcIlxuICAgICAgICAgICAgICBAbW91c2VsZWF2ZT1cImhvdmVyaW5nV2hpY2ggPSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy5rZXkgPyBwcm9wcy52YWx1ZSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMua2V5ID8gb3V0bGluZWRQbGF5QXJyb3cgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrQnlJZChwcm9wcy5rZXksIFF1ZXVlQWRkTW9kZS5QTEFZX0lNTUVESUFURUxZKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC10aXRsZT1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmUtb24taG92ZXIgcG9pbnRlci1vbi1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgdi1mb3I9XCJwcm9wIGluIHByb3BzLnZhbHVlXCJcbiAgICAgICAgICAgICAgOmtleT1cInByb3AuaWRcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZ29Ub09yaWdpbmFsVHJhY2tQYWdlKHByb3AuaWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgcHJvcC50aXRsZS5lbiB9fVxuICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgcHJvcHMudmFsdWVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgIDxUcmFja01lbnUgOm9wdGlvbnM9XCJ0cmFja01lbnVPcHRpb25zQ3JlYXRvcihwcm9wcy5yb3csIGRpc2MpXCI+PC9UcmFja01lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG91dGxpbmVkUGxheUFycm93IH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBRVGFibGUgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0LCByZWYsIFRyYWNrT3BUeXBlcyB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBUcmFja01lbnUgZnJvbSAnLi4vTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51LnZ1ZSc7XG5pbXBvcnQgVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIgZnJvbSAnLi4vTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51T3B0aW9uQnVpbGRlcic7XG5cbmludGVyZmFjZSBUcmFja0xpc3RUYWJsZVByb3BzIHtcbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaG92ZXJpbmdXaGljaCA9IHJlZjxudW1iZXI+KCk7XG5cbi8vIE1lbnUgb3B0aW9uc1xuY29uc3QgdHJhY2tNZW51T3B0aW9uc0NyZWF0b3IgPSAodHJhY2s6IFRyYWNrUmVhZER0bywgYWxidW06IEFsYnVtUmVhZER0bykgPT5cbiAgbmV3IFRyYWNrTWVudU9wdGlvbnNCdWlsZGVyKHRyYWNrLCBhbGJ1bSlcbiAgICAuYWRkUGxheU5leHRPcHRpb24oKVxuICAgIC5hZGRBZGRUb1F1ZXVlT3B0aW9uKClcbiAgICAuYWRkU2VhcmNoT25Zb3V0dWJlT3B0aW9uKClcbiAgICAuYnVpbGQoKTtcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWUsXG59O1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWg0JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3JpZ2luYWwnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5vcmlnaW5hbCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT5cbiAgICAgIGAke0R1cmF0aW9uLmZyb21EdXJhdGlvblN0cmluZyh2YWwpLnRvRHVyYXRpb25TdHJpbmcoKX1gLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8VHJhY2tMaXN0VGFibGVQcm9wcz4oKTtcblxuY29uc3QgZ29Ub09yaWdpbmFsVHJhY2tQYWdlID0gKG9yaWdpbmFsVHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ09yaWdpbmFsVHJhY2snLFxuICAgIHBhcmFtczogeyBvcmlnaW5hbElkOiBvcmlnaW5hbFRyYWNrSWQsIHBhZ2U6IDEgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBBc3NldFJlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRVdGlscyB7XG4gIHN0YXRpYyBkb3dubG9hZEFzc2V0KGFzc2V0OiBBc3NldFJlYWREdG8pOiB2b2lkIHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IGAke2Fzc2V0LnVybH0/ZG93bmxvYWQ9dHJ1ZWA7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBhLmNsaWNrKCk7XG4gIH1cblxuICBzdGF0aWMgb3BlbkFzc2V0SW5OZXdUYWIoYXNzZXQ6IEFzc2V0UmVhZER0byk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKGFzc2V0LnVybCwgJ19ibGFuaycpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDUwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAxMjAwcHg7IG1heC13aWR0aDogODB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtdG9vbGJhciBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICBQcmV2aWV3IG9mIHt7IHByb3BzLmFzc2V0Lm5hbWUgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMuZG93bmxvYWRBc3NldChwcm9wcy5hc3NldClcIlxuICAgICAgICA+XG4gICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gdi1pZj1cImlzUHJldmlld2FibGUocHJvcHMuYXNzZXQpXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICA6c3JjPVwicHJvcHMuYXNzZXQudXJsXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgID5cbiAgICAgICAgPC9pZnJhbWU+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uIHYtZWxzZT5cbiAgICAgICAgUHJldmlldyBub3QgYXZhaWxhYmxlIGZvciB0aGlzIGFzc2V0LiAoVW5zdXBwb3J0ZWQgTUlNRSB0eXBlOiB7eyBwcm9wcy5hc3NldC5taW1lIH19KVxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IEFzc2V0VXRpbHMgZnJvbSAnc3JjL3V0aWxzL0Fzc2V0VXRpbHMnO1xuXG5jb25zdCBQUkVWSUVXQUJMRV9NSU1FX1RZUEVTID0gW1xuICAnaW1hZ2UvanBlZycsXG4gICdpbWFnZS9wbmcnLFxuICAnaW1hZ2UvZ2lmJyxcbiAgJ2ltYWdlL2JtcCcsXG4gICdpbWFnZS93ZWJwJyxcbiAgJ2ltYWdlL3gtaWNvbicsXG4gICd0ZXh0L3BsYWluJyxcbiAgJ3RleHQvaHRtbCcsXG4gICd0ZXh0L3htbCcsXG4gICd2aWRlby9tcDQnLFxuICAndmlkZW8vd2VibScsXG4gICd2aWRlby9tcGVnJyxcbiAgJ2F1ZGlvL21wZWczJyxcbiAgJ2F1ZGlvL29nZycsXG4gICdhdWRpby9tcDQnLFxuICAnYXVkaW8vZmxhYycsXG4gICdhdWRpby9taWRpJyxcbl07XG5cbmNvbnN0IGlzUHJldmlld2FibGUgPSAoYXNzZXQ6IEFzc2V0UmVhZER0bykgPT4ge1xuICBpZiAoIWFzc2V0Lm1pbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIFBSRVZJRVdBQkxFX01JTUVfVFlQRVMuaW5jbHVkZXMoYXNzZXQubWltZSk7XG59O1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYXNzZXQ6IEFzc2V0UmVhZER0bztcbn0+KCk7XG48L3NjcmlwdD5cbiIsIjwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXVudXNlZC12YXJzIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgYmFja2Ryb3AtZmlsdGVyPVwiYnJpZ2h0bmVzcyg1MCUpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogMTIwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IG1hcmdpbi10b3A6IDEwdmg7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5BbGJ1bSBBc3NldHM8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cInEtcHQtbm9uZVwiXG4gICAgICAgIHYtaWY9XCJhbGJ1bUFzc2V0cy5sZW5ndGggPiAwXCJcbiAgICAgID5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICA6cm93cz1cImFsYnVtQXNzZXRzXCJcbiAgICAgICAgICA6Y29sdW1ucz1cInRhYmxlQ29sdW1uc1wiXG4gICAgICAgICAgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keT1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgICAgIGtleT1cImlkXCJcbiAgICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuaWQgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgICAgIGtleT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5uYW1lIH19XG4gICAgICAgICAgICAgIDwvcS10ZD5cblxuICAgICAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgICAgIGtleT1cInNpemVcIlxuICAgICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IChwcm9wcy5yb3cuc2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpIH19XG4gICAgICAgICAgICAgIDwvcS10ZD5cblxuICAgICAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgICAgIGtleT1cIm1pbWUtdHlwZVwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgcHJvcHMucm93Lm1pbWUgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuXG4gICAgICAgICAgICAgIDxxLW1lbnUgdG91Y2gtcG9zaXRpb24+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicHJldmlld0Fzc2V0KHByb3BzLnJvdylcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1tYXRQcmV2aWV3IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlByZXZpZXc8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJBc3NldFV0aWxzLm9wZW5Bc3NldEluTmV3VGFiKHByb3BzLnJvdylcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1tYXRPcGVuSW5OZXcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+T3BlbiBpbiBuZXcgdGFiPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJBc3NldFV0aWxzLmRvd25sb2FkQXNzZXQocHJvcHMucm93KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPW1hdEZpbGVEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5Eb3dubG9hZDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cInEtcGItbm9uZVwiXG4gICAgICAgIHYtZWxzZVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNiB0ZXh0LWNlbnRlclwiPk5vIGFzc2V0cyBmb3VuZDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgbWF0RmlsZURvd25sb2FkLFxuICBtYXRQcmV2aWV3LFxuICBtYXRPcGVuSW5OZXdcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBBc3NldFJlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCB7IFFEaWFsb2csIHVzZVF1YXNhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXNzZXRQcmV2aWV3RGlhbG9nIGZyb20gJy4vQXNzZXRQcmV2aWV3RGlhbG9nLnZ1ZSc7XG5pbXBvcnQgQXNzZXRVdGlscyBmcm9tICdzcmMvdXRpbHMvQXNzZXRVdGlscyc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmludGVyZmFjZSBBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZ1Byb3BzIHtcbiAgYWxidW06IEFsYnVtUmVhZER0bztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZ1Byb3BzPigpO1xuXG5jb25zdCBhbGJ1bUFzc2V0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHByb3BzLmFsYnVtLm90aGVyRmlsZXMhO1xufSk7XG5cbmNvbnN0IHByZXZpZXdBc3NldCA9IChhc3NldDogQXNzZXRSZWFkRHRvKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBBc3NldFByZXZpZXdEaWFsb2csXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIGFzc2V0XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgbGFiZWw6ICdBc3NldCBJRCcsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5pZFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGxhYmVsOiAnTmFtZScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cubmFtZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3NpemUnLFxuICAgIGxhYmVsOiAnU2l6ZSAoTUIpJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LnNpemUsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAkeyh2YWwgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKX1gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWltZS10eXBlJyxcbiAgICBsYWJlbDogJ0NvbnRlbnQgVHlwZScsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5taW1lXG4gIH1cbl07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwiY29udHJvbGxlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgICA8QWxidW1JbmZvU2VjdGlvbiA6YWxidW09XCJkYXRhIS5tYXN0ZXJBbGJ1bVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb2wtYWxsIHEtbXQtbGcgYWxidW0tcGFnZS1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGNsYXNzPVwicGxheS1idG4gcS1teC1tZFwiXG4gICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWRQbGF5QXJyb3dcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5QTEFZX0lNTUVESUFURUxZKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuXG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICAgIGNvbnRleHQtbWVudVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX05FWFQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX0xBU1QpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaWtlLWJ0biBxLW14LW1kXCJcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICBmaXRcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCJcbiAgICAgICAgICAgICAgICBzZWxmPVwidG9wIG1pZGRsZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93QWxidW1Bc3NldERpYWxvZyhkYXRhIS5tYXN0ZXJBbGJ1bSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgT3RoZXIgQXNzZXRzPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEVkaXROb3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkF0dHJpYnV0ZSBFZGl0b3I8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUcmFja0xpc3RUYWJsZSA6dHJhY2tzPVwiZGF0YSEudHJhY2tzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2Vycm9yPVwieyBlcnJvciB9XCI+XG4gICAgICAgIDxxLWNhcmRcbiAgICAgICAgICBjbGFzcz1cInEtbWEtbWRcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA0MDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVycm9yPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5GYWlsZWQgdG8gbG9hZCBhbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGVycm9yPy5tZXNzYWdlIH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgZXJyb3I/LnN0YWNrIH19PC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuXG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAge3sgZXJyb3I/LnN0YWNrIH19XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkRWRpdE5vdGVcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBBbGJ1bUFwaSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBDb21wdXRlZFJlZiwgaW5qZWN0LCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCBBbGJ1bUluZm9TZWN0aW9uIGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9BbGJ1bUluZm9TZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgVHJhY2tMaXN0VGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1QYWdlL1RyYWNrTGlzdFRhYmxlLnZ1ZSc7XG5pbXBvcnQgeyBRQ2FyZCwgdXNlUXVhc2FyLCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9BbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZy52dWUnO1xuaW1wb3J0IFF1ZXVlU2VydmljZSwgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5cbi8vIFZpZXcgTW9kZWxzXG5pbnRlcmZhY2UgQWxidW1QYWdlUm91dGVQYXJhbWV0ZXJzIHtcbiAgYWxidW1JZDogQ29tcHV0ZWRSZWY8c3RyaW5nPjtcbn1cblxuaW50ZXJmYWNlIEFsYnVtUGFnZVZpZXdNb2RlbCB7XG4gIG1hc3RlckFsYnVtOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcblxuICAvLyBBbGJ1bSAtPiBUcmFja3MgaW4gQWxidW0sIGZvciBlYWNoIGFsYnVtXG4gIHRyYWNrczogTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+O1xufVxuXG4vLyBJbmplY3QvZ2V0IHJlcXVpcmVkIHNlcnZjaWVzXG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlUGFyYW1zID0ge1xuICBhbGJ1bUlkOiBjb21wdXRlZCgoKSA9PiAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCksXG59O1xuY29uc3QgY29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxBbGJ1bVBhZ2VWaWV3TW9kZWw+KCk7XG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjID0gKFxuICBtYXN0ZXI6IEFsYnVtUmVhZER0b1xuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgbWFzdGVyLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICB0cmFja3Muc2V0KG1hc3RlciwgbWFzdGVyLnRyYWNrcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3M6IFtdLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IG5ldyBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT4oKTtcblxuICBpZiAobWFzdGVyLnRyYWNrcykge1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIGRpc2NzLmZvckVhY2goKGRpc2MpID0+IHtcbiAgICBpZiAoZGlzYy50cmFja3MpIHtcbiAgICAgIC8vIFNvcnQgdHJhY2tzIGJ5IGluZGV4XG4gICAgICBkaXNjLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICAgIHRyYWNrcy5zZXQoZGlzYywgZGlzYy50cmFja3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXN0ZXJBbGJ1bTogbWFzdGVyLFxuICAgIGRpc2NzLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGlmIChkaXNjcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MobWFzdGVyLCBkaXNjcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjKG1hc3Rlcik7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRNdWx0aURpc2NBbGJ1bSA9IGFzeW5jIChcbiAgbWFzdGVyQWxidW1JZDogc3RyaW5nXG4pOiBQcm9taXNlPHtcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcbn0+ID0+IHtcbiAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgYXBpQ29uZmlnUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbldpdGhBdXRoKClcbiAgKTtcblxuICBjb25zdCBtYXN0ZXJBbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICBpZDogbWFzdGVyQWxidW1JZCxcbiAgfSk7XG5cbiAgY29uc3QgZGlzY3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBtYXN0ZXJBbGJ1bS5jaGlsZEFsYnVtcz8ubWFwKChjaGlsZEFsYnVtKSA9PlxuICAgICAgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgICBpZDogY2hpbGRBbGJ1bS5pZCEsXG4gICAgICB9KVxuICAgICkgfHwgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlcjogbWFzdGVyQWxidW0sXG4gICAgZGlzY3M6IGRpc2NzLFxuICB9O1xufTtcblxuY29uc3QgbG9hZCA9IGFzeW5jIChhbGJ1bUlkOiBzdHJpbmcpID0+IHtcbiAgY29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICAgICk7XG5cbiAgICBjb25zdCBhbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICAgIGlkOiBhbGJ1bUlkLFxuICAgIH0pO1xuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiB0aGUgYWxidW0gaGFzIGRpc2NzIG9yIHRoZSBhbGJ1bSBpdHNlbGYgaXMgYSBkaXNjc1xuICAgIGNvbnN0IGlzTXVsdGlEaXNjID1cbiAgICAgIGFsYnVtLnBhcmVudEFsYnVtIHx8IChhbGJ1bT8uY2hpbGRBbGJ1bXM/Lmxlbmd0aCB8fCAwKSA+IDA7XG5cbiAgICBsZXQgdmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWw7XG4gICAgaWYgKGlzTXVsdGlEaXNjKSB7XG4gICAgICBjb25zdCBpc01hc3RlciA9ICFhbGJ1bS5wYXJlbnRBbGJ1bSAmJiBhbGJ1bS5kaXNjTnVtYmVyID09PSAwO1xuICAgICAgaWYgKCFpc01hc3Rlcikge1xuICAgICAgICAkcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgIG5hbWU6ICdBbGJ1bScsXG4gICAgICAgICAgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtLnBhcmVudEFsYnVtIS5pZCEgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hc3RlckFsYnVtSWQgPSBhbGJ1bS5pZCE7XG4gICAgICBjb25zdCB7IG1hc3RlciwgZGlzY3MgfSA9IGF3YWl0IGxvYWRNdWx0aURpc2NBbGJ1bShtYXN0ZXJBbGJ1bUlkKTtcblxuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChtYXN0ZXIsIGRpc2NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChhbGJ1bSwgW10pO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuc2V0U3VjY2Vzcyh2aWV3TW9kZWwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnRyb2xsZXIuc2V0RXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBzaG93QWxidW1Bc3NldERpYWxvZyA9IChhbGJ1bTogQWxidW1SZWFkRHRvKSA9PiB7XG4gICRxLmRpYWxvZyhcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgYWxidW0sXG4gICAgICB9XG4gICAgfVxuICApO1xufVxuXG5jb25zdCBwbGF5QWxidW0gPSAodmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWwsIGFkZE1vZGU6IFF1ZXVlQWRkTW9kZSkgPT4ge1xuICBjb25zdCB0cmFja3MgPSBBcnJheS5mcm9tKHZpZXdNb2RlbC50cmFja3MudmFsdWVzKCkpXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuXG4gIGNvbnN0IHRyYWNrSWRzID0gdHJhY2tzLm1hcCgodHJhY2spID0+IHRyYWNrLmlkISk7XG5cbiAgcXVldWVTZXJ2aWNlPy5hZGRUcmFja3NCeUlkcyh0cmFja0lkcywgYWRkTW9kZSk7XG59O1xuXG4vLyBiaW5kIGhvb2tzIHRvIHVwZGF0ZSBjb250cm9sbGVyIGlmIHRoZSByb3V0ZSBjaGFuZ2VzXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkKHJvdXRlUGFyYW1zLmFsYnVtSWQudmFsdWUgYXMgc3RyaW5nKTtcblxuICB3YXRjaChyb3V0ZVBhcmFtcy5hbGJ1bUlkLCBhc3luYyAoYWxidW1JZCkgPT4ge1xuICAgIGF3YWl0IGxvYWQoYWxidW1JZCBhcyBzdHJpbmcpO1xuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi5ib2R5LS1saWdodCAubGlrZS1idG4ge1xuICBjb2xvcjogJG5lZ2F0aXZlXG59XG5cbi5ib2R5LS1kYXJrIC5saWtlLWJ0biB7XG4gIGNvbG9yOiAkbmVnYXRpdmVcbn1cblxuLmJvZHktLWRhcmsgLnBsYXktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxufVxuXG4uYm9keS0tbGlnaHQgLnBsYXktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxufVxuXG4uYm9keS0tbGlnaHQgLmFsYnVtLXBhZ2UtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZGZkZmRmLCAkYWxwaGE6IDAuNClcbn1cblxuLmJvZHktLWRhcmsgLmFsYnVtLXBhZ2UtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNClcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZGVmIiwibGFzdFBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBLFVBQU0sVUFBVTtBQUNoQixVQUFNLFFBQVE7QUFDZCxVQUFNLHNCQUFzQixNQUFpQzs7QUFDM0QsWUFBTSxnQkFBZSxXQUFNLE1BQU0sZ0JBQVosbUJBQXlCLE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFDaEUsWUFBQSxPQUFPLE1BQU8sT0FBTztBQUNsQixlQUFBO0FBQUEsTUFDVCxHQUFHLENBQW9DO0FBRS9CLGNBQUEsSUFBSSxnQkFBZ0IsWUFBWTtBQUVqQyxhQUFBO0FBQUEsUUFDTCxhQUFXLFdBQU0sTUFBTSxTQUFaLG1CQUFrQixhQUFZO0FBQUEsUUFDekM7QUFBQSxRQUNBLGlCQUFlLGlCQUFNLE1BQU0sY0FBWixtQkFBdUIsVUFBdkIsbUJBQThCLFFB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
