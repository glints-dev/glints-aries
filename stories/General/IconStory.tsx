import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import * as AllIcons from '../../src/General/Icon/components';
import { StarIcon } from '../../src/General/Icon/components';

const props = {
  Icon: [
    {
      name: 'width',
      type: 'string | number',
      defaultValue: <code>1em</code>,
      possibleValue: <code>any</code>,
      require: 'no',
      description: 'Sets width of icon.',
    },
    {
      name: 'height',
      type: 'string | number',
      defaultValue: <code>1em</code>,
      possibleValue: <code>any</code>,
      require: 'no',
      description: 'Sets height of icon.',
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: <code>{`currentColor (inherit parent's color)`}</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: 'Sets color for icon.',
    },
    {
      name: 'size',
      type: 'string',
      defaultValue: <code>s</code>,
      possibleValue: <code>xxs | xs | s | m | l | xl | xxl | xxxl</code>,
      require: 'no',
      description: [
        'Sets size of the icon',
        <p
          key="sizeChart"
          style={{
            marginBottom: '0',
            marginTop: '1em',
            fontWeight: 'bold',
          }}
        >
          Size chart:
        </p>,
        <p key="xxs" style={{ margin: '0' }}>
          xxs: 12px
        </p>,
        <p key="xs" style={{ margin: '0' }}>
          xs: 16px
        </p>,
        <p key="s" style={{ margin: '0' }}>
          s: 24px
        </p>,
        <p key="m" style={{ margin: '0' }}>
          m: 32px
        </p>,
        <p key="l" style={{ margin: '0' }}>
          l: 48px
        </p>,
        <p key="xl" style={{ margin: '0' }}>
          xl: 64px
        </p>,
        <p key="xxl" style={{ margin: '0' }}>
          xxl: 96px
        </p>,
        <p key="xxxl" style={{ margin: '0' }}>
          xxxl: 128px
        </p>,
      ],
    },
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: '',
    },
  ],
};

const { ThumbsUpOutlineIcon } = AllIcons;

const DefaultIcon = (
  <div style={{ color: 'blue' }}>
    <ThumbsUpOutlineIcon />
    <span style={{ fontSize: '24px', verticalAlign: 'middle' }}>
      &nbsp;Icon is vertical centered and inherit color by default
    </span>
  </div>
);

const LikeButton = styled(ThumbsUpOutlineIcon)`
  cursor: pointer;
  :hover {
    fill: red;
  }
`;

const CustomIcon = (
  <LikeButton
    width={50}
    height="100%"
    color="green"
    onClick={() => alert('Liked!')}
  />
);

const IconStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Default Icon"
      code="import { ThumbsUpOutlineIcon } from 'glints-aries'"
    >
      {DefaultIcon}
    </StorybookComponent>
    <StorybookComponent
      title="Custom Icon"
      propsObject={props}
      usage={`
const LikeButton = styled(ThumbsUpOutlineIcon)\`
  cursor: pointer;
  :hover {
    fill: red;
  }
\`;
<LikeButton
  width={50}
  height="100%"
  color="green"
  onClick={() => alert('Liked!')}
/>
    `}
    >
      {CustomIcon}
    </StorybookComponent>
    <StorybookComponent title="Icon Library" disableUsage={true}>
      <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px' }}>
        {Object.values(AllIcons)
          .sort()
          .map(Icon => (
            <div style={{ flex: '1 1 20%', margin: '1em' }} key={Icon.name}>
              <Icon />
              <p style={{ marginTop: '1em', fontSize: '12px' }}>
                <code style={{ fontSize: '14px' }}>{Icon.name}</code>
              </p>
            </div>
          ))}
      </div>
    </StorybookComponent>
    <StorybookComponent
      title="Icon Sizes"
      usage={` <StarIcon size='xxs' />
      <StarIcon size='xs' />
      <StarIcon size='s' />
      <StarIcon size='m' />
      <StarIcon size='l' />
      <StarIcon size='xl' />
      <StarIcon size='xxl' />
      <StarIcon size='xxxl' />
      `}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="xxs" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>XX-Small (12px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="xs" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>X-Small (16px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="s" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>Small (24px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="m" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>Medium (32px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="l" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>Large (48px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="xl" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>X-Large (64px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="xxl" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>XX-Large (96px)</code>
          </p>
        </div>
        <div style={{ flex: '1 1 20%', margin: '1em' }}>
          <StarIcon size="xxxl" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>XX-Small (12px)</code>
          </p>
        </div>
      </div>
    </StorybookComponent>
  </React.Fragment>
);

export default IconStory;
