import * as React from 'react';
import TextField, { TextFieldProps } from '../TextField';

export default (props: Props) => {
  return <TextField {...props} type="number" />;
};

interface Props extends Omit<TextFieldProps, 'type'> {}
