import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { Team } from '../../models/team.model';
import { LinkFlavourText } from '../../../../shared/enums/link-flavour-text.enum';
import { Color } from '../../../../shared/utils/color';
import { Organization } from '../../../../shared/enums/organization.enum';

@Component({
  selector: 'app-team-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <header class="flex justify-center items-center size-[256px]">
      <img src="{{ team.logoSrc }}" alt="{{team.name + ''s Logo'}}" />
    </header>

    <section role="group" class="flex flex-col items-center uppercase">
      @if (!this.areCityOrganizationReversed()) {
        <p class="numeric font-black">{{ team.city }}</p>
        <h3 [style.color]="team.colors.primary.toString()">
          {{ team.organization }}
        </h3>
      } @else {
        <h3 [style.color]="team.colors.primary.toString()">
          {{ team.organization }}
        </h3>
        <p class="numeric font-black">{{ team.city }}</p>
      }
    </section>

    <footer class="flex flex-col uppercase">
      <a [href]="team.linkToDetails" class="w-full link underline pointer-events-auto">
        {{ LinkFlavorText.ViewTeamRoster }}
      </a>
    </footer>
  `,
  host: {
    class:
      'flex flex-col justify-between items-center ' +
      'rounded p-md h-[512px] ' +
      'overflow-hidden pointer-events-none hover:bg-primary-50/20',
  },
})
export class TeamListItemComponent implements AfterViewInit {
  @Input({ required: true }) team!: Team;
  protected readonly LinkFlavorText = LinkFlavourText;
  protected readonly areCityOrganizationReversed = computed(() => {
    return [Organization.Cloud9, Organization.Faze, Organization.G2, Organization.Optic].includes(
      this.team.organization,
    );
  });
  private readonly elementRef = inject(ElementRef);
  private readonly defaultHostBackgroundColor = new Color(44, 44, 44, 0.2);

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.background = this.defaultHostBackgroundColor.toString();
    console.log(this.team.logoSrc);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.background = this.team.colors.primary
      .withAlpha(0.2)
      .toString();
  }

  @HostListener('mouseleave') onMouseExit() {
    this.elementRef.nativeElement.style.background = this.defaultHostBackgroundColor.toString();
  }
}
