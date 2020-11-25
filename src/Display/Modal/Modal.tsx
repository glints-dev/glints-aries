import React, {
  HTMLAttributes,
  FC,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  ReactNode,
  ReactElement,
} from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { CloseIcon } from '../../General/Icon/components';
import { escEvent as createEscapeKeyEventListener } from '../../Utils/DomUtils';
import { checkIsChildrenInMultiLines } from './utils';
import {
  ModalContainer,
  ModalDialog,
  ModalContentArea,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './ModalStyle';

export const Modal: FC<Props> = ({
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
}) => {
  const modalContentAreaRef = useRef(null);
  const modalFooterRef = useRef(null);
  const [
    isFooterChildrenInMultiLines,
    setIsFooterChildrenInMultiLines,
  ] = useState(false);

  const handleClose = React.useCallback(() => {
    if (typeof onClose === 'function') {
      onClose();
    }
  }, [onClose]);

  useLayoutEffect(() => {
    if (!modalContentAreaRef.current) return;

    if (isVisible) {
      // On modal open
      modalContentAreaRef.current.focus();
      disableBodyScroll(modalContentAreaRef.current);
    } else {
      // On modal close
      enableBodyScroll(modalContentAreaRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isVisible, modalContentAreaRef]);

  useEffect(() => {
    const escapeKeyEventListener = createEscapeKeyEventListener(() => {
      if (isVisible) handleClose();
    });

    document.addEventListener('keydown', escapeKeyEventListener, false);

    // This function will be called on unmount and _before_ this effect is
    // re-executed because its dependencies changed. This gives us the chance
    // to clean up the existing escape key event listener.
    return () =>
      document.removeEventListener('keydown', escapeKeyEventListener, false);
  }, [isVisible, handleClose]);

  useLayoutEffect(
    function checkFooterResponsiveStyleOnMountAndOnWindowResize() {
      const checkIsFooterChildrenInMultiLines = () => {
        const isChildrenInMultiLines = checkIsChildrenInMultiLines(
          modalFooterRef
        );
        setIsFooterChildrenInMultiLines(isChildrenInMultiLines);
      };
      const debouncedCheckFooter = debounce(
        checkIsFooterChildrenInMultiLines,
        500
      );
      debouncedCheckFooter();
      window.addEventListener('resize', debouncedCheckFooter);
      return () => window.removeEventListener('resize', debouncedCheckFooter);
    },
    []
  );

  // To prevent the modal from closing
  // when a mousedown event occurs inside the ModalContentArea
  // but the subsequent mouseup event occurs outside
  const mouseDownTarget = useRef<HTMLElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const element = e.target as HTMLElement;
      mouseDownTarget.current = element;
    },
    [mouseDownTarget]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const element = e.target as HTMLElement;
      if (mouseDownTarget.current === element) {
        handleClose();
      }
    },
    [mouseDownTarget, handleClose]
  );

  return (
    <ModalContainer
      data-testid="modal-container"
      className={classNames('aries-modal', className)}
      centering={centering}
      isOpen={isVisible}
      removeAnimation={removeAnimation}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <ModalDialog className="modal-dialog">
        <ModalContentArea
          className="modal-content"
          data-testid="dialog"
          role="dialog"
          aria-modal="true"
          hideContentArea={hideContentArea}
          centering={centering}
          onClick={e => e.stopPropagation()}
          tabIndex={0}
          isOpen={isVisible}
          removeAnimation={removeAnimation}
          size={size}
          ref={modalContentAreaRef}
          {...restProps}
        >
          {!hideHeader && (
            <ModalHeader className="modal-header">
              <h3>{title}</h3>
              <button
                aria-label="Close button"
                data-testid="close-button"
                type="button"
                onClick={handleClose}
              >
                <CloseIcon color={hideContentArea ? 'white' : 'grey'} />
              </button>
            </ModalHeader>
          )}
          <ModalBody
            className="modal-body"
            hideContentArea={hideContentArea}
            centering={centering}
          >
            {isVisible && children}
          </ModalBody>
          {footer !== undefined && (
            <ModalFooter
              ref={modalFooterRef}
              className="modal-footer"
              isChildrenInMultiLines={isFooterChildrenInMultiLines}
            >
              {footer}
            </ModalFooter>
          )}
        </ModalContentArea>
      </ModalDialog>
    </ModalContainer>
  );
};

export type sizeType = 's' | 'm' | 'l' | 'xl';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode; // we don't really use this title attribute for div element
  isVisible: boolean;
  onClose?(): void;
  hideContentArea?: boolean;
  centering?: boolean;
  removeAnimation?: boolean;
  /** An array containing 0-2 elements. */
  footer?: ReactElement[];
  size?: sizeType;
  hideHeader?: boolean;
}

Modal.defaultProps = {
  onClose: () => undefined as () => void,
  size: 'm',
  hideContentArea: false,
  hideHeader: false,
  removeAnimation: false,
  centering: false,
};

export default Modal;
