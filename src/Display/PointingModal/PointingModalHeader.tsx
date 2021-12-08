import * as React from 'react';
import classNames from 'classnames';
import { PointingModalHeaderWrapper } from './PointingModalStyle';

const PointingModalHeader: React.FunctionComponent<Props> = props => {
  const { children, className, ...defaultProps } = props;

  return (
    <PointingModalHeaderWrapper
      className={classNames('pointingmodal-header', className)}
      role="group"
      {...defaultProps}
    >
      {children}
    </PointingModalHeaderWrapper>
  );
};

type Props = React.ComponentPropsWithoutRef<
  typeof PointingModalHeaderWrapper
> & {
  children: React.ReactNode;
};

export default PointingModalHeader;
