import * as React from 'react';
import classNames from 'classnames';

import { CloseIcon } from '../../General/Icon/components';
import { escEvent as createEscapeKeyEventListener } from '../../Utils/DomUtils';

import {
  ModalContainer,
  ModalDialog,
  ModalContentArea,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../Style/Display/ModalStyle';

enum MountingState {
  UNMOUNTED = 'UNMOUNTED',
  // modal is mounted in the following states
  MOUNTED = 'MOUNTED',
  VISIBLE = 'VISIBLE',
  UNMOUNT_START = 'UNMOUNT_START',
}

const Modal = (props: Props) => {
  const {
    isVisible,
    title,
    onClose,
    children,
    className,
    hideContentArea,
    centering,
    removeAnimation,
    footer,
    size,
    hideHeader,
    ...restProps
  } = props;

  const modalContentAreaRef = React.useRef(null);

  // mountingState controls mounting and animation
  const [mountingState, setMountingState] = React.useState(() => {
    return isVisible ? MountingState.VISIBLE : MountingState.UNMOUNTED;
  });

  // isOpen set css transition styles
  const isOpen = mountingState === MountingState.VISIBLE;

  React.useEffect(() => {
    // MOUNTED mount modal, but modal is not visible
    if (isVisible && mountingState === MountingState.UNMOUNTED) {
      setMountingState(MountingState.MOUNTED);
    }

    // VISIBLE set isOpen to true, triggers css transition
    if (isVisible && mountingState === MountingState.MOUNTED) {
      setMountingState(MountingState.VISIBLE);
    }

    // UNMOUNT_START set isOpen to false, triggers css transition
    if (!isVisible && mountingState === MountingState.VISIBLE) {
      setMountingState(MountingState.UNMOUNT_START);
    }
  }, [isVisible, mountingState]);

  // unmount Modal after fade out transition finished
  const onTransitionEnd = React.useCallback(() => {
    if (mountingState === MountingState.UNMOUNT_START) {
      setMountingState(MountingState.UNMOUNTED);
    }
  }, [mountingState]);

  // disable page scrolling when modal is mounted
  React.useEffect(() => {
    if (mountingState !== MountingState.UNMOUNTED) {
      // On modal open
      modalContentAreaRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      // On modal close
      document.body.removeAttribute('style');
    }
  }, [mountingState]);

  // bind onClose to esc key
  React.useEffect(() => {
    const escapeKeyEventListener = createEscapeKeyEventListener(() => {
      if (mountingState !== MountingState.UNMOUNTED) onClose();
    });

    document.addEventListener('keydown', escapeKeyEventListener, false);

    // This function will be called on unmount and _before_ this effect is
    // re-executed beause its dependencies changed. This gives us the chance
    // to clean up the existing escape key event listener.
    return () =>
      document.removeEventListener('keydown', escapeKeyEventListener, false);
  }, [mountingState, onClose]);

  // To prevent the modal from closing
  // when a mousedown event occurs inside the ModalContentArea
  // but the subsequent mouseup event occurs outside
  const mouseDownTarget = React.useRef<HTMLElement>(null);

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      const element = e.target as HTMLElement;
      mouseDownTarget.current = element;
    },
    [mouseDownTarget]
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      const element = e.target as HTMLElement;
      if (mouseDownTarget.current === element) {
        onClose();
      }
    },
    [mouseDownTarget, onClose]
  );

  return mountingState !== MountingState.UNMOUNTED ? (
    <ModalContainer
      data-testid="modal-container"
      className={classNames('aries-modal', className)}
      centering={centering}
      isOpen={isOpen}
      removeAnimation={removeAnimation}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onTransitionEnd={onTransitionEnd}
    >
      <ModalDialog className="modal-dialog">
        <ModalContentArea
          className="modal-content"
          role="dialog"
          aria-modal="true"
          hideContentArea={hideContentArea}
          centering={centering}
          onClick={e => e.stopPropagation()}
          tabIndex={0}
          isOpen={isOpen}
          removeAnimation={removeAnimation}
          size={size}
          ref={modalContentAreaRef}
          {...restProps}
        >
          {!hideHeader && (
            <ModalHeader className="modal-header">
              <h3>{title}</h3>
              <button
                data-testid="close-button"
                type="button"
                onClick={onClose}
              >
                <CloseIcon color={hideContentArea ? 'white' : 'grey'} />
              </button>
            </ModalHeader>
          )}
          <ModalBody className="modal-body" hideContentArea={hideContentArea}>
            {children}
          </ModalBody>
          {footer !== undefined && (
            <ModalFooter className="modal-footer">{footer}</ModalFooter>
          )}
        </ModalContentArea>
      </ModalDialog>
    </ModalContainer>
  ) : null;
};

export type sizeType = 's' | 'm' | 'l' | 'xl';

interface Props
  extends React.ComponentPropsWithoutRef<typeof ModalContentArea> {
  children: React.ReactNode;
  title?: string;
  isVisible: boolean;
  onClose(): void;
  hideContentArea?: boolean;
  centering?: boolean;
  removeAnimation?: boolean;
  footer?: React.ReactElement[];
  size?: sizeType;
  hideHeader?: boolean;
}

export default Modal;
