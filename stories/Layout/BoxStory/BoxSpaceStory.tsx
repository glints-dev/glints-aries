import * as React from 'react';
import { linkTo } from '@storybook/addon-links';
import styled from 'styled-components';

import { Box } from '../../../src/Layout/Box';
import StorybookComponent from '../../StorybookComponent';
import Heading from '../../../src/General/Heading';

const contentWidth = 80;
const contentHeight = 30;
const marginProps = [
  {
    name: 'm',
    description: 'margin',
  },
  {
    name: 'mt',
    description: 'margin-top',
  },
  {
    name: 'mr',
    description: 'margin-right',
  },
  {
    name: 'mb',
    description: 'margin-bottom',
  },
  {
    name: 'ml',
    description: 'margin-left',
  },
  {
    name: 'mx',
    description: 'margin-left and margin-right',
  },
  {
    name: 'my',
    description: 'margin-top and margin-bottom',
  },
];

const paddingProps = [
  {
    name: 'p',
    description: 'padding',
  },
  {
    name: 'pt',
    description: 'padding-top',
  },
  {
    name: 'pr',
    description: 'padding-right',
  },
  {
    name: 'pb',
    description: 'padding-bottom',
  },
  {
    name: 'pl',
    description: 'padding-left',
  },
  {
    name: 'px',
    description: 'padding-left and padding-right',
  },
  {
    name: 'py',
    description: 'padding-top and padding-bottom',
  },
];

const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: #f3f3f3;
`;

const SpaceText = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${contentWidth}px;
  height: ${contentHeight}px;
  color: black;
`;

const Content = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${contentWidth}px;
  height: ${contentHeight}px;
  background-color: white;
`;

const CustomBox = styled(Box)`
  position: 'relative';
  background-color: '#4caf50';
`;

const directions = ['top', 'right', 'bottom', 'left'];

const usage = `import { Box,  SpacingScales } from 'glints-aries'
<Box
    p={64}
    m={64}
>
    Content
</Box>`;

const propsObject = {
  margin: marginProps.map(value => ({
    ...value,
    type: <code>number | Responsive Space Object</code>,
    defaultValue: '-',
    possibleValue: <a onClick={linkTo('Layout', 'Spacing')}>Spacing</a>,
    require: 'no',
  })),
  padding: paddingProps.map(value => ({
    ...value,
    type: <code>number | Responsive Space Object</code>,
    defaultValue: '-',
    possibleValue: <a onClick={linkTo('Layout', 'Spacing')}>Spacing</a>,
    require: 'no',
  })),
};

const BoxSpaceStory = () => (
  <StorybookComponent title="Box" usage={usage} propsObject={propsObject}>
    <Heading>Space</Heading>
    <Container>
      {directions.map(direction => {
        const isLeftOrRight = direction === 'left' || direction === 'right';
        const width = isLeftOrRight ? '64px' : '100%';
        const height = isLeftOrRight ? '100%' : '64px';

        return (
          <SpaceText key={direction} style={{ width, height, [direction]: 0 }}>
            64px
          </SpaceText>
        );
      })}
      <CustomBox p={64} m={64}>
        {directions.map(direction => {
          const isLeftOrRight = direction === 'left' || direction === 'right';
          const width = isLeftOrRight ? '64px' : '100%';
          const height = isLeftOrRight ? '100%' : '64px';

          return (
            <SpaceText
              key={direction}
              style={{
                width,
                height,
                [isLeftOrRight ? 'top' : 'left']: 0,
                [direction]: 0,
              }}
            >
              64px
            </SpaceText>
          );
        })}
        <Content>Content</Content>
      </CustomBox>
    </Container>
  </StorybookComponent>
);

export default BoxSpaceStory;
