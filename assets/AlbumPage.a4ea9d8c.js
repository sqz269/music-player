import { u as useLoadableController, Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.12d4d134.js";
import { r as outlinedPlayArrow, C as ClosePopup, Q as QBtnDropdown, y as outlinedMenu, z as matFileDownload, A as matContentCopy, u as useQuasar, p as QTooltip, c as outlinedFavoriteBorder, B as outlinedMoreHoriz, D as outlinedDescription, E as outlinedEditNote } from "./QTooltip.f8d20e64.js";
import { a as QItemSection, Q as QItem, b as QItemLabel } from "./QItem.bb3c5020.js";
import { Q as QList } from "./QList.d17f8a2a.js";
import { a as QImg, i as useVirtualScrollProps, j as useVirtualScroll, k as commonVirtPropsList, Q as QSelect, l as QChip, d as QMenu } from "./QImg.fea1bcd3.js";
import { F as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, R as createBaseVNode, T as unref, H as createBlock, a3 as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, J as createVNode, V as QSeparator, _ as _export_sfc, be as pushScopeId, bf as popScopeId, c as createComponent, b as h, v as hSlot, h as hUniqueSlot, Z as QIcon, g as getCurrentInstance, a as computed, d as useDarkProps, j as useDark, r as ref, w as watch, ac as onBeforeMount, p as onMounted, aQ as onActivated, aP as onDeactivated, o as onBeforeUnmount, ap as getScrollTarget, ag as listenOpts, B as hMergeSlot, ax as useSizeProps, ay as useSize, bg as vmHasRouter, bh as History, a4 as isNumber, bi as isDate, a5 as isObject, q as nextTick, bj as injectMultipleProps, bk as QCheckbox, bl as injectProp, N as QBtn, i as inject, I as withCtx, W as createTextVNode, s as withDirectives, bm as QueueAddMode, ab as Duration, ae as resolveComponent, K as QCardSection, b5 as QAvatar, M as QCardActions, O as QCard, Q as QDialog, b7 as AlbumApi } from "./index.4e45d96f.js";
import { Q as QPage } from "./QPage.e636e785.js";
var AlbumInfoSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2eafd22c"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "row full-width q-px-none q-pt-lg" };
const _hoisted_2$2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3$1 = { class: "col-8" };
const _hoisted_4 = { class: "row full-width full-height items-end" };
const _hoisted_5 = { class: "col-12" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Album", -1));
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
const _sfc_main$3 = defineComponent({
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
        releaseDate: props.album.releaseDate || null
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          unref(viewModel).albumCoverUrl ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: unref(viewModel).albumCoverUrl,
            ratio: "1"
          }, null, 8, ["src"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
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
var AlbumInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2eafd22c"], ["__file", "AlbumInfoSection.vue"]]);
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
    scrollTarget: {
      default: void 0
    }
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
    if (inFullscreen.value === true) {
      return;
    }
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
    if (inFullscreen.value !== true) {
      return;
    }
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
    if (lastPage2 === oldLastPage) {
      return;
    }
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
const commonVirtPropsObj = {};
commonVirtPropsList.forEach((p) => {
  commonVirtPropsObj[p] = {};
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
    virtualScrollTarget: {
      default: void 0
    },
    ...commonVirtPropsObj,
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
      commonVirtPropsList.forEach((p) => {
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
          emit("RowClick", evt, row, pageIndex);
        };
      }
      if (props.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("RowDblclick", evt, row, pageIndex);
        };
      }
      if (props.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("RowContextmenu", evt, row, pageIndex);
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
      if (child.length === 0) {
        return;
      }
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
      if (props.hideBottom === true) {
        return;
      }
      if (nothingToDisplay.value === true) {
        if (props.hideNoData === true) {
          return;
        }
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
const _hoisted_1$2 = { class: "row full-width q-px-none q-pt-lg" };
const _hoisted_2$1 = { class: "flex row items-center text-subtitle1 text-bold" };
const _hoisted_3 = { class: "underline-on-hover pointer-on-hover" };
const _sfc_main$2 = defineComponent({
  __name: "TrackListTable",
  props: {
    tracks: {}
  },
  setup(__props) {
    const queueService = inject("queueService");
    const hoveringWhich = ref();
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
        classes: "text-grey-4",
        sortable: false
      }
    ];
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tracks.entries(), ([disc, tracks]) => {
          return openBlock(), createElementBlock("div", {
            key: disc.id,
            class: "col-12 q-pt-md q-px-md q-pb-lg"
          }, [
            createVNode(unref(QTable), {
              rows: tracks,
              class: "transparent",
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
                        class: "text-grey border-bottom-thin"
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
                      class: "text-grey-5",
                      size: "13px",
                      onMouseover: ($event) => hoveringWhich.value = props2.key,
                      onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                      label: hoveringWhich.value !== props2.key ? props2.value : void 0,
                      icon: hoveringWhich.value === props2.key ? unref(outlinedPlayArrow) : void 0
                    }, null, 8, ["onMouseover", "label", "icon"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-title": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$1, [
                      createBaseVNode("div", _hoisted_3, toDisplayString(props2.value), 1)
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
                        class: "bg-white-a-5",
                        key: prop.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(prop.title.en), 1)
                        ]),
                        _: 2
                      }, 1024);
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
                createVNode(QMenu, { "context-menu": "" }, {
                  default: withCtx(() => [
                    createVNode(QList, { style: { "min-width": "150px" } }, {
                      default: withCtx(() => [
                        withDirectives((openBlock(), createBlock(QItem, {
                          clickable: "",
                          onClick: ($event) => {
                            var _a;
                            return (_a = unref(queueService)) == null ? void 0 : _a.addTrackById(props2.key, unref(QueueAddMode).APPEND_NEXT);
                          }
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
                        withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createTextVNode("Add to Queue")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [ClosePopup]
                        ]),
                        withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createTextVNode("Copy Track Url")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })), [
                          [ClosePopup]
                        ]),
                        withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createTextVNode("View Metadata")
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
            }, 1032, ["rows"])
          ]);
        }), 128))
      ]);
    };
  }
});
var TrackListTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "TrackListTable.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Album Assets", -1);
const _sfc_main$1 = defineComponent({
  __name: "AlbumAssetsViewerDialog",
  props: {
    album: {}
  },
  setup(__props) {
    const props = __props;
    const albumAssets = computed(() => {
      return props.album.otherFiles;
    });
    const donwloadAsset = (asset) => {
      console.log("Download asset", asset);
      const a = document.createElement("a");
      a.href = asset.url;
      a.target = "_blank";
      a.click();
    };
    const copyAssetUrl = (asset) => {
      console.log("Copy asset URL", asset);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(asset.url);
      } else {
        console.error("Clipboard API not available");
      }
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
      },
      {
        name: "actions",
        label: "Actions",
        align: "center"
      }
    ];
    return (_ctx, _cache) => {
      const _component_q_markup = resolveComponent("q-markup");
      const QCard_main = resolveComponent("q-card-main");
      return openBlock(), createBlock(unref(QDialog), {
        position: "top",
        "backdrop-filter": "brightness(60%)"
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
                    class: "transparent",
                    "row-key": "id",
                    flat: "",
                    "hide-bottom": ""
                  }, {
                    "body-cell-actions": withCtx((props2) => [
                      createVNode(QTd, { class: "row flex justify-center items-center" }, {
                        default: withCtx(() => [
                          createVNode(QBtnDropdown, {
                            flat: "",
                            "no-icon-animation": "",
                            "dropdown-icon": unref(outlinedMenu)
                          }, {
                            default: withCtx(() => [
                              createVNode(QList, null, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => donwloadAsset(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, {
                                            icon: unref(matFileDownload),
                                            size: "md"
                                          }, null, 8, ["icon"])
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
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => copyAssetUrl(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, {
                                            icon: unref(matContentCopy),
                                            size: "md"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Copy URL")
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
                          }, 1032, ["dropdown-icon"])
                        ]),
                        _: 2
                      }, 1024)
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
                  createVNode(QCard_main, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_markup, { value: "No assets found." })
                    ]),
                    _: 1
                  })
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
const _hoisted_1 = { class: "col-all q-mt-lg row" };
const _hoisted_2 = { class: "col-12 q-pt-md" };
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
      const _component_q_card_title = resolveComponent("q-card-title");
      const _component_q_markup = resolveComponent("q-markup");
      const _component_q_card_main = resolveComponent("q-card-main");
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
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedPlayArrow),
                    color: "black",
                    "text-color": "white",
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
                    class: "q-mx-md",
                    round: "",
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
                      createVNode(_component_q_card_title, { class: "text-h6" }, {
                        default: withCtx(() => [
                          createTextVNode("Error")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_q_card_main, null, {
                        default: withCtx(() => [
                          createVNode(_component_q_markup, {
                            value: error == null ? void 0 : error.message
                          }, null, 8, ["value"])
                        ]),
                        _: 2
                      }, 1024)
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
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmE0ZWE5ZDhjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1wYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctZXhwYW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGFibGUuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvVHJhY2tMaXN0VGFibGUudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9BbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBxLXB4LW5vbmUgcS1wdC1sZ1wiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY29sLTQgcS1weC1tZFwiXG4gICAgICBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIlxuICAgID5cbiAgICAgIDxxLWltZ1xuICAgICAgICA6c3JjPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgICByYXRpbz1cIjFcIlxuICAgICAgICB2LWlmPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgPlxuICAgICAgPC9xLWltZz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj5cbiAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5hbGJ1bU5hbWUgfX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiYXJ0aXN0c1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWV0YWRhdGEtZW50cnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyIGFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJnb3RvQ2lyY2xlKGFydGlzdElkIGFzIHN0cmluZylcIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFydGlzdE5hbWUsIGFydGlzdElkKSBpbiB2aWV3TW9kZWwuYWxidW1BcnRpc3RzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYXJ0aXN0SWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgYXJ0aXN0TmFtZSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yXG4gICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHNwYWNlZFxuICAgICAgICAgICAgPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJyZWxlYXNlLWRhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1ldGFkYXRhLWVudHJ5XCJcbiAgICAgICAgICAgICAgdi1pZj1cInZpZXdNb2RlbC5yZWxlYXNlRGF0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5yZWxlYXNlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8gfSBmcm9tICdiYWNrZW5kLWFwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cbmludGVyZmFjZSBBbGJ1bUluZm9TZWN0aW9uUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCB7XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xuICAvLyBBcnRpc3QgaWQgLT4gYXJ0aXN0IG5hbWUsIGlkIG5lZWRlZCBmb3IgbmF2aWdhdGlvblxuICBhbGJ1bUFydGlzdHM6IHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYWxidW1Db3ZlclVybDogc3RyaW5nIHwgbnVsbDtcblxuICByZWxlYXNlRGF0ZTogRGF0ZSB8IG51bGw7XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8QWxidW1JbmZvU2VjdGlvblByb3BzPigpO1xuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbCA9ICgpOiBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsID0+IHtcbiAgY29uc3QgYWxidW1BcnRpc3RzID0gcHJvcHMuYWxidW0uYWxidW1BcnRpc3Q/LnJlZHVjZSgoYWNjLCBhcnRpc3QpID0+IHtcbiAgICBhY2NbYXJ0aXN0LmlkIV0gPSBhcnRpc3QubmFtZSE7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30gYXMgeyBbYXJ0aXN0SWQ6IHN0cmluZ106IHN0cmluZyB9KTtcblxuICBjb25zb2xlLmxvZygnYWxidW1BcnRpc3RzJywgYWxidW1BcnRpc3RzKTtcblxuICByZXR1cm4ge1xuICAgIGFsYnVtTmFtZTogcHJvcHMuYWxidW0ubmFtZT8uX2RlZmF1bHQgfHwgJycsXG4gICAgYWxidW1BcnRpc3RzLFxuICAgIGFsYnVtQ292ZXJVcmw6IHByb3BzLmFsYnVtLnRodW1ibmFpbD8ubGFyZ2U/LnVybCB8fCBudWxsLFxuICAgIHJlbGVhc2VEYXRlOiBwcm9wcy5hbGJ1bS5yZWxlYXNlRGF0ZSB8fCBudWxsLFxuICB9IGFzIEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWw7XG59O1xuXG5jb25zdCB2aWV3TW9kZWw6IEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKCk7XG5cbmNvbnN0IGdvdG9DaXJjbGUgPSAoY2lyY2xlSWQ6IHN0cmluZykgPT4ge1xuICAkcm91dGVyLnB1c2goe1xuICAgIG5hbWU6ICdDaXJjbGVBbGJ1bXMnLFxuICAgIHBhcmFtczogeyBjaXJjbGVJZCwgcGFnZTogJzEnIH0sXG4gIH0pO1xufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FydGlzdHMgLmFydGlzdC1uYW1lOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgY29udGVudDogJywgJztcbn1cblxuLnEtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGgnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3Qgb25DbGljayA9IGV2dCA9PiB7IGVtaXQoJ2NsaWNrJywgZXZ0KSB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ3RoJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycsXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbCwgY2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sc01hcFsgbmFtZSBdXG4gICAgICAgIGlmIChjb2wgPT09IHZvaWQgMCkgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpXG4gICAgICAgICAgb25DbGljayhldnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUcicsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdHInXG4gICAgICArIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwIHx8IHByb3BzLnByb3BzLmhlYWRlciA9PT0gdHJ1ZSA/ICcnIDogJyAnICsgcHJvcHMucHJvcHMuX190ckNsYXNzKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ci0tbm8taG92ZXInIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3RyJywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUZCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhbixcbiAgICBub0hvdmVyOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10ZCcgKyAocHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJyBxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJylcbiAgICAgICsgKHByb3BzLm5vSG92ZXIgPT09IHRydWUgPyAnIHEtdGQtLW5vLWhvdmVyJyA6ICcnKVxuICAgICAgKyAnICdcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLnByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ3RkJywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuICAgICAgY29uc3QgY29sID0gKFxuICAgICAgICAocHJvcHMucHJvcHMuY29sc01hcCAhPT0gdm9pZCAwID8gcHJvcHMucHJvcHMuY29sc01hcFsgbmFtZSBdIDogbnVsbClcbiAgICAgICAgfHwgcHJvcHMucHJvcHMuY29sXG4gICAgICApXG5cbiAgICAgIGlmIChjb2wgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcy5wcm9wc1xuXG4gICAgICByZXR1cm4gaCgndGQnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiAyLFxuICBzbTogNCxcbiAgbWQ6IDYsXG4gIGxnOiAxMCxcbiAgeGw6IDE0XG59XG5cbmZ1bmN0aW9uIHdpZHRoICh2YWwsIHJldmVyc2UsICRxKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtOiByZXZlcnNlID09PSB0cnVlXG4gICAgICA/IGB0cmFuc2xhdGVYKCR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJy0nIDogJycgfTEwMCUpIHNjYWxlM2QoJHsgLXZhbCB9LDEsMSlgXG4gICAgICA6IGBzY2FsZTNkKCR7IHZhbCB9LDEsMSlgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMaW5lYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGJ1ZmZlcjogTnVtYmVyLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHN0cmlwZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMjEwMFxuICAgIH0sXG5cbiAgICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuXG4gICAgY29uc3QgbW90aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSlcbiAgICBjb25zdCB3aWR0aFJldmVyc2UgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5yZXZlcnNlICE9PSBwcm9wcy5xdWVyeSlcbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi4oc2l6ZVN0eWxlLnZhbHVlICE9PSBudWxsID8gc2l6ZVN0eWxlLnZhbHVlIDoge30pLFxuICAgICAgJy0tcS1saW5lYXItcHJvZ3Jlc3Mtc3BlZWQnOiBgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zYFxuICAgIH0pKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3MnXG4gICAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChwcm9wcy5yZXZlcnNlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlID8gJyBxLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZScgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgocHJvcHMuYnVmZmVyICE9PSB2b2lkIDAgPyBwcm9wcy5idWZmZXIgOiAxLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCB0cmFuc2l0aW9uU3VmZml4ID0gY29tcHV0ZWQoKCkgPT4gYHdpdGgkeyBwcm9wcy5pbnN0YW50RmVlZGJhY2sgPT09IHRydWUgPyAnb3V0JyA6ICcnIH0tdHJhbnNpdGlvbmApXG5cbiAgICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fdHJhY2sgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfWBcbiAgICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1vZGVsU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChtb3Rpb24udmFsdWUgPT09IHRydWUgPyAxIDogcHJvcHMudmFsdWUsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IG1vZGVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX19tb2RlbCBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgbW90aW9uLnZhbHVlID09PSB0cnVlID8gJ2luJyA6ICcnIH1kZXRlcm1pbmF0ZWBcbiAgICApXG5cbiAgICBjb25zdCBzdHJpcGVTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7IHdpZHRoOiBgJHsgcHJvcHMudmFsdWUgKiAxMDAgfSVgIH0pKVxuICAgIGNvbnN0IHN0cmlwZUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlIGFic29sdXRlLSR7IHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZS0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogbW9kZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogbW9kZWxTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zdHJpcGUgPT09IHRydWUgJiYgbW90aW9uLnZhbHVlID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHN0cmlwZUNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBzdHJpcGVTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICA6IHByb3BzLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKGNvbC5yYXdTb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbC5yYXdTb3J0KEEsIEIsIGEsIGIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQSA9PT0gbnVsbCB8fCBBID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQiA9PT0gbnVsbCB8fCBCID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wuc29ydCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIC8vIGdldHMgY2FsbGVkIHdpdGhvdXQgcm93cyB0aGF0IGhhdmUgbnVsbC91bmRlZmluZWQgYXMgdmFsdWVcbiAgICAgICAgICAgICAgLy8gZHVlIHRvIHRoZSBhYm92ZSB0d28gc3RhdGVtZW50c1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1sgMCBdXG4gICAgICAgIDogNVxuICAgIH0sIHByb3BzLnBhZ2luYXRpb24pXG4gIClcblxuICBjb25zdCBjb21wdXRlZFBhZ2luYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcGFnID0gcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi5pbm5lclBhZ2luYXRpb24udmFsdWUsIC4uLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgOiBpbm5lclBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBmaXhQYWdpbmF0aW9uKHBhZylcbiAgfSlcblxuICBjb25zdCBpc1NlcnZlclNpZGUgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciAhPT0gdm9pZCAwKVxuXG4gIGZ1bmN0aW9uIHNlbmRTZXJ2ZXJSZXF1ZXN0IChwYWdpbmF0aW9uKSB7XG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uKHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBmaWx0ZXI6IHByb3BzLmZpbHRlclxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24gKHByb3AgPSB7fSkge1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGVtaXQoJ3JlcXVlc3QnLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHByb3AucGFnaW5hdGlvbiB8fCBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIGZpbHRlcjogcHJvcC5maWx0ZXIgfHwgcHJvcHMuZmlsdGVyLFxuICAgICAgICBnZXRDZWxsVmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhZ2luYXRpb24gKHZhbCwgZm9yY2VTZXJ2ZXJSZXF1ZXN0KSB7XG4gICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IGZpeFBhZ2luYXRpb24oe1xuICAgICAgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgLi4udmFsXG4gICAgfSlcblxuICAgIGlmIChzYW1lUGFnaW5hdGlvbihjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsIG5ld1BhZ2luYXRpb24pID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlICYmIGZvcmNlU2VydmVyUmVxdWVzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BzLnBhZ2luYXRpb24gIT09IHZvaWQgMFxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgbmV3UGFnaW5hdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lclBhZ2luYXRpb24udmFsdWUgPSBuZXdQYWdpbmF0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgIGlzU2VydmVyU2lkZSxcblxuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICBzZXRQYWdpbmF0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvbiAodm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcikge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgID8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgfHwgMFxuICAgICAgOiBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBmaXJzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBsYXN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIHBhZ2UgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPT09IDEpXG5cbiAgY29uc3QgcGFnZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlID09PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgIDEsXG4gICAgICAgIE1hdGguY2VpbChjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUgLyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNMYXN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBsYXN0Um93SW5kZXgudmFsdWUgPT09IDBcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA+PSBwYWdlc051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMuaW5jbHVkZXMoaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNcbiAgICAgIDogWyBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgXS5jb25jYXQocHJvcHMucm93c1BlclBhZ2VPcHRpb25zKVxuXG4gICAgcmV0dXJuIG9wdHMubWFwKGNvdW50ID0+ICh7XG4gICAgICBsYWJlbDogY291bnQgPT09IDAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3MgOiAnJyArIGNvdW50LFxuICAgICAgdmFsdWU6IGNvdW50XG4gICAgfSkpXG4gIH0pXG5cbiAgd2F0Y2gocGFnZXNOdW1iZXIsIChsYXN0UGFnZSwgb2xkTGFzdFBhZ2UpID0+IHtcbiAgICBpZiAobGFzdFBhZ2UgPT09IG9sZExhc3RQYWdlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlXG4gICAgaWYgKGxhc3RQYWdlICYmICFjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdFBhZ2UgPCBjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IGxhc3RQYWdlIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGZpcnN0UGFnZSAoKSB7XG4gICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChwYWdlID4gMSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgLSAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFBhZ2UgKCkge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChsYXN0Um93SW5kZXgudmFsdWUgPiAwICYmIHBhZ2UgKiByb3dzUGVyUGFnZSA8IGNvbXB1dGVkUm93c051bWJlci52YWx1ZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgKyAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGFzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlc051bWJlci52YWx1ZSB9KVxuICB9XG5cbiAgaWYgKHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgZW1pdCgndXBkYXRlOnBhZ2luYXRpb24nLCB7IC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdFJvd0luZGV4LFxuICAgIGxhc3RSb3dJbmRleCxcbiAgICBpc0ZpcnN0UGFnZSxcbiAgICBpc0xhc3RQYWdlLFxuICAgIHBhZ2VzTnVtYmVyLFxuICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgIGZpcnN0UGFnZSxcbiAgICBwcmV2UGFnZSxcbiAgICBuZXh0UGFnZSxcbiAgICBsYXN0UGFnZVxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMgPSB7XG4gIHNlbGVjdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnbm9uZScsXG4gICAgdmFsaWRhdG9yOiB2ID0+IFsgJ3NpbmdsZScsICdtdWx0aXBsZScsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyA9IFsgJ3VwZGF0ZTpzZWxlY3RlZCcsICdzZWxlY3Rpb24nIF1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUm93U2VsZWN0aW9uIChwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpIHtcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB7fVxuICAgIHByb3BzLnNlbGVjdGVkLm1hcChnZXRSb3dLZXkudmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGtleXNbIGtleSBdID0gdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIGtleXNcbiAgfSlcblxuICBjb25zdCBoYXNTZWxlY3Rpb25Nb2RlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gIT09ICdub25lJ1xuICB9KVxuXG4gIGNvbnN0IHNpbmdsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnc2luZ2xlJ1xuICB9KVxuXG4gIGNvbnN0IG11bHRpcGxlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gPT09ICdtdWx0aXBsZSdcbiAgfSlcblxuICBjb25zdCBhbGxSb3dzU2VsZWN0ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggIT09IDAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLmV2ZXJ5KFxuICAgICAgcm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHNvbWVSb3dzU2VsZWN0ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGFsbFJvd3NTZWxlY3RlZC52YWx1ZSAhPT0gdHJ1ZVxuICAgICYmIGNvbXB1dGVkUm93cy52YWx1ZS5zb21lKHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWUpXG4gIClcblxuICBjb25zdCByb3dzU2VsZWN0ZWROdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zZWxlY3RlZC5sZW5ndGgpXG5cbiAgZnVuY3Rpb24gaXNSb3dTZWxlY3RlZCAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkS2V5cy52YWx1ZVsga2V5IF0gPT09IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICgpIHtcbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbiAoa2V5cywgcm93cywgYWRkZWQsIGV2dCkge1xuICAgIGVtaXQoJ3NlbGVjdGlvbicsIHsgcm93cywgYWRkZWQsIGtleXMsIGV2dCB9KVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgPyAoYWRkZWQgPT09IHRydWUgPyByb3dzIDogW10pXG4gICAgICA6IChcbiAgICAgICAgICBhZGRlZCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBwcm9wcy5zZWxlY3RlZC5jb25jYXQocm93cylcbiAgICAgICAgICAgIDogcHJvcHMuc2VsZWN0ZWQuZmlsdGVyKFxuICAgICAgICAgICAgICByb3cgPT4ga2V5cy5pbmNsdWRlcyhnZXRSb3dLZXkudmFsdWUocm93KSkgPT09IGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIHBheWxvYWQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgc2luZ2xlU2VsZWN0aW9uLFxuICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICBzb21lUm93c1NlbGVjdGVkLFxuICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgdXBkYXRlU2VsZWN0aW9uXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnXG5cbmZ1bmN0aW9uIGdldFZhbCAodmFsKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbClcbiAgICA/IHZhbC5zbGljZSgpXG4gICAgOiBbXVxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRQcm9wcyA9IHtcbiAgZXhwYW5kZWQ6IEFycmF5IC8vIHYtbW9kZWw6ZXhwYW5kZWRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kRW1pdHMgPSBbICd1cGRhdGU6ZXhwYW5kZWQnIF1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUm93RXhwYW5kIChwcm9wcywgZW1pdCkge1xuICBjb25zdCBpbm5lckV4cGFuZGVkID0gcmVmKGdldFZhbChwcm9wcy5leHBhbmRlZCkpXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuZXhwYW5kZWQsIHZhbCA9PiB7XG4gICAgaW5uZXJFeHBhbmRlZC52YWx1ZSA9IGdldFZhbCh2YWwpXG4gIH0pXG5cbiAgZnVuY3Rpb24gaXNSb3dFeHBhbmRlZCAoa2V5KSB7XG4gICAgcmV0dXJuIGlubmVyRXhwYW5kZWQudmFsdWUuaW5jbHVkZXMoa2V5KVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RXhwYW5kZWQgKHZhbCkge1xuICAgIGlmIChwcm9wcy5leHBhbmRlZCAhPT0gdm9pZCAwKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6ZXhwYW5kZWQnLCB2YWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJFeHBhbmRlZC52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUV4cGFuZGVkIChrZXksIGFkZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGlubmVyRXhwYW5kZWQudmFsdWUuc2xpY2UoKVxuICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmluZGV4T2Yoa2V5KVxuXG4gICAgaWYgKGFkZCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICB0YXJnZXQucHVzaChrZXkpXG4gICAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0YXJnZXQuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNSb3dFeHBhbmRlZCxcbiAgICBzZXRFeHBhbmRlZCxcbiAgICB1cGRhdGVFeHBhbmRlZFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgPSB7XG4gIHZpc2libGVDb2x1bW5zOiBBcnJheVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24gKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpIHtcbiAgY29uc3QgY29sTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMuY29sdW1ucyAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY29sdW1uc1xuICAgIH1cblxuICAgIC8vIHdlIGluZmVyIGNvbHVtbnMgZnJvbSBmaXJzdCByb3dcbiAgICBjb25zdCByb3cgPSBwcm9wcy5yb3dzWyAwIF1cblxuICAgIHJldHVybiByb3cgIT09IHZvaWQgMFxuICAgICAgPyBPYmplY3Qua2V5cyhyb3cpLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxhYmVsOiBuYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgICBhbGlnbjogaXNOdW1iZXIocm93WyBuYW1lIF0pID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0pKVxuICAgICAgOiBbXVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29scyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBjb25zdCBjb2xzID0gcHJvcHMudmlzaWJsZUNvbHVtbnMgIT09IHZvaWQgMFxuICAgICAgPyBjb2xMaXN0LnZhbHVlLmZpbHRlcihjb2wgPT4gY29sLnJlcXVpcmVkID09PSB0cnVlIHx8IHByb3BzLnZpc2libGVDb2x1bW5zLmluY2x1ZGVzKGNvbC5uYW1lKSA9PT0gdHJ1ZSlcbiAgICAgIDogY29sTGlzdC52YWx1ZVxuXG4gICAgcmV0dXJuIGNvbHMubWFwKGNvbCA9PiB7XG4gICAgICBjb25zdCBhbGlnbiA9IGNvbC5hbGlnbiB8fCAncmlnaHQnXG4gICAgICBjb25zdCBhbGlnbkNsYXNzID0gYHRleHQtJHsgYWxpZ24gfWBcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29sLFxuICAgICAgICBhbGlnbixcbiAgICAgICAgX19pY29uQ2xhc3M6IGBxLXRhYmxlX19zb3J0LWljb24gcS10YWJsZV9fc29ydC1pY29uLS0keyBhbGlnbiB9YCxcbiAgICAgICAgX190aENsYXNzOiBhbGlnbkNsYXNzXG4gICAgICAgICAgKyAoY29sLmhlYWRlckNsYXNzZXMgIT09IHZvaWQgMCA/ICcgJyArIGNvbC5oZWFkZXJDbGFzc2VzIDogJycpXG4gICAgICAgICAgKyAoY29sLnNvcnRhYmxlID09PSB0cnVlID8gJyBzb3J0YWJsZScgOiAnJylcbiAgICAgICAgICArIChjb2wubmFtZSA9PT0gc29ydEJ5ID8gYCBzb3J0ZWQgJHsgZGVzY2VuZGluZyA9PT0gdHJ1ZSA/ICdzb3J0LWRlc2MnIDogJycgfWAgOiAnJyksXG5cbiAgICAgICAgX190ZFN0eWxlOiBjb2wuc3R5bGUgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLnN0eWxlICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBjb2wuc3R5bGVcbiAgICAgICAgICAgICAgICA6IGNvbC5zdHlsZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKCkgPT4gbnVsbCxcblxuICAgICAgICBfX3RkQ2xhc3M6IGNvbC5jbGFzc2VzICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5jbGFzc2VzICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBhbGlnbkNsYXNzICsgJyAnICsgY29sLmNsYXNzZXNcbiAgICAgICAgICAgICAgICA6IHJvdyA9PiBhbGlnbkNsYXNzICsgJyAnICsgY29sLmNsYXNzZXMocm93KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogKCkgPT4gYWxpZ25DbGFzc1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG5hbWVzID0ge31cbiAgICBjb21wdXRlZENvbHMudmFsdWUuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgbmFtZXNbIGNvbC5uYW1lIF0gPSBjb2xcbiAgICB9KVxuICAgIHJldHVybiBuYW1lc1xuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc3BhbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMudGFibGVDb2xzcGFuICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMudGFibGVDb2xzcGFuXG4gICAgICA6IGNvbXB1dGVkQ29scy52YWx1ZS5sZW5ndGggKyAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAwKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgY29sTGlzdCxcbiAgICBjb21wdXRlZENvbHMsXG4gICAgY29tcHV0ZWRDb2xzTWFwLFxuICAgIGNvbXB1dGVkQ29sc3BhblxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVRoIGZyb20gJy4vUVRoLmpzJ1xuXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFWaXJ0dWFsU2Nyb2xsIGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzJ1xuaW1wb3J0IFFTZWxlY3QgZnJvbSAnLi4vc2VsZWN0L1FTZWxlY3QuanMnXG5pbXBvcnQgUUxpbmVhclByb2dyZXNzIGZyb20gJy4uL2xpbmVhci1wcm9ncmVzcy9RTGluZWFyUHJvZ3Jlc3MuanMnXG5pbXBvcnQgUUNoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94L1FDaGVja2JveC5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgZ2V0VGFibGVNaWRkbGUgZnJvbSAnLi9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgY29tbW9uVmlydFByb3BzTGlzdCB9IGZyb20gJy4uL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcbmltcG9ydCB1c2VGdWxsc2NyZWVuLCB7IHVzZUZ1bGxzY3JlZW5Qcm9wcywgdXNlRnVsbHNjcmVlbkVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcydcblxuaW1wb3J0IHsgdXNlVGFibGVTb3J0LCB1c2VUYWJsZVNvcnRQcm9wcyB9IGZyb20gJy4vdGFibGUtc29ydC5qcydcbmltcG9ydCB7IHVzZVRhYmxlRmlsdGVyLCB1c2VUYWJsZUZpbHRlclByb3BzIH0gZnJvbSAnLi90YWJsZS1maWx0ZXIuanMnXG5pbXBvcnQgeyB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSwgdXNlVGFibGVQYWdpbmF0aW9uLCB1c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyB9IGZyb20gJy4vdGFibGUtcGFnaW5hdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93U2VsZWN0aW9uLCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLCB1c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dFeHBhbmQsIHVzZVRhYmxlUm93RXhwYW5kUHJvcHMsIHVzZVRhYmxlUm93RXhwYW5kRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1leHBhbmQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiwgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNlbGVjdGlvbi5qcydcblxuaW1wb3J0IHsgaW5qZWN0UHJvcCwgaW5qZWN0TXVsdGlwbGVQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IGJvdHRvbUNsYXNzID0gJ3EtdGFibGVfX2JvdHRvbSByb3cgaXRlbXMtY2VudGVyJ1xuXG5jb25zdCBjb21tb25WaXJ0UHJvcHNPYmogPSB7fVxuY29tbW9uVmlydFByb3BzTGlzdC5mb3JFYWNoKHAgPT4geyBjb21tb25WaXJ0UHJvcHNPYmpbIHAgXSA9IHt9IH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgcm93czoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgcm93S2V5OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgRnVuY3Rpb24gXSxcbiAgICAgIGRlZmF1bHQ6ICdpZCdcbiAgICB9LFxuXG4gICAgY29sdW1uczogQXJyYXksXG4gICAgbG9hZGluZzogQm9vbGVhbixcblxuICAgIGljb25GaXJzdFBhZ2U6IFN0cmluZyxcbiAgICBpY29uUHJldlBhZ2U6IFN0cmluZyxcbiAgICBpY29uTmV4dFBhZ2U6IFN0cmluZyxcbiAgICBpY29uTGFzdFBhZ2U6IFN0cmluZyxcblxuICAgIHRpdGxlOiBTdHJpbmcsXG5cbiAgICBoaWRlSGVhZGVyOiBCb29sZWFuLFxuXG4gICAgZ3JpZDogQm9vbGVhbixcbiAgICBncmlkSGVhZGVyOiBCb29sZWFuLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdjZWxsJywgJ25vbmUnIF0uaW5jbHVkZXModilcbiAgICB9LFxuICAgIHdyYXBDZWxsczogQm9vbGVhbixcblxuICAgIHZpcnR1YWxTY3JvbGw6IEJvb2xlYW4sXG4gICAgdmlydHVhbFNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcbiAgICAuLi5jb21tb25WaXJ0UHJvcHNPYmosXG5cbiAgICBub0RhdGFMYWJlbDogU3RyaW5nLFxuICAgIG5vUmVzdWx0c0xhYmVsOiBTdHJpbmcsXG4gICAgbG9hZGluZ0xhYmVsOiBTdHJpbmcsXG4gICAgc2VsZWN0ZWRSb3dzTGFiZWw6IEZ1bmN0aW9uLFxuICAgIHJvd3NQZXJQYWdlTGFiZWw6IFN0cmluZyxcbiAgICBwYWdpbmF0aW9uTGFiZWw6IEZ1bmN0aW9uLFxuXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdncmV5LTgnXG4gICAgfSxcblxuICAgIHRpdGxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG5cbiAgICBoaWRlQm90dG9tOiBCb29sZWFuLFxuICAgIGhpZGVTZWxlY3RlZEJhbm5lcjogQm9vbGVhbixcbiAgICBoaWRlTm9EYXRhOiBCb29sZWFuLFxuICAgIGhpZGVQYWdpbmF0aW9uOiBCb29sZWFuLFxuXG4gICAgb25Sb3dDbGljazogRnVuY3Rpb24sXG4gICAgb25Sb3dEYmxjbGljazogRnVuY3Rpb24sXG4gICAgb25Sb3dDb250ZXh0bWVudTogRnVuY3Rpb24sXG5cbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlRnVsbHNjcmVlblByb3BzLFxuXG4gICAgLi4udXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZUZpbHRlclByb3BzLFxuICAgIC4uLnVzZVRhYmxlUGFnaW5hdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93RXhwYW5kUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVNvcnRQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgJ3JlcXVlc3QnLCAndmlydHVhbFNjcm9sbCcsXG4gICAgLi4udXNlRnVsbHNjcmVlbkVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93RXhwYW5kRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0c1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgaW5GdWxsc2NyZWVuLCB0b2dnbGVGdWxsc2NyZWVuIH0gPSB1c2VGdWxsc2NyZWVuKClcblxuICAgIGNvbnN0IGdldFJvd0tleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGVvZiBwcm9wcy5yb3dLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5yb3dLZXlcbiAgICAgICAgOiByb3cgPT4gcm93WyBwcm9wcy5yb3dLZXkgXVxuICAgICkpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdmlydFNjcm9sbFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGhhc1ZpcnRTY3JvbGwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5ncmlkICE9PSB0cnVlICYmIHByb3BzLnZpcnR1YWxTY3JvbGwgPT09IHRydWUpXG5cbiAgICBjb25zdCBjYXJkRGVmYXVsdENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICcgcS10YWJsZV9fY2FyZCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fY2FyZC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdGFibGUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdGFibGUtLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tYm9yZGVyZWQnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgX19jb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvciBjb2x1bW4gbm8td3JhcGBcbiAgICAgICsgKHByb3BzLmdyaWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWdyaWQnIDogY2FyZERlZmF1bHRDbGFzcy52YWx1ZSlcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgICArIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUgPyAnIGZ1bGxzY3JlZW4gc2Nyb2xsJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIF9fY29udGFpbmVyQ2xhc3MudmFsdWUgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tbG9hZGluZycgOiAnJylcbiAgICApXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLnRhYmxlU3R5bGUgKyBwcm9wcy50YWJsZUNsYXNzICsgcHJvcHMudGFibGVIZWFkZXJTdHlsZSArIHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MgKyBfX2NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgKCkgPT4geyBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpIH1cbiAgICApXG5cbiAgICBjb25zdCB7XG4gICAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgICBjb21wdXRlZFBhZ2luYXRpb24sXG4gICAgICBpc1NlcnZlclNpZGUsXG5cbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb25cbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUodm0sIGdldENlbGxWYWx1ZSlcblxuICAgIGNvbnN0IHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfSA9IHVzZVRhYmxlRmlsdGVyKHByb3BzLCBzZXRQYWdpbmF0aW9uKVxuICAgIGNvbnN0IHsgaXNSb3dFeHBhbmRlZCwgc2V0RXhwYW5kZWQsIHVwZGF0ZUV4cGFuZGVkIH0gPSB1c2VUYWJsZVJvd0V4cGFuZChwcm9wcywgZW1pdClcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gcHJvcHMucm93c1xuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlIHx8IHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHByb3BzLmZpbHRlcikge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRGaWx0ZXJNZXRob2QudmFsdWUocm93cywgcHJvcHMuZmlsdGVyLCBjb21wdXRlZENvbHMudmFsdWUsIGdldENlbGxWYWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtblRvU29ydC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRTb3J0TWV0aG9kLnZhbHVlKFxuICAgICAgICAgIHByb3BzLnJvd3MgPT09IHJvd3MgPyByb3dzLnNsaWNlKCkgOiByb3dzLFxuICAgICAgICAgIHNvcnRCeSxcbiAgICAgICAgICBkZXNjZW5kaW5nXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLmxlbmd0aClcblxuICAgIGNvbnN0IGNvbXB1dGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCkge1xuICAgICAgICBpZiAoZmlyc3RSb3dJbmRleC52YWx1ZSA9PT0gMCAmJiBwcm9wcy5yb3dzICE9PSByb3dzKSB7XG4gICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gbGFzdFJvd0luZGV4LnZhbHVlKSB7XG4gICAgICAgICAgICByb3dzID0gcm93cy5zbGljZSgwLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKGZpcnN0Um93SW5kZXgudmFsdWUsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCB7XG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgICAgc2luZ2xlU2VsZWN0aW9uLFxuICAgICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBzb21lUm93c1NlbGVjdGVkLFxuICAgICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICB1cGRhdGVTZWxlY3Rpb25cbiAgICB9ID0gdXNlVGFibGVSb3dTZWxlY3Rpb24ocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KVxuXG4gICAgY29uc3QgeyBjb2xMaXN0LCBjb21wdXRlZENvbHMsIGNvbXB1dGVkQ29sc01hcCwgY29tcHV0ZWRDb2xzcGFuIH0gPSB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbihwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKVxuXG4gICAgY29uc3QgeyBjb2x1bW5Ub1NvcnQsIGNvbXB1dGVkU29ydE1ldGhvZCwgc29ydCB9ID0gdXNlVGFibGVTb3J0KHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pXG5cbiAgICBjb25zdCB7XG4gICAgICBmaXJzdFJvd0luZGV4LFxuICAgICAgbGFzdFJvd0luZGV4LFxuICAgICAgaXNGaXJzdFBhZ2UsXG4gICAgICBpc0xhc3RQYWdlLFxuICAgICAgcGFnZXNOdW1iZXIsXG4gICAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvbih2bSwgaW5uZXJQYWdpbmF0aW9uLCBjb21wdXRlZFBhZ2luYXRpb24sIGlzU2VydmVyU2lkZSwgc2V0UGFnaW5hdGlvbiwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyKVxuXG4gICAgY29uc3Qgbm90aGluZ1RvRGlzcGxheSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggPT09IDApXG5cbiAgICBjb25zdCB2aXJ0UHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBjb21tb25WaXJ0UHJvcHNMaXN0XG4gICAgICAgIC5mb3JFYWNoKHAgPT4geyBhY2NbIHAgXSA9IHByb3BzWyBwIF0gfSlcblxuICAgICAgaWYgKGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID0gcHJvcHMuZGVuc2UgPT09IHRydWUgPyAyOCA6IDQ4XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWaXJ0dWFsU2Nyb2xsICgpIHtcbiAgICAgIGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSAoKSB7XG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0R3JpZEJvZHkoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoZWFkZXIgPSBwcm9wcy5oaWRlSGVhZGVyICE9PSB0cnVlID8gZ2V0VEhlYWQgOiBudWxsXG5cbiAgICAgIGlmIChoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXVxuICAgICAgICBjb25zdCBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgICBjb25zdCB2aXJ0U2xvdHMgPSB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0VEJvZHlUUihwcm9wcy5pdGVtLCBzbG90cy5ib2R5LCBwcm9wcy5pbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENvbnRlbnQgPSBoKCd0Ym9keScsIHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcblxuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXIgPT09IG51bGxcbiAgICAgICAgICAgID8gKCkgPT4gdG9wQ29udGVudFxuICAgICAgICAgICAgOiAoKSA9PiBbIGhlYWRlcigpIF0uY29uY2F0KHRvcENvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmFmdGVyID0gKCkgPT4gaCgndGJvZHknLCBib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaChRVmlydHVhbFNjcm9sbCwge1xuICAgICAgICAgIHJlZjogdmlydFNjcm9sbFJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZSxcbiAgICAgICAgICAuLi52aXJ0UHJvcHMudmFsdWUsXG4gICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBwcm9wcy52aXJ0dWFsU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgIGl0ZW1zOiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgICAgdHlwZTogJ19fcXRhYmxlJyxcbiAgICAgICAgICB0YWJsZUNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZSxcbiAgICAgICAgICBvblZpcnR1YWxTY3JvbGw6IG9uVlNjcm9sbFxuICAgICAgICB9LCB2aXJ0U2xvdHMpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBnZXRUQm9keSgpXG4gICAgICBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChoZWFkZXIoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFRhYmxlTWlkZGxlKHtcbiAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX21pZGRsZSBzY3JvbGwnLCBwcm9wcy50YWJsZUNsYXNzIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUbyAodG9JbmRleCwgZWRnZSkge1xuICAgICAgaWYgKHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdmlydFNjcm9sbFJlZi52YWx1ZS5zY3JvbGxUbyh0b0luZGV4LCBlZGdlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdG9JbmRleCA9IHBhcnNlSW50KHRvSW5kZXgsIDEwKVxuICAgICAgY29uc3Qgcm93RWwgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoYHRib2R5IHRyOm50aC1vZi10eXBlKCR7IHRvSW5kZXggKyAxIH0pYClcblxuICAgICAgaWYgKHJvd0VsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignLnEtdGFibGVfX21pZGRsZS5zY3JvbGwnKVxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSByb3dFbC5vZmZzZXRUb3AgLSBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG9mZnNldFRvcCA8IHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPyAnZGVjcmVhc2UnIDogJ2luY3JlYXNlJ1xuXG4gICAgICAgIHNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSBvZmZzZXRUb3BcblxuICAgICAgICBlbWl0KCd2aXJ0dWFsU2Nyb2xsJywge1xuICAgICAgICAgIGluZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgdG86IGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSAtIDEsXG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25WU2Nyb2xsIChpbmZvKSB7XG4gICAgICBlbWl0KCd2aXJ0dWFsU2Nyb2xsJywgaW5mbylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9ncmVzcyAoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKFFMaW5lYXJQcm9ncmVzcywge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fbGluZWFyLXByb2dyZXNzJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICAgICAgdHJhY2tDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRCb2R5VFIgKHJvdywgYm9keVNsb3QsIHBhZ2VJbmRleCkge1xuICAgICAgY29uc3RcbiAgICAgICAga2V5ID0gZ2V0Um93S2V5LnZhbHVlKHJvdyksXG4gICAgICAgIHNlbGVjdGVkID0gaXNSb3dTZWxlY3RlZChrZXkpXG5cbiAgICAgIGlmIChib2R5U2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBib2R5U2xvdChcbiAgICAgICAgICBnZXRCb2R5U2NvcGUoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgcGFnZUluZGV4LFxuICAgICAgICAgICAgX190ckNsYXNzOiBzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgYm9keUNlbGwgPSBzbG90c1sgJ2JvZHktY2VsbCcgXSxcbiAgICAgICAgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGJvZHlDZWxsQ29sID0gc2xvdHNbIGBib2R5LWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICAgIHNsb3QgPSBib2R5Q2VsbENvbCAhPT0gdm9pZCAwID8gYm9keUNlbGxDb2wgOiBib2R5Q2VsbFxuXG4gICAgICAgICAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBzbG90KGdldEJvZHlDZWxsU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4LCBjb2wgfSkpXG4gICAgICAgICAgICA6IGgoJ3RkJywge1xuICAgICAgICAgICAgICBjbGFzczogY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICAgICAgICB9LCBnZXRDZWxsVmFsdWUoY29sLCByb3cpKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdib2R5LXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEJvZHlTZWxlY3Rpb25TY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXggfSkpXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGtleSBdLCBbIHJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0ZCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgY29udGVudClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0geyBrZXksIGNsYXNzOiB7IHNlbGVjdGVkIH0gfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NvbnRleHRtZW51ICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ29udGV4dG1lbnUgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0NvbnRleHRtZW51JywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndHInLCBkYXRhLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keSAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBib2R5ID0gc2xvdHMuYm9keSxcbiAgICAgICAgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdLFxuICAgICAgICBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgbGV0IGNoaWxkID0gY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChcbiAgICAgICAgKHJvdywgcGFnZUluZGV4KSA9PiBnZXRUQm9keVRSKHJvdywgYm9keSwgcGFnZUluZGV4KVxuICAgICAgKVxuXG4gICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gY2hpbGQuY29uY2F0KGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3Rib2R5JywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcblxuICAgICAgZGF0YS5jb2xzID0gZGF0YS5jb2xzLm1hcChcbiAgICAgICAgY29sID0+IGluamVjdFByb3AoeyAuLi5jb2wgfSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGNvbCwgZGF0YS5yb3cpKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlDZWxsU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgaW5qZWN0UHJvcChkYXRhLCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoZGF0YS5jb2wsIGRhdGEucm93KSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNlbGVjdGlvblNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0Qm9keUNvbW1vblNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHJvd0luZGV4OiBmaXJzdFJvd0luZGV4LnZhbHVlICsgZGF0YS5wYWdlSW5kZXgsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgKCkgPT4gaXNSb3dTZWxlY3RlZChkYXRhLmtleSksXG4gICAgICAgIChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGRhdGEua2V5IF0sIFsgZGF0YS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ2V4cGFuZCcsXG4gICAgICAgICgpID0+IGlzUm93RXhwYW5kZWQoZGF0YS5rZXkpLFxuICAgICAgICBhZGRpbmcgPT4geyB1cGRhdGVFeHBhbmRlZChkYXRhLmtleSwgYWRkaW5nKSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2VsbFZhbHVlIChjb2wsIHJvdykge1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5maWVsZChyb3cpIDogcm93WyBjb2wuZmllbGQgXVxuICAgICAgcmV0dXJuIGNvbC5mb3JtYXQgIT09IHZvaWQgMCA/IGNvbC5mb3JtYXQodmFsLCByb3cpIDogdmFsXG4gICAgfVxuXG4gICAgY29uc3QgbWFyZ2luYWxzU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcGFnaW5hdGlvbjogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgcGFnZXNOdW1iZXI6IHBhZ2VzTnVtYmVyLnZhbHVlLFxuICAgICAgaXNGaXJzdFBhZ2U6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgaXNMYXN0UGFnZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcblxuICAgICAgaW5GdWxsc2NyZWVuOiBpbkZ1bGxzY3JlZW4udmFsdWUsXG4gICAgICB0b2dnbGVGdWxsc2NyZWVuXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBnZXRUb3BEaXYgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgdG9wID0gc2xvdHMudG9wLFxuICAgICAgICB0b3BMZWZ0ID0gc2xvdHNbICd0b3AtbGVmdCcgXSxcbiAgICAgICAgdG9wUmlnaHQgPSBzbG90c1sgJ3RvcC1yaWdodCcgXSxcbiAgICAgICAgdG9wU2VsZWN0aW9uID0gc2xvdHNbICd0b3Atc2VsZWN0aW9uJyBdLFxuICAgICAgICBoYXNTZWxlY3Rpb24gPSBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgdG9wU2VsZWN0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgICAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwLFxuICAgICAgICB0b3BDbGFzcyA9ICdxLXRhYmxlX190b3AgcmVsYXRpdmUtcG9zaXRpb24gcm93IGl0ZW1zLWNlbnRlcidcblxuICAgICAgaWYgKHRvcCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBbIHRvcChtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQgPSB0b3BTZWxlY3Rpb24obWFyZ2luYWxzU2NvcGUudmFsdWUpLnNsaWNlKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtdXG5cbiAgICAgICAgaWYgKHRvcExlZnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICB0b3BMZWZ0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX190aXRsZScsIHByb3BzLnRpdGxlQ2xhc3MgXVxuICAgICAgICAgICAgICB9LCBwcm9wcy50aXRsZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3BSaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICAgIClcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgdG9wUmlnaHQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU2VsZWN0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogYWxsUm93c1NlbGVjdGVkLnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZ2V0VEhlYWRUUigpXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3RyJywgeyBjbGFzczogJ3EtdGFibGVfX3Byb2dyZXNzJyB9LCBbXG4gICAgICAgICAgICBoKCd0aCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZVxuICAgICAgICAgICAgfSwgZ2V0UHJvZ3Jlc3MoKSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aGVhZCcsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkVFIgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgaGVhZGVyID0gc2xvdHMuaGVhZGVyLFxuICAgICAgICBoZWFkZXJDZWxsID0gc2xvdHNbICdoZWFkZXItY2VsbCcgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcihcbiAgICAgICAgICBnZXRIZWFkZXJTY29wZSh7IGhlYWRlcjogdHJ1ZSB9KVxuICAgICAgICApLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaGVhZGVyQ2VsbENvbCA9IHNsb3RzWyBgaGVhZGVyLWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICBzbG90ID0gaGVhZGVyQ2VsbENvbCAhPT0gdm9pZCAwID8gaGVhZGVyQ2VsbENvbCA6IGhlYWRlckNlbGwsXG4gICAgICAgICAgcHJvcHMgPSBnZXRIZWFkZXJTY29wZSh7IGNvbCB9KVxuXG4gICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QocHJvcHMpXG4gICAgICAgICAgOiBoKFFUaCwge1xuICAgICAgICAgICAga2V5OiBjb2wubmFtZSxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgfSwgKCkgPT4gY29sLmxhYmVsKVxuICAgICAgfSlcblxuICAgICAgaWYgKHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ncmlkICE9PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sICcgJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnaGVhZGVyLXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEhlYWRlclNjb3BlKHt9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgndHInLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlSGVhZGVyU3R5bGVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdFByb3AoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAgICgpID0+IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NdWx0aXBsZVNlbGVjdGlvblNldCAodmFsKSB7XG4gICAgICBpZiAoc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoZ2V0Um93S2V5LnZhbHVlKSxcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICB2YWxcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZJY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUuZmlyc3RQYWdlLFxuICAgICAgICBwcm9wcy5pY29uUHJldlBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5wcmV2UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbk5leHRQYWdlIHx8ICRxLmljb25TZXQudGFibGUubmV4dFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25MYXN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmxhc3RQYWdlXG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJvdHRvbURpdiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZUJvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGhpbmdUb0Rpc3BsYXkudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLmhpZGVOb0RhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9wcy5sb2FkaW5nID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5sb2FkaW5nTGFiZWwgfHwgJHEubGFuZy50YWJsZS5sb2FkaW5nXG4gICAgICAgICAgOiAocHJvcHMuZmlsdGVyID8gcHJvcHMubm9SZXN1bHRzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub1Jlc3VsdHMgOiBwcm9wcy5ub0RhdGFMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vRGF0YSlcblxuICAgICAgICBjb25zdCBub0RhdGEgPSBzbG90c1sgJ25vLWRhdGEnIF1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub0RhdGEgIT09IHZvaWQgMFxuICAgICAgICAgID8gWyBub0RhdGEoeyBtZXNzYWdlLCBpY29uOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmcsIGZpbHRlcjogcHJvcHMuZmlsdGVyIH0pIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fYm90dG9tLW5vZGF0YS1pY29uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmdcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIF1cblxuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgKyAnIHEtdGFibGVfX2JvdHRvbS0tbm9kYXRhJyB9LCBjaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm90dG9tID0gc2xvdHMuYm90dG9tXG5cbiAgICAgIGlmIChib3R0b20gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgWyBib3R0b20obWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuaGlkZVNlbGVjdGVkQmFubmVyICE9PSB0cnVlICYmIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAocHJvcHMuc2VsZWN0ZWRSb3dzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5zZWxlY3RlZFJlY29yZHMpKHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5oaWRlUGFnaW5hdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBib3R0b21DbGFzcyArICcganVzdGlmeS1lbmQnXG4gICAgICAgIH0sIGdldFBhZ2luYXRpb25EaXYoY2hpbGQpKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBjaGlsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ1NlbGVjdGlvbiAocGFnKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHBhZy52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uRGl2IChjaGlsZCkge1xuICAgICAgbGV0IGNvbnRyb2xcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgcGFnaW5hdGlvbkxhYmVsID0gcHJvcHMucGFnaW5hdGlvbkxhYmVsIHx8ICRxLmxhbmcudGFibGUucGFnaW5hdGlvbixcbiAgICAgICAgcGFnaW5hdGlvblNsb3QgPSBzbG90cy5wYWdpbmF0aW9uLFxuICAgICAgICBoYXNPcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDFcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICApXG5cbiAgICAgIGlmIChoYXNPcHRzID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0sIFtcbiAgICAgICAgICAgICAgcHJvcHMucm93c1BlclBhZ2VMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnJlY29yZHNQZXJQYWdlXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGgoUVNlbGVjdCwge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX3NlbGVjdCBpbmxpbmUgcS10YWJsZV9fYm90dG9tLWl0ZW0nLFxuICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgICAgICAgICAgID8gJHEubGFuZy50YWJsZS5hbGxSb3dzXG4gICAgICAgICAgICAgICAgOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0RlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zQ292ZXI6IHRydWUsXG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25QYWdTZWxlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnaW5hdGlvblNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICBjb250cm9sID0gcGFnaW5hdGlvblNsb3QobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29udHJvbCA9IFtcbiAgICAgICAgICBoKCdzcGFuJywgcm93c1BlclBhZ2UgIT09IDAgPyB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0gOiB7fSwgW1xuICAgICAgICAgICAgcm93c1BlclBhZ2VcbiAgICAgICAgICAgICAgPyBwYWdpbmF0aW9uTGFiZWwoZmlyc3RSb3dJbmRleC52YWx1ZSArIDEsIE1hdGgubWluKGxhc3RSb3dJbmRleC52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICA6IHBhZ2luYXRpb25MYWJlbCgxLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG5cbiAgICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwICYmIHBhZ2VzTnVtYmVyLnZhbHVlID4gMSkge1xuICAgICAgICAgIGNvbnN0IGJ0blByb3BzID0ge1xuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHMuZGVuc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJ0blByb3BzLnNpemUgPSAnc20nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0ZpcnN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZpcnN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdQcmV2JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHByZXZQYWdlXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTmV4dCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAyIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG5leHRQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdMYXN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDMgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbGFzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBjb250cm9sKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkSGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuZ3JpZEhlYWRlciA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIFtcbiAgICAgICAgICAgICAgZ2V0VEhlYWQoaClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gZ2V0UHJvZ3Jlc3MoaClcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fbWlkZGxlJyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkQm9keSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gc2xvdHMuaXRlbSAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMuaXRlbVxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHNjb3BlLmNvbHMubWFwKFxuICAgICAgICAgICAgY29sID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdGl0bGUnIH0sIFsgY29sLmxhYmVsIF0pLFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXZhbHVlJyB9LCBbIGNvbC52YWx1ZSBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBzbG90KHNjb3BlKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNjb3BlLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIHNjb3BlLmtleSBdLCBbIHNjb3BlLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBjb250ZW50KSxcbiAgICAgICAgICAgICAgaChRU2VwYXJhdG9yLCB7IGRhcms6IGlzRGFyay52YWx1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAncS10YWJsZV9fZ3JpZC1pdGVtLWNhcmQnICsgY2FyZERlZmF1bHRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHMuY2FyZENsYXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICAgfHwgcHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gJyBjdXJzb3ItcG9pbnRlcidcblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtIGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMydcbiAgICAgICAgICAgICAgKyAoc2NvcGUuc2VsZWN0ZWQgPT09IHRydWUgPyAnIHEtdGFibGVfX2dyaWQtaXRlbS0tc2VsZWN0ZWQnIDogJycpXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYmxlX19ncmlkLWNvbnRlbnQgcm93JyxcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGFpbmVyQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRDb250YWluZXJTdHlsZVxuICAgICAgfSwgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcCgocm93LCBwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0oZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICBrZXk6IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBwYWdlSW5kZXhcbiAgICAgICAgfSkpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHMgYW5kIG5lZWRlZCBjb21wdXRlZCBwcm9wc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb24sXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICBpc1Jvd0V4cGFuZGVkLFxuICAgICAgc2V0RXhwYW5kZWQsXG4gICAgICBzb3J0LFxuICAgICAgcmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBnZXRDZWxsVmFsdWVcbiAgICB9KVxuXG4gICAgaW5qZWN0TXVsdGlwbGVQcm9wcyh2bS5wcm94eSwge1xuICAgICAgZmlsdGVyZWRTb3J0ZWRSb3dzOiAoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3M6ICgpID0+IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcjogKCkgPT4gY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFsgZ2V0VG9wRGl2KCkgXVxuICAgICAgY29uc3QgZGF0YSA9IHsgcmVmOiByb290UmVmLCBjbGFzczogY29udGFpbmVyQ2xhc3MudmFsdWUgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKGdldEdyaWRIZWFkZXIoKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogWyBkYXRhLmNsYXNzLCBwcm9wcy5jYXJkQ2xhc3MgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEJvZHkoKSxcbiAgICAgICAgZ2V0Qm90dG9tRGl2KClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgc2xvdHMubG9hZGluZygpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCI+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCJbZGlzYywgdHJhY2tzXSBpbiBwcm9wcy50cmFja3MuZW50cmllcygpXCJcbiAgICAgIHYtYmluZDprZXk9XCJkaXNjLmlkIVwiXG4gICAgICBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWQgcS1wYi1sZ1wiXG4gICAgPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgOnJvd3M9XCJ0cmFja3NcIlxuICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICAgIGZsYXRcbiAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgdmlydHVhbC1zY3JvbGxcbiAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGhcbiAgICAgICAgICAgICAgdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJjb2wubmFtZVwiXG4gICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgY29sLmxhYmVsIH19XG4gICAgICAgICAgICA8L3EtdGg+XG4gICAgICAgICAgPC9xLXRyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWluZGV4PVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01XCJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmdXaGljaCA9IHByb3BzLmtleVwiXG4gICAgICAgICAgICAgIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cImhvdmVyaW5nV2hpY2ggIT09IHByb3BzLmtleSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgOmljb249XCJob3ZlcmluZ1doaWNoID09PSBwcm9wcy5rZXkgPyBvdXRsaW5lZFBsYXlBcnJvdyA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC10aXRsZT1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmUtb24taG92ZXIgcG9pbnRlci1vbi1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtY2hpcFxuICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy13aGl0ZS1hLTVcIlxuICAgICAgICAgICAgICB2LWZvcj1cInByb3AgaW4gcHJvcHMudmFsdWVcIlxuICAgICAgICAgICAgICA6a2V5PVwicHJvcC5pZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IHByb3AudGl0bGUuZW4gfX1cbiAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlIH19XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgIDxxLW1lbnUgY29udGV4dC1tZW51PlxuICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHhcIj5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrQnlJZChwcm9wcy5rZXksIFF1ZXVlQWRkTW9kZS5BUFBFTkRfTkVYVClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+Q29weSBUcmFjayBVcmw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5WaWV3IE1ldGFkYXRhPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgb3V0bGluZWRQbGF5QXJyb3cgfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IFFUYWJsZSB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJ3NyYy9tb2RlbHMvRHVyYXRpb24nO1xuaW1wb3J0IFF1ZXVlU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5pbXBvcnQgeyBpbmplY3QsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5cbmludGVyZmFjZSBUcmFja0xpc3RUYWJsZVByb3BzIHtcbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaG92ZXJpbmdXaGljaCA9IHJlZjxudW1iZXI+KCk7XG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlLFxufTtcblxuY29uc3QgY29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpbmRleCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcjJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmluZGV4LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBzdHlsZTogJ3dpZHRoOiAyNHB4JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnVElUTEUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm5hbWU/Ll9kZWZhdWx0LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1oNCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+XG4gICAgICBgJHtEdXJhdGlvbi5mcm9tRHVyYXRpb25TdHJpbmcodmFsKS50b0R1cmF0aW9uU3RyaW5nKCl9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ncmV5LTQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8VHJhY2tMaXN0VGFibGVQcm9wcz4oKTtcbjwvc2NyaXB0PlxuIiwiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdW51c2VkLXZhcnMgLS0+XG48dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDYwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAxMjAwcHg7IG1heC13aWR0aDogODB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkFsYnVtIEFzc2V0czwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgdi1pZj1cImFsYnVtQXNzZXRzLmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8cS10YWJsZVxuICAgICAgICAgIDpyb3dzPVwiYWxidW1Bc3NldHNcIlxuICAgICAgICAgIDpjb2x1bW5zPVwidGFibGVDb2x1bW5zXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtYWN0aW9ucz1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ZCBjbGFzcz1cInJvdyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cS1idG4tZHJvcGRvd25cbiAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgbm8taWNvbi1hbmltYXRpb25cbiAgICAgICAgICAgICAgICA6ZHJvcGRvd24taWNvbj1cIm91dGxpbmVkTWVudVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb253bG9hZEFzc2V0KHByb3BzLnJvdylcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJtYXRGaWxlRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5Eb3dubG9hZDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY29weUFzc2V0VXJsKHByb3BzLnJvdylcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJtYXRDb250ZW50Q29weVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkNvcHkgVVJMPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLWJ0bi1kcm9wZG93bj5cblxuICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cInEtcGItbm9uZVwiXG4gICAgICAgIHYtZWxzZVxuICAgICAgPlxuICAgICAgICA8cS1jYXJkLW1haW4+XG4gICAgICAgICAgPHEtbWFya3VwIHZhbHVlPVwiTm8gYXNzZXRzIGZvdW5kLlwiIC8+XG4gICAgICAgIDwvcS1jYXJkLW1haW4+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZE1lbnUsXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7XG4gIG1hdEZpbGVEb3dubG9hZCxcbiAgbWF0Q29udGVudENvcHksXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdCc7XG5pbXBvcnQgeyBRRGlhbG9nIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHM+KCk7XG5cbmNvbnN0IGFsYnVtQXNzZXRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcHJvcHMuYWxidW0ub3RoZXJGaWxlcyE7XG59KTtcblxuY29uc3QgZG9ud2xvYWRBc3NldCA9IChhc3NldDogQXNzZXRSZWFkRHRvKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdEb3dubG9hZCBhc3NldCcsIGFzc2V0KTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBhc3NldC51cmwhO1xuICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuICBhLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjb3B5QXNzZXRVcmwgPSAoYXNzZXQ6IEFzc2V0UmVhZER0bykgPT4ge1xuICBjb25zb2xlLmxvZygnQ29weSBhc3NldCBVUkwnLCBhc3NldCk7XG5cbiAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhc3NldC51cmwhKTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDbGlwYm9hcmQgQVBJIG5vdCBhdmFpbGFibGUnKTtcbiAgfVxufTtcblxuY29uc3QgdGFibGVDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2lkJyxcbiAgICBsYWJlbDogJ0Fzc2V0IElEJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmlkXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbmFtZScsXG4gICAgbGFiZWw6ICdOYW1lJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5uYW1lXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc2l6ZScsXG4gICAgbGFiZWw6ICdTaXplIChNQiknLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cuc2l6ZSxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7KHZhbCAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDIpfWBcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtaW1lLXR5cGUnLFxuICAgIGxhYmVsOiAnQ29udGVudCBUeXBlJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93Lm1pbWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhY3Rpb25zJyxcbiAgICBsYWJlbDogJ0FjdGlvbnMnLCBhbGlnbjogJ2NlbnRlcidcbiAgfVxuXTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJjb250cm9sbGVyXCI+XG4gICAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICAgIDxxLXNwaW5uZXItZ2VhcnMgc2l6ZT1cIjEwMHB4XCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICAgIDxBbGJ1bUluZm9TZWN0aW9uIDphbGJ1bT1cImRhdGEhLm1hc3RlckFsYnVtXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCBxLW10LWxnIHJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXgtbWRcIlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRleHQtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInBsYXlBbGJ1bShkYXRhISwgUXVldWVBZGRNb2RlLlBMQVlfSU1NRURJQVRFTFkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxNTBweFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5BUFBFTkRfTkVYVClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5BUFBFTkRfTEFTVClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXgtbWRcIlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cbiAgICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBjbGFzcz1cInEtbXgtbWRcIlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtbWVudVxuICAgICAgICAgICAgICAgIGZpdFxuICAgICAgICAgICAgICAgIGFuY2hvcj1cImNlbnRlciBtaWRkbGVcIlxuICAgICAgICAgICAgICAgIHNlbGY9XCJ0b3AgbWlkZGxlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dBbGJ1bUFzc2V0RGlhbG9nKGRhdGEhLm1hc3RlckFsYnVtKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBPdGhlciBBc3NldHM8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkRWRpdE5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+QXR0cmlidXRlIEVkaXRvcjwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFRyYWNrTGlzdFRhYmxlIDp0cmFja3M9XCJkYXRhIS50cmFja3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZXJyb3I9XCJ7IGVycm9yIH1cIj5cbiAgICAgICAgPHEtY2FyZFxuICAgICAgICAgIGNsYXNzPVwicS1tYS1tZFwiXG4gICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDQwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWNhcmQtdGl0bGUgY2xhc3M9XCJ0ZXh0LWg2XCI+RXJyb3I8L3EtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDxxLWNhcmQtbWFpbj5cbiAgICAgICAgICAgICAgPHEtbWFya3VwIDp2YWx1ZT1cImVycm9yPy5tZXNzYWdlXCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLW1haW4+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuXG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAge3sgZXJyb3I/LnN0YWNrIH19XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkRWRpdE5vdGVcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBBbGJ1bUFwaSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBDb21wdXRlZFJlZiwgaW5qZWN0LCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCBBbGJ1bUluZm9TZWN0aW9uIGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9BbGJ1bUluZm9TZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgVHJhY2tMaXN0VGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1QYWdlL1RyYWNrTGlzdFRhYmxlLnZ1ZSc7XG5pbXBvcnQgeyBRQ2FyZCwgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EaWFsb2dzL0FsYnVtQXNzZXRzVmlld2VyRGlhbG9nLnZ1ZSc7XG5pbXBvcnQgUXVldWVTZXJ2aWNlLCB7IFF1ZXVlQWRkTW9kZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcblxuLy8gVmlldyBNb2RlbHNcbmludGVyZmFjZSBBbGJ1bVBhZ2VSb3V0ZVBhcmFtZXRlcnMge1xuICBhbGJ1bUlkOiBDb21wdXRlZFJlZjxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgQWxidW1QYWdlVmlld01vZGVsIHtcbiAgbWFzdGVyQWxidW06IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xuXG4gIC8vIEFsYnVtIC0+IFRyYWNrcyBpbiBBbGJ1bSwgZm9yIGVhY2ggYWxidW1cbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdC9nZXQgcmVxdWlyZWQgc2VydmNpZXNcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3Qgcm91dGVQYXJhbXMgPSB7XG4gIGFsYnVtSWQ6IGNvbXB1dGVkKCgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKSxcbn07XG5jb25zdCBjb250cm9sbGVyID0gdXNlTG9hZGFibGVDb250cm9sbGVyPEFsYnVtUGFnZVZpZXdNb2RlbD4oKTtcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvXG4pOiBBbGJ1bVBhZ2VWaWV3TW9kZWwgPT4ge1xuICBjb25zdCB0cmFja3MgPSBuZXcgTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+KCk7XG5cbiAgaWYgKG1hc3Rlci50cmFja3MpIHtcbiAgICBtYXN0ZXIudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyQWxidW06IG1hc3RlcixcbiAgICBkaXNjczogW10sXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgdHJhY2tzLnNldChtYXN0ZXIsIG1hc3Rlci50cmFja3MpO1xuICB9XG5cbiAgZGlzY3MuZm9yRWFjaCgoZGlzYykgPT4ge1xuICAgIGlmIChkaXNjLnRyYWNrcykge1xuICAgICAgLy8gU29ydCB0cmFja3MgYnkgaW5kZXhcbiAgICAgIGRpc2MudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgICAgdHJhY2tzLnNldChkaXNjLCBkaXNjLnRyYWNrcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3MsXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbCA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgaWYgKGRpc2NzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyhtYXN0ZXIsIGRpc2NzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MobWFzdGVyKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZE11bHRpRGlzY0FsYnVtID0gYXN5bmMgKFxuICBtYXN0ZXJBbGJ1bUlkOiBzdHJpbmdcbik6IFByb21pc2U8e1xuICBtYXN0ZXI6IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xufT4gPT4ge1xuICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICApO1xuXG4gIGNvbnN0IG1hc3RlckFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgIGlkOiBtYXN0ZXJBbGJ1bUlkLFxuICB9KTtcblxuICBjb25zdCBkaXNjcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIG1hc3RlckFsYnVtLmNoaWxkQWxidW1zPy5tYXAoKGNoaWxkQWxidW0pID0+XG4gICAgICBhbGJ1bUFwaS5nZXRBbGJ1bSh7XG4gICAgICAgIGlkOiBjaGlsZEFsYnVtLmlkISxcbiAgICAgIH0pXG4gICAgKSB8fCBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyOiBtYXN0ZXJBbGJ1bSxcbiAgICBkaXNjczogZGlzY3MsXG4gIH07XG59O1xuXG5jb25zdCBsb2FkID0gYXN5bmMgKGFsYnVtSWQ6IHN0cmluZykgPT4ge1xuICBjb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICAgIGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpXG4gICAgKTtcblxuICAgIGNvbnN0IGFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgaWQ6IGFsYnVtSWQsXG4gICAgfSk7XG5cbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIHRoZSBhbGJ1bSBoYXMgZGlzY3Mgb3IgdGhlIGFsYnVtIGl0c2VsZiBpcyBhIGRpc2NzXG4gICAgY29uc3QgaXNNdWx0aURpc2MgPVxuICAgICAgYWxidW0ucGFyZW50QWxidW0gfHwgKGFsYnVtPy5jaGlsZEFsYnVtcz8ubGVuZ3RoIHx8IDApID4gMDtcblxuICAgIGxldCB2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbDtcbiAgICBpZiAoaXNNdWx0aURpc2MpIHtcbiAgICAgIGNvbnN0IGlzTWFzdGVyID0gIWFsYnVtLnBhcmVudEFsYnVtICYmIGFsYnVtLmRpc2NOdW1iZXIgPT09IDA7XG4gICAgICBpZiAoIWlzTWFzdGVyKSB7XG4gICAgICAgICRyb3V0ZXIucmVwbGFjZSh7XG4gICAgICAgICAgbmFtZTogJ0FsYnVtJyxcbiAgICAgICAgICBwYXJhbXM6IHsgYWxidW1JZDogYWxidW0ucGFyZW50QWxidW0hLmlkISB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFzdGVyQWxidW1JZCA9IGFsYnVtLmlkITtcbiAgICAgIGNvbnN0IHsgbWFzdGVyLCBkaXNjcyB9ID0gYXdhaXQgbG9hZE11bHRpRGlzY0FsYnVtKG1hc3RlckFsYnVtSWQpO1xuXG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKG1hc3RlciwgZGlzY3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKGFsYnVtLCBbXSk7XG4gICAgfVxuXG4gICAgY29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29udHJvbGxlci5zZXRFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dBbGJ1bUFzc2V0RGlhbG9nID0gKGFsYnVtOiBBbGJ1bVJlYWREdG8pID0+IHtcbiAgJHEuZGlhbG9nKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2csXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBhbGJ1bSxcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbmNvbnN0IHBsYXlBbGJ1bSA9ICh2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbCwgYWRkTW9kZTogUXVldWVBZGRNb2RlKSA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IEFycmF5LmZyb20odmlld01vZGVsLnRyYWNrcy52YWx1ZXMoKSlcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG5cbiAgY29uc3QgdHJhY2tJZHMgPSB0cmFja3MubWFwKCh0cmFjaykgPT4gdHJhY2suaWQhKTtcblxuICBxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrc0J5SWRzKHRyYWNrSWRzLCBhZGRNb2RlKTtcbn07XG5cbi8vIGJpbmQgaG9va3MgdG8gdXBkYXRlIGNvbnRyb2xsZXIgaWYgdGhlIHJvdXRlIGNoYW5nZXNcbm9uTW91bnRlZCgoKSA9PiB7XG4gIGxvYWQocm91dGVQYXJhbXMuYWxidW1JZC52YWx1ZSBhcyBzdHJpbmcpO1xuXG4gIHdhdGNoKHJvdXRlUGFyYW1zLmFsYnVtSWQsIGFzeW5jIChhbGJ1bUlkKSA9PiB7XG4gICAgYXdhaXQgbG9hZChhbGJ1bUlkIGFzIHN0cmluZyk7XG4gIH0pO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImRlZiIsImxhc3RQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEVBLFVBQU0sVUFBVTtBQUNoQixVQUFNLFFBQVE7QUFDZCxVQUFNLHNCQUFzQixNQUFpQzs7QUFDM0QsWUFBTSxnQkFBZSxXQUFNLE1BQU0sZ0JBQVosbUJBQXlCLE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFDaEUsWUFBQSxPQUFPLE1BQU8sT0FBTztBQUNsQixlQUFBO0FBQUEsTUFDVCxHQUFHLENBQW9DO0FBRS9CLGNBQUEs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
