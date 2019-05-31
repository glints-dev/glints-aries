import * as React from 'react';
import classNames from 'classnames';
import { GhostBtnContainer, GhostBtn } from '../../Style/General/ButtonStyle';

const GhostButton: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  removeHoverEffect,
  ...defaultProps
}) => (
  <GhostBtnContainer
    className={classNames('aries-ghostbtn', className)}
    theme={theme}
    disabled={disabled}
    block={block}
    removeHoverEffect={removeHoverEffect}
  >
    <GhostBtn
      className="ghostbtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      {...defaultProps}
    >
      {children}
    </GhostBtn>
  </GhostBtnContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof GhostBtn> {
  children: React.ReactNode;
  className: string;
  theme: string;
  disabled?: boolean;
  block: boolean;
  small: boolean;
  removeHoverEffect: boolean;
}

export default GhostButton;
