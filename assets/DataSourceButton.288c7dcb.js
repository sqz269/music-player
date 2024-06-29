import { Q as QTooltip, z as outlinedInfo } from "./QTooltip.7f6e6c87.js";
import { E as defineComponent, G as openBlock, H as createBlock, I as withCtx, Q as QDialog, J as createVNode, K as QCardSection, U as createElementBlock, Y as renderList, T as unref, W as createTextVNode, $ as toDisplayString, X as Fragment, O as QCard, _ as _export_sfc, R as createBaseVNode, F as useQuasar, g as computed, N as QBtn, a5 as createCommentVNode } from "./index.d892f699.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.1e5474b8.js";
import { Q as QList } from "./QList.3159c494.js";
class UrlUtils {
  static openUrlInNewTab(url) {
    window.open(url, "_blank");
  }
  static constructYouTubeSearchQuery(query) {
    return `https://www.youtube.com/results?search_query=${query}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZUJ1dHRvbi4yODhjN2RjYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9EYXRhU291cmNlRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RhdGFTb3VyY2VCdG4vRGF0YVNvdXJjZUJ1dHRvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcbiAgc3RhdGljIG9wZW5VcmxJbk5ld1RhYih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdFlvdVR1YmVTZWFyY2hRdWVyeShxdWVyeTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3Jlc3VsdHM/c2VhcmNoX3F1ZXJ5PSR7cXVlcnl9YDtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgYmFja2Ryb3AtZmlsdGVyPVwiYnJpZ2h0bmVzcyg2MCUpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogNTAwcHg7IG1heC13aWR0aDogNDB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlxuICAgICAgICAgIERhdGEgU291cmNlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1saXN0PlxuICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBwcm9wcy5kYXRhU291cmNlXCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtXCJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgQGNsaWNrPVwiVXJsVXRpbHMub3BlblVybEluTmV3VGFiKGl0ZW0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAge3sgaXRlbSB9fVxuICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgIDwvcS1saXN0PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gJ3NyYy91dGlscy9VcmxVdGlscyc7XG5pbXBvcnQgeyBkZWZpbmVQcm9wcyB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBkYXRhU291cmNlOiBzdHJpbmdbXTtcbn0+KCk7XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1idG5cbiAgICB2LWlmPVwic2hvdWxkUmVuZGVyXCJcbiAgICBjbGFzcz1cImFsbC1wb2ludGVyLWV2ZW50cyBhYnNvbHV0ZS10b3AtcmlnaHRcIlxuICAgIDppY29uPVwib3V0bGluZWRJbmZvXCJcbiAgICBmbGF0XG4gICAgcm91bmRcbiAgICBkZW5zZVxuICAgIEBjbGljaz1cIm9wZW5WaWV3RGF0YVNvdXJjZXNEaWFsb2dcIlxuICA+XG4gICAgPHEtdG9vbHRpcD5cbiAgICAgIFZpZXcgZGF0YSBzb3VyY2VzXG4gICAgPC9xLXRvb2x0aXA+XG4gIDwvcS1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgY29tcHV0ZWQsIGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcbmltcG9ydCB7XG4gIG91dGxpbmVkSW5mbyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBEYXRhU291cmNlRGlhbG9nIGZyb20gJ3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvRGF0YVNvdXJjZURpYWxvZy52dWUnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzaG91bGRSZW5kZXIgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBwcm9wcy5kYXRhU291cmNlcyAmJiBwcm9wcy5kYXRhU291cmNlcy5sZW5ndGggPiAwO1xufSk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBkYXRhU291cmNlczogc3RyaW5nW10gfCBudWxsIHwgdW5kZWZpbmVkO1xufT4oKTtcblxuXG5jb25zdCBvcGVuVmlld0RhdGFTb3VyY2VzRGlhbG9nID0gKCkgPT4ge1xuICAkcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogRGF0YVNvdXJjZURpYWxvZyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgZGF0YVNvdXJjZTogcHJvcHMuZGF0YVNvdXJjZXMsXG4gICAgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sU0FBUztBQUFBLEVBQ3BCLE9BQU8sZ0JBQWdCLEtBQW1CO0FBQ2pDLFdBQUEsS0FBSyxLQUFLLFFBQVE7QUFBQSxFQUMzQjtBQUFBLEVBRUEsT0FBTyw0QkFBNEIsT0FBdUI7QUFDeEQsV0FBTyxnREFBZ0Q7QUFBQSxFQUN6RDtBQUNGOzs7Ozs7OztBQzRCQSxVQUFNLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pkLFVBQU0sS0FBSztBQUVMLFVBQUEsZUFBZSxTQUFTLE1BQU07QUFDbEMsYUFBTyxNQUFNLGVBQWUsTUFBTSxZQUFZLFNBQVM7QUFBQSxJQUFBLENBQ3hEO0FBRUQsVUFBTSxRQUFRO0FBS2QsVUFBTSw0QkFBNEIsTUFBTTtBQUN0QyxTQUFHLE9BQU87QUFBQSxRQUNSLFdBQVc7QUFBQSxRQUNYLGdCQUFnQjtBQUFBLFVBQ2QsWUFBWSxNQUFNO0FBQUEsUUFDcEI7QUFBQSxNQUFBLENBQ0Q7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
