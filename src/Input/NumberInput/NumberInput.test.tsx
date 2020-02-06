import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NumberInput from './NumberInput';

const props = {
  label: 'Number',
  onChange: jest.fn().mockImplementation(event => event.target.value),
};

const inputValue = '12';

function setupNumberInput(otherProps?: any) {
  const { getByLabelText, ...utils } = render(
    <NumberInput
      label={props.label}
      onChange={props.onChange}
      {...otherProps}
    />
  );
  const numberInput = getByLabelText(props.label) as HTMLInputElement;
  return { numberInput, utils };
}

function setupNumberInputWithChangeEvent(otherProps?: any) {
  const { numberInput } = setupNumberInput(otherProps);
  userEvent.type(numberInput, inputValue);
  return { numberInput };
}

it('<NumberInput> should render with a label of Username', () => {
  const TextFieldSnapshot = renderer
    .create(<NumberInput label={props.label} />)
    .toJSON();
  expect(TextFieldSnapshot).toMatchSnapshot();
});

describe('when it is rendered', () => {
  it('should have an empty string as its value', () => {
    const { numberInput } = setupNumberInput();
    expect(numberInput.value).toEqual('');
  });
});

describe('when a value is entered', () => {
  it('should call onChange for each input', () => {
    setupNumberInputWithChangeEvent();
    expect(props.onChange).toHaveBeenCalledTimes(inputValue.length);
  });

  it('should return the input value when onChange is passed a function: event => event.target.value', () => {
    setupNumberInputWithChangeEvent();
    expect(props.onChange.mock.results.slice(-1)[0].value).toEqual(inputValue);
  });

  it('should display the correct value', () => {
    const { numberInput } = setupNumberInputWithChangeEvent();
    expect(numberInput.value).toEqual(inputValue);
  });
});
