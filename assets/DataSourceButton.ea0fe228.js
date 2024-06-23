import { u as useQuasar, Q as QTooltip, y as outlinedInfo } from "./QTooltip.c86a0c17.js";
import { F as defineComponent, G as openBlock, H as createBlock, I as withCtx, Q as QDialog, J as createVNode, K as QCardSection, U as createElementBlock, Y as renderList, T as unref, W as createTextVNode, $ as toDisplayString, X as Fragment, O as QCard, _ as _export_sfc, R as createBaseVNode, a as computed, N as QBtn, a3 as createCommentVNode } from "./index.a366f9c2.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.2dfa937a.js";
import { Q as QList } from "./QList.be4b067c.js";
class UrlUtils {
  static openUrlInNewTab(url) {
    window.open(url, "_blank");
  }
}
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, " Data Source ", -1);
const _sfc_main$1 = defineComponent({
  __name: "DataSourceDialog",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        position: "top",
        "backdrop-filter": "brightness(60%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "500px", "max-width": "40vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(props.dataSource, (item) => {
                        return openBlock(), createBlock(QItem, {
                          key: item,
                          clickable: "",
                          onClick: ($event) => unref(UrlUtils).openUrlInNewTab(item)
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
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
var DataSourceDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "DataSourceDialog.vue"]]);
const _sfc_main = defineComponent({
  __name: "DataSourceButton",
  props: {
    dataSources: {}
  },
  setup(__props) {
    const $q = useQuasar();
    const shouldRender = computed(() => {
      return props.dataSources && props.dataSources.length > 0;
    });
    const props = __props;
    const openViewDataSourcesDialog = () => {
      $q.dialog({
        component: DataSourceDialog,
        componentProps: {
          dataSource: props.dataSources
        }
      });
    };
    return (_ctx, _cache) => {
      return shouldRender.value ? (openBlock(), createBlock(QBtn, {
        key: 0,
        class: "all-pointer-events absolute-top-right",
        icon: unref(outlinedInfo),
        flat: "",
        round: "",
        dense: "",
        onClick: openViewDataSourcesDialog
      }, {
        default: withCtx(() => [
          createVNode(QTooltip, null, {
            default: withCtx(() => [
              createTextVNode(" View data sources ")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["icon"])) : createCommentVNode("", true);
    };
  }
});
var DataSourceButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "DataSourceButton.vue"]]);
export { DataSourceButton as D, UrlUtils as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZUJ1dHRvbi5lYTBmZTIyOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9EYXRhU291cmNlRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGFTb3VyY2VCdG4vRGF0YVNvdXJjZUJ1dHRvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcbiAgc3RhdGljIG9wZW5VcmxJbk5ld1RhYih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDYwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiA1MDBweDsgbWF4LXdpZHRoOiA0MHZ3OyBtYXJnaW4tdG9wOiAxMHZoOyBib3JkZXItcmFkaXVzOiA1cHg7XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+XG4gICAgICAgICAgRGF0YSBTb3VyY2VcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIHByb3BzLmRhdGFTb3VyY2VcIlxuICAgICAgICAgICAgOmtleT1cIml0ZW1cIlxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICBAY2xpY2s9XCJVcmxVdGlscy5vcGVuVXJsSW5OZXdUYWIoaXRlbSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICB7eyBpdGVtIH19XG4gICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgPC9xLWxpc3Q+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSAnc3JjL3V0aWxzL1VybFV0aWxzJztcbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGRhdGFTb3VyY2U6IHN0cmluZ1tdO1xufT4oKTtcblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWJ0blxuICAgIHYtaWY9XCJzaG91bGRSZW5kZXJcIlxuICAgIGNsYXNzPVwiYWxsLXBvaW50ZXItZXZlbnRzIGFic29sdXRlLXRvcC1yaWdodFwiXG4gICAgOmljb249XCJvdXRsaW5lZEluZm9cIlxuICAgIGZsYXRcbiAgICByb3VuZFxuICAgIGRlbnNlXG4gICAgQGNsaWNrPVwib3BlblZpZXdEYXRhU291cmNlc0RpYWxvZ1wiXG4gID5cbiAgICA8cS10b29sdGlwPlxuICAgICAgVmlldyBkYXRhIHNvdXJjZXNcbiAgICA8L3EtdG9vbHRpcD5cbiAgPC9xLWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lUHJvcHMgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtcbiAgb3V0bGluZWRJbmZvLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IERhdGFTb3VyY2VEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9EYXRhU291cmNlRGlhbG9nLnZ1ZSc7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IHNob3VsZFJlbmRlciA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHByb3BzLmRhdGFTb3VyY2VzICYmIHByb3BzLmRhdGFTb3VyY2VzLmxlbmd0aCA+IDA7XG59KTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGRhdGFTb3VyY2VzOiBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQ7XG59PigpO1xuXG5cbmNvbnN0IG9wZW5WaWV3RGF0YVNvdXJjZXNEaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBEYXRhU291cmNlRGlhbG9nLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBkYXRhU291cmNlOiBwcm9wcy5kYXRhU291cmNlcyxcbiAgICB9LFxuICB9KTtcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxTQUFTO0FBQUEsRUFDcEIsT0FBTyxnQkFBZ0IsS0FBbUI7QUFDakMsV0FBQSxLQUFLLEtBQUssUUFBUTtBQUFBLEVBQzNCO0FBQ0Y7Ozs7Ozs7O0FDZ0NBLFVBQU0sUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmQsVUFBTSxLQUFLO0FBRUwsVUFBQSxlQUFlLFNBQVMsTUFBTTtBQUNsQyxhQUFPLE1BQU0sZUFBZSxNQUFNLFlBQVksU0FBUztBQUFBLElBQUEsQ0FDeEQ7QUFFRCxVQUFNLFFBQVE7QUFLZCxVQUFNLDRCQUE0QixNQUFNO0FBQ3RDLFNBQUcsT0FBTztBQUFBLFFBQ1IsV0FBVztBQUFBLFFBQ1gsZ0JBQWdCO0FBQUEsVUFDZCxZQUFZLE1BQU07QUFBQSxRQUNwQjtBQUFBLE1BQUEsQ0FDRDtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
