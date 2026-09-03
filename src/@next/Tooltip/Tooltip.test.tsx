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

describe('<Tooltip />', () => {
  test('stays open after a rapid leave and re-entry', () => {
    const { getByText, queryByText } = render(
      <Tooltip content="mock text">
        <span>mock content</span>
      </Tooltip>
    );
    const trigger = getByText('mock content');

    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);
    fireEvent.mouseEnter(trigger);

    act(() => {
      jest.advanceTimersByTime(370);
    });

    expect(queryByText('mock text')).toBeInTheDocument();
  });
});
