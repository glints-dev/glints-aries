import * as React from 'react';
import classNames from 'classnames';

import { PointingModalItemWrapper } from './PointingModalStyle';

const PointingModalItem: React.FunctionComponent<Props> = props => {
  const { children, className, ...defaultProps } = props;

  return (
    <PointingModalItemWrapper
      className={classNames('pointingmodal-item', className)}
      {...defaultProps}
    >
      {children}
    </PointingModalItemWrapper>
  );
};

type Props = React.ComponentPropsWithoutRef<typeof PointingModalItemWrapper> & {
  children: React.ReactNode;
};

export default PointingModalItem;
