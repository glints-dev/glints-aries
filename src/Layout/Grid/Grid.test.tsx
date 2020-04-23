import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Grid from './index';

describe('<Grid/> snapshots', () => {
  test('should match snapshot without props alignContent and justifyContent', () => {
    const { asFragment } = render(
      <Grid>
        <Grid.Row>
          <Grid.Col xs={12} sm={9} md={3}>
            mock content
          </Grid.Col>
          <Grid.Col xs={12} sm={3} md={9}>
            mock content
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should match snapshot with props alignContent and justifyContent', () => {
    const { asFragment } = render(
      <Grid>
        <Grid.Row alignContent="center" justifyContent="center">
          <Grid.Col xs={12} sm={9} md={3}>
            mock content
          </Grid.Col>
          <Grid.Col xs={12} sm={3} md={9}>
            mock content
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
