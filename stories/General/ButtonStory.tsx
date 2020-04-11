import * as React from 'react';

import StorybookComponent from '../StorybookComponent';
import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  ViewIcon,
  ArrowRoundForwardIcon,
} from '../../src/General/Icon/components';

import { Variant, Theme, Size } from '../../src/Utils/StyleConfig';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const SHeading = styled(Heading)`
  font-size: '20px';
  margin-bottom: '1em';
`;

const SButton = styled(Button)`
  margin-right: 15px;
`;

const ButtonTypesStory = () => {
  const usage = `// Solid
<Button variant="${Variant.SOLID}">Default</Button>
<Button variant="${Variant.SOLID}" disabled>Disabled</Button>
<Button variant="${Variant.SOLID}" theme="${Theme.BLUE}">Blue</Button>
// Ghost
<Button variant="${Variant.GHOST}">Default</Button>
<Button variant="${Variant.GHOST}" disabled>Disabled</Button>
// Solid Shadow
<Button variant="${Variant.SOLID_SHADOW}">Default</Button>
<Button variant="${Variant.SOLID_SHADOW}" disabled>Disabled</Button>
// Link
<Button variant="${Variant.LINK}">Default</Button>
<Button variant="${Variant.LINK}" disabled>Disabled</Button>
`;
  const propsObject = {
    All: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: '"solid"',
        possibleValue: `${Object.values(Variant)
          .map(value => `"${value}"`)
          .join(' | ')}`,
        require: 'no',
        description: "Sets the Button's type.",
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Button to disable state.',
      },
    ],
    Solid: [
      {
        name: 'theme',
        type: 'string',
        defaultValue: '"white"',
        possibleValue: '"white" | "blue"',
        require: 'no',
        description: "Sets the Button's theme",
      },
    ],
  };
  return (
    <StorybookComponent
      title="Button"
      code="import { Button } from 'glints-aries'"
      usage={usage}
      propsObject={propsObject}
    >
      <SHeading>Types</SHeading>
      <h3>Solid</h3>
      <Row>
        <SButton>Default</SButton>
        <SButton disabled>Disabled</SButton>
        <SButton theme={Theme.BLUE}>Blue</SButton>
      </Row>
      <h3>Ghost</h3>
      <Row>
        <SButton variant={Variant.GHOST}>Default</SButton>
        <SButton variant={Variant.GHOST} disabled>
          Disabled
        </SButton>
      </Row>
      <h3>Solid Shadow</h3>
      <Row>
        <SButton variant={Variant.SOLID_SHADOW}>Default</SButton>
        <SButton variant={Variant.SOLID_SHADOW} disabled>
          Disabled
        </SButton>
      </Row>
      <h3>Link</h3>
      <Row>
        <SButton variant={Variant.LINK}>Default</SButton>
        <SButton variant={Variant.LINK} disabled>
          Disabled
        </SButton>
      </Row>
    </StorybookComponent>
  );
};

const ButtonSizeStory = () => {
  const usage = `<Button size="${Size.SMALL}">Small</Button>
<Button size="${Size.LARGE}">Large</Button>
<Button block>Block</Button>
`;
  const propsObject = {
    All: [
      {
        name: 'size',
        type: 'string',
        defaultValue: '"large"',
        possibleValue: '"small" | "large"',
        require: 'no',
        description: "Sets the Button's size.",
      },
      {
        name: 'block',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Make the button fit to its parent width.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <SHeading>Sizes</SHeading>
      <Row>
        <SButton theme={Theme.BLUE} size={Size.SMALL}>
          Small
        </SButton>
        <SButton theme={Theme.BLUE}>Large</SButton>
        <SButton theme={Theme.BLUE} block>
          Block
        </SButton>
      </Row>
      {Object.values(Variant).map(type => (
        <Row key={type}>
          <SButton variant={type} size={Size.SMALL}>
            Small
          </SButton>
          <SButton variant={type}>Large</SButton>
          <SButton variant={type} block>
            Block
          </SButton>
        </Row>
      ))}
    </StorybookComponent>
  );
};

const ButtonWithIconStory = () => {
  const usage = `<Button startIcon={<ViewIcon />}>Button</Button>
<Button endIcon={<ArrowRoundForwardIcon />}>Button</Button>`;
  const propsObject = {
    All: [
      {
        name: 'startIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed before the children.',
      },
      {
        name: 'endIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'no',
        description: 'Element placed after the children.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <SHeading>Button with Icon</SHeading>
      <Row>
        <SButton theme={Theme.BLUE} startIcon={<ViewIcon />}>
          Button Icon Left
        </SButton>
        <SButton theme={Theme.BLUE} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </SButton>
      </Row>
      {Object.values(Variant).map(type => (
        <Row key={type}>
          <SButton variant={type} startIcon={<ViewIcon />}>
            Button Icon Left
          </SButton>
          <SButton variant={type} endIcon={<ArrowRoundForwardIcon />}>
            Button Icon Right
          </SButton>
        </Row>
      ))}
    </StorybookComponent>
  );
};

const ButtonWithTagStory = () => {
  const usage = `<Button tag="a">Button as Anchor</Button>`;
  const propsObject = {
    All: [
      {
        name: 'tag',
        type: 'string',
        defaultValue: '"button"',
        possibleValue: 'any valid html tag e.g. "a"',
        require: 'no',
        description: 'Changes the tag with which the button will render.',
      },
    ],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <SHeading>Button with Different Tag</SHeading>
      <Row>
        <SButton theme={Theme.BLUE} tag="a">
          Button as Anchor
        </SButton>
      </Row>
      {Object.values(Variant).map(type => (
        <Row key={type}>
          <SButton variant={type} tag="a">
            Button as Anchor
          </SButton>
        </Row>
      ))}
    </StorybookComponent>
  );
};

const ButtonStories = () => (
  <>
    <ButtonTypesStory />
    <Divider theme="grey" />
    <ButtonSizeStory />
    <Divider theme="grey" />
    <ButtonWithIconStory />
    <Divider theme="grey" />
    <ButtonWithTagStory />
  </>
);

export default ButtonStories;
