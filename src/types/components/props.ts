// Base component props
export interface BaseComponentProps {
  class?: string;
  style?: string | Record<string, string>;
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconRight?: boolean;
  round?: boolean;
  flat?: boolean;
  unelevated?: boolean;
  outline?: boolean;
  square?: boolean;
  dense?: boolean;
  noCaps?: boolean;
  noWrap?: boolean;
  align?: 'left' | 'center' | 'right';
  stack?: boolean;
  stretch?: boolean;
  label?: string;
}

// Input component props
export interface InputProps extends BaseComponentProps {
  modelValue?: string | number;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  clearable?: boolean;
  autofocus?: boolean;
  autocomplete?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  dense?: boolean;
  outlined?: boolean;
  filled?: boolean;
  borderless?: boolean;
  standout?: boolean;
  square?: boolean;
  rounded?: boolean;
  lazyRules?: boolean;
  rules?: Array<(val: string) => boolean | string>;
}

// Card component props
export interface CardProps extends BaseComponentProps {
  flat?: boolean;
  bordered?: boolean;
  square?: boolean;
  elevated?: boolean;
  clickable?: boolean;
  dark?: boolean;
  tag?: string;
}

// Modal component props
export interface ModalProps extends BaseComponentProps {
  modelValue: boolean;
  persistent?: boolean;
  maximized?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  noBackdropDismiss?: boolean;
  noEscDismiss?: boolean;
  noRouteDismiss?: boolean;
  noShake?: boolean;
  transitionShow?: string;
  transitionHide?: string;
  contentClass?: string;
  contentStyle?: string | Record<string, string>;
}

// Loading component props
export interface LoadingProps extends BaseComponentProps {
  size?: string;
  color?: string;
  thickness?: number;
  speed?: number;
  delay?: number;
}

// Error component props
export interface ErrorProps extends BaseComponentProps {
  title?: string;
  message?: string;
  icon?: string;
  actionLabel?: string;
  onAction?: () => void;
}

// Empty state component props
export interface EmptyStateProps extends BaseComponentProps {
  title?: string;
  message?: string;
  icon?: string;
  actionLabel?: string;
  onAction?: () => void;
}

// Image upload component props
export interface ImageUploadProps extends BaseComponentProps {
  modelValue: File[];
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in bytes
  accept?: string;
  disabled?: boolean;
  loading?: boolean;
  preview?: boolean;
  dragAndDrop?: boolean;
  autoUpload?: boolean;
}

// Search component props
export interface SearchProps extends BaseComponentProps {
  modelValue: string;
  placeholder?: string;
  debounce?: number;
  clearable?: boolean;
  loading?: boolean;
  suggestions?: string[];
  maxSuggestions?: number;
}

// Filter component props
export interface FilterProps extends BaseComponentProps {
  modelValue: Record<string, unknown>;
  filters: FilterOption[];
  collapsed?: boolean;
  clearable?: boolean;
}

export interface FilterOption {
  key: string;
  label: string;
  type: 'text' | 'select' | 'multiselect' | 'date' | 'daterange' | 'number' | 'range' | 'checkbox';
  options?: Array<{ value: string | number; label: string }>;
  placeholder?: string;
  multiple?: boolean;
  min?: number;
  max?: number;
  step?: number;
} 