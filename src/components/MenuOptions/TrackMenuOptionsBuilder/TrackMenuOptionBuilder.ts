import { TrackReadDto, AlbumReadDto } from 'app/backend-service-api/dist';
import ITrackMenuOption from './ITrackMenuOption';
import { TrackMenuOptionAddToQueue, TrackMenuOptionPlayNext, TrackMenuOptionSearchOnYoutube, TrackMenuOptionViewAlbum, TrackMenuOptionViewCircle } from './TrackMenuOptions';

export default class TrackMenuOptionsBuilder {
  trackData: TrackReadDto;
  albumData: AlbumReadDto;
  options: ITrackMenuOption[];

  constructor(trackData: TrackReadDto, albumData: AlbumReadDto) {
    this.trackData = trackData;
    this.albumData = albumData;
    this.options = [];
  }

  addOption(option: ITrackMenuOption) {
    if (option) {
      this.options.push(option);
    }
    return this;
  }

  addPlayNextOption() {
    this.addOption(new TrackMenuOptionPlayNext(this.trackData, this.albumData));
    return this;
  }

  addAddToQueueOption() {
    this.addOption(new TrackMenuOptionAddToQueue(this.trackData, this.albumData));
    return this;
  }

  addViewAlbumOption() {
    this.addOption(new TrackMenuOptionViewAlbum(this.trackData, this.albumData));
    return this;
  }

  addViewCircleOption() {
    this.addOption(new TrackMenuOptionViewCircle(this.trackData, this.albumData));
    return this;
  }

  addSearchOnYoutubeOption() {
    this.addOption(new TrackMenuOptionSearchOnYoutube(this.trackData, this.albumData));
    return this;
  }

  withCallback(callback: () => void) {
    if (this.options.length > 0) {
      this.options[this.options.length - 1].addCallback(callback);
    }
    return this;
  }

  build(): ITrackMenuOption[] {
    return this.options;
  }
}
