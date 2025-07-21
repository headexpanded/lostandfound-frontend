// Slot types for component composition
export interface BaseSlots {
  default?: () => unknown;
}

// Card component slots
export interface CardSlots extends BaseSlots {
  header?: () => unknown;
  body?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
}

// Modal component slots
export interface ModalSlots extends BaseSlots {
  header?: () => unknown;
  body?: () => unknown;
  footer?: () => unknown;
  close?: () => unknown;
}

// Form component slots
export interface FormSlots extends BaseSlots {
  header?: () => unknown;
  body?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
  submit?: () => unknown;
  cancel?: () => unknown;
}

// List component slots
export interface ListSlots<T = unknown> extends BaseSlots {
  item?: (props: { item: T; index: number }) => unknown;
  header?: () => unknown;
  footer?: () => unknown;
  empty?: () => unknown;
  loading?: () => unknown;
  error?: () => unknown;
}

// Table component slots
export interface TableSlots<T = unknown> extends BaseSlots {
  header?: () => unknown;
  body?: () => unknown;
  footer?: () => unknown;
  row?: (props: { item: T; index: number }) => unknown;
  cell?: (props: { item: T; column: string; value: unknown }) => unknown;
  empty?: () => unknown;
  loading?: () => unknown;
  error?: () => unknown;
}

// Navigation component slots
export interface NavigationSlots extends BaseSlots {
  brand?: () => unknown;
  left?: () => unknown;
  center?: () => unknown;
  right?: () => unknown;
  user?: () => unknown;
}

// Layout component slots
export interface LayoutSlots extends BaseSlots {
  header?: () => unknown;
  sidebar?: () => unknown;
  main?: () => unknown;
  footer?: () => unknown;
  drawer?: () => unknown;
}

// Page component slots
export interface PageSlots extends BaseSlots {
  header?: () => unknown;
  content?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
}

// Lost item component slots
export interface LostItemSlots extends BaseSlots {
  header?: () => unknown;
  content?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
  images?: () => unknown;
  details?: () => unknown;
  contact?: () => unknown;
}

// Message component slots
export interface MessageSlots extends BaseSlots {
  header?: () => unknown;
  content?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
  avatar?: () => unknown;
  timestamp?: () => unknown;
}

// Search component slots
export interface SearchSlots extends BaseSlots {
  input?: () => unknown;
  suggestions?: () => unknown;
  filters?: () => unknown;
  results?: () => unknown;
  empty?: () => unknown;
  loading?: () => unknown;
}

// Filter component slots
export interface FilterSlots extends BaseSlots {
  header?: () => unknown;
  body?: () => unknown;
  footer?: () => unknown;
  actions?: () => unknown;
  clear?: () => unknown;
  apply?: () => unknown;
}

// Image upload component slots
export interface ImageUploadSlots extends BaseSlots {
  dropzone?: () => unknown;
  preview?: () => unknown;
  progress?: () => unknown;
  error?: () => unknown;
}

// Error component slots
export interface ErrorSlots extends BaseSlots {
  icon?: () => unknown;
  title?: () => unknown;
  message?: () => unknown;
  actions?: () => unknown;
}

// Loading component slots
export interface LoadingSlots extends BaseSlots {
  spinner?: () => unknown;
  message?: () => unknown;
}

// Empty state component slots
export interface EmptyStateSlots extends BaseSlots {
  icon?: () => unknown;
  title?: () => unknown;
  message?: () => unknown;
  actions?: () => unknown;
}

// Utility types for slot props
export interface SlotProps<T = unknown> {
  item?: T;
  index?: number;
  column?: string;
  value?: unknown;
  [key: string]: unknown;
}

// Slot function type
export type SlotFn<T = unknown> = (props?: SlotProps<T>) => unknown; 