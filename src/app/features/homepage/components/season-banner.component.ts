import { Component } from '@angular/core';

@Component({
  selector: 'season-banner',
  imports: [],
  template: `
    <img src="{{ 'assets/Logo_Placeholder.png' }}" alt="CDL Logo" class="size-[60px]" />

    <section class="leading-[1]">
      <h5>CDL MAJOR X</h5>
      <span class="numeric text-sm"> MAR 28 - MAY 11</span>
    </section>
  `,
  host: {
    class: 'flex flex-row items-center gap-md',
  },
})
export class SeasonBannerComponent {
  /**
   * TODO:
   * - Add a way to retrieve Major info based on current year
   * - Grab the Major name
   * - Grab the Major period -> start to end dates
   */
}
