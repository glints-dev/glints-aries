import * as React from 'react';
import { PointingModalItemWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalItemWrapper
      className="pointingmodal-item"
      {...defaultProps}
    >
      {children}
    </PointingModalItemWrapper>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalItemWrapper> {
  children: React.ReactNode;
}

export default PointingModalItem;
