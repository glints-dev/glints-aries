import React from 'react';
import styled from 'styled-components';
import { Input, InputProps } from '../Input/Input';

export type NumberInputProps = Omit<InputProps, 'type' | 'prefix'>;

const StyledInput = styled(Input)`
  &[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(props: NumberInputProps, ref) {
    return <StyledInput ref={ref} type="number" {...props} />;
  }
);
