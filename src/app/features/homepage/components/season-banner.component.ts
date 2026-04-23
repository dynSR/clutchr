import { Component } from '@angular/core';
import { LinkFlavourText } from '../../../shared/enums/link-flavour-text.enum';

@Component({
  selector: 'season-banner',
  imports: [],
  template: `
    <img src="{{ 'assets/Logo_Placeholder.png' }}" alt="CDL Logo" class="size-[60px]" />

    <section class="flex flex-col leading-[1]">
      <h4>{{ 'Major name' }}</h4>
      <small class="numeric text-sm">{{ 'Major period' }}</small>
      <a href="" class="underline">
        <small>
          {{ LinkFlavourTextEnum.MoreInfo }}
        </small>
      </a>
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
  protected readonly LinkFlavourTextEnum = LinkFlavourText;
}
