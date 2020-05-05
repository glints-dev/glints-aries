import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Breadcrumb from './Breadcrumb';

const oneItem = (
  <Breadcrumb>
    <Breadcrumb.Item>one</Breadcrumb.Item>
  </Breadcrumb>
);

const twoItems = (
  <Breadcrumb>
    <Breadcrumb.Item>one</Breadcrumb.Item>
    <Breadcrumb.Item>two</Breadcrumb.Item>
  </Breadcrumb>
);

describe('<Breadcrumb>', () => {
  it('should render as expected', () => {
    const oneItemSnapshot = renderer.create(oneItem).toJSON();
    expect(oneItemSnapshot).toMatchSnapshot();

    const twoItemsSnapshot = renderer.create(twoItems).toJSON();
    expect(twoItemsSnapshot).toMatchSnapshot();
  });
});
