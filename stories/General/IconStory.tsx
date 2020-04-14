import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import * as AllIcons from '../../src/General/Icon/components';

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
  </React.Fragment>
);

export default IconStory;
