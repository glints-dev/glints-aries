import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import Button, {
  DeprecatedThemeMap,
  DeprecatedSecondayVariant,
} from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import {
  ViewIcon,
  ArrowRoundForwardIcon,
} from '../../src/General/Icon/components';

import { Variant, Theme } from '../../src/Utils/StyleConfig';

const blockProp = {
  name: 'block',
  type: 'boolean',
  defaultValue: <code>false</code>,
  possibleValue: <code>true | false</code>,
  require: 'no',
  description: 'Make the button fit to its parent width.',
};

const smallProp = {
  name: 'small',
  type: 'boolean',
  defaultValue: <code>false</code>,
  possibleValue: <code>true | false</code>,
  require: 'no',
  description: 'Sets Button to small version.',
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
  smallProp,
  {
    name: 'tag',
    type: 'React.ElementType',
    defaultValue: <code>button</code>,
    possibleValue: 'any valid html tag e.g. "a"',
    require: 'no',
    description: 'Changes the tag with which the button will render.',
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
      possibleValue: <code>white | red | blue | yellow</code>,
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
      defaultValue: <code>yellow</code>,
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
  'Ghost Button': [...buttonProps, removeHoverEffectProp],
};

const linkButtonProps = {
  'Link Button': [blockProp],
};

const ButtonStories = () => (
  <React.Fragment>
    <ButtonSizeStory />
    <Divider theme="grey" />
    <ButtonThemeStory />
    <Divider theme="grey" />
    <ButtonWithIconStory />
    <Divider theme="grey" />
    <ButtonWithTagStory />
    <Divider theme="grey" />
    <DefaultButtonStory />
    <Divider theme="grey" />
    <PrimaryButtonStory />
    <Divider theme="grey" />
    <GhostButtonStory />
    <Divider theme="grey" />
    <LinkButtonStory />
    <Divider theme="grey" />
    <SecondaryButtonStory />
  </React.Fragment>
);

const ButtonSizeStory = () => {
  const usage = `/* Default Button */
<Button theme="${Theme.BLUE}" small>Small</Button>
<Button theme="${Theme.BLUE}">Normal</Button>
<Button theme="${Theme.BLUE}" block>Block</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}" small>Small</Button>
<Button variant="${Variant.PRIMARY}">Normal</Button>
<Button variant="${Variant.PRIMARY}" block>Block</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST}" small>Small</Button>
<Button variant="${Variant.GHOST}">Normal</Button>
<Button variant="${Variant.GHOST}" block>Block</Button>
`;
  const propsObject = {
    'Default Button, Primary Button, Ghost Button': [smallProp, blockProp],
  };

  return (
    <StorybookComponent usage={usage} propsObject={propsObject}>
      <Heading>Sizes</Heading>
      <ButtonRow>
        <Button theme={Theme.BLUE} small>
          Small
        </Button>
        <Button theme={Theme.BLUE}>Normal</Button>
        <BlockButtonContainer>
          <Button theme={Theme.BLUE} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY} small>
          Small
        </Button>
        <Button variant={Variant.PRIMARY}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={Variant.PRIMARY} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} small>
          Small
        </Button>
        <Button variant={Variant.GHOST}>Normal</Button>
        <BlockButtonContainer>
          <Button variant={Variant.GHOST} block>
            Block
          </Button>
        </BlockButtonContainer>
      </ButtonRow>
    </StorybookComponent>
  );
};

const ButtonThemeStory = () => {
  const usage = `<Button theme="${Theme.BLUE}">Blue</Button>
<Button theme="${Theme.WHITE}">White</Button>
`;

  const propsObject = {
    'Default Button': [
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
        <Button theme={Theme.BLUE}>{Theme.BLUE}</Button>
        <Button theme={Theme.WHITE}>{Theme.WHITE}</Button>
      </ButtonRow>
      <Heading style={{ fontSize: '20px' }}>Deprecated themes</Heading>
      The following themes will be deprecated in v5 after we refactor out all
      uses of them in our codebases, so please avoid using them altogether.
      {Object.keys(DeprecatedThemeMap).map(variant => (
        <ButtonRow key={variant}>
          {DeprecatedThemeMap[variant].map(theme => (
            <Button key={theme} variant={variant} theme={theme}>
              {theme}
            </Button>
          ))}
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

const ButtonWithIconStory = () => {
  const usage = `/* Default Button */
<Button startIcon={<ViewIcon />}>Button</Button>
<Button endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Primary Button */
<Button variant="${Variant.PRIMARY}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${Variant.PRIMARY}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>

/* Ghost Button */
<Button variant="${Variant.GHOST}" startIcon={<ViewIcon />}>Button</Button>
<Button variant="${Variant.GHOST}" endIcon={<ArrowRoundForwardIcon />}>Button</Button>`;
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
        <Button theme={Theme.BLUE} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button theme={Theme.BLUE} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.PRIMARY} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button variant={Variant.PRIMARY} endIcon={<ArrowRoundForwardIcon />}>
          Button Icon Right
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button variant={Variant.GHOST} startIcon={<ViewIcon />}>
          Button Icon Left
        </Button>
        <Button variant={Variant.GHOST} endIcon={<ArrowRoundForwardIcon />}>
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
        <Button theme={Theme.BLUE} tag="a">
          Button as Anchor
        </Button>
      </ButtonRow>
      {Object.values(Variant).map(type => (
        <ButtonRow key={type}>
          <Button variant={type} tag="a">
            Button as Anchor
          </Button>
        </ButtonRow>
      ))}
    </StorybookComponent>
  );
};

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
          <Button theme={Theme.WHITE} onClick={() => null}>
            Default
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button theme={Theme.RED} onClick={() => null}>
            Red
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button theme={Theme.BLUE} onClick={() => null}>
            Blue
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button theme={Theme.YELLOW} onClick={() => null}>
            Yellow
          </Button>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
          <Button disabled onClick={() => null}>
            Disabled
          </Button>
        </ButtonContainer>
        <BlockButtonContainer>
          <Button theme={Theme.YELLOW} block onClick={() => null}>
            Block
          </Button>
        </BlockButtonContainer>
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
</Button>`}
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
            onClick={() => null}
          >
            Yellow
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.RED}
            onClick={() => null}
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
            onClick={() => null}
          >
            Blue
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            variant={Variant.PRIMARY}
            theme={Theme.BLUE_RED}
            onClick={() => null}
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
            onClick={() => null}
          >
            Block
          </Button>
        </BlockButtonContainer>
        <ButtonContainer>
          <Button variant={Variant.PRIMARY} disabled onClick={() => null}>
            Disabled
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
        [DEPRECATED] Secondary Button
      </Heading>
      <Button variant={DeprecatedSecondayVariant} onClick={() => null}>
        Secondary
      </Button>
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
      <Button variant={Variant.GHOST} theme={Theme.BLUE} onClick={() => null}>
        Ghost
      </Button>
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
      <Button variant={Variant.LINK} onClick={() => null}>
        Link
      </Button>
    </div>
  </StorybookComponent>
);

// const ButtonRow: React.FunctionComponent = ({ children }) => (
//   <div
//     style={{
//       display: 'flex',
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginTop: '15px',
//       marginBottom: '15px',
//     }}
//   >
//     {children}
//   </div>
// );

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

const ButtonContainer: React.FunctionComponent = ({ children }) => (
  <div style={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center' }}>
    {children}
  </div>
);

export default ButtonStories;
