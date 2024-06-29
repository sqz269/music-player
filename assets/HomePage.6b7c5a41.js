import { Q as QPage } from "./QPage.905de817.js";
import { _ as _export_sfc, E as defineComponent, r as ref, S as useRouter, bi as useRoute, i as inject, bj as Logger, g as computed, ae as onBeforeMount, w as watch, aT as onActivated, bk as onBeforeRouteLeave, G as openBlock, H as createBlock, I as withCtx, bl as AlbumApi, J as createVNode, T as unref } from "./index.d892f699.js";
import { A as AlbumOrderOptions, u as useAlbumListGridViewController, a as AlbumListGridView } from "./AlbumListGridViewController.88821575.js";
import "./LoadableElement.9b40ae7c.js";
import "./QSelect.030ef525.js";
import "./QItem.1e5474b8.js";
import "./QImg.16d5b961.js";
const _sfc_main = defineComponent({
  __name: "HomePage",
  setup(__props) {
    const isActive = ref(true);
    const $router = useRouter();
    const $route = useRoute();
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    Logger.getLogger("HomePage");
    let controller = null;
    const albumListGridViewLoader = async (state) => {
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
    };
    const urlStateDecoder = computed(() => {
      const pageParam = $route.params.page;
      const page = pageParam ? parseInt(pageParam) : 1;
      const sortField = $route.query.sortField;
      const sortOrder = $route.query.sortOrder;
      return {
        page,
        sortField: sortField || AlbumOrderOptions.Date,
        sortOrder: sortOrder || "Ascending"
      };
    });
    const urlStateEncoder = (state) => {
      $router.push({
        name: "Home",
        params: {
          page: state.page
        },
        query: {
          sortField: state.sortField,
          sortOrder: state.sortOrder
        }
      });
    };
    onBeforeMount(() => {
      const pageParam = $router.currentRoute.value.params.page;
      const page = pageParam ? parseInt(pageParam) : 1;
      controller = useAlbumListGridViewController({
        load: albumListGridViewLoader,
        initialInputState: {
          page,
          sortField: AlbumOrderOptions.Date,
          sortOrder: "Ascending"
        },
        urlStateDecoder,
        urlStateEncoder
      });
      watch($route, () => {
        if (isActive.value) {
          controller == null ? void 0 : controller.reload();
        }
      });
    });
    onActivated(() => {
      isActive.value = true;
    });
    onBeforeRouteLeave((to, from, next) => {
      isActive.value = false;
      next();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuNmI3YzVhNDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Ib21lUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlPlxuICAgIDxBbGJ1bUxpc3RHcmlkVmlldyA6Y29udHJvbGxlcj1cImNvbnRyb2xsZXIhXCI+IDwvQWxidW1MaXN0R3JpZFZpZXc+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIEFsYnVtQXBpLFxuICBDb25maWd1cmF0aW9uLFxuICBBbGJ1bU9yZGVyT3B0aW9ucyxcbn0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEFsYnVtTGlzdEdyaWRWaWV3IGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtTGlzdEdyaWRWaWV3L0FsYnVtTGlzdEdyaWRWaWV3LnZ1ZSc7XG5pbXBvcnQgdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyLCB7XG4gIEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlcixcbn0gZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyJztcbmltcG9ydCBBbGJ1bUxpc3RHcmlkVmlld0lucHV0TW9kZWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3SW5wdXRNb2RlbCc7XG5pbXBvcnQgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWwgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1MaXN0R3JpZFZpZXcvbW9kZWxzL0FsYnVtTGlzdEdyaWRWaWV3Vmlld01vZGVsJztcbmltcG9ydCBBcGlDb25maWd1cmF0aW9uUHJvdmlkZXIgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BcGlDb25maWd1cmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IExvZ2dlciBmcm9tICdzcmMvdXRpbHMvTG9nZ2VyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBpbmplY3QsIG9uQWN0aXZhdGVkLCBvbkJlZm9yZU1vdW50LCBvbkRlYWN0aXZhdGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IG9uQmVmb3JlUm91dGVMZWF2ZSwgdXNlUm91dGUsIHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCBpc0FjdGl2ZSA9IHJlZih0cnVlKTtcblxuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgJHJvdXRlID0gdXNlUm91dGUoKTtcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5jb25zdCBsb2dnZXIgPSBMb2dnZXIuZ2V0TG9nZ2VyKCdIb21lUGFnZScpO1xubGV0IGNvbnRyb2xsZXI6IEFsYnVtTGlzdEdyaWRWaWV3Q29udHJvbGxlciB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBhbGJ1bUxpc3RHcmlkVmlld0xvYWRlciA9IGFzeW5jIChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB7XG4gIGNvbnN0IGFsYnVtc0FwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICApO1xuXG4gIGNvbnN0IGFsYnVtcyA9IGF3YWl0IGFsYnVtc0FwaS5nZXRBbGJ1bXMoe1xuICAgIHN0YXJ0OiAoc3RhdGUucGFnZSAtIDEpICogNTAsXG4gICAgbGltaXQ6IDUwLFxuICAgIHNvcnRPcmRlcjogc3RhdGUuc29ydE9yZGVyLFxuICAgIHNvcnQ6IHN0YXRlLnNvcnRGaWVsZCxcbiAgfSk7XG5cbiAgaWYgKGFsYnVtcyA9PT0gdW5kZWZpbmVkIHx8IGFsYnVtcy5hbGJ1bXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gYWxidW1zIGZvdW5kJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5wYWdlLFxuICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCgoYWxidW1zPy50b3RhbCB8fCAxKSAvIDUwKSxcbiAgICBhbGJ1bXM6IGFsYnVtcz8uYWxidW1zLFxuXG4gICAgc29ydEZpZWxkOiBzdGF0ZS5zb3J0RmllbGQsXG4gICAgc29ydE9yZGVyOiBzdGF0ZS5zb3J0T3JkZXIsXG4gIH0gYXMgQWxidW1MaXN0R3JpZFZpZXdWaWV3TW9kZWw7XG59O1xuXG5jb25zdCB1cmxTdGF0ZURlY29kZXIgPSBjb21wdXRlZCgoKTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsID0+IHtcbiAgLy8gUGFnZSBpcyBnb2luZyB0byBiZSBkaXJlY3RseSBpbiB0aGUgcGF0aCB3aGlsZSBzb3J0aW5nIG9wdGlvbnMgYXJlIGdvaW5nIHRvIGJlIGluIHF1ZXJ5IHBhcmFtc1xuICAvLyBxdWVyeSBwYXJhbXMgYXJlIGdvaW5nIHRvIGJlIG9wdGlvbmFsXG4gIGNvbnN0IHBhZ2VQYXJhbSA9ICRyb3V0ZS5wYXJhbXMucGFnZTtcbiAgY29uc3QgcGFnZSA9IHBhZ2VQYXJhbSA/IHBhcnNlSW50KHBhZ2VQYXJhbSBhcyBzdHJpbmcpIDogMTtcblxuICBjb25zdCBzb3J0RmllbGQgPSAkcm91dGUucXVlcnkuc29ydEZpZWxkIGFzIEFsYnVtT3JkZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICBjb25zdCBzb3J0T3JkZXIgPSAkcm91dGUucXVlcnkuc29ydE9yZGVyIGFzICdBc2NlbmRpbmcnIHwgJ0Rlc2NlbmRpbmcnIHwgdW5kZWZpbmVkO1xuXG4gIHJldHVybiB7XG4gICAgcGFnZSxcbiAgICBzb3J0RmllbGQ6IHNvcnRGaWVsZCB8fCBBbGJ1bU9yZGVyT3B0aW9ucy5EYXRlLFxuICAgIHNvcnRPcmRlcjogc29ydE9yZGVyIHx8ICdBc2NlbmRpbmcnLFxuICB9O1xufSk7XG5cbmNvbnN0IHVybFN0YXRlRW5jb2RlciA9IChzdGF0ZTogQWxidW1MaXN0R3JpZFZpZXdJbnB1dE1vZGVsKSA9PiB7XG4gIC8vIFB1c2ggdGhlIHBhZ2UgdG8gdGhlIHBhdGggYW5kIHNvcnRpbmcgb3B0aW9ucyB0byBxdWVyeSBwYXJhbXNcbiAgJHJvdXRlci5wdXNoKHtcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBwYWdlOiBzdGF0ZS5wYWdlLFxuICAgIH0sXG4gICAgcXVlcnk6IHtcbiAgICAgIHNvcnRGaWVsZDogc3RhdGUuc29ydEZpZWxkLFxuICAgICAgc29ydE9yZGVyOiBzdGF0ZS5zb3J0T3JkZXIsXG4gICAgfSxcbiAgfSk7XG59XG5cbm9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICBjb25zdCBwYWdlUGFyYW0gPSAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMucGFnZTtcbiAgY29uc3QgcGFnZSA9IHBhZ2VQYXJhbSA/IHBhcnNlSW50KHBhZ2VQYXJhbSBhcyBzdHJpbmcpIDogMTtcblxuICBjb250cm9sbGVyID0gdXNlQWxidW1MaXN0R3JpZFZpZXdDb250cm9sbGVyKHtcbiAgICBsb2FkOiBhbGJ1bUxpc3RHcmlkVmlld0xvYWRlcixcblxuICAgIGluaXRpYWxJbnB1dFN0YXRlOiB7XG4gICAgICBwYWdlLFxuICAgICAgc29ydEZpZWxkOiBBbGJ1bU9yZGVyT3B0aW9ucy5EYXRlLFxuICAgICAgc29ydE9yZGVyOiAnQXNjZW5kaW5nJyxcbiAgICB9LFxuXG4gICAgdXJsU3RhdGVEZWNvZGVyLFxuICAgIHVybFN0YXRlRW5jb2RlcixcbiAgfSk7XG5cbiAgd2F0Y2goJHJvdXRlLCAoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlLnZhbHVlKSB7XG4gICAgICBjb250cm9sbGVyPy5yZWxvYWQoKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbm9uQWN0aXZhdGVkKCgpID0+IHtcbiAgaXNBY3RpdmUudmFsdWUgPSB0cnVlO1xufSk7XG5cbi8vIHdlIGNhbm5vdCB1c2Ugb25EZWFjdGl2YXRlZCBjYWxsIGJlY2F1c2UgdGhlIHJvdXRlIHdpbGwgY2hhbmdlIGJlZm9yZVxuLy8gdGhlIGNvbXBvbmVudCBpcyBkZWFjdGl2YXRlZCwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcm91dGUgY2hhbmdlIHdhdGNoXG4vLyB0byBiZSB0cmlnZ2VyZWQgYW5kIHRoZSBjb21wb25lbnQgdG8gcmVsb2FkIGFuZCBvdmVyd3JpdGUgdGhlIG5ldyByb3V0ZVxuLy8gc28gd2UgdXNlIG9uQmVmb3JlUm91dGVMZWF2ZSBpbnN0ZWFkIHRvIGVuc3VyZSB0aGUgcm91dGUgY2hhbmdlIHdhdGNoIGlzIG5vdFxuLy8gdHJpZ2dlcmVkXG4vLyBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbi8vIH0pO1xuXG5vbkJlZm9yZVJvdXRlTGVhdmUoKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gIGlzQWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gIG5leHQoKTtcbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXVCTSxVQUFBLFdBQVcsSUFBSSxJQUFJO0FBRXpCLFVBQU0sVUFBVTtBQUNoQixVQUFNLFNBQVM7QUFDVCxVQUFBLG9CQUNKLE9BQWdELG1CQUFtQjtBQUNyRSxRQUFJLENBQUMsbUJBQW1CO0FBQ2hCLFlBQUEsSUFBSSxNQUFNLHNDQUFzQztBQUFBLElBQ3hEO0FBQ2UsV0FBTyxVQUFVLFVBQVU7QUFDMUMsUUFBSSxhQUFpRDtBQUUvQyxVQUFBLDBCQUEwQixPQUFPLFVBQXVDO0FBQzVFLFlBQU0sWUFBWSxJQUFJO0FBQUEsUUFDcEIsa0JBQWtCLDRCQUE0QjtBQUFBLE1BQUE7QUFHMUMsWUFBQSxTQUFTLE1BQU0sVUFBVSxVQUFVO0FBQUEsUUFDdkMsUUFBUSxNQUFNLE9BQU8sS0FBSztBQUFBLFFBQzFCLE9BQU87QUFBQSxRQUNQLFdBQVcsTUFBTTtBQUFBLFFBQ2pCLE1BQU0sTUFBTTtBQUFBLE1BQUEsQ0FDYjtBQUVELFVBQUksV0FBVyxVQUFhLE9BQU8sV0FBVyxRQUFXO0FBQ2pELGNBQUEsSUFBSSxNQUFNLGlCQUFpQjtBQUFBLE1BQ25DO0FBRU8sYUFBQTtBQUFBLFFBQ0wsYUFBYSxNQUFNO0FBQUEsUUFDbkIsWUFBWSxLQUFLLE9BQU0saUNBQVEsVUFBUyxLQUFLLEVBQUU7QUFBQSxRQUMvQyxRQUFRLGlDQUFRO0FBQUEsUUFFaEIsV0FBVyxNQUFNO0FBQUEsUUFDakIsV0FBVyxNQUFNO0FBQUEsTUFBQTtBQUFBLElBQ25CO0FBR0ksVUFBQSxrQkFBa0IsU0FBUyxNQUFtQztBQUc1RCxZQUFBLFlBQVksT0FBTyxPQUFPO0FBQ2hDLFlBQU0sT0FBTyxZQUFZLFNBQVMsU0FBbUIsSUFBSTtBQUVuRCxZQUFBLFlBQVksT0FBTyxNQUFNO0FBQ3pCLFlBQUEsWUFBWSxPQUFPLE1BQU07QUFFeEIsYUFBQTtBQUFBLFFBQ0w7QUFBQSxRQUNBLFdBQVcsYUFBYSxrQkFBa0I7QUFBQSxRQUMxQyxXQUFXLGFBQWE7QUFBQSxNQUFBO0FBQUEsSUFDMUIsQ0FDRDtBQUVLLFVBQUEsa0JBQWtCLENBQUMsVUFBdUM7QUFFOUQsY0FBUSxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsVUFDTixNQUFNLE1BQU07QUFBQSxRQUNkO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTCxXQUFXLE1BQU07QUFBQSxVQUNqQixXQUFXLE1BQU07QUFBQSxRQUNuQjtBQUFBLE1BQUEsQ0FDRDtBQUFBLElBQUE7QUFHSCxrQkFBYyxNQUFNO0FBQ2xCLFlBQU0sWUFBWSxRQUFRLGFBQWEsTUFBTSxPQUFPO0FBQ3BELFlBQU0sT0FBTyxZQUFZLFNBQVMsU0FBbUIsSUFBSTtBQUV6RCxtQkFBYSwrQkFBK0I7QUFBQSxRQUMxQyxNQUFNO0FBQUEsUUFFTixtQkFBbUI7QUFBQSxVQUNqQjtBQUFBLFVBQ0EsV0FBVyxrQkFBa0I7QUFBQSxVQUM3QixXQUFXO0FBQUEsUUFDYjtBQUFBLFFBRUE7QUFBQSxRQUNBO0FBQUEsTUFBQSxDQUNEO0FBRUQsWUFBTSxRQUFRLE1BQU07QUFDbEIsWUFBSSxTQUFTLE9BQU87QUFDbEIsbURBQVk7QUFBQSxRQUNkO0FBQUEsTUFBQSxDQUNEO0FBQUEsSUFBQSxDQUNGO0FBRUQsZ0JBQVksTUFBTTtBQUNoQixlQUFTLFFBQVE7QUFBQSxJQUFBLENBQ2xCO0FBVWtCLHVCQUFBLENBQUMsSUFBSSxNQUFNLFNBQVM7QUFDckMsZUFBUyxRQUFRO0FBQ1o7SUFBQSxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7In0=
