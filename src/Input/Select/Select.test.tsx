import * as React from 'react';
import * as lodash from 'lodash';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';
import { PrimaryColor } from '../../Utils/Colors';

const props = {
  label: 'Jobs',
  onChange: jest.fn(value => value),
  onOptionClick: jest.fn(),
  options: [
    { id: '1', value: 'accountant', name: 'Accountant' },
    { id: '2', value: 'business development', name: 'Business Development' },
    { id: '3', value: 'software engineer', name: 'Software Engineer' },
  ],
};

const SelectChildren = props.options.map(option => (
  <Select.Option
    key={option.id}
    value={option.value}
    onOptionClick={props.onOptionClick}
  >
    {option.name}
  </Select.Option>
));

const SelectComponentWithExtraProps = (extraProps = {}) => (
  <Select label={props.label} onChange={props.onChange} {...extraProps}>
    {SelectChildren}
  </Select>
);

const SelectComponent = SelectComponentWithExtraProps();

function setupOpenSelectMenu() {
  const { getByRole, queryAllByTestId, getByTestId } = render(SelectComponent);
  const selectInput = getByRole('combobox') as HTMLInputElement;
  const selectList = getByTestId('listbox');
  const selectLabel = getByTestId('select-label');
  const displayedOptions = queryAllByTestId('option');

  fireEvent.focus(selectInput);

  return {
    selectInput,
    selectList,
    selectLabel,
    displayedOptions,
  };
}

function setupWithCustomFilterFunction(
  filterFunction: (option: string, search: string) => boolean
) {
  const { getByRole, queryAllByTestId, getByTestId } = render(
    SelectComponentWithExtraProps({ filterFunction })
  );
  const selectInput = getByRole('combobox') as HTMLInputElement;
  const selectList = getByTestId('listbox');
  const displayedOptions = queryAllByTestId('option');

  fireEvent.focus(selectInput);

  return {
    selectInput,
    selectList,
    displayedOptions,
  };
}

function setupSelectOptionFromMenu() {
  const { selectInput, selectList, displayedOptions } = setupOpenSelectMenu();
  const randomOption =
    displayedOptions[Math.floor(Math.random() * displayedOptions.length)];

  fireEvent.mouseDown(randomOption);
  fireEvent.change(selectInput, {
    target: { value: randomOption.textContent },
  });

  return {
    selectInput,
    selectList,
    randomOption,
  };
}

function setupSelectOptionFromMenuWithKeyHandling() {
  const {
    selectInput,
    selectList,
    selectLabel,
    displayedOptions,
  } = setupOpenSelectMenu();
  const randomIndex = Math.floor(Math.random() * displayedOptions.length);
  const randomOption = displayedOptions[randomIndex];
  const arrowDownEvent = { key: 'ArrowDown', keyCode: 40 };
  const enterEvent = { key: 'Enter', keyCode: 13 };

  lodash.times(randomIndex, () =>
    fireEvent.keyDown(selectInput, arrowDownEvent)
  );
  fireEvent.keyDown(selectInput, enterEvent);
  fireEvent.change(selectInput, {
    target: { value: randomOption.textContent },
  });

  return {
    selectInput,
    selectList,
    selectLabel,
    randomOption,
  };
}

afterEach(() => {
  jest.clearAllMocks();
});

it('<Select> should render with 3 options', () => {
  const SelectSnapshot = renderer.create(SelectComponent).toJSON();
  expect(SelectSnapshot).toMatchSnapshot();
});

describe('when it is rendered', () => {
  it('should display the correct input label', () => {
    const { getByLabelText } = render(SelectComponent);
    const selectLabel = getByLabelText(props.label);
    expect(selectLabel).toHaveTextContent(props.label);
  });

  it('should display an empty input', async () => {
    const { getByRole } = render(SelectComponent);
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveTextContent('');
  });

  it('should not render the default error if error is falsy', () => {
    const { getByRole } = render(<Select>{SelectChildren}</Select>);
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    expect(selectContainer.lastChild).not.toHaveClass('select-error-default');
  });

  it('should not render the default error if error is true', () => {
    const { getByRole } = render(
      <Select error={true}>{SelectChildren}</Select>
    );
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    expect(selectContainer.lastChild).not.toHaveClass('select-error-default');
  });

  it('should render the error string in the default error container', () => {
    const { getByRole } = render(
      <Select error={'test'}>{SelectChildren}</Select>
    );
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    expect(selectContainer.lastChild).toHaveClass('select-error-default');
    expect(selectContainer.lastChild).toHaveTextContent('test');
  });

  it('should render the error component in the default error container', () => {
    const customError = <span data-testid="custom-error">nasty error</span>;
    const { container, getByTestId } = render(
      <Select error={customError}>{SelectChildren}</Select>
    );
    const customErrorElement = getByTestId('custom-error');
    expect(container).toContainElement(customErrorElement);
    expect(customErrorElement).toHaveTextContent('nasty error');
  });

  it('should render the error string in the custom error', () => {
    const customError = (e: string) => (
      <div data-testid="custom-error">{e}</div>
    );
    const { container, getByTestId } = render(
      <Select renderError={customError} error="nasty error">
        {SelectChildren}
      </Select>
    );
    const errorElement = getByTestId('custom-error');
    expect(container).toContainElement(errorElement);
    expect(container).toHaveTextContent('nasty error');
  });
});

