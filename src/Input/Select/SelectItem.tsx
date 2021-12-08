import * as React from 'react';

import { SelectItemWrapper } from './SelectStyle';

const SelectItem: React.FunctionComponent<Props> = props => {
  const { children, className, onClick, ...defaultProps } = props;

  return (
    <React.Fragment>
      <SelectItemWrapper
        className={className}
        onMouseDown={onClick}
        {...defaultProps}
      >
        {children}
      </SelectItemWrapper>
    </React.Fragment>
  );
};

type Props = React.ComponentPropsWithoutRef<typeof SelectItemWrapper> & {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
  className?: string;
};

export default SelectItem;
