import * as React from 'react';
import classNames from 'classnames';

import { CloseIcon } from '../../General/Icon/components';
import { escEvent } from '../../Utils/DomUtils';

import {
  ModalContainer,
  ModalDialog,
  ModalContentArea,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../Style/Display/ModalStyle';

class Modal extends React.Component<Props> {
  modalContentAreaRef: React.RefObject<HTMLDivElement>;
  mouseDownTarget: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.modalContentAreaRef = React.createRef();
  }

  componentDidMount() {
    const { onClose } = this.props;
    document.addEventListener('keydown', escEvent(onClose), false);
  }

  componentDidUpdate(prevProps: Props) {
    const { isVisible } = this.props;

    // closed -> open
    if (!prevProps.isVisible && isVisible) {
      this.modalContentAreaRef.current.focus();
      document.body.style.overflow = 'hidden';
    }

    // open -> closed
    if (prevProps.isVisible && !isVisible) {
      document.body.removeAttribute('style');
    }
  }

  componentWillUnmount() {
    const { onClose } = this.props;
    document.removeEventListener('keydown', escEvent(onClose), false);
    document.body.removeAttribute('style');
  }

  // To prevent the modal from closing
  // when a mousedown event occurs inside the ModalContentArea
  // but the subsequent mouseup event occurs outside
  handleMouseDown = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    this.mouseDownTarget = element;
  };

  handleClick = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    if (this.mouseDownTarget === element) {
      this.props.onClose();
    }
  };

  render() {
    const {
      title,
      onClose,
      children,
      className,
      hideContentArea,
      centering,
      removeAnimation,
      footer,
      size,
      isVisible,
      hideHeader,
      ...restProps
    } = this.props;

    return (
      <ModalContainer
        data-testid="modal-container"
        className={classNames('aries-modal', className)}
        centering={centering}
        isOpen={isVisible}
        removeAnimation={removeAnimation}
        onMouseDown={this.handleMouseDown}
        onClick={this.handleClick}
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
            isOpen={isVisible}
            removeAnimation={removeAnimation}
            size={size}
            ref={this.modalContentAreaRef}
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
    );
  }
}

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
