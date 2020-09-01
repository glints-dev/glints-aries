import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

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

  it('should show correct slash count', () => {
    const { queryAllByText } = render(
      <Breadcrumb>
        <div>
          <Breadcrumb.Item>one</Breadcrumb.Item>
          <Breadcrumb.Item>two</Breadcrumb.Item>
          <Breadcrumb.Item>three</Breadcrumb.Item>
        </div>
      </Breadcrumb>
    );

    const slashes = queryAllByText('/');

    expect(slashes.length).toEqual(3);

    slashes.forEach((slash, index) => {
      if (index === slashes.length - 1) {
        expect(slash).not.toBeVisible();
      } else {
        expect(slash).toBeVisible();
      }
    });
  });
});
