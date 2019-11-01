import * as React from 'react';

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
  <Select.Option key={option.id} value={option.value} onOptionClick={props.onOptionClick}>
    {option.name}
  </Select.Option>
))

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
  const randomOption = displayedOptions[Math.floor(Math.random() * displayedOptions.length)];

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

it('<Select> should render with 3 options', () => {
  const SelectSnapshot = renderer
    .create(SelectComponent)
    .toJSON();
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
      expect(option.getAttribute('data-value')).toEqual(props.options[index].value);
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
    const { getByRole } = render(<Select status="error">{SelectChildren}</Select>);
    const selectInput = getByRole('combobox');
    expect(selectInput).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
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
