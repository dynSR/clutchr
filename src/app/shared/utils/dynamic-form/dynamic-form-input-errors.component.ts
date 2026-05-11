import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormConfigField } from './dynamic-form.config';

@Component({
  selector: 'app-dynamic-form-input-errors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  template: `
    <section role="group" class="">
      @if (
        form.get(field.id)?.invalid &&
        (form.get(field.id)?.dirty || form.get(field.id)?.touched)
      ) {
        <div class="error-message">
          @for (error of getErrors(field.id); track error) {
            <small>{{ error }}</small>
            <br />
          }
        </div>
      }
    </section>
  `,
})
export class DynamicFormInputErrorsComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) field!: FormConfigField;

  protected getErrors(controlName: string): string[] {
    const control = this.form.get(controlName);
    if (!control?.errors) return [];

    const errors: string[] = [];

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

    if (this.field.errorMessages != undefined) {
      if (control.errors['pattern']) {
        errors.push(this.field.errorMessages.pattern || 'Invalid format');
      }
      if (control.errors['custom']) {
        errors.push(this.field.errorMessages.custom || control.errors['custom']);
      }
    }

    return errors;
  }
}
