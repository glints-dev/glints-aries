import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField, { textFieldType, isFilled } from './TextField';
import { SecondaryColor } from '../../Utils/Colors';
import SearchIcon from '../../General/Icon/components/SearchIcon';

const props = {
  type: 'text' as textFieldType,
  label: 'Username',
  onChange: jest.fn().mockImplementation(event => event.target.value),
};

const inputValue = 'glintsaries';
const inputTypes: textFieldType[] = ['text', 'password', 'number'];
const emptyValueArray = [undefined, ''];
const valueArrayMap = {
  text: [inputValue, ' '],
  password: [inputValue, ' '],
  number: [0, 123],
};

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
    expect(textFieldInput).toHaveStyle('padding: 8px 16px;');
  });

  it('false, it should display the correct size', () => {
    const { textFieldInput } = setupTextField();
    expect(textFieldInput).toHaveStyle('padding: 12px 16px;');
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

describe('<TextField /> forwards ref to underlying input element', () => {
  const label = 'forward-ref';

  test('ref is being forwarded correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { queryByLabelText } = render(
      <TextField ref={ref} label={label} type="text" />
    );
    const textInput = queryByLabelText(label);
    expect(textInput).toEqual(ref.current);
  });

  test('underlying textarea can be focused/blurred through ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { queryByLabelText } = render(
      <TextField ref={ref} label={label} type="text" />
    );
    const textInput = queryByLabelText(label);
    expect(textInput).not.toHaveFocus();

    ref.current.focus();
    expect(textInput).toHaveFocus();

    ref.current.blur();
    expect(textInput).not.toHaveFocus();
  });
});

describe('when an empty value is passed to', () => {
  test('isFilled, it should return false', () => {
    inputTypes.forEach(type => {
      emptyValueArray.forEach(emptyValue => {
        expect(isFilled(type, emptyValue)).toBe(false);
      });
    });
  });

  test('value prop, label should not be floating', () => {
    inputTypes.forEach(type => {
      emptyValueArray.forEach((emptyValue, index) => {
        const { getAllByTestId } = render(
          <TextField
            value={emptyValue}
            label="label"
            type={type}
            onChange={jest.fn()}
          />
        );
        const textFieldLabel = getAllByTestId('textfield-label')[index];
        expect(textFieldLabel).not.toHaveStyle(
          `color: ${SecondaryColor.black}`
        );
      });
    });
  });
});

describe('when a non-empty value is passed to', () => {
  test('isFilled, it should return true', () => {
    inputTypes.forEach(type => {
      const valueArray = valueArrayMap[type];
      valueArray.forEach((value: any) => {
        expect(isFilled(type, value)).toBe(true);
      });
    });
  });

  test('value prop, label should be floating', () => {
    inputTypes.forEach(type => {
      const valueArray = valueArrayMap[type];
      valueArray.forEach((value: any, index: number) => {
        const { getAllByTestId } = render(
          <TextField
            value={value}
            label="label"
            type={type}
            onChange={jest.fn()}
          />
        );
        const textFieldLabel = getAllByTestId('textfield-label')[index];
        expect(textFieldLabel).toHaveStyle(`color: #666666`);
      });
    });
  });
});

describe('when allowClear is true and type is text', () => {
  describe('and type is text', () => {
    it('should not show the clear icon when value is empty', async () => {
      const { queryByTestId } = render(
        <TextField
          label="label"
          type="text"
          allowClear={true}
          onChange={jest.fn()}
        />
      );

      const clearButton = queryByTestId('clear-button');
      expect(clearButton).not.toBeInTheDocument();
    });

    it('should show the clear icon when value is not empty', () => {
      const { queryByTestId } = render(
        <TextField
          label="label"
          type="text"
          value="123"
          allowClear={true}
          onChange={jest.fn()}
        />
      );

      const clearButton = queryByTestId('clear-button');
      expect(clearButton).toBeInTheDocument();
    });

    it('should clear the input value and trigger onChange when click clear button', () => {
      const onChange = jest.fn();

      const { queryByTestId } = render(
        <TextField
          label="label"
          type="text"
          value="123"
          allowClear={true}
          onChange={onChange}
        />
      );

      const clearButton = queryByTestId('clear-button');
      userEvent.click(clearButton);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('and type is password', () => {
    it('should show the invisible icon but not clear icon', () => {
      const { queryByTestId } = render(
        <TextField
          label="label"
          type="password"
          value="123"
          allowClear={true}
          onChange={jest.fn()}
        />
      );

      const clearButton = queryByTestId('clear-button');
      expect(clearButton).not.toBeInTheDocument();

      const invisibleIcon = queryByTestId('invisible-icon');
      expect(invisibleIcon).toBeInTheDocument();
    });
  });
});

describe('when startIcon has an icon value', () => {
  it('should match the snapshot when start icon is included inside the text box', () => {
    const { asFragment } = render(
      <TextField
        type={props.type}
        label={props.label}
        onChange={props.onChange}
        startIcon={<SearchIcon />}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
