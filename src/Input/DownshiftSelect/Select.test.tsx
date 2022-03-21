import React from 'react';
import { render, fireEvent, queryAllByAttribute } from '@testing-library/react';
import _userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Select, Item, ItemProps } from './Select';
import { first, identity } from 'lodash';
import { Item as ItemComponent, Label as LabelComponent } from './SelectStyle';

// userEvent is typed incorrectly. The tab function exists, but is not declared
// on the userEvent's type, so we have to add it manually here
const userEvent = _userEvent as typeof _userEvent & { tab: () => void };

const arrowDownKey = { key: 'ArrowDown', keyCode: 40 };
const enterKey = { key: 'Enter', keyCode: 13 };
const escKey = { key: 'Escape', keyCode: 27 };

const queryAllByTestId = queryAllByAttribute.bind(null, 'data-testid');

const items: Item[] = [
  'Software Engineer',
  'Software Tester',
  'Back-end Engineer',
  'Front-end Engineer',
].map(label => ({ value: label, label, group: label.split(' ')[1] }));

const CustomItem: React.FC<ItemProps> = props => {
  return <ItemComponent {...props} data-test="foo" />;
};

const CustomLabel: React.FC = props => {
  return <LabelComponent {...props} data-test="bar" />;
};

type TestSelectProps = Omit<React.ComponentProps<typeof Select>, 'items'> & {
  items?: Item[];
} & {
  'data-test'?: string; // Can't figure out how to get the built-in props here
};

const renderSelect = (props: TestSelectProps = { items }) => {
  const {
    container,
    asFragment,
    queryByTestId,
    queryAllByRole,
    rerender,
  } = render(<Select items={items} {...props} />);
  const getSnapshot = asFragment;
  const getSelectContainer = () => queryByTestId('container');
  const getLabel = () => queryByTestId('label');
  const getCombobox = () => queryByTestId('combobox');
  const getInput = () => queryByTestId('input') as HTMLInputElement;
  const getMenu = () => queryByTestId('menu');
  const getToggleButton = () => queryByTestId('toggle-button');
  const getClearButton = () => queryByTestId('clear-button');
  const getItems = () => queryAllByRole('option');
  const getFirstItem = () => first(getItems());
  const getLoadingIndicator = () => queryByTestId('loading-indicator');
  const getHelperText = () => queryByTestId('helper-text');
  const getGroupHeadings = () => queryAllByTestId(container, 'group-heading');

  const rerenderWithProps = (props: TestSelectProps = { items }) =>
    rerender(<Select items={items} {...props} />);

  return {
    getSnapshot,
    getSelectContainer,
    getLabel,
    getCombobox,
    getInput,
    getMenu,
    getLoadingIndicator,
    getToggleButton,
    getClearButton,
    getItems,
    getFirstItem,
    getHelperText,
    getGroupHeadings,
    rerenderWithProps,
  };
};

