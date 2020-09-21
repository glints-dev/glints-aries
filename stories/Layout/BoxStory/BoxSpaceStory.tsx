import * as React from 'react';
import { linkTo } from '@storybook/addon-links';
import styled from 'styled-components';

import Heading from '../../../src/General/Heading';
import { Box } from '../../../src/Layout/Box';
import { ScreenSize } from '../../../src/Utils/StyleConfig';
import StorybookComponent from '../../StorybookComponent';
import { BreakpointAliasTable } from './BreakpointAliasTable';

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

const MobileText = styled.span`
  @media (min-width: ${ScreenSize.desktopS}px) {
    display: none;
  }
`;

const DesktopText = styled.span`
  display: none;
  @media (min-width: ${ScreenSize.desktopS}px) {
    display: block;
  }
`;

const directions = ['top', 'right', 'bottom', 'left'];

const usage = `import { Box } from 'glints-aries'
// responsive space object
const responsivePadding = {
    default: 32,
    ds: 64
};

<Box
    p={responsivePadding}
    m={64}
>
    Content
</Box>

// equal to

const Box = styled.div\` 
    margin: 64px;
    padding: 32px;
    
    @media (min-width: 1024px) {
      padding: 64px;
    }
\`;
`;

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
    <h3>Resize the viewport to see the responsive padding change</h3>
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
      <CustomBox
        p={{
          default: 32,
          ds: 64,
        }}
        m={64}
      >
        {directions.map(direction => {
          const calcPosition = (space: number) =>
            direction === 'left' || direction === 'right'
              ? space / 2 - contentWidth / 2
              : space / 2 - contentHeight / 2;

          return (
            <>
              <MobileText>
                <SpaceText
                  key={direction}
                  style={{
                    [direction]: `${calcPosition(32)}px`,
                  }}
                >
                  32px
                </SpaceText>
              </MobileText>
              <DesktopText>
                <SpaceText
                  key={direction}
                  style={{
                    [direction]: `${calcPosition(64)}px`,
                  }}
                >
                  64px
                </SpaceText>
              </DesktopText>
            </>
          );
        })}
        <Content>Content</Content>
      </CustomBox>
    </Container>
    <Box mt={16}>
      <BreakpointAliasTable />
    </Box>
  </StorybookComponent>
);

export default BoxSpaceStory;
