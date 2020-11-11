import * as React from 'react';

import { DrawerContainer, DrawerWrapper } from './DrawerStyle';

const Drawer = ({
  children,
  isOpen,
  onClose,
  position = 'right',
  getContainerElement,
  ...defaultProps
}: Props) => {
  React.useEffect(
    function preventContainerScrolling() {
      if (!getContainerElement) return;
      const containerElement = getContainerElement();
      if (isOpen) {
        containerElement.style.overflow = 'hidden';
      } else {
        containerElement.style.overflow = 'scroll';
      }
      return () => (containerElement.style.overflow = 'scroll');
    },
    [getContainerElement, isOpen]
  );

  return (
    <DrawerContainer
      className="aries-drawer"
      data-testid="drawer-container"
      aria-modal="true"
      aria-hidden={isOpen ? 'false' : 'true'}
      open={isOpen}
      onClick={() => onClose()}
    >
      <DrawerWrapper
        className="drawer-contentwrapper"
        role="dialog"
        data-testid="drawer-wrapper"
        open={isOpen}
        position={position}
        tabIndex={0}
        onClick={e => e.stopPropagation()}
        {...defaultProps}
      >
        {children}
      </DrawerWrapper>
    </DrawerContainer>
  );
};

export type DrawerPosition = 'left' | 'right';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: Function;
  getContainerElement?: () => HTMLElement;
  position?: DrawerPosition;
}

export default Drawer;
