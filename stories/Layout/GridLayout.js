import React, { Component } from 'react';

import Grid from '../../src/Layout/Grid';

class GridLayout extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Col md={12}>
            <div style={{ backgroundColor: 'blue', margin: '5px' }}>1</div>
          </Grid.Col>
          <Grid.Col md={4}>
            <div style={{ backgroundColor: 'blue', margin: '5px' }}>1</div>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GridLayout;
