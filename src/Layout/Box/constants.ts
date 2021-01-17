import { Shadow } from '../../Utils/Shadow';
import { Spacing } from '../../Layout/Spacing';

const allSpacingProps = [
  'p',
  'pl',
  'pr',
  'pt',
  'pb',
  'px',
  'py',
  'm',
  'ml',
  'mr',
  'mt',
  'mb',
  'mx',
  'my',
] as const;

export const boxArgTypes = {
  boxShadow: {
    control: {
      type: 'select',
      options: {
        'Example: Shadow.down4': Shadow.down4,
        'Example: Shadow.up4': Shadow.up4,
      },
    },
    table: {
      type: {
        summary: 'import { Shadow } from "glints-aries"',
        detail: Object.keys(Shadow)
          .map(key => `Shadow.${key}`)
          .join(' | '),
      },
    },
  },
  ...allSpacingProps.reduce((acc: Record<string, any>, propName) => {
    acc[propName] = {
      table: {
        type: {
          summary: 'Spacing',
          detail: `${Object.values(Spacing).join(
            ' | '
          )} | 'auto' | Responsive Space Object`,
        },
      },
    };
    return acc;
  }, {}),
};
