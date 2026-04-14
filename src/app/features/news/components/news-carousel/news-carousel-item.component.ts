import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-carousel-item',
  imports: [],
  template: `
    <img
      src="{{ carouselImgSrc }}"
      alt="News carousel illustration"
      class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-xxl"
    />
  `,
})
export class NewsCarouselItemComponent {
  @Input({ required: true }) carouselImgSrc!: string;
}
