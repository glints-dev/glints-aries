import * as React from 'react';

import { DropdownItemWrapper } from '../../Style/Navigation/DropdownStyle';

const DropdownItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <DropdownItemWrapper className={className} {...defaultProps}>
      {children}
    </DropdownItemWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownItemWrapper> {
  children: React.ReactNode;
}

export default DropdownItem;
