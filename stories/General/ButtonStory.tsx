import * as React from 'react';

import { action } from '@storybook/addon-actions';

import StorybookComponent from '../StorybookComponent';
import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  CloseIcon,
  ArrowNextIcon,
  ArrowBackIcon,
} from '../../src/General/Icon/components'

import { SecondaryColor } from '../../src/Style/Colors'

import { Variant, Theme, Shape, Position } from '../../src/Utils/StyleConfig';

const blockProp = {
  name: 'block',
  type: 'boolean',
  defaultValue: <code>false</code>,
  possibleValue: <code>true | false</code>,
  require: 'no',
  description: '	Sets Button to block type.',
};

const shapeProp = {
  name: 'shape',
  type: 'string',
  defaultValue: <code>default</code>,
  possibleValue: <code>default | square</code>,
  require: 'no',
  description: '	Sets a border to the icon button',
};

const buttonProps = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'default',
    possibleValue: <code>default | primary | secondary | ghost | link | icon</code>,
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

const iconButtonProps = {
  'Icon Button': [shapeProp],
};

const ButtonStories = () => (
  <React.Fragment>
    <DefaultButtonStory />
    <Divider theme="grey" />
    <PrimaryButtonStory />
    <Divider theme="grey" />
    <SecondaryButtonStory />
    <Divider theme="grey" />
    <GhostButtonStory />
    <Divider theme="grey" />
    <LinkButtonStory />
    <Divider theme="grey" />
    <IconButtonStory />
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
      <ButtonRow>
        <ButtonContainer>
          <Button theme={Theme.WHITE} onClick={action('Default Button')}>
            Default
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button theme={Theme.RED} onClick={action('Default Button')}>
            Red
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button theme={Theme.BLUE} onClick={action('Default Button')}>
            Blue
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button theme={Theme.YELLOW} onClick={action('Default Button')}>
            Yellow
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button disabled onClick={action('Default Button')}>
            Disabled
          </Button>
        </ButtonContainer>
        <BlockButtonContainer>
          <Button theme={Theme.YELLOW} block onClick={action('Default Button')}>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button theme={Theme.BLUE} onClick={action('Default Button')}>
            Default
            <ArrowBackIcon
              position={Position.LEFT}
              color={SecondaryColor.white}
            />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button theme={Theme.BLUE} onClick={action('Default Button')}>
            Default
            <ArrowNextIcon
              position={Position.RIGHT}
              color={SecondaryColor.white}
            />
          </Button>
        </ButtonContainer>
      </ButtonRow>
    </div>
  </StorybookComponent>
);

const PrimaryButtonStory = () => (
  <StorybookComponent
    propsObject={primaryButtonProps}
    usage={`<Button
variant='primary'
theme='yellow'
>
Primary
</Button>

For Icon button
<Button
variant='primary'
theme='yellow'
>
Primary <ArrowNextIcon position='left' />
</Button>
`}
  >
    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Primary Button
      </Heading>
      <ButtonRow>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.YELLOW}
            onClick={action('Primary Button')}
          >
            Yellow
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.RED}
            onClick={action('Primary Button')}
          >
            Red
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.BLUE}
            onClick={action('Primary Button')}
          >
            Blue
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.BLUE_RED}
            onClick={action('Primary Button')}
          >
            Blue-Red
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <BlockButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.YELLOW}
            block
            onClick={action('Primary Button')}
          >
            Block
          </Button>
        </BlockButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            disabled
            onClick={action('Primary Button')}
          >
            Disabled
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.YELLOW}
            onClick={action('Primary Button')}
          >
            Yellow <ArrowBackIcon position={Position.LEFT} />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.YELLOW}
            onClick={action('Primary Button')}
          >
            Yellow <ArrowNextIcon position={Position.RIGHT} />
          </Button>
        </ButtonContainer>
      </ButtonRow>
    </div>
  </StorybookComponent>
);

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
      <ButtonRow>
        <Button variant={Variant.SECONDARY} onClick={action('Secondary Button')}>
          Secondary
        </Button>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button variant={Variant.SECONDARY} onClick={action('Secondary Button')}>
            Secondary <ArrowBackIcon position={Position.LEFT} />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button variant={Variant.SECONDARY} onClick={action('Secondary Button')}>
            Secondary <ArrowNextIcon position={Position.RIGHT} />
          </Button>
        </ButtonContainer>
      </ButtonRow>
    </div>
  </StorybookComponent>
);

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
      <ButtonRow>
        <Button
          variant={Variant.GHOST}
          theme={Theme.BLUE}
          onClick={action('Ghost Button')}
        >
          Ghost
        </Button>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button
            variant={Variant.GHOST}
            theme={Theme.BLUE}
            onClick={action('Ghost Button')}
          >
            Ghost <ArrowBackIcon position={Position.LEFT} />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.GHOST}
            theme={Theme.BLUE}
            onClick={action('Ghost Button')}
          >
            Ghost <ArrowNextIcon position={Position.RIGHT} />
          </Button>
        </ButtonContainer>
      </ButtonRow>
    </div>
  </StorybookComponent>
);

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
);

const IconButtonStory = () => (
  <StorybookComponent
    propsObject={iconButtonProps}
    usage={`<Button
  variant="icon"
>
  <CloseIcon />
</Button>`}
  >
    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Icon Button
      </Heading>
      <ButtonRow>
        <ButtonContainer>
          <Button variant={Variant.ICON} onClick={action('Icon Button')}>
            <CloseIcon color={SecondaryColor.grey} />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button variant={Variant.ICON} shape={Shape.SQUARE} onClick={action('Icon Button')}>
            <CloseIcon color={SecondaryColor.grey} />
          </Button>
        </ButtonContainer>
      </ButtonRow>
    </div>
  </StorybookComponent>
);

const ButtonRow = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '2em',
    }}
  >
    {children}
  </div>
);

const BlockButtonContainer = ({ children }) => (
  <div style={{ flex: '0 0 40%' }}>{children}</div>
);

const ButtonContainer = ({ children }) => (
  <div style={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center' }}>
    {children}
  </div>
);

export default ButtonStories;
