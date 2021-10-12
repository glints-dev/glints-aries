import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import _userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { PhoneNumberInput, CallingCodeOption, Props } from './PhoneNumberInput';
import { noop } from 'lodash';
import { resetId } from 'react-id-generator';
import { Tag } from '../..';

// userEvent is typed incorrectly. The tab function exists, but is not declared
// on the userEvent's type, so we have to add it manually here
const userEvent = _userEvent as typeof _userEvent & { tab: () => void };

const callingCodeOptions: CallingCodeOption[] = [
  { label: 'Indonesia', callingCode: 62, isFeatured: true },
  { label: 'Malaysia', callingCode: 60, isFeatured: true },
  { label: 'Singapore', callingCode: 65, isFeatured: true },
  { label: 'Taiwan', callingCode: 886, isFeatured: true },
  { label: 'Vietnam', callingCode: 84, isFeatured: true },
  { label: 'Afghanistan', callingCode: 93, isFeatured: false },
  { label: 'Albania', callingCode: 355, isFeatured: false },
  { label: 'Algeria', callingCode: 213, isFeatured: false },
  { label: 'Germany', callingCode: 42, isFeatured: false },
  { label: 'United States', callingCode: 1, isFeatured: false },
];

const getCallingCodeOptionText = (option: CallingCodeOption) =>
  ['+', option.callingCode, option.label].join('');

const defaultProps: Props = {
  value: { callingCode: 123, significantNumber: '' },
  callingCodeOptions: callingCodeOptions,
  filterValue: '',
  isLoadingCallingCodeOptions: false,
  label: 'Mobile Number',
  featuredOptionsLabel: 'Frequently Used',
  otherOptionsLabel: 'The Rest Of The World',
  callingCodeFilterInputPlaceholder: 'Type country code or country name',
  callingCodeNoOptionsLabel: `Sorry, there are no results`,
  error: undefined,
  addon: undefined,
  onChange: noop,
  onInputChange: noop,
};

const renderComponent = (testProps: Partial<Props> = {}) => {
  const props = { ...defaultProps, ...testProps };
  const { asFragment, queryByTestId, queryAllByRole, rerender } = render(
    <PhoneNumberInput {...props} />
  );
  const getSnapshot = asFragment;

  const elements = {
    getSignificantNumberInput: () =>
      queryByTestId('significant-number-input') as HTMLInputElement,
    getToggleButton: () => queryByTestId('calling-code-input-toggle'),
    getCallingCodeInput: () => queryByTestId('calling-code-input'),
    getCallingCodeFilterInput: () => queryByTestId('calling-code-filter-input'),
    getCallingCodeOptions: () => queryAllByRole('option'),
    getNoOptions: () => queryByTestId('no-options'),
    getLoading: () => queryByTestId('calling-code-options-loading'),
    getError: () => queryByTestId('error'),
    getAddon: () => queryByTestId('addon'),
  };

  const rerenderWithProps = (props: Props = defaultProps) =>
    rerender(<PhoneNumberInput {...props} />);

  return {
    getSnapshot,
    ...elements,
    rerenderWithProps,
  };
};

