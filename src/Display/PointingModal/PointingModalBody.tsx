import * as React from 'react';
import { PointingModalBodyWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalBody: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalBodyWrapper
      id="pointingmodal-body"
      className={className}
      role="list"
      {...defaultProps}
    >
      <ul>
        {children}
      </ul>
    </PointingModalBodyWrapper>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalBodyWrapper> {
  children: React.ReactNode;
}

export default PointingModalBody;
