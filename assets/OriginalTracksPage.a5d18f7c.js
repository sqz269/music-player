import { L as LoadableElement, Q as QSpinnerGears } from "./LoadableElement.600ff856.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.5e53dc66.js";
import { Q as QList } from "./QList.32c8fddc.js";
import { Q as QSelect, g as QMenu } from "./QSelect.5cc552e1.js";
import { E as defineComponent, l as withDirectives, G as openBlock, H as createBlock, I as withCtx, by as queueService, J as createVNode, W as createTextVNode, $ as toDisplayString, a5 as createCommentVNode, b7 as QAvatar, R as createBaseVNode, _ as _export_sfc, a0 as Ripple, U as createElementBlock, Y as renderList, X as Fragment, bm as useLoadableController, r as ref, w as watch, bz as TrackApi, bA as apiConfigurationProvider, S as useRouter, bi as useRoute, g as computed, o as onMounted, T as unref, bB as OriginalAlbumApi, O as QCard, K as QCardSection, V as QSeparator, N as QBtn, bC as radioService } from "./index.bb81baa4.js";
import { C as ClosePopup } from "./ClosePopup.45084690.js";
import { Q as QPagination, S as SortOrder } from "./QPagination.126216aa.js";
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
      queueService.addTrackById(props.track.id);
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QItem, {
        clickable: "",
        onClick: playTrack
      }, {
        default: withCtx(() => [
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
            createVNode(QMenu, {
              "context-menu": "",
              fit: ""
            }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Play Next")
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
                    ]),
                    withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Search On YouTube")
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
            }),
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
var OriginalTracksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c053cb96"], ["__file", "OriginalTracksPage.vue"]]);
export { OriginalTracksPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JpZ2luYWxUcmFja3NQYWdlLmE1ZDE4ZjdjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QvZXNtL21vZGVscy9UcmFja09yZGVyT3B0aW9ucy5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrSXRlbS9UcmFja0l0ZW0udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3LnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrTGlzdFZpZXcvVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvT3JpZ2luYWxUcmFja3NQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGxtY1BsYXllckJhY2tlbmRcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKlxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVHJhY2tPcmRlck9wdGlvbnMgPSB7XG4gICAgSWQ6ICdJZCcsXG4gICAgRGF0ZTogJ0RhdGUnLFxuICAgIFRpdGxlOiAnVGl0bGUnLFxuICAgIER1cmF0aW9uOiAnRHVyYXRpb24nLFxuICAgIEFsYnVtSWQ6ICdBbGJ1bUlkJyxcbiAgICBBbGJ1bVRpdGxlOiAnQWxidW1UaXRsZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gVHJhY2tPcmRlck9wdGlvbnNGcm9tSlNPTihqc29uKSB7XG4gICAgcmV0dXJuIFRyYWNrT3JkZXJPcHRpb25zRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVHJhY2tPcmRlck9wdGlvbnNGcm9tSlNPTlR5cGVkKGpzb24sIGlnbm9yZURpc2NyaW1pbmF0b3IpIHtcbiAgICByZXR1cm4ganNvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBUcmFja09yZGVyT3B0aW9uc1RvSlNPTih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbVxuICAgIHYtcmlwcGxlXG4gICAgY2xpY2thYmxlXG4gICAgQGNsaWNrPVwicGxheVRyYWNrXCJcbiAgPlxuICAgIDxxLWl0ZW0tc2VjdGlvblxuICAgICAgc2lkZVxuICAgICAgY2xhc3M9J2l0ZW1zLWNlbnRlcidcbiAgICAgIHYtaWY9XCJwcm9wcy5pbmRleFwiXG4gICAgICBzdHlsZT1cIndpZHRoOiAzcmVtO1wiXG4gICAgPlxuICAgICAgPHEtaXRlbS1sYWJlbD57eyBwcm9wcy5pbmRleCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLWF2YXRhclxuICAgICAgICByb3VuZGVkXG4gICAgICAgIHNpemU9XCI3MnB4XCJcbiAgICAgID5cbiAgICAgICAgPGltZyA6c3JjPVwicHJvcHMudHJhY2suYWxidW0/LnRodW1ibmFpbD8uc21hbGw/LnVybFwiIC8+XG4gICAgICA8L3EtYXZhdGFyPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgcHJvcHMudHJhY2submFtZT8uX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgIGNhcHRpb25cbiAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgIGNsYXNzPVwidGV4dC1ib2xkXCJcbiAgICAgICAgPnt7IHByb3BzLnRyYWNrLmFsYnVtPy5uYW1lPy5fZGVmYXVsdCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgbGluZXM9XCIxXCJcbiAgICAgID57eyBwcm9wcy50cmFjay5hbGJ1bT8uYWxidW1BcnRpc3Q/Lm1hcChjID0+IGMubmFtZSkuam9pbignLCAnKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IHF1ZXVlU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRyYWNrOiBUcmFja1JlYWREdG87XG59PigpO1xuXG4vLyBzZXJ2aWNlc1xuY29uc3QgcGxheVRyYWNrID0gKCkgPT4ge1xuICBxdWV1ZVNlcnZpY2UuYWRkVHJhY2tCeUlkKHByb3BzLnRyYWNrLmlkISk7XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxMb2FkYWJsZUVsZW1lbnQgOnN0YXRlLWNvbnRyb2xsZXI9XCJwcm9wcy5jb250cm9sbGVyLnZpZXdNb2RlbENvbnRyb2xsZXJcIj5cbiAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8cS1zcGlubmVyLWdlYXJzIC8+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgZGF0YSB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgganVzdGlmeS1iZXR3ZWVuIHEtcGEtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIGNvbC1zbS0yIGNvbC1sZy0yIGNvbC14bC0xXCI+XG4gICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlLnNvcnRGaWVsZFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNvcnRGaWVsZE9wdGlvbnNcIlxuICAgICAgICAgICAgbGFiZWw9XCJPcmRlciBCeVwiXG4gICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIGNvbC1zbS0yIGNvbC1sZy0yIGNvbC14bC0xXCI+XG4gICAgICAgICAgPHEtc2VsZWN0XG4gICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuY29udHJvbGxlci5pbnB1dE1vZGVsLnZhbHVlLnNvcnRPcmRlclwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInNvcnRPcmRlck9wdGlvbnNcIlxuICAgICAgICAgICAgbGFiZWw9XCJPcmRlclwiXG4gICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1tZCBqdXN0aWZ5LWV2ZW5seSBxLXB5LW1kIGNvbC14bC0xXCI+XG4gICAgICAgIDxxLWxpc3QgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8VHJhY2tJdGVtXG4gICAgICAgICAgICB2LWZvcj1cIih0cmFjaywgaW5kZXgpIGluIGRhdGEhLnRyYWNrc1wiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgOnRyYWNrPVwidHJhY2tcIlxuICAgICAgICAgICAgOmluZGV4PVwiaW5kZXggKyAxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInEtcGEtbGcgcS1tdC1sZyBmbGV4IGZsZXgtY2VudGVyXCJcbiAgICAgICAgc3R5bGU9XCJib3JkZXItdG9wOiAxcHggc29saWQgIzU0NTQ1NFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCBxLXBhLW1kXCI+XG4gICAgICAgICAgPHEtcGFnaW5hdGlvblxuICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEhLmN1cnJlbnRQYWdlXCJcbiAgICAgICAgICAgIDptYXg9XCJkYXRhIS50b3RhbFBhZ2VzXCJcbiAgICAgICAgICAgIG1heC1wYWdlcz1cIjEwXCJcbiAgICAgICAgICAgIGd1dHRlcj1cIjIwcHhcIlxuICAgICAgICAgICAgc2l6ZT1cIjE4cHhcIlxuICAgICAgICAgICAgZGlyZWN0aW9uLWxpbmtzXG4gICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwicHJvcHMuY29udHJvbGxlci5jaGFuZ2VQYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L3RlbXBsYXRlPlxuICA8L0xvYWRhYmxlRWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBTb3J0T3JkZXIsIFRyYWNrT3JkZXJPcHRpb25zIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIgfSBmcm9tICcuL1RyYWNrTGlzdFZpZXdDb250cm9sbGVyJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IFRyYWNrSXRlbSBmcm9tICcuLi9UcmFja0l0ZW0vVHJhY2tJdGVtLnZ1ZSc7XG5cbmNvbnN0IHNvcnRGaWVsZE9wdGlvbnMgPSBbXG4gIHsgbGFiZWw6ICdEYXRlJywgdmFsdWU6IFRyYWNrT3JkZXJPcHRpb25zLkRhdGUgfSxcbiAgeyBsYWJlbDogJ05hbWUnLCB2YWx1ZTogVHJhY2tPcmRlck9wdGlvbnMuVGl0bGUgfSxcbiAgeyBsYWJlbDogJ0lkJywgdmFsdWU6IFRyYWNrT3JkZXJPcHRpb25zLklkIH0sXG4gIHsgbGFiZWw6ICdEdXJhdGlvbicsIHZhbHVlOiBUcmFja09yZGVyT3B0aW9ucy5EdXJhdGlvbiB9LFxuICB7IGxhYmVsOiAnQWxidW0gSWQnLCB2YWx1ZTogVHJhY2tPcmRlck9wdGlvbnMuQWxidW1JZCB9LFxuICB7IGxhYmVsOiAnQWxidW0gTmFtZScsIHZhbHVlOiBUcmFja09yZGVyT3B0aW9ucy5BbGJ1bVRpdGxlIH0sXG5dO1xuY29uc3Qgc29ydE9yZGVyT3B0aW9ucyA9IFtcbiAgeyBsYWJlbDogJ0FzY2VuZGluZycsIHZhbHVlOiBTb3J0T3JkZXIuQXNjZW5kaW5nIH0sXG4gIHsgbGFiZWw6ICdEZXNjZW5kaW5nJywgdmFsdWU6IFNvcnRPcmRlci5EZXNjZW5kaW5nIH0sXG5dO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgY29udHJvbGxlcjogVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXI7XG59PigpO1xuXG5jb25zb2xlLmxvZyhwcm9wcy5jb250cm9sbGVyLmlucHV0TW9kZWwudmFsdWUpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj48L3N0eWxlPlxuIiwiaW1wb3J0IHsgR2V0VHJhY2tzRmlsdGVyZWRSZXF1ZXN0LCBTb3J0T3JkZXIsIFRyYWNrQXBpLCBUcmFja09yZGVyT3B0aW9ucyB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IExvYWRhYmxlU3RhdGUsIHVzZUxvYWRhYmxlQ29udHJvbGxlciB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29tcHV0ZWRSZWYsIHJlZiwgUmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCB9IGZyb20gJy4vbW9kZWxzL1RyYWNrTGlzdFZpZXdJbnB1dE1vZGUnO1xuaW1wb3J0IFRyYWNrTGlzdFZpZXdWaWV3TW9kZWwgZnJvbSAnLi9tb2RlbHMvVHJhY2tMaXN0Vmlld1ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBUcmFja1F1ZXJ5RmlsdGVycyB9IGZyb20gJ3NyYy9tb2RlbHMvVHJhY2tRdWVyeUZpbHRlcnMnO1xuaW1wb3J0IHsgYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIH0gZnJvbSAnc3JjL3NlcnZpY2VzL19zZXJ2aWNlcyc7XG5cbmV4cG9ydCB0eXBlIFRyYWNrTGlzdFZpZXdDb250cm9sbGVyID0ge1xuICB2aWV3TW9kZWxDb250cm9sbGVyOiBMb2FkYWJsZVN0YXRlPFRyYWNrTGlzdFZpZXdWaWV3TW9kZWw+O1xuICBpbnB1dE1vZGVsOiBSZWY8VHJhY2tMaXN0Vmlld0lucHV0TW9kZWw+O1xuXG4gIHVybFN0YXRlRGVjb2Rlcj86IENvbXB1dGVkUmVmPCgpID0+IFRyYWNrTGlzdFZpZXdJbnB1dE1vZGVsPjtcbiAgdXJsU3RhdGVFbmNvZGVyPzogKHN0YXRlOiBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCkgPT4gdm9pZDtcblxuICByZWxvYWQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGNoYW5nZUZpbHRlcjogKGZpbHRlcjogVHJhY2tRdWVyeUZpbHRlcnMpID0+IFByb21pc2U8dm9pZD47XG4gIGNoYW5nZVBhZ2U6IChwYWdlOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG4gIGNoYW5nZVNvcnRPcmRlcjogKHNvcnRPcmRlcjogU29ydE9yZGVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VTb3J0RmllbGQ6IChzb3J0RmllbGQ6IFRyYWNrT3JkZXJPcHRpb25zKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja0xpc3RWaWV3Q29udHJvbGxlclBhcmFtcyB7XG4gIGluaXRpYWxJbnB1dFN0YXRlOiBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbDtcbiAgdXJsU3RhdGVEZWNvZGVyOiBDb21wdXRlZFJlZjxUcmFja0xpc3RWaWV3SW5wdXRNb2RlbD47XG4gIHVybFN0YXRlRW5jb2RlcjogKHN0YXRlOiBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIoXG4gIHBhcmFtZXRlcjogVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXJQYXJhbXNcbik6IFRyYWNrTGlzdFZpZXdDb250cm9sbGVyIHtcbiAgY29uc3Qgdmlld01vZGVsQ29udHJvbGxlciA9XG4gICAgdXNlTG9hZGFibGVDb250cm9sbGVyPFRyYWNrTGlzdFZpZXdWaWV3TW9kZWw+KCk7XG4gIGNvbnN0IGlucHV0TW9kZWwgPSByZWYocGFyYW1ldGVyLmluaXRpYWxJbnB1dFN0YXRlKTtcblxuICBjb25zdCBfY29uc3RydWN0QXBpQXJndW1lbnQgPSAoc3RhdGU6IFRyYWNrTGlzdFZpZXdJbnB1dE1vZGVsKTogR2V0VHJhY2tzRmlsdGVyZWRSZXF1ZXN0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVsZWFzZURhdGVCZWdpbjogc3RhdGU/LmZpbHRlcnM/LnJlbGVhc2VEYXRlQmVnaW4gfHwgdW5kZWZpbmVkLFxuICAgICAgcmVsZWFzZURhdGVFbmQ6IHN0YXRlPy5maWx0ZXJzPy5yZWxlYXNlRGF0ZUVuZCB8fCB1bmRlZmluZWQsXG4gICAgICBjaXJjbGVJZHM6IHN0YXRlPy5maWx0ZXJzPy5jaXJjbGVzIHx8IHVuZGVmaW5lZCxcbiAgICAgIG9yaWdpbmFsQWxidW1JZHM6IHN0YXRlPy5maWx0ZXJzPy5vcmlnaW5hbEFsYnVtcyB8fCB1bmRlZmluZWQsXG4gICAgICBvcmlnaW5hbFRyYWNrSWRzOiBzdGF0ZT8uZmlsdGVycz8ub3JpZ2luYWxUcmFja3MgfHwgdW5kZWZpbmVkLFxuICAgICAgc3RhcnQ6IChzdGF0ZS5wYWdlIC0gMSkgKiA1MCxcbiAgICAgIGxpbWl0OiA1MCxcbiAgICAgIHNvcnQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBfbG9hZCA9IGFzeW5jICgpOiBQcm9taXNlPFRyYWNrTGlzdFZpZXdWaWV3TW9kZWw+ID0+IHtcbiAgICBjb25zdCB0cmFja0FwaSA9IG5ldyBUcmFja0FwaShhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbigpKTtcblxuICAgIGNvbnN0IGFyZ3MgPSBfY29uc3RydWN0QXBpQXJndW1lbnQoaW5wdXRNb2RlbC52YWx1ZSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHRyYWNrQXBpLmdldFRyYWNrc0ZpbHRlcmVkKGFyZ3MpO1xuXG4gICAgY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKTtcblxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwocmVzdWx0cy50b3RhbCEgLyA1MCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJhY2tzOiByZXN1bHRzLnRyYWNrcyEsXG4gICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxuICAgICAgY3VycmVudFBhZ2U6IGlucHV0TW9kZWwudmFsdWUucGFnZSxcbiAgICAgIHNvcnRPcmRlcjogaW5wdXRNb2RlbC52YWx1ZS5zb3J0T3JkZXIsXG4gICAgICBzb3J0RmllbGQ6IGlucHV0TW9kZWwudmFsdWUuc29ydEZpZWxkLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIGxvYWQgY2FsbCcpO1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIuc2V0TG9hZGluZygpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2aWV3TW9kZWwgPSBhd2FpdCBfbG9hZCgpO1xuICAgICAgY29uc29sZS5sb2coJ3ZpZXdNb2RlbCcsIHZpZXdNb2RlbCk7XG4gICAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldFN1Y2Nlc3Modmlld01vZGVsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2aWV3TW9kZWxDb250cm9sbGVyLnNldEVycm9yKGUgYXMgRXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIHBhZ2UsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTb3J0T3JkZXIgPSBhc3luYyAoc29ydE9yZGVyOiBTb3J0T3JkZXIpID0+IHtcbiAgICBpbnB1dE1vZGVsLnZhbHVlID0ge1xuICAgICAgLi4uaW5wdXRNb2RlbC52YWx1ZSxcbiAgICAgIHNvcnRPcmRlcixcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNvcnRGaWVsZCA9IGFzeW5jIChzb3J0RmllbGQ6IFRyYWNrT3JkZXJPcHRpb25zKSA9PiB7XG4gICAgaW5wdXRNb2RlbC52YWx1ZSA9IHtcbiAgICAgIC4uLmlucHV0TW9kZWwudmFsdWUsXG4gICAgICBzb3J0RmllbGQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VGaWx0ZXIgPSBhc3luYyAoZmlsdGVyOiBUcmFja1F1ZXJ5RmlsdGVycykgPT4ge1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSB7XG4gICAgICAuLi5pbnB1dE1vZGVsLnZhbHVlLFxuICAgICAgZmlsdGVyczogZmlsdGVyLFxuICAgIH07XG4gIH1cblxuICB3YXRjaChcbiAgICBpbnB1dE1vZGVsLFxuICAgIGFzeW5jIChuZXdJbnB1dE1vZGVsLCBvbGRJbnB1dE1vZGVsKSA9PiB7XG4gICAgICBjb25zb2xlLmRpcih7IG5ld0lucHV0TW9kZWwsIG9sZElucHV0TW9kZWwgfSk7XG4gICAgICBwYXJhbWV0ZXIudXJsU3RhdGVFbmNvZGVyPy4obmV3SW5wdXRNb2RlbCk7XG4gICAgICBhd2FpdCBsb2FkKCk7XG4gICAgfSxcbiAgICB7XG4gICAgICBkZWVwOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICAvLyBGaXJzdCBsb2FkLCBpZiB1cmxTdGF0ZURlY29kZXIgaXMgbm90IHByb3ZpZGVkLFxuICAvLyB0aGVuIGxvYWQgdGhlIGluaXRpYWwgc3RhdGUsIG90aGVyd2lzZSwgbG9hZCB0aGUgc3RhdGUgZnJvbSB0aGUgdXJsU3RhdGVEZWNvZGVyXG4gIGlmIChwYXJhbWV0ZXIudXJsU3RhdGVEZWNvZGVyKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRyb2xsZXIgTG9hZGluZyBkdWUgdG8gdXJsU3RhdGVEZWNvZGVyIGNoYW5nZScpO1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSBwYXJhbWV0ZXIudXJsU3RhdGVEZWNvZGVyLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyIExvYWRpbmcgZHVlIHRvIG9uTW91bnRlZCcpO1xuICAgIGlucHV0TW9kZWwudmFsdWUgPSBwYXJhbWV0ZXIuaW5pdGlhbElucHV0U3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZpZXdNb2RlbENvbnRyb2xsZXIsXG4gICAgaW5wdXRNb2RlbCxcbiAgICByZWxvYWQ6IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGxvYWQoKTtcbiAgICB9LFxuICAgIGNoYW5nZUZpbHRlcixcbiAgICBjaGFuZ2VQYWdlLFxuICAgIGNoYW5nZVNvcnRPcmRlcixcbiAgICBjaGFuZ2VTb3J0RmllbGRcbiAgfTtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cIm9yaWdpbmFsVHJhY2tJbmZvQ29udHJvbGxlclwiPlxuICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgIDxxLXNwaW5uZXItZ2VhcnMgLz5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBkYXRhIH1cIj5cbiAgICAgIDxxLW1lbnVcbiAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgIGZpdFxuICAgICAgPlxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5QbGF5IE5leHQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BZGQgdG8gUXVldWU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5Db3B5IFRyYWNrIFVybDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgTWV0YWRhdGE8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5TZWFyY2ggT24gWW91VHViZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLW1lbnU+XG4gICAgICA8cS1jYXJkIGNsYXNzPVwicS1tYS1tZCBjaXJjbGUtaW5mby1jYXJkXCI+XG4gICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlxuICAgICAgICAgICAge3sgZGF0YT8udGl0bGU/LmVuIH19XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgIEFsYnVtOiB7eyBkYXRhPy5hbGJ1bT8uZnVsbE5hbWU/LmVuIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU3RhcnQgUmFkaW9cIlxuICAgICAgICAgICAgQGNsaWNrPVwicmFkaW9QbGF5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDwvcS1jYXJkPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvTG9hZGFibGVFbGVtZW50PlxuXG4gIDxUcmFja0xpc3RWaWV3IDpjb250cm9sbGVyPVwidHJhY2tMaXN0Vmlld0NvbnRyb2xsZXJcIj48L1RyYWNrTGlzdFZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgT3JpZ2luYWxBbGJ1bUFwaSwgT3JpZ2luYWxUcmFja1JlYWREdG8sIFNvcnRPcmRlciwgVHJhY2tPcmRlck9wdGlvbnMgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBUcmFja0xpc3RWaWV3SW5wdXRNb2RlbCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL1RyYWNrTGlzdFZpZXcvbW9kZWxzL1RyYWNrTGlzdFZpZXdJbnB1dE1vZGUnO1xuaW1wb3J0IFRyYWNrTGlzdFZpZXcgZnJvbSAnc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3LnZ1ZSc7XG5pbXBvcnQgdXNlVHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvVHJhY2tMaXN0Vmlldy9UcmFja0xpc3RWaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIsIHJhZGlvU2VydmljZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9fc2VydmljZXMnO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlLCB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcblxuLy8gSW5qZWN0ZWQgc2VydmljZXNcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0ICRyb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IG9yaWdpbmFsVHJhY2tJbmZvQ29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxPcmlnaW5hbFRyYWNrUmVhZER0bz4oKTtcblxuY29uc3QgX2xvYWRPcmlnaW5hbFRyYWNrSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgb3JpZ2luYWxUcmFja0luZm9Db250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgY29uc3Qgb3JpZ2luYWxUcmFja0lkID0gJHJvdXRlLnBhcmFtcy5vcmlnaW5hbElkIGFzIHN0cmluZztcblxuICBjb25zdCBvcmlnaW5hbEFwaSA9IG5ldyBPcmlnaW5hbEFsYnVtQXBpKGFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uKCkpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcmlnaW5hbEFwaS5nZXRPcmlnaW5hbFRyYWNrKHtcbiAgICBpZDogb3JpZ2luYWxUcmFja0lkLFxuICB9KTtcblxuICBvcmlnaW5hbFRyYWNrSW5mb0NvbnRyb2xsZXIuc2V0U3VjY2VzcyhyZXN1bHQpO1xufTtcblxuY29uc3QgdXJsU3RhdGVEZWNvZGVyID0gY29tcHV0ZWQoKCk6IFRyYWNrTGlzdFZpZXdJbnB1dE1vZGVsID0+IHtcbiAgY29uc3QgcGFnZVBhcmFtID0gJHJvdXRlLnBhcmFtcy5wYWdlO1xuICBjb25zdCBwYWdlID0gcGFnZVBhcmFtID8gcGFyc2VJbnQocGFnZVBhcmFtIGFzIHN0cmluZykgOiAxO1xuXG4gIGNvbnN0IG9yaWdpbmFsVHJhY2tJZCA9ICRyb3V0ZS5wYXJhbXMub3JpZ2luYWxJZCBhcyBzdHJpbmc7XG5cbiAgY29uc3Qgc29ydEZpZWxkID0gJHJvdXRlLnF1ZXJ5LnNvcnRGaWVsZCBhcyBUcmFja09yZGVyT3B0aW9ucyB8fCBUcmFja09yZGVyT3B0aW9ucy5EYXRlO1xuICBjb25zdCBzb3J0T3JkZXIgPSAkcm91dGUucXVlcnkuc29ydE9yZGVyIGFzIFNvcnRPcmRlciB8fCBTb3J0T3JkZXIuRGVzY2VuZGluZztcblxuICByZXR1cm4ge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIG9yaWdpbmFsVHJhY2tzOiBbb3JpZ2luYWxUcmFja0lkXSxcbiAgICB9LFxuICAgIHBhZ2UsXG4gICAgc29ydEZpZWxkLFxuICAgIHNvcnRPcmRlcixcbiAgfVxufSk7XG5cbmNvbnN0IHVybFN0YXRlRW5jb2RlciA9IChzdGF0ZTogVHJhY2tMaXN0Vmlld0lucHV0TW9kZWwpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxJZCA9IHN0YXRlPy5maWx0ZXJzPy5vcmlnaW5hbFRyYWNrcyFbMF0gfHwgJyc7XG5cbiAgY29uc3QgcXVlcnkgPSB7XG4gICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgc29ydE9yZGVyOiBzdGF0ZS5zb3J0T3JkZXIsXG4gIH07XG5cbiAgJHJvdXRlci5wdXNoKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHBhZ2U6IHN0YXRlLnBhZ2UudG9TdHJpbmcoKSxcbiAgICAgIG9yaWdpbmFsSWQsXG4gICAgfSxcbiAgICBxdWVyeSxcbiAgfSk7XG59O1xuXG5jb25zdCB0cmFja0xpc3RWaWV3Q29udHJvbGxlciA9IHVzZVRyYWNrTGlzdFZpZXdDb250cm9sbGVyKHtcbiAgaW5pdGlhbElucHV0U3RhdGU6IHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBvcmlnaW5hbFRyYWNrczogW10sXG4gICAgfSxcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRGaWVsZDogVHJhY2tPcmRlck9wdGlvbnMuRGF0ZSxcbiAgICBzb3J0T3JkZXI6IFNvcnRPcmRlci5EZXNjZW5kaW5nLFxuICB9LFxuICB1cmxTdGF0ZURlY29kZXIsXG4gIHVybFN0YXRlRW5jb2Rlcixcbn0pO1xuXG53YXRjaCgkcm91dGUsICgpID0+IHtcbiAgdHJhY2tMaXN0Vmlld0NvbnRyb2xsZXIucmVsb2FkKCk7XG59KTtcblxuY29uc3QgcmFkaW9QbGF5ID0gKCkgPT4ge1xuICBjb25zdCBvcmlnaW5hbFRyYWNrSWQgPSAkcm91dGUucGFyYW1zLm9yaWdpbmFsSWQgYXMgc3RyaW5nO1xuXG4gIHJhZGlvU2VydmljZS5zZXRGaWx0ZXJzKHtcbiAgICBvcmlnaW5hbFRyYWNrczogW29yaWdpbmFsVHJhY2tJZF0sXG4gIH0pO1xuXG4gIHJhZGlvU2VydmljZS5hY3RpdmF0ZSgpO1xufTtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgX2xvYWRPcmlnaW5hbFRyYWNrSW5mbygpO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWRhcmsgLmNpcmNsZS1pbmZvLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWlCTyxNQUFNLG9CQUFvQjtBQUFBLEVBQzdCLElBQUk7QUFBQSxFQUNKLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFlBQVk7QUFDaEI7Ozs7Ozs7OztBQ29CQSxVQUFNLFFBQVE7QUFNZCxVQUFNLFlBQVksTUFBTTtBQUNULG1CQUFBLGFBQWEsTUFBTSxNQUFNLEVBQUc7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2MzQyxVQUFNLG1CQUFtQjtBQUFBLE1BQ3ZCLEVBQUUsT0FBTyxRQUFRLE9BQU8sa0JBQWtCLEtBQUs7QUFBQSxNQUMvQyxFQUFFLE9BQU8sUUFBUSxPQUFPLGtCQUFrQixNQUFNO0FBQUEsTUFDaEQsRUFBRSxPQUFPLE1BQU0sT0FBTyxrQkFBa0IsR0FBRztBQUFBLE1BQzNDLEVBQUUsT0FBTyxZQUFZLE9BQU8sa0JBQWtCLFNBQVM7QUFBQSxNQUN2RCxFQUFFLE9BQU8sWUFB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
