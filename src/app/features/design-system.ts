import {Component} from '@angular/core';

@Component({
  selector: 'design-system',
  imports: [],
  template: `
    <section class="flex flex-col w-fit">
      <h1>H1 content</h1>
      <h2>H2 content</h2>
      <h3>H3 content</h3>
      <h4>H4 content</h4>
      <h5>H5 content</h5>
      <p>P content</p>
      <small>Small content</small>
      <caption>Caption content</caption>
    </section>
  `,
})
export class DesignSystem {
}
