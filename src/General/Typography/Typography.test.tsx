import * as React from 'react';
import Typography from './Typography';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

const { Title, Paragraph } = Typography;
const shortText = 'Glints Aries';

describe('<Typography> should contain the Title and Paragraph components:', () => {
  it(`<Typography.Title> should render a h1 tag with the text Glints Aries`, () => {
    const TitleSnapshot = renderer
      .create(<Title tag="h1">{shortText}</Title>)
      .toJSON();
    expect(TitleSnapshot).toMatchSnapshot();
  });

  it(`<Typography.Paragraph> should render a p tag with the text Glints Aries`, () => {
    const ParagraphSnapshot = renderer
      .create(<Paragraph>{shortText}</Paragraph>)
      .toJSON();
    expect(ParagraphSnapshot).toMatchSnapshot();
  });
});
