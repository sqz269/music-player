import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.9b40ae7c.js";
import { b as between, Q as QSelect } from "./QSelect.030ef525.js";
import { c as createComponent, a as useDarkProps, bm as btnDesignOptions, d as useDark, g as computed, r as ref, w as watch, bn as btnPadding, bo as getBtnDesign, aD as isKeyCode, m as h, L as QInput, t as getCurrentInstance, N as QBtn, E as defineComponent, S as useRouter, l as withDirectives, G as openBlock, H as createBlock, I as withCtx, T as unref, J as createVNode, a5 as createCommentVNode, K as QCardSection, R as createBaseVNode, $ as toDisplayString, U as createElementBlock, Y as renderList, W as createTextVNode, X as Fragment, O as QCard, _ as _export_sfc, a0 as Ripple, bp as useLoadableController } from "./index.d892f699.js";
import { Q as QImg } from "./QImg.16d5b961.js";
const AlbumOrderOptions = {
  Id: "Id",
  Date: "Date",
  Title: "Title"
};
const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending"
};
function getBool(val, otherwise) {
  return [true, false].includes(val) ? val : otherwise;
}
var QPagination = createComponent({
  name: "QPagination",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: true
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (v) => (typeof v === "string" ? parseInt(v, 10) : v) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (v) => v === "" || btnDesignOptions.includes(v)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const minProp = computed(() => parseInt(props.min, 10));
    const maxProp = computed(() => parseInt(props.max, 10));
    const maxPagesProp = computed(() => parseInt(props.maxPages, 10));
    const inputPlaceholder = computed(() => model.value + " / " + maxProp.value);
    const boundaryLinksProp = computed(() => getBool(props.boundaryLinks, props.input));
    const boundaryNumbersProp = computed(() => getBool(props.boundaryNumbers, !props.input));
    const directionLinksProp = computed(() => getBool(props.directionLinks, props.input));
    const ellipsesProp = computed(() => getBool(props.ellipses, !props.input));
    const newPage = ref(null);
    const model = computed({
      get: () => props.modelValue,
      set: (val) => {
        val = parseInt(val, 10);
        if (props.disable || isNaN(val)) {
          return;
        }
        const value = between(val, minProp.value, maxProp.value);
        if (props.modelValue !== value) {
          emit("update:modelValue", value);
        }
      }
    });
    watch(() => `${minProp.value}|${maxProp.value}`, () => {
      model.value = props.modelValue;
    });
    const classes = computed(
      () => "q-pagination row no-wrap items-center" + (props.disable === true ? " disabled" : "")
    );
    const gutterProp = computed(() => props.gutter in btnPadding ? `${btnPadding[props.gutter]}px` : props.gutter || null);
    const gutterStyle = computed(() => gutterProp.value !== null ? `--q-pagination-gutter-parent:-${gutterProp.value};--q-pagination-gutter-child:${gutterProp.value}` : null);
    const icons = computed(() => {
      const ico = [
        props.iconFirst || $q.iconSet.pagination.first,
        props.iconPrev || $q.iconSet.pagination.prev,
        props.iconNext || $q.iconSet.pagination.next,
        props.iconLast || $q.iconSet.pagination.last
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const attrs = computed(() => ({
      "aria-disabled": props.disable === true ? "true" : "false",
      role: "navigation"
    }));
    const btnDesignProp = computed(() => getBtnDesign(props, "flat"));
    const btnProps = computed(() => ({
      [btnDesignProp.value]: true,
      round: props.round,
      rounded: props.rounded,
      padding: props.padding,
      color: props.color,
      textColor: props.textColor,
      size: props.size,
      ripple: props.ripple !== null ? props.ripple : true
    }));
    const btnActiveDesignProp = computed(() => {
      const acc = { [btnDesignProp.value]: false };
      if (props.activeDesign !== "") {
        acc[props.activeDesign] = true;
      }
      return acc;
    });
    const activeBtnProps = computed(() => ({
      ...btnActiveDesignProp.value,
      color: props.activeColor || props.color,
      textColor: props.activeTextColor || props.textColor
    }));
    const btnConfig = computed(() => {
      let maxPages = Math.max(
        maxPagesProp.value,
        1 + (ellipsesProp.value ? 2 : 0) + (boundaryNumbersProp.value ? 2 : 0)
      );
      const acc = {
        pgFrom: minProp.value,
        pgTo: maxProp.value,
        ellipsesStart: false,
        ellipsesEnd: false,
        boundaryStart: false,
        boundaryEnd: false,
        marginalStyle: {
          minWidth: `${Math.max(2, String(maxProp.value).length)}em`
        }
      };
      if (maxPagesProp.value && maxPages < maxProp.value - minProp.value + 1) {
        maxPages = 1 + Math.floor(maxPages / 2) * 2;
        acc.pgFrom = Math.max(minProp.value, Math.min(maxProp.value - maxPages + 1, props.modelValue - Math.floor(maxPages / 2)));
        acc.pgTo = Math.min(maxProp.value, acc.pgFrom + maxPages - 1);
        if (boundaryNumbersProp.value) {
          acc.boundaryStart = true;
          acc.pgFrom++;
        }
        if (ellipsesProp.value && acc.pgFrom > minProp.value + (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesStart = true;
          acc.pgFrom++;
        }
        if (boundaryNumbersProp.value) {
          acc.boundaryEnd = true;
          acc.pgTo--;
        }
        if (ellipsesProp.value && acc.pgTo < maxProp.value - (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesEnd = true;
          acc.pgTo--;
        }
      }
      return acc;
    });
    function set(value) {
      model.value = value;
    }
    function setByOffset(offset) {
      model.value = model.value + offset;
    }
    const inputEvents = computed(() => {
      function updateModel() {
        model.value = newPage.value;
        newPage.value = null;
      }
      return {
        "onUpdate:modelValue": (val) => {
          newPage.value = val;
        },
        onKeyup: (e) => {
          isKeyCode(e, 13) === true && updateModel();
        },
        onBlur: updateModel
      };
    });
    function getBtn(cfg, page, active) {
      const data = {
        "aria-label": page,
        "aria-current": "false",
        ...btnProps.value,
        ...cfg
      };
      if (active === true) {
        Object.assign(data, {
          "aria-current": "true",
          ...activeBtnProps.value
        });
      }
      if (page !== void 0) {
        if (props.toFn !== void 0) {
          data.to = props.toFn(page);
        } else {
          data.onClick = () => {
            set(page);
          };
        }
      }
      return h(QBtn, data);
    }
    Object.assign(proxy, { set, setByOffset });
    return () => {
      const contentStart = [];
      const contentEnd = [];
      let contentMiddle;
      if (boundaryLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bls",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[0]
          }, minProp.value)
        );
        contentEnd.unshift(
          getBtn({
            key: "ble",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[3]
          }, maxProp.value)
        );
      }
      if (directionLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bdp",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[1]
          }, props.modelValue - 1)
        );
        contentEnd.unshift(
          getBtn({
            key: "bdn",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[2]
          }, props.modelValue + 1)
        );
      }
      if (props.input !== true) {
        contentMiddle = [];
        const { pgFrom, pgTo, marginalStyle: style } = btnConfig.value;
        if (btnConfig.value.boundaryStart === true) {
          const active = minProp.value === props.modelValue;
          contentStart.push(
            getBtn({
              key: "bns",
              style,
              disable: props.disable,
              label: minProp.value
            }, minProp.value, active)
          );
        }
        if (btnConfig.value.boundaryEnd === true) {
          const active = maxProp.value === props.modelValue;
          contentEnd.unshift(
            getBtn({
              key: "bne",
              style,
              disable: props.disable,
              label: maxProp.value
            }, maxProp.value, active)
          );
        }
        if (btnConfig.value.ellipsesStart === true) {
          contentStart.push(
            getBtn({
              key: "bes",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgFrom - 1)
          );
        }
        if (btnConfig.value.ellipsesEnd === true) {
          contentEnd.unshift(
            getBtn({
              key: "bee",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgTo + 1)
          );
        }
        for (let i = pgFrom; i <= pgTo; i++) {
          contentMiddle.push(
            getBtn({
              key: `bpg${i}`,
              style,
              disable: props.disable,
              label: i
            }, i, i === props.modelValue)
          );
        }
      }
      return h("div", {
        class: classes.value,
        ...attrs.value
      }, [
        h("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: gutterStyle.value
        }, [
          ...contentStart,
          props.input === true ? h(QInput, {
            class: "inline",
            style: { width: `${inputPlaceholder.value.length / 1.5}em` },
            type: "number",
            dense: true,
            value: newPage.value,
            disable: props.disable,
            dark: isDark.value,
            borderless: true,
            inputClass: props.inputClass,
            inputStyle: props.inputStyle,
            placeholder: inputPlaceholder.value,
            min: minProp.value,
            max: maxProp.value,
            ...inputEvents.value
          }) : h("div", {
            class: "q-pagination__middle row justify-center"
          }, contentMiddle),
          ...contentEnd
        ])
      ]);
    };
  }
});
var AlbumCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "text-subtitle1" };
const _hoisted_2$1 = { key: 0 };
const _sfc_main$1 = defineComponent({
  __name: "AlbumCard",
  props: {
    album: {}
  },
  setup(__props) {
    const props = __props;
    const $router = useRouter();
    const initializeViewModel = () => {
      return computed(() => {
        var _a, _b, _c, _d, _e;
        return {
          albumId: props.album.id,
          albumName: ((_a = props.album.name) == null ? void 0 : _a._default) || "",
          artistName: ((_b = props.album.albumArtist) == null ? void 0 : _b.map((artist) => artist.name)) || [],
          albumCoverUrl: ((_d = (_c = props.album.thumbnail) == null ? void 0 : _c.large) == null ? void 0 : _d.url) || null,
          releaseDate: props.album.releaseDate || null,
          albumCoverColors: ((_e = props.album.thumbnail) == null ? void 0 : _e.colors) || []
        };
      });
    };
    const viewModel = initializeViewModel();
    const navigateToAlbum = () => {
      $router.push({ name: "Album", params: { albumId: viewModel.value.albumId } });
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(unref(QCard), {
        class: "album-card cursor-pointer",
        onClick: navigateToAlbum
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              unref(viewModel).albumCoverUrl ? (openBlock(), createBlock(QImg, {
                key: 0,
                src: unref(viewModel).albumCoverUrl,
                "img-class": "rounded-borders",
                ratio: "1"
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, toDisplayString(unref(viewModel).albumName), 1),
              createBaseVNode("div", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(viewModel).artistName, (artist, index) => {
                  return openBlock(), createElementBlock("span", { key: index }, [
                    createTextVNode(toDisplayString(artist) + " ", 1),
                    index < unref(viewModel).artistName.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_2$1, ", ")) : createCommentVNode("", true)
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })), [
        [Ripple]
      ]);
    };
  }
});
var AlbumCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-464ea01b"], ["__file", "AlbumCard.vue"]]);
const _hoisted_1 = { class: "row flex justify-between q-pa-md" };
const _hoisted_2 = { class: "q-gutter-md col-sm-2 col-lg-2 col-xl-1" };
const _hoisted_3 = { class: "q-gutter-md col-sm-2 col-lg-2 col-xl-1" };
const _hoisted_4 = { class: "row q-gutter-md justify-evenly q-py-md col-xl-1" };
const _hoisted_5 = {
  class: "q-pa-lg q-mt-lg flex flex-center",
  style: { "border-top": "1px solid #545454" }
};
const _hoisted_6 = { class: "q-gutter-md q-pa-md" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Error", -1);
const _hoisted_8 = { class: "text-caption" };
const _sfc_main = defineComponent({
  __name: "AlbumListGridView",
  props: {
    controller: {}
  },
  setup(__props) {
    const sortFieldOptions = [
      { label: "Date", value: AlbumOrderOptions.Date },
      { label: "Name", value: AlbumOrderOptions.Title },
      { label: "Id", value: AlbumOrderOptions.Id }
    ];
    const sortOrderOptions = [
      { label: "Ascending", value: SortOrder.Ascending },
      { label: "Descending", value: SortOrder.Descending }
    ];
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LoadableElement, {
        "state-controller": props.controller.viewModelController
      }, {
        loading: withCtx(() => [
          createVNode(QSpinnerGears)
        ]),
        default: withCtx(({ data }) => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QSelect, {
                modelValue: props.controller.inputModel.value.sortField,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => props.controller.inputModel.value.sortField = $event),
                options: sortFieldOptions,
                label: "Order By",
                "emit-value": ""
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QSelect, {
                modelValue: props.controller.inputModel.value.sortOrder,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => props.controller.inputModel.value.sortOrder = $event),
                options: sortOrderOptions,
                label: "Order",
                "emit-value": ""
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(data == null ? void 0 : data.albums, (album, index) => {
              return openBlock(), createBlock(AlbumCard, {
                key: index,
                album
              }, null, 8, ["album"]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(QPagination, {
                modelValue: data.currentPage,
                "onUpdate:modelValue": [($event) => data.currentPage = $event, props.controller.changePage],
                max: data.totalPages,
                "max-pages": "10",
                gutter: "20px",
                size: "18px",
                "direction-links": ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
            ])
          ])
        ]),
        error: withCtx(({ error }) => [
          createVNode(unref(QCard), { class: "q-ma-md" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, toDisplayString(error.message), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["state-controller"]);
    };
  }
});
var AlbumListGridView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumListGridView.vue"]]);
function useAlbumListGridViewController(parameter) {
  const viewModelController = useLoadableController();
  const inputModel = ref(parameter.initialInputState);
  const load = async (state) => {
    console.log("Controller Loading due to load call");
    viewModelController.setLoading();
    try {
      const viewModel = await parameter.load(state);
      viewModelController.setSuccess(viewModel);
    } catch (e) {
      viewModelController.setError(e);
    }
  };
  const changePage = async (page) => {
    inputModel.value = {
      ...inputModel.value,
      page
    };
  };
  const changeSortOrder = async (sortOrder) => {
    inputModel.value = {
      ...inputModel.value,
      sortOrder
    };
  };
  const changeSortField = async (sortField) => {
    inputModel.value = {
      ...inputModel.value,
      sortField
    };
  };
  const reload = async () => {
    if (parameter.urlStateDecoder) {
      console.log("Controller Loading due to reload call");
      inputModel.value = parameter.urlStateDecoder.value;
    }
    await load(inputModel.value);
  };
  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      var _a;
      console.dir({ newInputModel, oldInputModel });
      (_a = parameter.urlStateEncoder) == null ? void 0 : _a.call(parameter, newInputModel);
      await load(newInputModel);
    },
    {
      deep: true
    }
  );
  if (parameter.urlStateDecoder) {
    console.log("Controller Loading due to urlStateDecoder change");
    inputModel.value = parameter.urlStateDecoder.value;
  } else {
    console.log("Controller Loading due to onMounted");
    inputModel.value = parameter.initialInputState;
  }
  return {
    viewModelController,
    inputModel,
    load,
    reload,
    changePage,
    changeSortOrder,
    changeSortField
  };
}
export { AlbumOrderOptions as A, AlbumListGridView as a, useAlbumListGridViewController as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLjg4ODIxNTc1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QvZXNtL21vZGVscy9BbGJ1bU9yZGVyT3B0aW9ucy5qcyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdC9lc20vbW9kZWxzL1NvcnRPcmRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9RUGFnaW5hdGlvbi5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsYnVtQ2FyZC9BbGJ1bUNhcmQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUbG1jUGxheWVyQmFja2VuZFxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBbGJ1bU9yZGVyT3B0aW9ucyA9IHtcbiAgICBJZDogJ0lkJyxcbiAgICBEYXRlOiAnRGF0ZScsXG4gICAgVGl0bGU6ICdUaXRsZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gQWxidW1PcmRlck9wdGlvbnNGcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIEFsYnVtT3JkZXJPcHRpb25zRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQWxidW1PcmRlck9wdGlvbnNGcm9tSlNPTlR5cGVkKGpzb24sIGlnbm9yZURpc2NyaW1pbmF0b3IpIHtcbiAgICByZXR1cm4ganNvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBbGJ1bU9yZGVyT3B0aW9uc1RvSlNPTih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUbG1jUGxheWVyQmFja2VuZFxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTb3J0T3JkZXIgPSB7XG4gICAgQXNjZW5kaW5nOiAnQXNjZW5kaW5nJyxcbiAgICBEZXNjZW5kaW5nOiAnRGVzY2VuZGluZydcbn07XG5leHBvcnQgZnVuY3Rpb24gU29ydE9yZGVyRnJvbUpTT04oanNvbikge1xuICAgIHJldHVybiBTb3J0T3JkZXJGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBTb3J0T3JkZXJGcm9tSlNPTlR5cGVkKGpzb24sIGlnbm9yZURpc2NyaW1pbmF0b3IpIHtcbiAgICByZXR1cm4ganNvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBTb3J0T3JkZXJUb0pTT04odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIHdhdGNoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRSW5wdXQgZnJvbSAnLi4vaW5wdXQvUUlucHV0LmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgYnRuRGVzaWduT3B0aW9ucywgYnRuUGFkZGluZywgZ2V0QnRuRGVzaWduIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5mdW5jdGlvbiBnZXRCb29sICh2YWwsIG90aGVyd2lzZSkge1xuICByZXR1cm4gWyB0cnVlLCBmYWxzZSBdLmluY2x1ZGVzKHZhbClcbiAgICA/IHZhbFxuICAgIDogb3RoZXJ3aXNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnaW5hdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbWluOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAxXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtYXhQYWdlczoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAoXG4gICAgICAgICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2LCAxMCkgOiB2KSA+PSAwXG4gICAgICApXG4gICAgfSxcblxuICAgIGlucHV0U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHNpemU6IFN0cmluZyxcblxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgICBpbnB1dDogQm9vbGVhbixcblxuICAgIGljb25QcmV2OiBTdHJpbmcsXG4gICAgaWNvbk5leHQ6IFN0cmluZyxcbiAgICBpY29uRmlyc3Q6IFN0cmluZyxcbiAgICBpY29uTGFzdDogU3RyaW5nLFxuXG4gICAgdG9GbjogRnVuY3Rpb24sXG5cbiAgICBib3VuZGFyeUxpbmtzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgYm91bmRhcnlOdW1iZXJzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZGlyZWN0aW9uTGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBlbGxpcHNlczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByb3VuZDogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGFjdGl2ZURlc2lnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgICB2YWx1ZXM6IHYgPT4gdiA9PT0gJycgfHwgYnRuRGVzaWduT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICBhY3RpdmVUZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGd1dHRlcjogU3RyaW5nLFxuICAgIHBhZGRpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICczcHggMnB4J1xuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3QgbWluUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1pbiwgMTApKVxuICAgIGNvbnN0IG1heFByb3AgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXgsIDEwKSlcbiAgICBjb25zdCBtYXhQYWdlc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhQYWdlcywgMTApKVxuXG4gICAgY29uc3QgaW5wdXRQbGFjZWhvbGRlciA9IGNvbXB1dGVkKCgpID0+IG1vZGVsLnZhbHVlICsgJyAvICcgKyBtYXhQcm9wLnZhbHVlKVxuICAgIGNvbnN0IGJvdW5kYXJ5TGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeUxpbmtzLCBwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgYm91bmRhcnlOdW1iZXJzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuYm91bmRhcnlOdW1iZXJzLCAhcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGRpcmVjdGlvbkxpbmtzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZGlyZWN0aW9uTGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBlbGxpcHNlc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmVsbGlwc2VzLCAhcHJvcHMuaW5wdXQpKVxuXG4gICAgY29uc3QgbmV3UGFnZSA9IHJlZihudWxsKVxuICAgIGNvbnN0IG1vZGVsID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLFxuICAgICAgc2V0OiB2YWwgPT4ge1xuICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICBpZiAocHJvcHMuZGlzYWJsZSB8fCBpc05hTih2YWwpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBiZXR3ZWVuKHZhbCwgbWluUHJvcC52YWx1ZSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBgJHsgbWluUHJvcC52YWx1ZSB9fCR7IG1heFByb3AudmFsdWUgfWAsICgpID0+IHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXBhZ2luYXRpb24gcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgZ3V0dGVyUHJvcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmd1dHRlciBpbiBidG5QYWRkaW5nXG4gICAgICAgID8gYCR7IGJ0blBhZGRpbmdbIHByb3BzLmd1dHRlciBdIH1weGBcbiAgICAgICAgOiBwcm9wcy5ndXR0ZXIgfHwgbnVsbFxuICAgICkpXG4gICAgY29uc3QgZ3V0dGVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBndXR0ZXJQcm9wLnZhbHVlICE9PSBudWxsXG4gICAgICAgID8gYC0tcS1wYWdpbmF0aW9uLWd1dHRlci1wYXJlbnQ6LSR7IGd1dHRlclByb3AudmFsdWUgfTstLXEtcGFnaW5hdGlvbi1ndXR0ZXItY2hpbGQ6JHsgZ3V0dGVyUHJvcC52YWx1ZSB9YFxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgY29uc3QgaWNvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBpY28gPSBbXG4gICAgICAgIHByb3BzLmljb25GaXJzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24uZmlyc3QsXG4gICAgICAgIHByb3BzLmljb25QcmV2IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5wcmV2LFxuICAgICAgICBwcm9wcy5pY29uTmV4dCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubmV4dCxcbiAgICAgICAgcHJvcHMuaWNvbkxhc3QgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLmxhc3RcbiAgICAgIF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGljby5yZXZlcnNlKCkgOiBpY29cbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgIHJvbGU6ICduYXZpZ2F0aW9uJ1xuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJ0bkRlc2lnbihwcm9wcywgJ2ZsYXQnKSlcbiAgICBjb25zdCBidG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBbIGJ0bkRlc2lnblByb3AudmFsdWUgXTogdHJ1ZSxcblxuICAgICAgcm91bmQ6IHByb3BzLnJvdW5kLFxuICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcblxuICAgICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcblxuICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy50ZXh0Q29sb3IsXG5cbiAgICAgIHNpemU6IHByb3BzLnNpemUsXG4gICAgICByaXBwbGU6IHByb3BzLnJpcHBsZSAhPT0gbnVsbFxuICAgICAgICA/IHByb3BzLnJpcHBsZVxuICAgICAgICA6IHRydWVcbiAgICB9KSlcblxuICAgIGNvbnN0IGJ0bkFjdGl2ZURlc2lnblByb3AgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyB3ZSBhbHNvIHJlc2V0IG5vbi1hY3RpdmUgZGVzaWduXG4gICAgICBjb25zdCBhY2MgPSB7IFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiBmYWxzZSB9XG4gICAgICBpZiAocHJvcHMuYWN0aXZlRGVzaWduICE9PSAnJykge1xuICAgICAgICBhY2NbIHByb3BzLmFjdGl2ZURlc2lnbiBdID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG4gICAgY29uc3QgYWN0aXZlQnRuUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4uYnRuQWN0aXZlRGVzaWduUHJvcC52YWx1ZSxcbiAgICAgIGNvbG9yOiBwcm9wcy5hY3RpdmVDb2xvciB8fCBwcm9wcy5jb2xvcixcbiAgICAgIHRleHRDb2xvcjogcHJvcHMuYWN0aXZlVGV4dENvbG9yIHx8IHByb3BzLnRleHRDb2xvclxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQ29uZmlnID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IG1heFBhZ2VzID0gTWF0aC5tYXgoXG4gICAgICAgIG1heFBhZ2VzUHJvcC52YWx1ZSxcbiAgICAgICAgMSArIChlbGxpcHNlc1Byb3AudmFsdWUgPyAyIDogMCkgKyAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDIgOiAwKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIHBnRnJvbTogbWluUHJvcC52YWx1ZSxcbiAgICAgICAgcGdUbzogbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgZWxsaXBzZXNTdGFydDogZmFsc2UsXG4gICAgICAgIGVsbGlwc2VzRW5kOiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlTdGFydDogZmFsc2UsXG4gICAgICAgIGJvdW5kYXJ5RW5kOiBmYWxzZSxcbiAgICAgICAgbWFyZ2luYWxTdHlsZToge1xuICAgICAgICAgIG1pbldpZHRoOiBgJHsgTWF0aC5tYXgoMiwgU3RyaW5nKG1heFByb3AudmFsdWUpLmxlbmd0aCkgfWVtYFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhQYWdlc1Byb3AudmFsdWUgJiYgbWF4UGFnZXMgPCAobWF4UHJvcC52YWx1ZSAtIG1pblByb3AudmFsdWUgKyAxKSkge1xuICAgICAgICBtYXhQYWdlcyA9IDEgKyBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikgKiAyXG4gICAgICAgIGFjYy5wZ0Zyb20gPSBNYXRoLm1heChtaW5Qcm9wLnZhbHVlLCBNYXRoLm1pbihtYXhQcm9wLnZhbHVlIC0gbWF4UGFnZXMgKyAxLCBwcm9wcy5tb2RlbFZhbHVlIC0gTWF0aC5mbG9vcihtYXhQYWdlcyAvIDIpKSlcbiAgICAgICAgYWNjLnBnVG8gPSBNYXRoLm1pbihtYXhQcm9wLnZhbHVlLCBhY2MucGdGcm9tICsgbWF4UGFnZXMgLSAxKVxuXG4gICAgICAgIGlmIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlKSB7XG4gICAgICAgICAgYWNjLmJvdW5kYXJ5U3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ0Zyb20gPiAobWluUHJvcC52YWx1ZSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMSA6IDApKSkge1xuICAgICAgICAgIGFjYy5lbGxpcHNlc1N0YXJ0ID0gdHJ1ZVxuICAgICAgICAgIGFjYy5wZ0Zyb20rK1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbGlwc2VzUHJvcC52YWx1ZSAmJiBhY2MucGdUbyA8IChtYXhQcm9wLnZhbHVlIC0gKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzRW5kID0gdHJ1ZVxuICAgICAgICAgIGFjYy5wZ1RvLS1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHNldCAodmFsdWUpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRCeU9mZnNldCAob2Zmc2V0KSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IG1vZGVsLnZhbHVlICsgb2Zmc2V0XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXRFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBmdW5jdGlvbiB1cGRhdGVNb2RlbCAoKSB7XG4gICAgICAgIG1vZGVsLnZhbHVlID0gbmV3UGFnZS52YWx1ZVxuICAgICAgICBuZXdQYWdlLnZhbHVlID0gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IHZhbCA9PiB7IG5ld1BhZ2UudmFsdWUgPSB2YWwgfSxcbiAgICAgICAgb25LZXl1cDogZSA9PiB7IGlzS2V5Q29kZShlLCAxMykgPT09IHRydWUgJiYgdXBkYXRlTW9kZWwoKSB9LFxuICAgICAgICBvbkJsdXI6IHVwZGF0ZU1vZGVsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJ0biAoY2ZnLCBwYWdlLCBhY3RpdmUpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICdhcmlhLWxhYmVsJzogcGFnZSxcbiAgICAgICAgJ2FyaWEtY3VycmVudCc6ICdmYWxzZScsXG4gICAgICAgIC4uLmJ0blByb3BzLnZhbHVlLFxuICAgICAgICAuLi5jZmdcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAnYXJpYS1jdXJyZW50JzogJ3RydWUnLFxuICAgICAgICAgIC4uLmFjdGl2ZUJ0blByb3BzLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKHByb3BzLnRvRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgIGRhdGEudG8gPSBwcm9wcy50b0ZuKHBhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YS5vbkNsaWNrID0gKCkgPT4geyBzZXQocGFnZSkgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFCdG4sIGRhdGEpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwgeyBzZXQsIHNldEJ5T2Zmc2V0IH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudFN0YXJ0ID0gW11cbiAgICAgIGNvbnN0IGNvbnRlbnRFbmQgPSBbXVxuICAgICAgbGV0IGNvbnRlbnRNaWRkbGVcblxuICAgICAgaWYgKGJvdW5kYXJ5TGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdibHMnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMCBdXG4gICAgICAgICAgfSwgbWluUHJvcC52YWx1ZSlcbiAgICAgICAgKVxuXG4gICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAga2V5OiAnYmxlJyxcbiAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgfHwgcHJvcHMubW9kZWxWYWx1ZSA+PSBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgaWNvbjogaWNvbnMudmFsdWVbIDMgXVxuICAgICAgICAgIH0sIG1heFByb3AudmFsdWUpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbkxpbmtzUHJvcC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250ZW50U3RhcnQucHVzaChcbiAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAga2V5OiAnYmRwJyxcbiAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgfHwgcHJvcHMubW9kZWxWYWx1ZSA8PSBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICAgICAgaWNvbjogaWNvbnMudmFsdWVbIDEgXVxuICAgICAgICAgIH0sIHByb3BzLm1vZGVsVmFsdWUgLSAxKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZG4nLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMiBdXG4gICAgICAgICAgfSwgcHJvcHMubW9kZWxWYWx1ZSArIDEpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmlucHV0ICE9PSB0cnVlKSB7IC8vIGhhcyBidXR0b25zIGluc3RlYWQgb2YgaW5wdXRib3hcbiAgICAgICAgY29udGVudE1pZGRsZSA9IFtdXG4gICAgICAgIGNvbnN0IHsgcGdGcm9tLCBwZ1RvLCBtYXJnaW5hbFN0eWxlOiBzdHlsZSB9ID0gYnRuQ29uZmlnLnZhbHVlXG5cbiAgICAgICAgaWYgKGJ0bkNvbmZpZy52YWx1ZS5ib3VuZGFyeVN0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gbWluUHJvcC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYm5zJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtaW5Qcm9wLnZhbHVlXG4gICAgICAgICAgICB9LCBtaW5Qcm9wLnZhbHVlLCBhY3RpdmUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ0bkNvbmZpZy52YWx1ZS5ib3VuZGFyeUVuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IG1heFByb3AudmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdibmUnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IG1heFByb3AudmFsdWVcbiAgICAgICAgICAgIH0sIG1heFByb3AudmFsdWUsIGFjdGl2ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmVsbGlwc2VzU3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb250ZW50U3RhcnQucHVzaChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JlcycsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogJ+KApicsXG4gICAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHBnRnJvbSAtIDEpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ0bkNvbmZpZy52YWx1ZS5lbGxpcHNlc0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JlZScsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogJ+KApicsXG4gICAgICAgICAgICAgIHJpcHBsZTogZmFsc2VcbiAgICAgICAgICAgIH0sIHBnVG8gKyAxKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBwZ0Zyb207IGkgPD0gcGdUbzsgaSsrKSB7XG4gICAgICAgICAgY29udGVudE1pZGRsZS5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiBgYnBnJHsgaSB9YCxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBpXG4gICAgICAgICAgICB9LCBpLCBpID09PSBwcm9wcy5tb2RlbFZhbHVlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgLi4uYXR0cnMudmFsdWVcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1wYWdpbmF0aW9uX19jb250ZW50IHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcicsXG4gICAgICAgICAgc3R5bGU6IGd1dHRlclN0eWxlLnZhbHVlXG4gICAgICAgIH0sIFtcbiAgICAgICAgICAuLi5jb250ZW50U3RhcnQsXG5cbiAgICAgICAgICBwcm9wcy5pbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBoKFFJbnB1dCwge1xuICAgICAgICAgICAgICBjbGFzczogJ2lubGluZScsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBgJHsgaW5wdXRQbGFjZWhvbGRlci52YWx1ZS5sZW5ndGggLyAxLjUgfWVtYCB9LFxuICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBuZXdQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3M6IHRydWUsXG4gICAgICAgICAgICAgIGlucHV0Q2xhc3M6IHByb3BzLmlucHV0Q2xhc3MsXG4gICAgICAgICAgICAgIGlucHV0U3R5bGU6IHByb3BzLmlucHV0U3R5bGUsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpbnB1dFBsYWNlaG9sZGVyLnZhbHVlLFxuICAgICAgICAgICAgICBtaW46IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICAgIG1heDogbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgLi4uaW5wdXRFdmVudHMudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXBhZ2luYXRpb25fX21pZGRsZSByb3cganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICB9LCBjb250ZW50TWlkZGxlKSxcblxuICAgICAgICAgIC4uLmNvbnRlbnRFbmRcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1jYXJkXG4gICAgdi1yaXBwbGVcbiAgICBjbGFzcz1cImFsYnVtLWNhcmQgY3Vyc29yLXBvaW50ZXJcIlxuICAgIEBjbGljaz1cIm5hdmlnYXRlVG9BbGJ1bVwiXG4gID5cbiAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1pbWdcbiAgICAgICAgdi1pZj1cInZpZXdNb2RlbC5hbGJ1bUNvdmVyVXJsXCJcbiAgICAgICAgOnNyYz1cInZpZXdNb2RlbC5hbGJ1bUNvdmVyVXJsXCJcbiAgICAgICAgaW1nLWNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgcmF0aW89XCIxXCJcbiAgICAgID5cbiAgICAgIDwvcS1pbWc+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHZpZXdNb2RlbC5hbGJ1bU5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdi1mb3I9XCIoYXJ0aXN0LCBpbmRleCkgaW4gdmlld01vZGVsLmFydGlzdE5hbWVcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBhcnRpc3QgfX1cbiAgICAgICAgICA8c3BhbiB2LWlmPVwiaW5kZXggPCB2aWV3TW9kZWwuYXJ0aXN0TmFtZS5sZW5ndGggLSAxXCI+LCA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEFsYnVtUmVhZER0byB9IGZyb20gJ2JhY2tlbmQtYXBpLWNsaWVudCc7XG5pbXBvcnQgeyBRQ2FyZCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgQ29tcHV0ZWRSZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cbi8vIFZpZXcgTW9kZWxzXG5pbnRlcmZhY2UgQWxidW1DYXJkUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5pbnRlcmZhY2UgQWxidW1DYXJkVmlld01vZGVsIHtcbiAgYWxidW1JZDogc3RyaW5nO1xuICBhbGJ1bU5hbWU6IHN0cmluZztcbiAgYXJ0aXN0TmFtZTogc3RyaW5nW107XG4gIGFsYnVtQ292ZXJVcmw6IHN0cmluZyB8IG51bGw7XG4gIHJlbGVhc2VEYXRlOiBEYXRlIHwgbnVsbDtcbiAgYWxidW1Db3ZlckNvbG9yczogc3RyaW5nW107XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8QWxidW1DYXJkUHJvcHM+KCk7XG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoKTogQ29tcHV0ZWRSZWY8QWxidW1DYXJkVmlld01vZGVsPiA9PiB7XG4gIHJldHVybiBjb21wdXRlZCgoKSA9PiAoe1xuICAgIGFsYnVtSWQ6IHByb3BzLmFsYnVtLmlkISxcbiAgICBhbGJ1bU5hbWU6IHByb3BzLmFsYnVtLm5hbWU/Ll9kZWZhdWx0IHx8ICcnLFxuICAgIGFydGlzdE5hbWU6IHByb3BzLmFsYnVtLmFsYnVtQXJ0aXN0Py5tYXAoKGFydGlzdCkgPT4gYXJ0aXN0Lm5hbWUhKSB8fCBbXSxcbiAgICBhbGJ1bUNvdmVyVXJsOiBwcm9wcy5hbGJ1bS50aHVtYm5haWw/LmxhcmdlPy51cmwgfHwgbnVsbCxcbiAgICByZWxlYXNlRGF0ZTogcHJvcHMuYWxidW0ucmVsZWFzZURhdGUgfHwgbnVsbCxcbiAgICBhbGJ1bUNvdmVyQ29sb3JzOiBwcm9wcy5hbGJ1bS50aHVtYm5haWw/LmNvbG9ycyB8fCBbXSxcbiAgfSkpO1xufTtcblxuY29uc3Qgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbCgpO1xuXG4vLyBVaSBhY3Rpb25zXG5jb25zdCBuYXZpZ2F0ZVRvQWxidW0gPSAoKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7IG5hbWU6ICdBbGJ1bScsIHBhcmFtczogeyBhbGJ1bUlkOiB2aWV3TW9kZWwudmFsdWUuYWxidW1JZCB9IH0pO1xufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4uYm9keS0tbGlnaHQgLmFsYnVtLWNhcmQge1xuICBtYXgtd2lkdGg6IDI0NXB4O1xuICBtaW4td2lkdGg6IDI0NXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRncmV5LTIsIDAuNSk7XG4gIGNvbG9yOiAkZ3JleS04O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgbGluZWFyLCBjb2xvciAwLjNzIGxpbmVhciwgYm94LXNoYWRvdyAwLjNzIGxpbmVhcjtcblxuICAucS1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCBmaWx0ZXIgMC4zcyBsaW5lYXIsIGJveC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKCRncmV5LTEwLCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGdyZXktMiwgMC41KTtcbiAgICBjb2xvcjogJGdyZXktMTA7XG5cbiAgICAucS1pbWcge1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKCRibHVlLWdyZXktOCwgMC42KTtcbiAgICB9XG4gIH1cbn1cblxuLmJvZHktLWRhcmsgLmFsYnVtLWNhcmQge1xuICBtYXgtd2lkdGg6IDI0NXB4O1xuICBtaW4td2lkdGg6IDI0NXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRncmV5LTksIDAuMyk7XG4gIGNvbG9yOiAkZ3JleS0zO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgbGluZWFyLCBjb2xvciAwLjNzIGxpbmVhciwgYm9yZGVyIDAuM3MgbGluZWFyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRsaWdodC1kYXJrLCAxKTtcbiAgYm94LXNoYWRvdzogMCAwIDA7XG5cbiAgLnEtaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIGZpbHRlciAwLjNzIGxpbmVhcjtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGdyZXktNiwgMC41KTtcbiAgICBjb2xvcjogJGdyZXktMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtd2hpdGU7XG5cbiAgICAucS1pbWcge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCI8IS0tIGVzbGludC1kaXNhYmxlIHZ1ZS9uby1tdXRhdGluZy1wcm9wcyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cInByb3BzLmNvbnRyb2xsZXIudmlld01vZGVsQ29udHJvbGxlclwiPlxuICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgIDxxLXNwaW5uZXItZ2VhcnMgLz5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBkYXRhIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleCBqdXN0aWZ5LWJldHdlZW4gcS1wYS1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgY29sLXNtLTIgY29sLWxnLTIgY29sLXhsLTFcIj5cbiAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5jb250cm9sbGVyLmlucHV0TW9kZWwudmFsdWUuc29ydEZpZWxkXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwic29ydEZpZWxkT3B0aW9uc1wiXG4gICAgICAgICAgICBsYWJlbD1cIk9yZGVyIEJ5XCJcbiAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgY29sLXNtLTIgY29sLWxnLTIgY29sLXhsLTFcIj5cbiAgICAgICAgICA8cS1zZWxlY3RcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9wcy5jb250cm9sbGVyLmlucHV0TW9kZWwudmFsdWUuc29ydE9yZGVyXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwic29ydE9yZGVyT3B0aW9uc1wiXG4gICAgICAgICAgICBsYWJlbD1cIk9yZGVyXCJcbiAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHEtZ3V0dGVyLW1kIGp1c3RpZnktZXZlbmx5IHEtcHktbWQgY29sLXhsLTFcIj5cbiAgICAgICAgPEFsYnVtQ2FyZFxuICAgICAgICAgIHYtZm9yPVwiKGFsYnVtLCBpbmRleCkgaW4gZGF0YT8uYWxidW1zXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgIDphbGJ1bT1cImFsYnVtXCJcbiAgICAgICAgPlxuICAgICAgICA8L0FsYnVtQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwicS1wYS1sZyBxLW10LWxnIGZsZXggZmxleC1jZW50ZXJcIlxuICAgICAgICBzdHlsZT1cImJvcmRlci10b3A6IDFweCBzb2xpZCAjNTQ1NDU0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIHEtcGEtbWRcIj5cbiAgICAgICAgICA8cS1wYWdpbmF0aW9uXG4gICAgICAgICAgICB2LW1vZGVsPVwiZGF0YSEuY3VycmVudFBhZ2VcIlxuICAgICAgICAgICAgOm1heD1cImRhdGEhLnRvdGFsUGFnZXNcIlxuICAgICAgICAgICAgbWF4LXBhZ2VzPVwiMTBcIlxuICAgICAgICAgICAgZ3V0dGVyPVwiMjBweFwiXG4gICAgICAgICAgICBzaXplPVwiMThweFwiXG4gICAgICAgICAgICBkaXJlY3Rpb24tbGlua3NcbiAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJwcm9wcy5jb250cm9sbGVyLmNoYW5nZVBhZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZXJyb3I9XCJ7IGVycm9yIH1cIj5cbiAgICAgIDxxLWNhcmQgY2xhc3M9XCJxLW1hLW1kXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVycm9yPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgZXJyb3IhLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvTG9hZGFibGVFbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFNvcnRPcmRlciwgQWxidW1PcmRlck9wdGlvbnMgfSBmcm9tICdiYWNrZW5kLWFwaS1jbGllbnQnO1xuaW1wb3J0IEFsYnVtQ2FyZCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUNhcmQvQWxidW1DYXJkLnZ1ZSc7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlciB9IGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtTGlzdEdyaWRWaWV3L0FsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBRQ2FyZCB9IGZyb20gJ3F1YXNhcic7XG5cbi8vIENvbnN0IGZpZWxkcyBmb3IgdWkgY29tcG9uZW50c1xuY29uc3Qgc29ydEZpZWxkT3B0aW9ucyA9IFtcbiAgeyBsYWJlbDogJ0RhdGUnLCB2YWx1ZTogQWxidW1PcmRlck9wdGlvbnMuRGF0ZSB9LFxuICB7IGxhYmVsOiAnTmFtZScsIHZhbHVlOiBBbGJ1bU9yZGVyT3B0aW9ucy5UaXRsZSB9LFxuICB7IGxhYmVsOiAnSWQnLCB2YWx1ZTogQWxidW1PcmRlck9wdGlvbnMuSWQgfSxcbl07XG5jb25zdCBzb3J0T3JkZXJPcHRpb25zID0gW1xuICB7IGxhYmVsOiAnQXNjZW5kaW5nJywgdmFsdWU6IFNvcnRPcmRlci5Bc2NlbmRpbmcgfSxcbiAgeyBsYWJlbDogJ0Rlc2NlbmRpbmcnLCB2YWx1ZTogU29ydE9yZGVyLkRlc2NlbmRpbmcgfSxcbl07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBjb250cm9sbGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXI7XG59PigpO1xuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlZiwgUmVmLCB3YXRjaCwgb25Nb3VudGVkLCBDb21wdXRlZFJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsIGZyb20gJy4vbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwgZnJvbSAnLi9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IHtcbiAgTG9hZGFibGVTdGF0ZSxcbiAgdXNlTG9hZGFibGVDb250cm9sbGVyLFxufSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCB7IEFsYnVtT3JkZXJPcHRpb25zLCBTb3J0T3JkZXIgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5cbmV4cG9ydCB0eXBlIEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlciA9IHtcbiAgdmlld01vZGVsQ29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbD47XG4gIGlucHV0TW9kZWw6IFJlZjxBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWw+O1xuXG4gIHVybFN0YXRlRGVjb2Rlcj86IENvbXB1dGVkUmVmPCgpID0+IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbD47XG4gIHVybFN0YXRlRW5jb2Rlcj86IChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB2b2lkO1xuXG4gIGxvYWQ6IChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiBQcm9taXNlPHZvaWQ+O1xuICByZWxvYWQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGNoYW5nZVBhZ2U6IChwYWdlOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG4gIGNoYW5nZVNvcnRPcmRlcjogKHNvcnRPcmRlcjogU29ydE9yZGVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VTb3J0RmllbGQ6IChzb3J0RmllbGQ6IEFsYnVtT3JkZXJPcHRpb25zKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXJQYXJhbXMge1xuICBsb2FkOiAoXG4gICAgc3RhdGU6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbFxuICApID0+IFByb21pc2U8QWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw+O1xuICBpbml0aWFsSW5wdXRTdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsO1xuICB1cmxTdGF0ZURlY29kZXI6IENvbXB1dGVkUmVmPEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbD47XG4gIHVybFN0YXRlRW5jb2RlcjogKHN0YXRlOiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcihcbiAgcGFyYW1ldGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXJQYXJhbXNcbik6IEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlciB7XG4gIGNvbnN0IHZpZXdNb2RlbENvbnRyb2xsZXIgPVxuICAgIHVzZUxvYWRhYmxlQ29udHJvbGxlcjxBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbD4oKTtcbiAgY29uc3QgaW5wdXRNb2RlbCA9IHJlZihwYXJhbWV0ZXIuaW5pdGlhbElucHV0U3RhdGUpO1xuXG4gIGNvbnN0IGxvYWQgPSBhc3luYyAoc3RhdGU6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIGxvYWQgY2FsbCcpO1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIuc2V0TG9hZGluZygpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2aWV3TW9kZWwgPSBhd2FpdCBwYXJhbWV0ZXIubG9hZChzdGF0ZSk7XG4gICAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldFN1Y2Nlc3Modmlld01vZGVsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldEVycm9yKGUgYXMgRXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFuZ2VQYWdlID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgcGFnZSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNvcnRPcmRlciA9IGFzeW5jIChzb3J0T3JkZXI6IFNvcnRPcmRlcikgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgc29ydE9yZGVyLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU29ydEZpZWxkID0gYXN5bmMgKHNvcnRGaWVsZDogQWxidW1PcmRlck9wdGlvbnMpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIHNvcnRGaWVsZCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHJlbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBEZWNvZGUgdGhlIGN1cnJlbnQgdXJsIHN0YXRlXG4gICAgaWYgKHBhcmFtZXRlci51cmxTdGF0ZURlY29kZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIHJlbG9hZCBjYWxsJyk7XG4gICAgICBpbnB1dE1vZGVsLnZhbHVlID0gcGFyYW1ldGVyLnVybFN0YXRlRGVjb2Rlci52YWx1ZTtcbiAgICB9XG5cbiAgICBhd2FpdCBsb2FkKGlucHV0TW9kZWwudmFsdWUpO1xuICB9XG5cbiAgd2F0Y2goXG4gICAgaW5wdXRNb2RlbCxcbiAgICBhc3luYyAobmV3SW5wdXRNb2RlbCwgb2xkSW5wdXRNb2RlbCkgPT4ge1xuICAgICAgY29uc29sZS5kaXIoeyBuZXdJbnB1dE1vZGVsLCBvbGRJbnB1dE1vZGVsIH0pO1xuICAgICAgcGFyYW1ldGVyLnVybFN0YXRlRW5jb2Rlcj8uKG5ld0lucHV0TW9kZWwpO1xuICAgICAgYXdhaXQgbG9hZChuZXdJbnB1dE1vZGVsKTtcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlZXA6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIC8vIEZpcnN0IGxvYWQsIGlmIHVybFN0YXRlRGVjb2RlciBpcyBub3QgcHJvdmlkZWQsXG4gIC8vIHRoZW4gbG9hZCB0aGUgaW5pdGlhbCBzdGF0ZSwgb3RoZXJ3aXNlLCBsb2FkIHRoZSBzdGF0ZSBmcm9tIHRoZSB1cmxTdGF0ZURlY29kZXJcbiAgaWYgKHBhcmFtZXRlci51cmxTdGF0ZURlY29kZXIpIHtcbiAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byB1cmxTdGF0ZURlY29kZXIgY2hhbmdlJyk7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHBhcmFtZXRlci51cmxTdGF0ZURlY29kZXIudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgTG9hZGluZyBkdWUgdG8gb25Nb3VudGVkJyk7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHBhcmFtZXRlci5pbml0aWFsSW5wdXRTdGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmlld01vZGVsQ29udHJvbGxlcixcbiAgICBpbnB1dE1vZGVsLFxuXG4gICAgbG9hZCxcbiAgICByZWxvYWQsXG4gICAgY2hhbmdlUGFnZSxcbiAgICBjaGFuZ2VTb3J0T3JkZXIsXG4gICAgY2hhbmdlU29ydEZpZWxkLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFpQlksTUFBQyxvQkFBb0I7QUFBQSxFQUM3QixJQUFJO0FBQUEsRUFDSixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQ1g7QUNKTyxNQUFNLFlBQVk7QUFBQSxFQUNyQixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQ2hCO0FDUkEsU0FBUyxRQUFTLEtBQUssV0FBVztBQUNoQyxTQUFPLENBQUUsTUFBTSxPQUFRLFNBQVMsR0FBRyxJQUMvQixNQUNBO0FBQ047QUFFQSxJQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNELEtBQUs7QUFBQSxNQUNILE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBQ0QsS0FBSztBQUFBLE1BQ0gs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
