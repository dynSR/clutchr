import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-serveur-500',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>serveur-error works!</p>
  `
})
export class ServeurErrorComponent {}
