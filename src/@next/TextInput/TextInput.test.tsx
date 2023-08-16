import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('<TextInput />', () => {
  it('calls onChange handler correctly', () => {
    const onChange = jest.fn();
    const screen = render(<TextInput onChange={onChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Test Value' } });
    expect(onChange).toHaveBeenCalledWith('Test Value');
  });

  it('calls onChangeHandler correctly', () => {
    const onChangeHandler = jest.fn();
    const screen = render(<TextInput onChangeHandler={onChangeHandler} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, {
      target: { value: 'Test Value' },
    });

    expect(onChangeHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Test Value',
        }),
      })
    );
  });
});
