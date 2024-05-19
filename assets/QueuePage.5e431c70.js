import { Q as QItem, b as QItemLabel, a as QItemSection } from "./QItem.d604c2d0.js";
import { _ as _export_sfc, F as defineComponent, i as inject, a as computed, a2 as TrackInfo, G as openBlock, H as createBlock, I as withCtx, T as unref, U as createElementBlock, Y as renderList, J as createVNode, W as createTextVNode, $ as toDisplayString, b5 as QAvatar, R as createBaseVNode, X as Fragment, a3 as createCommentVNode } from "./index.9878d999.js";
import { Q as QList } from "./QList.2a6aabe0.js";
import { Q as QPage } from "./QPage.b4c01d76.js";
const _hoisted_1 = ["src"];
const _sfc_main = defineComponent({
  __name: "QueuePage",
  setup(__props) {
    const queueService = inject("queueService");
    const transformedQueueItems = computed(() => {
      return queueService.queue.value.map((queueItem) => {
        return {
          id: queueItem.id,
          track: TrackInfo.fromTrackReadDto(queueItem.track)
        };
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          unref(queueService) ? (openBlock(), createBlock(QList, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(transformedQueueItems.value, (queueItem, index) => {
                return openBlock(), createBlock(QItem, {
                  clickable: "",
                  key: queueItem.id,
                  active: unref(queueService).currentIndex.value === index,
                  onClick: ($event) => {
                    var _a;
                    return (_a = unref(queueService)) == null ? void 0 : _a.skipTo(index);
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, { side: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(index + 1), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, { avatar: "" }, {
                      default: withCtx(() => [
                        createVNode(QAvatar, {
                          rounded: "",
                          size: "58px"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createBaseVNode("img", {
                                src: (_a = queueItem.track.thumbnails) == null ? void 0 : _a.small
                              }, null, 8, _hoisted_1)
                            ];
                          }),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, { class: "text-subtitle1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(queueItem.track.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemLabel, {
                          caption: "",
                          lines: "1",
                          class: "text-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(queueItem.track.albumName), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemLabel, {
                          caption: "",
                          lines: "1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(queueItem.track.circle.map((c) => c.name).join(", ")), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["active", "onClick"]);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var QueuePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "QueuePage.vue"]]);
export { QueuePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVQYWdlLjVlNDMxYzcwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUXVldWVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPHEtbGlzdCB2LWlmPVwicXVldWVTZXJ2aWNlXCI+XG4gICAgICA8cS1pdGVtXG4gICAgICAgIGNsaWNrYWJsZVxuICAgICAgICB2LWZvcj1cIihxdWV1ZUl0ZW0sIGluZGV4KSBpbiB0cmFuc2Zvcm1lZFF1ZXVlSXRlbXNcIlxuICAgICAgICA6a2V5PVwicXVldWVJdGVtLmlkXCJcbiAgICAgICAgOmFjdGl2ZT1cInF1ZXVlU2VydmljZS5jdXJyZW50SW5kZXgudmFsdWUgPT09IGluZGV4XCJcbiAgICAgICAgQGNsaWNrPVwicXVldWVTZXJ2aWNlPy5za2lwVG8oaW5kZXgpXCJcbiAgICAgID5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBpbmRleCArIDEgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgIHNpemU9XCI1OHB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJxdWV1ZUl0ZW0udHJhY2sudGh1bWJuYWlscz8uc21hbGxcIj5cbiAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbCBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgcXVldWVJdGVtLnRyYWNrLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsXG4gICAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgICBsaW5lcz1cIjFcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWJvbGRcIlxuICAgICAgICAgID57eyBxdWV1ZUl0ZW0udHJhY2suYWxidW1OYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbFxuICAgICAgICAgICAgY2FwdGlvblxuICAgICAgICAgICAgbGluZXM9XCIxXCJcbiAgICAgICAgICA+e3sgcXVldWVJdGVtLnRyYWNrLmNpcmNsZS5tYXAoYyA9PiBjLm5hbWUpLmpvaW4oJywgJykgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCB7IFRyYWNrSW5mbyB9IGZyb20gJ3NyYy9tb2RlbHMvVHJhY2tJbmZvJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIGluamVjdCB9IGZyb20gJ3Z1ZSc7XG5cbi8vIEluamVjdGVkXG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IHRyYW5zZm9ybWVkUXVldWVJdGVtcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlU2VydmljZSEucXVldWUudmFsdWUubWFwKChxdWV1ZUl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHF1ZXVlSXRlbS5pZCxcbiAgICAgIHRyYWNrOiBUcmFja0luZm8uZnJvbVRyYWNrUmVhZER0byhxdWV1ZUl0ZW0udHJhY2sgYXMgVHJhY2tSZWFkRHRvKSxcbiAgICB9O1xuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUE2Q00sVUFBQSxlQUFlLE9BQXFCLGNBQWM7QUFFbEQsVUFBQSx3QkFBd0IsU0FBUyxNQUFNO0FBQzNDLGFBQU8sYUFBYyxNQUFNLE1BQU0sSUFBSSxDQUFDLGNBQWM7QUFDM0MsZUFBQTtBQUFBLFVBQ0wsSUFBSSxVQUFVO0FBQUEsVUFDZCxPQUFPLFVBQVUsaUJBQWlCLFVBQVUsS0FBcUI7QUFBQSxRQUFBO0FBQUEsTUFDbkUsQ0FDRDtBQUFBLElBQUEsQ0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
