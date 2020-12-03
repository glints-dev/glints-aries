import * as React from 'react';
import TextField from '../TextField';
import { TextFieldInput } from '../TextField/TextFieldStyle';

/** Use <code>onChange</code> to listen to input changes.
 * Use <code>onBlur</code> to listen to focus loss.
 * <br/>
 * Use <code>status</code> to set different styles for the Input Field based on status.
 * <br/>
 * Use <code>small</code> to set the size of the input field. The <code>...rest</code> is passed to the
 * internal field input. */
export const NumberInput = (props: Props) => {
  return <TextField {...props} type="number" />;
};

export interface Props
  extends React.ComponentPropsWithoutRef<typeof TextFieldInput> {
  /** Placeholder for the text field. */
  label: string;
  disabled?: boolean;
  className?: string;
  removeFloatingLabel?: boolean;
  /** Minimum value of the input */
  min?: number;
  /** Maximum value of the input. */
  max?: number;
  /** Step value for the input */
  step?: number;
  forwardedRef?: React.RefObject<HTMLInputElement>;
  /** Icon at the start of the input element. */
  startIcon?: React.ReactNode;
}

export default NumberInput;
