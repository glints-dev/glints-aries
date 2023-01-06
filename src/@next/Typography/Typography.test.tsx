import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Typography } from './Typography';
import * as Blue from '../utilities/colors/blue';

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

  it('renders its children with variant text style', () => {
    const variant = 'headline1';
    render(<Typography variant={variant}>{paragraphText}</Typography>);

    const typographyClass = Typography({ variant, children: paragraphText })
      .type.styledComponentId;
    const TypographyRoots = document.getElementsByClassName(typographyClass);
    const style = window.getComputedStyle(TypographyRoots[0]);

    expect(style.fontFamily).toBe('Poppins,sans-serif');
    expect(style.fontWeight).toBe('700');
    expect(style.fontSize).toBe('60px');
    expect(style.lineHeight).toBe('140%');
    expect(style.letterSpacing).toBe('0');
  });

  it('renders the specified color', () => {
    const { getByText } = render(
      <Typography color={Blue.Brand}>{paragraphText}</Typography>
    );

    expect(getByText(paragraphText)).toHaveStyle({ color: Blue.Brand });
  });
});
