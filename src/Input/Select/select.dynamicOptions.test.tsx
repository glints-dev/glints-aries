import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';

const DynamicSelect = () => {
  const [value, setValue] = React.useState('');
  const allOptions = [
    'Accountant',
    'Business Development',
    'Software Engineer',
  ];
  const filteredOptions = allOptions.filter(option => option.includes(value));
  return (
    <Select
      label="Jobs"
      value={value}
      onChange={value => setValue(value)}
      onInputChange={e => setValue(e.target.value)}
    >
      {filteredOptions.map(val => (
        <Select.Option value={val} key={val}>
          {val}
        </Select.Option>
      ))}
    </Select>
  );
};

describe('Dynamic <Select/>', () => {
  it('should set the first option in the list as the active element after selecting an item in a dynamic list', () => {
    const { getByRole, queryAllByTestId, getByTestId } = render(
      <DynamicSelect />
    );
    const selectInput = getByRole('combobox') as HTMLInputElement;
    const selectList = getByTestId('listbox');
    const lastOption = queryAllByTestId('option')[2];

    userEvent.click(selectInput);
    userEvent.click(lastOption);
    expect(selectList.hasAttribute('open')).toBe(false);

    userEvent.click(selectInput);
    expect(selectList.hasAttribute('open')).toBe(true);

    const firstOption = queryAllByTestId('option')[0];
    expect(firstOption).toHaveClass('active');
  });
});
