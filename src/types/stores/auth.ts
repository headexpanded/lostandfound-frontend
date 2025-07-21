import type { User, AuthState, LoginForm, RegisterForm, ProfileForm, PasswordForm } from '../api/auth';

// Authentication store actions
export interface AuthActions {
  // Authentication actions
  login(credentials: LoginForm): Promise<void>;
  register(userData: RegisterForm): Promise<void>;
  logout(): Promise<void>;
  refreshToken(): Promise<void>;
  
  // User profile actions
  updateProfile(profileData: ProfileForm): Promise<void>;
  updatePassword(passwordData: PasswordForm): Promise<void>;
  
  // State management actions
  setUser(user: User | null): void;
  setToken(token: string | null): void;
  setLoading(loading: boolean): void;
  setError(error: string | null): void;
  clearError(): void;
  
  // Persistence actions
  loadFromStorage(): void;
  saveToStorage(): void;
  clearStorage(): void;
}

// Authentication store getters
export interface AuthGetters {
  // Computed properties
  isAuthenticated: boolean;
  isGuest: boolean;
  hasToken: boolean;
  userDisplayName: string;
  userInitials: string;
  
  // Permission checks
  canPostLostItems: boolean;
  canSendMessages: boolean;
  canEditProfile: boolean;
}

// Authentication store state
export interface AuthStoreState extends AuthState {
  // Additional state properties
  lastActivity: number;
  sessionTimeout: number;
  autoLogout: boolean;
}

// Complete authentication store type
export interface AuthStore extends AuthStoreState, AuthActions, AuthGetters {}

// Authentication store options for Pinia
export interface AuthStoreOptions {
  id: string;
  state: () => AuthStoreState;
  getters: AuthGetters;
  actions: AuthActions;
} 