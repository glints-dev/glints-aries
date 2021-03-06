import * as React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(contentText).not.toBeInTheDocument();
  });
});

describe('<Popover /> prop children', () => {
  test(`should render 1 Popover children`, () => {
    const { queryByTestId } = render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    const item = queryByTestId('popover-children');
    expect(item).toBeVisible();
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
    expect(contentTextBeforeClick).not.toBeInTheDocument();
    expect(onPopoverClick).not.toHaveBeenCalled();

    const children = queryByTestId('popover-children');
    userEvent.click(children);

    const contentTextAfterClick = queryByText('Popover Content');
    expect(contentTextAfterClick).toBeVisible();
  });

  test('content prop should be closed when the component is clicked twice', () => {
    const { queryByTestId, queryByText } = render(
      <Popover content={<PopoverContent />}>
        <button key="button"> Open Popover </button>
      </Popover>
    );

    expect(queryByText('Popover Content')).not.toBeInTheDocument();
    const children = queryByTestId('popover-children');
    userEvent.click(children);

    expect(queryByText('Popover Content')).toBeVisible();
    userEvent.click(children);
    expect(queryByText('Popover Content')).not.toBeInTheDocument();
  });
});
