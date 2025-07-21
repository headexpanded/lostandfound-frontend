// Generic utility types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

export type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

// Array utility types
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

export type NonEmptyArray<T> = [T, ...T[]];

export type ArrayWithLength<T, L extends number> = T[] & { length: L };

// Function utility types
export type FunctionReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

export type FunctionParameters<T> = T extends (...args: infer P) => unknown ? P : never;

export type AsyncFunction<T> = (...args: unknown[]) => Promise<T>;

export type SyncFunction<T> = (...args: unknown[]) => T;

// Object utility types
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export type ValuesOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? T[K] : never;
}[keyof T];

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Immutable<T> = {
  readonly [P in keyof T]: T[P];
};

// String utility types
export type StringLiteral<T> = T extends string ? T : never;

export type Capitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;

export type Uncapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${R}`
  : S;

// Number utility types
export type NumberRange<F extends number, T extends number> = Exclude<
  number,
  Exclude<number, F | T>
>;

export type PositiveNumber = number & { __brand: 'PositiveNumber' };

export type NegativeNumber = number & { __brand: 'NegativeNumber' };

// Date utility types
export type DateString = string & { __brand: 'DateString' };

export type ISODateString = string & { __brand: 'ISODateString' };

export type Timestamp = number & { __brand: 'Timestamp' };

// URL utility types
export type URLString = string & { __brand: 'URLString' };

export type EmailString = string & { __brand: 'EmailString' };

export type PhoneString = string & { __brand: 'PhoneString' };

// ID utility types
export type ID = string | number;

export type UUID = string & { __brand: 'UUID' };

export type NumericID = number & { __brand: 'NumericID' };

// Status utility types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// Event utility types
export type EventHandler<T = Event> = (event: T) => void;

export type EventHandlerMap<T> = {
  [K in keyof T]: EventHandler<T[K]>;
};

// Component utility types
export type VueComponentProps<T> = T extends { props?: infer P } ? P : never;

// API utility types
export type APIResponse<T> = {
  data: T;
  message?: string;
  status: number;
};

export type APIError = {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
};

// Form utility types
export type FormData<T> = {
  [K in keyof T]: T[K];
};

export type FormErrors<T> = {
  [K in keyof T]?: string[];
};

export type FormTouched<T> = {
  [K in keyof T]?: boolean;
};

// Route utility types
export type RouteParams = Record<string, string>;

export type QueryParams = Record<string, string | string[]>;

export type RouteMeta = {
  title?: string;
  requiresAuth?: boolean;
  roles?: string[];
  permissions?: string[];
};

// Storage utility types
export type StorageKey = string & { __brand: 'StorageKey' };

export type StorageValue = string | number | boolean | object | null;

export type StorageData = Record<StorageKey, StorageValue>;

// Validation utility types
export type FormValidationResult<T> = {
  isValid: boolean;
  errors: FormErrors<T>;
  data?: T;
};

// Debounce utility types
export type DebouncedFunction<T extends (...args: unknown[]) => unknown> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
};

// Throttle utility types
export type ThrottledFunction<T extends (...args: unknown[]) => unknown> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
}; 