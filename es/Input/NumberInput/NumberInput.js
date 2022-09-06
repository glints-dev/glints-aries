import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import TextField from '../TextField';

/** Use onChange to listen to input changes.
 * Use onBlur to listen to focus loss.
 * <br/>
 * Use status to set different styles for the Input Field based on status.
 * <br/>
 * Use small to set the size of the input field. The ...rest is passed to the
 * internal field input. */
export var NumberInput = function NumberInput(props) {
  return /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
    type: "number"
  }));
};
export default NumberInput;