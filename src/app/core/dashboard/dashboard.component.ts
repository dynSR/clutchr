import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../shared/utils/dynamic-form/dynamic-form.component';
import { TeamFormConfig } from '../../features/teams/types/team.types';

@Component({
  selector: 'dashboard',
  imports: [DynamicFormComponent],
  template: `
    <dynamic-form [fieldsConfig]="TeamFormConfig" />
  `,
})
export class DashboardComponent {
  protected readonly TeamFormConfig = TeamFormConfig;
}