describe('when it is clicked', () => {
  it('should open the option menu', () => {
    const { selectList } = setupOpenSelectMenu();
    expect(selectList.hasAttribute('open')).toEqual(true);
  });

  it('should display all options with the correct value', () => {
    const { displayedOptions } = setupOpenSelectMenu();
    displayedOptions.forEach((option, index) => {
      expect(option).toHaveTextContent(props.options[index].name);
      expect(option.getAttribute('data-value')).toEqual(
        props.options[index].value
      );
    });
  });
});

describe('when an option is clicked', () => {
  it('should call the onOptionClick function', () => {
    const { randomOption } = setupSelectOptionFromMenu();
    expect(props.onOptionClick).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledWith(randomOption.dataset.value);
  });

  it('should show the value of the option on the select input', () => {
    const { selectInput, randomOption } = setupSelectOptionFromMenu();
    expect(selectInput.value).toEqual(randomOption.textContent);
  });

  it('should close the option menu', () => {
    const { selectList } = setupSelectOptionFromMenu();
    expect(selectList.hasAttribute('open')).toBe(false);
  });
});

describe('when the enter key is pressed on an option', () => {
  it('should call the onOptionClick function', () => {
    const { randomOption } = setupSelectOptionFromMenuWithKeyHandling();
    expect(props.onChange).toHaveBeenCalledWith(
      randomOption.getAttribute('data-value')
    );
  });

  it('should show the value of the option on the select input', () => {
    const {
      selectInput,
      randomOption,
    } = setupSelectOptionFromMenuWithKeyHandling();
    expect(selectInput.value).toEqual(randomOption.textContent);
  });

  it('should close the option menu', () => {
    const { selectList } = setupSelectOptionFromMenuWithKeyHandling();
    expect(selectList.hasAttribute('open')).toBe(false);
  });

  it('should float the label ', () => {
    const { selectLabel } = setupSelectOptionFromMenuWithKeyHandling();
    expect(selectLabel).toHaveStyle('transform: translate3d(-15px,-20px,0);');
  });
});

describe('when no results are found', () => {
  it('should display "No results found"', () => {
    const { selectInput, selectList } = setupOpenSelectMenu();
    fireEvent.change(selectInput, {
      target: { value: 'z' },
    });
    expect(selectList).toHaveTextContent(/^No results found$/);
  });
});

describe('when custom filter function is given', () => {
  it('should filter results according to custom filter function', () => {
    const { selectInput, selectList } = setupWithCustomFilterFunction(
      (option, search) => option.length >= search.length
    );
    fireEvent.change(selectInput, {
      target: { value: 'zzzz zzzz zzzz zzzz' },
    });
    expect(selectList).toHaveTextContent(props.options[1].name);
  });
  it('should call the custom filter function', () => {
    const mockFilter = jest.fn();
    const { selectInput } = setupWithCustomFilterFunction(mockFilter);
    fireEvent.change(selectInput, {
      target: { value: 'z' },
    });
    expect(mockFilter).toHaveBeenCalled();
  });
});

describe("when status = 'error'", () => {
  it('should show a red border', () => {
    const { getByRole } = render(
      <Select status="error">{SelectChildren}</Select>
    );
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
  });
});

describe('when error is true', () => {
  it('should show a red border', () => {
    const { getByRole } = render(
      <Select error={true}>{SelectChildren}</Select>
    );
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
  });
});

describe('when error is a string', () => {
  it('should show a red border', () => {
    const { getByRole } = render(
      <Select error="error">{SelectChildren}</Select>
    );
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
  });
});

describe('when error is a component', () => {
  it('should show a red border', () => {
    const { getByRole } = render(
      <Select error={<span>error</span>}>{SelectChildren}</Select>
    );
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
  });
});

