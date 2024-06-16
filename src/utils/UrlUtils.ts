export class UrlUtils {
  static openUrlInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
