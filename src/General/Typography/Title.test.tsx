import * as React from 'react';
import Title from './Title';
import { PrimaryColor } from '../../Style/Colors';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const titleText = 'Glints Aries';

describe('displays the correct text and uses the correct html tag for each tag:', () => {
  const tags: any[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  tags.forEach(tag => {
    it(`${tag}`, () => {
      const { container, getByText } = render(
        <Title tag={tag}>{titleText}</Title>
      );
      const heading = getByText(titleText);
      expect(heading).toHaveTextContent(titleText);
      expect(container).toContainHTML(tag);
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
