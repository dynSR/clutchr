import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayersService} from '../../players.service';
import {Player} from '../../models/player.model';
import {AsyncPipe} from '@angular/common';
import {PlayerListItemComponent} from './player-list-item.component';

@Component({
  selector: 'player-list',
  imports: [
    AsyncPipe,
    PlayerListItemComponent
  ],
  template: `
    <header>
      <h5>CDL 2026 Players</h5>
    </header>

    @if (players$ | async; as players) {
      @for (player of players; track player.id) {
        <player-list-item [player]="player"/>
      }
    } @else {
      <p>No player found.</p>
    }
  `,
  host: {
    class: 'flex flex-col p-lg',
  },
})
export class PlayerListComponent {
  protected players$: Observable<Array<Player>>;

  constructor(private readonly playerService: PlayersService) {
    this.players$ = this.playerService.getAll();
  }
}
