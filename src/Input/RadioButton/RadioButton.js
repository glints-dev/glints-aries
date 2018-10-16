/* @flow */

import React, { Fragment } from 'react';
import { RadioContainer, RadioLabel } from '../../Style/Input/RadioButtonStyle';

const RadioButton = (props: Props) => {
  const {
    label,
    theme,
    className,
    ariaChecked,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <RadioContainer className={className} role="radio" aria-checked={ariaChecked}>
        <input type="radio" {...defaultProps} />
        <RadioLabel theme={theme}>
          {label}
        </RadioLabel>
      </RadioContainer>
    </Fragment>
  );
};

type Props = {
  label: string,
  theme: string,
  className: string,
}

export default RadioButton;
