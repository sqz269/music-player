import { ref, Ref, watch, onMounted, ComputedRef } from 'vue';
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

  urlStateDecoder?: ComputedRef<() => AlbumListGridViewInputModel>;
  urlStateEncoder?: (state: AlbumListGridViewInputModel) => void;

  load: (state: AlbumListGridViewInputModel) => Promise<void>;
  reload: () => Promise<void>;
  changePage: (page: number) => Promise<void>;
  changeSortOrder: (sortOrder: SortOrder) => Promise<void>;
  changeSortField: (sortField: AlbumOrderOptions) => Promise<void>;
};

export interface AlbumListGridViewControllerParams {
  load: (
    state: AlbumListGridViewInputModel
  ) => Promise<AlbumListGridViewViewModel>;
  initialInputState: AlbumListGridViewInputModel;
  urlStateDecoder: ComputedRef<AlbumListGridViewInputModel>;
  urlStateEncoder: (state: AlbumListGridViewInputModel) => void;
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

  const reload = async () => {
    // Decode the current url state
    if (parameter.urlStateDecoder) {
      console.log('Controller Loading due to reload call');
      inputModel.value = parameter.urlStateDecoder.value;
    }

    await load(inputModel.value);
  }

  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      console.dir({ newInputModel, oldInputModel });
      parameter.urlStateEncoder?.(newInputModel);
      await load(newInputModel);
    },
    {
      deep: true,
    }
  );

  // First load, if urlStateDecoder is not provided,
  // then load the initial state, otherwise, load the state from the urlStateDecoder
  if (parameter.urlStateDecoder) {
    console.log('Controller Loading due to urlStateDecoder change');
    inputModel.value = parameter.urlStateDecoder.value;
  } else {
    console.log('Controller Loading due to onMounted');
    inputModel.value = parameter.initialInputState;
  }

  return {
    viewModelController,
    inputModel,

    load,
    reload,
    changePage,
    changeSortOrder,
    changeSortField,
  };
}
