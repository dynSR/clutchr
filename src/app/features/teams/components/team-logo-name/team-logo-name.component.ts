import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Team } from '../../models/team.model';
import { Spacings } from '../../../../shared/enums/spacings.enum';
import { TextBlockType } from '../../../../shared/enums/text-block-type.enum';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team-logo-name',
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
  @Input({ required: false }) teamIconSize = 32;
  @Input({ required: false }) teamNameTextBlockType: TextBlockType = TextBlockType.P;
  @Input({ required: false }) gapBetweenTeamIconAndName: Spacings = Spacings.MD;

  ngAfterViewInit() {
    this.addTeamNameInHtml();
  }

  private addTeamNameInHtml(): void {
    const teamNameTextBlock = `<${this.teamNameTextBlockType}>${this.team.name}</${this.teamNameTextBlockType}>`;
    this.container.nativeElement.insertAdjacentHTML('beforeend', teamNameTextBlock);
  }
}
