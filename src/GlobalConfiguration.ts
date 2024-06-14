import { Level } from "pino";

export default class GlobalConfiguration {
  public static WEB_HOST_PUBLIC_PATH = 'tlmc-player-vue';
  public static API_BASE_URL = 'https://staging-api.marisad.me';

  public static LOGGING_LEVEL: Level = 'debug';
}
