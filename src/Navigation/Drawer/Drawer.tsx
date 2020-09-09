import * as React from 'react';

import { DrawerContainer, DrawerWrapper } from './DrawerStyle';

const Drawer = ({
  children,
  isOpen,
  onClose,
  position = 'right',
  ...defaultProps
}: Props) => {
  const [isDisplay, setIsDisplay] = React.useState<boolean>(false);

  const handleAnimationStart = () => {
    setIsDisplay(true);
  };

  const handleAnimationEnd = () => {
    setIsDisplay(false);
  };

  React.useEffect(
    function startAnimationOnOpen() {
      if (isOpen && !isDisplay) {
        handleAnimationStart();
      }
    },
    [isDisplay, isOpen]
  );

  return (
    <DrawerContainer
      className="aries-drawer"
      data-testid="drawer-container"
      aria-modal="true"
      aria-hidden={isDisplay ? 'false' : 'true'}
      isDisplay={isDisplay}
      open={isOpen}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
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
  position?: DrawerPosition;
}

export default Drawer;
