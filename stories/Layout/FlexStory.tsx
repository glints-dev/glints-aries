import * as React from 'react';
import styled from 'styled-components';
import { kebabCase } from 'lodash';

import { propsObject as SpacingProps } from './BoxStory/BoxSpaceStory';
import { Flex } from '../../src/Layout/Flex';
import {
  FlexPropAndDefaultValueMap,
  FlexPropAndPossibleValueMap,
} from '../../src/Layout/Flex/types';

import StorybookComponent from '../StorybookComponent';

const props = {
  Flex: Object.entries(FlexPropAndDefaultValueMap).map(
    ([property, defaultValue]) => {
      return {
        name: property,
        type: 'string',
        defaultValue,
        possibleValue: (FlexPropAndPossibleValueMap[
          property as keyof typeof FlexPropAndPossibleValueMap
        ] as string[])
          .map(value => `"${value}"`)
          .join(' | '),
        require: 'no',
        description: (
          <>
            CSS property <code>{kebabCase(property)}</code>
          </>
        ),
      };
    }
  ),
  ...SpacingProps,
};

const FlexCenterXY = styled(Flex).attrs({
  alignItems: 'center',
  justifyContent: 'center',
})``;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px solid #4caf50;
`;

const Content = styled(FlexCenterXY)`
  width: 100px;
  height: 50px;
  background-color: #4caf50;
`;

const SpacingText = styled(FlexCenterXY)`
  position: absolute;
  width: 100%;
  height: 32px;
  text-align: center;
`;

const usage = `import { Flex } from 'glints-aries'

<Border>
  <Flex
    alignItems="center"
    justifyContent="center"
    mx="auto"
    mt={32}
  >
    Flex
  </Flex>
</Border>
`;

const FlexStory = () => (
  <StorybookComponent
    title="Flex"
    code="import { Flex } from 'glints-aries'"
    propsObject={props}
    usage={usage}
  >
    <Container>
      <SpacingText>mt: 32px</SpacingText>
      <Content
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mt={32}
        flexWrap="nowrap"
      >
        Flex
      </Content>
    </Container>
  </StorybookComponent>
);

export default FlexStory;
