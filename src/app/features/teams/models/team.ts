import { TeamId } from '../../../shared/types/branded-types';
import { Organization } from '../../../shared/enums/organization.enum';
import { Metadata } from '../../../shared/models/metadata';
import { DefaultProps } from '../../../shared/interfaces/default-props';
import { City } from '../../../shared/enums/city.enum';
import { Color } from '../../../shared/utils/color';

interface TeamColors {
  primary: Color;
  secondary?: Color;
}

interface TeamProps extends DefaultProps<TeamId> {
  organization: Organization;
  city: City;
  acronym: string;
  logoSrc: string;
  cdlPoints: number;
  colors: TeamColors;
}

export class Team implements TeamProps {
  readonly id: TeamId;
  readonly city: City;
  readonly organization: Organization;
  readonly cdlPoints: number;
  readonly colors: TeamColors;
  readonly metadata: Metadata;

  constructor(props: Omit<TeamProps, 'acronym' | 'logoSrc' | 'slug'>) {
    this.id = props.id;
    this.city = props.city;
    this.organization = props.organization;
    this.cdlPoints = props.cdlPoints;
    this.colors = props.colors;
    this.metadata = props.metadata;
  }

  get acronym(): string {
    if (this.organization.equals(Organization.Cloud9)) return 'NY';
    if (this.organization.equals(Organization.Falcons)) return 'RYD';
    if (this.organization.equals(Organization.Faze)) return 'VGS';
    if (this.organization.equals(Organization.Optic)) return 'TX';
    return this.city.slice(0, 3).toUpperCase();
  }

  get name(): string {
    const teamName = this.isCityAndOrganizationReversedInName()
      ? this.organization + String.WhiteSpace + this.city
      : this.city + String.WhiteSpace + this.organization;
    return teamName.allCapitalized();
  }

  get slug(): string {
    return this.name.toKebabLowerCase();
  }

  get logoSrc(): string {
    return 'assets/2026-season/teams-logo/' + this.name.toKebabPascalCase() + '.png';
  }

  isCityAndOrganizationReversedInName(): boolean {
    return [Organization.Cloud9, Organization.Faze, Organization.G2, Organization.Optic].includes(
      this.organization,
    );
  }
}
