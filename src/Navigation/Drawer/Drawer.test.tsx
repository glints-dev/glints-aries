import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, queryByTestId } from '@testing-library/react';

import Drawer, { DrawerPosition } from './Drawer';

describe('<Drawer /> render', () => {
  const matchSnapshot = (position: DrawerPosition) => {
    test(`should match snapshot when position is ${position} and drawer is open`, () => {
      const snapshot = renderer
        .create(
          <Drawer isOpen={true} position={position} onClose={jest.fn()}>
            test-content
          </Drawer>
        )
        .toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    test(`should match snapshot when position is ${position} and drawer is closed`, () => {
      const snapshot = renderer
        .create(
          <Drawer isOpen={false} position={position} onClose={jest.fn()}>
            test-content
          </Drawer>
        )
        .toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  };

  ['left', 'right', undefined].forEach(matchSnapshot);
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

  it('should add overflow hidden to container element on open', () => {
    const onClose = jest.fn();
    const containerElement = document.body;

    const { rerender } = render(
      <Drawer
        isOpen={false}
        onClose={onClose}
        getContainerElement={() => containerElement}
      >
        test-content
      </Drawer>
    );
    expect(containerElement).toHaveStyle('overflow: scroll');

    rerender(
      <Drawer
        isOpen={true}
        onClose={onClose}
        getContainerElement={() => containerElement}
      >
        test-content
      </Drawer>
    );
    expect(containerElement).toHaveStyle('overflow: hidden');

    rerender(
      <Drawer
        isOpen={false}
        onClose={onClose}
        getContainerElement={() => containerElement}
      >
        test-content
      </Drawer>
    );
    expect(containerElement).toHaveStyle('overflow: scroll');
  });
});
