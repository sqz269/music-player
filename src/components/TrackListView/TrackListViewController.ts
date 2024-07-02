import { GetTracksFilteredRequest, SortOrder, TrackApi, TrackOrderOptions } from 'app/backend-service-api';
import { LoadableState, useLoadableController } from 'src/utils/Loadable/LoadableController';
import { ComputedRef, ref, Ref, watch } from 'vue';
import { TrackListViewInputModel } from './models/TrackListViewInputMode';
import TrackListViewViewModel from './models/TrackListViewViewModel';
import { TrackQueryFilters } from 'src/models/TrackQueryFilters';
import { apiConfigurationProvider } from 'src/services/_services';

export type TrackListViewController = {
  viewModelController: LoadableState<TrackListViewViewModel>;
  inputModel: Ref<TrackListViewInputModel>;

  urlStateDecoder?: ComputedRef<() => TrackListViewInputModel>;
  urlStateEncoder?: (state: TrackListViewInputModel) => void;

  reload: () => Promise<void>;
  changeFilter: (filter: TrackQueryFilters) => Promise<void>;
  changePage: (page: number) => Promise<void>;
  changeSortOrder: (sortOrder: SortOrder) => Promise<void>;
  changeSortField: (sortField: TrackOrderOptions) => Promise<void>;
};

export interface TrackListViewControllerParams {
  initialInputState: TrackListViewInputModel;
  urlStateDecoder: ComputedRef<TrackListViewInputModel>;
  urlStateEncoder: (state: TrackListViewInputModel) => void;
}

export default function useTrackListViewController(
  parameter: TrackListViewControllerParams
): TrackListViewController {
  const viewModelController =
    useLoadableController<TrackListViewViewModel>();
  const inputModel = ref(parameter.initialInputState);

  const _constructApiArgument = (state: TrackListViewInputModel): GetTracksFilteredRequest => {
    return {
      releaseDateBegin: state?.filters?.releaseDateBegin || undefined,
      releaseDateEnd: state?.filters?.releaseDateEnd || undefined,
      circleIds: state?.filters?.circles || undefined,
      originalAlbumIds: state?.filters?.originalAlbums || undefined,
      originalTrackIds: state?.filters?.originalTracks || undefined,
      start: (state.page - 1) * 50,
      limit: 50,
      sort: state.sortField,
      sortOrder: state.sortOrder,
    };
  }

  const _load = async (): Promise<TrackListViewViewModel> => {
    const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());

    const args = _constructApiArgument(inputModel.value);
    const results = await trackApi.getTracksFiltered(args);

    console.log('results', results);

    const totalPages = Math.ceil(results.total! / 50);

    return {
      tracks: results.tracks!,
      totalPages: totalPages,
      currentPage: inputModel.value.page,
      sortOrder: inputModel.value.sortOrder,
      sortField: inputModel.value.sortField,
    };
  }

  const load = async () => {
    console.log('Controller Loading due to load call');
    viewModelController.setLoading();
    try {
      const viewModel = await _load();
      console.log('viewModel', viewModel);
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

  const changeSortField = async (sortField: TrackOrderOptions) => {
    inputModel.value = {
      ...inputModel.value,
      sortField,
    };
  };

  const changeFilter = async (filter: TrackQueryFilters) => {
    inputModel.value = {
      ...inputModel.value,
      filters: filter,
    };
  }

  watch(
    inputModel,
    async (newInputModel, oldInputModel) => {
      console.dir({ newInputModel, oldInputModel });
      parameter.urlStateEncoder?.(newInputModel);
      await load();
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
    reload: async () => {
      await load();
    },
    changeFilter,
    changePage,
    changeSortOrder,
    changeSortField
  };
}
