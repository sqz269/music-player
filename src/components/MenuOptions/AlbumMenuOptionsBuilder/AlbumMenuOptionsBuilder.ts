import { AlbumReadDto, TrackReadDto } from 'app/backend-service-api/dist';

export default class AlbumMenuOptionsBuilder {
  albumData: AlbumReadDto;
  options: IAlbumMenuOption[];

  constructor(albumData: AlbumReadDto) {
    this.albumData = albumData;
    this.options = [];
  }

  addOption(option: IAlbumMenuOption) {
    if (option) {
      this.options.push(option);
    }
    return this;
  }

  withCallback(callback: () => void) {
    if (this.options.length > 0) {
      this.options[this.options.length - 1].withCallback(callback);
    }
    return this;
  }

  build() {
    return {
      albumData: this.albumData,
      options: this.options,
    };
  }
}
