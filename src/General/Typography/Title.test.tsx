import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Title, { tagType } from './Title';
import { TITLE_VARIANTS, TITLE_FONT_SIZES } from './TitleStyles';
import { PrimaryColor } from '../../Style/Colors';

const titleText = 'Glints Aries';

describe('displays the correct text, uses the correct html tag and font-size for each tag:', () => {
  const tags = Object.values(TITLE_VARIANTS) as tagType[];

  tags.forEach(tag => {
    const fontSize = TITLE_FONT_SIZES[tag];
    it(`${tag}`, () => {
      const { container, getByText } = render(
        <Title tag={tag}>{titleText}</Title>
      );
      const heading = getByText(titleText);
      expect(heading).toBeTruthy();
      expect(container).toContainHTML(tag);
      expect(heading).toHaveStyle(`font-size: ${fontSize}px`);
    });
  });
});

it('displays the correct color', () => {
  const { getByText } = render(
    <Title color={PrimaryColor.glintsred}>Glints Aries</Title>
  );
  const heading = getByText(titleText);
  expect(heading).toHaveStyle(`color: ${PrimaryColor.glintsred}`);
});

it('display the ellipsis', () => {
  const { getByText } = render(<Title ellipsis>{titleText}</Title>);
  const heading = getByText(titleText);
  expect(heading).toHaveStyle(`
      overflow: hidden; 
      white-space: nowrap; 
      text-overflow: ellipsis;
    `);
});
