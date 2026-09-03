import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, fireEvent, render } from '@testing-library/react';

import { Tooltip } from './Tooltip';

beforeAll(() => {
  Object.defineProperty(global, 'DOMRect', {
    configurable: true,
    value: class {
      bottom: number;
      height: number;
      left: number;
      right: number;
      top: number;
      width: number;
      x: number;
      y: number;

      constructor(x = 0, y = 0, width = 0, height = 0) {
        this.bottom = y + height;
        this.height = height;
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.width = width;
        this.x = x;
        this.y = y;
      }
    },
  });
});

beforeEach(() => {
  jest.useFakeTimers();
  const portalContainer = document.createElement('div');
  portalContainer.id = 'glints-portal-container';
  document.body.appendChild(portalContainer);
  jest
    .spyOn(Element.prototype, 'getClientRects')
    .mockReturnValue([new DOMRect(0, 0, 20, 20)] as unknown as DOMRectList);
});

afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
  document.getElementById('glints-portal-container')?.remove();
});

describe('<Tooltip/> hover delay', () => {
  test('shows after the default delay', () => {
    const { queryByText } = render(
      <Tooltip content="mock text">
        <span>mock content</span>
      </Tooltip>
    );

    fireEvent.mouseEnter(queryByText('mock content'));
    expect(queryByText('mock text')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(queryByText('mock text')).toBeInTheDocument();
  });

  test('cancels showing when the pointer leaves', () => {
    const { queryByText } = render(
      <Tooltip content="mock text">
        <span>mock content</span>
      </Tooltip>
    );
    const element = queryByText('mock content');

    fireEvent.mouseEnter(element);
    fireEvent.mouseLeave(element);
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(queryByText('mock text')).not.toBeInTheDocument();
  });

  test('keeps clickable tooltips immediate', () => {
    const { queryByText } = render(
      <Tooltip clickable content="mock text" onClick={jest.fn()}>
        <span>mock content</span>
      </Tooltip>
    );

    fireEvent.click(queryByText('mock content'));

    expect(queryByText('mock text')).toBeInTheDocument();
  });
});
