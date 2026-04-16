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
      'flex flex-row justify-between items-center ' +
      'sticky top-0 header-height z-header ' +
      'p-sm bg-neutral-950 border-b border-primary-50/20 ' +
      'shadow-2xl',
  },
})
export class AppHeaderComponent {}
