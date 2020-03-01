import * as React from 'react';
import TextField, { TextFieldProps } from '../TextField';

const NumberInput = (props: Props) => {
  return <TextField {...props} type="number" />;
};

type Props = Omit<TextFieldProps, 'type'>;

export default NumberInput;
