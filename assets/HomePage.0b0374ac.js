import { Q as QPage } from "./QPage.e8c5211a.js";
import { _ as _export_sfc, F as defineComponent, S as useRouter, i as inject, b6 as Logger, r as ref, ac as onBeforeMount, b7 as AlbumApi, w as watch, G as openBlock, H as createBlock, I as withCtx, J as createVNode, T as unref } from "./index.0348f0e5.js";
import { u as useAlbumListGridViewController, A as AlbumOrderOptions, a as AlbumListGridView } from "./AlbumListGridViewController.8e33e9ca.js";
import "./LoadableElement.9b667840.js";
import "./QImg.e0e3b678.js";
import "./QItem.8a3871a9.js";
const _sfc_main = defineComponent({
  __name: "HomePage",
  setup(__props) {
    const $router = useRouter();
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    const logger = Logger.getLogger("HomePage");
    let controller = null;
    const isUpdateChildInitiated = ref(false);
    onBeforeMount(() => {
      const pageParam = $router.currentRoute.value.params.page;
      const page = pageParam ? parseInt(pageParam) : 1;
      controller = useAlbumListGridViewController({
        load: async (state) => {
          logger.info(`Loading page ${JSON.stringify(state)}`);
          const albumsApi = new AlbumApi(
            apiConfigProvider.getApiConfigurationWithAuth()
          );
          const albums = await albumsApi.getAlbums({
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
        },
        initialInputState: {
          page,
          sortField: AlbumOrderOptions.Date,
          sortOrder: "Ascending"
        }
      });
      watch(
        () => $router.currentRoute.value.params.page,
        (newValue, oldValue) => {
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          if (isUpdateChildInitiated.value) {
            isUpdateChildInitiated.value = false;
            return;
          }
          controller == null ? void 0 : controller.changePage(parseInt(newValue));
        }
      );
      watch(
        () => {
          var _a;
          return (_a = controller.viewModelController.state.value) == null ? void 0 : _a.currentPage;
        },
        (newValue, oldValue) => {
          isUpdateChildInitiated.value = true;
          logger.info(`Page changed from ${oldValue} to ${newValue}`);
          $router.push({
            name: "Home",
            params: {
              page: newValue
            }
          });
        }
      );
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
var HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "HomePage.vue"]]);
export { HomePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuMGIwMzc0YWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxBbGJ1bUxpc3RHcmlkVmlldyA6Y29udHJvbGxlcj1cImNvbnRyb2xsZXIhXCI+IDwvQWxidW1MaXN0R3JpZFZpZXc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIEFsYnVtQXBpLFxuICBDb25maWd1cmF0aW9uLFxuICBBbGJ1bU9yZGVyT3B0aW9ucyxcbn0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3IGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtTGlzdEdyaWRWaWV3L0FsYnVtTGlzdEdyaWRWaWV3LnZ1ZSc7XG5pbXBvcnQgdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLCB7XG4gIEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcixcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld1ZpZXdNb2RlbCBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bUxpc3RHcmlkVmlldy9tb2RlbHMvQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwnO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJ3NyYy91dGlscy9Mb2dnZXInO1xuaW1wb3J0IHsgaW5qZWN0LCBvbkJlZm9yZU1vdW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyLmdldExvZ2dlcignSG9tZVBhZ2UnKTtcbmxldCBjb250cm9sbGVyOiBBbGJ1bUxpc3RHcmlkVmlld0NvbnRyb2xsZXIgfCBudWxsID0gbnVsbDtcblxuY29uc3QgaXNVcGRhdGVDaGlsZEluaXRpYXRlZCA9IHJlZihmYWxzZSk7XG5cbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICBjb25zdCBwYWdlUGFyYW0gPSAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMucGFnZTtcbiAgY29uc3QgcGFnZSA9IHBhZ2VQYXJhbSA/IHBhcnNlSW50KHBhZ2VQYXJhbSBhcyBzdHJpbmcpIDogMTtcblxuICBjb250cm9sbGVyID0gdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyKHtcbiAgICBsb2FkOiBhc3luYyAoc3RhdGUpID0+IHtcbiAgICAgIGxvZ2dlci5pbmZvKGBMb2FkaW5nIHBhZ2UgJHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YCk7XG4gICAgICBjb25zdCBhbGJ1bXNBcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgICAgIGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBhbGJ1bXMgPSBhd2FpdCBhbGJ1bXNBcGkuZ2V0QWxidW1zKHtcbiAgICAgICAgc3RhcnQ6IChzdGF0ZS5wYWdlIC0gMSkgKiA1MCxcbiAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICBzb3J0T3JkZXI6IHN0YXRlLnNvcnRPcmRlcixcbiAgICAgICAgc29ydDogc3RhdGUuc29ydEZpZWxkLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhbGJ1bXMgPT09IHVuZGVmaW5lZCB8fCBhbGJ1bXMuYWxidW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhbGJ1bXMgZm91bmQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLnBhZ2UsXG4gICAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCgoYWxidW1zPy50b3RhbCB8fCAxKSAvIDUwKSxcbiAgICAgICAgYWxidW1zOiBhbGJ1bXM/LmFsYnVtcyxcblxuICAgICAgICBzb3J0RmllbGQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgICAgICAgc29ydE9yZGVyOiBzdGF0ZS5zb3J0T3JkZXIsXG4gICAgICB9IGFzIEFsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsO1xuICAgIH0sXG5cbiAgICBpbml0aWFsSW5wdXRTdGF0ZToge1xuICAgICAgcGFnZSxcbiAgICAgIHNvcnRGaWVsZDogQWxidW1PcmRlck9wdGlvbnMuRGF0ZSxcbiAgICAgIHNvcnRPcmRlcjogJ0FzY2VuZGluZycsXG4gICAgfSxcbiAgfSk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gJHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2UsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgbG9nZ2VyLmluZm8oYFBhZ2UgY2hhbmdlZCBmcm9tICR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YCk7XG5cbiAgICAgIGlmIChpc1VwZGF0ZUNoaWxkSW5pdGlhdGVkLnZhbHVlKSB7XG4gICAgICAgIGlzVXBkYXRlQ2hpbGRJbml0aWF0ZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29udHJvbGxlcj8uY2hhbmdlUGFnZShwYXJzZUludChuZXdWYWx1ZSBhcyBzdHJpbmcpKTtcbiAgICB9XG4gICk7XG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gY29udHJvbGxlciEudmlld01vZGVsQ29udHJvbGxlci5zdGF0ZS52YWx1ZT8uY3VycmVudFBhZ2UsXG4gICAgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgaXNVcGRhdGVDaGlsZEluaXRpYXRlZC52YWx1ZSA9IHRydWU7XG5cbiAgICAgIGxvZ2dlci5pbmZvKGBQYWdlIGNoYW5nZWQgZnJvbSAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWApO1xuXG4gICAgICAkcm91dGVyLnB1c2goe1xuICAgICAgICBuYW1lOiAnSG9tZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBhZ2U6IG5ld1ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICApO1xufSk7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzQkEsVUFBTSxVQUFVO0FBQ1YsVUFBQSxvQkFDSixPQUFnRCxtQkFBbUI7QUFDckUsUUFBSSxDQUFDLG1CQUFtQjtBQUNoQixZQUFBLElBQUksTUFBTSxzQ0FBc0M7QUFBQSxJQUN4RDtBQUNNLFVBQUEsU0FBUyxPQUFPLFVBQVUsVUFBVTtBQUMxQyxRQUFJLGFBQWlEO0FBRS9DLFVBQUEseUJBQXlCLElBQUksS0FBSztBQUV4QyxrQkFBYyxNQUFNO0FBQ2xCLFlBQU0sWUFBWSxRQUFRLGFBQWEsTUFBTSxPQUFPO0FBQ3BELFlBQU0sT0FBTyxZQUFZLFNBQVMsU0FBbUIsSUFBSTtBQUV6RCxtQkFBYSwrQkFBK0I7QUFBQSxRQUMxQyxNQUFNLE9BQU8sVUFBVTtBQUNyQixpQkFBTyxLQUFLLGdCQUFnQixLQUFLLFVBQVUsS0FBSyxHQUFHO0FBQ25ELGdCQUFNLFlBQVksSUFBSTtBQUFBLFlBQ3BCLGtCQUFrQiw0QkFBNEI7QUFBQSxVQUFBO0FBRzFDLGdCQUFBLFNBQVMsTUFBTSxVQUFVLFVBQVU7QUFBQSxZQUN2QyxRQUFRLE1BQU0sT0FBTyxLQUFLO0FBQUEsWUFDMUIsT0FBTztBQUFBLFlBQ1AsV0FBVyxNQUFNO0FBQUEsWUFDakIsTUFBTSxNQUFNO0FBQUEsVUFBQSxDQUNiO0FBRUQsY0FBSSxXQUFXLFVBQWEsT0FBTyxXQUFXLFFBQVc7QUFDakQsa0JBQUEsSUFBSSxNQUFNLGlCQUFpQjtBQUFBLFVBQ25DO0FBRU8saUJBQUE7QUFBQSxZQUNMLGFBQWEsTUFBTTtBQUFBLFlBQ25CLFlBQVksS0FBSyxPQUFNLGlDQUFRLFVBQVMsS0FBSyxFQUFFO0FBQUEsWUFDL0MsUUFBUSxpQ0FBUTtBQUFBLFlBRWhCLFdBQVcsTUFBTTtBQUFBLFlBQ2pCLFdBQVcsTUFBTTtBQUFBLFVBQUE7QUFBQSxRQUVyQjtBQUFBLFFBRUEsbUJBQW1CO0FBQUEsVUFDakI7QUFBQSxVQUNBLFdBQVcsa0JBQWtCO0FBQUEsVUFDN0IsV0FBVztBQUFBLFFBQ2I7QUFBQSxNQUFBLENBQ0Q7QUFFRDtBQUFBLFFBQ0UsTUFBTSxRQUFRLGFBQWEsTUFBTSxPQUFPO0FBQUEsUUFDeEMsQ0FBQyxVQUFVLGFBQWE7QUFDZixpQkFBQSxLQUFLLHFCQUFxQixlQUFlLFVBQVU7QUFFMUQsY0FBSSx1QkFBdUIsT0FBTztBQUNoQyxtQ0FBdUIsUUFBUTtBQUMvQjtBQUFBLFVBQ0Y7QUFDWSxtREFBQSxXQUFXLFNBQVMsUUFBa0I7QUFBQSxRQUNwRDtBQUFBLE1BQUE7QUFHRjtBQUFBLFFBQ0UsTUFBQTs7QUFBTSxrQ0FBWSxvQkFBb0IsTUFBTSxVQUF0QyxtQkFBNkM7QUFBQTtBQUFBLFFBQ25ELENBQUMsVUFBVSxhQUFhO0FBQ3RCLGlDQUF1QixRQUFRO0FBRXhCLGlCQUFBLEtBQUsscUJBQXFCLGVBQWUsVUFBVTtBQUUxRCxrQkFBUSxLQUFLO0FBQUEsWUFDWCxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQUEsQ0FDRDtBQUFBLFFBQ0g7QUFBQSxNQUFBO0FBQUEsSUFDRixDQUNEOzs7Ozs7Ozs7Ozs7Ozs7In0=
