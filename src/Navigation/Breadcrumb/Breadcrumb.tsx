import * as React from 'react';
import { BreadcrumbContainer } from '../../Style/Navigation/BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb: Breadcrumb = (props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <BreadcrumbContainer
      id="aries-breadcrumb"
      className={className}
      {...defaultProps}
    >
      {children}
    </BreadcrumbContainer>
  );
};

type Breadcrumb = React.FunctionComponent<Props> & {
  Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

interface Props extends React.ComponentPropsWithoutRef<typeof BreadcrumbContainer> {
  children: React.ReactNode;
}

export default Breadcrumb;
