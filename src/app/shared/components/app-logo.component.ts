import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
    <a href="/home">
      <img src="{{ 'assets/Logo_Placeholder.png' }}" alt="ClutchR App Logo" class="size-[64px]" />
    </a>
  `,
  host: {
    class: 'flex flex-row items-center gap-md',
  },
})
export class AppLogoComponent {}
