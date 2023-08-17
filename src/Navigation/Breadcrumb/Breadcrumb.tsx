import * as React from 'react';
import classNames from 'classnames';
import { BreadcrumbContainer } from './BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';

export const Breadcrumb: BreadcrumbType = ({
  className,
  children,
  ...defaultProps
}) => {
  return (
    <BreadcrumbContainer
      className={classNames('aries-breadcrumb', className)}
      {...defaultProps}
    >
      {children}
    </BreadcrumbContainer>
  );
};

type BreadcrumbType = React.FunctionComponent<Props> & {
  Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

export type Props = React.ComponentPropsWithoutRef<
  typeof BreadcrumbContainer
> & {
  children: React.ReactNode;
};

export default Breadcrumb;
