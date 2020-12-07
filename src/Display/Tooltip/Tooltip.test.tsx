import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Tooltip, { Position } from './Tooltip';

describe('<Tooltip/> snapshot', () => {
  test('should match snapshot when Tooltip is hidden', () => {
    const { asFragment } = render(
      <Tooltip
        text="mock text"
        position="right"
        classes={{
          container: 'container',
          content: 'content',
          message: 'message',
        }}
      >
        <span>mock content</span>
      </Tooltip>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Tooltip/> snapshots with position prop', () => {
  const matchSnapshotWithPosition = (position: Position) => {
    test(`position ${position}`, () => {
      const { asFragment, queryByText } = render(
        <Tooltip
          text="mock text"
          position={position}
          classes={{
            container: 'container',
            content: 'content',
            message: 'message',
          }}
        >
          <span>mock content</span>
        </Tooltip>
      );
      const element = queryByText('mock content');
      fireEvent.mouseOver(element);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['left', 'right', 'bottom', 'top'].forEach((position: Position) =>
    matchSnapshotWithPosition(position)
  );
});

describe('<Tooltip/> touch event', () => {
  const TooltipComponent = () => (
    <React.Fragment>
      <div>touch outside</div>
      <Tooltip text="mock text">
        <span>mock content</span>
      </Tooltip>
    </React.Fragment>
  );

  test('touchstart event should show and hide Tooltip', () => {
    const { queryByText } = render(<TooltipComponent />);
    expect(queryByText('mock text')).not.toBeInTheDocument();

    const element = queryByText('mock content');
    fireEvent.touchStart(element);
    expect(queryByText('mock text')).toBeInTheDocument();

    fireEvent.touchStart(element);
    expect(queryByText('mock text')).not.toBeInTheDocument();
  });

  test('touch outside of Tooltip should hide Tooltip', () => {
    const { queryByText } = render(<TooltipComponent />);
    expect(queryByText('mock text')).not.toBeInTheDocument();

    const element = queryByText('mock content');
    fireEvent.touchStart(element);
    expect(queryByText('mock text')).toBeInTheDocument();

    const outside = queryByText('touch outside');
    fireEvent.touchStart(outside);
    expect(queryByText('mock text')).not.toBeInTheDocument();
  });

  test('touch outside should register and unregister hideTooltipIfTouchOutside callback', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const useCallbackSpy = jest.spyOn(React, 'useCallback');

    const { queryByText } = render(<TooltipComponent />);
    const element = queryByText('mock content');
    fireEvent.touchStart(element);
    expect(addEventListenerSpy.mock.calls[0][1]).toEqual(
      useCallbackSpy.mock.results[0].value
    );

    const outside = queryByText('touch outside');
    fireEvent.touchStart(outside);

    expect(removeEventListenerSpy.mock.calls[0][1]).toEqual(
      useCallbackSpy.mock.results[0].value
    );

    jest.clearAllMocks();
  });
});
