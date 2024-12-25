import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.5bf6a72e.js";
import { Q as QTooltip } from "./QTooltip.b330cd89.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.b7fafb93.js";
import { Q as QList } from "./QList.98f9efbb.js";
import { j as useVirtualScrollProps, k as useVirtualScroll, l as commonVirtScrollPropsList, Q as QSelect, m as QChip, a as QMenu } from "./QSelect.0ec8b5ca.js";
import { E as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, J as createVNode, T as unref, R as createBaseVNode, H as createBlock, aa as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, V as QSeparator, _ as _export_sfc, br as pushScopeId, bs as popScopeId, c as createComponent, m as h, q as hSlot, a1 as hUniqueSlot, Z as QIcon, t as getCurrentInstance, g as computed, a as useDarkProps, d as useDark, aw as scrollTargetProp, r as ref, w as watch, aj as onBeforeMount, o as onMounted, aX as onActivated, aW as onDeactivated, k as onBeforeUnmount, ax as getScrollTarget, av as listenOpts, A as hMergeSlot, aF as useSizeProps, aG as useSize, bt as vmHasRouter, bu as History, ab as isNumber, bv as isDate, ac as isObject, n as nextTick, bw as injectMultipleProps, bx as QCheckbox, bb as injectProp, N as QBtn, i as inject, I as withCtx, W as createTextVNode, by as QueueAddMode, ai as Duration, Q as QDialog, K as QCardSection, O as QCard, F as useQuasar, l as withDirectives, b8 as QAvatar, M as QCardActions, bn as useLoadableController, bm as AlbumApi } from "./index.80f56f59.js";
import { Q as QPage } from "./QPage.65518d8e.js";
import { C as ClosePopup } from "./ClosePopup.829274fb.js";
import { p as outlinedPlayArrow, c as outlinedFavoriteBorder, v as outlinedMoreHoriz, w as outlinedDescription, x as outlinedEditNote } from "./index.020b7c4d.js";
import { Q as QImg } from "./QImg.7f554aaa.js";
import { D as DataSourceButton } from "./DataSourceButton.da5233ae.js";
import { T as TrackMenu, a as TrackMenuOptionsBuilder } from "./TrackMenuOptionBuilder.bdcefe33.js";
import { c as QToolbar, Q as QToolbarTitle, e as matPreview, f as matOpenInNew, g as matFileDownload } from "./QToolbar.30f05556.js";
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
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.asset.url,
                    width: "100%",
                    height: "600"
                  }, null, 8, _hoisted_1$2)
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
      console.log("Preview asset", asset);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjA2M2U1MDg1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZnVsbHNjcmVlbi91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUuc29ydC9zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXBhZ2luYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1leHBhbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUYWJsZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9UcmFja0xpc3RUYWJsZS52dWUiLCIuLi8uLi8uLi9zcmMvdXRpbHMvQXNzZXRVdGlscy50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvQXNzZXRQcmV2aWV3RGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0FsYnVtUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1weC1ub25lIHEtcHQtbGdcIj5cbiAgICA8RGF0YVNvdXJjZUJ1dHRvbiA6ZGF0YVNvdXJjZXM9XCJ2aWV3TW9kZWwuZGF0YVNvdXJjZXNcIj48L0RhdGFTb3VyY2VCdXR0b24+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjb2wtNCBxLXB4LW1kXCJcbiAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiXG4gICAgPlxuICAgICAgPHEtaW1nXG4gICAgICAgIDpzcmM9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICAgIHJhdGlvPVwiMVwiXG4gICAgICAgIHYtaWY9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICA+XG4gICAgICA8L3EtaW1nPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPkFsYnVtPC9kaXY+XG4gICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPlxuICAgICAgICAgICAge3sgdmlld01vZGVsLmFsYnVtTmFtZSB9fVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJhcnRpc3RzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZXRhZGF0YS1lbnRyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXIgYXJ0aXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImdvdG9DaXJjbGUoYXJ0aXN0SWQgYXMgc3RyaW5nKVwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoYXJ0aXN0TmFtZSwgYXJ0aXN0SWQpIGluIHZpZXdNb2RlbC5hbGJ1bUFydGlzdHNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJhcnRpc3RJZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBhcnRpc3ROYW1lIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3JcbiAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgc3BhY2VkXG4gICAgICAgICAgICA+PC9xLXNlcGFyYXRvcj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cInJlbGVhc2UtZGF0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWV0YWRhdGEtZW50cnlcIlxuICAgICAgICAgICAgICB2LWlmPVwidmlld01vZGVsLnJlbGVhc2VEYXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgICAge3sgdmlld01vZGVsLnJlbGVhc2VEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFsYnVtUmVhZER0byB9IGZyb20gJ2JhY2tlbmQtYXBpLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7XG4gIG91dGxpbmVkSW5mbyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IERhdGFTb3VyY2VCdXR0b24gZnJvbSAnLi4vRGF0YVNvdXJjZUJ0bi9EYXRhU291cmNlQnV0dG9uLnZ1ZSc7XG5cbmludGVyZmFjZSBBbGJ1bUluZm9TZWN0aW9uUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCB7XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xuICAvLyBBcnRpc3QgaWQgLT4gYXJ0aXN0IG5hbWUsIGlkIG5lZWRlZCBmb3IgbmF2aWdhdGlvblxuICBhbGJ1bUFydGlzdHM6IHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYWxidW1Db3ZlclVybDogc3RyaW5nIHwgbnVsbDtcblxuICByZWxlYXNlRGF0ZTogRGF0ZSB8IG51bGw7XG5cbiAgLy8gRGF0YSBwcm92aWRlcnNcbiAgZGF0YVNvdXJjZXM6IHN0cmluZ1tdO1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtSW5mb1NlY3Rpb25Qcm9wcz4oKTtcbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoKTogQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IGFsYnVtQXJ0aXN0cyA9IHByb3BzLmFsYnVtLmFsYnVtQXJ0aXN0Py5yZWR1Y2UoKGFjYywgYXJ0aXN0KSA9PiB7XG4gICAgYWNjW2FydGlzdC5pZCFdID0gYXJ0aXN0Lm5hbWUhO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfSk7XG5cbiAgY29uc29sZS5sb2coJ2FsYnVtQXJ0aXN0cycsIGFsYnVtQXJ0aXN0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGJ1bU5hbWU6IHByb3BzLmFsYnVtLm5hbWU/Ll9kZWZhdWx0IHx8ICcnLFxuICAgIGFsYnVtQXJ0aXN0cyxcbiAgICBhbGJ1bUNvdmVyVXJsOiBwcm9wcy5hbGJ1bS50aHVtYm5haWw/LmxhcmdlPy51cmwgfHwgbnVsbCxcbiAgICByZWxlYXNlRGF0ZTogcHJvcHMuYWxidW0ucmVsZWFzZURhdGUgfHwgbnVsbCxcbiAgICBkYXRhU291cmNlczogcHJvcHMuYWxidW0uZGF0YVNvdXJjZSB8fCBbXSxcbiAgfSBhcyBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsO1xufTtcblxuY29uc3Qgdmlld01vZGVsOiBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbCgpO1xuXG5jb25zdCBnb3RvQ2lyY2xlID0gKGNpcmNsZUlkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICBwYXJhbXM6IHsgY2lyY2xlSWQsIHBhZ2U6ICcxJyB9LFxuICB9KTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcsICc7XG59XG5cbi5xLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGgnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3Qgb25DbGljayA9IGV2dCA9PiB7IGVtaXQoJ2NsaWNrJywgZXZ0KSB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ3RoJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycsXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbCwgY2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sc01hcFsgbmFtZSBdXG4gICAgICAgIGlmIChjb2wgPT09IHZvaWQgMCkgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpXG4gICAgICAgICAgb25DbGljayhldnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRyJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cidcbiAgICAgICsgKHByb3BzLnByb3BzID09PSB2b2lkIDAgfHwgcHJvcHMucHJvcHMuaGVhZGVyID09PSB0cnVlID8gJycgOiAnICcgKyBwcm9wcy5wcm9wcy5fX3RyQ2xhc3MpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRyLS1uby1ob3ZlcicgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndHInLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHMucHJvcHNcblxuICAgICAgcmV0dXJuIGgoJ3RkJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArIGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0UHJvcFxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXNpemUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogNixcbiAgbGc6IDEwLFxuICB4bDogMTRcbn1cblxuZnVuY3Rpb24gd2lkdGggKHZhbCwgcmV2ZXJzZSwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHJldmVyc2UgPT09IHRydWVcbiAgICAgID8gYHRyYW5zbGF0ZVgoJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnLScgOiAnJyB9MTAwJSkgc2NhbGUzZCgkeyAtdmFsIH0sMSwxKWBcbiAgICAgIDogYHNjYWxlM2QoJHsgdmFsIH0sMSwxKWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpbmVhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgYnVmZmVyOiBOdW1iZXIsXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgc3RyaXBlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAyMTAwXG4gICAgfSxcblxuICAgIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBtb3Rpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlKVxuICAgIGNvbnN0IHdpZHRoUmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnJldmVyc2UgIT09IHByb3BzLnF1ZXJ5KVxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLihzaXplU3R5bGUudmFsdWUgIT09IG51bGwgPyBzaXplU3R5bGUudmFsdWUgOiB7fSksXG4gICAgICAnLS1xLWxpbmVhci1wcm9ncmVzcy1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzcydcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUgPyAnIHEtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcm91bmRlZC1ib3JkZXJzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChwcm9wcy5idWZmZXIgIT09IHZvaWQgMCA/IHByb3BzLmJ1ZmZlciA6IDEsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdWZmaXggPSBjb21wdXRlZCgoKSA9PiBgd2l0aCR7IHByb3BzLmluc3RhbnRGZWVkYmFjayA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYClcblxuICAgIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX190cmFjayBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9YFxuICAgICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbW9kZWxTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiBwcm9wcy52YWx1ZSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgbW9kZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyBtb3Rpb24udmFsdWUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYFxuICAgIClcblxuICAgIGNvbnN0IHN0cmlwZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHsgd2lkdGg6IGAkeyBwcm9wcy52YWx1ZSAqIDEwMCB9JWAgfSkpXG4gICAgY29uc3Qgc3RyaXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUgYWJzb2x1dGUtJHsgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBtb2RlbENsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBtb2RlbFN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLnN0cmlwZSA9PT0gdHJ1ZSAmJiBtb3Rpb24udmFsdWUgPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc3RyaXBlQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHN0cmlwZVN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiAxLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWVcbiAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgIDogcHJvcHMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY2hpbGQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3BsdWdpbnMvcHJpdmF0ZS5oaXN0b3J5L0hpc3RvcnkuanMnXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5cbmxldCBjb3VudGVyID0gMFxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlblByb3BzID0ge1xuICBmdWxsc2NyZWVuOiBCb29sZWFuLFxuICBub1JvdXRlRnVsbHNjcmVlbkV4aXQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5FbWl0cyA9IFsgJ3VwZGF0ZTpmdWxsc2NyZWVuJywgJ2Z1bGxzY3JlZW4nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSB2bVxuXG4gIGxldCBoaXN0b3J5RW50cnksIGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBjb250YWluZXJcbiAgY29uc3QgaW5GdWxsc2NyZWVuID0gcmVmKGZhbHNlKVxuXG4gIHZtSGFzUm91dGVyKHZtKSA9PT0gdHJ1ZSAmJiB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICBwcm9wcy5ub1JvdXRlRnVsbHNjcmVlbkV4aXQgIT09IHRydWUgJiYgZXhpdEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHYpIHtcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfSlcblxuICB3YXRjaChpbkZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdilcbiAgICBlbWl0KCdmdWxsc2NyZWVuJywgdilcbiAgfSlcblxuICBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBleGl0RnVsbHNjcmVlbigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RnVsbHNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSB0cnVlXG4gICAgY29udGFpbmVyID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBwcm94eS4kZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm94eS4kZWwpXG5cbiAgICBjb3VudGVyKytcbiAgICBpZiAoY291bnRlciA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuICAgIH1cblxuICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGhhbmRsZXI6IGV4aXRGdWxsc2NyZWVuXG4gICAgfVxuICAgIEhpc3RvcnkuYWRkKGhpc3RvcnlFbnRyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB0cnVlKSByZXR1cm5cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnNvcnQvc29ydC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc0RhdGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVNvcnRQcm9wcyA9IHtcbiAgc29ydE1ldGhvZDogRnVuY3Rpb24sXG4gIGJpbmFyeVN0YXRlU29ydDogQm9vbGVhbixcbiAgY29sdW1uU29ydE9yZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID09PSAnYWQnIHx8IHYgPT09ICdkYScsXG4gICAgZGVmYXVsdDogJ2FkJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVNvcnQgKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pIHtcbiAgY29uc3QgY29sdW1uVG9Tb3J0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5IH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBzb3J0QnlcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gc29ydEJ5KSB8fCBudWxsXG4gICAgICA6IG51bGxcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZFNvcnRNZXRob2QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc29ydE1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnNvcnRNZXRob2RcbiAgICAgIDogKGRhdGEsIHNvcnRCeSwgZGVzY2VuZGluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSlcbiAgICAgICAgICBpZiAoY29sID09PSB2b2lkIDAgfHwgY29sLmZpZWxkID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGRpciA9IGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEsXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgID8gdiA9PiBjb2wuZmllbGQodilcbiAgICAgICAgICAgICAgOiB2ID0+IHZbIGNvbC5maWVsZCBdXG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgQSA9IHZhbChhKSxcbiAgICAgICAgICAgICAgQiA9IHZhbChiKVxuXG4gICAgICAgICAgICBpZiAoY29sLnJhd1NvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnJhd1NvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBID09PSBudWxsIHx8IEEgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gLTEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCID09PSBudWxsIHx8IEIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5zb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgLy8gZ2V0cyBjYWxsZWQgd2l0aG91dCByb3dzIHRoYXQgaGF2ZSBudWxsL3VuZGVmaW5lZCBhcyB2YWx1ZVxuICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGFib3ZlIHR3byBzdGF0ZW1lbnRzXG4gICAgICAgICAgICAgIHJldHVybiBjb2wuc29ydChBLCBCLCBhLCBiKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKEEpID09PSB0cnVlICYmIGlzTnVtYmVyKEIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEYXRlKEEpID09PSB0cnVlICYmIGlzRGF0ZShCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc29ydERhdGUoQSwgQikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgQSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBCID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChBIC0gQikgKiBkaXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgWyBBLCBCIF0gPSBbIEEsIEIgXS5tYXAocyA9PiAocyArICcnKS50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHJldHVybiBBIDwgQlxuICAgICAgICAgICAgICA/IC0xICogZGlyXG4gICAgICAgICAgICAgIDogKEEgPT09IEIgPyAwIDogZGlyKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgKSlcblxuICBmdW5jdGlvbiBzb3J0IChjb2wgLyogU3RyaW5nKGNvbCBuYW1lKSBvciBPYmplY3QoY29sIGRlZmluaXRpb24pICovKSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IHByb3BzLmNvbHVtblNvcnRPcmRlclxuXG4gICAgaWYgKGlzT2JqZWN0KGNvbCkgPT09IHRydWUpIHtcbiAgICAgIGlmIChjb2wuc29ydE9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IGNvbC5zb3J0T3JkZXJcbiAgICAgIH1cblxuICAgICAgY29sID0gY29sLm5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBkZWYgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBjb2wpXG4gICAgICBpZiAoZGVmICE9PSB2b2lkIDAgJiYgZGVmLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWYuc29ydE9yZGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGlmIChzb3J0QnkgIT09IGNvbCkge1xuICAgICAgc29ydEJ5ID0gY29sXG4gICAgICBkZXNjZW5kaW5nID0gc29ydE9yZGVyID09PSAnZGEnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmJpbmFyeVN0YXRlU29ydCA9PT0gdHJ1ZSkge1xuICAgICAgZGVzY2VuZGluZyA9ICFkZXNjZW5kaW5nXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlc2NlbmRpbmcgPT09IHRydWUpIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09ICdhZCcpIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHsgLy8gYXNjZW5kaW5nXG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFBhZ2luYXRpb24oeyBzb3J0QnksIGRlc2NlbmRpbmcsIHBhZ2U6IDEgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29sdW1uVG9Tb3J0LFxuICAgIGNvbXB1dGVkU29ydE1ldGhvZCxcbiAgICBzb3J0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2sgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUZpbHRlclByb3BzID0ge1xuICBmaWx0ZXI6IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgZmlsdGVyTWV0aG9kOiBGdW5jdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVGaWx0ZXIgKHByb3BzLCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbXB1dGVkRmlsdGVyTWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmZpbHRlck1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLmZpbHRlck1ldGhvZFxuICAgICAgOiAocm93cywgdGVybXMsIGNvbHMsIGNlbGxWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyVGVybXMgPSB0ZXJtcyA/IHRlcm1zLnRvTG93ZXJDYXNlKCkgOiAnJ1xuICAgICAgICAgIHJldHVybiByb3dzLmZpbHRlcihcbiAgICAgICAgICAgIHJvdyA9PiBjb2xzLnNvbWUoY29sID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gY2VsbFZhbHVlKGNvbCwgcm93KSArICcnXG4gICAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gKHZhbCA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsID09PSAnbnVsbCcpID8gJycgOiB2YWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihsb3dlclRlcm1zKSAhPT0gLTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICkpXG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gcHJvcHMuZmlsdGVyLFxuICAgICgpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgcmV0dXJuIHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBzYW1lUGFnaW5hdGlvbiAob2xkUGFnLCBuZXdQYWcpIHtcbiAgZm9yIChjb25zdCBwcm9wIGluIG5ld1BhZykge1xuICAgIGlmIChuZXdQYWdbIHByb3AgXSAhPT0gb2xkUGFnWyBwcm9wIF0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaXhQYWdpbmF0aW9uIChwKSB7XG4gIGlmIChwLnBhZ2UgPCAxKSB7XG4gICAgcC5wYWdlID0gMVxuICB9XG4gIGlmIChwLnJvd3NQZXJQYWdlICE9PSB2b2lkIDAgJiYgcC5yb3dzUGVyUGFnZSA8IDEpIHtcbiAgICBwLnJvd3NQZXJQYWdlID0gMFxuICB9XG4gIHJldHVybiBwXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyA9IHtcbiAgcGFnaW5hdGlvbjogT2JqZWN0LFxuICByb3dzUGVyUGFnZU9wdGlvbnM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiAoKSA9PiBbIDUsIDcsIDEwLCAxNSwgMjAsIDI1LCA1MCwgMCBdXG4gIH0sXG5cbiAgJ29uVXBkYXRlOnBhZ2luYXRpb24nOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSAodm0sIGdldENlbGxWYWx1ZSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0IH0gPSB2bVxuXG4gIGNvbnN0IGlubmVyUGFnaW5hdGlvbiA9IHJlZihcbiAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNvcnRCeTogbnVsbCxcbiAgICAgIGRlc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogMSxcbiAgICAgIHJvd3NQZXJQYWdlOiBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMubGVuZ3RoICE9PSAwXG4gICAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zWyAwIF1cbiAgICAgICAgOiA1XG4gICAgfSwgcHJvcHMucGFnaW5hdGlvbilcbiAgKVxuXG4gIGNvbnN0IGNvbXB1dGVkUGFnaW5hdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwYWcgPSBwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMFxuICAgICAgPyB7IC4uLmlubmVyUGFnaW5hdGlvbi52YWx1ZSwgLi4ucHJvcHMucGFnaW5hdGlvbiB9XG4gICAgICA6IGlubmVyUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgcmV0dXJuIGZpeFBhZ2luYXRpb24ocGFnKVxuICB9KVxuXG4gIGNvbnN0IGlzU2VydmVyU2lkZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyICE9PSB2b2lkIDApXG5cbiAgZnVuY3Rpb24gc2VuZFNlcnZlclJlcXVlc3QgKHBhZ2luYXRpb24pIHtcbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24oe1xuICAgICAgcGFnaW5hdGlvbixcbiAgICAgIGZpbHRlcjogcHJvcHMuZmlsdGVyXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbiAocHJvcCA9IHt9KSB7XG4gICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgZW1pdCgncmVxdWVzdCcsIHtcbiAgICAgICAgcGFnaW5hdGlvbjogcHJvcC5wYWdpbmF0aW9uIHx8IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgZmlsdGVyOiBwcm9wLmZpbHRlciB8fCBwcm9wcy5maWx0ZXIsXG4gICAgICAgIGdldENlbGxWYWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFnaW5hdGlvbiAodmFsLCBmb3JjZVNlcnZlclJlcXVlc3QpIHtcbiAgICBjb25zdCBuZXdQYWdpbmF0aW9uID0gZml4UGFnaW5hdGlvbih7XG4gICAgICAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAuLi52YWxcbiAgICB9KVxuXG4gICAgaWYgKHNhbWVQYWdpbmF0aW9uKGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSwgbmV3UGFnaW5hdGlvbikgPT09IHRydWUpIHtcbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgJiYgZm9yY2VTZXJ2ZXJSZXF1ZXN0ID09PSB0cnVlKSB7XG4gICAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMucGFnaW5hdGlvbiAhPT0gdm9pZCAwXG4gICAgICAmJiBwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMFxuICAgICkge1xuICAgICAgZW1pdCgndXBkYXRlOnBhZ2luYXRpb24nLCBuZXdQYWdpbmF0aW9uKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbi52YWx1ZSA9IG5ld1BhZ2luYXRpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICBjb21wdXRlZFBhZ2luYXRpb24sXG4gICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgIHNldFBhZ2luYXRpb25cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uICh2bSwgaW5uZXJQYWdpbmF0aW9uLCBjb21wdXRlZFBhZ2luYXRpb24sIGlzU2VydmVyU2lkZSwgc2V0UGFnaW5hdGlvbiwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyKSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgY29uc3QgY29tcHV0ZWRSb3dzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciB8fCAwXG4gICAgICA6IGZpbHRlcmVkU29ydGVkUm93c051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGZpcnN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIChwYWdlIC0gMSkgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGxhc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gcGFnZSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgaXNGaXJzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA9PT0gMSlcblxuICBjb25zdCBwYWdlc051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgPT09IDBcbiAgICAgID8gMVxuICAgICAgOiBNYXRoLm1heChcbiAgICAgICAgMSxcbiAgICAgICAgTWF0aC5jZWlsKGNvbXB1dGVkUm93c051bWJlci52YWx1ZSAvIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgIClcbiAgKSlcblxuICBjb25zdCBpc0xhc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGxhc3RSb3dJbmRleC52YWx1ZSA9PT0gMFxuICAgICAgPyB0cnVlXG4gICAgICA6IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID49IHBhZ2VzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgb3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5pbmNsdWRlcyhpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1xuICAgICAgOiBbIGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSBdLmNvbmNhdChwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMpXG5cbiAgICByZXR1cm4gb3B0cy5tYXAoY291bnQgPT4gKHtcbiAgICAgIGxhYmVsOiBjb3VudCA9PT0gMCA/ICRxLmxhbmcudGFibGUuYWxsUm93cyA6ICcnICsgY291bnQsXG4gICAgICB2YWx1ZTogY291bnRcbiAgICB9KSlcbiAgfSlcblxuICB3YXRjaChwYWdlc051bWJlciwgKGxhc3RQYWdlLCBvbGRMYXN0UGFnZSkgPT4ge1xuICAgIGlmIChsYXN0UGFnZSA9PT0gb2xkTGFzdFBhZ2UpIHJldHVyblxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoICE9PSAwICYmIGNvbXB1dGVkUm93cy52YWx1ZS5ldmVyeShcbiAgICAgIHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWVcbiAgICApXG4gIClcblxuICBjb25zdCBzb21lUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGxSb3dzU2VsZWN0ZWQudmFsdWUgIT09IHRydWVcbiAgICAmJiBjb21wdXRlZFJvd3MudmFsdWUuc29tZShyb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlKVxuICApXG5cbiAgY29uc3Qgcm93c1NlbGVjdGVkTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQubGVuZ3RoKVxuXG4gIGZ1bmN0aW9uIGlzUm93U2VsZWN0ZWQgKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RlZEtleXMudmFsdWVbIGtleSBdID09PSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoKSB7XG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgW10pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKGtleXMsIHJvd3MsIGFkZGVkLCBldnQpIHtcbiAgICBlbWl0KCdzZWxlY3Rpb24nLCB7IHJvd3MsIGFkZGVkLCBrZXlzLCBldnQgfSlcblxuICAgIGNvbnN0IHBheWxvYWQgPSBzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgID8gKGFkZGVkID09PSB0cnVlID8gcm93cyA6IFtdKVxuICAgICAgOiAoXG4gICAgICAgICAgYWRkZWQgPT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuc2VsZWN0ZWQuY29uY2F0KHJvd3MpXG4gICAgICAgICAgICA6IHByb3BzLnNlbGVjdGVkLmZpbHRlcihcbiAgICAgICAgICAgICAgcm93ID0+IGtleXMuaW5jbHVkZXMoZ2V0Um93S2V5LnZhbHVlKHJvdykpID09PSBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBwYXlsb2FkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICBpc1Jvd1NlbGVjdGVkLFxuICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgIHVwZGF0ZVNlbGVjdGlvblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRWYWwgKHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgPyB2YWwuc2xpY2UoKVxuICAgIDogW11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kUHJvcHMgPSB7XG4gIGV4cGFuZGVkOiBBcnJheSAvLyB2LW1vZGVsOmV4cGFuZGVkXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzID0gWyAndXBkYXRlOmV4cGFuZGVkJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd0V4cGFuZCAocHJvcHMsIGVtaXQpIHtcbiAgY29uc3QgaW5uZXJFeHBhbmRlZCA9IHJlZihnZXRWYWwocHJvcHMuZXhwYW5kZWQpKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmV4cGFuZGVkLCB2YWwgPT4ge1xuICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSBnZXRWYWwodmFsKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGlzUm93RXhwYW5kZWQgKGtleSkge1xuICAgIHJldHVybiBpbm5lckV4cGFuZGVkLnZhbHVlLmluY2x1ZGVzKGtleSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEV4cGFuZGVkICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZXhwYW5kZWQgIT09IHZvaWQgMCkge1xuICAgICAgZW1pdCgndXBkYXRlOmV4cGFuZGVkJywgdmFsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFeHBhbmRlZCAoa2V5LCBhZGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbm5lckV4cGFuZGVkLnZhbHVlLnNsaWNlKClcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleE9mKGtleSlcblxuICAgIGlmIChhZGQgPT09IHRydWUpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goa2V5KVxuICAgICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFyZ2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzUm93RXhwYW5kZWQsXG4gICAgc2V0RXhwYW5kZWQsXG4gICAgdXBkYXRlRXhwYW5kZWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlQ29sdW1uczogQXJyYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uIChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKSB7XG4gIGNvbnN0IGNvbExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbHVtbnMgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbHVtbnNcbiAgICB9XG5cbiAgICAvLyB3ZSBpbmZlciBjb2x1bW5zIGZyb20gZmlyc3Qgcm93XG4gICAgY29uc3Qgcm93ID0gcHJvcHMucm93c1sgMCBdXG5cbiAgICByZXR1cm4gcm93ICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmtleXMocm93KS5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgYWxpZ246IGlzTnVtYmVyKHJvd1sgbmFtZSBdKSA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICAgIDogW11cbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgY29uc3QgY29scyA9IHByb3BzLnZpc2libGVDb2x1bW5zICE9PSB2b2lkIDBcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maWx0ZXIoY29sID0+IGNvbC5yZXF1aXJlZCA9PT0gdHJ1ZSB8fCBwcm9wcy52aXNpYmxlQ29sdW1ucy5pbmNsdWRlcyhjb2wubmFtZSkgPT09IHRydWUpXG4gICAgICA6IGNvbExpc3QudmFsdWVcblxuICAgIHJldHVybiBjb2xzLm1hcChjb2wgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBjb2wuYWxpZ24gfHwgJ3JpZ2h0J1xuICAgICAgY29uc3QgYWxpZ25DbGFzcyA9IGB0ZXh0LSR7IGFsaWduIH1gXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbCxcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIF9faWNvbkNsYXNzOiBgcS10YWJsZV9fc29ydC1pY29uIHEtdGFibGVfX3NvcnQtaWNvbi0tJHsgYWxpZ24gfWAsXG4gICAgICAgIF9fdGhDbGFzczogYWxpZ25DbGFzc1xuICAgICAgICAgICsgKGNvbC5oZWFkZXJDbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBjb2wuaGVhZGVyQ2xhc3NlcyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSA/ICcgc29ydGFibGUnIDogJycpXG4gICAgICAgICAgKyAoY29sLm5hbWUgPT09IHNvcnRCeSA/IGAgc29ydGVkICR7IGRlc2NlbmRpbmcgPT09IHRydWUgPyAnc29ydC1kZXNjJyA6ICcnIH1gIDogJycpLFxuXG4gICAgICAgIF9fdGRTdHlsZTogY29sLnN0eWxlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5zdHlsZSAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gY29sLnN0eWxlXG4gICAgICAgICAgICAgICAgOiBjb2wuc3R5bGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IG51bGwsXG5cbiAgICAgICAgX190ZENsYXNzOiBjb2wuY2xhc3NlcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuY2xhc3NlcyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzXG4gICAgICAgICAgICAgICAgOiByb3cgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzKHJvdylcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IGFsaWduQ2xhc3NcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IHt9XG4gICAgY29tcHV0ZWRDb2xzLnZhbHVlLmZvckVhY2goY29sID0+IHtcbiAgICAgIG5hbWVzWyBjb2wubmFtZSBdID0gY29sXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXNcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNwYW4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnRhYmxlQ29sc3BhblxuICAgICAgOiBjb21wdXRlZENvbHMudmFsdWUubGVuZ3RoICsgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgPyAxIDogMClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGNvbExpc3QsXG4gICAgY29tcHV0ZWRDb2xzLFxuICAgIGNvbXB1dGVkQ29sc01hcCxcbiAgICBjb21wdXRlZENvbHNwYW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFUaCBmcm9tICcuL1FUaC5qcydcblxuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRVmlydHVhbFNjcm9sbCBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcydcbmltcG9ydCBRU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9RU2VsZWN0LmpzJ1xuaW1wb3J0IFFMaW5lYXJQcm9ncmVzcyBmcm9tICcuLi9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzJ1xuaW1wb3J0IFFDaGVja2JveCBmcm9tICcuLi9jaGVja2JveC9RQ2hlY2tib3guanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcblxuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4vZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IGNvbW1vblZpcnRTY3JvbGxQcm9wc0xpc3QgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlRnVsbHNjcmVlbiwgeyB1c2VGdWxsc2NyZWVuUHJvcHMsIHVzZUZ1bGxzY3JlZW5FbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWZ1bGxzY3JlZW4vdXNlLWZ1bGxzY3JlZW4uanMnXG5cbmltcG9ydCB7IHVzZVRhYmxlU29ydCwgdXNlVGFibGVTb3J0UHJvcHMgfSBmcm9tICcuL3RhYmxlLXNvcnQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUZpbHRlciwgdXNlVGFibGVGaWx0ZXJQcm9wcyB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUsIHVzZVRhYmxlUGFnaW5hdGlvbiwgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLXBhZ2luYXRpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd1NlbGVjdGlvbiwgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcywgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LXNlbGVjdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93RXhwYW5kLCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzLCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctZXhwYW5kLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24sIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMnXG5cbmltcG9ydCB7IGluamVjdFByb3AsIGluamVjdE11bHRpcGxlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmluamVjdC1vYmotcHJvcC9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IGJvdHRvbUNsYXNzID0gJ3EtdGFibGVfX2JvdHRvbSByb3cgaXRlbXMtY2VudGVyJ1xuXG5jb25zdCB2aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wcyA9IHt9XG5jb21tb25WaXJ0U2Nyb2xsUHJvcHNMaXN0LmZvckVhY2gocCA9PiB7IHZpcnRTY3JvbGxQYXNzdGhyb3VnaFByb3BzWyBwIF0gPSB7fSB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvd0tleToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG4gICAgICBkZWZhdWx0OiAnaWQnXG4gICAgfSxcblxuICAgIGNvbHVtbnM6IEFycmF5LFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICBpY29uRmlyc3RQYWdlOiBTdHJpbmcsXG4gICAgaWNvblByZXZQYWdlOiBTdHJpbmcsXG4gICAgaWNvbk5leHRQYWdlOiBTdHJpbmcsXG4gICAgaWNvbkxhc3RQYWdlOiBTdHJpbmcsXG5cbiAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgaGlkZUhlYWRlcjogQm9vbGVhbixcblxuICAgIGdyaWQ6IEJvb2xlYW4sXG4gICAgZ3JpZEhlYWRlcjogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICB3cmFwQ2VsbHM6IEJvb2xlYW4sXG5cbiAgICB2aXJ0dWFsU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZpcnR1YWxTY3JvbGxUYXJnZXQ6IHt9LFxuICAgIC4uLnZpcnRTY3JvbGxQYXNzdGhyb3VnaFByb3BzLFxuXG4gICAgbm9EYXRhTGFiZWw6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNMYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmdMYWJlbDogU3RyaW5nLFxuICAgIHNlbGVjdGVkUm93c0xhYmVsOiBGdW5jdGlvbixcbiAgICByb3dzUGVyUGFnZUxhYmVsOiBTdHJpbmcsXG4gICAgcGFnaW5hdGlvbkxhYmVsOiBGdW5jdGlvbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZ3JleS04J1xuICAgIH0sXG5cbiAgICB0aXRsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgaGlkZUJvdHRvbTogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWRCYW5uZXI6IEJvb2xlYW4sXG4gICAgaGlkZU5vRGF0YTogQm9vbGVhbixcbiAgICBoaWRlUGFnaW5hdGlvbjogQm9vbGVhbixcblxuICAgIG9uUm93Q2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93RGJsY2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93Q29udGV4dG1lbnU6IEZ1bmN0aW9uLFxuXG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5Qcm9wcyxcblxuICAgIC4uLnVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVGaWx0ZXJQcm9wcyxcbiAgICAuLi51c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZFByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVTb3J0UHJvcHNcbiAgfSxcblxuICBlbWl0czogW1xuICAgICdyZXF1ZXN0JywgJ3ZpcnR1YWxTY3JvbGwnLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5FbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZEVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHNcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGluRnVsbHNjcmVlbiwgdG9nZ2xlRnVsbHNjcmVlbiB9ID0gdXNlRnVsbHNjcmVlbigpXG5cbiAgICBjb25zdCBnZXRSb3dLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlb2YgcHJvcHMucm93S2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMucm93S2V5XG4gICAgICAgIDogcm93ID0+IHJvd1sgcHJvcHMucm93S2V5IF1cbiAgICApKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHZpcnRTY3JvbGxSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBoYXNWaXJ0U2Nyb2xsID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ3JpZCAhPT0gdHJ1ZSAmJiBwcm9wcy52aXJ0dWFsU2Nyb2xsID09PSB0cnVlKVxuXG4gICAgY29uc3QgY2FyZERlZmF1bHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnIHEtdGFibGVfX2NhcmQnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXRhYmxlLS1zcXVhcmUnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXRhYmxlLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IF9fY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlLS0keyBwcm9wcy5zZXBhcmF0b3IgfS1zZXBhcmF0b3IgY29sdW1uIG5vLXdyYXBgXG4gICAgICArIChwcm9wcy5ncmlkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ncmlkJyA6IGNhcmREZWZhdWx0Q2xhc3MudmFsdWUpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGUtLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy53cmFwQ2VsbHMgPT09IGZhbHNlID8gJyBxLXRhYmxlLS1uby13cmFwJyA6ICcnKVxuICAgICAgKyAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlID8gJyBmdWxsc2NyZWVuIHNjcm9sbCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBfX2NvbnRhaW5lckNsYXNzLnZhbHVlICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtdGFibGUtLWxvYWRpbmcnIDogJycpXG4gICAgKVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy50YWJsZVN0eWxlICsgcHJvcHMudGFibGVDbGFzcyArIHByb3BzLnRhYmxlSGVhZGVyU3R5bGUgKyBwcm9wcy50YWJsZUhlYWRlckNsYXNzICsgX19jb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICgpID0+IHsgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKSB9XG4gICAgKVxuXG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlKHZtLCBnZXRDZWxsVmFsdWUpXG5cbiAgICBjb25zdCB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH0gPSB1c2VUYWJsZUZpbHRlcihwcm9wcywgc2V0UGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGlzUm93RXhwYW5kZWQsIHNldEV4cGFuZGVkLCB1cGRhdGVFeHBhbmRlZCB9ID0gdXNlVGFibGVSb3dFeHBhbmQocHJvcHMsIGVtaXQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IHByb3BzLnJvd3NcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSB8fCByb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkRmlsdGVyTWV0aG9kLnZhbHVlKHJvd3MsIHByb3BzLmZpbHRlciwgY29tcHV0ZWRDb2xzLnZhbHVlLCBnZXRDZWxsVmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5Ub1NvcnQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkU29ydE1ldGhvZC52YWx1ZShcbiAgICAgICAgICBwcm9wcy5yb3dzID09PSByb3dzID8gcm93cy5zbGljZSgpIDogcm93cyxcbiAgICAgICAgICBzb3J0QnksXG4gICAgICAgICAgZGVzY2VuZGluZ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjb21wdXRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZVxuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocm93c1BlclBhZ2UgIT09IDApIHtcbiAgICAgICAgaWYgKGZpcnN0Um93SW5kZXgudmFsdWUgPT09IDAgJiYgcHJvcHMucm93cyAhPT0gcm93cykge1xuICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IGxhc3RSb3dJbmRleC52YWx1ZSkge1xuICAgICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoMCwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByb3dzID0gcm93cy5zbGljZShmaXJzdFJvd0luZGV4LnZhbHVlLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3Qge1xuICAgICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgdXBkYXRlU2VsZWN0aW9uXG4gICAgfSA9IHVzZVRhYmxlUm93U2VsZWN0aW9uKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSlcblxuICAgIGNvbnN0IHsgY29sTGlzdCwgY29tcHV0ZWRDb2xzLCBjb21wdXRlZENvbHNNYXAsIGNvbXB1dGVkQ29sc3BhbiB9ID0gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24ocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSlcblxuICAgIGNvbnN0IHsgY29sdW1uVG9Tb3J0LCBjb21wdXRlZFNvcnRNZXRob2QsIHNvcnQgfSA9IHVzZVRhYmxlU29ydChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKVxuXG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RSb3dJbmRleCxcbiAgICAgIGxhc3RSb3dJbmRleCxcbiAgICAgIGlzRmlyc3RQYWdlLFxuICAgICAgaXNMYXN0UGFnZSxcbiAgICAgIHBhZ2VzTnVtYmVyLFxuICAgICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZVxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb24odm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcilcblxuICAgIGNvbnN0IG5vdGhpbmdUb0Rpc3BsYXkgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID09PSAwKVxuXG4gICAgY29uc3QgdmlydFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgY29tbW9uVmlydFNjcm9sbFByb3BzTGlzdFxuICAgICAgICAuZm9yRWFjaChwID0+IHsgYWNjWyBwIF0gPSBwcm9wc1sgcCBdIH0pXG5cbiAgICAgIGlmIChhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHByb3BzLmRlbnNlID09PSB0cnVlID8gMjggOiA0OFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0VmlydHVhbFNjcm9sbCAoKSB7XG4gICAgICBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEdyaWRCb2R5KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZGVyID0gcHJvcHMuaGlkZUhlYWRlciAhPT0gdHJ1ZSA/IGdldFRIZWFkIDogbnVsbFxuXG4gICAgICBpZiAoaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF1cbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgICAgY29uc3QgdmlydFNsb3RzID0ge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFRCb2R5VFIocHJvcHMuaXRlbSwgc2xvdHMuYm9keSwgcHJvcHMuaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDb250ZW50ID0gaCgndGJvZHknLCB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG5cbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyID09PSBudWxsXG4gICAgICAgICAgICA/ICgpID0+IHRvcENvbnRlbnRcbiAgICAgICAgICAgIDogKCkgPT4gWyBoZWFkZXIoKSBdLmNvbmNhdCh0b3BDb250ZW50KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHZpcnRTbG90cy5hZnRlciA9ICgpID0+IGgoJ3Rib2R5JywgYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoUVZpcnR1YWxTY3JvbGwsIHtcbiAgICAgICAgICByZWY6IHZpcnRTY3JvbGxSZWYsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGUsXG4gICAgICAgICAgLi4udmlydFByb3BzLnZhbHVlLFxuICAgICAgICAgIHNjcm9sbFRhcmdldDogcHJvcHMudmlydHVhbFNjcm9sbFRhcmdldCxcbiAgICAgICAgICBpdGVtczogY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICAgIHR5cGU6ICdfX3F0YWJsZScsXG4gICAgICAgICAgdGFibGVDb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWUsXG4gICAgICAgICAgb25WaXJ0dWFsU2Nyb2xsOiBvblZTY3JvbGxcbiAgICAgICAgfSwgdmlydFNsb3RzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgZ2V0VEJvZHkoKVxuICAgICAgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoaGVhZGVyKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRUYWJsZU1pZGRsZSh7XG4gICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX19taWRkbGUgc2Nyb2xsJywgcHJvcHMudGFibGVDbGFzcyBdLFxuICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZVxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICAgIGlmICh2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHZpcnRTY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG8odG9JbmRleCwgZWRnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRvSW5kZXggPSBwYXJzZUludCh0b0luZGV4LCAxMClcbiAgICAgIGNvbnN0IHJvd0VsID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKGB0Ym9keSB0cjpudGgtb2YtdHlwZSgkeyB0b0luZGV4ICsgMSB9KWApXG5cbiAgICAgIGlmIChyb3dFbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLXRhYmxlX19taWRkbGUuc2Nyb2xsJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gcm93RWwub2Zmc2V0VG9wIC0gcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydFxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZSdcblxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wXG5cbiAgICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgICBpbmRleDogdG9JbmRleCxcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgLSAxLFxuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVlNjcm9sbCAoaW5mbykge1xuICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIGluZm8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaChRTGluZWFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2xpbmVhci1wcm9ncmVzcycsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keVRSIChyb3csIGJvZHlTbG90LCBwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGtleSA9IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICBzZWxlY3RlZCA9IGlzUm93U2VsZWN0ZWQoa2V5KVxuXG4gICAgICBpZiAoYm9keVNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIHBhZ2VJbmRleCxcbiAgICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHlDZWxsID0gc2xvdHNbICdib2R5LWNlbGwnIF0sXG4gICAgICAgIGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBib2R5Q2VsbENvbCA9IHNsb3RzWyBgYm9keS1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgICBzbG90ID0gYm9keUNlbGxDb2wgIT09IHZvaWQgMCA/IGJvZHlDZWxsQ29sIDogYm9keUNlbGxcblxuICAgICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gc2xvdChnZXRCb2R5Q2VsbFNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCwgY29sIH0pKVxuICAgICAgICAgICAgOiBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgICAgICAgfSwgZ2V0Q2VsbFZhbHVlKGNvbCwgcm93KSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRCb2R5U2VsZWN0aW9uU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4IH0pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBrZXkgXSwgWyByb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGQnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHsga2V5LCBjbGFzczogeyBzZWxlY3RlZCB9IH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgncm93Q2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ3Jvd0RibGNsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdyb3dDb250ZXh0bWVudScsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RyJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHkgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgYm9keSA9IHNsb3RzLmJvZHksXG4gICAgICAgIHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXSxcbiAgICAgICAgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgIGxldCBjaGlsZCA9IGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoXG4gICAgICAgIChyb3csIHBhZ2VJbmRleCkgPT4gZ2V0VEJvZHlUUihyb3csIGJvZHksIHBhZ2VJbmRleClcbiAgICAgIClcblxuICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pLmNvbmNhdChjaGlsZClcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLmNvbmNhdChib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0Ym9keScsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG5cbiAgICAgIGRhdGEuY29scyA9IGRhdGEuY29scy5tYXAoXG4gICAgICAgIGNvbCA9PiBpbmplY3RQcm9wKHsgLi4uY29sIH0sICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShjb2wsIGRhdGEucm93KSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5Q2VsbFNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIGluamVjdFByb3AoZGF0YSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGRhdGEuY29sLCBkYXRhLnJvdykpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTZWxlY3Rpb25TY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdEJvZHlDb21tb25TY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICByb3dJbmRleDogZmlyc3RSb3dJbmRleC52YWx1ZSArIGRhdGEucGFnZUluZGV4LFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICgpID0+IGlzUm93U2VsZWN0ZWQoZGF0YS5rZXkpLFxuICAgICAgICAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBkYXRhLmtleSBdLCBbIGRhdGEucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdleHBhbmQnLFxuICAgICAgICAoKSA9PiBpc1Jvd0V4cGFuZGVkKGRhdGEua2V5KSxcbiAgICAgICAgYWRkaW5nID0+IHsgdXBkYXRlRXhwYW5kZWQoZGF0YS5rZXksIGFkZGluZykgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENlbGxWYWx1ZSAoY29sLCByb3cpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBjb2wuZmllbGQgPT09ICdmdW5jdGlvbicgPyBjb2wuZmllbGQocm93KSA6IHJvd1sgY29sLmZpZWxkIF1cbiAgICAgIHJldHVybiBjb2wuZm9ybWF0ICE9PSB2b2lkIDAgPyBjb2wuZm9ybWF0KHZhbCwgcm93KSA6IHZhbFxuICAgIH1cblxuICAgIGNvbnN0IG1hcmdpbmFsc1Njb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHBhZ2luYXRpb246IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIHBhZ2VzTnVtYmVyOiBwYWdlc051bWJlci52YWx1ZSxcbiAgICAgIGlzRmlyc3RQYWdlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgIGlzTGFzdFBhZ2U6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG5cbiAgICAgIGluRnVsbHNjcmVlbjogaW5GdWxsc2NyZWVuLnZhbHVlLFxuICAgICAgdG9nZ2xlRnVsbHNjcmVlblxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9wRGl2ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHRvcCA9IHNsb3RzLnRvcCxcbiAgICAgICAgdG9wTGVmdCA9IHNsb3RzWyAndG9wLWxlZnQnIF0sXG4gICAgICAgIHRvcFJpZ2h0ID0gc2xvdHNbICd0b3AtcmlnaHQnIF0sXG4gICAgICAgIHRvcFNlbGVjdGlvbiA9IHNsb3RzWyAndG9wLXNlbGVjdGlvbicgXSxcbiAgICAgICAgaGFzU2VsZWN0aW9uID0gaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIHRvcFNlbGVjdGlvbiAhPT0gdm9pZCAwXG4gICAgICAgICAgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMCxcbiAgICAgICAgdG9wQ2xhc3MgPSAncS10YWJsZV9fdG9wIHJlbGF0aXZlLXBvc2l0aW9uIHJvdyBpdGVtcy1jZW50ZXInXG5cbiAgICAgIGlmICh0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgWyB0b3AobWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGxldCBjaGlsZFxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkID0gdG9wU2VsZWN0aW9uKG1hcmdpbmFsc1Njb3BlLnZhbHVlKS5zbGljZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBbXVxuXG4gICAgICAgIGlmICh0b3BMZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgdG9wTGVmdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogWyAncS10YWJsZV9fdGl0bGUnLCBwcm9wcy50aXRsZUNsYXNzIF1cbiAgICAgICAgICAgICAgfSwgcHJvcHMudGl0bGUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wUmlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgICApXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIHRvcFJpZ2h0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU2VsZWN0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogYWxsUm93c1NlbGVjdGVkLnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZ2V0VEhlYWRUUigpXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3RyJywgeyBjbGFzczogJ3EtdGFibGVfX3Byb2dyZXNzJyB9LCBbXG4gICAgICAgICAgICBoKCd0aCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZVxuICAgICAgICAgICAgfSwgZ2V0UHJvZ3Jlc3MoKSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aGVhZCcsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkVFIgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgaGVhZGVyID0gc2xvdHMuaGVhZGVyLFxuICAgICAgICBoZWFkZXJDZWxsID0gc2xvdHNbICdoZWFkZXItY2VsbCcgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcihcbiAgICAgICAgICBnZXRIZWFkZXJTY29wZSh7IGhlYWRlcjogdHJ1ZSB9KVxuICAgICAgICApLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaGVhZGVyQ2VsbENvbCA9IHNsb3RzWyBgaGVhZGVyLWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICBzbG90ID0gaGVhZGVyQ2VsbENvbCAhPT0gdm9pZCAwID8gaGVhZGVyQ2VsbENvbCA6IGhlYWRlckNlbGwsXG4gICAgICAgICAgcHJvcHMgPSBnZXRIZWFkZXJTY29wZSh7IGNvbCB9KVxuXG4gICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QocHJvcHMpXG4gICAgICAgICAgOiBoKFFUaCwge1xuICAgICAgICAgICAga2V5OiBjb2wubmFtZSxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgfSwgKCkgPT4gY29sLmxhYmVsKVxuICAgICAgfSlcblxuICAgICAgaWYgKHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ncmlkICE9PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sICcgJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnaGVhZGVyLXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEhlYWRlclNjb3BlKHt9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgndHInLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlSGVhZGVyU3R5bGVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdFByb3AoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAgICgpID0+IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NdWx0aXBsZVNlbGVjdGlvblNldCAodmFsKSB7XG4gICAgICBpZiAoc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoZ2V0Um93S2V5LnZhbHVlKSxcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICB2YWxcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZJY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUuZmlyc3RQYWdlLFxuICAgICAgICBwcm9wcy5pY29uUHJldlBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5wcmV2UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbk5leHRQYWdlIHx8ICRxLmljb25TZXQudGFibGUubmV4dFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25MYXN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmxhc3RQYWdlXG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJvdHRvbURpdiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZUJvdHRvbSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgIGlmIChub3RoaW5nVG9EaXNwbGF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5oaWRlTm9EYXRhID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgID8gcHJvcHMubG9hZGluZ0xhYmVsIHx8ICRxLmxhbmcudGFibGUubG9hZGluZ1xuICAgICAgICAgIDogKHByb3BzLmZpbHRlciA/IHByb3BzLm5vUmVzdWx0c0xhYmVsIHx8ICRxLmxhbmcudGFibGUubm9SZXN1bHRzIDogcHJvcHMubm9EYXRhTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub0RhdGEpXG5cbiAgICAgICAgY29uc3Qgbm9EYXRhID0gc2xvdHNbICduby1kYXRhJyBdXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9EYXRhICE9PSB2b2lkIDBcbiAgICAgICAgICA/IFsgbm9EYXRhKHsgbWVzc2FnZSwgaWNvbjogJHEuaWNvblNldC50YWJsZS53YXJuaW5nLCBmaWx0ZXI6IHByb3BzLmZpbHRlciB9KSBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1ub2RhdGEtaWNvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS53YXJuaW5nXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBxLXRhYmxlX19ib3R0b20tLW5vZGF0YScgfSwgY2hpbGRyZW4pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdHRvbSA9IHNsb3RzLmJvdHRvbVxuXG4gICAgICBpZiAoYm90dG9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIFsgYm90dG9tKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmhpZGVTZWxlY3RlZEJhbm5lciAhPT0gdHJ1ZSAmJiBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgKHByb3BzLnNlbGVjdGVkUm93c0xhYmVsIHx8ICRxLmxhbmcudGFibGUuc2VsZWN0ZWRSZWNvcmRzKShyb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMuaGlkZVBhZ2luYXRpb24gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogYm90dG9tQ2xhc3MgKyAnIGp1c3RpZnktZW5kJ1xuICAgICAgICB9LCBnZXRQYWdpbmF0aW9uRGl2KGNoaWxkKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgY2hpbGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdTZWxlY3Rpb24gKHBhZykge1xuICAgICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHJvd3NQZXJQYWdlOiBwYWcudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbkRpdiAoY2hpbGQpIHtcbiAgICAgIGxldCBjb250cm9sXG4gICAgICBjb25zdFxuICAgICAgICB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIHBhZ2luYXRpb25MYWJlbCA9IHByb3BzLnBhZ2luYXRpb25MYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnBhZ2luYXRpb24sXG4gICAgICAgIHBhZ2luYXRpb25TbG90ID0gc2xvdHMucGFnaW5hdGlvbixcbiAgICAgICAgaGFzT3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgKVxuXG4gICAgICBpZiAoaGFzT3B0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9LCBbXG4gICAgICAgICAgICAgIHByb3BzLnJvd3NQZXJQYWdlTGFiZWwgfHwgJHEubGFuZy50YWJsZS5yZWNvcmRzUGVyUGFnZVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBoKFFTZWxlY3QsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19zZWxlY3QgaW5saW5lIHEtdGFibGVfX2JvdHRvbS1pdGVtJyxcbiAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcm93c1BlclBhZ2UgPT09IDBcbiAgICAgICAgICAgICAgICA/ICRxLmxhbmcudGFibGUuYWxsUm93c1xuICAgICAgICAgICAgICAgIDogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNEZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0NvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uUGFnU2VsZWN0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRpb25TbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29udHJvbCA9IHBhZ2luYXRpb25TbG90KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRyb2wgPSBbXG4gICAgICAgICAgaCgnc3BhbicsIHJvd3NQZXJQYWdlICE9PSAwID8geyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9IDoge30sIFtcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlXG4gICAgICAgICAgICAgID8gcGFnaW5hdGlvbkxhYmVsKGZpcnN0Um93SW5kZXgudmFsdWUgKyAxLCBNYXRoLm1pbihsYXN0Um93SW5kZXgudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSksIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgOiBwYWdpbmF0aW9uTGFiZWwoMSwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCAmJiBwYWdlc051bWJlci52YWx1ZSA+IDEpIHtcbiAgICAgICAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBmbGF0OiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzLmRlbnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBidG5Qcm9wcy5zaXplID0gJ3NtJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdGaXJzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAwIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBmaXJzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnUHJldicsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAxIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBwcmV2UGFnZVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ05leHQnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMiBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBuZXh0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTGFzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAzIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGxhc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgY29udHJvbClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmdyaWRIZWFkZXIgPT09IHRydWVcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBbXG4gICAgICAgICAgICAgIGdldFRIZWFkKGgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IGdldFByb2dyZXNzKGgpXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX21pZGRsZScgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEJvZHkgKCkge1xuICAgICAgY29uc3QgaXRlbSA9IHNsb3RzLml0ZW0gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLml0ZW1cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBzY29wZS5jb2xzLm1hcChcbiAgICAgICAgICAgIGNvbCA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXRpdGxlJyB9LCBbIGNvbC5sYWJlbCBdKSxcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS12YWx1ZScgfSwgWyBjb2wudmFsdWUgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gc2xvdChzY29wZSlcbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzY29wZS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBzY29wZS5rZXkgXSwgWyBzY29wZS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgY29udGVudCksXG4gICAgICAgICAgICAgIGgoUVNlcGFyYXRvciwgeyBkYXJrOiBpc0RhcmsudmFsdWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgJ3EtdGFibGVfX2dyaWQtaXRlbS1jYXJkJyArIGNhcmREZWZhdWx0Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHByb3BzLmNhcmRDbGFzc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICAgIHx8IHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YS5jbGFzc1sgMCBdICs9ICcgY3Vyc29yLXBvaW50ZXInXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbSBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMnXG4gICAgICAgICAgICAgICsgKHNjb3BlLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLXRhYmxlX19ncmlkLWl0ZW0tLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJsZV9fZ3JpZC1jb250ZW50IHJvdycsXG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRhaW5lckNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkQ29udGFpbmVyU3R5bGVcbiAgICAgIH0sIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoKHJvdywgcGFnZUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtKGdldEJvZHlTY29wZSh7XG4gICAgICAgICAga2V5OiBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgcGFnZUluZGV4XG4gICAgICAgIH0pKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzIGFuZCBuZWVkZWQgY29tcHV0ZWQgcHJvcHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgaXNSb3dFeHBhbmRlZCxcbiAgICAgIHNldEV4cGFuZGVkLFxuICAgICAgc29ydCxcbiAgICAgIHJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHNjcm9sbFRvLFxuICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgfSlcblxuICAgIGluamVjdE11bHRpcGxlUHJvcHModm0ucHJveHksIHtcbiAgICAgIGZpbHRlcmVkU29ydGVkUm93czogKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzOiAoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXI6ICgpID0+IGNvbXB1dGVkUm93c051bWJlci52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbIGdldFRvcERpdigpIF1cbiAgICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNvbnRhaW5lckNsYXNzLnZhbHVlIH1cblxuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChnZXRHcmlkSGVhZGVyKCkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgY2xhc3M6IFsgZGF0YS5jbGFzcywgcHJvcHMuY2FyZENsYXNzIF0sXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBnZXRCb2R5KCksXG4gICAgICAgIGdldEJvdHRvbURpdigpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0cmFjay1saXN0LXRhYmxlIHJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCI+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCJbZGlzYywgdHJhY2tzXSBpbiBwcm9wcy50cmFja3MuZW50cmllcygpXCJcbiAgICAgIHYtYmluZDprZXk9XCJkaXNjLmlkIVwiXG4gICAgICBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWQgcS1wYi1sZ1wiXG4gICAgPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgOnJvd3M9XCJ0cmFja3NcIlxuICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgdmlydHVhbC1zY3JvbGxcbiAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGhcbiAgICAgICAgICAgICAgdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJjb2wubmFtZVwiXG4gICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItYm90dG9tLXRoaW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgIDwvcS10aD5cbiAgICAgICAgICA8L3EtdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaW5kZXg9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICBjbGFzcz1cInEtcGEtc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIHNpemU9XCIxM3B4XCJcbiAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cImhvdmVyaW5nV2hpY2ggPSBwcm9wcy5rZXlcIlxuICAgICAgICAgICAgICBAbW91c2VsZWF2ZT1cImhvdmVyaW5nV2hpY2ggPSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy5rZXkgPyBwcm9wcy52YWx1ZSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMua2V5ID8gb3V0bGluZWRQbGF5QXJyb3cgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrQnlJZChwcm9wcy5rZXksIFF1ZXVlQWRkTW9kZS5QTEFZX0lNTUVESUFURUxZKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC10aXRsZT1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmUtb24taG92ZXIgcG9pbnRlci1vbi1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgdi1mb3I9XCJwcm9wIGluIHByb3BzLnZhbHVlXCJcbiAgICAgICAgICAgICAgOmtleT1cInByb3AuaWRcIlxuICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZ29Ub09yaWdpbmFsVHJhY2tQYWdlKHByb3AuaWQpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgcHJvcC50aXRsZS5lbiB9fVxuICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgcHJvcHMudmFsdWVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgIDxUcmFja01lbnUgOm9wdGlvbnM9XCJ0cmFja01lbnVPcHRpb25zQ3JlYXRvcihwcm9wcy5yb3csIGRpc2MpXCI+PC9UcmFja01lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG91dGxpbmVkUGxheUFycm93IH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBRVGFibGUgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0LCByZWYsIFRyYWNrT3BUeXBlcyB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBUcmFja01lbnUgZnJvbSAnLi4vTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51LnZ1ZSc7XG5pbXBvcnQgVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIgZnJvbSAnLi4vTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvVHJhY2tNZW51T3B0aW9uQnVpbGRlcic7XG5cbmludGVyZmFjZSBUcmFja0xpc3RUYWJsZVByb3BzIHtcbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaG92ZXJpbmdXaGljaCA9IHJlZjxudW1iZXI+KCk7XG5cbi8vIE1lbnUgb3B0aW9uc1xuY29uc3QgdHJhY2tNZW51T3B0aW9uc0NyZWF0b3IgPSAodHJhY2s6IFRyYWNrUmVhZER0bywgYWxidW06IEFsYnVtUmVhZER0bykgPT5cbiAgbmV3IFRyYWNrTWVudU9wdGlvbnNCdWlsZGVyKHRyYWNrLCBhbGJ1bSlcbiAgICAuYWRkUGxheU5leHRPcHRpb24oKVxuICAgIC5hZGRBZGRUb1F1ZXVlT3B0aW9uKClcbiAgICAuYWRkU2VhcmNoT25Zb3V0dWJlT3B0aW9uKClcbiAgICAuYnVpbGQoKTtcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWUsXG59O1xuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWg0JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3JpZ2luYWwnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5vcmlnaW5hbCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT5cbiAgICAgIGAke0R1cmF0aW9uLmZyb21EdXJhdGlvblN0cmluZyh2YWwpLnRvRHVyYXRpb25TdHJpbmcoKX1gLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8VHJhY2tMaXN0VGFibGVQcm9wcz4oKTtcblxuY29uc3QgZ29Ub09yaWdpbmFsVHJhY2tQYWdlID0gKG9yaWdpbmFsVHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ09yaWdpbmFsVHJhY2snLFxuICAgIHBhcmFtczogeyBvcmlnaW5hbElkOiBvcmlnaW5hbFRyYWNrSWQsIHBhZ2U6IDEgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBBc3NldFJlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRVdGlscyB7XG4gIHN0YXRpYyBkb3dubG9hZEFzc2V0KGFzc2V0OiBBc3NldFJlYWREdG8pOiB2b2lkIHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9IGAke2Fzc2V0LnVybH0/ZG93bmxvYWQ9dHJ1ZWA7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBhLmNsaWNrKCk7XG4gIH1cblxuICBzdGF0aWMgb3BlbkFzc2V0SW5OZXdUYWIoYXNzZXQ6IEFzc2V0UmVhZER0byk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKGFzc2V0LnVybCwgJ19ibGFuaycpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDUwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAxMjAwcHg7IG1heC13aWR0aDogODB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtdG9vbGJhciBjbGFzcz1cImJnLXByaW1hcnlcIj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICBQcmV2aWV3IG9mIHt7IHByb3BzLmFzc2V0Lm5hbWUgfX1cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMuZG93bmxvYWRBc3NldChwcm9wcy5hc3NldClcIlxuICAgICAgICA+XG4gICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICA6c3JjPVwicHJvcHMuYXNzZXQudXJsXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgID5cbiAgICAgICAgPC9pZnJhbWU+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdCc7XG5pbXBvcnQgQXNzZXRVdGlscyBmcm9tICdzcmMvdXRpbHMvQXNzZXRVdGlscyc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBhc3NldDogQXNzZXRSZWFkRHRvO1xufT4oKTtcbjwvc2NyaXB0PlxuIiwiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdW51c2VkLXZhcnMgLS0+XG48dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDUwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAxMjAwcHg7IG1heC13aWR0aDogODB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkFsYnVtIEFzc2V0czwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgdi1pZj1cImFsYnVtQXNzZXRzLmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8cS10YWJsZVxuICAgICAgICAgIDpyb3dzPVwiYWxidW1Bc3NldHNcIlxuICAgICAgICAgIDpjb2x1bW5zPVwidGFibGVDb2x1bW5zXCJcbiAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5PVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLXRyIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwiaWRcIlxuICAgICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5pZCB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgcHJvcHMucm93Lm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuXG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwic2l6ZVwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgKHByb3BzLnJvdy5zaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMikgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuXG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwibWltZS10eXBlXCJcbiAgICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cubWltZSB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG5cbiAgICAgICAgICAgICAgPHEtbWVudSB0b3VjaC1wb3NpdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwcmV2aWV3QXNzZXQocHJvcHMucm93KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPW1hdFByZXZpZXcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+UHJldmlldzwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMub3BlbkFzc2V0SW5OZXdUYWIocHJvcHMucm93KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPW1hdE9wZW5Jbk5ldyAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5PcGVuIGluIG5ldyB0YWI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMuZG93bmxvYWRBc3NldChwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249bWF0RmlsZURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkRvd25sb2FkPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtdHI+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wYi1ub25lXCJcbiAgICAgICAgdi1lbHNlXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtY2VudGVyXCI+Tm8gYXNzZXRzIGZvdW5kPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBtYXRGaWxlRG93bmxvYWQsXG4gIG1hdFByZXZpZXcsXG4gIG1hdE9wZW5Jbk5ld1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IHsgUURpYWxvZywgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCBBc3NldFByZXZpZXdEaWFsb2cgZnJvbSAnLi9Bc3NldFByZXZpZXdEaWFsb2cudnVlJztcbmltcG9ydCBBc3NldFV0aWxzIGZyb20gJ3NyYy91dGlscy9Bc3NldFV0aWxzJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuaW50ZXJmYWNlIEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHM+KCk7XG5cbmNvbnN0IGFsYnVtQXNzZXRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcHJvcHMuYWxidW0ub3RoZXJGaWxlcyE7XG59KTtcblxuY29uc3QgcHJldmlld0Fzc2V0ID0gKGFzc2V0OiBBc3NldFJlYWREdG8pID0+IHtcbiAgY29uc29sZS5sb2coJ1ByZXZpZXcgYXNzZXQnLCBhc3NldCk7XG5cbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IEFzc2V0UHJldmlld0RpYWxvZyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgYXNzZXRcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdGFibGVDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2lkJyxcbiAgICBsYWJlbDogJ0Fzc2V0IElEJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmlkXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmFtZScsXG4gICAgbGFiZWw6ICdOYW1lJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5uYW1lXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc2l6ZScsXG4gICAgbGFiZWw6ICdTaXplIChNQiknLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cuc2l6ZSxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7KHZhbCAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpfWBcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtaW1lLXR5cGUnLFxuICAgIGxhYmVsOiAnQ29udGVudCBUeXBlJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93Lm1pbWVcbiAgfVxuXTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJjb250cm9sbGVyXCI+XG4gICAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICAgIDxxLXNwaW5uZXItZ2VhcnMgc2l6ZT1cIjEwMHB4XCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICAgIDxBbGJ1bUluZm9TZWN0aW9uIDphbGJ1bT1cImRhdGEhLm1hc3RlckFsYnVtXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbC1hbGwgcS1tdC1sZyBhbGJ1bS1wYWdlLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgY2xhc3M9XCJwbGF5LWJ0biBxLW14LW1kXCJcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZFBsYXlBcnJvd1wiXG4gICAgICAgICAgICAgIEBjbGljaz1cInBsYXlBbGJ1bShkYXRhISwgUXVldWVBZGRNb2RlLlBMQVlfSU1NRURJQVRFTFkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxNTBweFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5BUFBFTkRfTkVYVClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5BUFBFTkRfTEFTVClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBjbGFzcz1cImxpa2UtYnRuIHEtbXgtbWRcIlxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXgtbWRcIlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIGZpdFxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImNlbnRlciBtaWRkbGVcIlxuICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgbWlkZGxlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dBbGJ1bUFzc2V0RGlhbG9nKGRhdGEhLm1hc3RlckFsYnVtKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBPdGhlciBBc3NldHM8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRWRpdE5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+QXR0cmlidXRlIEVkaXRvcjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFRyYWNrTGlzdFRhYmxlIDp0cmFja3M9XCJkYXRhIS50cmFja3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZXJyb3I9XCJ7IGVycm9yIH1cIj5cbiAgICAgICAgPHEtY2FyZFxuICAgICAgICAgIGNsYXNzPVwicS1tYS1tZFwiXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDQwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+RXJyb3I8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPkZhaWxlZCB0byBsb2FkIGFsYnVtPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgZXJyb3I/Lm1lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj57eyBlcnJvcj8uc3RhY2sgfX08L2Rpdj5cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgPHEtc2VwYXJhdG9yIGluc2V0IC8+XG5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICB7eyBlcnJvcj8uc3RhY2sgfX1cbiAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZE1vcmVIb3JpeixcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWREZXNjcmlwdGlvbixcbiAgb3V0bGluZWRFZGl0Tm90ZVxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIEFsYnVtQXBpIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCBBcGlDb25maWd1cmF0aW9uUHJvdmlkZXIgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BcGlDb25maWd1cmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgY29tcHV0ZWQsIENvbXB1dGVkUmVmLCBpbmplY3QsIG9uTW91bnRlZCwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IHsgVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEFsYnVtSW5mb1NlY3Rpb24gZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1QYWdlL0FsYnVtSW5mb1NlY3Rpb24udnVlJztcbmltcG9ydCBUcmFja0xpc3RUYWJsZSBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvVHJhY2tMaXN0VGFibGUudnVlJztcbmltcG9ydCB7IFFDYXJkLCB1c2VRdWFzYXIsIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EaWFsb2dzL0FsYnVtQXNzZXRzVmlld2VyRGlhbG9nLnZ1ZSc7XG5pbXBvcnQgUXVldWVTZXJ2aWNlLCB7IFF1ZXVlQWRkTW9kZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcblxuLy8gVmlldyBNb2RlbHNcbmludGVyZmFjZSBBbGJ1bVBhZ2VSb3V0ZVBhcmFtZXRlcnMge1xuICBhbGJ1bUlkOiBDb21wdXRlZFJlZjxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgQWxidW1QYWdlVmlld01vZGVsIHtcbiAgbWFzdGVyQWxidW06IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xuXG4gIC8vIEFsYnVtIC0+IFRyYWNrcyBpbiBBbGJ1bSwgZm9yIGVhY2ggYWxidW1cbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdC9nZXQgcmVxdWlyZWQgc2VydmNpZXNcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3Qgcm91dGVQYXJhbXMgPSB7XG4gIGFsYnVtSWQ6IGNvbXB1dGVkKCgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKSxcbn07XG5jb25zdCBjb250cm9sbGVyID0gdXNlTG9hZGFibGVDb250cm9sbGVyPEFsYnVtUGFnZVZpZXdNb2RlbD4oKTtcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvXG4pOiBBbGJ1bVBhZ2VWaWV3TW9kZWwgPT4ge1xuICBjb25zdCB0cmFja3MgPSBuZXcgTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+KCk7XG5cbiAgaWYgKG1hc3Rlci50cmFja3MpIHtcbiAgICBtYXN0ZXIudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyQWxidW06IG1hc3RlcixcbiAgICBkaXNjczogW10sXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgdHJhY2tzLnNldChtYXN0ZXIsIG1hc3Rlci50cmFja3MpO1xuICB9XG5cbiAgZGlzY3MuZm9yRWFjaCgoZGlzYykgPT4ge1xuICAgIGlmIChkaXNjLnRyYWNrcykge1xuICAgICAgLy8gU29ydCB0cmFja3MgYnkgaW5kZXhcbiAgICAgIGRpc2MudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgICAgdHJhY2tzLnNldChkaXNjLCBkaXNjLnRyYWNrcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3MsXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbCA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgaWYgKGRpc2NzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyhtYXN0ZXIsIGRpc2NzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MobWFzdGVyKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZE11bHRpRGlzY0FsYnVtID0gYXN5bmMgKFxuICBtYXN0ZXJBbGJ1bUlkOiBzdHJpbmdcbik6IFByb21pc2U8e1xuICBtYXN0ZXI6IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xufT4gPT4ge1xuICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICApO1xuXG4gIGNvbnN0IG1hc3RlckFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgIGlkOiBtYXN0ZXJBbGJ1bUlkLFxuICB9KTtcblxuICBjb25zdCBkaXNjcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIG1hc3RlckFsYnVtLmNoaWxkQWxidW1zPy5tYXAoKGNoaWxkQWxidW0pID0+XG4gICAgICBhbGJ1bUFwaS5nZXRBbGJ1bSh7XG4gICAgICAgIGlkOiBjaGlsZEFsYnVtLmlkISxcbiAgICAgIH0pXG4gICAgKSB8fCBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyOiBtYXN0ZXJBbGJ1bSxcbiAgICBkaXNjczogZGlzY3MsXG4gIH07XG59O1xuXG5jb25zdCBsb2FkID0gYXN5bmMgKGFsYnVtSWQ6IHN0cmluZykgPT4ge1xuICBjb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICAgIGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpXG4gICAgKTtcblxuICAgIGNvbnN0IGFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgaWQ6IGFsYnVtSWQsXG4gICAgfSk7XG5cbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIHRoZSBhbGJ1bSBoYXMgZGlzY3Mgb3IgdGhlIGFsYnVtIGl0c2VsZiBpcyBhIGRpc2NzXG4gICAgY29uc3QgaXNNdWx0aURpc2MgPVxuICAgICAgYWxidW0ucGFyZW50QWxidW0gfHwgKGFsYnVtPy5jaGlsZEFsYnVtcz8ubGVuZ3RoIHx8IDApID4gMDtcblxuICAgIGxldCB2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbDtcbiAgICBpZiAoaXNNdWx0aURpc2MpIHtcbiAgICAgIGNvbnN0IGlzTWFzdGVyID0gIWFsYnVtLnBhcmVudEFsYnVtICYmIGFsYnVtLmRpc2NOdW1iZXIgPT09IDA7XG4gICAgICBpZiAoIWlzTWFzdGVyKSB7XG4gICAgICAgICRyb3V0ZXIucmVwbGFjZSh7XG4gICAgICAgICAgbmFtZTogJ0FsYnVtJyxcbiAgICAgICAgICBwYXJhbXM6IHsgYWxidW1JZDogYWxidW0ucGFyZW50QWxidW0hLmlkISB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFzdGVyQWxidW1JZCA9IGFsYnVtLmlkITtcbiAgICAgIGNvbnN0IHsgbWFzdGVyLCBkaXNjcyB9ID0gYXdhaXQgbG9hZE11bHRpRGlzY0FsYnVtKG1hc3RlckFsYnVtSWQpO1xuXG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKG1hc3RlciwgZGlzY3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKGFsYnVtLCBbXSk7XG4gICAgfVxuXG4gICAgY29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29udHJvbGxlci5zZXRFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dBbGJ1bUFzc2V0RGlhbG9nID0gKGFsYnVtOiBBbGJ1bVJlYWREdG8pID0+IHtcbiAgJHEuZGlhbG9nKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2csXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBhbGJ1bSxcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbmNvbnN0IHBsYXlBbGJ1bSA9ICh2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbCwgYWRkTW9kZTogUXVldWVBZGRNb2RlKSA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IEFycmF5LmZyb20odmlld01vZGVsLnRyYWNrcy52YWx1ZXMoKSlcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG5cbiAgY29uc3QgdHJhY2tJZHMgPSB0cmFja3MubWFwKCh0cmFjaykgPT4gdHJhY2suaWQhKTtcblxuICBxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrc0J5SWRzKHRyYWNrSWRzLCBhZGRNb2RlKTtcbn07XG5cbi8vIGJpbmQgaG9va3MgdG8gdXBkYXRlIGNvbnRyb2xsZXIgaWYgdGhlIHJvdXRlIGNoYW5nZXNcbm9uTW91bnRlZCgoKSA9PiB7XG4gIGxvYWQocm91dGVQYXJhbXMuYWxidW1JZC52YWx1ZSBhcyBzdHJpbmcpO1xuXG4gIHdhdGNoKHJvdXRlUGFyYW1zLmFsYnVtSWQsIGFzeW5jIChhbGJ1bUlkKSA9PiB7XG4gICAgYXdhaXQgbG9hZChhbGJ1bUlkIGFzIHN0cmluZyk7XG4gIH0pO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWxpZ2h0IC5saWtlLWJ0biB7XG4gIGNvbG9yOiAkbmVnYXRpdmVcbn1cblxuLmJvZHktLWRhcmsgLmxpa2UtYnRuIHtcbiAgY29sb3I6ICRuZWdhdGl2ZVxufVxuXG4uYm9keS0tZGFyayAucGxheS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XG59XG5cbi5ib2R5LS1saWdodCAucGxheS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XG59XG5cbi5ib2R5LS1saWdodCAuYWxidW0tcGFnZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkZmRmZGYsICRhbHBoYTogMC40KVxufVxuXG4uYm9keS0tZGFyayAuYWxidW0tcGFnZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJkZWYiLCJsYXN0UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkEsVUFBTSxVQUFVO0FBQ2hCLFVBQU0sUUFBUTtBQUNkLFVBQU0sc0JB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
