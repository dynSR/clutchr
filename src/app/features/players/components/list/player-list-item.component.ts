import {Component, Input} from '@angular/core';
import {Player} from '../../models/player.model';

@Component({
  selector: 'player-list-item',
  imports: [],
  template: ` <p>Players list item works</p> `,
})
export class PlayerListItemComponent {
  @Input({required: true}) player!: Player;
}
