import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Textarea from './Textarea';

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
  it("'error', it should display a red background", () => {
    const { textareaInput } = setupTextarea(props, { status: 'error' });
    expect(textareaInput).toHaveStyle(`
      background-color: rgba(236, 39, 43, 0.08);
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
    const { queryByLabelText } = render(<Textarea ref={ref} label={label} />);
    const textarea = queryByLabelText(label);
    expect(textarea).toEqual(ref.current);
  });

  test('when value is passed, textareaLabel style will follow when floating is true', () => {
    const { getByTestId } = render(
      <Textarea label={label} value={props.value} />
    );
    const textareaLabel = getByTestId('textarea-label');

    expect(textareaLabel).toHaveStyle(`padding: 0 5px;
    transform: translate3d(-15px,-20px,0);
    transition: all .2s;
    font-size: 12px;`);
  });

  test('underlying textarea can be focused/blurred through ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    const onBlur = jest.fn();
    const { queryByLabelText } = render(
      <Textarea ref={ref} label={label} onBlur={onBlur} />
    );
    const textarea = queryByLabelText(label);
    expect(textarea).not.toHaveFocus();

    ref.current.focus();
    expect(textarea).toHaveFocus();

    ref.current.blur();
    expect(textarea).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
