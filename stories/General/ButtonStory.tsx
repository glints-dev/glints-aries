import * as React from 'react';

import { action } from '@storybook/addon-actions';

import StorybookComponent from '../StorybookComponent';
import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';

import { Variant, Theme } from '../../src/Utils/StyleConfig';

const blockProp = {
  name: 'block',
  type: 'boolean',
  defaultValue: <code>false</code>,
  possibleValue: <code>true | false</code>,
  require: 'no',
  description: '	Sets Button to block type.',
};

const buttonProps = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'default',
    possibleValue: <code>default | primary | secondary | ghost | link</code>,
    require: 'no',
    description: 'Sets the Default Button.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: <code>false</code>,
    possibleValue: <code>true | false</code>,
    require: 'no',
    description: 'Sets Button to disable state.',
  },
  blockProp,
  {
    name: 'small',
    type: 'boolean',
    defaultValue: <code>false</code>,
    possibleValue: <code>true | false</code>,
    require: 'no',
    description: 'Sets Button to small version.',
  },
];

const removeHoverEffectProp = {
  name: 'removeHoverEffect',
  type: 'boolean',
  defaultValue: <code>false</code>,
  possibleValue: <code>true | false</code>,
  require: 'no',
  description: "Removes Button's effect when hovered",
};

const defaultButtonProps = {
  'Default Button': [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>white</code>,
      possibleValue: <code>red | blue | yellow</code>,
      require: 'no',
      description: "Sets the Button's theme",
    },
    ...buttonProps,
    removeHoverEffectProp,
  ],
};

const primaryButtonProps = {
  'Primary Button': [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>white</code>,
      possibleValue: <code>red | blue | blue-red | yellow</code>,
      require: 'no',
      description: "Sets the Button's theme",
    },
    ...buttonProps,
  ],
};

const secondaryButtonProps = {
  'Secondary Button': buttonProps,
};

const ghostButtonProps = {
  'Ghost Button': [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>white</code>,
      possibleValue: <code>red | blue | yellow | white</code>,
      require: 'no',
      description: "Sets the Button's theme",
    },
    ...buttonProps,
    removeHoverEffectProp,
  ],
};

const linkButtonProps = {
  'Link Button': [blockProp],
};

const ButtonStories = () => (
  <React.Fragment>
    <DefaultButtonStory/>
    <Divider theme="grey" />
    <PrimaryButtonStory/>
    <Divider theme="grey" />
    <SecondaryButtonStory/>
    <Divider theme="grey" />
    <GhostButtonStory/>
    <Divider theme="grey" />
    <LinkButtonStory/>
  </React.Fragment>
);

const DefaultButtonStory = () => (
  <StorybookComponent
  title="Button"
  code="import { Button } from 'glints-aries'"
  propsObject={defaultButtonProps}
  usage={`<Button
theme="blue"
>
Default
</Button>`}
>
  <div style={{ marginBottom: '2em' }}>
    <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
      Default Button
    </Heading>
    <Button theme="blue" onClick={action('Default Button')}>
      Default
    </Button>
  </div>
</StorybookComponent>
)

const PrimaryButtonStory = () => (
  <StorybookComponent
  propsObject={primaryButtonProps}
  usage={`<Button
variant='primary'
theme='yellow'
>
Primary
</Button>`}
>
  <div style={{ marginBottom: '2em' }}>
    <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
      Primary Button
    </Heading>
    <Button
      variant={Variant.PRIMARY}
      theme={Theme.YELLOW}
      onClick={action('Primary Button')}
    >
      Primary
    </Button>
  </div>
</StorybookComponent>
)

const SecondaryButtonStory = () => (
  <StorybookComponent
      propsObject={secondaryButtonProps}
      usage={`<Button
  variant="secondary"
>
  Secondary
</Button>`}
    >
      <div style={{ marginBottom: '2em' }}>
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Secondary Button
        </Heading>
        <Button
          variant={Variant.SECONDARY}
          onClick={action('Secondary Button')}
        >
          Secondary
        </Button>
      </div>
    </StorybookComponent>
)

const GhostButtonStory = () => (
  <StorybookComponent
      propsObject={ghostButtonProps}
      usage={`<Button
  variant="ghost"
  theme="blue"
>
  Ghost
</Button>`}
    >
      <div style={{ marginBottom: '2em' }}>
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Ghost Button
        </Heading>
        <Button
          variant={Variant.GHOST}
          theme={Theme.BLUE}
          onClick={action('Ghost Button')}
        >
          Ghost
        </Button>
      </div>
    </StorybookComponent>
)

const LinkButtonStory = () => (
  <StorybookComponent
      propsObject={linkButtonProps}
      usage={`<Button
  variant="link"
  theme="blue"
>
  Link
</Button>`}
    >
      <div style={{ marginBottom: '2em' }}>
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Link Button
        </Heading>
        <Button variant={Variant.LINK} onClick={action('Link Button')}>
          Link
        </Button>
      </div>
    </StorybookComponent>
)

export default ButtonStories;
