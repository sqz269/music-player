import { PlaylistReadDto, TrackReadDto } from 'app/backend-service-api/src';
import { TrackInfo } from 'src/models/TrackInfo';
import { PlaylistPageInputModel } from './models/PlaylistPageInputModel';
import { LoadableState, useLoadableController } from 'src/utils/Loadable/LoadableController';
import { PlaylistPageViewModel } from './models/PlaylistPageViewModel';
import { Ref, ref, watch } from 'vue';
import PlaylistService from 'src/services/domain/PlaylistService';
import { AlbumApi, PlaylistApi, PlaylistItemsApi, PlaylistVisibility } from 'app/backend-service-api';
import * as services from 'src/services/_services';
import { playlistService } from 'src/services/_services';

export type PlaylistController = {
  controller: LoadableState<PlaylistPageViewModel>;
  inputModel: Ref<PlaylistPageInputModel>;

  load: (state: PlaylistPageInputModel) => Promise<void>;
  changePlaylist: (playlistId: string) => Promise<void>,
  changePlaylistName: (name: string) => Promise<void>;
  changePlaylistVisibility: (visibility: PlaylistVisibility) => Promise<void>;
}

export const usePlaylistPageController = (
  initialState: PlaylistPageInputModel,
) => {
  console.log('Controller Instantiated')
  const controller = useLoadableController<PlaylistPageViewModel>();
  const inputModel = ref(initialState);

  const load = async (state: PlaylistPageInputModel) => {
    console.log('Controller Loading due to load call');
    controller.setLoading();
    const blockSize = 50;
    try {
      const playlistInfo = await playlistService.getPlaylist(state.playlistId);

      if (!playlistInfo) {
        throw new Error('Playlist not found');
      }

      const allTrackIds: string[] = [];
      while (true) {
        const tracksIds = await playlistService.getPlaylistTracks(state.playlistId, allTrackIds.length, 50);
        if (tracksIds.length === 0) {
          break;
        }

        allTrackIds.push(...tracksIds);
      }

      // Fetch actual track infos from the backend
      // Block size is 50, so we need to fetch in blocks
      const albumsApi = new AlbumApi(services.apiConfigurationProvider?.getApiConfiguration());
      const playlistTracks: TrackReadDto[] = [];
      for (let i = 0; i < allTrackIds.length; i += blockSize) {
        const block = allTrackIds.slice(i, i + blockSize);
        const tracks = await albumsApi.getTracks(
          {
            requestBody: block
          }
        )
        playlistTracks.push(...tracks.tracks!);
      }

      const viewModel = {
        playlistId: state.playlistId,
        playlistInfo,
        playlistTotalTracks: allTrackIds.length,
        playlistTracks,
        playlistTracksTransformed: playlistTracks.map((track) => {
          return TrackInfo.fromTrackReadDto(track);
        }),
      }

      controller.setSuccess(viewModel);
    } catch (e) {
      controller.setError(e as Error);
    }
  }

  const changePlaylist = async (playlistId: string) => {
    inputModel.value = {
      ...inputModel.value,
      playlistId,
    }
  }

  const changePlaylistName = async (name: string) => {
    const playlistApi = new PlaylistApi(services.apiConfigurationProvider?.getApiConfiguration());

    await playlistApi.updatePlaylistInfo(
      {
        playlistId: inputModel.value.playlistId,
        playlistInfo: {
          name,
          visibility: controller.state.value?.playlistInfo.visibility,
        }
      }
    )
  }

  const changePlaylistVisibility = async (visibility: PlaylistVisibility) => {
    const playlistApi = new PlaylistApi(services.apiConfigurationProvider?.getApiConfiguration());

    await playlistApi.updatePlaylistInfo(
      {
        playlistId: inputModel.value.playlistId,
        playlistInfo: {
          name: controller.state.value?.playlistInfo.name,
          visibility,
        }
      }
    );
  }

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

  load(initialState);

  return {
    controller,
    inputModel,
    load,
    changePlaylist,
    changePlaylistName,
    changePlaylistVisibility,
  } as PlaylistController;
}
