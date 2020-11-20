import * as React from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';

import StorybookComponent from '../StorybookComponent';
import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  ViewIcon,
  ArrowRoundForwardIcon,
} from '../../src/General/Icon/components';

import { ButtonVariant } from '../../src/Utils/StyleConfig';

const ButtonVariantWithoutLink = omit(ButtonVariant, ['LINK']);
const AllButtonNamesWithoutLink =
  'Solid-White Button, Solid-Blue Button, Yellow Button, Ghost Button, White-Grey Button';

const ButtonStories = () => (
  <React.Fragment>
    <ButtonVariantStory />
    <Divider theme="grey" />
    <ButtonDisableStory />
    <Divider theme="grey" />
    <ButtonSizeStory />
    <Divider theme="grey" />
    <ButtonWithIconStory />
    <Divider theme="grey" />
    <ButtonWithTagStory />
  </React.Fragment>
);

const ButtonVariantStory = () => {
  const usage = `/* Solid-White Button */
<Button>${ButtonVariant.SOLID_WHITE}</Button>

/* Solid-Blue Button */
<Button>${ButtonVariant.SOLID_BLUE}</Button>

/* Yellow Button */
<Button variant="${ButtonVariant.YELLOW}">${ButtonVariant.YELLOW}</Button>

/* Ghost Button */
<Button variant="${ButtonVariant.GHOST}">${ButtonVariant.GHOST}</Button>

/* White-Grey Button */
<Button variant="${ButtonVariant.WHITE_GREY}">${ButtonVariant.WHITE_GREY}</Button>

/* Link Button */
<Button variant="${ButtonVariant.LINK}">${ButtonVariant.LINK}</Button>
`;
  const propsObject = {
    All: [
      {
        name: 'variant',
        type: 'string',
        defaultValue: `"${ButtonVariant.SOLID_WHITE}"`,
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
      {Object.values(ButtonVariant).map(variant => (
        <ButtonRow key={variant}>
          <Button variant={variant}>{variant}</Button>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonDisableStory = () => {
  const usage = `<Button disabled>disabled</Button>`;
  const propsObject = {
    [AllButtonNamesWithoutLink]: [
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
      {Object.values(ButtonVariant).map(variant => (
        <ButtonRow key={variant}>
          <Button variant={variant} disabled>
            {variant}
          </Button>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonSizeStory = () => {
  const usage = `<Button small>Small</Button>
<Button>Normal</Button>
<Button block>Block</Button>`;
  const propsObject = {
    [AllButtonNamesWithoutLink]: [
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
      {Object.values(ButtonVariantWithoutLink).map(variant => (
        <ButtonRow key={variant}>
          <Button variant={variant} small>
            Small
          </Button>
          <Button variant={variant}>Normal</Button>
          <BlockButtonContainer>
            <Button variant={variant} block>
              Block
            </Button>
          </BlockButtonContainer>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonWithIconStory = () => {
  const usage = `<Button startIcon={<ViewIcon />}>Button</Button>
<Button endIcon={<ArrowRoundForwardIcon />}>Button</Button>`;
  const propsObject = {
    [AllButtonNamesWithoutLink]: [
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
      {Object.values(ButtonVariant).map(variant => (
        <ButtonRow key={variant}>
          <Button variant={variant} startIcon={<ViewIcon />}>
            Button Icon Left
          </Button>
          <Button variant={variant} endIcon={<ArrowRoundForwardIcon />}>
            Button Icon Right
          </Button>
        </ButtonRow>
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
      <Heading>Button with Different Tag</Heading>
      {Object.values(ButtonVariant).map(variant => (
        <ButtonRow key={variant}>
          <Button variant={variant} tag="a">
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

  > button,
  > div {
    margin-right: 20px;
  }
`;

const BlockButtonContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ flex: '0 0 40%' }}>{children}</div>
);

export default ButtonStories;
