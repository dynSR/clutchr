import { Component } from '@angular/core';
import { AppLogoComponent } from './app-logo.component';

@Component({
  selector: 'app-header',
  imports: [AppLogoComponent],
  template: `
    <app-logo class="h-full" />
    <p>app-header works</p>
  `,
  host: {
    class:
      'flex flex-row justify-between items-center header-height p-sm bg-neutral-900 border-b border-primary-50/20 sticky top-0 z-10',
  },
})
export class AppHeaderComponent {}
