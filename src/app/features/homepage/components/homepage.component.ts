import {Component} from '@angular/core';
import {TeamScoreboardComponent} from '../teams/components/scoreboard/team-scoreboard.component';
import {SeasonBannerComponent} from '../../shared/components/season-banner.component';
import { MajorEventsTimelineComponent } from '../major-events/components/major-events-timeline/major-events-timeline.component';
import { NewsListComponent } from '../news/components/news-list/news-list.component';
import { NewsCarouselComponent } from '../news/components/news-carousel/news-carousel.component';

@Component({
  selector: 'homepage',
  imports: [TeamScoreboardComponent, SeasonBannerComponent, MajorEventsTimelineComponent, NewsListComponent, NewsCarouselComponent],
  template: `
    <aside class="flex flex-col flex-1 h-fit gap-lg">
      <season-banner />
      <team-scoreboard />
      <major-events-timeline />
    </aside>

    <section class="flex flex-col flex-3 gap-md">
      <news-carousel />
      <news-list />
    </section>

    <aside class="flex flex-col flex-1 h-fit">
      <team-scoreboard />
    </aside>
  `,
  host: {
    class: 'flex justify-between gap-[80px] p-lg',
  },
})
export class HomepageComponent {}
