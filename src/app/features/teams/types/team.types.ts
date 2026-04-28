import { ID } from '../../../shared/types/branded-types';
import { Color } from '../../../shared/utils/color';
import { ModelProps } from '../../../shared/utils/base-model';
import { Organization } from '../../../shared/enums/organization.enum';
import { City } from '../../../shared/enums/city.enum';
import { PropertiesOnly } from '../../../shared/types/properties-only';
import { FormFieldConfig } from '../../../shared/utils/form/form-field.config';

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

export type TeamColors = {
  primary: Color;
  secondary?: Color;
};

export const TeamFormConfig: Array<FormFieldConfig> = [
  {
    key: 'city',
    type: 'select',
    label: 'City',
    initialValue: City.Boston,
    options: Object.entries(City).map(([label, value]) => ({
      value,
      label,
    })),
    validations: {},
    errorMessages: {},
  },
  {
    key: 'organization',
    type: 'select',
    label: 'Organization',
    initialValue: Organization.Breach,
    options: Object.entries(Organization).map(([label, value]) => ({
      value,
      label,
    })),
    validations: {},
    errorMessages: {},
  },
  {
    key: 'cdlPoints',
    type: 'number',
    label: 'CDL Points',
    initialValue: 0,
    min: 0,
    max: 5,
    validations: {},
    errorMessages: {},
  },
  {
    key: 'colors',
    type: 'color',
    label: 'Colors',
    initialValue: Color.fromHex('#FFFFFF').toString(),
    validations: {},
    errorMessages: {},
  },
];
