import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Checkbox, { CheckboxProps } from './Checkbox';

const props = {
  id: 'software-engineer',
  value: 'Software Engineer',
  onClick: jest.fn().mockImplementation(event => event.target.value),
};

function setupCheckbox(props: CheckboxProps) {
  const { id, value, onClick, ...restProps } = props;
  const { getByText, getByLabelText, ...utils } = render(
    <Checkbox id={id} value={value} onClick={onClick} {...restProps} />
  );
  const checkboxInput = getByLabelText(value as string) as HTMLInputElement;
  const checkboxLabel = getByText(value as string) as HTMLLabelElement;
  return { checkboxInput, checkboxLabel, utils };
}

afterEach(() => {
  props.onClick.mockClear();
});

it(`<Checkbox> should render an input with id, value and onClick props and a label with the text ${props.value}`, () => {
  const CheckboxSnapshot = renderer
    .create(
      <Checkbox id={props.id} value={props.value} onClick={props.onClick} />
    )
    .toJSON();
  expect(CheckboxSnapshot).toMatchSnapshot();
});

it('when toggling checkbox, it should fire onClick once and become checked, then fire onClick once and become unchecked', () => {
  const { checkboxInput, checkboxLabel } = setupCheckbox(props);

  fireEvent.click(checkboxLabel);
  expect(props.onClick).toHaveBeenCalledTimes(1);
  expect(checkboxInput.checked).toEqual(true);

  props.onClick.mockClear();

  fireEvent.click(checkboxLabel);
  expect(props.onClick).toHaveBeenCalledTimes(1);
  expect(checkboxInput.checked).toEqual(false);
});

it('when controlled, it should fire onClick but remain unchanged', () => {
  const { checkboxInput, checkboxLabel } = setupCheckbox({
    ...props,
    checked: false,
  });

  fireEvent.click(checkboxLabel);
  expect(props.onClick).toHaveBeenCalledTimes(1);
  expect(checkboxInput.checked).toEqual(false);
});

it('when controlled, the component should change with checked prop', () => {
  const Component = (props: CheckboxProps) => <Checkbox {...props} />;

  const { rerender, getByLabelText } = render(
    <Component {...props} checked={false} />
  );

  const checkboxInput = getByLabelText(
    props.value as string
  ) as HTMLInputElement;
  expect(checkboxInput.checked).toEqual(false);

  rerender(<Component checked={true} />);

  expect(checkboxInput.checked).toEqual(true);
});

it('when passed label, it should render the label', () => {
  const label = <p data-testid="label-child">label child</p>;
  const { getByTestId } = render(
    <Checkbox id={props.id} value={props.value} label={label} />
  );
  const LabelChild = getByTestId('label-child');
  expect(document.querySelector('label')).toContainElement(LabelChild);
});

describe('when it is rendered', () => {
  it('should display the correct label', () => {
    const { checkboxInput } = setupCheckbox(props);
    expect(checkboxInput).toBeTruthy();
  });

  it('should display an unchecked checkbox', () => {
    const { checkboxInput } = setupCheckbox(props);
    expect(checkboxInput.checked).toEqual(false);
  });

  it('should display a checked checkbox if checked=true', () => {
    const { checkboxInput } = setupCheckbox({ ...props, checked: true });
    expect(checkboxInput.checked).toEqual(true);
  });

  it('should display an unchecked checkbox if checked=false', () => {
    const { checkboxInput } = setupCheckbox({ ...props, checked: false });
    expect(checkboxInput.checked).toEqual(false);
  });

  it('should have the correct input id and value', async () => {
    const { checkboxInput } = setupCheckbox(props);
    expect(checkboxInput.id).toEqual(props.id);
    expect(checkboxInput.value).toEqual(props.value);
  });

  it('should return the input value when onClick is passed a function: event => event.target.value', () => {
    const { checkboxLabel } = setupCheckbox(props);
    fireEvent.click(checkboxLabel);
    expect(props.onClick.mock.results[0].value).toEqual(props.value);
  });
});
