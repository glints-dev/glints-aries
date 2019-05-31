import * as React from 'react';

import classNames from 'classnames';

import { RadioContainer, RadioLabel } from '../../Style/Input/RadioButtonStyle';

const RadioButton: React.FunctionComponent<Props> = (props) => {
  const {
    label,
    theme,
    className,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <RadioContainer
        className={classNames('aries-radiobtn', className)}
        tabIndex={0}
      >
        <input type="radio" {...defaultProps} />
        <RadioLabel
          className="radiobtn-content"
          theme={theme}
          tabIndex={-1}
        >
          {label}
        </RadioLabel>
      </RadioContainer>
    </React.Fragment>
  );
};

interface Props extends React.ComponentProps<'input'> {
  label: string;
  theme?: string;
}

export default RadioButton;
