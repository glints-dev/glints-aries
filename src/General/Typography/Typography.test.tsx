import * as React from 'react';
import Typography from './Typography';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const { Title, Paragraph } = Typography;
const shortText = 'Glints Aries';

describe('<Typography> should contain the Title and Paragraph components:', () => {
  it(`<Typography.Title> should render a h1 tag with the text Glints Aries`, () => {
    const { asFragment } = render(<Title tag="h1">{shortText}</Title>);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`<Typography.Paragraph> should render a p tag with the text Glints Aries`, () => {
    const { asFragment } = render(<Paragraph>{shortText}</Paragraph>);
    expect(asFragment()).toMatchSnapshot();
  });
});
