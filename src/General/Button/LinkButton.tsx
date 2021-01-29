import * as React from 'react';
import classNames from 'classnames';

import { LinkBtn } from './ButtonStyle';

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  className,
  tag,
  forwardedRef,
  ...defaultProps
}) => (
  <LinkBtn
    ref={forwardedRef}
    className={classNames('aries-linkbtn', className)}
    as={(tag as React.ElementType) || 'button'}
    {...defaultProps}
  >
    {children}
  </LinkBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
  children: React.ReactNode;
  className: string;
  block?: boolean;
  tag?: React.ElementType;
}

const forwardRef = (props: Props, ref: React.RefObject<HTMLButtonElement>) => (
  <LinkButton {...props} forwardedRef={ref} />
);

forwardRef.displayName = LinkButton.name;

export default React.forwardRef(forwardRef);
