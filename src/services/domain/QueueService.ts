import QueuedTrack from 'src/models/QueuedTrack';
import { DeepReadonly, Ref } from 'vue';

export enum RepeatMode {
  OFF = 'off',
  ONE = 'one',
  ALL = 'all',
}

export default interface QueueService {
  queue: DeepReadonly<Ref<QueuedTrack[]>>;

  currentIndex: DeepReadonly<Ref<number | null>>;
  currentTrack: DeepReadonly<Ref<QueuedTrack | null>>;
  isCurrentTrackInFavorite: DeepReadonly<Ref<boolean>>;

  isShuffled: DeepReadonly<Ref<boolean>>;
  repeatMode: DeepReadonly<Ref<RepeatMode>>;

  hasNext: DeepReadonly<Ref<boolean>>;
  hasPrevious: DeepReadonly<Ref<boolean>>;

  initialize(): Promise<void>;

  remainingTracksCount(): number;

  addTracksByIds(
    trackIds: string[],
    playImmediately?: boolean,
    group?: string,
    position?: number
  ): Promise<number>;

  addTrackById(
    trackId: string,
    playImmediately?: boolean,
    group?: string,
    position?: number
  ): Promise<number>;

  removeTrackByItemId(itemId: string): QueuedTrack | null;
  removeTrackByIndex(index: number): QueuedTrack | null;
  removeTracksByGroup(group: string, futureOnly: boolean): QueuedTrack[];

  clear(): void;

  reorderQueue(fromIndex: number, toIndex: number): void;

  shuffle(): void;
  unshuffle(): void;

  skipTo(index: number): Promise<void>;

  playNext(): Promise<void>;
  playPrevious(): Promise<void>;
}
