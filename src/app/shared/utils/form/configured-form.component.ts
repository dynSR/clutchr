import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  CheckboxFieldConfig,
  ColorFieldConfig,
  DateFieldConfig,
  FormFieldConfig,
  NumberFieldConfig,
  SelectFieldConfig,
  TextFieldConfig,
} from './form-field.config';

@Component({
  selector: 'configured-form',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      @for (field of config; track field.key) {
        <div class="form-group">
          <label [for]="field.key">{{ field.label }}</label>

          <!-- Text Input -->
          @if (isTextField(field)) {
            <input
              [id]="field.key"
              type="text"
              [formControlName]="field.key"
              [placeholder]="field.placeholder"
              class="form-control"
            />
          }

          <!-- Number Input -->
          @if (isNumberField(field)) {
            <input
              [id]="field.key"
              type="number"
              [formControlName]="field.key"
              [step]="field.step"
              class="form-control"
            />
          }

          <!-- Select Input -->
          @if (isSelectField(field)) {
            <select [id]="field.key" [formControlName]="field.key" class="form-control">
              @for (option of field.options; track option.value) {
                <option [value]="option.value">{{ option.label }}</option>
              }
            </select>
          }

          <!-- Checkbox Input -->
          @if (isCheckboxField(field)) {
            <input
              [id]="field.key"
              type="checkbox"
              [formControlName]="field.key"
              class="form-check-input"
            />
          }

          <!-- Color Input -->
          @if (isColorField(field)) {
            <input
              [id]="field.key"
              type="color"
              [formControlName]="field.key"
              class="form-check-input"
            />
          }

          <!-- Date Input -->
          @if (isDateField(field)) {
            <input
              [id]="field.key"
              type="date"
              [formControlName]="field.key"
              class="form-check-input"
            />
          }

          <!-- Errors dynamic display -->
          @if (form.get(field.key)?.invalid &&
          (form.get(field.key)?.dirty || form.get(field.key)?.touched)) {
            <div class="error-message">
              @for (error of getErrors(field.key); track error) {
                <small>{{ error }}</small>
                <br />
              }
            </div>
          }
        </div>
      }

      <!-- Submit button -->
      <button type="submit"
              class=""
              [disabled]="form.invalid"
      >
        Submit
      </button>
    </form>
  `,
})
export class ConfiguredFormComponent implements OnInit {
  @Input({ required: true }) config!: FormFieldConfig[];
  protected form!: FormGroup;

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  protected getErrors(controlName: string): Array<string> {
    const control = this.form.get(controlName);
    if (!control?.errors) return [];

    const errors: string[] = [];
    const field = this.config.find((f) => f.key === controlName);
    if (!field) return [];

    if (control.errors['required']) {
      errors.push('Ce champ est obligatoire');
    }
    if (control.errors['min']) {
      errors.push(`La valeur doit être supérieure ou égale à ${control.errors['min'].min}.`);
    }
    if (control.errors['max']) {
      errors.push(`La valeur doit être inférieure ou égale à ${control.errors['max'].max}.`);
    }
    if (control.errors['minlength']) {
      errors.push(`Minimum ${control.errors['minlength'].requiredLength} caractères`);
    }
    if (control.errors['maxlength']) {
      errors.push(`Maximum ${control.errors['maxlength'].requiredLength} caractères`);
    }
    if (control.errors['pattern']) {
      errors.push(field.errorMessages.pattern || 'Format invalide');
    }
    if (control.errors['custom']) {
      errors.push(field.errorMessages.custom || control.errors['custom']);
    }

    return errors;
  }

  protected onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  protected isTextField(field: FormFieldConfig): field is TextFieldConfig & FormFieldConfig {
    return field.type === 'text';
  }

  protected isNumberField(field: FormFieldConfig): field is NumberFieldConfig & FormFieldConfig {
    return field.type === 'number';
  }

  protected isSelectField(field: FormFieldConfig): field is SelectFieldConfig & FormFieldConfig {
    return field.type === 'select';
  }

  protected isCheckboxField(
    field: FormFieldConfig,
  ): field is CheckboxFieldConfig & FormFieldConfig {
    return field.type === 'checkbox';
  }

  protected isColorField(field: FormFieldConfig): field is ColorFieldConfig & FormFieldConfig {
    return field.type === 'color';
  }

  protected isDateField(field: FormFieldConfig): field is DateFieldConfig & FormFieldConfig {
    return field.type === 'date';
  }

  private createFormGroup(): FormGroup {
    const group: Record<string, FormControl> = {};
    this.config.forEach((field) => {
      group[field.key] = new FormControl(field.initialValue, this.buildValidators(field));
    });
    console.log(group);
    return new FormGroup(group);
  }

  private buildValidators(field: FormFieldConfig) {
    const validators = [];

    // General Input validations
    if (field.validations.required) {
      validators.push(Validators.required);
    }
    if (field.validations.custom) {
      validators.push((control: { value: any }) => {
        const result = field.validations.custom!(control.value);
        return result.valid ? null : { custom: result.error };
      });
    }

    // Input Text validations
    if (field.type === 'text') {
      if (field.minLength != undefined) validators.push(Validators.minLength(field.minLength));
      if (field.maxLength != undefined) validators.push(Validators.maxLength(field.maxLength));
      if (field.pattern != undefined) validators.push(Validators.pattern(field.pattern));
    }

    // Input Number validations
    if (field.type === 'number' || field.type === 'date') {
      if (field.min != undefined) validators.push(Validators.min(Number(field.min)));
      if (field.max != undefined) validators.push(Validators.max(Number(field.max)));
    }

    return validators;
  }
}
