import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './shared/components/app-header.component';
import './shared/extensions/extensions.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
})
export class App {}
