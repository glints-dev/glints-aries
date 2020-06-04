import * as React from 'react';

import classNames from 'classnames';

import { RadioContainer, RadioLabel } from '../../Style/Input/RadioButtonStyle';

const RadioButton: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    error,
    label,
    labelProps,
    theme,
    border,
    disabled,
    size = 'regular',
    ...inputProps
  } = props;

  return (
    <React.Fragment>
      <RadioContainer
        className={classNames('aries-radiobtn', className)}
        error={error}
        tabIndex={0}
        theme={theme}
        border={border}
        disabled={disabled}
        {...labelProps}
      >
        <input type="radio" disabled={disabled} {...inputProps} />
        <RadioLabel
          className="radiobtn-content"
          error={error}
          theme={theme}
          tabIndex={-1}
          border={border}
          disabled={disabled}
          size={size}
        >
          {label || children}
        </RadioLabel>
      </RadioContainer>
    </React.Fragment>
  );
};

type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;

interface Props extends HTMLInputProps {
  error?: boolean;
  label?: React.ReactNode;
  labelProps?: React.LabelHTMLAttributes<{}>;
  theme?: 'white';
  border?: boolean;
  disabled?: boolean;
  size?: 'regular' | 'small';
}

export default RadioButton;
