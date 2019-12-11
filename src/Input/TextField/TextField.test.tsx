import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField, { textFieldType } from './TextField';
import { SecondaryColor, PrimaryColor } from '../../Style/Colors';

const props = {
  type: 'text' as textFieldType,
  label: 'Username',
  onChange: jest.fn().mockImplementation(event => event.target.value),
};

const inputValue = 'glintsaries';

function setupTextField(otherProps?: any) {
  const { getByLabelText, ...utils } = render(
    <TextField
      type={props.type}
      label={props.label}
      onChange={props.onChange}
      {...otherProps}
    />
  );
  const textFieldInput = getByLabelText(props.label) as HTMLInputElement;
  return { textFieldInput, utils };
}

function setupTextFieldWithChangeEvent(otherProps?: any) {
  const { textFieldInput } = setupTextField(otherProps);
  userEvent.type(textFieldInput, inputValue);
  return { textFieldInput };
}

it('<TextField> should render with a label of Username and type of text', () => {
  const TextFieldSnapshot = renderer
    .create(<TextField type={props.type} label={props.label} />)
    .toJSON();
  expect(TextFieldSnapshot).toMatchSnapshot();
});

describe('when it is rendered', () => {
  it('should display the correct input label', () => {
    const { textFieldInput } = setupTextField();
    expect(textFieldInput).toBeTruthy();
  });

  it('should have the correct type', () => {
    const { textFieldInput } = setupTextField();
    expect(textFieldInput.type).toEqual(props.type);
  });

  it('should have an empty string as its value', () => {
    const { textFieldInput } = setupTextField();
    expect(textFieldInput.value).toEqual('');
  });
});

describe('when a value is entered', () => {
  it('should call onChange for each input', () => {
    setupTextFieldWithChangeEvent();
    expect(props.onChange).toHaveBeenCalledTimes(inputValue.length);
  });

  it('should return the input value when onChange is passed a function: event => event.target.value', () => {
    setupTextFieldWithChangeEvent();
    expect(props.onChange.mock.results.slice(-1)[0].value).toEqual(inputValue);
  });

  it('should display the correct value', () => {
    const { textFieldInput } = setupTextFieldWithChangeEvent();
    expect(textFieldInput.value).toEqual(inputValue);
  });
});

describe('when status is:', () => {
  it("'success', it should display a lightblack border", () => {
    const { textFieldInput } = setupTextField({ status: 'success' });
    expect(textFieldInput).toHaveStyle(`
      border-color: ${SecondaryColor.lightblack};
    `);
  });

  it("'error', it should display a red border", () => {
    const { textFieldInput } = setupTextField({ status: 'error' });
    expect(textFieldInput).toHaveStyle(`
      border-color: ${PrimaryColor.glintsred};
    `);
  });
});

describe('when disabled is true', () => {
  it('should display cursor: not-allowed', () => {
    const { textFieldInput } = setupTextField({ disabled: true });
    expect(textFieldInput).toHaveStyle('cursor: not-allowed;');
  });

  it('should be disabled', () => {
    const { textFieldInput } = setupTextField({ disabled: true });
    expect(textFieldInput).toBeDisabled();
  });
});

describe('when small is:', () => {
  it('true, it should display the correct size', () => {
    const { textFieldInput } = setupTextField({ small: true });
    expect(textFieldInput).toHaveStyle('padding: 13px 15px;');
  });

  it('false, it should display the correct size', () => {
    const { textFieldInput } = setupTextField();
    expect(textFieldInput).toHaveStyle('padding: 15px 20px;');
  });
});

describe('when disableTyping is true', () => {
  it('should display cursor: pointer', () => {
    const { textFieldInput } = setupTextField({ disableTyping: true });
    expect(textFieldInput).toHaveStyle('cursor: pointer;');
  });

  it('should not be able to input a value', () => {
    const { textFieldInput } = setupTextField({
      disableTyping: true,
    });
    userEvent.type(textFieldInput, inputValue);
    expect(textFieldInput.value).toBe('');
  });
});

describe('when removeFloatingLabel is true', () => {
  it('should remove the floating label', () => {
    const { textFieldInput } = setupTextField({ removeFloatingLabel: true });
    const textFieldLabel = textFieldInput.parentElement.querySelector(
      '[data-testid="textfield-label"]'
    ) as HTMLLabelElement;
    expect(textFieldInput.parentElement).not.toContainElement(textFieldLabel);
  });

  it('should display a placeholder', () => {
    const { utils } = setupTextField({ removeFloatingLabel: true });
    const textFieldInput = utils.getByPlaceholderText(props.label);
    expect(textFieldInput).toBeTruthy();
  });
});
