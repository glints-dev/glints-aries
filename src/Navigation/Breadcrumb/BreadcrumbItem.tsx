import * as React from 'react';
import { BreadcrumbItemWrapper } from './BreadcrumbStyle';
import classNames from 'classnames';

const BreadcrumbItem: React.FunctionComponent<Props> = (props: Props) => {
  const { active, className, children, ...defaultProps } = props;

  return (
    <BreadcrumbItemWrapper
      className={classNames('aries-breadcrumb-item', className)}
      active={active}
      {...defaultProps}
    >
      {children}
      <span>/</span>
    </BreadcrumbItemWrapper>
  );
};

type Props = React.ComponentPropsWithoutRef<typeof BreadcrumbItemWrapper> & {
  children: React.ReactNode;
};

export default BreadcrumbItem;