describe('<PhoneNumberInput>', () => {
  afterEach(() => {
    jest.clearAllMocks();
    resetId();
  });

  it('should match default snapshot', () => {
    const { getSnapshot } = renderComponent();
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should match snapshot when a value is given', () => {
    const { getSnapshot } = renderComponent({
      value: { callingCode: 123, significantNumber: '12345678' },
    });
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should toggle the calling code input on clicking the toggle button', () => {
    const {
      getToggleButton,
      getCallingCodeInput,
      getSnapshot,
    } = renderComponent();
    fireEvent.click(getToggleButton());
    expect(getSnapshot()).toMatchSnapshot();
    expect(getCallingCodeInput()).toBeVisible();
    fireEvent.click(getToggleButton());
    expect(getCallingCodeInput()).not.toBeVisible();
  });

  it('should match snapshot after input has been made', () => {
    const {
      getSnapshot,
      getSignificantNumberInput,
      getToggleButton,
      getCallingCodeOptions,
    } = renderComponent();
    userEvent.type(getSignificantNumberInput(), '12345678');
    fireEvent.click(getToggleButton());
    fireEvent.click(getCallingCodeOptions()[0]);
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should render the given error', () => {
    const { getSnapshot, getError } = renderComponent({
      error: 'You dun goofed',
    });
    expect(getError()).toBeVisible();
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should render the given addon', () => {
    const { getSnapshot, getAddon } = renderComponent({
      addon: <Tag>Foo</Tag>,
    });
    expect(getAddon()).toBeVisible();
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should render an empty state when there are no calling code options', () => {
    const { getSnapshot, getToggleButton, getNoOptions } = renderComponent({
      callingCodeOptions: [],
    });
    fireEvent.click(getToggleButton());
    expect(getNoOptions()).toBeVisible();
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should render an empty state when loading', () => {
    const { getSnapshot, getToggleButton, getLoading } = renderComponent({
      isLoadingCallingCodeOptions: true,
    });
    fireEvent.click(getToggleButton());
    expect(getLoading()).toBeVisible();
    expect(getSnapshot()).toMatchSnapshot();
  });

  it('should call onChange when typing into significant number input', () => {
    const inputValue = '1';
    const onChange = jest.fn();
    const { getSignificantNumberInput } = renderComponent({
      onChange,
    });
    userEvent.type(getSignificantNumberInput(), inputValue);
    expect(onChange).toHaveBeenCalledWith({
      ...defaultProps.value,
      significantNumber: inputValue,
    });
  });

  it('should call onChange when a calling code option is selected', () => {
    const onChange = jest.fn();
    const { getToggleButton, getCallingCodeOptions } = renderComponent({
      onChange,
    });
    fireEvent.click(getToggleButton());
    fireEvent.click(getCallingCodeOptions()[0]);
    expect(onChange).toHaveBeenCalledWith({
      ...defaultProps.value,
      callingCode: callingCodeOptions[0].callingCode,
    });
  });

  it('should sort the options', () => {
    const firstOption = { label: 'AAA', callingCode: 1, isFeatured: true };
    const unsortedCallingCodeOptions = [
      { label: 'Afghanistan', callingCode: 93, isFeatured: false },
      { label: 'Vietnam', callingCode: 84, isFeatured: true },
      firstOption,
    ];
    const { getToggleButton, getCallingCodeOptions } = renderComponent({
      callingCodeOptions: unsortedCallingCodeOptions,
    });
    fireEvent.click(getToggleButton());
    expect(getCallingCodeOptions()[0]).toHaveTextContent(
      getCallingCodeOptionText(firstOption)
    );
  });

  it('should focus the calling code filter input on clicking the toggle button', () => {
    const { getToggleButton, getCallingCodeFilterInput } = renderComponent();
    fireEvent.click(getToggleButton());
    expect(document.activeElement).toBe(getCallingCodeFilterInput());
  });

  it('should call onInputChange when typing into calling code filter input', () => {
    const inputValue = 'Singapore';
    const onInputChange = jest.fn();
    const { getToggleButton } = renderComponent({ onInputChange });
    fireEvent.click(getToggleButton());
    userEvent.type(document.activeElement, inputValue);
    expect(onInputChange).toHaveBeenCalledWith(inputValue);
  });

  it('should call onFocus when the significant number input is focused', () => {
    const onFocus = jest.fn();
    const { getSignificantNumberInput } = renderComponent({
      onFocus,
    });
    getSignificantNumberInput().focus();
    expect(onFocus).toHaveBeenCalled();
  });

  it('should call onFocus when the calling code input is opened', () => {
    const onFocus = jest.fn();
    const { getToggleButton } = renderComponent({
      onFocus,
    });
    fireEvent.click(getToggleButton());
    expect(onFocus).toHaveBeenCalled();
  });

  it('should call onBlur when the significant number input is blurred', () => {
    const onBlur = jest.fn();
    const { getSignificantNumberInput } = renderComponent({
      onBlur,
    });
    getSignificantNumberInput().focus();
    getSignificantNumberInput().blur();
    expect(onBlur).toHaveBeenCalled();
  });

  it('should call onBlur when the calling code input is closed', () => {
    const onBlur = jest.fn();
    const { getToggleButton, getCallingCodeFilterInput } = renderComponent({
      onBlur,
    });
    fireEvent.click(getToggleButton());
    getCallingCodeFilterInput().blur();
    expect(onBlur).toHaveBeenCalled();
  });
});
