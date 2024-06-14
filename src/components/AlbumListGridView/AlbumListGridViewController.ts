import { ref, Ref, watch } from 'vue';
import AlbumListGridViewInputModel from './models/AlbumListGridViewInputModel';
import AlbumListGridViewViewModel from './models/AlbumListGridViewViewModel';
import {
  LoadableState,
  useLoadableController,
} from 'src/utils/Loadable/LoadableController';
import { AlbumOrderOptions, SortOrder } from 'app/backend-service-api';

export type AlbumListGridViewController = {
  viewModelController: LoadableState<AlbumListGridViewViewModel>;
  inputModel: Ref<AlbumListGridViewInputModel>;

  load: (state: AlbumListGridViewInputModel) => Promise<void>;
  changePage: (page: number) => Promise<void>;
  changeSortOrder: (sortOrder: SortOrder) => Promise<void>;
  changeSortField: (sortField: AlbumOrderOptions) => Promise<void>;
};

export interface AlbumListGridViewControllerParams {
  load: (
    state: AlbumListGridViewInputModel
  ) => Promise<AlbumListGridViewViewModel>;
  initialInputState: AlbumListGridViewInputModel;
}

export default function useAlbumListGridViewController(
  parameter: AlbumListGridViewControllerParams
): AlbumListGridViewController {
  const viewModelController =
    useLoadableController<AlbumListGridViewViewModel>();
  const inputModel = ref(parameter.initialInputState);

  const load = async (state: AlbumListGridViewInputModel) => {
    console.log('Controller Loading due to load call');
    viewModelController.setLoading();
    try {
      const viewModel = await parameter.load(state);
      viewModelController.setSuccess(viewModel);
    } catch (e) {
      viewModelController.setError(e as Error);
    }
  };

  const changePage = async (page: number) => {
    inputModel.value = {
      ...inputModel.value,
      page,
    };
  };

  const changeSortOrder = async (sortOrder: SortOrder) => {
    inputModel.value = {
      ...inputModel.value,
      sortOrder,
    };
  };

  const changeSortField = async (sortField: AlbumOrderOptions) => {
    inputModel.value = {
      ...inputModel.value,
      sortField,
    };
  };

  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      console.dir({ newInputModel, oldInputModel });
      await load(newInputModel);
    },
    {
      deep: true,
    }
  );

  return {
    viewModelController,
    inputModel,

    load,
    changePage,
    changeSortOrder,
    changeSortField,
  } as AlbumListGridViewController;
}
