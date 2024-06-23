import { CircleReadDto, Configuration, OriginalAlbumReadDto, OriginalTrackReadDto, CircleApi, OriginalAlbumApi } from 'app/backend-service-api';
import ApiConfigurationProvider from '../domain/ApiConfigurationProvider';
import GlobalStaticDataProvider from '../domain/GlobalStaticDataProvider';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';

export default function useApiStaticDataProvider(
  apiConfigProvider: ApiConfigurationProvider<Configuration>,
): GlobalStaticDataProvider {
  const initialize = async () => {
    console.log('Initializing ApiStaticDataProvider');

    await _initOriginalAlbums(apiConfigProvider);
    await _initOriginalTracks(apiConfigProvider);
    await _initCircles(apiConfigProvider);
  };

  const _initOriginalAlbums = async (
    apiConfigProvider: ApiConfigurationProvider<Configuration>
  ) => {
    console.log('Initializing OriginalAlbums');

    originalAlbums.setLoading();
    const api = new OriginalAlbumApi(apiConfigProvider.getApiConfigurationWithAuth());
    const fetched: OriginalAlbumReadDto[] = [];
    try {
      let start = 0;
      const limit = 50;

      do {
        const result = await api.getOriginalAlbums({ limit, start });
        fetched.push(...result);
        start += limit;
      } while (fetched.length % limit === 0);
    } catch (e) {
      originalAlbums.setError(e as Error);
      return;
    }

    originalAlbums.setSuccess(fetched);
  }

  const _initOriginalTracks = async (
    apiConfigProvider: ApiConfigurationProvider<Configuration>
  ) => {
    console.log('Initializing OriginalTracks');

    originalTracks.setLoading();
    const api = new OriginalAlbumApi(apiConfigProvider.getApiConfigurationWithAuth());

    const fetched: OriginalTrackReadDto[] = [];

    try {
      let start = 0;
      const limit = 100;

      do {
        const result = await api.getOriginalTracks({ limit, start });
        fetched.push(...result);
        start += limit;
      } while (fetched.length % limit === 0);
    } catch (e) {
      originalTracks.setError(e as Error);
      return;
    }

    originalTracks.setSuccess(fetched);
  }

  const _initCircles = async (
    apiConfigProvider: ApiConfigurationProvider<Configuration>
  ) => {
    console.log('Initializing Circles');

    circles.setLoading();
    const api = new CircleApi(apiConfigProvider.getApiConfigurationWithAuth());

    const fetched: CircleReadDto[] = [];

    try {
      let start = 0;
      const limit = 200;

      do {
        const result = await api.getCircles({ limit, start });
        fetched.push(...result);
        start += limit;
      } while (fetched.length % limit === 0);
    } catch (e) {
      circles.setError(e as Error);
      return;
    }

    circles.setSuccess(fetched);
  }

  const originalAlbums = useLoadableController<OriginalAlbumReadDto[]>();
  const originalTracks = useLoadableController<OriginalTrackReadDto[]>();

  const circles = useLoadableController<CircleReadDto[]>();

  return {
    initialize,

    originalAlbums,
    originalTracks,

    circles,
  };
}
