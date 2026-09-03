import * as React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Typography, Variant } from './Typography';
import * as Blue from '../utilities/colors/blue';

const typographyMetrics: ReadonlyArray<
  readonly [Variant, string, string, string, string | undefined]
> = [
  ['headline1', '36px', '125%', '28px', undefined],
  ['headline2', '32px', '125%', '24px', '125%'],
  ['headline3', '28px', '130%', '22px', '130%'],
  ['headline4', '24px', '130%', '20px', '130%'],
  ['headline5', '20px', '140%', '18px', undefined],
  ['headline6', '18px', '140%', '16px', undefined],
  ['subtitle1', '16px', '150%', '16px', undefined],
  ['subtitle2', '13px', '150%', '12px', undefined],
  ['body1', '14px', '150%', '14px', undefined],
  ['body2', '14px', '150%', '14px', '140%'],
  ['button', '14px', '150%', '14px', '140%'],
  ['caption', '12px', '140%', '12px', undefined],
  ['overline', '11px', '140%', '11px', undefined],
];

describe('<Typography />', () => {
  const paragraphText =
    'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.';

  it('renders its children', () => {
    const { getByText } = render(<Typography>{paragraphText}</Typography>);
    const paragraphTag = getByText(paragraphText);

    expect(paragraphTag).toBeTruthy();
  });

  it('renders the default html element', () => {
    const { container } = render(<Typography>{paragraphText}</Typography>);

    expect(container.querySelector('p')).not.toBeNull();
  });

  it('renders the specified html element', () => {
    const asElement = 'h1';
    const { container } = render(
      <Typography as={asElement}>{paragraphText}</Typography>
    );

    expect(container.querySelector(asElement)).not.toBeNull();
  });

  it.each(typographyMetrics)(
    'renders %s with the approved desktop and mobile metrics',
    (variant, fontSize, lineHeight, mobileFontSize, mobileLineHeight) => {
      const { getByText } = render(
        <Typography variant={variant}>{paragraphText}</Typography>
      );
      const typography = getByText(paragraphText);

      expect(typography).toHaveStyleRule('font-size', fontSize);
      expect(typography).toHaveStyleRule('line-height', lineHeight);

      if (mobileFontSize !== fontSize) {
        expect(typography).toHaveStyleRule('font-size', mobileFontSize, {
          media: '(max-width:768px)',
        });
      }

      if (mobileLineHeight) {
        expect(typography).toHaveStyleRule('line-height', mobileLineHeight, {
          media: '(max-width:768px)',
        });
      }
    }
  );

  it('renders the specified color', () => {
    const { getByText } = render(
      <Typography color={Blue.Brand}>{paragraphText}</Typography>
    );

    expect(getByText(paragraphText)).toHaveStyle({ color: Blue.Brand });
  });
});
