import * as React from 'react';
import HorizontalTabs from './HorizontalTabs'
import VerticalTabs from "./VerticalTabs";
import { TabVariant } from '../../Utils/StyleConfig';

const renderTabs: React.FunctionComponent<Props> = ({
    variant,
    children,
    ...defaultProps
 }) => {
  if (variant === TabVariant.VERTICAL) {
    return (
    <VerticalTabs {...defaultProps}>
      {children}
    </VerticalTabs>
    );
  } else {
    return (
      <HorizontalTabs {...defaultProps}>
        {children}
      </HorizontalTabs>
    );
  }
};

const Tabs: React.FunctionComponent<Props> = (props) => (
  <React.Fragment>
    {renderTabs(props)}
  </React.Fragment>
);

export interface Props {
  variant?: string;
  children: React.ReactNode;
}

export default Tabs;
