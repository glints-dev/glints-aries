import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CurrencyInput } from './CurrencyInput';

describe('<Currency />', () => {
  it('should call onChange with number', async () => {
    const onChange = jest.fn();

    const screen = render(<CurrencyInput onChange={onChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 1000 } });

    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toHaveValue('1,000');

    expect(onChange).toHaveBeenCalledWith(1000);
  });
});
