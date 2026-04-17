import { Component } from '@angular/core';
import { AppLogoComponent } from './app-logo.component';

@Component({
  selector: 'app-header',
  imports: [AppLogoComponent],
  template: `
    <app-logo class="h-full" />
    <nav aria-label="Main Navigation">
      <ul class="flex gap-md">
        <li>
          <a href="/teams">
            {{ 'Teams' }}
          </a>
        </li>
        <li>
          <a href="/players">
            {{ 'Players' }}
          </a>
        </li>
      </ul>
    </nav>
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