describe('<Select> (Downshift)', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const {
      getSelectContainer,
      getLabel,
      getCombobox,
      getMenu,
    } = renderSelect();
    expect(getSelectContainer()).toBeVisible();
    expect(getLabel()).toBe(null);
    expect(getCombobox()).toBeVisible();
    expect(getMenu()).not.toBeVisible();
  });

  it('should match snapshot when closed', () => {
    const { getSnapshot } = renderSelect({
      isOpen: false,
    });
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should match snapshot when open', () => {
    const { getSnapshot } = renderSelect({
      isOpen: true,
    });
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should open the menu on click', () => {
    const { getCombobox, getMenu } = renderSelect();
    expect(getMenu()).not.toBeVisible();
    fireEvent.click(getCombobox());
    expect(getMenu()).toBeVisible();
  });

  it('should open the menu on arrow down key', () => {
    const { getInput, getMenu } = renderSelect();
    expect(getMenu()).not.toBeVisible();
    fireEvent.keyDown(getInput(), arrowDownKey);
    expect(getMenu()).toBeVisible();
  });

  it('should open and close the menu on clicking the toggle button', () => {
    const { getToggleButton, getMenu } = renderSelect();
    expect(getMenu()).not.toBeVisible();
    fireEvent.click(getToggleButton());
    expect(getMenu()).toBeVisible();
    fireEvent.click(getToggleButton());
    expect(getMenu()).not.toBeVisible();
  });

  it('should close the menu when an option is selected', () => {
    const { getInput, getCombobox, getFirstItem, getMenu } = renderSelect();
    expect(getMenu()).not.toBeVisible();
    fireEvent.keyDown(getInput(), arrowDownKey);
    expect(getMenu()).toBeVisible();
    fireEvent.keyDown(getInput(), enterKey);
    expect(getMenu()).not.toBeVisible();

    fireEvent.click(getCombobox());
    expect(getFirstItem()).toBeVisible();
    fireEvent.click(getFirstItem());
    expect(getMenu()).not.toBeVisible();
  });

  it('should close on esc key pressed', () => {
    const { getInput, getMenu } = renderSelect();
    expect(getMenu()).not.toBeVisible();
    fireEvent.keyDown(getInput(), arrowDownKey);
    expect(getMenu()).toBeVisible();
    fireEvent.keyDown(getInput(), escKey);
    expect(getMenu()).not.toBeVisible();
  });

  it('should display the selected value when an option is selected', () => {
    const { getInput, getCombobox, getFirstItem } = renderSelect();
    fireEvent.click(getCombobox());
    expect(getFirstItem()).toBeVisible();
    fireEvent.click(getFirstItem());
    expect(getInput()).toHaveValue(items[0].label);
  });

  it('should be focusable', () => {
    const { getInput } = renderSelect();
    expect(getInput()).not.toHaveFocus();
    userEvent.tab();
    expect(getInput()).toHaveFocus();
  });

  it('should filter the items', () => {
    const { getInput, getFirstItem } = renderSelect();
    userEvent.type(getInput(), 'Front-end');
    expect(getFirstItem()).toHaveTextContent(items[3].label);
    fireEvent.click(getFirstItem());
    expect(getInput()).toHaveValue(items[3].label);
  });

  it('should accept a custom transform function', () => {
    const customTransformFunction = (items: Item[]) => [items[1]];
    const { getItems } = renderSelect({
      transformFunction: customTransformFunction,
      isOpen: true,
    });
    customTransformFunction(items).forEach((item, index) =>
      expect(getItems()[index]).toHaveTextContent(item.label)
    );
  });

  it('should not filter when transformFunction is the identity function', () => {
    const { getItems } = renderSelect({
      transformFunction: identity,
      isOpen: true,
    });
    items.forEach((item, index) =>
      expect(getItems()[index]).toHaveTextContent(item.label)
    );
  });

  it('should use custom subcomponents when provided', () => {
    const { getSnapshot, getFirstItem, getLabel } = renderSelect({
      components: { Item: CustomItem, Label: CustomLabel },
      isOpen: true,
      label: 'i am label',
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getFirstItem()).toHaveAttribute('data-test', 'foo');
    expect(getLabel()).toHaveAttribute('data-test', 'bar');
  });

  it('should allow removal of components by passing a void function', () => {
    const { getSnapshot, getToggleButton } = renderSelect({
      // eslint-disable-next-line react/display-name
      components: { ToggleButton: React.forwardRef(() => null) },
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getToggleButton()).toBeNull();
  });

  it('should have a loading indicator', () => {
    const { getSnapshot, getLoadingIndicator } = renderSelect({
      isLoading: true,
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getLoadingIndicator()).toBeVisible();
  });

  describe('when isOpenInitially=true', () => {
    it('should be open on render', () => {
      const { getSnapshot, getMenu } = renderSelect({
        isOpenInitially: true,
      });
      expect(getSnapshot()).toMatchSnapshot();
      expect(getMenu()).toBeVisible();
    });

    it('should have focus', () => {
      const { getInput } = renderSelect({
        isOpenInitially: true,
      });
      expect(getInput()).toHaveFocus();
    });

    it('should close when esc is pressed', () => {
      const { getInput, getMenu } = renderSelect({
        isOpenInitially: true,
      });
      expect(getMenu()).toBeVisible();
      fireEvent.keyDown(getInput(), escKey);
      expect(getMenu()).not.toBeVisible();
    });
  });

  it('should have an optional helper-text', () => {
    const helperText = 'foo';
    const { getSnapshot, getHelperText } = renderSelect({
      helperText,
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getHelperText()).toHaveTextContent(helperText);
  });

  it('should have an optional placeholder', () => {
    const placeholder = 'foo';
    const { getSnapshot, getInput } = renderSelect({
      placeholder,
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getInput()).toHaveAttribute('placeholder', placeholder);
  });

  it('should have an optional label', () => {
    const label = 'foo';
    const { getSnapshot, getLabel } = renderSelect({
      label,
    });
    expect(getSnapshot()).toMatchSnapshot();
    expect(getLabel()).toHaveTextContent(label);
  });

  describe('when it is disabled', () => {
    it('should have disabled styles and attributes', () => {
      const { getSnapshot, getInput } = renderSelect({
        disabled: true,
      });
      expect(getSnapshot()).toMatchSnapshot();
      expect(getInput()).toHaveAttribute('disabled');
    });
  });

  describe('when disableTyping is true', () => {
    it('should not accept text input', () => {
      const { getSnapshot, getInput } = renderSelect({
        disableTyping: true,
      });
      expect(getSnapshot()).toMatchSnapshot();
      expect(getInput()).toHaveAttribute('readonly');

      // It would be better to test this with userInput.type, but that
      // unfortunately ignores the readonly attribute
    });
  });

  describe('when an item is disabled', () => {
    it('should not be clickable', () => {
      const onSelectedItemChange = jest.fn();
      const { getFirstItem, getToggleButton } = renderSelect({
        onSelectedItemChange,
        items: items.map(item => ({ ...item, disabled: true })),
      });
      userEvent.click(getToggleButton());
      userEvent.click(getFirstItem());
      expect(onSelectedItemChange).not.toHaveBeenCalled();
    });
  });

  describe('when selectedItem is controlled', () => {
    it("should change the input value to the controlled item's label", () => {
      const selectedItem = first(items);
      const { getInput } = renderSelect({
        selectedItem,
      });
      expect(getInput()).toHaveValue(selectedItem.label);
    });

    it('should call onSelectedItemChange with the target value', () => {
      const onSelectedItemChange = jest.fn();
      const { getInput } = renderSelect({
        onSelectedItemChange,
      });
      fireEvent.keyDown(getInput(), arrowDownKey);
      fireEvent.keyDown(getInput(), enterKey);
      expect(onSelectedItemChange).toHaveBeenCalledWith(first(items));
    });
  });

  describe('when isOpen is controlled', () => {
    it('should follow the controlled value', () => {
      const { getMenu, rerenderWithProps } = renderSelect({
        isOpen: true,
      });
      expect(getMenu()).toBeVisible();
      rerenderWithProps({ isOpen: false });
      expect(getMenu()).not.toBeVisible();
    });

    it('should call onIsOpen with the target value', () => {
      const onIsOpenChange = jest.fn();
      const { getToggleButton, rerenderWithProps } = renderSelect({
        isOpen: false,
        onIsOpenChange,
      });
      fireEvent.click(getToggleButton());
      expect(onIsOpenChange).toHaveBeenCalledWith(true);

      rerenderWithProps({ isOpen: true, onIsOpenChange });
      fireEvent.click(getToggleButton());
      expect(onIsOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe('when inputValue is controlled', () => {
    it('should change the input value to the controlled value', () => {
      const inputValue = 'Software';
      const { getInput } = renderSelect({
        inputValue,
      });
      expect(getInput()).toHaveValue(inputValue);
    });

    it('should call onSelectedItemChange with the target value', () => {
      const inputValue = 'Software';
      const onInputValueChange = jest.fn();
      const { getInput } = renderSelect({
        onInputValueChange,
      });
      userEvent.type(getInput(), inputValue);
      expect(onInputValueChange).toHaveBeenCalledWith(inputValue);
    });
  });

  it('should have an invalid state', () => {
    const { getSnapshot } = renderSelect({
      label: 'Foo',
      helperText: 'Invalid',
      invalid: true,
    });
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should should pass rest props to the internal input', () => {
    const { getInput } = renderSelect({
      'data-test': 'test',
    });
    expect(getInput()).toHaveAttribute('data-test', 'test');
  });

  it('should call the focus callbacks', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    renderSelect({
      onFocus,
      onBlur,
    });
    expect(onFocus).toHaveBeenCalledTimes(0);
    expect(onBlur).toHaveBeenCalledTimes(0);
    userEvent.tab();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(0);
    userEvent.tab();
    expect(onFocus).toHaveBeenCalledTimes(2);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should call the onClear callback', () => {
    const onClear = jest.fn();
    const onSelectedItemChange = jest.fn();
    const { getClearButton } = renderSelect({
      onClear,
      onSelectedItemChange,
      selectedItem: first(items),
    });
    fireEvent.click(getClearButton());
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onSelectedItemChange).toHaveBeenCalledWith(null);
  });

  it('should allow configuration of empty list text', () => {
    const emptyListText = 'empty list foo';
    const { getMenu, getInput } = renderSelect({
      emptyListText,
    });
    userEvent.type(getInput(), 'foo');
    expect(getMenu()).toHaveTextContent(emptyListText);
  });

  it('should group items by groupKey if given', () => {
    const { getSnapshot, getGroupHeadings, getToggleButton } = renderSelect({
      groupKey: 'group',
    });
    expect(getSnapshot()).toMatchSnapshot();
    fireEvent.click(getToggleButton());
    ['Engineer', 'Tester'].forEach((groupName, index) =>
      expect(getGroupHeadings()[index]).toHaveTextContent(groupName)
    );
  });
});
