import * as React from 'react';

import { AutoCompleteItemWrapper } from '../../Style/Input/AutoCompleteStyle';

const AutoCompleteItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <AutoCompleteItemWrapper
        className={className}
        onMouseDown={onClick}
        {...defaultProps}
      >
        {children}
      </AutoCompleteItemWrapper>
    </React.Fragment>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof AutoCompleteItemWrapper> {
  children: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
};

export default AutoCompleteItem;
