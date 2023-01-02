import { Q as QImg } from "./QImg.f4e44421.js";
import { a3 as _export_sfc, a4 as defineComponent, aM as useRouter, r as ref, aI as ApiConfigProvider, bc as AlbumApi, a5 as QueueController, c as computed, o as onMounted, bd as onUpdated, a7 as openBlock, a8 as createBlock, a9 as withCtx, an as createElementBlock, ab as createBaseVNode, d as createVNode, a6 as unref, ac as toDisplayString, av as QSeparator, ag as createCommentVNode, ae as QBtn, U as withDirectives, aA as QAvatar, F as Fragment, aC as renderList, ao as createTextVNode } from "./index.bfbdb738.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, v as outlinedDescription, w as outlinedTipsAndUpdates, x as outlinedMoreHoriz } from "./index.79c53e66.js";
import { m as sumDurations, g as QMenu, e as QList, a as QItem, Q as QItemSection, f as formatDuration } from "./QMenu.babff4f4.js";
import { Q as QTable, a as QTh } from "./QTable.41a3f204.js";
import { Q as QTr, a as QTd } from "./QTd.569ca842.js";
import { Q as QPage } from "./QPage.0eafd9a5.js";
import { u as useQuasar, C as ClosePopup } from "./ClosePopup.92bbd29c.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.5acf1885.js";
const _hoisted_1 = {
  key: 0,
  class: "row full-width q-px-none q-pt-lg"
};
const _hoisted_2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3 = { class: "col-8" };
const _hoisted_4 = { class: "row full-width full-height items-end" };
const _hoisted_5 = { class: "col-12" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body1" }, "Album", -1);
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = { class: "text-subtitle1 text-bold" };
const _hoisted_11 = {
  key: 0,
  class: "text-subtitle1"
};
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "text-subtitle1" };
const _hoisted_14 = { class: "page-section-blur col-all q-mt-lg row" };
const _hoisted_15 = { class: "col-12 q-pt-md" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Save");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("View Full Metadata");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Suggest an Edit");
const _hoisted_20 = { class: "col-12 q-pt-md q-px-md" };
const _hoisted_21 = { class: "flex row items-center text-subtitle1 text-bold" };
const _hoisted_22 = /* @__PURE__ */ createTextVNode("Play Next");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Add to Queue");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Add to Playlist");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("View Metadata");
const __default__ = defineComponent({
  name: "AlbumPage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const q = useQuasar();
    const { setColors } = usePageContainerBgStyleStore();
    const hoveringWhich = ref();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const albumApi = new AlbumApi(apiConfig);
    const albumInfo = ref();
    const trackList = ref();
    const songQueue = QueueController.getInstance();
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
    });
    function viewMetadata() {
      var _a;
      router.push({ name: "albumMetadata", params: { albumId: (_a = albumInfo.value) == null ? void 0 : _a.id } });
    }
    function playAlbum() {
      var _a, _b, _c;
      (_a = trackList.value) == null ? void 0 : _a.sort((e1, e2) => {
        return e2.index - e1.index;
      });
      console.log(trackList.value);
      q.notify({
        position: "top",
        type: "secondary",
        message: `Added ${(_b = trackList.value) == null ? void 0 : _b.length} tracks to Queue`
      });
      const toadd = (_c = trackList.value) == null ? void 0 : _c.map((e) => e == null ? void 0 : e.id).reverse();
      console.log(toadd);
      songQueue.addTrackToQueueByIdBatch(toadd, true, true);
    }
    async function playTrack(trackId, addToFront = true, playImmediately = true) {
      let trackToPlay = null;
      if (!trackList.value) {
        alert("Empty Tracklist");
        return;
      }
      for (let track of trackList.value) {
        if (track.id == trackId) {
          trackToPlay = track;
          break;
        }
      }
      if (trackToPlay === null) {
        console.log("Invalid Index. No Index: " + trackId + ". in track list.");
        return;
      }
      await songQueue.addTrackToQueueById(trackToPlay.id, addToFront, playImmediately);
      q.notify({
        position: "top",
        type: "secondary",
        message: "Added to Queue"
      });
    }
    async function fetchAlbum(albumId) {
      return albumApi.getAlbum({ id: albumId });
    }
    async function setAlbumPage() {
      var _a, _b, _c, _d, _e;
      albumInfo.value = await fetchAlbum(router.currentRoute.value.params.albumId);
      if ((_a = albumInfo.value) == null ? void 0 : _a.tracks) {
        (_b = albumInfo.value) == null ? void 0 : _b.tracks.sort((ta, tb) => {
          return ta.index - tb.index;
        });
        trackList.value = (_c = albumInfo.value) == null ? void 0 : _c.tracks;
      }
      setColors((_e = (_d = albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.colors);
    }
    onMounted(async () => {
      await setAlbumPage();
    });
    onUpdated(async () => {
      await setAlbumPage();
    });
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
        format: (val) => val.map((e) => {
          var _a;
          return (_a = e.title) == null ? void 0 : _a._default;
        }).join(" \u2502 "),
        classes: "text-bold",
        sortable: false
      },
      {
        name: "duration",
        required: true,
        label: "DURATION",
        align: "right",
        field: (row) => row.duration,
        format: (val) => `${formatDuration(val)}`,
        classes: "text-grey-4",
        sortable: false
      }
    ];
    let totalDuration = computed(() => {
      var _a, _b;
      let allDurations = [];
      (_b = (_a = albumInfo.value) == null ? void 0 : _a.tracks) == null ? void 0 : _b.forEach((t) => {
        if (t.duration)
          allDurations.push(t.duration);
      });
      return sumDurations(allDurations);
    });
    const pagination = {
      rowsPerPage: 0,
      descending: true
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => {
          var _a;
          return [
            albumInfo.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QImg, {
                  src: unref(getAlbumImage),
                  ratio: "1"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _hoisted_6,
                    createBaseVNode("h3", _hoisted_7, toDisplayString(albumInfo.value.albumName._default), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, toDisplayString(albumInfo.value.albumArtist[0].name), 1),
                      albumInfo.value.releaseDate ? (openBlock(), createBlock(QSeparator, {
                        key: 0,
                        vertical: "",
                        spaced: ""
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", null, [
                        albumInfo.value.releaseDate ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString((_a = albumInfo.value.releaseDate) == null ? void 0 : _a.toLocaleDateString()), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_12, toDisplayString(albumInfo.value.tracks.length) + " Tracks", 1),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_13, toDisplayString(unref(totalDuration)), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(QBtn, {
                    fab: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedPlayArrow),
                    color: "black",
                    "text-color": "white",
                    onClick: playAlbum
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_16
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
                    icon: unref(outlinedStarBorder)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_17
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
                                class: "bg-dark",
                                onClick: viewMetadata
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, { icon: unref(outlinedDescription) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_18
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
                                class: "bg-dark"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, { icon: unref(outlinedTipsAndUpdates) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_19
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
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"])
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(QTable, {
                    rows: trackList.value,
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
                    header: withCtx((props) => [
                      createVNode(QTr, { props }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(props.cols, (col) => {
                            return openBlock(), createBlock(QTh, {
                              key: col.name,
                              props,
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
                    "body-cell-index": withCtx((props) => [
                      createVNode(QTd, {
                        props,
                        class: "q-pa-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            flat: "",
                            round: "",
                            class: "text-grey-5",
                            size: "13px",
                            onMouseover: ($event) => hoveringWhich.value = props.key,
                            onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                            onClick: ($event) => playTrack(props.key),
                            label: hoveringWhich.value !== props.key ? props.value : void 0,
                            icon: hoveringWhich.value === props.key ? unref(outlinedPlayArrow) : void 0
                          }, null, 8, ["onMouseover", "onClick", "label", "icon"])
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-title": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_21, toDisplayString(props.value), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.value), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(QMenu, {
                        class: "bg-black border border-white",
                        "touch-position": "",
                        "context-menu": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "min-width": "150px" } }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: ($event) => playTrack(props.key, true, false)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_22
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: ($event) => playTrack(props.key, false, false)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_23
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_24
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
                                      _hoisted_25
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
                    _: 1
                  }, 8, ["rows"])
                ])
              ])
            ])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjIxYjg4NDQxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9keTFcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0ubmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkIHYtaWY9XCJhbGJ1bUluZm8ucmVsZWFzZURhdGVcIj48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiIHYtaWY9XCJhbGJ1bUluZm8ucmVsZWFzZURhdGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5yZWxlYXNlRGF0ZT8udG9Mb2NhbGVEYXRlU3RyaW5nKCkgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBhbGJ1bUluZm8udHJhY2tzLmxlbmd0aCB9fSBUcmFja3M8L2Rpdj5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyB0b3RhbER1cmF0aW9uIH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utc2VjdGlvbi1ibHVyIGNvbC1hbGwgcS1tdC1sZyByb3dcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgICA8cS1idG4gZmFiIGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRQbGF5QXJyb3dcIiBjb2xvcj1cImJsYWNrXCIgdGV4dC1jb2xvcj1cIndoaXRlXCIgQGNsaWNrPVwicGxheUFsYnVtXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPlBsYXk8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRTdGFyQm9yZGVyXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRNb3JlSG9yaXpcIj5cbiAgICAgICAgICAgIDxxLW1lbnUgZml0IGFuY2hvcj1cImNlbnRlciBtaWRkbGVcIiBzZWxmPVwidG9wIG1pZGRsZVwiPlxuICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgY2xhc3M9XCJiZy1kYXJrXCIgQGNsaWNrPVwidmlld01ldGFkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249XCJvdXRsaW5lZERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBGdWxsIE1ldGFkYXRhPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWRUaXBzQW5kVXBkYXRlc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlN1Z2dlc3QgYW4gRWRpdDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZCBxLXB4LW1kXCI+XG4gICAgICAgICAgPHEtdGFibGUgOnJvd3M9XCJ0cmFja0xpc3RcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICAgIHZpcnR1YWwtc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgaGlkZS1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgIDxxLXRoIHYtZm9yPVwiY29sIGluIHByb3BzLmNvbHNcIiA6a2V5PVwiY29sLm5hbWVcIiA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBib3JkZXItYm90dG9tLXRoaW5cIj5cbiAgICAgICAgICAgICAgICAgIHt7IGNvbC5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvcS10aD5cbiAgICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaW5kZXg9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiIGNsYXNzPVwicS1wYS1zbVwiPlxuICAgICAgICAgICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJob3ZlcmluZ1doaWNoID0gcHJvcHMua2V5XCIgQG1vdXNlbGVhdmU9XCJob3ZlcmluZ1doaWNoID0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheVRyYWNrKHByb3BzLmtleSlcIlxuICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy5rZXkgPyBwcm9wcy52YWx1ZSA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMua2V5ID8gb3V0bGluZWRQbGF5QXJyb3cgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC10aXRsZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcm93IGl0ZW1zLWNlbnRlciB0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICB7e3Byb3BzLnZhbHVlfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcblxuICAgICAgICAgICAgICAgIHRvdWNoLXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxNTBweDtcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5VHJhY2socHJvcHMua2V5LCB0cnVlLCBmYWxzZSlcIj5QbGF5IE5leHQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gQGNsaWNrPVwicGxheVRyYWNrKHByb3BzLmtleSwgZmFsc2UsIGZhbHNlKVwiPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BZGQgdG8gUGxheWxpc3Q8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZE1vcmVIb3JpeixcbiAgb3V0bGluZWRTdGFyQm9yZGVyLFxuICBvdXRsaW5lZERlc2NyaXB0aW9uLFxuICBvdXRsaW5lZFRpcHNBbmRVcGRhdGVzXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHtjb21wdXRlZCwgb25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7QWxidW1BcGksIE9yaWdpbmFsVHJhY2tSZWFkRHRvfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvIH0gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uLCBzdW1EdXJhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSBcInN0b3Jlcy9wYWdlQ29udGFpbmVyQmdcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tIFwic3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlclwiO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGhvdmVyaW5nV2hpY2ggPSByZWY8bnVtYmVyPigpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IGFsYnVtSW5mbyA9IHJlZjxBbGJ1bVJlYWREdG8+KCk7XG5jb25zdCB0cmFja0xpc3QgPSByZWY8VHJhY2tSZWFkRHRvW10+KCk7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybCA9PT0gbnVsbCA/XG4gICAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MCcgOiBhbGJ1bUluZm8/LnZhbHVlPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsXG59KVxuXG5mdW5jdGlvbiB2aWV3TWV0YWRhdGEoKSB7XG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ2FsYnVtTWV0YWRhdGEnLCBwYXJhbXM6IHsgYWxidW1JZDogYWxidW1JbmZvLnZhbHVlPy5pZCB9IH0pXG59XG5cbmZ1bmN0aW9uIHBsYXlBbGJ1bSgpIHtcbiAgdHJhY2tMaXN0LnZhbHVlPy5zb3J0KChlMSwgZTIpID0+IHtcbiAgICByZXR1cm4gPG51bWJlcj5lMi5pbmRleCAtIDxudW1iZXI+ZTEuaW5kZXg7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHRyYWNrTGlzdC52YWx1ZSlcblxuICBxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBBZGRlZCAke3RyYWNrTGlzdC52YWx1ZT8ubGVuZ3RofSB0cmFja3MgdG8gUXVldWVgXG4gIH0pXG5cbiAgY29uc3QgdG9hZGQgPSA8c3RyaW5nW10+dHJhY2tMaXN0LnZhbHVlPy5tYXAoZSA9PiBlPy5pZCkucmV2ZXJzZSgpO1xuICBjb25zb2xlLmxvZyh0b2FkZCk7XG4gIHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkQmF0Y2godG9hZGQsIHRydWUsIHRydWUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwbGF5VHJhY2sodHJhY2tJZDogc3RyaW5nLCBhZGRUb0Zyb250PXRydWUsIHBsYXlJbW1lZGlhdGVseT10cnVlKSB7XG4gIGxldCB0cmFja1RvUGxheSA9IG51bGw7XG4gIGlmICghdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgYWxlcnQoJ0VtcHR5IFRyYWNrbGlzdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IHRyYWNrIG9mIHRyYWNrTGlzdC52YWx1ZSkge1xuICAgIGlmICh0cmFjay5pZCA9PSB0cmFja0lkKSB7XG4gICAgICB0cmFja1RvUGxheSA9IHRyYWNrO1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhY2tUb1BsYXkgPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZygnSW52YWxpZCBJbmRleC4gTm8gSW5kZXg6ICcgKyB0cmFja0lkICsgJy4gaW4gdHJhY2sgbGlzdC4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhd2FpdCBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZCg8c3RyaW5nPiB0cmFja1RvUGxheS5pZCwgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiAnQWRkZWQgdG8gUXVldWUnXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsYnVtKGFsYnVtSWQ6IHN0cmluZyk6IFByb21pc2U8QWxidW1SZWFkRHRvPiB7XG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xuICBhbGJ1bUluZm8udmFsdWUgPSBhd2FpdCBmZXRjaEFsYnVtKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCk7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIHRyYWNrTGlzdC52YWx1ZSA9IGFsYnVtSW5mby52YWx1ZT8udHJhY2tzO1xuICB9XG4gIHNldENvbG9ycyg8c3RyaW5nW10+YWxidW1JbmZvLnZhbHVlPy50aHVtYm5haWw/LmNvbG9ycyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5uYW1lPy5fZGVmYXVsdCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtaDQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uX2RlZmF1bHQpLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWdyZXktNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxubGV0IHRvdGFsRHVyYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gIGxldCBhbGxEdXJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgYWxidW1JbmZvLnZhbHVlPy50cmFja3M/LmZvckVhY2godCA9PiB7XG4gICAgaWYgKHQuZHVyYXRpb24pIGFsbER1cmF0aW9ucy5wdXNoKHQuZHVyYXRpb24pXG4gIH0pO1xuICByZXR1cm4gc3VtRHVyYXRpb25zKGFsbER1cmF0aW9ucyk7XG59KVxuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVyUGFnZTogMCxcbiAgZGVzY2VuZGluZzogdHJ1ZVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9KQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUFzQkQsVUFBTSxTQUFTO0FBQ2YsVUFBTSxJQUFJO0FBQ0osVUFBQSxFQUFFLGNBQWM7QUFFdEIsVUFBTSxnQkFBZ0I7QUFFdEIsVUFBTSxZQUFZLGtCQUFrQixZQUFZLEVBQUUsYUFBYTtBQUN6RCxVQUFBLFdBQVcsSUFBSSxTQUFTLFNBQVM7QUFDdkMsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sWUFBWTtBQUVaLFVB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
