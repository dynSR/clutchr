import { Component } from '@angular/core';
import { TeamScoreboardComponent } from '../../teams/components/scoreboard/team-scoreboard.component';
import { SeasonBannerComponent } from './season-banner.component';
import { MajorEventListComponent } from '../../major-events/components/list/major-event-list.component';
import { ArticleListComponent } from '../../articles/components/list/article-list.component';
import { ScheduleComponent } from '../../matches/components/schedule/schedule.component';

@Component({
  selector: 'homepage',
  imports: [
    TeamScoreboardComponent,
    SeasonBannerComponent,
    MajorEventListComponent,
    ArticleListComponent,
    ScheduleComponent,
  ],
  template: `
    <aside class="flex flex-col flex-1 h-fit gap-lg">
      <season-banner />
      <team-scoreboard />
      <major-event-list />
    </aside>

    <section class="flex flex-col flex-3 gap-md">
      <article-list />
    </section>

    <aside class="flex flex-col flex-1 h-fit">
      <schedule />
    </aside>
  `,
  host: {
    class: 'flex justify-between gap-[80px] p-lg',
  },
})
export class HomepageComponent {}
