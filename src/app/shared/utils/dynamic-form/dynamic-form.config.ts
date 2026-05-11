export enum FormFieldType {
  Text,
  Number,
  Select,
  Checkbox,
  Color,
  Date,
  Group,
}

interface BaseField {
  id: string;
  type: FormFieldType;
  label: string;
  initialValue?: string | number | boolean;
  validations?: {
    required?: boolean;
    custom?: (value: any) => { valid: boolean; error: string };
  };
  errorMessages?: {
    pattern?: string;
    custom?: string;
  };
}

export interface TextField {
  type: FormFieldType.Text;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export function isTextField(field: BaseField): field is BaseField & TextField {
  return field.type === FormFieldType.Text;
}

export interface NumberField {
  type: FormFieldType.Number;
  min?: number;
  max?: number;
  step?: number;
}

export function isNumberField(
  field: BaseField,
): field is BaseField & NumberField {
  return field.type === FormFieldType.Number;
}

export interface SelectField {
  type: FormFieldType.Select;
  options: { value: any; label: string }[];
}

export function isSelectField(
  field: BaseField,
): field is BaseField & SelectField {
  return field.type === FormFieldType.Select;
}

export interface CheckboxField {
  type: FormFieldType.Checkbox;
}

export function isCheckboxField(
  field: BaseField,
): field is BaseField & CheckboxField {
  return field.type === FormFieldType.Checkbox;
}

export interface ColorField {
  type: FormFieldType.Color;
}

export function isColorField(field: BaseField): field is BaseField & ColorField {
  return field.type === FormFieldType.Color;
}

export interface DateField {
  type: FormFieldType.Date;
  min?: Date | string;
  max?: Date | string;
}

export function isDateField(field: BaseField): field is BaseField & DateField {
  return field.type === FormFieldType.Date;
}

export type GroupField = Pick<BaseField, 'label'> & {
  type: FormFieldType.Group;
  nestedFields: Exclude<FormConfigField, GroupField>[];
};

export function isGroupField(field: BaseField): field is BaseField & GroupField {
  return field.type === FormFieldType.Group;
}

export type FormConfigField = BaseField &
  (
    | TextField
    | NumberField
    | SelectField
    | CheckboxField
    | ColorField
    | DateField
    | GroupField
    );

export interface FormFieldsConfig {
  fields: FormConfigField[];
}
