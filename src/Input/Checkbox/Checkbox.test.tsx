import * as React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Checkbox, { CheckboxProps } from './Checkbox';

const props = {
  id: 'software-engineer',
  value: 'Software Engineer',
  onChange: jest.fn().mockImplementation(event => event.target.value),
};

function setupCheckbox(props: CheckboxProps) {
  const { id, value, onChange, ...restProps } = props;
  const { getByText, getByLabelText, asFragment, ...utils } = render(
    <Checkbox id={id} value={value} onChange={onChange} {...restProps} />
  );
  const checkboxInput = getByLabelText(value as string) as HTMLInputElement;
  const checkboxLabel = getByText(value as string) as HTMLLabelElement;
  return { checkboxInput, checkboxLabel, asFragment, utils };
}

afterEach(() => {
  props.onChange.mockClear();
});

describe(`<Checkbox> rendering`, () => {
  it(`should match snapshot when no special props are passed`, () => {
    const { asFragment } = setupCheckbox(props);
    expect(asFragment()).toMatchSnapshot();
  });
  it(`should match snapshot when border=true`, () => {
    const { asFragment } = setupCheckbox({ border: true, ...props });
    expect(asFragment()).toMatchSnapshot();
  });
  it(`should match snapshot when disabled=true`, () => {
    const { asFragment } = setupCheckbox({ disabled: true, ...props });
    expect(asFragment()).toMatchSnapshot();
  });
  it(`should match snapshot when size="large"`, () => {
    const { asFragment } = setupCheckbox({ size: 'large', ...props });
    expect(asFragment()).toMatchSnapshot();
  });
});

it('when toggling checkbox, it should fire onChange once and become checked, then fire onChange once and become unchecked', () => {
  const { checkboxInput, checkboxLabel } = setupCheckbox(props);

  fireEvent.click(checkboxLabel);
  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(checkboxInput.checked).toEqual(true);

  props.onChange.mockClear();

  fireEvent.click(checkboxLabel);
  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(checkboxInput.checked).toEqual(false);
});

it('when controlled, it should fire onChange but remain unchanged', () => {
  const { checkboxInput, checkboxLabel } = setupCheckbox({
    ...props,
    checked: false,
  });

  fireEvent.click(checkboxLabel);
  expect(props.onChange).toHaveBeenCalledTimes(1);
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

  rerender(<Component {...props} checked={true} />);

  expect(checkboxInput.checked).toEqual(true);
});

it('should not react to inputs when disabled', () => {
  const { checkboxInput, checkboxLabel } = setupCheckbox({
    disabled: true,
    ...props,
  });

  fireEvent.click(checkboxLabel);
  expect(props.onChange).toHaveBeenCalledTimes(0);
  expect(checkboxInput.checked).toEqual(false);
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

  it('should return the input value when onChange is passed a function: event => event.target.value', () => {
    const { checkboxLabel } = setupCheckbox(props);
    fireEvent.click(checkboxLabel);
    expect(props.onChange.mock.results[0].value).toEqual(props.value);
  });
});
