import { TrackReadDto, AlbumReadDto } from 'app/backend-service-api/dist';
import ITrackMenuOption from './ITrackMenuOption';

import {
  outlinedPlaylistPlay,
  outlinedQueueMusic,
  outlinedYoutubeSearchedFor,
  outlinedAlbum,
  outlinedPerson
} from '@quasar/extras/material-icons-outlined';
import { queueService } from 'src/services/_services';
import { QueueAddMode } from 'src/services/domain/QueueService';
import { UrlUtils } from 'src/utils/UrlUtils';
import { useRouter } from 'vue-router';

// Options
export class TrackMenuOptionPlayNext extends ITrackMenuOption {
  public readonly label = 'Play next';
  public readonly icon = outlinedPlaylistPlay;

  private readonly callbacks: (() => void)[] = [];

  constructor(
    public readonly trackData: TrackReadDto,
    public readonly albumData: AlbumReadDto) {
    super();
  }

  public onClick() {
    queueService.addTrackById(this.trackData.id!, QueueAddMode.APPEND_NEXT);

    this.callbacks.forEach(callback => callback());
  }

  public addCallback(callback: () => void) {
    this.callbacks.push(callback);

    return this;
  }
}

export class TrackMenuOptionAddToQueue extends ITrackMenuOption {
  public readonly label = 'Add to queue';
  public readonly icon = outlinedQueueMusic;

  private readonly callbacks: (() => void)[] = [];

  constructor(
    public readonly trackData: TrackReadDto,
    public readonly albumData: AlbumReadDto) {
    super();
  }

  public onClick() {
    queueService.addTrackById(this.trackData.id!, QueueAddMode.APPEND_LAST);

    this.callbacks.forEach(callback => callback());
  }

  public addCallback(callback: () => void) {
    this.callbacks.push(callback);

    return this;
  }
}

export class TrackMenuOptionSearchOnYoutube extends ITrackMenuOption {
  public readonly label = 'Search on YouTube';
  public readonly icon = outlinedYoutubeSearchedFor;

  private readonly callbacks: (() => void)[] = [];

  constructor(
    public readonly trackData: TrackReadDto,
    public readonly albumData: AlbumReadDto) {
    super();
  }

  public onClick() {
    const circleName = this.albumData.albumArtist![0].name;

    UrlUtils.openUrlInNewTab(
      UrlUtils.constructYouTubeSearchQuery(
        `"${this.trackData?.name?._default}" ${this.albumData.name?._default} ${circleName}`
      )
    )

    this.callbacks.forEach(callback => callback());
  }

  public addCallback(callback: () => void) {
    this.callbacks.push(callback);

    return this;
  }
}

export class TrackMenuOptionViewAlbum extends ITrackMenuOption {
  public readonly label = 'View album';
  public readonly icon = outlinedAlbum;

  private readonly callbacks: (() => void)[] = [];

  private readonly $router = useRouter();

  constructor(
    public readonly trackData: TrackReadDto,
    public readonly albumData: AlbumReadDto) {
    super();
  }

  public onClick() {
    this.$router.push({
      name: 'Album',
      params: {
        albumId: this.albumData.id
      }
    });
  }

  public addCallback(callback: () => void) {
    this.callbacks.push(callback);

    return this;
  }
}

export class TrackMenuOptionViewCircle extends ITrackMenuOption {
  public readonly label = 'View artist';
  public readonly icon = outlinedPerson;

  private readonly callbacks: (() => void)[] = [];

  private readonly $router = useRouter();

  constructor(
    public readonly trackData: TrackReadDto,
    public readonly albumData: AlbumReadDto) {
    super();
  }

  public onClick() {
    const circleId = this.albumData.albumArtist![0].id;

    this.$router.push({
      name: 'CircleAlbums',
      params: {
        circleId: circleId,
        page: 1
      }
    });
  }

  public addCallback(callback: () => void) {
    this.callbacks.push(callback);

    return this;
  }
}

