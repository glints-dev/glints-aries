import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Textarea from './Textarea';
import { Interactive } from './Textarea.stories';
import { SecondaryColor, PrimaryColor } from '../../Utils/Colors';

interface Props {
  label: string;
  value: string;
  onChange: jest.Mock;
}

const props: Props = {
  label: 'Description',
  value: 'Explanation',
  onChange: jest.fn().mockImplementation(event => event.target.value),
};

const inputValue =
  'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent.';

function setupTextarea(props: Props, otherProps?: any) {
  const { getByLabelText, ...utils } = render(
    <Textarea label={props.label} onChange={props.onChange} {...otherProps} />
  );
  const textareaInput = getByLabelText(props.label) as HTMLTextAreaElement;
  return { textareaInput, utils };
}

function setupTextareaWithChangeEvent(props: Props) {
  const { textareaInput } = setupTextarea(props);
  userEvent.type(textareaInput, inputValue);
  return { textareaInput };
}

function createNodeMock(element: any) {
  if (element.type === 'textarea') {
    return {
      value: 0,
      offsetHeight: 34,
    };
  }
  return null;
}

it('<Textarea> should render with a value and label of Description', () => {
  const options = { createNodeMock };
  const TextareaSnapshot = renderer
    .create(<Textarea label={props.label} value={props.value} />, options)
    .toJSON();
  expect(TextareaSnapshot).toMatchSnapshot();
});

describe('when storybook is rendered', () => {
  it('should display the correct input label in story', () => {
    Interactive.args = {
      label: props.label,
    };

    expect(Interactive.args.label).toEqual(props.label);
  });
});

describe('when it is rendered', () => {
  it('should display the correct input label', () => {
    const { textareaInput } = setupTextarea(props);
    expect(textareaInput).toBeTruthy();
  });

  it('should have an empty string as its value', () => {
    const { textareaInput } = setupTextarea(props);
    expect(textareaInput.value).toEqual('');
  });
});

describe('when a value is entered', () => {
  it('should call onChange for each input', () => {
    setupTextareaWithChangeEvent(props);
    expect(props.onChange).toHaveBeenCalledTimes(inputValue.length);
  });

  it('should return the input value when onChange is passed a function: event => event.target.value', () => {
    setupTextareaWithChangeEvent(props);
    expect(props.onChange.mock.results.slice(-1)[0].value).toEqual(inputValue);
  });

  it('should display the correct value', () => {
    const { textareaInput } = setupTextareaWithChangeEvent(props);
    expect(textareaInput.value).toEqual(inputValue);
  });
});

describe('when status is:', () => {
  it("'success', it should display a lightblack border", () => {
    const { textareaInput } = setupTextarea(props, { status: 'success' });
    expect(textareaInput).toHaveStyle(`
      border-color: ${SecondaryColor.lightblack};
    `);
  });

  it("'error', it should display a red border", () => {
    const { textareaInput } = setupTextarea(props, { status: 'error' });
    expect(textareaInput).toHaveStyle(`
      border-color: ${PrimaryColor.glintsred};
    `);
  });
});

describe('when removeFloatingLabel is true', () => {
  it('should remove the floating label', () => {
    const { textareaInput } = setupTextarea(props, {
      removeFloatingLabel: true,
    });
    const textFieldLabel = textareaInput.parentElement.querySelector(
      '[data-testid="textarea-label"]'
    ) as HTMLLabelElement;
    expect(textareaInput.parentElement).not.toContainElement(textFieldLabel);
  });

  it('should display a placeholder', () => {
    const { utils } = setupTextarea(props, { removeFloatingLabel: true });
    const textareaInput = utils.getByPlaceholderText(props.label);
    expect(textareaInput).toBeTruthy();
  });
});

describe('<Textarea /> forwards ref to underlying textarea element', () => {
  const label = 'forward-ref';

  test('ref is being forwarded correctly', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    const { queryByLabelText } = render(
      <Textarea ref={ref} label={label} value={props.value} />
    );
    const textarea = queryByLabelText(label);
    expect(textarea).toEqual(ref.current);
  });

  test('underlying textarea can be focused/blurred through ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    const fn = jest.fn();
    const { queryByLabelText } = render(
      <Textarea ref={ref} label={label} onBlur={fn} />
    );
    const textarea = queryByLabelText(label);
    expect(textarea).not.toHaveFocus();

    ref.current.focus();
    expect(textarea).toHaveFocus();

    ref.current.blur();
    expect(textarea).not.toHaveFocus();
  });
});
