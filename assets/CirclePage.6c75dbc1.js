import { Q as QPage } from "./QPage.b2446d5d.js";
import { _ as _export_sfc, F as defineComponent, S as useRouter, i as inject, bc as Logger, r as ref, a as computed, bu as CircleApi, ac as onBeforeMount, w as watch, G as openBlock, H as createBlock, I as withCtx, J as createVNode, T as unref } from "./index.6c1c8f44.js";
import { u as useAlbumListGridViewController, A as AlbumOrderOptions, a as AlbumListGridView } from "./AlbumListGridViewController.cef4bb79.js";
import "./LoadableElement.6512a7f1.js";
import "./QSelect.ec0dadee.js";
import "./QItem.db012739.js";
import "./QImg.0ea3ea49.js";
const _sfc_main = defineComponent({
  __name: "CirclePage",
  setup(__props) {
    const $router = useRouter();
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    const logger = Logger.getLogger("Circle Page");
    const circleId = ref(null);
    const loadFunction = computed(() => {
      return async (state) => {
        logger.info(`Loading page ${JSON.stringify(state)}`);
        const circleApi = new CircleApi(
          apiConfigProvider.getApiConfigurationWithAuth()
        );
        const albums = await circleApi.getCircleAlbumsById({
          id: circleId.value,
          start: (state.page - 1) * 50,
          limit: 50,
          sortOrder: state.sortOrder,
          sort: state.sortField
        });
        if (albums === void 0 || albums.albums === void 0) {
          throw new Error("No albums found");
        }
        return {
          currentPage: state.page,
          totalPages: Math.ceil(((albums == null ? void 0 : albums.total) || 1) / 50),
          albums: albums == null ? void 0 : albums.albums,
          sortField: state.sortField,
          sortOrder: state.sortOrder
        };
      };
    });
    let controller = null;
    onBeforeMount(() => {
      const circleIdParam = $router.currentRoute.value.params.circleId;
      if (circleIdParam === void 0) {
        throw new Error("Circle ID not found in route");
      }
      const pageParam = $router.currentRoute.value.params.page;
      if (pageParam === void 0) {
        throw new Error("Page not found in route");
      }
      circleId.value = circleIdParam;
      console.log("circleId", circleId.value);
      controller = useAlbumListGridViewController({
        load: loadFunction.value,
        initialInputState: {
          page: parseInt(pageParam),
          sortField: AlbumOrderOptions.Date,
          sortOrder: "Ascending"
        }
      });
      watch(
        () => {
          var _a;
          return (_a = controller.viewModelController.state.value) == null ? void 0 : _a.currentPage;
        },
        (newValue, oldValue) => {
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          $router.push({
            name: "CircleAlbums",
            params: {
              circleId: circleId.value,
              page: newValue
            }
          });
        }
      );
      watch(
        () => $router.currentRoute.value.params.page,
        (newValue, oldValue) => {
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          controller == null ? void 0 : controller.changePage(parseInt(newValue));
        }
      );
      watch(
        () => $router.currentRoute.value.params.circleId,
        (newValue, oldValue) => {
          logger.info(`Circle ID changed from ${oldValue} to ${newValue}`);
          circleId.value = newValue;
        }
      );
      circleId.value = circleIdParam;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(AlbumListGridView, {
            controller: unref(controller)
          }, null, 8, ["controller"])
        ]),
        _: 1
      });
    };
  }
});
var CirclePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CirclePage.vue"]]);
export { CirclePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY2xlUGFnZS42Yzc1ZGJjMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0NpcmNsZVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8QWxidW1MaXN0R3JpZFZpZXcgOmNvbnRyb2xsZXI9XCJjb250cm9sbGVyIVwiPiA8L0FsYnVtTGlzdEdyaWRWaWV3PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBDb25maWd1cmF0aW9uLFxuICBBbGJ1bU9yZGVyT3B0aW9ucyxcbiAgQ2lyY2xlQXBpLFxufSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXcgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXcudnVlJztcbmltcG9ydCB1c2VBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIsIHtcbiAgQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLFxufSBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9BbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJ3NyYy91dGlscy9Mb2dnZXInO1xuaW1wb3J0IHsgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVNb3VudCwgUmVmLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuXG5jb25zdCBsb2dnZXIgPSBMb2dnZXIuZ2V0TG9nZ2VyKCdDaXJjbGUgUGFnZScpO1xuY29uc3QgY2lyY2xlSWQ6IFJlZjxzdHJpbmcgfCBudWxsPiA9IHJlZihudWxsKTtcbmNvbnN0IGxvYWRGdW5jdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB7XG4gICAgbG9nZ2VyLmluZm8oYExvYWRpbmcgcGFnZSAke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKTtcbiAgICBjb25zdCBjaXJjbGVBcGkgPSBuZXcgQ2lyY2xlQXBpKFxuICAgICAgYXBpQ29uZmlnUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbldpdGhBdXRoKClcbiAgICApO1xuXG4gICAgY29uc3QgYWxidW1zID0gYXdhaXQgY2lyY2xlQXBpLmdldENpcmNsZUFsYnVtc0J5SWQoe1xuICAgICAgaWQ6IGNpcmNsZUlkLnZhbHVlISxcbiAgICAgIHN0YXJ0OiAoc3RhdGUucGFnZSAtIDEpICogNTAsXG4gICAgICBsaW1pdDogNTAsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICAgIHNvcnQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICB9KTtcblxuICAgIGlmIChhbGJ1bXMgPT09IHVuZGVmaW5lZCB8fCBhbGJ1bXMuYWxidW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYWxidW1zIGZvdW5kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5wYWdlLFxuICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKChhbGJ1bXM/LnRvdGFsIHx8IDEpIC8gNTApLFxuICAgICAgYWxidW1zOiBhbGJ1bXM/LmFsYnVtcyxcblxuICAgICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICB9IGFzIEFsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsO1xuICB9O1xufSk7XG5cbmxldCBjb250cm9sbGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgfCBudWxsID0gbnVsbDtcblxub25CZWZvcmVNb3VudCgoKSA9PiB7XG4gIGNvbnN0IGNpcmNsZUlkUGFyYW0gPSAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuY2lyY2xlSWQ7XG4gIGlmIChjaXJjbGVJZFBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmNsZSBJRCBub3QgZm91bmQgaW4gcm91dGUnKTtcbiAgfVxuXG4gIGNvbnN0IHBhZ2VQYXJhbSA9ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlO1xuICBpZiAocGFnZVBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhZ2Ugbm90IGZvdW5kIGluIHJvdXRlJyk7XG4gIH1cblxuICBjaXJjbGVJZC52YWx1ZSA9IGNpcmNsZUlkUGFyYW0gYXMgc3RyaW5nO1xuICBjb25zb2xlLmxvZygnY2lyY2xlSWQnLCBjaXJjbGVJZC52YWx1ZSk7XG5cbiAgY29udHJvbGxlciA9IHVzZUFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcih7XG4gICAgbG9hZDogbG9hZEZ1bmN0aW9uLnZhbHVlLFxuICAgIGluaXRpYWxJbnB1dFN0YXRlOiB7XG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlUGFyYW0gYXMgc3RyaW5nKSxcbiAgICAgIHNvcnRGaWVsZDogQWxidW1PcmRlck9wdGlvbnMuRGF0ZSxcbiAgICAgIHNvcnRPcmRlcjogJ0FzY2VuZGluZycsXG4gICAgfSxcbiAgfSk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gY29udHJvbGxlciEudmlld01vZGVsQ29udHJvbGxlci5zdGF0ZS52YWx1ZT8uY3VycmVudFBhZ2UsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oYFBhZ2UgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgICAkcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiAnQ2lyY2xlQWxidW1zJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY2lyY2xlSWQ6IGNpcmNsZUlkLnZhbHVlLFxuICAgICAgICAgIHBhZ2U6IG5ld1ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIHdhdGNoKFxuICAgICgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlLFxuICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGBQYWdlIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWApO1xuICAgICAgY29udHJvbGxlcj8uY2hhbmdlUGFnZShwYXJzZUludChuZXdWYWx1ZSBhcyBzdHJpbmcpKTtcbiAgICB9XG4gICk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmNpcmNsZUlkLFxuICAgIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGBDaXJjbGUgSUQgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG4gICAgICBjaXJjbGVJZC52YWx1ZSA9IG5ld1ZhbHVlIGFzIHN0cmluZztcbiAgICAgIC8vIGNvbnRyb2xsZXIubG9hZCgpO1xuICAgIH1cbiAgKTtcblxuICBjaXJjbGVJZC52YWx1ZSA9IGNpcmNsZUlkUGFyYW0gYXMgc3RyaW5nO1xufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUJBLFVBQU0sVUFBVTtBQUNWLFVBQUEsb0JBQ0osT0FBZ0QsbUJBQW1CO0FBQ3JFLFFBQUksQ0FBQyxtQkFBbUI7QUFDaEIsWUFBQSxJQUFJLE1BQU0sc0NBQXNDO0FBQUEsSUFDeEQ7QUFFTSxVQUFBLFNBQVMsT0FBTyxVQUFVLGFBQWE7QUFDdkMsVUFBQSxXQUErQixJQUFJLElBQUk7QUFDdkMsVUFBQSxlQUFlLFNBQVMsTUFBTTtBQUNsQyxhQUFPLE9BQU8sVUFBdUM7QUFDbkQsZUFBTyxLQUFLLGdCQUFnQixLQUFLLFVBQVUsS0FBSyxHQUFHO0FBQ25ELGNBQU0sWUFBWSxJQUFJO0FBQUEsVUFDcEIsa0JBQWtCLDRCQUE0QjtBQUFBLFFBQUE7QUFHMUMsY0FBQSxTQUFTLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxVQUNqRCxJQUFJLFNBQVM7QUFBQSxVQUNiLFFBQVEsTUFBTSxPQUFPLEtBQUs7QUFBQSxVQUMxQixPQUFPO0FBQUEsVUFDUCxXQUFXLE1BQU07QUFBQSxVQUNqQixNQUFNLE1BQU07QUFBQSxRQUFBLENBQ2I7QUFFRCxZQUFJLFdBQVcsVUFBYSxPQUFPLFdBQVcsUUFBVztBQUNqRCxnQkFBQSxJQUFJLE1BQU0saUJBQWlCO0FBQUEsUUFDbkM7QUFFTyxlQUFBO0FBQUEsVUFDTCxhQUFhLE1BQU07QUFBQSxVQUNuQixZQUFZLEtBQUssT0FBTSxpQ0FBUSxVQUFTLEtBQUssRUFBRTtBQUFBLFVBQy9DLFFBQVEsaUNBQVE7QUFBQSxVQUVoQixXQUFXLE1BQU07QUFBQSxVQUNqQixXQUFXLE1BQU07QUFBQSxRQUFBO0FBQUEsTUFDbkI7QUFBQSxJQUNGLENBQ0Q7QUFFRCxRQUFJLGFBQWlEO0FBRXJELGtCQUFjLE1BQU07QUFDbEIsWUFBTSxnQkFBZ0IsUUFBUSxhQUFhLE1BQU0sT0FBTztBQUN4RCxVQUFJLGtCQUFrQixRQUFXO0FBQ3pCLGNBQUEsSUFBSSxNQUFNLDhCQUE4QjtBQUFBLE1BQ2hEO0FBRUEsWUFBTSxZQUFZLFFBQVEsYUFBYSxNQUFNLE9BQU87QUFDcEQsVUFBSSxjQUFjLFFBQVc7QUFDckIsY0FBQSxJQUFJLE1BQU0seUJBQXlCO0FBQUEsTUFDM0M7QUFFQSxlQUFTLFFBQVE7QUFDVCxjQUFBLElBQUksWUFBWSxTQUFTLEtBQUs7QUFFdEMsbUJBQWEsK0JBQStCO0FBQUEsUUFDMUMsTUFBTSxhQUFhO0FBQUEsUUFDbkIsbUJBQW1CO0FBQUEsVUFDakIsTUFBTSxTQUFTLFNBQW1CO0FBQUEsVUFDbEMsV0FBVyxrQkFBa0I7QUFBQSxVQUM3QixXQUFXO0FBQUEsUUFDYjtBQUFBLE1BQUEsQ0FDRDtBQUVEO0FBQUEsUUFDRSxNQUFBOztBQUFNLGtDQUFZLG9CQUFvQixNQUFNLFVBQXRDLG1CQUE2QztBQUFBO0FBQUEsUUFDbkQsQ0FBQyxVQUFVLGFBQWE7QUFDZixpQkFBQSxLQUFLLHFCQUFxQixlQUFlLFVBQVU7QUFDMUQsa0JBQVEsS0FBSztBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLGNBQ04sVUFBVSxTQUFTO0FBQUEsY0FDbkIsTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUFBLENBQ0Q7QUFBQSxRQUNIO0FBQUEsTUFBQTtBQUdGO0FBQUEsUUFDRSxNQUFNLFFBQVEsYUFBYSxNQUFNLE9BQU87QUFBQSxRQUN4QyxDQUFDLFVBQVUsYUFBYTtBQUNmLGlCQUFBLEtBQUsscUJBQXFCLGVBQWUsVUFBVTtBQUM5QyxtREFBQSxXQUFXLFNBQVMsUUFBa0I7QUFBQSxRQUNwRDtBQUFBLE1BQUE7QUFHRjtBQUFBLFFBQ0UsTUFBTSxRQUFRLGFBQWEsTUFBTSxPQUFPO0FBQUEsUUFDeEMsQ0FBQyxVQUFVLGFBQWE7QUFDZixpQkFBQSxLQUFLLDBCQUEwQixlQUFlLFVBQVU7QUFDL0QsbUJBQVMsUUFBUTtBQUFBLFFBRW5CO0FBQUEsTUFBQTtBQUdGLGVBQVMsUUFBUTtBQUFBLElBQUEsQ0FDbEI7Ozs7Ozs7Ozs7Ozs7OzsifQ==
