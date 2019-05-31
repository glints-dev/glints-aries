import * as React from 'react';
import classNames from 'classnames';
import { DefaultBtnContainer, DefaultBtn } from '../../Style/General/ButtonStyle';

const DefaultButton: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  removeHoverEffect,
  ...defaultProps
}) => (
  <DefaultBtnContainer
    className={classNames('aries-defaultbtn', className)}
    theme={theme}
    disabled={disabled}
    block={block}
    removeHoverEffect={removeHoverEffect}
  >
    <DefaultBtn
      className="defaultbtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      {...defaultProps}
    >
      {children}
    </DefaultBtn>
  </DefaultBtnContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof DefaultBtn> {
  children: React.ReactNode;
  className: string;
  theme: string;
  disabled?: boolean;
  block: boolean;
  small: boolean;
  removeHoverEffect: boolean;
}

export default DefaultButton;
