import * as React from 'react';
import classNames from 'classnames';
import { PointingModalContainer, PointingModalHeaderArrow } from '../../Style/Display/PointingModalStyle';

import PointingModalHeader from './PointingModalHeader';
import PointingModalBody from './PointingModalBody';
import PointingModalItem from './PointingModalItem';
import PointingModalFooter from './PointingModalFooter';

const PointingModal: PointingModal = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalContainer
      className={classNames('aries-pointingmodal', className)}
      role="dialog"
      aria-modal="true"
      {...defaultProps}
    >
      <PointingModalHeaderArrow role="presentation" />
      {children}
    </PointingModalContainer>
  );
};

type PointingModal = React.FunctionComponent<Props> & {
  Header: typeof PointingModalHeader;
  Body: typeof PointingModalBody;
  Item: typeof PointingModalItem;
  Footer: typeof PointingModalFooter;
}

PointingModal.Header = PointingModalHeader;
PointingModal.Body = PointingModalBody;
PointingModal.Item = PointingModalItem;
PointingModal.Footer = PointingModalFooter;

interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalContainer> {
  children: React.ReactNode;
}

export default PointingModal;
