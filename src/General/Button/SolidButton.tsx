import * as React from 'react';
import classNames from 'classnames';
import { SolidBtnContainer, SolidBtn } from './ButtonStyle';

const SolidButton: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  tag,
  isRoundedCorner,
  ...defaultProps
}) => (
  <SolidBtnContainer
    className={classNames('aries-solid-btn', className)}
    theme={theme}
    disabled={disabled}
    block={block}
    isRoundedCorner={isRoundedCorner}
  >
    <SolidBtn
      className="solid-btn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      as={(tag as React.ElementType) || 'button'}
      isRoundedCorner={isRoundedCorner}
      {...defaultProps}
    >
      {children}
    </SolidBtn>
  </SolidBtnContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof SolidBtn> {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  disabled?: boolean;
  block?: boolean;
  small?: boolean;
  tag?: React.ElementType;
  isRoundedCorner?: boolean;
}

export default SolidButton;
