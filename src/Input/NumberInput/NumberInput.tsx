import * as React from 'react';
import TextField, { TextFieldProps } from '../TextField';

const NumberInput = (props: Props) => {
  return <TextField {...props} type="number" />;
};

interface Props extends Omit<TextFieldProps, 'type'> {}

export default NumberInput;
