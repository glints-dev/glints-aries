import * as React from 'react';
import classNames from 'classnames';
import { GhostBtnContainer, GhostBtn } from './ButtonStyle';

const GhostButton: React.FunctionComponent<Props> = ({
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
  <GhostBtnContainer
    className={classNames('aries-ghostbtn', className)}
    theme={theme}
    disabled={disabled}
    block={block}
    isRoundedCorner={isRoundedCorner}
  >
    <GhostBtn
      className="ghostbtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      as={(tag as React.ElementType) || 'button'}
      isRoundedCorner={isRoundedCorner}
      {...defaultProps}
    >
      {children}
    </GhostBtn>
  </GhostBtnContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof GhostBtn> {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  disabled?: boolean;
  block?: boolean;
  small?: boolean;
  tag?: React.ElementType;
  isRoundedCorner?: boolean;
}

export default GhostButton;
