import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicFormComponent } from '../../shared/utils/dynamic-form/dynamic-form.component';
import { TeamFormConfig } from '../../features/teams/types/team.types';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DynamicFormComponent],
  template: `
    <dynamic-form [fieldsConfig]="TeamFormConfig" />
  `,
})
export class DashboardComponent {
  protected readonly TeamFormConfig = TeamFormConfig;
}