describe('when renderError is given', () => {
  it('should not render the custom error if error is falsy', () => {
    const customError = (e: string) => <div className="customError">{e}</div>;
    const { getByRole } = render(
      <Select renderError={customError}>{SelectChildren}</Select>
    );
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    expect(selectContainer.lastChild).not.toHaveClass('customError');
  });

  it('should not render the custom error if error is true', () => {
    const customError = (e: string) => <div className="customError">{e}</div>;
    const { getByRole } = render(
      <Select renderError={customError} error={true}>
        {SelectChildren}
      </Select>
    );
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    expect(selectContainer.lastChild).not.toHaveClass('customError');
  });

  it('should render the error string in the custom error container', () => {
    const errorContainer = (e: React.ReactNode) => (
      <div data-testid="error-component">{e}</div>
    );
    const { container, getByTestId } = render(
      <Select renderError={errorContainer} error="nasty error">
        {SelectChildren}
      </Select>
    );
    const errorContainerElement = getByTestId('error-component');
    expect(container).toContainElement(errorContainerElement);
    expect(errorContainerElement).toHaveTextContent('nasty error');
  });

  it('should render the custom error in the custom error container', () => {
    const customError = () => (
      <span data-testid="custom-error">nasty error</span>
    );
    const errorContainer = (e: () => React.ReactNode) => (
      <div data-testid="error-component">{e()}</div>
    );
    const { container, getByTestId } = render(
      <Select renderError={errorContainer} error={customError}>
        {SelectChildren}
      </Select>
    );
    const customErrorElement = getByTestId('custom-error');
    const errorContainerElement = getByTestId('error-component');
    expect(container).toContainElement(errorContainerElement);
    expect(errorContainerElement).toContainElement(customErrorElement);
    expect(customErrorElement).toHaveTextContent('nasty error');
  });
});

describe('when isLoading = true', () => {
  it('should show a loading spinner', () => {
    const { getByRole, getByTestId } = render(
      <Select isLoading>{SelectChildren}</Select>
    );
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    const loadingSpinner = getByTestId('alert');
    expect(selectContainer).toContainElement(loadingSpinner);
  });
});

it('up and down arrow keys can be used to navigate the options menu', () => {
  const { selectInput, displayedOptions } = setupOpenSelectMenu();
  const firstOption = displayedOptions[0];
  const secondOption = displayedOptions[1];
  const arrowUpEvent = { key: 'ArrowUp', keyCode: 38 };
  const arrowDownEvent = { key: 'ArrowDown', keyCode: 40 };

  expect(firstOption).toHaveClass('active');

  fireEvent.keyDown(selectInput, arrowDownEvent);
  expect(secondOption).toHaveClass('active');

  fireEvent.keyDown(selectInput, arrowUpEvent);
  expect(firstOption).toHaveClass('active');
});

