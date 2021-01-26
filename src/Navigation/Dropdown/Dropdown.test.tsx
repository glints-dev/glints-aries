import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  fireEvent,
  render,
  queryByText,
  queryByRole,
  queryByTestId,
} from '@testing-library/react';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';

describe('<Dropdown/> render', () => {
  test('should match snapshot', () => {
    const snapshot = renderer
      .create(
        <Dropdown label="Career">
          <DropdownItem value="pm">Product Manager</DropdownItem>
          <DropdownItem value="se">Software Engineer</DropdownItem>
        </Dropdown>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('options should not be visible when it is rendered', () => {
    const { queryByText } = render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const optionPM = queryByText('Product Manager');
    const optionSE = queryByText('Software Engineer');

    expect(optionPM).not.toBeVisible();
    expect(optionSE).not.toBeVisible();
  });

  test('should be able to render with null children', () => {
    render(
      <Dropdown label="Career">
        {null}
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const options = document.querySelector('.dropdown-listbox').children;
    expect(options.length).toEqual(2);
  });
});

describe('<Dropdown/> with DropdownHeader props', () => {
  // TODO: find a way to test showHoverLine, which needs pseudo element style validation
  test('disabled', () => {
    render(
      <Dropdown label="Career" disabled>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-content')).toHaveStyle(
      'cursor: not-allowed'
    );
  });

  test('showFullWidth', () => {
    render(
      <Dropdown label="Career" showFullWidth>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-content')).toHaveStyle(
      'width: 100%; padding: 10px 0 10px 20px;'
    );
  });
});

describe('<Dropdown/> with DropdownBody props', () => {
  test('dropDownPlacement', () => {
    render(
      <Dropdown label="Career" dropDownPlacement="right">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-listbox')).toHaveStyle(
      'right: 0; width: auto;'
    );
  });

  test('noLineBreak', () => {
    render(
      <Dropdown label="Career" noLineBreak>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-listbox')).toHaveStyle(
      'white-space: normal'
    );
  });

  test('showFullWidth', () => {
    render(
      <Dropdown label="Career" showFullWidth>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-listbox')).toHaveStyle(
      'width: calc(100% - 20px); left: 10px;'
    );
  });

  test('showHoverLine', () => {
    render(
      <Dropdown label="Career" showHoverLine>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );
    expect(document.querySelector('.dropdown-listbox')).toHaveStyle(
      'margin-top: 13px;'
    );
  });
});

describe('<Dropdown/> mouse event', () => {
  test('options should appear when clicking on it, if prop hoverToOpen is falsy', () => {
    const { queryByRole, queryByText } = render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole('menuitem');
    fireEvent.click(dropdown);

    const optionPM = queryByText('Product Manager');
    const optionSE = queryByText('Software Engineer');

    expect(optionPM).toBeVisible();
    expect(optionSE).toBeVisible();
  });

  test('options should appear when mouse hovering on it, if prop hoverToOpen is truthy', () => {
    const { queryByRole, queryByText } = render(
      <Dropdown label="Career" hoverToOpen={true}>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole('menuitem');
    fireEvent.mouseOver(dropdown);

    const optionPM = queryByText('Product Manager');
    const optionSE = queryByText('Software Engineer');

    expect(optionPM).toBeVisible();
    expect(optionSE).toBeVisible();
  });

  test('dropdown button should be highlighted when mouse is hovering on', () => {
    render(
      <Dropdown label="Career" hoverToOpen={true}>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdownHeader = document.querySelector('.dropdown-content');
    fireEvent.mouseOver(dropdownHeader);

    expect(dropdownHeader).toHaveStyle(`background: ${Greyscale.softgrey}`);
  });

  test('option should be highlighted when mouse is hovering on', () => {
    const { queryByRole, queryByText } = render(
      <Dropdown label="Career" hoverToOpen={true}>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole('menuitem');
    fireEvent.click(dropdown);

    const optionPM = queryByText('Product Manager');
    const optionSE = queryByText('Software Engineer');
    fireEvent.mouseOver(optionPM);

    expect(optionPM).toHaveStyle(`background: ${Greyscale.softgrey}`);
    expect(optionSE).not.toHaveStyle(`background: ${Greyscale.softgrey}`);
  });

  test('selected option should be displayed', async () => {
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);
    fireEvent.mouseDown(queryByText(document.body, 'Product Manager'));

    expect(document.querySelector('.dropdown-listbox')).not.toBeVisible();
    expect(
      queryByText(
        document.querySelector('.dropdown-content'),
        'Product Manager'
      )
    ).toBeVisible();
  });

  test('arrow icon should be rotated by different angles when dropdown is opened/closed', () => {
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const arrowIcon = queryByTestId(document.body, 'icon-svg');
    expect(arrowIcon).toHaveStyle('transform: rotate(0)');

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);
    expect(arrowIcon).toHaveStyle('transform: rotate(180deg)');
  });
});

describe('<Dropdown/> keydown event', () => {
  test('press up arrow key and down arrow key should should change highlighted option', async () => {
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);

    const optionPM = queryByText(document.body, 'Product Manager');
    const optionSE = queryByText(document.body, 'Software Engineer');
    expect(optionPM).toHaveStyle(`background: ${Greyscale.softgrey}`);
    expect(optionSE).not.toHaveStyle(`background: ${Greyscale.softgrey}`);

    fireEvent.keyDown(dropdown, { key: 'DownArrow', keyCode: 40 });
    expect(optionPM).not.toHaveStyle(`background: ${Greyscale.softgrey}`);
    expect(optionSE).toHaveStyle(`background: ${Greyscale.softgrey}`);

    fireEvent.keyDown(dropdown, { key: 'UpArrow', keyCode: 38 });
    expect(optionPM).toHaveStyle(`background: ${Greyscale.softgrey}`);
    expect(optionSE).not.toHaveStyle(`background: ${Greyscale.softgrey}`);
  });

  test('press enter key should select an highlighted option', async () => {
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);

    const optionPM = queryByText(document.body, 'Product Manager');
    expect(optionPM).toHaveStyle(`background: ${Greyscale.softgrey}`);

    fireEvent.keyDown(dropdown, { key: 'Enter', keyCode: 13 });
    expect(optionPM).not.toBeVisible();

    expect(
      queryByText(
        document.querySelector('.dropdown-content'),
        'Product Manager'
      )
    ).toBeVisible();
  });

  test('press esc key should close dropdown', async () => {
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);

    const dropdownContent = queryByRole(document.body, 'listbox');
    expect(dropdownContent).toBeVisible();

    fireEvent.keyDown(document, { key: 'Esc', keyCode: 27 });
    expect(dropdownContent).not.toBeVisible();
  });

  test('handleEscKeydown listener should be removed before component unmount', async () => {
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const { unmount } = render(
      <Dropdown label="Career">
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(
      (removeEventListenerSpy.mock.calls[0][1] as () => void).name
    ).toEqual('listener');
    removeEventListenerSpy.mockRestore();
  });
});

describe('<Dropdown/> logic', () => {
  test('onChange callback should be called with correct option value', async () => {
    const onChange = jest.fn();
    render(
      <Dropdown label="Career" onChange={onChange}>
        <DropdownItem value="pm">Product Manager</DropdownItem>
        <DropdownItem value="se">Software Engineer</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);
    const option = queryByText(document.body, 'Product Manager');
    fireEvent.mouseDown(option);

    expect(onChange.mock.calls[0][0]).toEqual('pm');
  });
});
