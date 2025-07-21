// Common event types
export interface BaseEvent {
  target: EventTarget;
  currentTarget: EventTarget;
  preventDefault(): void;
  stopPropagation(): void;
}

// Form events
export interface FormEvent extends BaseEvent {
  target: HTMLFormElement;
}

export interface InputEvent extends BaseEvent {
  target: HTMLInputElement;
  data?: string;
  inputType: string;
}

export interface ChangeEvent extends BaseEvent {
  target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
}

// Button events
export interface ClickEvent extends BaseEvent {
  target: HTMLElement;
  clientX: number;
  clientY: number;
  button: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

// Keyboard events
export interface KeyEvent extends BaseEvent {
  key: string;
  code: string;
  keyCode: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  repeat: boolean;
}

export interface KeyDownEvent extends KeyEvent {}
export interface KeyUpEvent extends KeyEvent {}
export interface KeyPressEvent extends KeyEvent {}

// Focus events
export interface FocusEvent extends BaseEvent {
  target: HTMLElement;
  relatedTarget: HTMLElement | null;
}

export interface BlurEvent extends FocusEvent {}

// Mouse events
export interface MouseEvent extends BaseEvent {
  target: HTMLElement;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;
  button: number;
  buttons: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

export interface MouseEnterEvent extends MouseEvent {}
export interface MouseLeaveEvent extends MouseEvent {}
export interface MouseOverEvent extends MouseEvent {}
export interface MouseOutEvent extends MouseEvent {}

// Touch events
export interface TouchEvent extends BaseEvent {
  target: HTMLElement;
  touches: TouchList;
  targetTouches: TouchList;
  changedTouches: TouchList;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

// File events
export interface FileEvent extends BaseEvent {
  target: HTMLInputElement;
  files: FileList | null;
}

// Custom component events
export interface ModalEvent {
  show: boolean;
}

export interface SearchEvent {
  query: string;
  suggestions?: string[];
}

export interface FilterEvent {
  filters: Record<string, unknown>;
  applied: boolean;
}

export interface ImageUploadEvent {
  files: File[];
  progress?: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

export interface PaginationEvent {
  page: number;
  perPage: number;
  total: number;
}

export interface SortEvent {
  field: string;
  direction: 'asc' | 'desc';
}

// Vue specific events
export interface VueEvent<T = unknown> {
  value: T;
  event?: Event;
}

// Emit function types
export type EmitFn<T = Record<string, unknown>> = (event: keyof T, ...args: unknown[]) => void; 