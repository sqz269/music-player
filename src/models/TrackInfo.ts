import { CircleReadDto, TrackReadDto } from 'app/backend-service-api';
import { Duration } from './Duration';
import { ThumbnailReadDto } from 'app/backend-service-api';

export class CircleInfo {
  constructor(public id: string, public name: string) { }

  public static fromCircleReadDto(dto: CircleReadDto): CircleInfo {
    return new CircleInfo(dto.id!, dto.name!);
  }
}

export class Thumbnails {
  constructor(
    public tiny: string,
    public small: string,
    public medium: string,
    public large: string,
    public original: string
  ) { }

  public entries(): [string, string][] {
    return [
      ['tiny', this.tiny],
      ['small', this.small],
      ['medium', this.medium],
      ['large', this.large],
      ['original', this.original],
    ];
  }

  public static fromThumbnailsDto(dto?: ThumbnailReadDto): Thumbnails | null {
    if (!dto) {
      return null;
    }

    return new Thumbnails(
      dto.tiny!.url!,
      dto.small!.url!,
      dto.medium!.url!,
      dto.large!.url!,
      dto.original!.url!
    );
  }
}

export class TrackInfo {
  static trackAssetBaseUrl =
    'https://api.marisad.me/api/asset/track/{id}';

  constructor(
    public id: string,
    public name: string,
    public circle: CircleInfo[],
    public albumId: string,
    public albumName: string,
    public duration: Duration,
    public audioUrl: string,
    public thumbnails: Thumbnails | null = null
  ) { }

  public static fromTrackReadDto(dto: TrackReadDto): TrackInfo {
    const circles =
      dto?.album?.albumArtist?.map((circle) =>
        CircleInfo.fromCircleReadDto(circle)
      ) || [];

    const audioUrl = this.trackAssetBaseUrl.replace('{id}', dto.id!);

    return new TrackInfo(
      dto.id!,
      dto.name?._default || '',
      circles,
      dto.album!.id!,
      dto.album?.name?._default || '',
      Duration.fromTimespan(dto.duration!),
      audioUrl!,
      Thumbnails.fromThumbnailsDto(dto.album?.thumbnail)
    );
  }
}
