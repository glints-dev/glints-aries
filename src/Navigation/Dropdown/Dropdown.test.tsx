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
import { Greyscale } from '../../Utils/Colors';

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
  test('options should appear when clicking on it and should not disappear when mouse leaving, if prop hoverToOpen is falsy', () => {
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

    fireEvent.mouseLeave(dropdown);
    expect(optionPM).toBeVisible();
    expect(optionSE).toBeVisible();
  });

  test('options should appear when mouse hovering on it and disappear when mouse leaving, if prop hoverToOpen is truthy', () => {
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

    fireEvent.mouseLeave(dropdown);
    expect(optionPM).not.toBeVisible();
    expect(optionSE).not.toBeVisible();
  });

  test('options should not appear when mouse hovering on it, if prop hoverToOpen is falsy', () => {
    const optionText = 'Product Manager';
    const { queryByRole, queryByText } = render(
      <Dropdown label="Career">
        <DropdownItem value="pm">{optionText}</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole('menuitem');
    fireEvent.mouseOver(dropdown);
    const option = queryByText(optionText);
    expect(option).not.toBeVisible();
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

    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');
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
    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'DownArrow', keyCode: 40 });
    expect(optionPM).not.toHaveClass('active');
    expect(optionSE).toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'UpArrow', keyCode: 38 });
    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');
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
    expect(optionPM).toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'Enter', keyCode: 13 });
    expect(optionPM).not.toBeVisible();

    expect(
      queryByText(
        document.querySelector('.dropdown-content'),
        'Product Manager'
      )
    ).toBeVisible();
  });

  test('when the first option is highlighted, pressing up arrow key should not affect anything', async () => {
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
    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'UpArrow', keyCode: 38 });

    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');
    expect(document.querySelector('.dropdown-listbox')).toBeVisible();
    expect(
      queryByText(document.querySelector('.dropdown-content'), 'Career')
    ).toBeVisible();
  });

  test('when the last option is highlighted, pressing down arrow key should not affect anything', async () => {
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
    expect(optionPM).toHaveClass('active');
    expect(optionSE).not.toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'DownArrow', keyCode: 40 });
    expect(optionPM).not.toHaveClass('active');
    expect(optionSE).toHaveClass('active');

    fireEvent.keyDown(dropdown, { key: 'DownArrow', keyCode: 40 });
    expect(optionPM).not.toHaveClass('active');
    expect(optionSE).toHaveClass('active');
    expect(document.querySelector('.dropdown-listbox')).toBeVisible();
    expect(
      queryByText(document.querySelector('.dropdown-content'), 'Career')
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

describe('<DropdownItem/> onClick', () => {
  test('onClick callback should be called when it is a function', async () => {
    const onClick = jest.fn();
    const menuText = 'Product Manager';
    render(
      <Dropdown label="Career">
        <DropdownItem value="pm" onClick={onClick}>
          {menuText}
        </DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);
    const option = queryByText(document.body, menuText);
    fireEvent.mouseDown(option);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('invalid onClick value should not break anything', async () => {
    const onClick = 'invalid-on-click';
    const menuText = 'Product Manager';
    render(
      <Dropdown label="Career">
        <DropdownItem
          value="pm"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onClick={onClick}
        >
          {menuText}
        </DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole(document.body, 'menuitem');
    fireEvent.click(dropdown);
    const option = queryByText(document.body, menuText);
    expect(option).toBeVisible();

    fireEvent.mouseDown(option);
    expect(option).not.toBeVisible();
  });
});

describe('<DropdownBody/> onClick', () => {
  test('clicking DropdownBody should not close dropdown', async () => {
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

    const dropdownBody = document.querySelector('.dropdown-listbox');
    fireEvent.click(dropdownBody);
    expect(dropdownContent).toBeVisible();
  });
});

describe('<DropdownBody/> prop disable', () => {
  test('dropdown should not open when it is clicked', async () => {
    const optionText = 'Product Manager';
    const { queryByRole, queryByText } = render(
      <Dropdown label="Career" disabled={true}>
        <DropdownItem value="pm">{optionText}</DropdownItem>
      </Dropdown>
    );

    const dropdown = queryByRole('menuitem');
    fireEvent.click(dropdown);
    const option = queryByText(optionText);
    expect(option).not.toBeVisible();
  });
});
