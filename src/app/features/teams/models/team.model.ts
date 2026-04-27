import {TeamId} from '../../../shared/types/branded-types';
import {Organization} from '../../../shared/enums/organization.enum';
import {City} from '../../../shared/enums/city.enum';
import {Color} from '../../../shared/utils/color';
import {PropertiesOnly} from '../../../shared/types/properties-only';
import {BaseModel, ModelProps} from '../../../shared/utils/base-model';

type TeamProps = ModelProps<TeamId> & {
  name: string;
  organization: Organization;
  city: City;
  acronym: string;
  logoSrc: string;
  cdlPoints: number;
  colors: TeamColors;
}

interface TeamColors {
  primary: Color;
  secondary?: Color;
}

export type TeamJsonProps = Omit<
  PropertiesOnly<TeamProps>,
  'acronym' | 'name' | 'linkToDetails' | 'logoSrc' | 'slug'
>;

export class Team extends BaseModel<TeamId> implements TeamProps {
  readonly city: City;
  readonly organization: Organization;
  readonly cdlPoints: number;
  readonly colors: TeamColors;

  constructor(props: TeamJsonProps) {
    super(props);
    this.city = props.city;
    this.organization = props.organization;
    this.cdlPoints = props.cdlPoints;
    this.colors = props.colors;
  }

  override get linkToDetails(): string {
    return `teams/${this.id}/${this.slug}`;
  }

  override get slug(): string {
    return this.name.toKebabLowerCase();
  }

  get acronym(): string {
    if (this.organization.equals(Organization.Cloud9)) return 'NY';
    if (this.organization.equals(Organization.Falcons)) return 'RYD';
    if (this.organization.equals(Organization.Faze)) return 'VGS';
    if (this.organization.equals(Organization.Optic)) return 'TX';
    return this.city.slice(0, 3).toUpperCase();
  }

  get name(): string {
    const areCityOrganizationReversed = [
      Organization.Cloud9,
      Organization.Faze,
      Organization.G2,
      Organization.Optic,
    ].includes(this.organization);
    const teamName = areCityOrganizationReversed
      ? this.organization + String.WhiteSpace + this.city
      : this.city + String.WhiteSpace + this.organization;
    return teamName.allCapitalized();
  }

  get logoSrc(): string {
    return 'assets/2026-season/teams-logo/' + this.name.toKebabPascalCase() + '.png';
  }
}
