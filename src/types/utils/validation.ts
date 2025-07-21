// Validation rule types
export type ValidationRule = (value: unknown) => boolean | string;

export interface ValidationRules {
  [key: string]: ValidationRule | ValidationRule[];
}

// Form validation types
export interface FormValidation {
  isValid: boolean;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  dirty: Record<string, boolean>;
}

export interface FormValidationState {
  [fieldName: string]: {
    isValid: boolean;
    errors: string[];
    touched: boolean;
    dirty: boolean;
  };
}

// Validation error types
export interface ValidationError {
  field: string;
  message: string;
  code?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Common validation rules
export interface CommonValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  email?: boolean;
  url?: boolean;
  numeric?: boolean;
  integer?: boolean;
  positive?: boolean;
  negative?: boolean;
  alpha?: boolean;
  alphanumeric?: boolean;
  date?: boolean;
  future?: boolean;
  past?: boolean;
  custom?: ValidationRule;
}

// Field validation context
export interface ValidationContext {
  field: string;
  value: unknown;
  formData: Record<string, unknown>;
  touched: boolean;
  dirty: boolean;
}

// Async validation types
export interface AsyncValidationRule {
  (value: unknown, context: ValidationContext): Promise<boolean | string>;
}

export interface AsyncValidationResult {
  isValid: boolean;
  message?: string;
  pending: boolean;
}

// Debounced validation types
export interface DebouncedValidation {
  validate: (value: unknown) => void;
  cancel: () => void;
  isPending: boolean;
}

// Validation schema types
export interface ValidationSchema {
  [fieldName: string]: CommonValidationRules | ValidationRule | ValidationRule[];
}

// Form field types
export interface FormField {
  name: string;
  value: unknown;
  rules?: ValidationRules;
  asyncRules?: AsyncValidationRule[];
  touched: boolean;
  dirty: boolean;
  isValid: boolean;
  errors: string[];
  isPending: boolean;
}

// Form types
export interface Form {
  fields: Record<string, FormField>;
  isValid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  errors: Record<string, string[]>;
  pendingFields: string[];
}

// Validation event types
export interface ValidationEvent {
  field: string;
  isValid: boolean;
  errors: string[];
  value: unknown;
}

// Validation hook return types
export interface UseValidationReturn {
  validate: (field?: string) => Promise<boolean>;
  validateField: (field: string) => Promise<boolean>;
  clearErrors: (field?: string) => void;
  setFieldError: (field: string, error: string) => void;
  reset: () => void;
  form: Form;
  isValid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  errors: Record<string, string[]>;
} 