import { Component } from '@angular/core';

@Component({
  selector: 'player-list',
  imports: [],
  template: `
    <header>
      <h5>CDL 2026 Players</h5>
    </header>
    <p>Players list works</p>
  `,
  host: {
    class: 'flex flex-col p-lg',
  },
})
export class PlayerListComponent {}
