import { Q as QSpinnerGears, L as LoadableElement } from "./LoadableElement.a582329d.js";
import { Q as QTooltip, t as outlinedInfo, m as outlinedPlayArrow, u as outlinedMenu, c as outlinedFavoriteBorder, v as outlinedMoreHoriz, w as outlinedDescription, x as outlinedEditNote } from "./QTooltip.cb59cc63.js";
import { a as QItemSection, Q as QItem, b as QItemLabel } from "./QItem.a0dbc1cf.js";
import { Q as QList } from "./QList.ae90ef18.js";
import { i as useVirtualScrollProps, j as useVirtualScroll, k as commonVirtPropsList, Q as QSelect, l as QChip, g as QMenu } from "./QSelect.8ba68960.js";
import { F as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, J as createVNode, I as withCtx, T as unref, N as QBtn, R as createBaseVNode, H as createBlock, a3 as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, V as QSeparator, W as createTextVNode, _ as _export_sfc, bo as pushScopeId, bp as popScopeId, c as createComponent, b as h, v as hSlot, h as hUniqueSlot, Z as QIcon, g as getCurrentInstance, a as computed, d as useDarkProps, j as useDark, r as ref, w as watch, ac as onBeforeMount, p as onMounted, aS as onActivated, aR as onDeactivated, o as onBeforeUnmount, ar as getScrollTarget, ai as listenOpts, B as hMergeSlot, az as useSizeProps, aA as useSize, bq as vmHasRouter, br as History, a4 as isNumber, bs as isDate, a5 as isObject, q as nextTick, bt as injectMultipleProps, bu as QCheckbox, ba as injectProp, i as inject, s as withDirectives, bv as QueueAddMode, ab as Duration, ae as resolveComponent, K as QCardSection, b7 as QAvatar, M as QCardActions, O as QCard, Q as QDialog, bn as useLoadableController, bj as AlbumApi } from "./index.4b21ffef.js";
import { Q as QPage } from "./QPage.67da47f4.js";
import { C as ClosePopup } from "./ClosePopup.ff7c543f.js";
import { Q as QImg } from "./QImg.3929759c.js";
import { Q as QBtnDropdown, d as matFileDownload, e as matContentCopy, u as useQuasar } from "./QBtnDropdown.a2336e82.js";
var AlbumInfoSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4e996f26"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "row full-width q-px-none q-pt-lg" };
const _hoisted_2$2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3$2 = { class: "col-8" };
const _hoisted_4$1 = { class: "row full-width full-height items-end" };
const _hoisted_5$1 = { class: "col-12" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Album", -1));
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(QBtn, {
          class: "all-pointer-events absolute-top-right",
          icon: unref(outlinedInfo),
          flat: "",
          round: "",
          dense: ""
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, null, {
              default: withCtx(() => {
                var _a, _b;
                return [
                  createTextVNode(" Data provided by " + toDisplayString((_b = (_a = unref(viewModel)) == null ? void 0 : _a.dataSources) == null ? void 0 : _b.join(", ")), 1)
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["icon"]),
        createBaseVNode("div", _hoisted_2$2, [
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
var AlbumInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4e996f26"], ["__file", "AlbumInfoSection.vue"]]);
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
const _hoisted_3$1 = { class: "underline-on-hover pointer-on-hover" };
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Error", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1" }, "Failed to load album", -1);
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
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmQwNTg5NGE1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1wYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctZXhwYW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGFibGUuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvVHJhY2tMaXN0VGFibGUudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9BbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBxLXB4LW5vbmUgcS1wdC1sZ1wiPlxuICAgIDxxLWJ0blxuICAgICAgY2xhc3M9XCJhbGwtcG9pbnRlci1ldmVudHMgYWJzb2x1dGUtdG9wLXJpZ2h0XCJcbiAgICAgIDppY29uPVwib3V0bGluZWRJbmZvXCJcbiAgICAgIGZsYXRcbiAgICAgIHJvdW5kXG4gICAgICBkZW5zZVxuICAgID5cbiAgICAgIDxxLXRvb2x0aXA+XG4gICAgICAgIERhdGEgcHJvdmlkZWQgYnkge3sgdmlld01vZGVsPy5kYXRhU291cmNlcz8uam9pbignLCAnKSB9fVxuICAgICAgPC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNvbC00IHEtcHgtbWRcIlxuICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDIzMHB4XCJcbiAgICA+XG4gICAgICA8cS1pbWdcbiAgICAgICAgOnNyYz1cInZpZXdNb2RlbC5hbGJ1bUNvdmVyVXJsXCJcbiAgICAgICAgcmF0aW89XCIxXCJcbiAgICAgICAgdi1pZj1cInZpZXdNb2RlbC5hbGJ1bUNvdmVyVXJsXCJcbiAgICAgID5cbiAgICAgIDwvcS1pbWc+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+QWxidW08L2Rpdj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+XG4gICAgICAgICAgICB7eyB2aWV3TW9kZWwuYWxidW1OYW1lIH19XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cImFydGlzdHNcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1ldGFkYXRhLWVudHJ5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtYm9sZCBjdXJzb3ItcG9pbnRlciBhcnRpc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZ290b0NpcmNsZShhcnRpc3RJZCBhcyBzdHJpbmcpXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihhcnRpc3ROYW1lLCBhcnRpc3RJZCkgaW4gdmlld01vZGVsLmFsYnVtQXJ0aXN0c1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImFydGlzdElkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGFydGlzdE5hbWUgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxxLXNlcGFyYXRvclxuICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICBzcGFjZWRcbiAgICAgICAgICAgID48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwicmVsZWFzZS1kYXRlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZXRhZGF0YS1lbnRyeVwiXG4gICAgICAgICAgICAgIHYtaWY9XCJ2aWV3TW9kZWwucmVsZWFzZURhdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICB7eyB2aWV3TW9kZWwucmVsZWFzZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgQWxidW1SZWFkRHRvIH0gZnJvbSAnYmFja2VuZC1hcGktY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgb3V0bGluZWRJbmZvLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmludGVyZmFjZSBBbGJ1bUluZm9TZWN0aW9uUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCB7XG4gIGFsYnVtTmFtZTogc3RyaW5nO1xuICAvLyBBcnRpc3QgaWQgLT4gYXJ0aXN0IG5hbWUsIGlkIG5lZWRlZCBmb3IgbmF2aWdhdGlvblxuICBhbGJ1bUFydGlzdHM6IHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgYWxidW1Db3ZlclVybDogc3RyaW5nIHwgbnVsbDtcblxuICByZWxlYXNlRGF0ZTogRGF0ZSB8IG51bGw7XG5cbiAgLy8gRGF0YSBwcm92aWRlcnNcbiAgZGF0YVNvdXJjZXM6IHN0cmluZ1tdO1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtSW5mb1NlY3Rpb25Qcm9wcz4oKTtcbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoKTogQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IGFsYnVtQXJ0aXN0cyA9IHByb3BzLmFsYnVtLmFsYnVtQXJ0aXN0Py5yZWR1Y2UoKGFjYywgYXJ0aXN0KSA9PiB7XG4gICAgYWNjW2FydGlzdC5pZCFdID0gYXJ0aXN0Lm5hbWUhO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9IGFzIHsgW2FydGlzdElkOiBzdHJpbmddOiBzdHJpbmcgfSk7XG5cbiAgY29uc29sZS5sb2coJ2FsYnVtQXJ0aXN0cycsIGFsYnVtQXJ0aXN0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGJ1bU5hbWU6IHByb3BzLmFsYnVtLm5hbWU/Ll9kZWZhdWx0IHx8ICcnLFxuICAgIGFsYnVtQXJ0aXN0cyxcbiAgICBhbGJ1bUNvdmVyVXJsOiBwcm9wcy5hbGJ1bS50aHVtYm5haWw/LmxhcmdlPy51cmwgfHwgbnVsbCxcbiAgICByZWxlYXNlRGF0ZTogcHJvcHMuYWxidW0ucmVsZWFzZURhdGUgfHwgbnVsbCxcbiAgICBkYXRhU291cmNlczogcHJvcHMuYWxidW0uZGF0YVNvdXJjZSB8fCBbXSxcbiAgfSBhcyBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsO1xufTtcblxuY29uc3Qgdmlld01vZGVsOiBBbGJ1bUluZm9TZWN0aW9uVmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbCgpO1xuXG5jb25zdCBnb3RvQ2lyY2xlID0gKGNpcmNsZUlkOiBzdHJpbmcpID0+IHtcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICBwYXJhbXM6IHsgY2lyY2xlSWQsIHBhZ2U6ICcxJyB9LFxuICB9KTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiNhcnRpc3RzIC5hcnRpc3QtbmFtZTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcsICc7XG59XG5cbi5xLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90LCBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRoJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IG9uQ2xpY2sgPSBldnQgPT4geyBlbWl0KCdjbGljaycsIGV2dCkgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0aCcsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGxldCBjb2wsIGNoaWxkXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXVxuICAgICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbFxuICAgICAgfVxuXG4gICAgICBpZiAoY29sLnNvcnRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbC5hbGlnbiA9PT0gJ3JpZ2h0J1xuICAgICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgICAgOiAncHVzaCdcblxuICAgICAgICBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICAgICBjaGlsZFsgYWN0aW9uIF0oXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgY2xhc3M6IGNvbC5fX2ljb25DbGFzcyxcbiAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUuYXJyb3dVcFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBjb2wuX190aENsYXNzXG4gICAgICAgICAgKyAocHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJyBxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyksXG4gICAgICAgIHN0eWxlOiBjb2wuaGVhZGVyU3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgY29sLnNvcnRhYmxlID09PSB0cnVlICYmIHByb3BzLnByb3BzLnNvcnQoY29sKVxuICAgICAgICAgIG9uQ2xpY2soZXZ0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aCcsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVHInLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBub0hvdmVyOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRyJ1xuICAgICAgKyAocHJvcHMucHJvcHMgPT09IHZvaWQgMCB8fCBwcm9wcy5wcm9wcy5oZWFkZXIgPT09IHRydWUgPyAnJyA6ICcgJyArIHByb3BzLnByb3BzLl9fdHJDbGFzcylcbiAgICAgICsgKHByb3BzLm5vSG92ZXIgPT09IHRydWUgPyAnIHEtdHItLW5vLWhvdmVyJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCd0cicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHMucHJvcHNcblxuICAgICAgcmV0dXJuIGgoJ3RkJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArIGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBzZXBhcmF0b3JWYWx1ZXMgPSBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUU1hcmt1cFRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHdyYXBDZWxsczogQm9vbGVhbixcblxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNlcGFyYXRvclZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbWFya3VwLXRhYmxlIHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyBgIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvcmBcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyayBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdGFibGUtLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdGFibGUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlXG4gICAgfSwgW1xuICAgICAgaCgndGFibGUnLCB7IGNsYXNzOiAncS10YWJsZScgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgY29udGVudCkge1xuICByZXR1cm4gaCgnZGl2JywgcHJvcHMsIFtcbiAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBjb250ZW50KVxuICBdKVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFMaXN0IGZyb20gJy4uL2l0ZW0vUUxpc3QuanMnXG5pbXBvcnQgUU1hcmt1cFRhYmxlIGZyb20gJy4uL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMnXG5pbXBvcnQgZ2V0VGFibGVNaWRkbGUgZnJvbSAnLi4vdGFibGUvZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHsgdXNlVmlydHVhbFNjcm9sbCwgdXNlVmlydHVhbFNjcm9sbFByb3BzIH0gZnJvbSAnLi91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBjb21wcyA9IHtcbiAgbGlzdDogUUxpc3QsXG4gIHRhYmxlOiBRTWFya3VwVGFibGVcbn1cblxuY29uc3QgdHlwZU9wdGlvbnMgPSBbICdsaXN0JywgJ3RhYmxlJywgJ19fcXRhYmxlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVmlydHVhbFNjcm9sbCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VWaXJ0dWFsU2Nyb2xsUHJvcHMsXG5cbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGlzdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZU9wdGlvbnMuaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuXG4gICAgaXRlbXNGbjogRnVuY3Rpb24sXG4gICAgaXRlbXNTaXplOiBOdW1iZXIsXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGF0dHJzIH0pIHtcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXRcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuaXRlbXNTaXplID49IDAgJiYgcHJvcHMuaXRlbXNGbiAhPT0gdm9pZCAwXG4gICAgICAgID8gcGFyc2VJbnQocHJvcHMuaXRlbXNTaXplLCAxMClcbiAgICAgICAgOiAoQXJyYXkuaXNBcnJheShwcm9wcy5pdGVtcykgPyBwcm9wcy5pdGVtcy5sZW5ndGggOiAwKVxuICAgICkpXG5cbiAgICBjb25zdCB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSxcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgcGFkVmlydHVhbFNjcm9sbCxcbiAgICAgIG9uVmlydHVhbFNjcm9sbEV2dFxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbFxuICAgIH0pXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwRm4gPSAoaXRlbSwgaSkgPT4gKHtcbiAgICAgICAgaW5kZXg6IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20gKyBpLFxuICAgICAgICBpdGVtXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcHJvcHMuaXRlbXNGbiA9PT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMuaXRlbXMuc2xpY2UodmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8pLm1hcChtYXBGbilcbiAgICAgICAgOiBwcm9wcy5pdGVtc0ZuKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvIC0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSkubWFwKG1hcEZuKVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXZpcnR1YWwtc2Nyb2xsIHEtdmlydHVhbC1zY3JvbGwnICsgKHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlID8gJy0taG9yaXpvbnRhbCcgOiAnLS12ZXJ0aWNhbCcpXG4gICAgICArIChwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/ICcnIDogJyBzY3JvbGwnKVxuICAgIClcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/IHt9IDogeyB0YWJpbmRleDogMCB9XG4gICAgKSlcblxuICAgIHdhdGNoKHZpcnR1YWxTY3JvbGxMZW5ndGgsICgpID0+IHtcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsRWwgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuJGVsIHx8IHJvb3RSZWYudmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIHJldHVybiBsb2NhbFNjcm9sbFRhcmdldFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChnZXRWaXJ0dWFsU2Nyb2xsRWwoKSwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX19nZXRWaXJ0dWFsQ2hpbGRyZW4gKCkge1xuICAgICAgbGV0IGNoaWxkID0gcGFkVmlydHVhbFNjcm9sbChcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gJ2xpc3QnID8gJ2RpdicgOiAndGJvZHknLFxuICAgICAgICB2aXJ0dWFsU2Nyb2xsU2NvcGUudmFsdWUubWFwKHNsb3RzLmRlZmF1bHQpXG4gICAgICApXG5cbiAgICAgIGlmIChzbG90cy5iZWZvcmUgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHNsb3RzLmJlZm9yZSgpLmNvbmNhdChjaGlsZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhNZXJnZVNsb3Qoc2xvdHMuYWZ0ZXIsIGNoaWxkKVxuICAgIH1cblxuICAgIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2xvdHMuZGVmYXVsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1FWaXJ0dWFsU2Nyb2xsOiBkZWZhdWx0IHNjb3BlZCBzbG90IGlzIHJlcXVpcmVkIGZvciByZW5kZXJpbmcnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzLnR5cGUgPT09ICdfX3F0YWJsZSdcbiAgICAgICAgPyBnZXRUYWJsZU1pZGRsZShcbiAgICAgICAgICB7IHJlZjogcm9vdFJlZiwgY2xhc3M6ICdxLXRhYmxlX19taWRkbGUgJyArIGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgICBfX2dldFZpcnR1YWxDaGlsZHJlbigpXG4gICAgICAgIClcbiAgICAgICAgOiBoKGNvbXBzWyBwcm9wcy50eXBlIF0sIHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgICAgY2xhc3M6IFsgYXR0cnMuY2xhc3MsIGNsYXNzZXMudmFsdWUgXSxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICAgIH0sIF9fZ2V0VmlydHVhbENoaWxkcmVuKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogMixcbiAgc206IDQsXG4gIG1kOiA2LFxuICBsZzogMTAsXG4gIHhsOiAxNFxufVxuXG5mdW5jdGlvbiB3aWR0aCAodmFsLCByZXZlcnNlLCAkcSkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybTogcmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgPyBgdHJhbnNsYXRlWCgkeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICctJyA6ICcnIH0xMDAlKSBzY2FsZTNkKCR7IC12YWwgfSwxLDEpYFxuICAgICAgOiBgc2NhbGUzZCgkeyB2YWwgfSwxLDEpYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGluZWFyUHJvZ3Jlc3MnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVNpemVQcm9wcyxcblxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBidWZmZXI6IE51bWJlcixcblxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgdHJhY2tDb2xvcjogU3RyaW5nLFxuXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICBzdHJpcGU6IEJvb2xlYW4sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuXG4gICAgYW5pbWF0aW9uU3BlZWQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDIxMDBcbiAgICB9LFxuXG4gICAgaW5zdGFudEZlZWRiYWNrOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHByb3h5LiRxKVxuICAgIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMsIGRlZmF1bHRTaXplcylcblxuICAgIGNvbnN0IG1vdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUpXG4gICAgY29uc3Qgd2lkdGhSZXZlcnNlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMucmV2ZXJzZSAhPT0gcHJvcHMucXVlcnkpXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4uKHNpemVTdHlsZS52YWx1ZSAhPT0gbnVsbCA/IHNpemVTdHlsZS52YWx1ZSA6IHt9KSxcbiAgICAgICctLXEtbGluZWFyLXByb2dyZXNzLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2BcbiAgICB9KSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzJ1xuICAgICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgKyAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSA/ICcgcS1saW5lYXItcHJvZ3Jlc3MtLXJldmVyc2UnIDogJycpXG4gICAgICArIChwcm9wcy5yb3VuZGVkID09PSB0cnVlID8gJyByb3VuZGVkLWJvcmRlcnMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgdHJhY2tTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKHByb3BzLmJ1ZmZlciAhPT0gdm9pZCAwID8gcHJvcHMuYnVmZmVyIDogMSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgdHJhbnNpdGlvblN1ZmZpeCA9IGNvbXB1dGVkKCgpID0+IGB3aXRoJHsgcHJvcHMuaW5zdGFudEZlZWRiYWNrID09PSB0cnVlID8gJ291dCcgOiAnJyB9LXRyYW5zaXRpb25gKVxuXG4gICAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrLS0keyBpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnZGFyaycgOiAnbGlnaHQnIH1gXG4gICAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBtb2RlbFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgobW90aW9uLnZhbHVlID09PSB0cnVlID8gMSA6IHByb3BzLnZhbHVlLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCBtb2RlbENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwtLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwtLSR7IG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/ICdpbicgOiAnJyB9ZGV0ZXJtaW5hdGVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3RyaXBlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoeyB3aWR0aDogYCR7IHByb3BzLnZhbHVlICogMTAwIH0lYCB9KSlcbiAgICBjb25zdCBzdHJpcGVDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZSBhYnNvbHV0ZS0keyBwcm9wcy5yZXZlcnNlID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUtLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICB9KSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IG1vZGVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IG1vZGVsU3R5bGUudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgcHJvcHMuc3RyaXBlID09PSB0cnVlICYmIG1vdGlvbi52YWx1ZSA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBzdHJpcGVDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogc3RyaXBlU3R5bGUudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAgICAgICAnYXJpYS12YWx1ZW1heCc6IDEsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gdm9pZCAwXG4gICAgICAgICAgOiBwcm9wcy52YWx1ZVxuICAgICAgfSwgaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBjaGlsZCkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeS5qcydcbmltcG9ydCB7IHZtSGFzUm91dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxubGV0IGNvdW50ZXIgPSAwXG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuUHJvcHMgPSB7XG4gIGZ1bGxzY3JlZW46IEJvb2xlYW4sXG4gIG5vUm91dGVGdWxsc2NyZWVuRXhpdDogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlbkVtaXRzID0gWyAndXBkYXRlOmZ1bGxzY3JlZW4nLCAnZnVsbHNjcmVlbicgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG5cbiAgbGV0IGhpc3RvcnlFbnRyeSwgZnVsbHNjcmVlbkZpbGxlck5vZGUsIGNvbnRhaW5lclxuICBjb25zdCBpbkZ1bGxzY3JlZW4gPSByZWYoZmFsc2UpXG5cbiAgdm1IYXNSb3V0ZXIodm0pID09PSB0cnVlICYmIHdhdGNoKCgpID0+IHByb3h5LiRyb3V0ZS5mdWxsUGF0aCwgKCkgPT4ge1xuICAgIHByb3BzLm5vUm91dGVGdWxsc2NyZWVuRXhpdCAhPT0gdHJ1ZSAmJiBleGl0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuZnVsbHNjcmVlbiwgdiA9PiB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSAhPT0gdikge1xuICAgICAgdG9nZ2xlRnVsbHNjcmVlbigpXG4gICAgfVxuICB9KVxuXG4gIHdhdGNoKGluRnVsbHNjcmVlbiwgdiA9PiB7XG4gICAgZW1pdCgndXBkYXRlOmZ1bGxzY3JlZW4nLCB2KVxuICAgIGVtaXQoJ2Z1bGxzY3JlZW4nLCB2KVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRGdWxsc2NyZWVuKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSB0cnVlXG4gICAgY29udGFpbmVyID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBwcm94eS4kZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm94eS4kZWwpXG5cbiAgICBjb3VudGVyKytcbiAgICBpZiAoY291bnRlciA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuICAgIH1cblxuICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGhhbmRsZXI6IGV4aXRGdWxsc2NyZWVuXG4gICAgfVxuICAgIEhpc3RvcnkuYWRkKGhpc3RvcnlFbnRyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaGlzdG9yeUVudHJ5ICE9PSB2b2lkIDApIHtcbiAgICAgIEhpc3RvcnkucmVtb3ZlKGhpc3RvcnlFbnRyeSlcbiAgICAgIGhpc3RvcnlFbnRyeSA9IHZvaWQgMFxuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocHJveHkuJGVsLCBmdWxsc2NyZWVuRmlsbGVyTm9kZSlcbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSBmYWxzZVxuXG4gICAgY291bnRlciA9IE1hdGgubWF4KDAsIGNvdW50ZXIgLSAxKVxuXG4gICAgaWYgKGNvdW50ZXIgPT09IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1mdWxsc2NyZWVuLW1peGluJylcblxuICAgICAgaWYgKHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBwcm94eS4kZWwuc2Nyb2xsSW50b1ZpZXcoKSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgIGZ1bGxzY3JlZW5GaWxsZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwcm9wcy5mdWxsc2NyZWVuID09PSB0cnVlICYmIHNldEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIG9uQmVmb3JlVW5tb3VudChleGl0RnVsbHNjcmVlbilcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIHRvZ2dsZUZ1bGxzY3JlZW4sXG4gICAgc2V0RnVsbHNjcmVlbixcbiAgICBleGl0RnVsbHNjcmVlblxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaW5GdWxsc2NyZWVuLFxuICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNvcnREYXRlIChhLCBiKSB7XG4gIHJldHVybiAobmV3IERhdGUoYSkpIC0gKG5ldyBEYXRlKGIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEJvb2xlYW4gKGEsIGIpIHtcbiAgcmV0dXJuIGEgJiYgIWJcbiAgICA/IC0xXG4gICAgOiAoIWEgJiYgYiA/IDEgOiAwKVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHNvcnREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zb3J0LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzRGF0ZSwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlU29ydFByb3BzID0ge1xuICBzb3J0TWV0aG9kOiBGdW5jdGlvbixcbiAgYmluYXJ5U3RhdGVTb3J0OiBCb29sZWFuLFxuICBjb2x1bW5Tb3J0T3JkZXI6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPT09ICdhZCcgfHwgdiA9PT0gJ2RhJyxcbiAgICBkZWZhdWx0OiAnYWQnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlU29ydCAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgY29sTGlzdCwgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb2x1bW5Ub1NvcnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0QnkgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgcmV0dXJuIHNvcnRCeVxuICAgICAgPyBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpIHx8IG51bGxcbiAgICAgIDogbnVsbFxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkU29ydE1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5zb3J0TWV0aG9kICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuc29ydE1ldGhvZFxuICAgICAgOiAoZGF0YSwgc29ydEJ5LCBkZXNjZW5kaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gc29ydEJ5KVxuICAgICAgICAgIGlmIChjb2wgPT09IHZvaWQgMCB8fCBjb2wuZmllbGQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgZGlyID0gZGVzY2VuZGluZyA9PT0gdHJ1ZSA/IC0xIDogMSxcbiAgICAgICAgICAgIHZhbCA9IHR5cGVvZiBjb2wuZmllbGQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgPyB2ID0+IGNvbC5maWVsZCh2KVxuICAgICAgICAgICAgICA6IHYgPT4gdlsgY29sLmZpZWxkIF1cblxuICAgICAgICAgIHJldHVybiBkYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICBBID0gdmFsKGEpLFxuICAgICAgICAgICAgICBCID0gdmFsKGIpXG5cbiAgICAgICAgICAgIGlmIChjb2wucmF3U29ydCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2wucmF3U29ydChBLCBCLCBhLCBiKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEEgPT09IG51bGwgfHwgQSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEIgPT09IG51bGwgfHwgQiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLnNvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAvLyBnZXRzIGNhbGxlZCB3aXRob3V0IHJvd3MgdGhhdCBoYXZlIG51bGwvdW5kZWZpbmVkIGFzIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGR1ZSB0byB0aGUgYWJvdmUgdHdvIHN0YXRlbWVudHNcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbC5zb3J0KEEsIEIsIGEsIGIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoQSkgPT09IHRydWUgJiYgaXNOdW1iZXIoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChBIC0gQikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RhdGUoQSkgPT09IHRydWUgJiYgaXNEYXRlKEIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzb3J0RGF0ZShBLCBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBBID09PSAnYm9vbGVhbicgJiYgdHlwZW9mIEIgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbIEEsIEIgXSA9IFsgQSwgQiBdLm1hcChzID0+IChzICsgJycpLnRvTG9jYWxlU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcblxuICAgICAgICAgICAgcmV0dXJuIEEgPCBCXG4gICAgICAgICAgICAgID8gLTEgKiBkaXJcbiAgICAgICAgICAgICAgOiAoQSA9PT0gQiA/IDAgOiBkaXIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICApKVxuXG4gIGZ1bmN0aW9uIHNvcnQgKGNvbCAvKiBTdHJpbmcoY29sIG5hbWUpIG9yIE9iamVjdChjb2wgZGVmaW5pdGlvbikgKi8pIHtcbiAgICBsZXQgc29ydE9yZGVyID0gcHJvcHMuY29sdW1uU29ydE9yZGVyXG5cbiAgICBpZiAoaXNPYmplY3QoY29sKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGNvbC5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gY29sLnNvcnRPcmRlclxuICAgICAgfVxuXG4gICAgICBjb2wgPSBjb2wubmFtZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZiA9IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IGNvbClcbiAgICAgIGlmIChkZWYgIT09IHZvaWQgMCAmJiBkZWYuc29ydE9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IGRlZi5zb3J0T3JkZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgaWYgKHNvcnRCeSAhPT0gY29sKSB7XG4gICAgICBzb3J0QnkgPSBjb2xcbiAgICAgIGRlc2NlbmRpbmcgPSBzb3J0T3JkZXIgPT09ICdkYSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMuYmluYXJ5U3RhdGVTb3J0ID09PSB0cnVlKSB7XG4gICAgICBkZXNjZW5kaW5nID0gIWRlc2NlbmRpbmdcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVzY2VuZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBzb3J0QnkgPSBudWxsXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVzY2VuZGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgeyAvLyBhc2NlbmRpbmdcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09ICdhZCcpIHtcbiAgICAgICAgZGVzY2VuZGluZyA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzb3J0QnkgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0UGFnaW5hdGlvbih7IHNvcnRCeSwgZGVzY2VuZGluZywgcGFnZTogMSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5Ub1NvcnQsXG4gICAgY29tcHV0ZWRTb3J0TWV0aG9kLFxuICAgIHNvcnRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlRmlsdGVyUHJvcHMgPSB7XG4gIGZpbHRlcjogWyBTdHJpbmcsIE9iamVjdCBdLFxuICBmaWx0ZXJNZXRob2Q6IEZ1bmN0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUZpbHRlciAocHJvcHMsIHNldFBhZ2luYXRpb24pIHtcbiAgY29uc3QgY29tcHV0ZWRGaWx0ZXJNZXRob2QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZmlsdGVyTWV0aG9kICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuZmlsdGVyTWV0aG9kXG4gICAgICA6IChyb3dzLCB0ZXJtcywgY29scywgY2VsbFZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJUZXJtcyA9IHRlcm1zID8gdGVybXMudG9Mb3dlckNhc2UoKSA6ICcnXG4gICAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKFxuICAgICAgICAgICAgcm93ID0+IGNvbHMuc29tZShjb2wgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBjZWxsVmFsdWUoY29sLCByb3cpICsgJydcbiAgICAgICAgICAgICAgY29uc3QgaGF5c3RhY2sgPSAodmFsID09PSAndW5kZWZpbmVkJyB8fCB2YWwgPT09ICdudWxsJykgPyAnJyA6IHZhbC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKGxvd2VyVGVybXMpICE9PSAtMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgKSlcblxuICB3YXRjaChcbiAgICAoKSA9PiBwcm9wcy5maWx0ZXIsXG4gICAgKCkgPT4ge1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogMSB9LCB0cnVlKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgZGVlcDogdHJ1ZSB9XG4gIClcblxuICByZXR1cm4geyBjb21wdXRlZEZpbHRlck1ldGhvZCB9XG59XG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2sgfSBmcm9tICd2dWUnXG5cbmZ1bmN0aW9uIHNhbWVQYWdpbmF0aW9uIChvbGRQYWcsIG5ld1BhZykge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gbmV3UGFnKSB7XG4gICAgaWYgKG5ld1BhZ1sgcHJvcCBdICE9PSBvbGRQYWdbIHByb3AgXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpeFBhZ2luYXRpb24gKHApIHtcbiAgaWYgKHAucGFnZSA8IDEpIHtcbiAgICBwLnBhZ2UgPSAxXG4gIH1cbiAgaWYgKHAucm93c1BlclBhZ2UgIT09IHZvaWQgMCAmJiBwLnJvd3NQZXJQYWdlIDwgMSkge1xuICAgIHAucm93c1BlclBhZ2UgPSAwXG4gIH1cbiAgcmV0dXJuIHBcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUGFnaW5hdGlvblByb3BzID0ge1xuICBwYWdpbmF0aW9uOiBPYmplY3QsXG4gIHJvd3NQZXJQYWdlT3B0aW9uczoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFsgNSwgNywgMTAsIDE1LCAyMCwgMjUsIDUwLCAwIF1cbiAgfSxcblxuICAnb25VcGRhdGU6cGFnaW5hdGlvbic6IFsgRnVuY3Rpb24sIEFycmF5IF1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlICh2bSwgZ2V0Q2VsbFZhbHVlKSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQgfSA9IHZtXG5cbiAgY29uc3QgaW5uZXJQYWdpbmF0aW9uID0gcmVmKFxuICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgc29ydEJ5OiBudWxsLFxuICAgICAgZGVzY2VuZGluZzogZmFsc2UsXG4gICAgICBwYWdlOiAxLFxuICAgICAgcm93c1BlclBhZ2U6IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5sZW5ndGggIT09IDBcbiAgICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNbIDAgXVxuICAgICAgICA6IDVcbiAgICB9LCBwcm9wcy5wYWdpbmF0aW9uKVxuICApXG5cbiAgY29uc3QgY29tcHV0ZWRQYWdpbmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHBhZyA9IHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uaW5uZXJQYWdpbmF0aW9uLnZhbHVlLCAuLi5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgIDogaW5uZXJQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gZml4UGFnaW5hdGlvbihwYWcpXG4gIH0pXG5cbiAgY29uc3QgaXNTZXJ2ZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgIT09IHZvaWQgMClcblxuICBmdW5jdGlvbiBzZW5kU2VydmVyUmVxdWVzdCAocGFnaW5hdGlvbikge1xuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbih7XG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFNlcnZlckludGVyYWN0aW9uIChwcm9wID0ge30pIHtcbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICBlbWl0KCdyZXF1ZXN0Jywge1xuICAgICAgICBwYWdpbmF0aW9uOiBwcm9wLnBhZ2luYXRpb24gfHwgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBmaWx0ZXI6IHByb3AuZmlsdGVyIHx8IHByb3BzLmZpbHRlcixcbiAgICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdpbmF0aW9uICh2YWwsIGZvcmNlU2VydmVyUmVxdWVzdCkge1xuICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSBmaXhQYWdpbmF0aW9uKHtcbiAgICAgIC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIC4uLnZhbFxuICAgIH0pXG5cbiAgICBpZiAoc2FtZVBhZ2luYXRpb24oY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLCBuZXdQYWdpbmF0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSAmJiBmb3JjZVNlcnZlclJlcXVlc3QgPT09IHRydWUpIHtcbiAgICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wcy5wYWdpbmF0aW9uICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIG5ld1BhZ2luYXRpb24pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLnZhbHVlID0gbmV3UGFnaW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICBpc1NlcnZlclNpZGUsXG5cbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgc2V0UGFnaW5hdGlvblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb24gKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICBjb25zdCBjb21wdXRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyIHx8IDBcbiAgICAgIDogZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZmlyc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gKHBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgbGFzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiBwYWdlICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBpc0ZpcnN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID09PSAxKVxuXG4gIGNvbnN0IHBhZ2VzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWF4KFxuICAgICAgICAxLFxuICAgICAgICBNYXRoLmNlaWwoY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlIC8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzTGFzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbGFzdFJvd0luZGV4LnZhbHVlID09PSAwXG4gICAgICA/IHRydWVcbiAgICAgIDogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPj0gcGFnZXNOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBvcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmluY2x1ZGVzKGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zXG4gICAgICA6IFsgaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIF0uY29uY2F0KHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucylcblxuICAgIHJldHVybiBvcHRzLm1hcChjb3VudCA9PiAoe1xuICAgICAgbGFiZWw6IGNvdW50ID09PSAwID8gJHEubGFuZy50YWJsZS5hbGxSb3dzIDogJycgKyBjb3VudCxcbiAgICAgIHZhbHVlOiBjb3VudFxuICAgIH0pKVxuICB9KVxuXG4gIHdhdGNoKHBhZ2VzTnVtYmVyLCAobGFzdFBhZ2UsIG9sZExhc3RQYWdlKSA9PiB7XG4gICAgaWYgKGxhc3RQYWdlID09PSBvbGRMYXN0UGFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoICE9PSAwICYmIGNvbXB1dGVkUm93cy52YWx1ZS5ldmVyeShcbiAgICAgIHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWVcbiAgICApXG4gIClcblxuICBjb25zdCBzb21lUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGxSb3dzU2VsZWN0ZWQudmFsdWUgIT09IHRydWVcbiAgICAmJiBjb21wdXRlZFJvd3MudmFsdWUuc29tZShyb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlKVxuICApXG5cbiAgY29uc3Qgcm93c1NlbGVjdGVkTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQubGVuZ3RoKVxuXG4gIGZ1bmN0aW9uIGlzUm93U2VsZWN0ZWQgKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RlZEtleXMudmFsdWVbIGtleSBdID09PSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoKSB7XG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgW10pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKGtleXMsIHJvd3MsIGFkZGVkLCBldnQpIHtcbiAgICBlbWl0KCdzZWxlY3Rpb24nLCB7IHJvd3MsIGFkZGVkLCBrZXlzLCBldnQgfSlcblxuICAgIGNvbnN0IHBheWxvYWQgPSBzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgID8gKGFkZGVkID09PSB0cnVlID8gcm93cyA6IFtdKVxuICAgICAgOiAoXG4gICAgICAgICAgYWRkZWQgPT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuc2VsZWN0ZWQuY29uY2F0KHJvd3MpXG4gICAgICAgICAgICA6IHByb3BzLnNlbGVjdGVkLmZpbHRlcihcbiAgICAgICAgICAgICAgcm93ID0+IGtleXMuaW5jbHVkZXMoZ2V0Um93S2V5LnZhbHVlKHJvdykpID09PSBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBwYXlsb2FkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICBpc1Jvd1NlbGVjdGVkLFxuICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgIHVwZGF0ZVNlbGVjdGlvblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRWYWwgKHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgPyB2YWwuc2xpY2UoKVxuICAgIDogW11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kUHJvcHMgPSB7XG4gIGV4cGFuZGVkOiBBcnJheSAvLyB2LW1vZGVsOmV4cGFuZGVkXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzID0gWyAndXBkYXRlOmV4cGFuZGVkJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd0V4cGFuZCAocHJvcHMsIGVtaXQpIHtcbiAgY29uc3QgaW5uZXJFeHBhbmRlZCA9IHJlZihnZXRWYWwocHJvcHMuZXhwYW5kZWQpKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmV4cGFuZGVkLCB2YWwgPT4ge1xuICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSBnZXRWYWwodmFsKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGlzUm93RXhwYW5kZWQgKGtleSkge1xuICAgIHJldHVybiBpbm5lckV4cGFuZGVkLnZhbHVlLmluY2x1ZGVzKGtleSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEV4cGFuZGVkICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZXhwYW5kZWQgIT09IHZvaWQgMCkge1xuICAgICAgZW1pdCgndXBkYXRlOmV4cGFuZGVkJywgdmFsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFeHBhbmRlZCAoa2V5LCBhZGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbm5lckV4cGFuZGVkLnZhbHVlLnNsaWNlKClcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleE9mKGtleSlcblxuICAgIGlmIChhZGQgPT09IHRydWUpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goa2V5KVxuICAgICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFyZ2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzUm93RXhwYW5kZWQsXG4gICAgc2V0RXhwYW5kZWQsXG4gICAgdXBkYXRlRXhwYW5kZWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlQ29sdW1uczogQXJyYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uIChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKSB7XG4gIGNvbnN0IGNvbExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbHVtbnMgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbHVtbnNcbiAgICB9XG5cbiAgICAvLyB3ZSBpbmZlciBjb2x1bW5zIGZyb20gZmlyc3Qgcm93XG4gICAgY29uc3Qgcm93ID0gcHJvcHMucm93c1sgMCBdXG5cbiAgICByZXR1cm4gcm93ICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmtleXMocm93KS5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgYWxpZ246IGlzTnVtYmVyKHJvd1sgbmFtZSBdKSA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICAgIDogW11cbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgY29uc3QgY29scyA9IHByb3BzLnZpc2libGVDb2x1bW5zICE9PSB2b2lkIDBcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maWx0ZXIoY29sID0+IGNvbC5yZXF1aXJlZCA9PT0gdHJ1ZSB8fCBwcm9wcy52aXNpYmxlQ29sdW1ucy5pbmNsdWRlcyhjb2wubmFtZSkgPT09IHRydWUpXG4gICAgICA6IGNvbExpc3QudmFsdWVcblxuICAgIHJldHVybiBjb2xzLm1hcChjb2wgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBjb2wuYWxpZ24gfHwgJ3JpZ2h0J1xuICAgICAgY29uc3QgYWxpZ25DbGFzcyA9IGB0ZXh0LSR7IGFsaWduIH1gXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbCxcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIF9faWNvbkNsYXNzOiBgcS10YWJsZV9fc29ydC1pY29uIHEtdGFibGVfX3NvcnQtaWNvbi0tJHsgYWxpZ24gfWAsXG4gICAgICAgIF9fdGhDbGFzczogYWxpZ25DbGFzc1xuICAgICAgICAgICsgKGNvbC5oZWFkZXJDbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBjb2wuaGVhZGVyQ2xhc3NlcyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSA/ICcgc29ydGFibGUnIDogJycpXG4gICAgICAgICAgKyAoY29sLm5hbWUgPT09IHNvcnRCeSA/IGAgc29ydGVkICR7IGRlc2NlbmRpbmcgPT09IHRydWUgPyAnc29ydC1kZXNjJyA6ICcnIH1gIDogJycpLFxuXG4gICAgICAgIF9fdGRTdHlsZTogY29sLnN0eWxlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5zdHlsZSAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gY29sLnN0eWxlXG4gICAgICAgICAgICAgICAgOiBjb2wuc3R5bGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IG51bGwsXG5cbiAgICAgICAgX190ZENsYXNzOiBjb2wuY2xhc3NlcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuY2xhc3NlcyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzXG4gICAgICAgICAgICAgICAgOiByb3cgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzKHJvdylcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IGFsaWduQ2xhc3NcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IHt9XG4gICAgY29tcHV0ZWRDb2xzLnZhbHVlLmZvckVhY2goY29sID0+IHtcbiAgICAgIG5hbWVzWyBjb2wubmFtZSBdID0gY29sXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXNcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNwYW4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnRhYmxlQ29sc3BhblxuICAgICAgOiBjb21wdXRlZENvbHMudmFsdWUubGVuZ3RoICsgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgPyAxIDogMClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGNvbExpc3QsXG4gICAgY29tcHV0ZWRDb2xzLFxuICAgIGNvbXB1dGVkQ29sc01hcCxcbiAgICBjb21wdXRlZENvbHNwYW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFUaCBmcm9tICcuL1FUaC5qcydcblxuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRVmlydHVhbFNjcm9sbCBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcydcbmltcG9ydCBRU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9RU2VsZWN0LmpzJ1xuaW1wb3J0IFFMaW5lYXJQcm9ncmVzcyBmcm9tICcuLi9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzJ1xuaW1wb3J0IFFDaGVja2JveCBmcm9tICcuLi9jaGVja2JveC9RQ2hlY2tib3guanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcblxuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4vZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IGNvbW1vblZpcnRQcm9wc0xpc3QgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlRnVsbHNjcmVlbiwgeyB1c2VGdWxsc2NyZWVuUHJvcHMsIHVzZUZ1bGxzY3JlZW5FbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZ1bGxzY3JlZW4uanMnXG5cbmltcG9ydCB7IHVzZVRhYmxlU29ydCwgdXNlVGFibGVTb3J0UHJvcHMgfSBmcm9tICcuL3RhYmxlLXNvcnQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUZpbHRlciwgdXNlVGFibGVGaWx0ZXJQcm9wcyB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUsIHVzZVRhYmxlUGFnaW5hdGlvbiwgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLXBhZ2luYXRpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd1NlbGVjdGlvbiwgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcywgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LXNlbGVjdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93RXhwYW5kLCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzLCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctZXhwYW5kLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24sIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMnXG5cbmltcG9ydCB7IGluamVjdFByb3AsIGluamVjdE11bHRpcGxlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2luamVjdC1vYmotcHJvcC5qcydcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBib3R0b21DbGFzcyA9ICdxLXRhYmxlX19ib3R0b20gcm93IGl0ZW1zLWNlbnRlcidcblxuY29uc3QgY29tbW9uVmlydFByb3BzT2JqID0ge31cbmNvbW1vblZpcnRQcm9wc0xpc3QuZm9yRWFjaChwID0+IHsgY29tbW9uVmlydFByb3BzT2JqWyBwIF0gPSB7fSB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvd0tleToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG4gICAgICBkZWZhdWx0OiAnaWQnXG4gICAgfSxcblxuICAgIGNvbHVtbnM6IEFycmF5LFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICBpY29uRmlyc3RQYWdlOiBTdHJpbmcsXG4gICAgaWNvblByZXZQYWdlOiBTdHJpbmcsXG4gICAgaWNvbk5leHRQYWdlOiBTdHJpbmcsXG4gICAgaWNvbkxhc3RQYWdlOiBTdHJpbmcsXG5cbiAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgaGlkZUhlYWRlcjogQm9vbGVhbixcblxuICAgIGdyaWQ6IEJvb2xlYW4sXG4gICAgZ3JpZEhlYWRlcjogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICB3cmFwQ2VsbHM6IEJvb2xlYW4sXG5cbiAgICB2aXJ0dWFsU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZpcnR1YWxTY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH0sXG4gICAgLi4uY29tbW9uVmlydFByb3BzT2JqLFxuXG4gICAgbm9EYXRhTGFiZWw6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNMYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmdMYWJlbDogU3RyaW5nLFxuICAgIHNlbGVjdGVkUm93c0xhYmVsOiBGdW5jdGlvbixcbiAgICByb3dzUGVyUGFnZUxhYmVsOiBTdHJpbmcsXG4gICAgcGFnaW5hdGlvbkxhYmVsOiBGdW5jdGlvbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZ3JleS04J1xuICAgIH0sXG5cbiAgICB0aXRsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgaGlkZUJvdHRvbTogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWRCYW5uZXI6IEJvb2xlYW4sXG4gICAgaGlkZU5vRGF0YTogQm9vbGVhbixcbiAgICBoaWRlUGFnaW5hdGlvbjogQm9vbGVhbixcblxuICAgIG9uUm93Q2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93RGJsY2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93Q29udGV4dG1lbnU6IEZ1bmN0aW9uLFxuXG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5Qcm9wcyxcblxuICAgIC4uLnVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVGaWx0ZXJQcm9wcyxcbiAgICAuLi51c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZFByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVTb3J0UHJvcHNcbiAgfSxcblxuICBlbWl0czogW1xuICAgICdyZXF1ZXN0JywgJ3ZpcnR1YWxTY3JvbGwnLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5FbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZEVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHNcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGluRnVsbHNjcmVlbiwgdG9nZ2xlRnVsbHNjcmVlbiB9ID0gdXNlRnVsbHNjcmVlbigpXG5cbiAgICBjb25zdCBnZXRSb3dLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlb2YgcHJvcHMucm93S2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMucm93S2V5XG4gICAgICAgIDogcm93ID0+IHJvd1sgcHJvcHMucm93S2V5IF1cbiAgICApKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHZpcnRTY3JvbGxSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBoYXNWaXJ0U2Nyb2xsID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ3JpZCAhPT0gdHJ1ZSAmJiBwcm9wcy52aXJ0dWFsU2Nyb2xsID09PSB0cnVlKVxuXG4gICAgY29uc3QgY2FyZERlZmF1bHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnIHEtdGFibGVfX2NhcmQnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXRhYmxlLS1zcXVhcmUnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXRhYmxlLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IF9fY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlLS0keyBwcm9wcy5zZXBhcmF0b3IgfS1zZXBhcmF0b3IgY29sdW1uIG5vLXdyYXBgXG4gICAgICArIChwcm9wcy5ncmlkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ncmlkJyA6IGNhcmREZWZhdWx0Q2xhc3MudmFsdWUpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGUtLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy53cmFwQ2VsbHMgPT09IGZhbHNlID8gJyBxLXRhYmxlLS1uby13cmFwJyA6ICcnKVxuICAgICAgKyAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlID8gJyBmdWxsc2NyZWVuIHNjcm9sbCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBfX2NvbnRhaW5lckNsYXNzLnZhbHVlICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtdGFibGUtLWxvYWRpbmcnIDogJycpXG4gICAgKVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy50YWJsZVN0eWxlICsgcHJvcHMudGFibGVDbGFzcyArIHByb3BzLnRhYmxlSGVhZGVyU3R5bGUgKyBwcm9wcy50YWJsZUhlYWRlckNsYXNzICsgX19jb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICgpID0+IHsgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKSB9XG4gICAgKVxuXG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlKHZtLCBnZXRDZWxsVmFsdWUpXG5cbiAgICBjb25zdCB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH0gPSB1c2VUYWJsZUZpbHRlcihwcm9wcywgc2V0UGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGlzUm93RXhwYW5kZWQsIHNldEV4cGFuZGVkLCB1cGRhdGVFeHBhbmRlZCB9ID0gdXNlVGFibGVSb3dFeHBhbmQocHJvcHMsIGVtaXQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IHByb3BzLnJvd3NcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSB8fCByb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkRmlsdGVyTWV0aG9kLnZhbHVlKHJvd3MsIHByb3BzLmZpbHRlciwgY29tcHV0ZWRDb2xzLnZhbHVlLCBnZXRDZWxsVmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5Ub1NvcnQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkU29ydE1ldGhvZC52YWx1ZShcbiAgICAgICAgICBwcm9wcy5yb3dzID09PSByb3dzID8gcm93cy5zbGljZSgpIDogcm93cyxcbiAgICAgICAgICBzb3J0QnksXG4gICAgICAgICAgZGVzY2VuZGluZ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjb21wdXRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZVxuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocm93c1BlclBhZ2UgIT09IDApIHtcbiAgICAgICAgaWYgKGZpcnN0Um93SW5kZXgudmFsdWUgPT09IDAgJiYgcHJvcHMucm93cyAhPT0gcm93cykge1xuICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IGxhc3RSb3dJbmRleC52YWx1ZSkge1xuICAgICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoMCwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByb3dzID0gcm93cy5zbGljZShmaXJzdFJvd0luZGV4LnZhbHVlLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3Qge1xuICAgICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgdXBkYXRlU2VsZWN0aW9uXG4gICAgfSA9IHVzZVRhYmxlUm93U2VsZWN0aW9uKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSlcblxuICAgIGNvbnN0IHsgY29sTGlzdCwgY29tcHV0ZWRDb2xzLCBjb21wdXRlZENvbHNNYXAsIGNvbXB1dGVkQ29sc3BhbiB9ID0gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24ocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSlcblxuICAgIGNvbnN0IHsgY29sdW1uVG9Tb3J0LCBjb21wdXRlZFNvcnRNZXRob2QsIHNvcnQgfSA9IHVzZVRhYmxlU29ydChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKVxuXG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RSb3dJbmRleCxcbiAgICAgIGxhc3RSb3dJbmRleCxcbiAgICAgIGlzRmlyc3RQYWdlLFxuICAgICAgaXNMYXN0UGFnZSxcbiAgICAgIHBhZ2VzTnVtYmVyLFxuICAgICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZVxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb24odm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcilcblxuICAgIGNvbnN0IG5vdGhpbmdUb0Rpc3BsYXkgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID09PSAwKVxuXG4gICAgY29uc3QgdmlydFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgY29tbW9uVmlydFByb3BzTGlzdFxuICAgICAgICAuZm9yRWFjaChwID0+IHsgYWNjWyBwIF0gPSBwcm9wc1sgcCBdIH0pXG5cbiAgICAgIGlmIChhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHByb3BzLmRlbnNlID09PSB0cnVlID8gMjggOiA0OFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0VmlydHVhbFNjcm9sbCAoKSB7XG4gICAgICBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEdyaWRCb2R5KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZGVyID0gcHJvcHMuaGlkZUhlYWRlciAhPT0gdHJ1ZSA/IGdldFRIZWFkIDogbnVsbFxuXG4gICAgICBpZiAoaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF1cbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgICAgY29uc3QgdmlydFNsb3RzID0ge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFRCb2R5VFIocHJvcHMuaXRlbSwgc2xvdHMuYm9keSwgcHJvcHMuaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDb250ZW50ID0gaCgndGJvZHknLCB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG5cbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyID09PSBudWxsXG4gICAgICAgICAgICA/ICgpID0+IHRvcENvbnRlbnRcbiAgICAgICAgICAgIDogKCkgPT4gWyBoZWFkZXIoKSBdLmNvbmNhdCh0b3BDb250ZW50KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHZpcnRTbG90cy5hZnRlciA9ICgpID0+IGgoJ3Rib2R5JywgYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoUVZpcnR1YWxTY3JvbGwsIHtcbiAgICAgICAgICByZWY6IHZpcnRTY3JvbGxSZWYsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGUsXG4gICAgICAgICAgLi4udmlydFByb3BzLnZhbHVlLFxuICAgICAgICAgIHNjcm9sbFRhcmdldDogcHJvcHMudmlydHVhbFNjcm9sbFRhcmdldCxcbiAgICAgICAgICBpdGVtczogY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICAgIHR5cGU6ICdfX3F0YWJsZScsXG4gICAgICAgICAgdGFibGVDb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWUsXG4gICAgICAgICAgb25WaXJ0dWFsU2Nyb2xsOiBvblZTY3JvbGxcbiAgICAgICAgfSwgdmlydFNsb3RzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgZ2V0VEJvZHkoKVxuICAgICAgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoaGVhZGVyKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRUYWJsZU1pZGRsZSh7XG4gICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX19taWRkbGUgc2Nyb2xsJywgcHJvcHMudGFibGVDbGFzcyBdLFxuICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZVxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICAgIGlmICh2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHZpcnRTY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG8odG9JbmRleCwgZWRnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRvSW5kZXggPSBwYXJzZUludCh0b0luZGV4LCAxMClcbiAgICAgIGNvbnN0IHJvd0VsID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKGB0Ym9keSB0cjpudGgtb2YtdHlwZSgkeyB0b0luZGV4ICsgMSB9KWApXG5cbiAgICAgIGlmIChyb3dFbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLXRhYmxlX19taWRkbGUuc2Nyb2xsJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gcm93RWwub2Zmc2V0VG9wIC0gcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydFxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZSdcblxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wXG5cbiAgICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgICBpbmRleDogdG9JbmRleCxcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgLSAxLFxuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVlNjcm9sbCAoaW5mbykge1xuICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIGluZm8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaChRTGluZWFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2xpbmVhci1wcm9ncmVzcycsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keVRSIChyb3csIGJvZHlTbG90LCBwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGtleSA9IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICBzZWxlY3RlZCA9IGlzUm93U2VsZWN0ZWQoa2V5KVxuXG4gICAgICBpZiAoYm9keVNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIHBhZ2VJbmRleCxcbiAgICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHlDZWxsID0gc2xvdHNbICdib2R5LWNlbGwnIF0sXG4gICAgICAgIGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBib2R5Q2VsbENvbCA9IHNsb3RzWyBgYm9keS1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgICBzbG90ID0gYm9keUNlbGxDb2wgIT09IHZvaWQgMCA/IGJvZHlDZWxsQ29sIDogYm9keUNlbGxcblxuICAgICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gc2xvdChnZXRCb2R5Q2VsbFNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCwgY29sIH0pKVxuICAgICAgICAgICAgOiBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgICAgICAgfSwgZ2V0Q2VsbFZhbHVlKGNvbCwgcm93KSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRCb2R5U2VsZWN0aW9uU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4IH0pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBrZXkgXSwgWyByb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGQnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHsga2V5LCBjbGFzczogeyBzZWxlY3RlZCB9IH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93Q2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dDb250ZXh0bWVudScsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RyJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHkgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgYm9keSA9IHNsb3RzLmJvZHksXG4gICAgICAgIHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXSxcbiAgICAgICAgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgIGxldCBjaGlsZCA9IGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoXG4gICAgICAgIChyb3csIHBhZ2VJbmRleCkgPT4gZ2V0VEJvZHlUUihyb3csIGJvZHksIHBhZ2VJbmRleClcbiAgICAgIClcblxuICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pLmNvbmNhdChjaGlsZClcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLmNvbmNhdChib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0Ym9keScsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG5cbiAgICAgIGRhdGEuY29scyA9IGRhdGEuY29scy5tYXAoXG4gICAgICAgIGNvbCA9PiBpbmplY3RQcm9wKHsgLi4uY29sIH0sICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShjb2wsIGRhdGEucm93KSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5Q2VsbFNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIGluamVjdFByb3AoZGF0YSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGRhdGEuY29sLCBkYXRhLnJvdykpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTZWxlY3Rpb25TY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdEJvZHlDb21tb25TY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICByb3dJbmRleDogZmlyc3RSb3dJbmRleC52YWx1ZSArIGRhdGEucGFnZUluZGV4LFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICgpID0+IGlzUm93U2VsZWN0ZWQoZGF0YS5rZXkpLFxuICAgICAgICAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBkYXRhLmtleSBdLCBbIGRhdGEucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdleHBhbmQnLFxuICAgICAgICAoKSA9PiBpc1Jvd0V4cGFuZGVkKGRhdGEua2V5KSxcbiAgICAgICAgYWRkaW5nID0+IHsgdXBkYXRlRXhwYW5kZWQoZGF0YS5rZXksIGFkZGluZykgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENlbGxWYWx1ZSAoY29sLCByb3cpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBjb2wuZmllbGQgPT09ICdmdW5jdGlvbicgPyBjb2wuZmllbGQocm93KSA6IHJvd1sgY29sLmZpZWxkIF1cbiAgICAgIHJldHVybiBjb2wuZm9ybWF0ICE9PSB2b2lkIDAgPyBjb2wuZm9ybWF0KHZhbCwgcm93KSA6IHZhbFxuICAgIH1cblxuICAgIGNvbnN0IG1hcmdpbmFsc1Njb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHBhZ2luYXRpb246IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIHBhZ2VzTnVtYmVyOiBwYWdlc051bWJlci52YWx1ZSxcbiAgICAgIGlzRmlyc3RQYWdlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgIGlzTGFzdFBhZ2U6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG5cbiAgICAgIGluRnVsbHNjcmVlbjogaW5GdWxsc2NyZWVuLnZhbHVlLFxuICAgICAgdG9nZ2xlRnVsbHNjcmVlblxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9wRGl2ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHRvcCA9IHNsb3RzLnRvcCxcbiAgICAgICAgdG9wTGVmdCA9IHNsb3RzWyAndG9wLWxlZnQnIF0sXG4gICAgICAgIHRvcFJpZ2h0ID0gc2xvdHNbICd0b3AtcmlnaHQnIF0sXG4gICAgICAgIHRvcFNlbGVjdGlvbiA9IHNsb3RzWyAndG9wLXNlbGVjdGlvbicgXSxcbiAgICAgICAgaGFzU2VsZWN0aW9uID0gaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIHRvcFNlbGVjdGlvbiAhPT0gdm9pZCAwXG4gICAgICAgICAgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMCxcbiAgICAgICAgdG9wQ2xhc3MgPSAncS10YWJsZV9fdG9wIHJlbGF0aXZlLXBvc2l0aW9uIHJvdyBpdGVtcy1jZW50ZXInXG5cbiAgICAgIGlmICh0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgWyB0b3AobWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGxldCBjaGlsZFxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkID0gdG9wU2VsZWN0aW9uKG1hcmdpbmFsc1Njb3BlLnZhbHVlKS5zbGljZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBbXVxuXG4gICAgICAgIGlmICh0b3BMZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgdG9wTGVmdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogWyAncS10YWJsZV9fdGl0bGUnLCBwcm9wcy50aXRsZUNsYXNzIF1cbiAgICAgICAgICAgICAgfSwgcHJvcHMudGl0bGUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wUmlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgICApXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIHRvcFJpZ2h0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlclNlbGVjdGVkVmFsdWUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGFsbFJvd3NTZWxlY3RlZC52YWx1ZVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGdldFRIZWFkVFIoKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nID09PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCd0cicsIHsgY2xhc3M6ICdxLXRhYmxlX19wcm9ncmVzcycgfSwgW1xuICAgICAgICAgICAgaCgndGgnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWVcbiAgICAgICAgICAgIH0sIGdldFByb2dyZXNzKCkpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGhlYWQnLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZFRSICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGhlYWRlciA9IHNsb3RzLmhlYWRlcixcbiAgICAgICAgaGVhZGVyQ2VsbCA9IHNsb3RzWyAnaGVhZGVyLWNlbGwnIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIoXG4gICAgICAgICAgZ2V0SGVhZGVyU2NvcGUoeyBoZWFkZXI6IHRydWUgfSlcbiAgICAgICAgKS5zbGljZSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGhlYWRlckNlbGxDb2wgPSBzbG90c1sgYGhlYWRlci1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgc2xvdCA9IGhlYWRlckNlbGxDb2wgIT09IHZvaWQgMCA/IGhlYWRlckNlbGxDb2wgOiBoZWFkZXJDZWxsLFxuICAgICAgICAgIHByb3BzID0gZ2V0SGVhZGVyU2NvcGUoeyBjb2wgfSlcblxuICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KHByb3BzKVxuICAgICAgICAgIDogaChRVGgsIHtcbiAgICAgICAgICAgIGtleTogY29sLm5hbWUsXG4gICAgICAgICAgICBwcm9wc1xuICAgICAgICAgIH0sICgpID0+IGNvbC5sYWJlbClcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUgJiYgcHJvcHMuZ3JpZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCAnICcpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2hlYWRlci1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRIZWFkZXJTY29wZSh7fSkpXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3RyJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUhlYWRlckNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZUhlYWRlclN0eWxlXG4gICAgICAgIH0sIGNoaWxkKVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlclNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbmplY3RQcm9wKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgICAoKSA9PiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXQgKHZhbCkge1xuICAgICAgaWYgKHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdXBkYXRlU2VsZWN0aW9uKFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUubWFwKGdldFJvd0tleS52YWx1ZSksXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgdmFsXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbmF2SWNvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmZpcnN0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvblByZXZQYWdlIHx8ICRxLmljb25TZXQudGFibGUucHJldlBhZ2UsXG4gICAgICAgIHByb3BzLmljb25OZXh0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLm5leHRQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTGFzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5sYXN0UGFnZVxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRCb3R0b21EaXYgKCkge1xuICAgICAgaWYgKHByb3BzLmhpZGVCb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChub3RoaW5nVG9EaXNwbGF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5oaWRlTm9EYXRhID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgID8gcHJvcHMubG9hZGluZ0xhYmVsIHx8ICRxLmxhbmcudGFibGUubG9hZGluZ1xuICAgICAgICAgIDogKHByb3BzLmZpbHRlciA/IHByb3BzLm5vUmVzdWx0c0xhYmVsIHx8ICRxLmxhbmcudGFibGUubm9SZXN1bHRzIDogcHJvcHMubm9EYXRhTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub0RhdGEpXG5cbiAgICAgICAgY29uc3Qgbm9EYXRhID0gc2xvdHNbICduby1kYXRhJyBdXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9EYXRhICE9PSB2b2lkIDBcbiAgICAgICAgICA/IFsgbm9EYXRhKHsgbWVzc2FnZSwgaWNvbjogJHEuaWNvblNldC50YWJsZS53YXJuaW5nLCBmaWx0ZXI6IHByb3BzLmZpbHRlciB9KSBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1ub2RhdGEtaWNvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS53YXJuaW5nXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBxLXRhYmxlX19ib3R0b20tLW5vZGF0YScgfSwgY2hpbGRyZW4pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdHRvbSA9IHNsb3RzLmJvdHRvbVxuXG4gICAgICBpZiAoYm90dG9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIFsgYm90dG9tKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmhpZGVTZWxlY3RlZEJhbm5lciAhPT0gdHJ1ZSAmJiBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgKHByb3BzLnNlbGVjdGVkUm93c0xhYmVsIHx8ICRxLmxhbmcudGFibGUuc2VsZWN0ZWRSZWNvcmRzKShyb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMuaGlkZVBhZ2luYXRpb24gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogYm90dG9tQ2xhc3MgKyAnIGp1c3RpZnktZW5kJ1xuICAgICAgICB9LCBnZXRQYWdpbmF0aW9uRGl2KGNoaWxkKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgY2hpbGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdTZWxlY3Rpb24gKHBhZykge1xuICAgICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHJvd3NQZXJQYWdlOiBwYWcudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbkRpdiAoY2hpbGQpIHtcbiAgICAgIGxldCBjb250cm9sXG4gICAgICBjb25zdFxuICAgICAgICB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIHBhZ2luYXRpb25MYWJlbCA9IHByb3BzLnBhZ2luYXRpb25MYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnBhZ2luYXRpb24sXG4gICAgICAgIHBhZ2luYXRpb25TbG90ID0gc2xvdHMucGFnaW5hdGlvbixcbiAgICAgICAgaGFzT3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgKVxuXG4gICAgICBpZiAoaGFzT3B0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9LCBbXG4gICAgICAgICAgICAgIHByb3BzLnJvd3NQZXJQYWdlTGFiZWwgfHwgJHEubGFuZy50YWJsZS5yZWNvcmRzUGVyUGFnZVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBoKFFTZWxlY3QsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19zZWxlY3QgaW5saW5lIHEtdGFibGVfX2JvdHRvbS1pdGVtJyxcbiAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcm93c1BlclBhZ2UgPT09IDBcbiAgICAgICAgICAgICAgICA/ICRxLmxhbmcudGFibGUuYWxsUm93c1xuICAgICAgICAgICAgICAgIDogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNEZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0NvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uUGFnU2VsZWN0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRpb25TbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29udHJvbCA9IHBhZ2luYXRpb25TbG90KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRyb2wgPSBbXG4gICAgICAgICAgaCgnc3BhbicsIHJvd3NQZXJQYWdlICE9PSAwID8geyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9IDoge30sIFtcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlXG4gICAgICAgICAgICAgID8gcGFnaW5hdGlvbkxhYmVsKGZpcnN0Um93SW5kZXgudmFsdWUgKyAxLCBNYXRoLm1pbihsYXN0Um93SW5kZXgudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSksIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgOiBwYWdpbmF0aW9uTGFiZWwoMSwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCAmJiBwYWdlc051bWJlci52YWx1ZSA+IDEpIHtcbiAgICAgICAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBmbGF0OiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzLmRlbnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBidG5Qcm9wcy5zaXplID0gJ3NtJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdGaXJzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAwIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBmaXJzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnUHJldicsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAxIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBwcmV2UGFnZVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ05leHQnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMiBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBuZXh0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTGFzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAzIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGxhc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgY29udHJvbClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmdyaWRIZWFkZXIgPT09IHRydWVcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBbXG4gICAgICAgICAgICAgIGdldFRIZWFkKGgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IGdldFByb2dyZXNzKGgpXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX21pZGRsZScgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEJvZHkgKCkge1xuICAgICAgY29uc3QgaXRlbSA9IHNsb3RzLml0ZW0gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLml0ZW1cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBzY29wZS5jb2xzLm1hcChcbiAgICAgICAgICAgIGNvbCA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXRpdGxlJyB9LCBbIGNvbC5sYWJlbCBdKSxcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS12YWx1ZScgfSwgWyBjb2wudmFsdWUgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gc2xvdChzY29wZSlcbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzY29wZS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBzY29wZS5rZXkgXSwgWyBzY29wZS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgY29udGVudCksXG4gICAgICAgICAgICAgIGgoUVNlcGFyYXRvciwgeyBkYXJrOiBpc0RhcmsudmFsdWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgJ3EtdGFibGVfX2dyaWQtaXRlbS1jYXJkJyArIGNhcmREZWZhdWx0Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHByb3BzLmNhcmRDbGFzc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICAgIHx8IHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YS5jbGFzc1sgMCBdICs9ICcgY3Vyc29yLXBvaW50ZXInXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbSBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMnXG4gICAgICAgICAgICAgICsgKHNjb3BlLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLXRhYmxlX19ncmlkLWl0ZW0tLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJsZV9fZ3JpZC1jb250ZW50IHJvdycsXG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRhaW5lckNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkQ29udGFpbmVyU3R5bGVcbiAgICAgIH0sIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoKHJvdywgcGFnZUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtKGdldEJvZHlTY29wZSh7XG4gICAgICAgICAga2V5OiBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgcGFnZUluZGV4XG4gICAgICAgIH0pKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzIGFuZCBuZWVkZWQgY29tcHV0ZWQgcHJvcHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgaXNSb3dFeHBhbmRlZCxcbiAgICAgIHNldEV4cGFuZGVkLFxuICAgICAgc29ydCxcbiAgICAgIHJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHNjcm9sbFRvLFxuICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgfSlcblxuICAgIGluamVjdE11bHRpcGxlUHJvcHModm0ucHJveHksIHtcbiAgICAgIGZpbHRlcmVkU29ydGVkUm93czogKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzOiAoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXI6ICgpID0+IGNvbXB1dGVkUm93c051bWJlci52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbIGdldFRvcERpdigpIF1cbiAgICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNvbnRhaW5lckNsYXNzLnZhbHVlIH1cblxuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChnZXRHcmlkSGVhZGVyKCkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgY2xhc3M6IFsgZGF0YS5jbGFzcywgcHJvcHMuY2FyZENsYXNzIF0sXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBnZXRCb2R5KCksXG4gICAgICAgIGdldEJvdHRvbURpdigpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBxLXB4LW5vbmUgcS1wdC1sZ1wiPlxuICAgIDxkaXZcbiAgICAgIHYtZm9yPVwiW2Rpc2MsIHRyYWNrc10gaW4gcHJvcHMudHJhY2tzLmVudHJpZXMoKVwiXG4gICAgICB2LWJpbmQ6a2V5PVwiZGlzYy5pZCFcIlxuICAgICAgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZCBxLXB4LW1kIHEtcGItbGdcIlxuICAgID5cbiAgICAgIDxxLXRhYmxlXG4gICAgICAgIDpyb3dzPVwidHJhY2tzXCJcbiAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgIHNlcGFyYXRvcj1cIm5vbmVcIlxuICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGhpZGUtYm90dG9tXG4gICAgICAgIHZpcnR1YWwtc2Nyb2xsXG4gICAgICAgIGhpZGUtcGFnaW5hdGlvblxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLXRoXG4gICAgICAgICAgICAgIHYtZm9yPVwiY29sIGluIHByb3BzLmNvbHNcIlxuICAgICAgICAgICAgICA6a2V5PVwiY29sLm5hbWVcIlxuICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5IGJvcmRlci1ib3R0b20tdGhpblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNvbC5sYWJlbCB9fVxuICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1wYS1zbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNVwiXG4gICAgICAgICAgICAgIHNpemU9XCIxM3B4XCJcbiAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cImhvdmVyaW5nV2hpY2ggPSBwcm9wcy5rZXlcIlxuICAgICAgICAgICAgICBAbW91c2VsZWF2ZT1cImhvdmVyaW5nV2hpY2ggPSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy5rZXkgPyBwcm9wcy52YWx1ZSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMua2V5ID8gb3V0bGluZWRQbGF5QXJyb3cgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtdGl0bGU9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByb3cgaXRlbXMtY2VudGVyIHRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lLW9uLWhvdmVyIHBvaW50ZXItb24taG92ZXJcIj5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy52YWx1ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1vcmlnaW5hbD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgIGNsYXNzPVwiYmctd2hpdGUtYS01XCJcbiAgICAgICAgICAgICAgdi1mb3I9XCJwcm9wIGluIHByb3BzLnZhbHVlXCJcbiAgICAgICAgICAgICAgOmtleT1cInByb3AuaWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwcm9wLnRpdGxlLmVuIH19XG4gICAgICAgICAgICA8L3EtY2hpcD5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGw9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICB7eyBwcm9wcy52YWx1ZSB9fVxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8cS1tZW51IGNvbnRleHQtbWVudT5cbiAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4XCI+XG4gICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicXVldWVTZXJ2aWNlPy5hZGRUcmFja0J5SWQocHJvcHMua2V5LCBRdWV1ZUFkZE1vZGUuQVBQRU5EX05FWFQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5QbGF5IE5leHQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BZGQgdG8gUXVldWU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkNvcHkgVHJhY2sgVXJsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IG91dGxpbmVkUGxheUFycm93IH0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBRVGFibGUgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgUXVldWVBZGRNb2RlIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgVHJhY2tMaXN0VGFibGVQcm9wcyB7XG4gIHRyYWNrczogTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+O1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IGhvdmVyaW5nV2hpY2ggPSByZWY8bnVtYmVyPigpO1xuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVyUGFnZTogMCxcbiAgZGVzY2VuZGluZzogdHJ1ZSxcbn07XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgc3R5bGU6ICd3aWR0aDogMjRweCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5uYW1lPy5fZGVmYXVsdCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtaDQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcmlnaW5hbCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGxhYmVsOiAnT1JJR0lOQUwnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm9yaWdpbmFsLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkdXJhdGlvbicsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdEVVJBVElPTicsXG4gICAgYWxpZ246ICdyaWdodCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmR1cmF0aW9uLFxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PlxuICAgICAgYCR7RHVyYXRpb24uZnJvbUR1cmF0aW9uU3RyaW5nKHZhbCkudG9EdXJhdGlvblN0cmluZygpfWAsXG4gICAgY2xhc3NlczogJ3RleHQtZ3JleS00JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG5dO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFRyYWNrTGlzdFRhYmxlUHJvcHM+KCk7XG48L3NjcmlwdD5cbiIsIjwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXVudXNlZC12YXJzIC0tPlxuPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgYmFja2Ryb3AtZmlsdGVyPVwiYnJpZ2h0bmVzcyg2MCUpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogMTIwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IG1hcmdpbi10b3A6IDEwdmg7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5BbGJ1bSBBc3NldHM8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvblxuICAgICAgICBjbGFzcz1cInEtcHQtbm9uZVwiXG4gICAgICAgIHYtaWY9XCJhbGJ1bUFzc2V0cy5sZW5ndGggPiAwXCJcbiAgICAgID5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICA6cm93cz1cImFsYnVtQXNzZXRzXCJcbiAgICAgICAgICA6Y29sdW1ucz1cInRhYmxlQ29sdW1uc1wiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWFjdGlvbnM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGQgY2xhc3M9XCJyb3cgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHEtYnRuLWRyb3Bkb3duXG4gICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgIG5vLWljb24tYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgOmRyb3Bkb3duLWljb249XCJvdXRsaW5lZE1lbnVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG9ud2xvYWRBc3NldChwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwibWF0RmlsZURvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RG93bmxvYWQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvcHlBc3NldFVybChwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwibWF0Q29udGVudENvcHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5Db3B5IFVSTDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1idG4tZHJvcGRvd24+XG5cbiAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgY2xhc3M9XCJxLXBiLW5vbmVcIlxuICAgICAgICB2LWVsc2VcbiAgICAgID5cbiAgICAgICAgPHEtY2FyZC1tYWluPlxuICAgICAgICAgIDxxLW1hcmt1cCB2YWx1ZT1cIk5vIGFzc2V0cyBmb3VuZC5cIiAvPlxuICAgICAgICA8L3EtY2FyZC1tYWluPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPHEtYnRuXG4gICAgICAgICAgZmxhdFxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgLz5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRNZW51LFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQge1xuICBtYXRGaWxlRG93bmxvYWQsXG4gIG1hdENvbnRlbnRDb3B5LFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IHsgUURpYWxvZyB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZ1Byb3BzIHtcbiAgYWxidW06IEFsYnVtUmVhZER0bztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxBbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZ1Byb3BzPigpO1xuXG5jb25zdCBhbGJ1bUFzc2V0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHByb3BzLmFsYnVtLm90aGVyRmlsZXMhO1xufSk7XG5cbmNvbnN0IGRvbndsb2FkQXNzZXQgPSAoYXNzZXQ6IEFzc2V0UmVhZER0bykgPT4ge1xuICBjb25zb2xlLmxvZygnRG93bmxvYWQgYXNzZXQnLCBhc3NldCk7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gYXNzZXQudXJsITtcbiAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgYS5jbGljaygpO1xufTtcblxuY29uc3QgY29weUFzc2V0VXJsID0gKGFzc2V0OiBBc3NldFJlYWREdG8pID0+IHtcbiAgY29uc29sZS5sb2coJ0NvcHkgYXNzZXQgVVJMJywgYXNzZXQpO1xuXG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYXNzZXQudXJsISk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2xpcGJvYXJkIEFQSSBub3QgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgbGFiZWw6ICdBc3NldCBJRCcsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5pZFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGxhYmVsOiAnTmFtZScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cubmFtZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3NpemUnLFxuICAgIGxhYmVsOiAnU2l6ZSAoTUIpJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LnNpemUsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAkeyh2YWwgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKX1gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWltZS10eXBlJyxcbiAgICBsYWJlbDogJ0NvbnRlbnQgVHlwZScsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5taW1lXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYWN0aW9ucycsXG4gICAgbGFiZWw6ICdBY3Rpb25zJywgYWxpZ246ICdjZW50ZXInXG4gIH1cbl07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwiY29udHJvbGxlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgICA8QWxidW1JbmZvU2VjdGlvbiA6YWxidW09XCJkYXRhIS5tYXN0ZXJBbGJ1bVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcS1tdC1sZyByb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZFBsYXlBcnJvd1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0ZXh0LWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5QTEFZX0lNTUVESUFURUxZKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuXG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICAgIGNvbnRleHQtbWVudVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX05FWFQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX0xBU1QpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICBmaXRcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCJcbiAgICAgICAgICAgICAgICBzZWxmPVwidG9wIG1pZGRsZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93QWxidW1Bc3NldERpYWxvZyhkYXRhIS5tYXN0ZXJBbGJ1bSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgT3RoZXIgQXNzZXRzPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEVkaXROb3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkF0dHJpYnV0ZSBFZGl0b3I8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUcmFja0xpc3RUYWJsZSA6dHJhY2tzPVwiZGF0YSEudHJhY2tzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2Vycm9yPVwieyBlcnJvciB9XCI+XG4gICAgICAgIDxxLWNhcmRcbiAgICAgICAgICBjbGFzcz1cInEtbWEtbWRcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA0MDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVycm9yPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5GYWlsZWQgdG8gbG9hZCBhbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGVycm9yPy5tZXNzYWdlIH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgZXJyb3I/LnN0YWNrIH19PC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuXG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAge3sgZXJyb3I/LnN0YWNrIH19XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkRWRpdE5vdGVcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBBbGJ1bUFwaSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBDb21wdXRlZFJlZiwgaW5qZWN0LCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCBBbGJ1bUluZm9TZWN0aW9uIGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9BbGJ1bUluZm9TZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgVHJhY2tMaXN0VGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1QYWdlL1RyYWNrTGlzdFRhYmxlLnZ1ZSc7XG5pbXBvcnQgeyBRQ2FyZCwgdXNlUXVhc2FyLCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9BbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZy52dWUnO1xuaW1wb3J0IFF1ZXVlU2VydmljZSwgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5cbi8vIFZpZXcgTW9kZWxzXG5pbnRlcmZhY2UgQWxidW1QYWdlUm91dGVQYXJhbWV0ZXJzIHtcbiAgYWxidW1JZDogQ29tcHV0ZWRSZWY8c3RyaW5nPjtcbn1cblxuaW50ZXJmYWNlIEFsYnVtUGFnZVZpZXdNb2RlbCB7XG4gIG1hc3RlckFsYnVtOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcblxuICAvLyBBbGJ1bSAtPiBUcmFja3MgaW4gQWxidW0sIGZvciBlYWNoIGFsYnVtXG4gIHRyYWNrczogTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+O1xufVxuXG4vLyBJbmplY3QvZ2V0IHJlcXVpcmVkIHNlcnZjaWVzXG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlUGFyYW1zID0ge1xuICBhbGJ1bUlkOiBjb21wdXRlZCgoKSA9PiAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCksXG59O1xuY29uc3QgY29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxBbGJ1bVBhZ2VWaWV3TW9kZWw+KCk7XG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjID0gKFxuICBtYXN0ZXI6IEFsYnVtUmVhZER0b1xuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgbWFzdGVyLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICB0cmFja3Muc2V0KG1hc3RlciwgbWFzdGVyLnRyYWNrcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3M6IFtdLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IG5ldyBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT4oKTtcblxuICBpZiAobWFzdGVyLnRyYWNrcykge1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIGRpc2NzLmZvckVhY2goKGRpc2MpID0+IHtcbiAgICBpZiAoZGlzYy50cmFja3MpIHtcbiAgICAgIC8vIFNvcnQgdHJhY2tzIGJ5IGluZGV4XG4gICAgICBkaXNjLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICAgIHRyYWNrcy5zZXQoZGlzYywgZGlzYy50cmFja3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXN0ZXJBbGJ1bTogbWFzdGVyLFxuICAgIGRpc2NzLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGlmIChkaXNjcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MobWFzdGVyLCBkaXNjcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjKG1hc3Rlcik7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRNdWx0aURpc2NBbGJ1bSA9IGFzeW5jIChcbiAgbWFzdGVyQWxidW1JZDogc3RyaW5nXG4pOiBQcm9taXNlPHtcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcbn0+ID0+IHtcbiAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgYXBpQ29uZmlnUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbldpdGhBdXRoKClcbiAgKTtcblxuICBjb25zdCBtYXN0ZXJBbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICBpZDogbWFzdGVyQWxidW1JZCxcbiAgfSk7XG5cbiAgY29uc3QgZGlzY3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBtYXN0ZXJBbGJ1bS5jaGlsZEFsYnVtcz8ubWFwKChjaGlsZEFsYnVtKSA9PlxuICAgICAgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgICBpZDogY2hpbGRBbGJ1bS5pZCEsXG4gICAgICB9KVxuICAgICkgfHwgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlcjogbWFzdGVyQWxidW0sXG4gICAgZGlzY3M6IGRpc2NzLFxuICB9O1xufTtcblxuY29uc3QgbG9hZCA9IGFzeW5jIChhbGJ1bUlkOiBzdHJpbmcpID0+IHtcbiAgY29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICAgICk7XG5cbiAgICBjb25zdCBhbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICAgIGlkOiBhbGJ1bUlkLFxuICAgIH0pO1xuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiB0aGUgYWxidW0gaGFzIGRpc2NzIG9yIHRoZSBhbGJ1bSBpdHNlbGYgaXMgYSBkaXNjc1xuICAgIGNvbnN0IGlzTXVsdGlEaXNjID1cbiAgICAgIGFsYnVtLnBhcmVudEFsYnVtIHx8IChhbGJ1bT8uY2hpbGRBbGJ1bXM/Lmxlbmd0aCB8fCAwKSA+IDA7XG5cbiAgICBsZXQgdmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWw7XG4gICAgaWYgKGlzTXVsdGlEaXNjKSB7XG4gICAgICBjb25zdCBpc01hc3RlciA9ICFhbGJ1bS5wYXJlbnRBbGJ1bSAmJiBhbGJ1bS5kaXNjTnVtYmVyID09PSAwO1xuICAgICAgaWYgKCFpc01hc3Rlcikge1xuICAgICAgICAkcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgIG5hbWU6ICdBbGJ1bScsXG4gICAgICAgICAgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtLnBhcmVudEFsYnVtIS5pZCEgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hc3RlckFsYnVtSWQgPSBhbGJ1bS5pZCE7XG4gICAgICBjb25zdCB7IG1hc3RlciwgZGlzY3MgfSA9IGF3YWl0IGxvYWRNdWx0aURpc2NBbGJ1bShtYXN0ZXJBbGJ1bUlkKTtcblxuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChtYXN0ZXIsIGRpc2NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChhbGJ1bSwgW10pO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuc2V0U3VjY2Vzcyh2aWV3TW9kZWwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnRyb2xsZXIuc2V0RXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBzaG93QWxidW1Bc3NldERpYWxvZyA9IChhbGJ1bTogQWxidW1SZWFkRHRvKSA9PiB7XG4gICRxLmRpYWxvZyhcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgYWxidW0sXG4gICAgICB9XG4gICAgfVxuICApO1xufVxuXG5jb25zdCBwbGF5QWxidW0gPSAodmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWwsIGFkZE1vZGU6IFF1ZXVlQWRkTW9kZSkgPT4ge1xuICBjb25zdCB0cmFja3MgPSBBcnJheS5mcm9tKHZpZXdNb2RlbC50cmFja3MudmFsdWVzKCkpXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuXG4gIGNvbnN0IHRyYWNrSWRzID0gdHJhY2tzLm1hcCgodHJhY2spID0+IHRyYWNrLmlkISk7XG5cbiAgcXVldWVTZXJ2aWNlPy5hZGRUcmFja3NCeUlkcyh0cmFja0lkcywgYWRkTW9kZSk7XG59O1xuXG4vLyBiaW5kIGhvb2tzIHRvIHVwZGF0ZSBjb250cm9sbGVyIGlmIHRoZSByb3V0ZSBjaGFuZ2VzXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkKHJvdXRlUGFyYW1zLmFsYnVtSWQudmFsdWUgYXMgc3RyaW5nKTtcblxuICB3YXRjaChyb3V0ZVBhcmFtcy5hbGJ1bUlkLCBhc3luYyAoYWxidW1JZCkgPT4ge1xuICAgIGF3YWl0IGxvYWQoYWxidW1JZCBhcyBzdHJpbmcpO1xuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+PC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJkZWYiLCJsYXN0UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStGQSxVQUFNLFVBQVU7QUFDaEIsVUFBTSxRQUFRO0FBQ2QsVUFBTSxzQkFBc0IsTUFBaUM7O0FBQzNELFlBQU0sZ0JBQWUsV0FBTSxNQUFNLGdCQUFaLG1CQUF5QixPQUFPLENBQUMsS0FBSyxXQUFXO0FBQ2hFLFlBQUEsT0FBTyxNQUFPLE9BQU87QUFDbEIsZUFBQTtBQUFBLE1BQ1QsR0FBRyxDQUFvQztBQUUvQixjQUFBLElBQUksZ0JBQWdCLFlBQVk7QUFFakMsYUFBQTtBQUFBLFFBQ0wsYUFBVyxXQUFNLE1BQU0sU0FBWixtQkFBa0IsYUFBWTtBQUFBLFFBQ3pDO0FBQUEsUUFDQSxpQkFBZSxpQkFBTSxNQUFNLGNBQVosbUJBQXVCLFVBQXZCLG1CQUE4QixRQUFPO0FBQUEsUUFDcEQsYUFBYSxNQUFNLE1BQU0sZUFBZTtBQUFBLFFBQ3hDLGFBQWEsTUFBTSxNQUFNLGNBQWMsQ0FBQztBQUFBLE1BQUE7QUFBQSxJQUMxQztBQUdGLFVBQU0sWUFBdUM7QUFFdkMsVUFBQSxhQUFhLENBQUMsYUFBcUI7QUFDdkMsY0FBUSxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixRQUFRLEVBQUUsVUFBVSxNQUFNLElBQUk7QUFBQSxNQUFBLENBQy9CO0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
