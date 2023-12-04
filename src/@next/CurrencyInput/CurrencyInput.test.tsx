import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CurrencyInput } from './CurrencyInput';

describe('<Currency />', () => {
  it('should call onChange with number', async () => {
    const onChange = jest.fn();

    const screen = render(
      <CurrencyInput currencyCode="USD" onChange={onChange} />
    );
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 1000 } });

    expect(onChange).toHaveBeenCalledWith(1000);
  });

  describe('allowEmptyValue', () => {
    it('should call onChange with undefined when allowEmptyValue = true for empty input', async () => {
      const onChange = jest.fn();

      const screen = render(
        <CurrencyInput
          currencyCode="USD"
          onChange={onChange}
          allowEmptyValue={true}
          value={1000}
        />
      );
      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 1000 } });
      expect(onChange).toHaveBeenCalledWith(1000);

      fireEvent.change(input, { target: { value: '' } });
      expect(onChange).toHaveBeenCalledWith(undefined);

      fireEvent.change(input, { target: { value: 2000 } });
      expect(onChange).toHaveBeenCalledWith(2000);
    });

    it('should call onChange with 0 when allowEmptyValue = false for empty input', async () => {
      const onChange = jest.fn();

      const screen = render(
        <CurrencyInput currencyCode="USD" onChange={onChange} value={1000} />
      );
      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 1000 } });
      expect(onChange).toHaveBeenCalledWith(1000);

      fireEvent.change(input, { target: { value: '' } });
      expect(onChange).toHaveBeenCalledWith(0);

      fireEvent.change(input, { target: { value: 2000 } });
      expect(onChange).toHaveBeenCalledWith(2000);
    });
  });
});
