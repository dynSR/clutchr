import { Component, inject, Input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FormConfigField,
  isCheckboxField,
  isColorField,
  isDateField,
  isNumberField,
  isSelectField,
  isTextField,
} from './dynamic-form.config';

@Component({
  selector: 'dynamic-form-input',
  imports: [ReactiveFormsModule, CommonModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  template: `
    <section role="group" class="">
      <label [for]="field.id">{{ field.label }}</label>

      <!-- Text Input -->
      @if (isTextProperty(field)) {
        <input
          [id]="field.id"
          type="text"
          [formControlName]="field.id"
          [placeholder]="field.placeholder"
          class=""
        />
      }

      <!-- Number Input -->
      @if (isNumberProperty(field)) {
        <input
          [id]="field.id"
          type="number"
          [formControlName]="field.id"
          [step]="field.step"
          class=""
        />
      }

      <!-- Select Input -->
      @if (isSelectProperty(field)) {
        <select [id]="field.id" [formControlName]="field.id" class="">
          @for (option of field.options; track option.value) {
            <option [value]="option.value">{{ option.label }}</option>
          }
        </select>
      }

      <!-- Checkbox Input -->
      @if (isCheckboxProperty(field)) {
        <input
          [id]="field.id"
          type="checkbox"
          [formControlName]="field.id"
          class="form-check-input"
        />
      }

      <!-- Color Input -->
      @if (isColorProperty(field)) {
        <input
          [id]="field.id"
          type="color"
          [formControlName]="field.id"
          class="form-check-input"
        />
      }

      <!-- Date Input -->
      @if (isDateProperty(field)) {
        <input
          [id]="field.id"
          type="date"
          [formControlName]="field.id"
          class="form-check-input"
        />
      }
    </section>
  `,
})
export class DynamicFormInputComponent {
  @Input({ required: true }) field!: FormConfigField;
  protected readonly isDateProperty = isDateField;
  protected readonly isColorProperty = isColorField;
  protected readonly isCheckboxProperty = isCheckboxField;
  protected readonly isSelectProperty = isSelectField;
  protected readonly isNumberProperty = isNumberField;
  protected readonly isTextProperty = isTextField;
}
