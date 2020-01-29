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

class Modal extends React.Component<Props, State> {
  modalContentAreaRef: React.RefObject<HTMLDivElement>;
  mouseDownTarget: HTMLElement;
  escEvent: (e: KeyboardEvent) => any;

  state = {
    isOpen: false,
  };

  constructor(props: Props) {
    super(props);
    this.modalContentAreaRef = React.createRef();
  }

  guardedOnClose() {
    const { onClose } = this.props;
    if (this.state.isOpen) onClose();
  }

  componentDidMount() {
    this.escEvent = escEvent(this.guardedOnClose.bind(this));
    document.addEventListener('keydown', this.escEvent, false);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.isVisible && !prevState.isOpen) {
      document.body.style.overflow = 'hidden';
      return { isOpen: true };
    }

    if (!nextProps.isVisible && prevState.isOpen) {
      document.body.removeAttribute('style');
      return { isOpen: false };
    }
    return null;
  }

  componentDidUpdate(prevProps: Props) {
    const { isVisible } = this.props;
    if (!prevProps.isVisible && isVisible) {
      this.modalContentAreaRef.current.focus();
    }
  }

  removeEscapeEventListener() {
    document.removeEventListener('keydown', this.escEvent, false);
  }

  componentWillUnmount() {
    this.removeEscapeEventListener();
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
      hideHeader,
      ...restProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <ModalContainer
        data-testid="modal-container"
        className={classNames('aries-modal', className)}
        centering={centering}
        isOpen={isOpen}
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
            isOpen={isOpen}
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

interface State {
  isOpen: boolean;
}

export default Modal;
