import * as React from 'react';

import { SelectItemWrapper } from '../../Style/Input/SelectStyle';

const SelectItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <SelectItemWrapper className={className} onMouseDown={onClick} {...defaultProps}>
        {children}
      </SelectItemWrapper>
    </React.Fragment>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof SelectItemWrapper> {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
  className?: string;
}

export default SelectItem;
