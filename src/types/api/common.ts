// Common API response types
export interface ApiResponse<T = unknown> {
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

// API Error types
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// API Request configuration
export interface ApiRequestConfig {
  method: HttpMethod;
  url: string;
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

// Search and filter types
export interface SearchFilters {
  location?: string;
  keywords?: string[];
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
  radius?: number;
  lat?: number;
  lng?: number;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

// File upload types
export interface FileUpload {
  file: File;
  progress?: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  url?: string;
  error?: string;
}

// Geolocation types
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  address: string;
  coordinates?: Coordinates;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
} 