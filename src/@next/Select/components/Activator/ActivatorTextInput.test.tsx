import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ActivatorTextInput } from './ActivatorTextInput';

const options = [
  { label: 'Singapore (Central)', value: 'central' },
  { label: 'St. John', value: 'st-john' },
  { label: 'Seoul', value: 'seoul' },
];

test.each([
  ['(', 'central'],
  ['.', 'st-john'],
  ['SINGAPORE', 'central'],
])('filters search text %s literally and ignores case', (query, expected) => {
  const updateMenuOptions = jest.fn();
  render(
    <ActivatorTextInput
      placeholder="Search"
      inputValue=""
      selectedValues={[]}
      options={options}
      onFocus={jest.fn()}
      updateInputValue={jest.fn()}
      searchableSelectState={{
        showSelected: false,
        showInput: true,
        showPlaceholder: true,
      }}
      updateSearchableSelectState={jest.fn()}
      updateMenuOptions={updateMenuOptions}
    />
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: query } });

  expect(updateMenuOptions).toHaveBeenLastCalledWith(
    options.filter(option => option.value === expected)
  );
});
