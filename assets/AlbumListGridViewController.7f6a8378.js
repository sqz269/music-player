import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.1c97f3bb.js";
import { Q as QSelect } from "./QSelect.18cdb5c2.js";
import { Q as QPagination, S as SortOrder } from "./QPagination.b3f1bed3.js";
import { E as defineComponent, S as useRouter, l as withDirectives, G as openBlock, H as createBlock, I as withCtx, T as unref, g as computed, J as createVNode, a5 as createCommentVNode, K as QCardSection, R as createBaseVNode, $ as toDisplayString, U as createElementBlock, Y as renderList, W as createTextVNode, X as Fragment, O as QCard, _ as _export_sfc, a0 as Ripple, bm as useLoadableController, r as ref, w as watch } from "./index.ac9d5b0d.js";
import { Q as QImg } from "./QImg.33763b6c.js";
const AlbumOrderOptions = {
  Id: "Id",
  Date: "Date",
  Title: "Title"
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLjdmNmE4Mzc4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QvZXNtL21vZGVscy9BbGJ1bU9yZGVyT3B0aW9ucy5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FsYnVtQ2FyZC9BbGJ1bUNhcmQudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXcudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUbG1jUGxheWVyQmFja2VuZFxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBbGJ1bU9yZGVyT3B0aW9ucyA9IHtcbiAgICBJZDogJ0lkJyxcbiAgICBEYXRlOiAnRGF0ZScsXG4gICAgVGl0bGU6ICdUaXRsZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gQWxidW1PcmRlck9wdGlvbnNGcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIEFsYnVtT3JkZXJPcHRpb25zRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQWxidW1PcmRlck9wdGlvbnNGcm9tSlNPTlR5cGVkKGpzb24sIGlnbm9yZURpc2NyaW1pbmF0b3IpIHtcbiAgICByZXR1cm4ganNvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBbGJ1bU9yZGVyT3B0aW9uc1RvSlNPTih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZFxuICAgIHYtcmlwcGxlXG4gICAgY2xhc3M9XCJhbGJ1bS1jYXJkIGN1cnNvci1wb2ludGVyXCJcbiAgICBAY2xpY2s9XCJuYXZpZ2F0ZVRvQWxidW1cIlxuICA+XG4gICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtaW1nXG4gICAgICAgIHYtaWY9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICAgIDpzcmM9XCJ2aWV3TW9kZWwuYWxidW1Db3ZlclVybFwiXG4gICAgICAgIGltZy1jbGFzcz1cInJvdW5kZWQtYm9yZGVyc1wiXG4gICAgICAgIHJhdGlvPVwiMVwiXG4gICAgICA+XG4gICAgICA8L3EtaW1nPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyB2aWV3TW9kZWwuYWxidW1OYW1lIH19PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHYtZm9yPVwiKGFydGlzdCwgaW5kZXgpIGluIHZpZXdNb2RlbC5hcnRpc3ROYW1lXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgYXJ0aXN0IH19XG4gICAgICAgICAgPHNwYW4gdi1pZj1cImluZGV4IDwgdmlld01vZGVsLmFydGlzdE5hbWUubGVuZ3RoIC0gMVwiPiwgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8gfSBmcm9tICdiYWNrZW5kLWFwaS1jbGllbnQnO1xuaW1wb3J0IHsgUUNhcmQgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY29tcHV0ZWQsIENvbXB1dGVkUmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG4vLyBWaWV3IE1vZGVsc1xuaW50ZXJmYWNlIEFsYnVtQ2FyZFByb3BzIHtcbiAgYWxidW06IEFsYnVtUmVhZER0bztcbn1cblxuaW50ZXJmYWNlIEFsYnVtQ2FyZFZpZXdNb2RlbCB7XG4gIGFsYnVtSWQ6IHN0cmluZztcbiAgYWxidW1OYW1lOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZ1tdO1xuICBhbGJ1bUNvdmVyVXJsOiBzdHJpbmcgfCBudWxsO1xuICByZWxlYXNlRGF0ZTogRGF0ZSB8IG51bGw7XG4gIGFsYnVtQ292ZXJDb2xvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtQ2FyZFByb3BzPigpO1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBpbml0aWFsaXplVmlld01vZGVsID0gKCk6IENvbXB1dGVkUmVmPEFsYnVtQ2FyZFZpZXdNb2RlbD4gPT4ge1xuICByZXR1cm4gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBhbGJ1bUlkOiBwcm9wcy5hbGJ1bS5pZCEsXG4gICAgYWxidW1OYW1lOiBwcm9wcy5hbGJ1bS5uYW1lPy5fZGVmYXVsdCB8fCAnJyxcbiAgICBhcnRpc3ROYW1lOiBwcm9wcy5hbGJ1bS5hbGJ1bUFydGlzdD8ubWFwKChhcnRpc3QpID0+IGFydGlzdC5uYW1lISkgfHwgW10sXG4gICAgYWxidW1Db3ZlclVybDogcHJvcHMuYWxidW0udGh1bWJuYWlsPy5sYXJnZT8udXJsIHx8IG51bGwsXG4gICAgcmVsZWFzZURhdGU6IHByb3BzLmFsYnVtLnJlbGVhc2VEYXRlIHx8IG51bGwsXG4gICAgYWxidW1Db3ZlckNvbG9yczogcHJvcHMuYWxidW0udGh1bWJuYWlsPy5jb2xvcnMgfHwgW10sXG4gIH0pKTtcbn07XG5cbmNvbnN0IHZpZXdNb2RlbCA9IGluaXRpYWxpemVWaWV3TW9kZWwoKTtcblxuLy8gVWkgYWN0aW9uc1xuY29uc3QgbmF2aWdhdGVUb0FsYnVtID0gKCkgPT4ge1xuICAkcm91dGVyLnB1c2goeyBuYW1lOiAnQWxidW0nLCBwYXJhbXM6IHsgYWxidW1JZDogdmlld01vZGVsLnZhbHVlLmFsYnVtSWQgfSB9KTtcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWxpZ2h0IC5hbGJ1bS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAyNDVweDtcbiAgbWluLXdpZHRoOiAyNDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgkZ3JleS0yLCAwLjUpO1xuICBjb2xvcjogJGdyZXktODtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGxpbmVhciwgY29sb3IgMC4zcyBsaW5lYXIsIGJveC1zaGFkb3cgMC4zcyBsaW5lYXI7XG5cbiAgLnEtaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgZmlsdGVyIDAuM3MgbGluZWFyLCBib3gtc2hhZG93IDAuM3MgbGluZWFyO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgkZ3JleS0xMCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRncmV5LTIsIDAuNSk7XG4gICAgY29sb3I6ICRncmV5LTEwO1xuXG4gICAgLnEtaW1nIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgkYmx1ZS1ncmV5LTgsIDAuNik7XG4gICAgfVxuICB9XG59XG5cbi5ib2R5LS1kYXJrIC5hbGJ1bS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAyNDVweDtcbiAgbWluLXdpZHRoOiAyNDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgkZ3JleS05LCAwLjMpO1xuICBjb2xvcjogJGdyZXktMztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGxpbmVhciwgY29sb3IgMC4zcyBsaW5lYXIsIGJvcmRlciAwLjNzIGxpbmVhcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkbGlnaHQtZGFyaywgMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwO1xuXG4gIC5xLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCBmaWx0ZXIgMC4zcyBsaW5lYXI7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRncmV5LTYsIDAuNSk7XG4gICAgY29sb3I6ICRncmV5LTE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LXdoaXRlO1xuXG4gICAgLnEtaW1nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuIiwiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tbXV0YXRpbmctcHJvcHMgLS0+XG48dGVtcGxhdGU+XG4gIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJwcm9wcy5jb250cm9sbGVyLnZpZXdNb2RlbENvbnRyb2xsZXJcIj5cbiAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8cS1zcGlubmVyLWdlYXJzIC8+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgganVzdGlmeS1iZXR3ZWVuIHEtcGEtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIGNvbC1zbS0yIGNvbC1sZy0yIGNvbC14bC0xXCI+XG4gICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlLnNvcnRGaWVsZFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNvcnRGaWVsZE9wdGlvbnNcIlxuICAgICAgICAgICAgbGFiZWw9XCJPcmRlciBCeVwiXG4gICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIGNvbC1zbS0yIGNvbC1sZy0yIGNvbC14bC0xXCI+XG4gICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlLnNvcnRPcmRlclwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNvcnRPcmRlck9wdGlvbnNcIlxuICAgICAgICAgICAgbGFiZWw9XCJPcmRlclwiXG4gICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1tZCBqdXN0aWZ5LWV2ZW5seSBxLXB5LW1kIGNvbC14bC0xXCI+XG4gICAgICAgIDxBbGJ1bUNhcmRcbiAgICAgICAgICB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRhdGE/LmFsYnVtc1wiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICA6YWxidW09XCJhbGJ1bVwiXG4gICAgICAgID5cbiAgICAgICAgPC9BbGJ1bUNhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInEtcGEtbGcgcS1tdC1sZyBmbGV4IGZsZXgtY2VudGVyXCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItdG9wOiAxcHggc29saWQgIzU0NTQ1NFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCBxLXBhLW1kXCI+XG4gICAgICAgICAgPHEtcGFnaW5hdGlvblxuICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEhLmN1cnJlbnRQYWdlXCJcbiAgICAgICAgICAgIDptYXg9XCJkYXRhIS50b3RhbFBhZ2VzXCJcbiAgICAgICAgICAgIG1heC1wYWdlcz1cIjEwXCJcbiAgICAgICAgICAgIGd1dHRlcj1cIjIwcHhcIlxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxuICAgICAgICAgICAgZGlyZWN0aW9uLWxpbmtzXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwicHJvcHMuY29udHJvbGxlci5jaGFuZ2VQYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI2Vycm9yPVwieyBlcnJvciB9XCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1tYS1tZFwiPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FcnJvcjwvZGl2PlxuICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGVycm9yIS5tZXNzYWdlIH19PC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8L3EtY2FyZD5cbiAgICA8L3RlbXBsYXRlPlxuICA8L0xvYWRhYmxlRWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBTb3J0T3JkZXIsIEFsYnVtT3JkZXJPcHRpb25zIH0gZnJvbSAnYmFja2VuZC1hcGktY2xpZW50JztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1DYXJkL0FsYnVtQ2FyZC52dWUnO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQgeyBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgfSBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9BbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgUUNhcmQgfSBmcm9tICdxdWFzYXInO1xuXG4vLyBDb25zdCBmaWVsZHMgZm9yIHVpIGNvbXBvbmVudHNcbmNvbnN0IHNvcnRGaWVsZE9wdGlvbnMgPSBbXG4gIHsgbGFiZWw6ICdEYXRlJywgdmFsdWU6IEFsYnVtT3JkZXJPcHRpb25zLkRhdGUgfSxcbiAgeyBsYWJlbDogJ05hbWUnLCB2YWx1ZTogQWxidW1PcmRlck9wdGlvbnMuVGl0bGUgfSxcbiAgeyBsYWJlbDogJ0lkJywgdmFsdWU6IEFsYnVtT3JkZXJPcHRpb25zLklkIH0sXG5dO1xuY29uc3Qgc29ydE9yZGVyT3B0aW9ucyA9IFtcbiAgeyBsYWJlbDogJ0FzY2VuZGluZycsIHZhbHVlOiBTb3J0T3JkZXIuQXNjZW5kaW5nIH0sXG4gIHsgbGFiZWw6ICdEZXNjZW5kaW5nJywgdmFsdWU6IFNvcnRPcmRlci5EZXNjZW5kaW5nIH0sXG5dO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgY29udHJvbGxlcjogQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyO1xufT4oKTtcblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZWYsIFJlZiwgd2F0Y2gsIG9uTW91bnRlZCwgQ29tcHV0ZWRSZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCBmcm9tICcuL21vZGVscy9BbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwnO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsIGZyb20gJy4vbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsJztcbmltcG9ydCB7XG4gIExvYWRhYmxlU3RhdGUsXG4gIHVzZUxvYWRhYmxlQ29udHJvbGxlcixcbn0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBBbGJ1bU9yZGVyT3B0aW9ucywgU29ydE9yZGVyIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuXG5leHBvcnQgdHlwZSBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgPSB7XG4gIHZpZXdNb2RlbENvbnRyb2xsZXI6IExvYWRhYmxlU3RhdGU8QWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw+O1xuICBpbnB1dE1vZGVsOiBSZWY8QWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsPjtcblxuICB1cmxTdGF0ZURlY29kZXI/OiBDb21wdXRlZFJlZjwoKSA9PiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWw+O1xuICB1cmxTdGF0ZUVuY29kZXI/OiAoc3RhdGU6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCkgPT4gdm9pZDtcblxuICBsb2FkOiAoc3RhdGU6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcmVsb2FkOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VQYWdlOiAocGFnZTogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VTb3J0T3JkZXI6IChzb3J0T3JkZXI6IFNvcnRPcmRlcikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgY2hhbmdlU29ydEZpZWxkOiAoc29ydEZpZWxkOiBBbGJ1bU9yZGVyT3B0aW9ucykgPT4gUHJvbWlzZTx2b2lkPjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyUGFyYW1zIHtcbiAgbG9hZDogKFxuICAgIHN0YXRlOiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWxcbiAgKSA9PiBQcm9taXNlPEFsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsPjtcbiAgaW5pdGlhbElucHV0U3RhdGU6IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbDtcbiAgdXJsU3RhdGVEZWNvZGVyOiBDb21wdXRlZFJlZjxBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWw+O1xuICB1cmxTdGF0ZUVuY29kZXI6IChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIoXG4gIHBhcmFtZXRlcjogQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyUGFyYW1zXG4pOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIge1xuICBjb25zdCB2aWV3TW9kZWxDb250cm9sbGVyID1cbiAgICB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8QWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYocGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlKTtcblxuICBjb25zdCBsb2FkID0gYXN5bmMgKHN0YXRlOiBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBsb2FkIGNhbGwnKTtcbiAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgdmlld01vZGVsID0gYXdhaXQgcGFyYW1ldGVyLmxvYWQoc3RhdGUpO1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRFcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIHBhZ2UsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTb3J0T3JkZXIgPSBhc3luYyAoc29ydE9yZGVyOiBTb3J0T3JkZXIpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIHNvcnRPcmRlcixcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNvcnRGaWVsZCA9IGFzeW5jIChzb3J0RmllbGQ6IEFsYnVtT3JkZXJPcHRpb25zKSA9PiB7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHtcbiAgICAgIC4uLmlucHV0TW9kZWwudmFsdWUsXG4gICAgICBzb3J0RmllbGQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCByZWxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRGVjb2RlIHRoZSBjdXJyZW50IHVybCBzdGF0ZVxuICAgIGlmIChwYXJhbWV0ZXIudXJsU3RhdGVEZWNvZGVyKSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byByZWxvYWQgY2FsbCcpO1xuICAgICAgaW5wdXRNb2RlbC52YWx1ZSA9IHBhcmFtZXRlci51cmxTdGF0ZURlY29kZXIudmFsdWU7XG4gICAgfVxuXG4gICAgYXdhaXQgbG9hZChpbnB1dE1vZGVsLnZhbHVlKTtcbiAgfVxuXG4gIHdhdGNoKFxuICAgIGlucHV0TW9kZWwsXG4gICAgYXN5bmMgKG5ld0lucHV0TW9kZWwsIG9sZElucHV0TW9kZWwpID0+IHtcbiAgICAgIGNvbnNvbGUuZGlyKHsgbmV3SW5wdXRNb2RlbCwgb2xkSW5wdXRNb2RlbCB9KTtcbiAgICAgIHBhcmFtZXRlci51cmxTdGF0ZUVuY29kZXI/LihuZXdJbnB1dE1vZGVsKTtcbiAgICAgIGF3YWl0IGxvYWQobmV3SW5wdXRNb2RlbCk7XG4gICAgfSxcbiAgICB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICAvLyBGaXJzdCBsb2FkLCBpZiB1cmxTdGF0ZURlY29kZXIgaXMgbm90IHByb3ZpZGVkLFxuICAvLyB0aGVuIGxvYWQgdGhlIGluaXRpYWwgc3RhdGUsIG90aGVyd2lzZSwgbG9hZCB0aGUgc3RhdGUgZnJvbSB0aGUgdXJsU3RhdGVEZWNvZGVyXG4gIGlmIChwYXJhbWV0ZXIudXJsU3RhdGVEZWNvZGVyKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgTG9hZGluZyBkdWUgdG8gdXJsU3RhdGVEZWNvZGVyIGNoYW5nZScpO1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSBwYXJhbWV0ZXIudXJsU3RhdGVEZWNvZGVyLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIG9uTW91bnRlZCcpO1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSBwYXJhbWV0ZXIuaW5pdGlhbElucHV0U3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcblxuICAgIGxvYWQsXG4gICAgcmVsb2FkLFxuICAgIGNoYW5nZVBhZ2UsXG4gICAgY2hhbmdlU29ydE9yZGVyLFxuICAgIGNoYW5nZVNvcnRGaWVsZCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10s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
