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
  forwardedRef,
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
      ref={forwardedRef}
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

type Props = React.ComponentPropsWithoutRef<typeof SolidBtn> & {
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
  <SolidButton {...props} forwardedRef={ref} />
);

forwardRef.displayName = SolidButton.name;

export default React.forwardRef(forwardRef);
