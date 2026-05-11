import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamScoreboardComponent } from '../../teams/components/team-scoreboard/team-scoreboard.component';
import { SeasonBannerComponent } from './season-banner.component';
import { MajorEventListComponent } from '../../major-events/components/list/major-event-list.component';
import { ArticleListComponent } from '../../articles/components/list/article-list.component';
import { MatchScheduleComponent } from '../../matches/components/schedule/match-schedule.component';

@Component({
  selector: 'app-homepage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TeamScoreboardComponent,
    SeasonBannerComponent,
    MajorEventListComponent,
    ArticleListComponent,
    MatchScheduleComponent,
  ],
  template: `
    <aside class="flex flex-col flex-1 h-fit gap-lg">
      <app-season-banner />
      <app-team-scoreboard />
      <app-major-event-list />
    </aside>

    <section class="flex flex-col flex-3 gap-md">
      <app-article-list />
    </section>

    <aside class="flex flex-col flex-1 h-fit">
      <app-match-schedule />
    </aside>
  `,
  host: {
    class: 'flex justify-between gap-[80px] p-lg',
  },
})
export class HomepageComponent {}
