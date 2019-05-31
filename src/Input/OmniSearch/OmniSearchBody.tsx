import * as React from 'react';
import { OmniSearchResultContainer } from '../../Style/Input/OmniSearchStyle';

const OmniSearchBody: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchResultContainer
      className={className}
      {...defaultProps}
    >
      {children}
    </OmniSearchResultContainer>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchResultContainer> {
  children: React.ReactNode;
}

export default OmniSearchBody;
