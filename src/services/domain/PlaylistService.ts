import { PlaylistVisibility } from 'app/backend-service-api';
import { PlaylistReadDto } from 'app/backend-service-api';
import { DeepReadonly, Ref } from 'vue';

export default interface PlaylistService {
  isReady: DeepReadonly<Ref<boolean>>;

  // Special playlists that are always available
  favorite: DeepReadonly<Ref<PlaylistReadDto | null>>;
  history: DeepReadonly<Ref<PlaylistReadDto | null>>;
  queue: DeepReadonly<Ref<PlaylistReadDto | null>>;

  // Regular, user created playlists
  playlists: DeepReadonly<Ref<PlaylistReadDto[]>>;

  initialize: () => Promise<void>;
  getPlaylist: (
    id: string
  ) => Promise<PlaylistReadDto | null>;
  createPlaylist: (
    name: string,
    visibiltiy?: PlaylistVisibility
  ) => Promise<void>;
  updatePlaylist: (
    playlistId: string,
    name?: string,
    visibility?: PlaylistVisibility
  ) => Promise<void>;
  deletePlaylist: (id: string) => Promise<void>;
  getPlaylistTracks: (
    playlistId: string,
    start: number,
    limit: number
  ) => Promise<string[]>;
  addTrackToPlaylist: (playlistId: string, trackIds: string[]) => Promise<void>;
  removeTrackFromPlaylist: (
    playlistId: string,
    tracksId: string[]
  ) => Promise<void>;
  isTracksInPlaylist: (
    playlistId: string,
    trackIds: string[]
  ) => Promise<Map<string, boolean>>;
  isTrackInPlaylist: (playlistId: string, trackId: string) => Promise<boolean>;
}
