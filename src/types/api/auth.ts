// User types
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
}

// Authentication response types
export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}

export interface LoginResponse extends AuthResponse {
  message: 'User logged in successfully';
}

export interface RegisterResponse extends AuthResponse {
  message: 'User registered successfully';
}

export interface LogoutResponse {
  message: 'User logged out successfully';
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ProfileForm {
  name: string;
  email: string;
}

export interface PasswordForm {
  current_password: string;
  password: string;
  password_confirmation: string;
}

// Authentication state
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Permission types
export interface Permission {
  id: number;
  name: string;
  guard_name: string;
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  permissions: Permission[];
}

// Two-factor authentication types
export interface TwoFactorAuth {
  enabled: boolean;
  qr_code?: string;
  recovery_codes?: string[];
  secret_key?: string;
}

export interface TwoFactorChallenge {
  code: string;
  recovery_code?: string;
} 