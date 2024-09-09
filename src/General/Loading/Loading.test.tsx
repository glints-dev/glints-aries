import { render } from '@testing-library/react';
import * as React from 'react';

import Loading from './Loading';

const loading = <Loading />;

describe('<Loading>', () => {
  it('should render as expected', () => {
    const { asFragment } = render(loading);
    expect(asFragment()).toMatchSnapshot();
  });
});
