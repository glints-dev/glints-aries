import * as React from 'react';

import classNames from 'classnames';

import {
  RadioContainer,
  RadioLabel,
  RadioIcon,
  Border,
} from './RadioButtonStyle';

/** The <code>className</code> will be passed to
 * the main radio button container. <code>...inputProps</code> is passed to the
 * input tag. */
export const RadioButton: React.FunctionComponent<Props> = ({
  className,
  children,
  error = false,
  label,
  labelProps,
  theme,
  border = false,
  disabled = false,
  size = 'regular',
  ...inputProps
}) => {
  const content = (
    <>
      <RadioIcon
        error={error}
        theme={theme}
        border={border}
        size={size}
        disabled={disabled}
        data-testid="radio-icon"
      />
      <RadioLabel
        className="radiobtn-content"
        error={error}
        theme={theme}
        tabIndex={-1}
        border={border}
        size={size}
        disabled={disabled}
      >
        {label || children}
      </RadioLabel>
    </>
  );

  return (
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
      {border ? (
        <Border error={error} disabled={disabled} data-testid="radio-border">
          {content}
        </Border>
      ) : (
        content
      )}
    </RadioContainer>
  );
};

type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;

export interface Props extends HTMLInputProps {
  /** Displays the error styles */
  error?: boolean;
  /** Sets the label of Radio Button. */
  label: React.ReactNode;
  /** Sets the props on the label element. */
  labelProps?: React.LabelHTMLAttributes<{}>;
  /** Sets theme for Radio Button. */
  theme?: 'white';
  /** Sets a border around the radio button. */
  border?: boolean;
  /** Sets the radio button to disable state. */
  disabled?: boolean;
  /** Sets the size of the radio button. */
  size?: 'regular' | 'small';
}

export default RadioButton;
