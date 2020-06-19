// @ts-nocheck

import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';

describe('<Select /> can still work when receives non-string option children or value', () => {
  test('non-string option children, click option', async () => {
    const onChange = jest.fn();

    const Component = () => (
      <Select label="non-string option children" onChange={onChange}>
        <Select.Option value="one">{1}</Select.Option>
        <Select.Option value="two">{2}</Select.Option>
        <Select.Option value="three">{3}</Select.Option>
      </Select>
    );

    const { queryByText, asFragment } = render(<Component />);

    const downArrowIcon = document.querySelector('.select-icon');
    fireEvent.click(downArrowIcon);
    const option1 = queryByText('1');
    fireEvent.mouseDown(option1);

    expect(onChange).toHaveBeenLastCalledWith('one');
    expect(asFragment()).toMatchSnapshot();
  });

  test('non-string option children, search filtering', async () => {
    const Component = () => (
      <Select label="non-string option children">
        <Select.Option value="one">{1}</Select.Option>
        <Select.Option value="two">{2}</Select.Option>
        <Select.Option value="three">{3}</Select.Option>
      </Select>
    );

    const { queryByRole, queryAllByTestId, asFragment } = render(<Component />);

    const selectInput = queryByRole('combobox');
    userEvent.type(selectInput, '1');
    const filteredOptions = queryAllByTestId('option');
    expect(filteredOptions.length).toEqual(1);
    expect(asFragment()).toMatchSnapshot();
  });

  test('non-string defaultValue', async () => {
    const testNonStringDefaultValue = ([defaultValue, expectedValue]: any) => {
      const Component = () => (
        <Select label="non-string defaultValue" defaultValue={defaultValue}>
          <Select.Option value="one">{1}</Select.Option>
          <Select.Option value="two">{2}</Select.Option>
          <Select.Option value="three">{3}</Select.Option>
        </Select>
      );

      const { queryByRole, unmount } = render(<Component />);
      const selectInput = queryByRole('combobox') as HTMLInputElement;
      expect(selectInput.value).toEqual(expectedValue);
      unmount();
    };

    [
      [1, '1'],
      [{ key: 'value' }, '[object Object]'],
      [[1, 2, 3], '1,2,3'],
    ].forEach(([defaultValue, expectedValue]) => {
      testNonStringDefaultValue([defaultValue, expectedValue]);
    });
  });

  test('non-string value', async () => {
    const testNonStringValue = ([value, expectedValue]: any) => {
      const Component = () => (
        <Select label="non-string defaultValue" value={value}>
          <Select.Option value="one">{1}</Select.Option>
          <Select.Option value="two">{2}</Select.Option>
          <Select.Option value="three">{3}</Select.Option>
        </Select>
      );

      const { queryByRole, unmount } = render(<Component />);
      const selectInput = queryByRole('combobox') as HTMLInputElement;
      expect(selectInput.value).toEqual(expectedValue);
      unmount();
    };

    [
      [1, '1'],
      [{ key: 'value' }, '[object Object]'],
      [[1, 2, 3], '1,2,3'],
    ].forEach(([defaultValue, expectedValue]) => {
      testNonStringValue([defaultValue, expectedValue]);
    });
  });
});
