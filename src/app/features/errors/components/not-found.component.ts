import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>not-found works!</p>
  `,
})
export class NotFoundComponent {}
