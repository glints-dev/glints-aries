import * as React from 'react';

import { OmniSearchItemWrapper } from '../../Style/Input/OmniSearchStyle';

const OmniSearchItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <OmniSearchItemWrapper
        className={className}
        onMouseDown={onClick}
        role="listitem"
        {...defaultProps}
      >
        {children}
      </OmniSearchItemWrapper>
    </React.Fragment>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchItemWrapper> {
  children: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export default OmniSearchItem;
