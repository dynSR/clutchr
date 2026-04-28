export type TextFieldConfig = {
  type: 'text';
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type NumberFieldConfig = {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
};

export type SelectFieldConfig = {
  type: 'select';
  options: { value: any; label: string }[];
};

export type CheckboxFieldConfig = {
  type: 'checkbox';
};

export type ColorFieldConfig = {
  type: 'color';
};

export type DateFieldConfig = {
  type: 'date';
  min?: Date | string;
  max?: Date | string;
};

export type FormFieldConfig = {
  key: string;
  label: string;
  validations: {
    required?: boolean;
    custom?: (value: any) => { valid: boolean; error: string };
  };
  errorMessages: {
    required?: string;
    min?: string;
    max?: string;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
    custom?: string;
  };
  initialValue?: string | number | boolean;
} & (
  | TextFieldConfig
  | NumberFieldConfig
  | SelectFieldConfig
  | CheckboxFieldConfig
  | ColorFieldConfig
  | DateFieldConfig
);
