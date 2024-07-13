abstract class IAlbumMenuOption {
  public abstract withCallback(callback: (albumId: string) => void): IAlbumMenuOption;
}
