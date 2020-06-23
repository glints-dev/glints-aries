import * as React from 'react';
import Paragraph from './Paragraph';
import { PrimaryColor } from '../../Utils/Colors';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import {
  PARAGRAPH_FONT_SIZES,
  PARAGRAPH_VARIANTS,
  paragraphType,
} from './ParagraphStyles';

const paragraphText =
  'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.';

describe('displays the correct text and font-size for each variant:', () => {
  const variants = Object.values(PARAGRAPH_VARIANTS) as paragraphType[];
  variants.forEach(variant => {
    const fontSize = PARAGRAPH_FONT_SIZES[variant];
    it(`${variant}: ${fontSize}px`, () => {
      const { getByText } = render(
        <Paragraph variant={variant}>{paragraphText}</Paragraph>
      );
      const paragraphTag = getByText(paragraphText);
      expect(paragraphTag).toBeTruthy();
      expect(paragraphTag).toHaveStyle(`font-size: ${fontSize}px`);
    });
  });
});

it('displays the text in bold', () => {
  const { getByText } = render(<Paragraph bold>{paragraphText}</Paragraph>);
  const paragraphTag = getByText(paragraphText);
  expect(paragraphTag).toHaveStyle('font-weight: bold');
});

it('displays the correct color', () => {
  const { getByText } = render(
    <Paragraph color={PrimaryColor.glintsred}>{paragraphText}</Paragraph>
  );
  const paragraphTag = getByText(paragraphText);
  expect(paragraphTag).toHaveStyle(`color: ${PrimaryColor.glintsred}`);
});

it('display the ellipsis', () => {
  const { getByText } = render(<Paragraph ellipsis>{paragraphText}</Paragraph>);
  const paragraphTag = getByText(paragraphText);
  expect(paragraphTag).toHaveStyle(`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  `);
});
