import * as React from 'react';

import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Popover from './Popover';

const PopoverContent = () => (
  <div style={{ backgroundColor: 'white' }}> Popover Content </div>
);

describe('<Popover /> prop className', () => {
  const matchSnapshot = (className: string) => {
    test(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(
        <Popover content={<PopoverContent />} className={className}>
          <button key="button"> Open Popover </button>
        </Popover>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);

  test('content prop should be null when popover is rendered', () => {
    const { queryByText } = render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    const contentText = queryByText('Popover Content');
    expect(contentText).toBeNull();
  });
});

describe('<Popover /> prop children', () => {
  test(`should render 1 Popover children`, () => {
    render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    const childrenCount = 1;
    const item = document.querySelectorAll('.popover-children');
    expect(item).toHaveLength(childrenCount);
  });
});

describe('<Popover/> click event to show/close content', () => {
  const onPopoverClick = jest.fn();

  test('content prop should be visible when popover clicked once', () => {
    const { queryByTestId, queryByText } = render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    const contentTextBeforeClick = queryByText('Popover Content');
    expect(contentTextBeforeClick).toBeNull();
    expect(onPopoverClick).not.toHaveBeenCalled();

    const children = queryByTestId('children');
    fireEvent.click(children);

    const contentTextAfterClick = queryByText('Popover Content');
    expect(contentTextAfterClick).toBeVisible();
  });

  test('content prop should be closed when the component is clicked twice', () => {
    const { queryByTestId, queryByText } = render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    expect(queryByText('Popover Content')).toBeNull();
    const children = queryByTestId('children');
    fireEvent.click(children);

    expect(queryByText('Popover Content')).toBeVisible();
    fireEvent.click(children);
    expect(queryByText('Popover Content')).toBeNull();
  });
});