describe('<Select/> on click outside', () => {
  it('should lose focus', async () => {
    const Component = () => (
      <React.Fragment>
        <Select label="ClickOutside">
          <Select.Option value="ClickOutside">ClickOutside</Select.Option>
        </Select>
        <div>outside</div>
      </React.Fragment>
    );

    const { queryByTestId, queryByRole, queryByText } = render(<Component />);
    const selectInput = queryByRole('combobox') as HTMLInputElement;
    const selectList = queryByTestId('listbox');
    const outside = queryByText('outside');

    fireEvent.focus(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    fireEvent.click(outside);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });

  it('should remove click outside listener when unmount', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    const Component = () => (
      <Select label="ClickOutside">
        <Select.Option value="ClickOutside">ClickOutside</Select.Option>
      </Select>
    );

    const { unmount } = render(<Component />);
    unmount();
    expect(removeEventListenerSpy.mock.calls[0][1]).toEqual(
      addEventListenerSpy.mock.calls[0][1]
    );
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});

describe('<Select/> onBlur onFocus', () => {
  it('should call onBlur and onFocus', () => {
    const onBlurSpy = jest.fn();
    const onFocusSpy = jest.fn();
    const Component = () => (
      <Select label="ClickOutside" onBlur={onBlurSpy} onFocus={onFocusSpy}>
        <Select.Option value="ClickOutside">ClickOutside</Select.Option>
      </Select>
    );

    const { queryByRole, asFragment } = render(<Component />);
    const selectInput = queryByRole('combobox') as HTMLInputElement;

    fireEvent.focus(selectInput);
    expect(onFocusSpy).toHaveBeenCalledTimes(1);
    // use snapshot to validate isFocus
    expect(asFragment()).toMatchSnapshot();

    fireEvent.blur(selectInput);
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
    // use snapshot to validate floating
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Select/> handleValueChange', () => {
  it('input value should be the same as passed prop value', async () => {
    const Component = ({ value }: { value: string }) => (
      <Select label="handleValueChange" value={value}>
        <Select.Option value="handleValueChange">
          handleValueChange
        </Select.Option>
      </Select>
    );

    const mockValue = 'mock';
    const { queryByRole, rerender } = render(<Component value="" />);
    const selectInput = queryByRole('combobox');
    expect(selectInput.getAttribute('value')).toEqual('');
    rerender(<Component value={mockValue} />);
    expect(selectInput.getAttribute('value')).toEqual(mockValue);
    rerender(<Component value="" />);
    expect(selectInput.getAttribute('value')).toEqual('');
  });
});

describe('<Select/> prop onInputChange', () => {
  it('should call onInputChange on input change', async () => {
    const onInputChangeSpy = jest.fn();
    const Component = () => (
      <Select label="onInputChange" onInputChange={onInputChangeSpy}>
        <Select.Option value="onInputChange">onInputChange</Select.Option>
      </Select>
    );

    const mockValue = 'mock value';
    const { queryByRole } = render(<Component />);
    const selectInput = queryByRole('combobox');
    fireEvent.change(selectInput, {
      target: {
        value: mockValue,
      },
    });
    expect(onInputChangeSpy).toHaveBeenCalledTimes(1);
    // not able to validate SyntheticEvent
  });
});

describe('<Select /> click to close option dropdown', () => {
  it('should not be closed when input is clicked again', async () => {
    const Component = () => (
      <Select label="default">
        <Select.Option value="default">default</Select.Option>
      </Select>
    );

    const { queryByRole, queryByTestId } = render(<Component />);
    const selectInput = queryByRole('combobox');
    const selectList = queryByTestId('listbox');

    userEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    userEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
  });

  it('should be focused when input is clicked', () => {
    const Component = () => (
      <Select label="default">
        <Select.Option value="default">default</Select.Option>
      </Select>
    );

    const { queryByRole } = render(<Component />);
    const selectInput = queryByRole('combobox');

    userEvent.click(selectInput);
    expect(selectInput).toHaveFocus();
  });

  it('should open/ close when drop icon is clicked', async () => {
    const Component = () => (
      <Select label="default">
        <Select.Option value="default">default</Select.Option>
      </Select>
    );

    const { queryByTestId } = render(<Component />);
    const dropIcon = document.querySelector('.select-icon');
    const selectList = queryByTestId('listbox');

    userEvent.click(dropIcon);
    expect(selectList.hasAttribute('open')).toEqual(true);
    userEvent.click(dropIcon);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });

  it('should be focused/ blurred when drop icon is clicked', () => {
    const onBlurSpy = jest.fn();
    const onFocusSpy = jest.fn();

    const Component = () => (
      <Select label="default" onFocus={onFocusSpy} onBlur={onBlurSpy}>
        <Select.Option value="default">default</Select.Option>
      </Select>
    );

    const { queryByRole } = render(<Component />);
    const dropIcon = document.querySelector('.select-icon');
    const selectInput = queryByRole('combobox');

    userEvent.click(dropIcon);
    expect(selectInput).toHaveFocus();
    expect(onFocusSpy).toHaveBeenCalledTimes(1);
    userEvent.click(dropIcon);
    expect(selectInput).not.toHaveFocus();
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});

describe('<Select/> disableTyping', () => {
  it('esc key should still have effect', async () => {
    const Component = () => (
      <Select label="disableTyping" disableTyping={true}>
        <Select.Option value="disableTyping">disableTyping</Select.Option>
      </Select>
    );

    const { queryByRole, queryByTestId } = render(<Component />);
    const selectInput = queryByRole('combobox');
    const selectList = queryByTestId('listbox');

    fireEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    fireEvent.keyDown(selectInput, { key: 'Esc', keyCode: 27 });
    expect(selectList.hasAttribute('open')).toEqual(false);
  });

  it('input value should change when disableTyping is not specified', async () => {
    const Component = () => (
      <Select label="disableTyping">
        <Select.Option value="disableTyping">disableTyping</Select.Option>
      </Select>
    );

    const { queryByRole } = render(<Component />);
    const selectInput = queryByRole('combobox');
    userEvent.type(selectInput, 'abc');
    expect((selectInput as any).value).toEqual('abc');
  });

  it('input value should not change when disableTyping is truthy', async () => {
    const Component = () => (
      <Select label="disableTyping" disableTyping={true}>
        <Select.Option value="disableTyping">disableTyping</Select.Option>
      </Select>
    );

    const { queryByRole } = render(<Component />);
    const selectInput = queryByRole('combobox');
    userEvent.type(selectInput, 'abc');
    expect((selectInput as any).value).toEqual('');
  });

  it('should be open/ close when input is clicked', async () => {
    const Component = () => (
      <Select label="disableTyping" disableTyping={true}>
        <Select.Option value="disableTyping">disableTyping</Select.Option>
      </Select>
    );

    const { queryByRole, queryByTestId } = render(<Component />);
    const selectInput = queryByRole('combobox');
    const selectList = queryByTestId('listbox');

    userEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    userEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });

  it('should be open/ close when drop icon is clicked', () => {
    const Component = () => (
      <Select label="disableTyping" disableTyping={true}>
        <Select.Option value="disableTyping">disableTyping</Select.Option>
      </Select>
    );

    const { queryByTestId } = render(<Component />);
    const selectList = queryByTestId('listbox');
    const dropIcon = document.querySelector('.select-icon');

    userEvent.click(dropIcon);
    expect(selectList.hasAttribute('open')).toEqual(true);
    userEvent.click(dropIcon);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });
});

describe('<Select/> defaultOpen', () => {
  it('should be open', async () => {
    const Component = () => (
      <Select label="defaultOpen" defaultOpen={true}>
        <Select.Option value="defaultOpen">defaultOpen</Select.Option>
      </Select>
    );

    const { queryByTestId } = render(<Component />);
    const selectList = queryByTestId('listbox');

    expect(selectList.hasAttribute('open')).toEqual(true);
  });

  it('should be focused', async () => {
    const Component = () => (
      <Select label="defaultOpen" defaultOpen={true}>
        <Select.Option value="defaultOpen">defaultOpen</Select.Option>
      </Select>
    );

    const { queryByRole } = render(<Component />);
    const selectInput = queryByRole('combobox');

    expect(selectInput).toHaveFocus();
  });

  it('should be closed by clicking outside', async () => {
    const Component = () => (
      <React.Fragment>
        <Select label="defaultOpen" defaultOpen={true}>
          <Select.Option value="defaultOpen">defaultOpen</Select.Option>
        </Select>
        <div>outside</div>
      </React.Fragment>
    );

    const { queryByTestId, queryByText } = render(<Component />);
    const selectList = queryByTestId('listbox');
    const outside = queryByText('outside');

    expect(selectList.hasAttribute('open')).toEqual(true);
    fireEvent.click(outside);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });

  it('should be closed by clicking option', async () => {
    const Component = () => (
      <Select label="defaultOpen" defaultOpen={true}>
        <Select.Option value="defaultOpen">defaultOpen</Select.Option>
      </Select>
    );

    const { queryByTestId } = render(<Component />);
    const selectList = queryByTestId('listbox');
    const option = queryByTestId('option');

    expect(selectList.hasAttribute('open')).toEqual(true);
    userEvent.click(option);
    expect(selectList.hasAttribute('open')).toEqual(false);
  });
});

describe('<Select/> esc key', () => {
  it('esc keydown event should close the option list', async () => {
    const Component = () => (
      <Select label="esc">
        <Select.Option value="esc">esc</Select.Option>
      </Select>
    );

    const { queryByRole, queryByTestId } = render(<Component />);
    const selectInput = queryByRole('combobox');
    const selectList = queryByTestId('listbox');

    fireEvent.focus(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    fireEvent.keyDown(selectInput, { key: 'Esc', keyCode: 27 });
    expect(selectList.hasAttribute('open')).toEqual(false);
  });
});

describe('<Select/> handleMouseEnterOption', () => {
  it('it should match snapshot, the option element should have active class name', async () => {
    const Component = () => (
      <Select label="handleMouseEnterOption">
        <Select.Option value="handleMouseEnterOption">
          handleMouseEnterOption
        </Select.Option>
      </Select>
    );

    const { queryByRole, queryByTestId, asFragment } = render(<Component />);
    const selectInput = queryByRole('combobox');
    const option = queryByTestId('option');
    const selectList = queryByTestId('listbox');

    fireEvent.focus(selectInput);
    expect(selectList.hasAttribute('open')).toEqual(true);
    fireEvent.mouseEnter(option);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Select.Option/>', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(
      <Select.Option value="Option">Option</Select.Option>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
