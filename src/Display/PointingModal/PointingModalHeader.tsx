import * as React from 'react';
import classNames from 'classnames';
import { PointingModalHeaderWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalHeader: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

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

interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalHeaderWrapper> {
  children: React.ReactNode;
}

export default PointingModalHeader;
