import * as React from 'react';
import { PointingModalFooterWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalFooter: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalFooterWrapper
      id="pointingmodal-footer"
      className={className}
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
