import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';
import { PrimaryColor } from '../../src/Style/Colors';
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
      defaultValue: <code>black</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: 'Sets color for icon.',
    },
  ],
};

const LikeButton = styled(AllIcons.ThumbsUpOutlineIcon)`
  cursor: pointer;
  :hover {
    fill: ${PrimaryColor.glintsred};
  }
`;

const IconStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Icon"
      code="import { AddCircleOutlineIcon } from 'glints-aries'"
      propsObject={props}
      usage={'<AddCircleOutlineIcon />'}
    >
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
      title="Custom Icon"
      usage={`
import styled from 'styled-components';
import { ThumbsUpOutlineIcon, PrimaryColor } from 'glints-aries';

const LikeButton = styled(ThumbsUpOutlineIcon)\`
  cursor: pointer;
  :hover {
    fill: ${PrimaryColor.glintsred};
  }
\`;

<LikeButton width={50} height="100%" onClick={() => alert('Liked!')} />
    `}
    >
      <LikeButton width={50} height="100%" onClick={() => alert('Liked!')} />
    </StorybookComponent>
  </React.Fragment>
);

export default IconStory;
