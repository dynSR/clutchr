import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from '../../player.service';
import { Player } from '../../models/player.model';
import { AsyncPipe } from '@angular/common';
import { PlayerListItemComponent } from './player-list-item.component';

@Component({
  selector: 'app-player-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, PlayerListItemComponent],
  template: `
    <header>
      <h5>CDL 2026 Players</h5>
    </header>

    @if (players$ | async; as players) {
      @for (player of players; track player.id) {
        <app-player-list-item [player]="player" />
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
  protected players$: Observable<Player[]>;
  private readonly playerService = inject(PlayerService);

  constructor() {
    this.players$ = this.playerService.getAll();
  }
}
