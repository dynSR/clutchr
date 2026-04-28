import { Component } from '@angular/core';
import { ConfiguredFormComponent } from '../../shared/utils/form/configured-form.component';
import { TeamFormConfig } from '../../features/teams/types/team.types';

@Component({
  selector: 'dashboard',
  imports: [ConfiguredFormComponent],
  template: `
    <configured-form [config]="TeamFormConfig" />
  `,
})
export class DashboardComponent {
  protected readonly TeamFormConfig = TeamFormConfig;
}
