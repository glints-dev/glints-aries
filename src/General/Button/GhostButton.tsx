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
  forwardedRef,
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
      ref={forwardedRef}
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

type Props = React.ComponentPropsWithoutRef<typeof GhostBtn> & {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  disabled?: boolean;
  block?: boolean;
  small?: boolean;
  tag?: React.ElementType;
  isRoundedCorner?: boolean;
};

const forwardRef = (props: Props, ref: React.RefObject<HTMLButtonElement>) => (
  <GhostButton {...props} forwardedRef={ref} />
);

forwardRef.displayName = GhostButton.name;

export default React.forwardRef(forwardRef);
