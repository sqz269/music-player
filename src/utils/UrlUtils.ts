export class UrlUtils {
  static openUrlInNewTab(url: string): void {
    window.open(url, '_blank');
  }

  static constructYouTubeSearchQuery(query: string): string {
    return `https://www.youtube.com/results?search_query=${query}`;
  }
}
