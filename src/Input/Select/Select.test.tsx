import * as React from 'react';

import * as lodash from 'lodash';
import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Select from './Select';
import { PrimaryColor } from '../../Style/Colors';

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

const SelectComponent = (
  <Select label={props.label} onChange={props.onChange}>
    {SelectChildren}
  </Select>
);

function setupOpenSelectMenu() {
  const { getByRole, getAllByRole } = render(SelectComponent);
  const selectInput = getByRole('combobox') as HTMLInputElement;
  const selectList = getByRole('listbox');
  const displayedOptions = getAllByRole('option');

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
  const { selectInput, selectList, displayedOptions } = setupOpenSelectMenu();
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
    setupSelectOptionFromMenu();
    expect(props.onOptionClick).toHaveBeenCalledTimes(1);
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
    setupSelectOptionFromMenuWithKeyHandling();
    expect(props.onOptionClick).toHaveBeenCalledTimes(1);
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
    const { getByRole } = render(<Select isLoading>{SelectChildren}</Select>);
    const selectContainer = getByRole('combobox').parentElement.parentElement;
    const loadingSpinner = getByRole('alert');
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
