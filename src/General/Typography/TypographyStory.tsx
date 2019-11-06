import * as React from 'react';

import StorybookComponent from '../../../stories/StorybookComponent';

import Typography from '.';
import { TITLE_VARIANTS, TITLE_FONT_SIZES } from './TitleStyles';
import { PARAGRAPH_VARIANTS, PARAGRAPH_FONT_SIZES } from './ParagraphStyles';
import Heading from '../Heading';
import { PrimaryColor } from '../../Style/Colors';

const { Title, Paragraph } = Typography;

const titleProps = {
  'Typography.Title': [
    {
      name: 'color',
      type: 'string',
      defaultValue: <code>black</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: "Sets the Title's color.",
    },
    {
      name: 'ellipsis',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Display ellipsis when the title overflows.',
    },
    {
      name: 'tag',
      type: 'string',
      defaultValue: <code>h1</code>,
      possibleValue: (
        <code>
          {TITLE_VARIANTS.h1} | {TITLE_VARIANTS.h2} | {TITLE_VARIANTS.h3} |{' '}
          {TITLE_VARIANTS.h4} | {TITLE_VARIANTS.h5} | {TITLE_VARIANTS.h6}
        </code>
      ),
      require: 'no',
      description: 'Sets the title tag to one of the <h1> - <h6> tags.',
    },
  ],
};

const paragraphProps = {
  'Typography.Paragraph': [
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: "Sets the Paragraph's font-weight to bold.",
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: <code>black</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: "Sets the Paragraph's color.",
    },
    {
      name: 'ellipsis',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Display ellipsis when the title overflows.',
    },
    {
      name: 'variant',
      type: 'string',
      defaultValue: <code>regular</code>,
      possibleValue: (
        <code>
          {PARAGRAPH_VARIANTS.subtitle} | {PARAGRAPH_VARIANTS.regular} |{' '}
          {PARAGRAPH_VARIANTS.caption} | {PARAGRAPH_VARIANTS.smallest}
        </code>
      ),
      require: 'no',
      description: "Sets the Paragraph's variant.",
    },
  ],
};

const TitleStory = () => (
  <StorybookComponent
    title="Typography"
    code="import { Typography } from 'glints-aries'"
    propsObject={titleProps}
    usage={`import { Typography, PrimaryColor } from 'glints-aries';

const { Title } = Typography;

ReactDOM.render(
  <div style={{ display: 'grid', gridRowGap: '15px' }}>
    <Title tag="h1">Heading 1</Title>
    <Title tag="h2">Heading 2</Title>
    <Title tag="h3">Heading 3</Title>
    <Title tag="h4">Heading 4</Title>
    <Title tag="h5">Heading 5</Title>
    <Title tag="h6">Heading 6</Title>
    <Title tag="h5" color={PrimaryColor.glintsred}>
      Colored Title
    </Title>
    <Title tag="h5" ellipsis>
      Title with Ellipses - As the first sign in the zodiac, the presence of
      Aries always marks the beginning of something energetic and turbulent.
      They are continuously looking for dynamic, speed and competition, always
      being the first in everything - from work to social gatherings.
    </Title>
  </div>,
  mountNode
);`}
  >
    <Heading style={{ fontSize: '24px', marginBottom: '1em' }}>
      Typography.Title
    </Heading>
    <div style={{ display: 'grid', gridRowGap: '15px' }}>
      <Title tag="h1">Heading 1 - {TITLE_FONT_SIZES.h1}px</Title>
      <Title tag="h2">Heading 2 - {TITLE_FONT_SIZES.h2}px</Title>
      <Title tag="h3">Heading 3 - {TITLE_FONT_SIZES.h3}px</Title>
      <Title tag="h4">Heading 4 - {TITLE_FONT_SIZES.h4}px</Title>
      <Title tag="h5">Heading 5 - {TITLE_FONT_SIZES.h5}px</Title>
      <Title tag="h6">Heading 6 - {TITLE_FONT_SIZES.h6}px</Title>
      <Title tag="h5" color={PrimaryColor.glintsred}>
        Colored Title
      </Title>
      <Title tag="h5" ellipsis>
        Title with Ellipses - As the first sign in the zodiac, the presence of
        Aries always marks the beginning of something energetic and turbulent.
        They are continuously looking for dynamic, speed and competition, always
        being the first in everything - from work to social gatherings.
      </Title>
    </div>
  </StorybookComponent>
);

const ParagraphStory = () => (
  <StorybookComponent
    propsObject={paragraphProps}
    usage={`import { Typography, PrimaryColor } from 'glints-aries';

const { Paragraph } = Typography;

ReactDOM.render(
  <div style={{ display: 'grid', gridRowGap: '15px' }}>
    <Paragraph variant="subtitle">
      Subtitle <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph variant="regular">
      Regular <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph variant="caption">
      Caption <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph variant="smallest">
      Smallest <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph bold>
      Bold Paragraph <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph color={PrimaryColor.glintsred}>
      Colored Paragraph <br />
      As the first sign in the zodiac, the presence of Aries always marks the
      beginning of something energetic and turbulent.
    </Paragraph>
    <Paragraph ellipsis>
      Paragraph with Ellipses - As the first sign in the zodiac, the presence
      of Aries always marks the beginning of something energetic and
      turbulent. They are continuously looking for dynamic, speed and
      competition, always being the first in everything - from work to social
      gatherings.
    </Paragraph>
  </div>,
  mountNode
);`}
  >
    <Heading style={{ fontSize: '24px', marginBottom: '1em' }}>
      Typography.Paragraph
    </Heading>
    <div style={{ display: 'grid', gridRowGap: '15px' }}>
      <Paragraph variant="subtitle">
        Subtitle - {PARAGRAPH_FONT_SIZES.subtitle}px
        <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph variant="regular">
        Regular - {PARAGRAPH_FONT_SIZES.regular}px
        <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph variant="caption">
        Caption - {PARAGRAPH_FONT_SIZES.caption}px
        <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph variant="smallest">
        Smallest - {PARAGRAPH_FONT_SIZES.smallest}px
        <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph bold>
        Bold Paragraph <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph color={PrimaryColor.glintsred}>
        Colored Paragraph <br />
        As the first sign in the zodiac, the presence of Aries always marks the
        beginning of something energetic and turbulent.
      </Paragraph>
      <Paragraph ellipsis>
        Paragraph with Ellipses - As the first sign in the zodiac, the presence
        of Aries always marks the beginning of something energetic and
        turbulent. They are continuously looking for dynamic, speed and
        competition, always being the first in everything - from work to social
        gatherings.
      </Paragraph>
    </div>
  </StorybookComponent>
);

const TypographyStory = () => (
  <React.Fragment>
    <TitleStory />
    <ParagraphStory />
  </React.Fragment>
);

export default TypographyStory;
