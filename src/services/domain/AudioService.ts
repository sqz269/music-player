import { Duration } from 'src/models/Duration';
import { DeepReadonly, Ref } from 'vue';

export enum PlaybackEvents {}

export enum AudioEvents {}

export default interface AudioService {
  isPlaying: DeepReadonly<Ref<boolean>>;
  duration: DeepReadonly<Ref<Duration | null>>;
  position: DeepReadonly<Ref<Duration | null>>;
  bufferPosition: DeepReadonly<Ref<Duration | null>>;

  volume: DeepReadonly<Ref<number>>;

  playbackCompletedStream: DeepReadonly<Ref<boolean>>;
  errorStream: DeepReadonly<Ref<string | null>>;

  initialize: () => Promise<void>;

  play: (src: string) => Promise<Duration>;
  pause: () => Promise<void>;
  togglePause: () => Promise<void>;
  resume: () => Promise<void>;
  stop: () => Promise<void>;

  setVolume: (volume: number) => Promise<void>;
  getVolume: () => Promise<number>;

  seek: (position: Duration) => Promise<void>;
}
