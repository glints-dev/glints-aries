import * as React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { SkeletonText } from './SkeletonText';

const skeletonMetrics = [
  ['headline1', '45px', '35px'],
  ['headline2', '40px', '30px'],
  ['headline3', '36.4px', '28.6px'],
  ['headline4', '31.2px', '26px'],
  ['headline5', '28px', '25.2px'],
  ['headline6', '25.2px', '22.4px'],
  ['subtitle1', '24px', '24px'],
  ['subtitle2', '19.5px', '18px'],
  ['body1', '21px', '21px'],
  ['body2', '21px', '19.6px'],
  ['button', '21px', '19.6px'],
  ['caption', '16.8px', '16.8px'],
  ['overline', '15.4px', '15.4px'],
] as const;

describe('<SkeletonText />', () => {
  it.each(skeletonMetrics)(
    'matches the %s desktop and mobile line box heights',
    (variant, height, mobileHeight) => {
      const { getByRole } = render(<SkeletonText rows={[{ variant }]} />);
      const skeleton = getByRole('listitem');

      expect(skeleton).toHaveStyleRule('height', height);

      if (mobileHeight !== height) {
        expect(skeleton).toHaveStyleRule('height', mobileHeight, {
          media: '(max-width:768px)',
        });
      }
    }
  );
});
