import { AssetReadDto } from 'app/backend-service-api/dist';

export default class AssetUtils {
  static downloadAsset(asset: AssetReadDto): void {
    const a = document.createElement('a');
    a.href = `${asset.url}?download=true`;
    a.target = '_blank';
    a.click();
  }

  static openAssetInNewTab(asset: AssetReadDto): void {
    window.open(asset.url, '_blank');
  }
}
