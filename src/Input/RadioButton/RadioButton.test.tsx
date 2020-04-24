import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RadioButton from './RadioButton';

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
});
