import * as React from 'react';

import Heading from '../../../src/General/Heading';
import { Box } from '../../../src/Layout/Box';
import StorybookComponent from '../../StorybookComponent';
import { Container, Card, List as StyledList } from './BoxLayoutStoryStyle';

const usage = `<Box
    p={24}
    flexDirection={{ ms: 'column', ds: 'row' }}
    component={List}
>
    <Card value="1" />
    <Card value="2" />
</Box>
`;

const propsObject = {
  Layout: [
    {
      name: 'flexDirection',
      type: 'string',
      defaultValue: '-',
      possibleValue: '"column" | "row"',
      require: 'no',
      description: 'Make Box be flexbox and set CSS flex-direction Property',
    },
    {
      name: 'component',
      type: 'React.ElementType | HTML tag',
      defaultValue: '"div"',
      possibleValue: 'ReactComponent | "section"',
      require: 'no',
      description: 'The component/ tag used for the root node	',
    },
  ],
};

const List: React.FC = ({ children, ...rest }) => (
  <StyledList {...rest}>
    <p>List</p>
    {children}
  </StyledList>
);

const BoxLayoutStory = () => (
  <StorybookComponent usage={usage} propsObject={propsObject}>
    <Heading>Layout</Heading>
    <h3>Resize the viewport to see the responsive flexDirection change</h3>
    <Container>
      <Box p={24} flexDirection={{ ms: 'column', ds: 'row' }} component={List}>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
      </Box>
    </Container>
  </StorybookComponent>
);

export default BoxLayoutStory;
