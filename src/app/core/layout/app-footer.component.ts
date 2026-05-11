import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: ` <p>app-footer works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {}
