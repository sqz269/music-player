import AlbumListGridViewInputModel from './AlbumListGridViewInputModel';
import AlbumListGridViewViewModel from './AlbumListGridViewViewModel';

export interface AlbumListGridViewProps {
  transitionFunction: (
    state: AlbumListGridViewInputModel
  ) => Promise<AlbumListGridViewViewModel>;
  initialInputState: AlbumListGridViewInputModel;
}
