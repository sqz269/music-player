import { Ref } from 'vue';

export default interface AuthenticationService {
  isInitialized: Ref<boolean>;
  isAuthenticated: Ref<boolean>;

  initialize(publicPath: string): Promise<void>;
  restoreSession(): Promise<boolean>;
  login(): Promise<boolean>;
  logout(): Promise<void>;
  signup(): Promise<void>;

  getUserId(): string | null;

  isAccessTokenExpired(): boolean;
  getAccessToken(): string | null;
  getAccessTokenParsed(): Record<string, unknown> | null;
  refreshAccessToken(): Promise<boolean>;

  getRefreshToken(): string | null;
}
