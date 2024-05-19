import { CircleReadDto, OriginalAlbumReadDto, OriginalTrackReadDto } from 'app/backend-service-api/dist';
import { LoadableState } from 'src/utils/Loadable/LoadableController';
import { Ref } from 'vue';

export default interface GlobalStaticDataProvider {
  initialize(): Promise<void>;

  originalAlbums: LoadableState<OriginalAlbumReadDto[]>;
  originalTracks: LoadableState<OriginalTrackReadDto[]>;

  circles: LoadableState<CircleReadDto[]>;
}
