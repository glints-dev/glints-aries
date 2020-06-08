import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, queryByTestId } from '@testing-library/react';

import Drawer from './Drawer';

describe('<Drawer /> render', () => {
  test('should match snapshot when open', () => {
    const snapshot = renderer
      .create(
        <Drawer isOpen={true} onClose={jest.fn()}>
          test-content
        </Drawer>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('should match snapshot when not open', () => {
    const snapshot = renderer
      .create(
        <Drawer isOpen={false} onClose={jest.fn()}>
          test-content
        </Drawer>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('<Drawer/> behaviour', () => {
  test('onClose callback should be called when container is clicked', async () => {
    const onClose = jest.fn();
    render(
      <Drawer isOpen={false} onClose={onClose}>
        test-content
      </Drawer>
    );

    const drawerWrapper = queryByTestId(document.body, 'drawer-wrapper');
    fireEvent.click(drawerWrapper);

    expect(onClose).not.toHaveBeenCalled();

    const drawerContainer = queryByTestId(document.body, 'drawer-container');
    fireEvent.click(drawerContainer);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should remove overflow hidden from document body after close', () => {
    const onClose = jest.fn();

    const { rerender } = render(
      <Drawer isOpen={false} onClose={onClose}>
        test-content
      </Drawer>
    );
    const drawerContainer = queryByTestId(document.body, 'drawer-container');
    expect(drawerContainer).toHaveAttribute('aria-hidden', 'true');

    // rerender here will render the same component again, thus triggering the
    // internal update logic
    rerender(
      <Drawer isOpen={true} onClose={onClose}>
        test-content
      </Drawer>
    );
    expect(drawerContainer).toHaveAttribute('aria-hidden', 'false');
  });
});
