import * as React from 'react';

import Grid from '../../src/Layout/Grid';
import StorybookComponent from '../StorybookComponent';

const props = {
  'Grid.Col': [
    {
      name: 'xs',
      type: 'number',
      defaultValue: '12',
      possibleValue: '0 to 12',
      require: 'no',
      description:
        'Set number of columns you wish to span for extra small devices like phone (<=640px)',
    },
    {
      name: 'sm',
      type: 'number',
      defaultValue: '12',
      possibleValue: '0 to 12',
      require: 'no',
      description:
        'Set number of columns you wish to span for small devices like tablet (<=768px)',
    },
    {
      name: 'md',
      type: 'number',
      defaultValue: '12',
      possibleValue: '0 to 12',
      require: 'no',
      description:
        'Set number of columns you wish to span for medium devices like phone (>=1024px)',
    },
    {
      name: 'xsOrder',
      type: 'number',
      defaultValue: '0',
      possibleValue: '>= 0',
      require: 'no',
      description:
        'Sets the order of the column for extra small devices like phone (<=640px)',
    },
    {
      name: 'smOrder',
      type: 'number',
      defaultValue: '0',
      possibleValue: '>= 0',
      require: 'no',
      description:
        'Sets the order of the column for small devices like tablet (<=768px)',
    },
    {
      name: 'mdOrder',
      type: 'number',
      defaultValue: '0',
      possibleValue: '>= 0',
      require: 'no',
      description:
        'Sets the order of the column for medium devices like phone (>=1024px)',
    },
  ],
  'Grid.Row': [
    {
      name: 'alignContent',
      type: 'string',
      defaultValue: '',
      possibleValue: '',
      require: 'no',
      description:
        'Sets the align-content and align-items css properties for the row.',
    },
    {
      name: 'justifyContent',
      type: 'string',
      defaultValue: '',
      possibleValue: '',
      require: 'no',
      description:
        'Sets the justfiy-content and justfiy-items css properties for the row.',
    },
  ],
};

const Component = (
  <div
    style={{
      backgroundColor: '#027EB7',
      color: 'white',
      textAlign: 'center',
      margin: '5px',
    }}
  >
    Content
  </div>
);

const GridStory = () => (
  <StorybookComponent
    title="Grid"
    code="import { Grid } from 'glints-aries'"
    propsObject={props}
    usage={`<Grid>
  <Grid.Row>
    <Grid.Col xs={12} sm={9} md={3}>
      {Component}
    </Grid.Col>
    <Grid.Col xs={12} sm={3} md={9}>
      {Component}
    </Grid.Col>
  </Grid.Row>
</Grid>
`}
  >
    <Grid>
      <Grid.Row>
        <Grid.Col xs={12} sm={9} md={3}>
          {Component}
        </Grid.Col>
        <Grid.Col xs={12} sm={3} md={9}>
          {Component}
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </StorybookComponent>
);

export default GridStory;
