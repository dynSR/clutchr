import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FormConfigField,
  FormFieldsConfig,
  isDateField,
  isGroupField,
  isNumberField,
  isTextField,
} from './dynamic-form.config';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { DynamicFormInputErrorsComponent } from './dynamic-form-input-errors.component';

@Component({
  selector: 'app-dynamic-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DynamicFormInputComponent,
    DynamicFormInputErrorsComponent,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      @for (field of fieldsConfig.fields; track field.id) {
        @if (isGroupProperty(field)) {
          <fieldset>
            <legend>{{ field.label }}</legend>
            @for (nestedProperties of field.nestedFields; track nestedProperties.id) {
              <app-dynamic-form-input [field]="nestedProperties" />
              <app-dynamic-form-input-errors [form]="form" [field]="nestedProperties" />
            }
          </fieldset>
        } @else {
          <section role="group" class="">
            <app-dynamic-form-input [field]="field" />
            <app-dynamic-form-input-errors [form]="form" [field]="field" />
          </section>
        }
      }

      <!-- Submit button -->
      <button type="submit" class="" [disabled]="form.invalid">Submit</button>
    </form>
  `,
})
export class DynamicFormComponent implements OnInit {
  @Input({ required: true }) fieldsConfig!: FormFieldsConfig;
  protected form!: FormGroup;
  protected readonly isGroupProperty = isGroupField;

  ngOnInit() {
    this.form = this.createFormGroup(this.fieldsConfig.fields);
  }

  protected onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createFormGroup(fields: FormConfigField[]): FormGroup {
    const controls: Record<string, FormControl> = {};
    this.addFormControl(controls, fields);
    console.log(controls);
    return new FormGroup(controls);
  }

  private addFormControl(
    controls: Record<string, FormControl>,
    fields: FormConfigField[],
  ): Record<string, FormControl> {
    fields.forEach((field) => {
      if (isGroupField(field)) {
        this.addFormControl(controls, field.nestedFields);
      } else controls[field.id] = new FormControl(field.initialValue, this.buildValidators(field));
    });

    return controls;
  }

  private buildValidators(field: FormConfigField) {
    const validators = [];

    // General Input validations
    if (field.validations != undefined) {
      const validations = field.validations;
      if (validations.required) {
        validators.push(Validators.required);
      }
      if (validations.custom) {
        validators.push((control: { value: any }) => {
          const result = validations.custom!(control.value);
          return result?.valid ? null : { custom: result.error };
        });
      }
    }

    // Input Text validations
    if (isTextField(field)) {
      if (field.minLength != undefined) validators.push(Validators.minLength(field.minLength));
      if (field.maxLength != undefined) validators.push(Validators.maxLength(field.maxLength));
      if (field.pattern != undefined) validators.push(Validators.pattern(field.pattern));
    }

    // Input Number validations
    if (isNumberField(field) || isDateField(field)) {
      if (field.min != undefined) validators.push(Validators.min(Number(field.min)));
      if (field.max != undefined) validators.push(Validators.max(Number(field.max)));
    }

    return validators;
  }
}
