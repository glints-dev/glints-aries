import * as React from 'react';

import { DropdownItemWrapper } from './DropdownStyle';

const DropdownItem: React.FunctionComponent<Props> = props => {
  const { children, className, ...defaultProps } = props;

  return (
    <DropdownItemWrapper className={className} {...defaultProps}>
      {children}
    </DropdownItemWrapper>
  );
};

export type Props = React.ComponentPropsWithoutRef<
  typeof DropdownItemWrapper
> & {
  value?: any;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export default DropdownItem;
