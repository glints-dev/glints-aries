import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { PrimaryColor, SecondaryColor, Greyscale } from '../../Style/Colors';
import RadioButton, { Props } from './RadioButton';

const singleRadioButton = (
  <RadioButton label="Full Time" name="job-type" value="full-time" />
);
const singleRadioButtonWhiteTheme = (
  <RadioButton
    label="Full Time"
    name="job-type"
    value="full-time"
    theme="white"
  />
);
const twoRadioButtons = (
  <React.Fragment>
    <RadioButton label="Full Time" name="job-type" value="full-time" />
    <RadioButton label="Intership" name="job-type" value="intership" />
  </React.Fragment>
);
const twoRadioButtonsOneChecked = (
  <React.Fragment>
    <RadioButton
      label="Full Time"
      name="job-type"
      value="full-time"
      checked={true}
    />
    <RadioButton label="Intership" name="job-type" value="intership" />
  </React.Fragment>
);

const setupRadioButtons = () => {
  const onChange = jest.fn(e => e.persist());
  const { getByTestId } = render(
    <React.Fragment>
      <RadioButton
        label="Full Time"
        name="job-type"
        value="full-time"
        data-testid="radio-1"
        onChange={onChange}
      />
      <RadioButton
        label="Intership"
        name="job-type"
        value="internship"
        data-testid="radio-2"
        onChange={onChange}
      />
    </React.Fragment>
  );
  return {
    onChange,
    radioButton1: getByTestId('radio-1'),
    radioButton2: getByTestId('radio-2'),
  };
};

describe('<RadioButton>', () => {
  it('should render as expected', () => {
    const singleRadioSnapshot = renderer.create(singleRadioButton).toJSON();
    expect(singleRadioSnapshot).toMatchSnapshot();
    const singleRadioSnapshotWhiteTheme = renderer
      .create(singleRadioButtonWhiteTheme)
      .toJSON();
    expect(singleRadioSnapshotWhiteTheme).toMatchSnapshot();
    const twoRadiosSnapshot = renderer.create(twoRadioButtons).toJSON();
    expect(twoRadiosSnapshot).toMatchSnapshot();
    const twoRadioButtonsOneCheckedSnapshot = renderer
      .create(twoRadioButtonsOneChecked)
      .toJSON();
    expect(twoRadioButtonsOneCheckedSnapshot).toMatchSnapshot();
  });

  it('should call onChange when clicked', () => {
    const { onChange, radioButton1, radioButton2 } = setupRadioButtons();
    fireEvent.click(radioButton1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('full-time');
    fireEvent.click(radioButton2);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][0].target.value).toBe('internship');
  });

  it('should not call onChange again when clicked a second time', () => {
    const { onChange, radioButton1 } = setupRadioButtons();
    fireEvent.click(radioButton1);
    fireEvent.click(radioButton1);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should should check the clicked item', () => {
    const { radioButton1, radioButton2 } = setupRadioButtons();
    fireEvent.click(radioButton1);
    expect(radioButton1).toBeChecked();
    fireEvent.click(radioButton2);
    expect(radioButton1).not.toBeChecked();
    expect(radioButton2).toBeChecked();
  });

  it('should not call onChange again when disabled', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <RadioButton
        label="Full Time"
        name="job-type"
        value="full-time"
        data-testid="radio"
        onChange={onChange}
        disabled={true}
      />
    );
    const radioButton = getByTestId('radio');
    userEvent.click(radioButton);
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('<RadioButton /> color', () => {
  const onChange = jest.fn();
  const Component = (props: Props) => (
    <RadioButton
      label="Full Time"
      name="job-type"
      value="full-time"
      onChange={onChange}
      {...props}
    />
  );
  it('should be grey by default', () => {
    const { getByTestId } = render(<Component />);
    const radioIcon = getByTestId('radio-icon');
    expect(radioIcon).toHaveStyle(`border-color: ${Greyscale.grey}`);
  });

  it('should be green when checked', () => {
    const { getByTestId } = render(<Component checked />);
    const radioIcon = getByTestId('radio-icon');
    expect(radioIcon).toHaveStyle(`border-color: ${SecondaryColor.darkgreen}`);
  });

  it('should be red when has error', () => {
    const { getByTestId } = render(<Component error />);
    const radioIcon = getByTestId('radio-icon');
    expect(radioIcon).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
  });

  it('should be light grey when disabled', () => {
    const { getByTestId } = render(<Component disabled />);
    const radioIcon = getByTestId('radio-icon');
    expect(radioIcon).toHaveStyle(`border-color: ${Greyscale.lightgrey}`);
  });
});

describe('<RadioButton border /> color', () => {
  const onChange = jest.fn();
  const Component = (props: Props) => (
    <RadioButton
      label="Full Time"
      name="job-type"
      value="full-time"
      onChange={onChange}
      border={true}
      {...props}
    />
  );
  it('should be grey by default', () => {
    const { getByTestId } = render(<Component />);
    const radioIcon = getByTestId('radio-icon');
    const radioBorder = getByTestId('radio-border');
    expect(radioIcon).toHaveStyle(`border-color: ${Greyscale.grey}`);
    expect(radioBorder).toHaveStyle('border-color: #aaa');
  });

  it('should be blue when checked', () => {
    const { getByTestId } = render(<Component checked />);
    const radioIcon = getByTestId('radio-icon');
    const radioBorder = getByTestId('radio-border');
    expect(radioIcon).toHaveStyle(`border-color: ${SecondaryColor.actionblue}`);
    expect(radioBorder).toHaveStyle(
      `border-color: ${SecondaryColor.actionblue}`
    );
  });

  it('should be blue when error', () => {
    const { getByTestId } = render(<Component error />);
    const radioIcon = getByTestId('radio-icon');
    const radioBorder = getByTestId('radio-border');
    expect(radioIcon).toHaveStyle(`border-color: ${Greyscale.grey}`);
    expect(radioBorder).toHaveStyle(`border-color: ${PrimaryColor.glintsred}`);
    expect(radioBorder).toHaveStyle('background-color: rgba(236, 39, 43, 0.1)');
  });

  it('should be light grey when disabled', () => {
    const { getByTestId } = render(<Component disabled />);
    const radioIcon = getByTestId('radio-icon');
    const radioBorder = getByTestId('radio-border');
    expect(radioIcon).toHaveStyle(`border-color: ${Greyscale.lightgrey}`);
    expect(radioBorder).toHaveStyle(`border-color: ${Greyscale.lightgrey}`);
  });
});
