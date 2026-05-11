import { ID } from '../../../shared/types/branded-types';
import { Color } from '../../../shared/utils/color';
import { ModelProps } from '../../../shared/utils/base-model';
import { Organization } from '../../../shared/enums/organization.enum';
import { City } from '../../../shared/enums/city.enum';
import { PropertiesOnly } from '../../../shared/types/properties-only';
import { FormFieldsConfig, FormFieldType } from '../../../shared/utils/dynamic-form/dynamic-form.config';

export type TeamId = ID;

export type TeamProps = ModelProps<TeamId> & {
  name: string;
  organization: Organization;
  city: City;
  acronym: string;
  logoSrc: string;
  cdlPoints: number;
  colors: TeamColors;
};

export type TeamRaw = Omit<
  PropertiesOnly<TeamProps>,
  'acronym' | 'name' | 'linkToDetails' | 'logoSrc' | 'slug'
>;

export interface TeamColors {
  primary: Color;
  secondary?: Color;
}

export const TeamFormConfig: FormFieldsConfig = {
  fields: [
    {
      id: 'team',
      type: FormFieldType.Select,
      label: 'Team',
      initialValue: `${City.Boston.capitalized()} ${Organization.Breach}`,
      options: [
        {
          value: `${City.Boston.capitalized()} ${Organization.Breach}`,
          label: `${City.Boston.capitalized()} ${Organization.Breach}`,
        },
        {
          value: `${City.Carolina.capitalized()} ${Organization.RoyalRavens}`,
          label: `${City.Carolina.capitalized()} ${Organization.RoyalRavens}`,
        },
        {
          value: `${Organization.Cloud9} ${City.NewYork.capitalized()}`,
          label: `${Organization.Cloud9} ${City.NewYork.capitalized()}`,
        },
        {
          value: `${Organization.Faze} ${City.Vegas.capitalized()}`,
          label: `${Organization.Faze} ${City.Vegas.capitalized()}`,
        },
        {
          value: `${Organization.G2} ${City.Minnesota.capitalized()}`,
          label: `${Organization.G2} ${City.Minnesota.capitalized()}`,
        },
        {
          value: `${City.LosAngeles.allCapitalized()} ${Organization.Thieves}`,
          label: `${City.LosAngeles.allCapitalized()} ${Organization.Thieves}`,
        },
        {
          value: `${City.Miami.capitalized()} ${Organization.Heretics}`,
          label: `${City.Miami.capitalized()} ${Organization.Heretics}`,
        },
        {
          value: `${Organization.Optic} ${City.Texas.capitalized()}`,
          label: `${Organization.Optic} ${City.Texas.capitalized()}`,
        },
        {
          value: `${City.Paris.capitalized()} ${Organization.GentleMates}`,
          label: `${City.Paris.capitalized()} ${Organization.GentleMates}`,
        },
        {
          value: `${City.Riyadh.capitalized()} ${Organization.Falcons}`,
          label: `${City.Riyadh.capitalized()} ${Organization.Falcons}`,
        },
        {
          value: `${City.Toronto.capitalized()} ${Organization.KOI}`,
          label: `${City.Toronto.capitalized()} ${Organization.KOI}`,
        },
        {
          value: `${City.Vancouver.capitalized()} ${Organization.Surge}`,
          label: `${City.Vancouver.capitalized()} ${Organization.Surge}`,
        },
      ],
    },
    {
      id: 'cdlPoints',
      type: FormFieldType.Number,
      label: 'CDL Points',
      initialValue: 0,
      min: 0,
      max: 5,
    },
    {
      id: 'group',
      type: FormFieldType.Group,
      label: 'Team colors',
      nestedFields: [
        {
          id: 'primary-color',
          type: FormFieldType.Color,
          label: 'Primary Color',
          initialValue: Color.fromHex('#FFFFFF').toString(),
        },
        {
          id: 'secondary-color',
          type: FormFieldType.Color,
          label: 'Secondary Color',
          initialValue: Color.fromHex('#FFFFFF').toString(),
        },
      ],
    },
  ],
};
