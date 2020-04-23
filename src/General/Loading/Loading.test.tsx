import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loading from './Loading';

const loading = <Loading />;

describe('<Loading>', () => {
  it('should render as expected', () => {
    const loadingSnapshot = renderer.create(loading).toJSON();
    expect(loadingSnapshot).toMatchSnapshot();
  });
});
