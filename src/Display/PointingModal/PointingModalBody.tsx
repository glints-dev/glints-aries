import * as React from 'react';
import classNames from 'classnames';
import { PointingModalBodyWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalBody: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalBodyWrapper
      className={classNames('pointingmodal-body', className)}
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
