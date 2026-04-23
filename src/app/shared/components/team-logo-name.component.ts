import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Team } from '../../features/teams/models/team';
import { Spacings } from '../enums/spacings.enum';
import { TextBlockType } from '../enums/text-block-type.enum';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'team-logo-name',
  imports: [NgOptimizedImage],
  template: `
    <section
      #container
      role="group"
      [class]="'flex flex-row justify-between items-center gap-' + gapBetweenTeamIconAndName"
    >
      <img
        ngSrc="{{ team.logoSrc }}"
        alt="{{ team.organization + 's Logo' }}"
        width="{{ teamIconSize }}"
        height="{{ teamIconSize }}"
      />
      <!-- Notes: The team name is manually added to the section html content -->
    </section>
  `,
})
export class TeamLogoNameComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  // TODO: Change the object form here to only grab the properties needed
  @Input({ required: true }) team!: Team;
  @Input({ required: false }) teamIconSize: number = 32;
  @Input({ required: false }) teamNameTextBlockType: TextBlockType = TextBlockType.P;
  @Input({ required: false }) gapBetweenTeamIconAndName: Spacings = Spacings.MD;

  private get teamNameTextBlock(): string {
    return `<${this.teamNameTextBlockType}>${this.team.name}</${this.teamNameTextBlockType}>`;
  }

  ngAfterViewInit() {
    this.addTeamNameInHtml();
  }

  private addTeamNameInHtml(): void {
    this.container.nativeElement.insertAdjacentHTML('beforeend', this.teamNameTextBlock);
  }
}
