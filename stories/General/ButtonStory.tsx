import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  ViewIcon,
  ArrowRoundForwardIcon,
} from '../../src/General/Icon/components';

import { ButtonVariant, ButtonTheme } from '../../src/Utils/StyleConfig';

const ButtonStories = () => (
  <React.Fragment>
    <ButtonVariantStory />
    <Divider theme="grey" />
    <ButtonDisableStory />
    <Divider theme="grey" />
    <ButtonSizeStory />
    <Divider theme="grey" />
    <ButtonThemeStory />
    <Divider theme="grey" />
    <ButtonWithIconStory />
    <Divider theme="grey" />
    <ButtonWithTagStory />
  </React.Fragment>
);

const ButtonVariantStory = () => {
  const usage = `/* Solid Button */
<Button>${ButtonVariant.SOLID}</Button>

/* Solid-Shadow Button */
<Button variant="${ButtonVariant.SOLID_SHADOW}">${ButtonVariant.SOLID_SHADOW}</Button>

/* Ghost Button */
<Button variant="${ButtonVariant.GHOST}">${ButtonVariant.GHOST}</Button>

/* Link Button */
<Button variant="${ButtonVariant.LINK}">${ButtonVariant.LINK}</Button>
`;
  const propsObject = {
    All: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: `"${ButtonVariant.SOLID}"`,
        possibleValue: `${Object.values(ButtonVariant)
          .map(value => `"${value}"`)
          .join(' | ')}`,
        require: 'no',
        description: "Sets the Button's type.",
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
      <Heading>Variants</Heading>
      <ButtonRow>
        <Button>{ButtonVariant.SOLID}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.SOLID_SHADOW}>
          {ButtonVariant.SOLID_SHADOW}
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.GHOST}>{ButtonVariant.GHOST}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.LINK}>{ButtonVariant.LINK}</Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonDisableStory = () => {
  const usage = `/* Solid Button */
<Button disabled>${ButtonVariant.SOLID}</Button>

/* Solid-Shadow Button */
<Button variant="${ButtonVariant.SOLID_SHADOW}" disabled>${ButtonVariant.SOLID_SHADOW}</Button>

/* Ghost Button */
<Button variant="${ButtonVariant.GHOST} disabled">${ButtonVariant.GHOST}</Button>
`;
  const propsObject = {
    'Solid Button, Solid-Shadow Button, Ghost Button': [
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Button to disable state.',
      },
    ],
  };
  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Disabled</Heading>
      <ButtonRow>
        <Button disabled>{ButtonVariant.SOLID}</Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.SOLID_SHADOW} disabled>
          {ButtonVariant.SOLID_SHADOW}
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.GHOST} disabled>
          {ButtonVariant.GHOST}
        </Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonSizeStory = () => {
  const usage = `/* Solid Button */
<Button theme="${ButtonTheme.BLUE}" small>Small</Button>
<Button theme="${ButtonTheme.BLUE}">Normal</Button>
<Button theme="${ButtonTheme.BLUE}" block>Block</Button>

/* Solid-Shadow Button */
<Button variant="${ButtonVariant.SOLID_SHADOW}" small>Small</Button>
<Button variant="${ButtonVariant.SOLID_SHADOW}">Normal</Button>
<Button variant="${ButtonVariant.SOLID_SHADOW}" block>Block</Button>

/* Ghost Button */
<Button variant="${ButtonVariant.GHOST}" small>Small</Button>
<Button variant="${ButtonVariant.GHOST}">Normal</Button>
<Button variant="${ButtonVariant.GHOST}" block>Block</Button>
`;
  const propsObject = {
    'Solid Button, Solid-Shadow Button, Ghost Button': [
      {
        name: 'small',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Button to small version.',
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
      <Heading>Sizes</Heading>
      <ButtonRow>
        <Button theme={ButtonTheme.BLUE} small>
          Small
        </Button>
        <Button theme={ButtonTheme.BLUE}>Normal</Button>
        <BlockButtonContainer>
          <Button theme={ButtonTheme.BLUE} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.SOLID_SHADOW} small>
          Small
        </Button>
        <Button variant={ButtonVariant.SOLID_SHADOW}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={ButtonVariant.SOLID_SHADOW} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.GHOST} small>
          Small
        </Button>
        <Button variant={ButtonVariant.GHOST}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={ButtonVariant.GHOST} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonThemeStory = () => {
  const usage = `<Button theme="${ButtonTheme.BLUE}">Blue</Button>
<Button theme="${ButtonTheme.WHITE}">White</Button>
`;

  const propsObject = {
    'Solid Button': [
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
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Themes</Heading>
      <ButtonRow>
        <Button theme={ButtonTheme.BLUE}>{ButtonTheme.BLUE}</Button>
        <Button theme={ButtonTheme.WHITE}>{ButtonTheme.WHITE}</Button>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonWithIconStory = () => {
  const usage = `/* Solid Button */
<Button startIcon={<ViewIcon />}>Button</Button>
<Button endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Solid-Shadow Button */
<Button variant="${ButtonVariant.SOLID_SHADOW}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${ButtonVariant.SOLID_SHADOW}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Ghost Button */
<Button variant="${ButtonVariant.GHOST}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${ButtonVariant.GHOST}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>`;
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
      <Heading>Button with Icon</Heading>
      <ButtonRow>
        <Button theme={ButtonTheme.BLUE} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button theme={ButtonTheme.BLUE} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.SOLID_SHADOW} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button
          variant={ButtonVariant.SOLID_SHADOW}
          endIcon={<ArrowRoundForwardIcon />}
        >
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={ButtonVariant.GHOST} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button
          variant={ButtonVariant.GHOST}
          endIcon={<ArrowRoundForwardIcon />}
        >
          Button Icon Right
        </Button>
      </ButtonRow>
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
      <Heading>Button with Different Tag</Heading>
      <ButtonRow>
        <Button theme={ButtonTheme.BLUE} tag="a">
          Button as Anchor
        </Button>
      </ButtonRow>
      {Object.values(ButtonVariant).map(type => (
        <ButtonRow key={type}>
          <Button variant={type} tag="a">
            Button as Anchor
          </Button>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  > div {
    margin-right: 20px;
  }
`;

const BlockButtonContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ flex: '0 0 40%' }}>{children}</div>
);

export default ButtonStories;
