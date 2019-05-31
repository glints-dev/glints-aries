import * as React from 'react';
import classNames from 'classnames';
import { PointingModalFooterWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalFooter: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalFooterWrapper
      className={classNames('pointingmodal-footer', className)}
      {...defaultProps}
    >
      {children}
    </PointingModalFooterWrapper>
  );
};

interface Props {
  children: React.ReactNode;
  className: string;
}

export default PointingModalFooter;
