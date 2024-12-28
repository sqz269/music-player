import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.f6bcad96.js";
import { E as defineComponent, l as withDirectives, G as openBlock, H as createBlock, I as withCtx, bz as queueService, by as QueueAddMode, J as createVNode, T as unref, W as createTextVNode, $ as toDisplayString, aa as createCommentVNode, b8 as QAvatar, R as createBaseVNode, _ as _export_sfc, a0 as Ripple, U as createElementBlock, Y as renderList, X as Fragment, bn as useLoadableController, r as ref, w as watch, bA as TrackApi, bB as apiConfigurationProvider, S as useRouter, bj as useRoute, g as computed, o as onMounted, bC as OriginalAlbumApi, O as QCard, K as QCardSection, V as QSeparator, N as QBtn, bD as radioService } from "./index.99fa97b6.js";
import { Q as QPagination, S as SortOrder } from "./QPagination.f7b4723e.js";
import { Q as QSelect } from "./QSelect.9bb1c361.js";
import { Q as QList } from "./QList.5cc0ff62.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.33f9fcba.js";
import { a as TrackMenuOptionsBuilder, T as TrackMenu } from "./TrackMenuOptionBuilder.ddb2ff4c.js";
import "./ClosePopup.b10a77bd.js";
import "./index.020b7c4d.js";
import "./UrlUtils.da180cca.js";
const TrackOrderOptions = {
  Id: "Id",
  Date: "Date",
  Title: "Title",
  Duration: "Duration",
  AlbumId: "AlbumId",
  AlbumTitle: "AlbumTitle"
};
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = defineComponent({
  __name: "TrackItem",
  props: {
    index: {},
    track: {}
  },
  setup(__props) {
    const props = __props;
    const playTrack = () => {
      queueService.addTrackById(props.track.id, QueueAddMode.PLAY_IMMEDIATELY);
    };
    const trackMenuOptions = new TrackMenuOptionsBuilder(props.track, props.track.album).addPlayNextOption().addAddToQueueOption().addViewAlbumOption().addViewCircleOption().addSearchOnYoutubeOption().build();
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: playTrack
      }, {
        default: withCtx(() => [
          createVNode(TrackMenu, { options: unref(trackMenuOptions) }, null, 8, ["options"]),
          props.index ? (openBlock(), createBlock(QItemSection, {
            key: 0,
            side: "",
            class: "items-center",
            style: { "width": "3rem" }
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.index), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QAvatar, {
                rounded: "",
                size: "72px"
              }, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    createBaseVNode("img", {
                      src: (_c = (_b = (_a = props.track.album) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.small) == null ? void 0 : _c.url
                    }, null, 8, _hoisted_1$2)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, { class: "flex justify-around" }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(QItemLabel, { class: "text-subtitle1" }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createTextVNode(toDisplayString((_a = props.track.name) == null ? void 0 : _a._default), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(QItemLabel, {
                  caption: "",
                  lines: "1",
                  class: "text-bold"
                }, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [
                      createTextVNode(toDisplayString((_b = (_a = props.track.album) == null ? void 0 : _a.name) == null ? void 0 : _b._default), 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              createVNode(QItemLabel, {
                caption: "",
                lines: "1"
              }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createTextVNode(toDisplayString((_b = (_a = props.track.album) == null ? void 0 : _a.albumArtist) == null ? void 0 : _b.map((c) => c.name).join(", ")), 1)
                  ];
                }),
                _: 1
              })
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
var TrackItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "TrackItem.vue"]]);
const _hoisted_1$1 = { class: "row flex justify-between q-pa-md" };
const _hoisted_2$1 = { class: "q-gutter-md col-sm-2 col-lg-2 col-xl-1" };
const _hoisted_3 = { class: "q-gutter-md col-sm-2 col-lg-2 col-xl-1" };
const _hoisted_4 = { class: "row q-gutter-md justify-evenly q-py-md col-xl-1" };
const _hoisted_5 = {
  class: "q-pa-lg q-mt-lg flex flex-center",
  style: { "border-top": "1px solid #545454" }
};
const _hoisted_6 = { class: "q-gutter-md q-pa-md" };
const _sfc_main$1 = defineComponent({
  __name: "TrackListView",
  props: {
    controller: {}
  },
  setup(__props) {
    const sortFieldOptions = [
      { label: "Date", value: TrackOrderOptions.Date },
      { label: "Name", value: TrackOrderOptions.Title },
      { label: "Id", value: TrackOrderOptions.Id },
      { label: "Duration", value: TrackOrderOptions.Duration },
      { label: "Album Id", value: TrackOrderOptions.AlbumId },
      { label: "Album Name", value: TrackOrderOptions.AlbumTitle }
    ];
    const sortOrderOptions = [
      { label: "Ascending", value: SortOrder.Ascending },
      { label: "Descending", value: SortOrder.Descending }
    ];
    const props = __props;
    console.log(props.controller.inputModel.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(LoadableElement, {
        "state-controller": props.controller.viewModelController
      }, {
        loading: withCtx(() => [
          createVNode(QSpinnerGears)
        ]),
        default: withCtx(({ data }) => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
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
            createVNode(QList, { class: "col-12" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(data.tracks, (track, index) => {
                  return openBlock(), createBlock(TrackItem, {
                    key: index,
                    track,
                    index: index + 1
                  }, null, 8, ["track", "index"]);
                }), 128))
              ]),
              _: 2
            }, 1024)
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
        _: 1
      }, 8, ["state-controller"]);
    };
  }
});
var TrackListView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "TrackListView.vue"]]);
function useTrackListViewController(parameter) {
  const viewModelController = useLoadableController();
  const inputModel = ref(parameter.initialInputState);
  const _constructApiArgument = (state) => {
    var _a, _b, _c, _d, _e;
    return {
      releaseDateBegin: ((_a = state == null ? void 0 : state.filters) == null ? void 0 : _a.releaseDateBegin) || void 0,
      releaseDateEnd: ((_b = state == null ? void 0 : state.filters) == null ? void 0 : _b.releaseDateEnd) || void 0,
      circleIds: ((_c = state == null ? void 0 : state.filters) == null ? void 0 : _c.circles) || void 0,
      originalAlbumIds: ((_d = state == null ? void 0 : state.filters) == null ? void 0 : _d.originalAlbums) || void 0,
      originalTrackIds: ((_e = state == null ? void 0 : state.filters) == null ? void 0 : _e.originalTracks) || void 0,
      start: (state.page - 1) * 50,
      limit: 50,
      sort: state.sortField,
      sortOrder: state.sortOrder
    };
  };
  const _load = async () => {
    const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());
    const args = _constructApiArgument(inputModel.value);
    const results = await trackApi.getTracksFiltered(args);
    console.log("results", results);
    const totalPages = Math.ceil(results.total / 50);
    return {
      tracks: results.tracks,
      totalPages,
      currentPage: inputModel.value.page,
      sortOrder: inputModel.value.sortOrder,
      sortField: inputModel.value.sortField
    };
  };
  const load = async () => {
    console.log("Controller Loading due to load call");
    viewModelController.setLoading();
    try {
      const viewModel = await _load();
      console.log("viewModel", viewModel);
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
  const changeFilter = async (filter) => {
    inputModel.value = {
      ...inputModel.value,
      filters: filter
    };
  };
  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      var _a;
      console.dir({ newInputModel, oldInputModel });
      (_a = parameter.urlStateEncoder) == null ? void 0 : _a.call(parameter, newInputModel);
      await load();
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
    reload: async () => {
      await load();
    },
    changeFilter,
    changePage,
    changeSortOrder,
    changeSortField
  };
}
var OriginalTracksPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = { class: "text-subtitle1" };
const _sfc_main = defineComponent({
  __name: "OriginalTracksPage",
  setup(__props) {
    const $router = useRouter();
    const $route = useRoute();
    const originalTrackInfoController = useLoadableController();
    const _loadOriginalTrackInfo = async () => {
      originalTrackInfoController.setLoading();
      const originalTrackId = $route.params.originalId;
      const originalApi = new OriginalAlbumApi(apiConfigurationProvider.getApiConfiguration());
      const result = await originalApi.getOriginalTrack({
        id: originalTrackId
      });
      originalTrackInfoController.setSuccess(result);
    };
    const urlStateDecoder = computed(() => {
      const pageParam = $route.params.page;
      const page = pageParam ? parseInt(pageParam) : 1;
      const originalTrackId = $route.params.originalId;
      const sortField = $route.query.sortField || TrackOrderOptions.Date;
      const sortOrder = $route.query.sortOrder || SortOrder.Descending;
      return {
        filters: {
          originalTracks: [originalTrackId]
        },
        page,
        sortField,
        sortOrder
      };
    });
    const urlStateEncoder = (state) => {
      var _a;
      const originalId = ((_a = state == null ? void 0 : state.filters) == null ? void 0 : _a.originalTracks[0]) || "";
      const query = {
        sortField: state.sortField,
        sortOrder: state.sortOrder
      };
      $router.push({
        params: {
          page: state.page.toString(),
          originalId
        },
        query
      });
    };
    const trackListViewController = useTrackListViewController({
      initialInputState: {
        filters: {
          originalTracks: []
        },
        page: 1,
        sortField: TrackOrderOptions.Date,
        sortOrder: SortOrder.Descending
      },
      urlStateDecoder,
      urlStateEncoder
    });
    watch($route, () => {
      trackListViewController.reload();
    });
    const radioPlay = () => {
      const originalTrackId = $route.params.originalId;
      radioService.setFilters({
        originalTracks: [originalTrackId]
      });
      radioService.activate();
    };
    onMounted(() => {
      _loadOriginalTrackInfo();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(LoadableElement, { "state-controller": unref(originalTrackInfoController) }, {
          loading: withCtx(() => [
            createVNode(QSpinnerGears)
          ]),
          default: withCtx(({ data }) => [
            createVNode(QCard, { class: "q-ma-md circle-info-card" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => {
                    var _a, _b, _c;
                    return [
                      createBaseVNode("div", _hoisted_1, toDisplayString((_a = data == null ? void 0 : data.title) == null ? void 0 : _a.en), 1),
                      createBaseVNode("div", _hoisted_2, " Album: " + toDisplayString((_c = (_b = data == null ? void 0 : data.album) == null ? void 0 : _b.fullName) == null ? void 0 : _c.en), 1)
                    ];
                  }),
                  _: 2
                }, 1024),
                createVNode(QSeparator),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      color: "primary",
                      class: "rounded-borders",
                      label: "Start Radio",
                      onClick: radioPlay
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["state-controller"]),
        createVNode(TrackListView, { controller: unref(trackListViewController) }, null, 8, ["controller"])
      ], 64);
    };
  }
});
var OriginalTracksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ed698bc"], ["__file", "OriginalTracksPage.vue"]]);
export { OriginalTracksPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JpZ2luYWxUcmFja3NQYWdlLmYyMzNiOGY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QvZXNtL21vZGVscy9UcmFja09yZGVyT3B0aW9ucy5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrSXRlbS9UcmFja0l0ZW0udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrTGlzdFZpZXcvVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvT3JpZ2luYWxUcmFja3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGxtY1BsYXllckJhY2tlbmRcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKlxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVHJhY2tPcmRlck9wdGlvbnMgPSB7XG4gICAgSWQ6ICdJZCcsXG4gICAgRGF0ZTogJ0RhdGUnLFxuICAgIFRpdGxlOiAnVGl0bGUnLFxuICAgIER1cmF0aW9uOiAnRHVyYXRpb24nLFxuICAgIEFsYnVtSWQ6ICdBbGJ1bUlkJyxcbiAgICBBbGJ1bVRpdGxlOiAnQWxidW1UaXRsZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gVHJhY2tPcmRlck9wdGlvbnNGcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIFRyYWNrT3JkZXJPcHRpb25zRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVHJhY2tPcmRlck9wdGlvbnNGcm9tSlNPTlR5cGVkKGpzb24sIGlnbm9yZURpc2NyaW1pbmF0b3IpIHtcbiAgICByZXR1cm4ganNvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBUcmFja09yZGVyT3B0aW9uc1RvSlNPTih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbVxuICAgIHYtcmlwcGxlXG4gICAgY2xpY2thYmxlXG4gICAgQGNsaWNrPVwicGxheVRyYWNrXCJcbiAgPlxuICAgIDxUcmFja01lbnUgOm9wdGlvbnM9XCJ0cmFja01lbnVPcHRpb25zXCIgLz5cblxuICAgIDxxLWl0ZW0tc2VjdGlvblxuICAgICAgc2lkZVxuICAgICAgY2xhc3M9J2l0ZW1zLWNlbnRlcidcbiAgICAgIHYtaWY9XCJwcm9wcy5pbmRleFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiAzcmVtO1wiXG4gICAgPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcm9wcy5pbmRleCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLWF2YXRhclxuICAgICAgICByb3VuZGVkXG4gICAgICAgIHNpemU9XCI3MnB4XCJcbiAgICAgID5cbiAgICAgICAgPGltZyA6c3JjPVwicHJvcHMudHJhY2suYWxidW0/LnRodW1ibmFpbD8uc21hbGw/LnVybFwiIC8+XG4gICAgICA8L3EtYXZhdGFyPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgcHJvcHMudHJhY2submFtZT8uX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1ib2xkXCJcbiAgICAgICAgPnt7IHByb3BzLnRyYWNrLmFsYnVtPy5uYW1lPy5fZGVmYXVsdCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgbGluZXM9XCIxXCJcbiAgICAgID57eyBwcm9wcy50cmFjay5hbGJ1bT8uYWxidW1BcnRpc3Q/Lm1hcChjID0+IGMubmFtZSkuam9pbignLCAnKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IHF1ZXVlU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuaW1wb3J0IHsgUXVldWVBZGRNb2RlIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IFRyYWNrTWVudU9wdGlvbnNCdWlsZGVyIGZyb20gJy4uL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudU9wdGlvbkJ1aWxkZXInO1xuaW1wb3J0IElUcmFja01lbnVPcHRpb24gZnJvbSAnLi4vTWVudU9wdGlvbnMvVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIvSVRyYWNrTWVudU9wdGlvbic7XG5pbXBvcnQgVHJhY2tNZW51IGZyb20gJy4uL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudS52dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRyYWNrOiBUcmFja1JlYWREdG87XG59PigpO1xuXG4vLyBzZXJ2aWNlc1xuY29uc3QgcGxheVRyYWNrID0gKCkgPT4ge1xuICBxdWV1ZVNlcnZpY2UuYWRkVHJhY2tCeUlkKHByb3BzLnRyYWNrLmlkISwgUXVldWVBZGRNb2RlLlBMQVlfSU1NRURJQVRFTFkpO1xufTtcblxuLy8gTWVudSBvcHRpb25zXG5jb25zdCB0cmFja01lbnVPcHRpb25zOiBJVHJhY2tNZW51T3B0aW9uW10gPVxuICBuZXcgVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIocHJvcHMudHJhY2ssIHByb3BzLnRyYWNrLmFsYnVtISlcbiAgICAuYWRkUGxheU5leHRPcHRpb24oKVxuICAgIC5hZGRBZGRUb1F1ZXVlT3B0aW9uKClcbiAgICAuYWRkVmlld0FsYnVtT3B0aW9uKClcbiAgICAuYWRkVmlld0NpcmNsZU9wdGlvbigpXG4gICAgLmFkZFNlYXJjaE9uWW91dHViZU9wdGlvbigpXG4gICAgLmJ1aWxkKCk7XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwicHJvcHMuY29udHJvbGxlci52aWV3TW9kZWxDb250cm9sbGVyXCI+XG4gICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgPHEtc3Bpbm5lci1nZWFycyAvPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbGV4IGp1c3RpZnktYmV0d2VlbiBxLXBhLW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCBjb2wtc20tMiBjb2wtbGctMiBjb2wteGwtMVwiPlxuICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLmNvbnRyb2xsZXIuaW5wdXRNb2RlbC52YWx1ZS5zb3J0RmllbGRcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJzb3J0RmllbGRPcHRpb25zXCJcbiAgICAgICAgICAgIGxhYmVsPVwiT3JkZXIgQnlcIlxuICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCBjb2wtc20tMiBjb2wtbGctMiBjb2wteGwtMVwiPlxuICAgICAgICAgIDxxLXNlbGVjdFxuICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLmNvbnRyb2xsZXIuaW5wdXRNb2RlbC52YWx1ZS5zb3J0T3JkZXJcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJzb3J0T3JkZXJPcHRpb25zXCJcbiAgICAgICAgICAgIGxhYmVsPVwiT3JkZXJcIlxuICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1ndXR0ZXItbWQganVzdGlmeS1ldmVubHkgcS1weS1tZCBjb2wteGwtMVwiPlxuICAgICAgICA8cS1saXN0IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPFRyYWNrSXRlbVxuICAgICAgICAgICAgdi1mb3I9XCIodHJhY2ssIGluZGV4KSBpbiBkYXRhIS50cmFja3NcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIDp0cmFjaz1cInRyYWNrXCJcbiAgICAgICAgICAgIDppbmRleD1cImluZGV4ICsgMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJxLXBhLWxnIHEtbXQtbGcgZmxleCBmbGV4LWNlbnRlclwiXG4gICAgICAgIHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NDU0NTRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgcS1wYS1tZFwiPlxuICAgICAgICAgIDxxLXBhZ2luYXRpb25cbiAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhIS5jdXJyZW50UGFnZVwiXG4gICAgICAgICAgICA6bWF4PVwiZGF0YSEudG90YWxQYWdlc1wiXG4gICAgICAgICAgICBtYXgtcGFnZXM9XCIxMFwiXG4gICAgICAgICAgICBndXR0ZXI9XCIyMHB4XCJcbiAgICAgICAgICAgIHNpemU9XCIxOHB4XCJcbiAgICAgICAgICAgIGRpcmVjdGlvbi1saW5rc1xuICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cInByb3BzLmNvbnRyb2xsZXIuY2hhbmdlUGFnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgU29ydE9yZGVyLCBUcmFja09yZGVyT3B0aW9ucyB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IFRyYWNrTGlzdFZpZXdDb250cm9sbGVyIH0gZnJvbSAnLi9UcmFja0xpc3RWaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCBUcmFja0l0ZW0gZnJvbSAnLi4vVHJhY2tJdGVtL1RyYWNrSXRlbS52dWUnO1xuXG5jb25zdCBzb3J0RmllbGRPcHRpb25zID0gW1xuICB7IGxhYmVsOiAnRGF0ZScsIHZhbHVlOiBUcmFja09yZGVyT3B0aW9ucy5EYXRlIH0sXG4gIHsgbGFiZWw6ICdOYW1lJywgdmFsdWU6IFRyYWNrT3JkZXJPcHRpb25zLlRpdGxlIH0sXG4gIHsgbGFiZWw6ICdJZCcsIHZhbHVlOiBUcmFja09yZGVyT3B0aW9ucy5JZCB9LFxuICB7IGxhYmVsOiAnRHVyYXRpb24nLCB2YWx1ZTogVHJhY2tPcmRlck9wdGlvbnMuRHVyYXRpb24gfSxcbiAgeyBsYWJlbDogJ0FsYnVtIElkJywgdmFsdWU6IFRyYWNrT3JkZXJPcHRpb25zLkFsYnVtSWQgfSxcbiAgeyBsYWJlbDogJ0FsYnVtIE5hbWUnLCB2YWx1ZTogVHJhY2tPcmRlck9wdGlvbnMuQWxidW1UaXRsZSB9LFxuXTtcbmNvbnN0IHNvcnRPcmRlck9wdGlvbnMgPSBbXG4gIHsgbGFiZWw6ICdBc2NlbmRpbmcnLCB2YWx1ZTogU29ydE9yZGVyLkFzY2VuZGluZyB9LFxuICB7IGxhYmVsOiAnRGVzY2VuZGluZycsIHZhbHVlOiBTb3J0T3JkZXIuRGVzY2VuZGluZyB9LFxuXTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGNvbnRyb2xsZXI6IFRyYWNrTGlzdFZpZXdDb250cm9sbGVyO1xufT4oKTtcblxuY29uc29sZS5sb2cocHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlKTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+PC9zdHlsZT5cbiIsImltcG9ydCB7IEdldFRyYWNrc0ZpbHRlcmVkUmVxdWVzdCwgU29ydE9yZGVyLCBUcmFja0FwaSwgVHJhY2tPcmRlck9wdGlvbnMgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBMb2FkYWJsZVN0YXRlLCB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCB7IENvbXB1dGVkUmVmLCByZWYsIFJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgVHJhY2tMaXN0Vmlld0lucHV0TW9kZWwgfSBmcm9tICcuL21vZGVscy9UcmFja0xpc3RWaWV3SW5wdXRNb2RlJztcbmltcG9ydCBUcmFja0xpc3RWaWV3Vmlld01vZGVsIGZyb20gJy4vbW9kZWxzL1RyYWNrTGlzdFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IHsgVHJhY2tRdWVyeUZpbHRlcnMgfSBmcm9tICdzcmMvbW9kZWxzL1RyYWNrUXVlcnlGaWx0ZXJzJztcbmltcG9ydCB7IGFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuXG5leHBvcnQgdHlwZSBUcmFja0xpc3RWaWV3Q29udHJvbGxlciA9IHtcbiAgdmlld01vZGVsQ29udHJvbGxlcjogTG9hZGFibGVTdGF0ZTxUcmFja0xpc3RWaWV3Vmlld01vZGVsPjtcbiAgaW5wdXRNb2RlbDogUmVmPFRyYWNrTGlzdFZpZXdJbnB1dE1vZGVsPjtcblxuICB1cmxTdGF0ZURlY29kZXI/OiBDb21wdXRlZFJlZjwoKSA9PiBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbD47XG4gIHVybFN0YXRlRW5jb2Rlcj86IChzdGF0ZTogVHJhY2tMaXN0Vmlld0lucHV0TW9kZWwpID0+IHZvaWQ7XG5cbiAgcmVsb2FkOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VGaWx0ZXI6IChmaWx0ZXI6IFRyYWNrUXVlcnlGaWx0ZXJzKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VQYWdlOiAocGFnZTogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VTb3J0T3JkZXI6IChzb3J0T3JkZXI6IFNvcnRPcmRlcikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgY2hhbmdlU29ydEZpZWxkOiAoc29ydEZpZWxkOiBUcmFja09yZGVyT3B0aW9ucykgPT4gUHJvbWlzZTx2b2lkPjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXJQYXJhbXMge1xuICBpbml0aWFsSW5wdXRTdGF0ZTogVHJhY2tMaXN0Vmlld0lucHV0TW9kZWw7XG4gIHVybFN0YXRlRGVjb2RlcjogQ29tcHV0ZWRSZWY8VHJhY2tMaXN0Vmlld0lucHV0TW9kZWw+O1xuICB1cmxTdGF0ZUVuY29kZXI6IChzdGF0ZTogVHJhY2tMaXN0Vmlld0lucHV0TW9kZWwpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRyYWNrTGlzdFZpZXdDb250cm9sbGVyKFxuICBwYXJhbWV0ZXI6IFRyYWNrTGlzdFZpZXdDb250cm9sbGVyUGFyYW1zXG4pOiBUcmFja0xpc3RWaWV3Q29udHJvbGxlciB7XG4gIGNvbnN0IHZpZXdNb2RlbENvbnRyb2xsZXIgPVxuICAgIHVzZUxvYWRhYmxlQ29udHJvbGxlcjxUcmFja0xpc3RWaWV3Vmlld01vZGVsPigpO1xuICBjb25zdCBpbnB1dE1vZGVsID0gcmVmKHBhcmFtZXRlci5pbml0aWFsSW5wdXRTdGF0ZSk7XG5cbiAgY29uc3QgX2NvbnN0cnVjdEFwaUFyZ3VtZW50ID0gKHN0YXRlOiBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCk6IEdldFRyYWNrc0ZpbHRlcmVkUmVxdWVzdCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbGVhc2VEYXRlQmVnaW46IHN0YXRlPy5maWx0ZXJzPy5yZWxlYXNlRGF0ZUJlZ2luIHx8IHVuZGVmaW5lZCxcbiAgICAgIHJlbGVhc2VEYXRlRW5kOiBzdGF0ZT8uZmlsdGVycz8ucmVsZWFzZURhdGVFbmQgfHwgdW5kZWZpbmVkLFxuICAgICAgY2lyY2xlSWRzOiBzdGF0ZT8uZmlsdGVycz8uY2lyY2xlcyB8fCB1bmRlZmluZWQsXG4gICAgICBvcmlnaW5hbEFsYnVtSWRzOiBzdGF0ZT8uZmlsdGVycz8ub3JpZ2luYWxBbGJ1bXMgfHwgdW5kZWZpbmVkLFxuICAgICAgb3JpZ2luYWxUcmFja0lkczogc3RhdGU/LmZpbHRlcnM/Lm9yaWdpbmFsVHJhY2tzIHx8IHVuZGVmaW5lZCxcbiAgICAgIHN0YXJ0OiAoc3RhdGUucGFnZSAtIDEpICogNTAsXG4gICAgICBsaW1pdDogNTAsXG4gICAgICBzb3J0OiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgX2xvYWQgPSBhc3luYyAoKTogUHJvbWlzZTxUcmFja0xpc3RWaWV3Vmlld01vZGVsPiA9PiB7XG4gICAgY29uc3QgdHJhY2tBcGkgPSBuZXcgVHJhY2tBcGkoYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb24oKSk7XG5cbiAgICBjb25zdCBhcmdzID0gX2NvbnN0cnVjdEFwaUFyZ3VtZW50KGlucHV0TW9kZWwudmFsdWUpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0cmFja0FwaS5nZXRUcmFja3NGaWx0ZXJlZChhcmdzKTtcblxuICAgIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cyk7XG5cbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdHMudG90YWwhIC8gNTApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYWNrczogcmVzdWx0cy50cmFja3MhLFxuICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgICAgIGN1cnJlbnRQYWdlOiBpbnB1dE1vZGVsLnZhbHVlLnBhZ2UsXG4gICAgICBzb3J0T3JkZXI6IGlucHV0TW9kZWwudmFsdWUuc29ydE9yZGVyLFxuICAgICAgc29ydEZpZWxkOiBpbnB1dE1vZGVsLnZhbHVlLnNvcnRGaWVsZCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBsb2FkIGNhbGwnKTtcbiAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgdmlld01vZGVsID0gYXdhaXQgX2xvYWQoKTtcbiAgICAgIGNvbnNvbGUubG9nKCd2aWV3TW9kZWwnLCB2aWV3TW9kZWwpO1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmlld01vZGVsQ29udHJvbGxlci5zZXRFcnJvcihlIGFzIEVycm9yKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHtcbiAgICAgIC4uLmlucHV0TW9kZWwudmFsdWUsXG4gICAgICBwYWdlLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU29ydE9yZGVyID0gYXN5bmMgKHNvcnRPcmRlcjogU29ydE9yZGVyKSA9PiB7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHtcbiAgICAgIC4uLmlucHV0TW9kZWwudmFsdWUsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTb3J0RmllbGQgPSBhc3luYyAoc29ydEZpZWxkOiBUcmFja09yZGVyT3B0aW9ucykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgc29ydEZpZWxkLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlRmlsdGVyID0gYXN5bmMgKGZpbHRlcjogVHJhY2tRdWVyeUZpbHRlcnMpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIGZpbHRlcnM6IGZpbHRlcixcbiAgICB9O1xuICB9XG5cbiAgd2F0Y2goXG4gICAgaW5wdXRNb2RlbCxcbiAgICBhc3luYyAobmV3SW5wdXRNb2RlbCwgb2xkSW5wdXRNb2RlbCkgPT4ge1xuICAgICAgY29uc29sZS5kaXIoeyBuZXdJbnB1dE1vZGVsLCBvbGRJbnB1dE1vZGVsIH0pO1xuICAgICAgcGFyYW1ldGVyLnVybFN0YXRlRW5jb2Rlcj8uKG5ld0lucHV0TW9kZWwpO1xuICAgICAgYXdhaXQgbG9hZCgpO1xuICAgIH0sXG4gICAge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgLy8gRmlyc3QgbG9hZCwgaWYgdXJsU3RhdGVEZWNvZGVyIGlzIG5vdCBwcm92aWRlZCxcbiAgLy8gdGhlbiBsb2FkIHRoZSBpbml0aWFsIHN0YXRlLCBvdGhlcndpc2UsIGxvYWQgdGhlIHN0YXRlIGZyb20gdGhlIHVybFN0YXRlRGVjb2RlclxuICBpZiAocGFyYW1ldGVyLnVybFN0YXRlRGVjb2Rlcikge1xuICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIHVybFN0YXRlRGVjb2RlciBjaGFuZ2UnKTtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0gcGFyYW1ldGVyLnVybFN0YXRlRGVjb2Rlci52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnQ29udHJvbGxlciBMb2FkaW5nIGR1ZSB0byBvbk1vdW50ZWQnKTtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0gcGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3TW9kZWxDb250cm9sbGVyLFxuICAgIGlucHV0TW9kZWwsXG4gICAgcmVsb2FkOiBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBsb2FkKCk7XG4gICAgfSxcbiAgICBjaGFuZ2VGaWx0ZXIsXG4gICAgY2hhbmdlUGFnZSxcbiAgICBjaGFuZ2VTb3J0T3JkZXIsXG4gICAgY2hhbmdlU29ydEZpZWxkXG4gIH07XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJvcmlnaW5hbFRyYWNrSW5mb0NvbnRyb2xsZXJcIj5cbiAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8cS1zcGlubmVyLWdlYXJzIC8+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1tYS1tZCBjaXJjbGUtaW5mby1jYXJkXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlxuICAgICAgICAgICAge3sgZGF0YT8udGl0bGU/LmVuIH19XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgIEFsYnVtOiB7eyBkYXRhPy5hbGJ1bT8uZnVsbE5hbWU/LmVuIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgUmFkaW9cIlxuICAgICAgICAgICAgQGNsaWNrPVwicmFkaW9QbGF5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvTG9hZGFibGVFbGVtZW50PlxuXG4gIDxUcmFja0xpc3RWaWV3IDpjb250cm9sbGVyPVwidHJhY2tMaXN0Vmlld0NvbnRyb2xsZXJcIj48L1RyYWNrTGlzdFZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgT3JpZ2luYWxBbGJ1bUFwaSwgT3JpZ2luYWxUcmFja1JlYWREdG8sIFNvcnRPcmRlciwgVHJhY2tPcmRlck9wdGlvbnMgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL1RyYWNrTGlzdFZpZXcvbW9kZWxzL1RyYWNrTGlzdFZpZXdJbnB1dE1vZGUnO1xuaW1wb3J0IFRyYWNrTGlzdFZpZXcgZnJvbSAnc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3LnZ1ZSc7XG5pbXBvcnQgdXNlVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIsIHJhZGlvU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlLCB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcblxuLy8gSW5qZWN0ZWQgc2VydmljZXNcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0ICRyb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IG9yaWdpbmFsVHJhY2tJbmZvQ29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxPcmlnaW5hbFRyYWNrUmVhZER0bz4oKTtcblxuY29uc3QgX2xvYWRPcmlnaW5hbFRyYWNrSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgb3JpZ2luYWxUcmFja0luZm9Db250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgY29uc3Qgb3JpZ2luYWxUcmFja0lkID0gJHJvdXRlLnBhcmFtcy5vcmlnaW5hbElkIGFzIHN0cmluZztcblxuICBjb25zdCBvcmlnaW5hbEFwaSA9IG5ldyBPcmlnaW5hbEFsYnVtQXBpKGFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uKCkpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcmlnaW5hbEFwaS5nZXRPcmlnaW5hbFRyYWNrKHtcbiAgICBpZDogb3JpZ2luYWxUcmFja0lkLFxuICB9KTtcblxuICBvcmlnaW5hbFRyYWNrSW5mb0NvbnRyb2xsZXIuc2V0U3VjY2VzcyhyZXN1bHQpO1xufTtcblxuY29uc3QgdXJsU3RhdGVEZWNvZGVyID0gY29tcHV0ZWQoKCk6IFRyYWNrTGlzdFZpZXdJbnB1dE1vZGVsID0+IHtcbiAgY29uc3QgcGFnZVBhcmFtID0gJHJvdXRlLnBhcmFtcy5wYWdlO1xuICBjb25zdCBwYWdlID0gcGFnZVBhcmFtID8gcGFyc2VJbnQocGFnZVBhcmFtIGFzIHN0cmluZykgOiAxO1xuXG4gIGNvbnN0IG9yaWdpbmFsVHJhY2tJZCA9ICRyb3V0ZS5wYXJhbXMub3JpZ2luYWxJZCBhcyBzdHJpbmc7XG5cbiAgY29uc3Qgc29ydEZpZWxkID0gJHJvdXRlLnF1ZXJ5LnNvcnRGaWVsZCBhcyBUcmFja09yZGVyT3B0aW9ucyB8fCBUcmFja09yZGVyT3B0aW9ucy5EYXRlO1xuICBjb25zdCBzb3J0T3JkZXIgPSAkcm91dGUucXVlcnkuc29ydE9yZGVyIGFzIFNvcnRPcmRlciB8fCBTb3J0T3JkZXIuRGVzY2VuZGluZztcblxuICByZXR1cm4ge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIG9yaWdpbmFsVHJhY2tzOiBbb3JpZ2luYWxUcmFja0lkXSxcbiAgICB9LFxuICAgIHBhZ2UsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgfVxufSk7XG5cbmNvbnN0IHVybFN0YXRlRW5jb2RlciA9IChzdGF0ZTogVHJhY2tMaXN0Vmlld0lucHV0TW9kZWwpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxJZCA9IHN0YXRlPy5maWx0ZXJzPy5vcmlnaW5hbFRyYWNrcyFbMF0gfHwgJyc7XG5cbiAgY29uc3QgcXVlcnkgPSB7XG4gICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgc29ydE9yZGVyOiBzdGF0ZS5zb3J0T3JkZXIsXG4gIH07XG5cbiAgJHJvdXRlci5wdXNoKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UudG9TdHJpbmcoKSxcbiAgICAgIG9yaWdpbmFsSWQsXG4gICAgfSxcbiAgICBxdWVyeSxcbiAgfSk7XG59O1xuXG5jb25zdCB0cmFja0xpc3RWaWV3Q29udHJvbGxlciA9IHVzZVRyYWNrTGlzdFZpZXdDb250cm9sbGVyKHtcbiAgaW5pdGlhbElucHV0U3RhdGU6IHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBvcmlnaW5hbFRyYWNrczogW10sXG4gICAgfSxcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRGaWVsZDogVHJhY2tPcmRlck9wdGlvbnMuRGF0ZSxcbiAgICBzb3J0T3JkZXI6IFNvcnRPcmRlci5EZXNjZW5kaW5nLFxuICB9LFxuICB1cmxTdGF0ZURlY29kZXIsXG4gIHVybFN0YXRlRW5jb2Rlcixcbn0pO1xuXG53YXRjaCgkcm91dGUsICgpID0+IHtcbiAgdHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIucmVsb2FkKCk7XG59KTtcblxuY29uc3QgcmFkaW9QbGF5ID0gKCkgPT4ge1xuICBjb25zdCBvcmlnaW5hbFRyYWNrSWQgPSAkcm91dGUucGFyYW1zLm9yaWdpbmFsSWQgYXMgc3RyaW5nO1xuXG4gIHJhZGlvU2VydmljZS5zZXRGaWx0ZXJzKHtcbiAgICBvcmlnaW5hbFRyYWNrczogW29yaWdpbmFsVHJhY2tJZF0sXG4gIH0pO1xuXG4gIHJhZGlvU2VydmljZS5hY3RpdmF0ZSgpO1xufTtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgX2xvYWRPcmlnaW5hbFRyYWNrSW5mbygpO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWRhcmsgLmNpcmNsZS1pbmZvLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWlCTyxNQUFNLG9CQUFvQjtBQUFBLEVBQzdCLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFDaEI7Ozs7Ozs7OztBQzBCQSxVQUFNLFFBQVE7QUFNZCxVQUFNLFlBQVksTUFBTTtBQUN0QixtQkFBYSxhQUFhLE1BQU0sTUFBTSxJQUFLLGFBQWEsZ0JBQWdCO0FBQUEsSUFBQTtBQUkxRSxVQUFNLG1CQUNKLElBQUksd0JBQXdCLE1BQU0sT0FBTyxNQUFNLE1BQU0sS0FBTSxFQUN4RCxvQkFDQSxzQkFDQSxtQkFBbUIsRUFDbkIsc0JBQ0EseUJBQUEsRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEwsVUFBTSxtQkFBbUI7QUFBQSxNQUN2QixFQUFFLE9BQU8sUUFBUSxPQUFPLGtCQUFrQixLQUFLO0FBQUEsTUFDL0MsRUFBRSxPQUFPLFFBQVEsT0FBTyxrQkFBa0IsTUFBTTtBQUFBLE1BQ2hELEVBQUUsT0FBTyxNQUFNLE9BQU8sa0JBQWtCLEdBQUc7QUFBQSxNQUMzQyxFQUFFLE9BQU8sWUFBWSxPQUFPLGtCQUFrQixTQUFTO0FBQUEsTUFDdkQsRUFBRSxPQUFPLFlBQVksT0FBTyxrQkFBa0IsUUFBUTtBQUFBLE1BQ3RELEVBQUUsT0FBTyxjQUFjLE9BQU8sa0JBQWtCLFdBQVc7QUFBQSxJQUFBO0FBRTdELFVBQU0sbUJBQW1CO0FBQUEsTUFDdkIsRUFB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
