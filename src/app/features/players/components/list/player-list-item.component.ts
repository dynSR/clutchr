import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-player-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Players list item works</p> `,
})
export class PlayerListItemComponent {
  @Input({required: true}) player!: Player;
}
