import * as React from 'react';

import classNames from 'classnames';

import Icon from '../../General/Icon';

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

  state = {
    isOpen: false,
  }

  constructor(props: Props) {
    super(props);
    this.modalContentAreaRef = React.createRef();
  }

  componentDidMount() {
    const { onClose } = this.props;
    document.addEventListener('keydown', escEvent(onClose), false);
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

  componentWillUnmount() {
    const { onClose } = this.props;
    document.removeEventListener('keydown', escEvent(onClose), false);
    document.body.removeAttribute('style');
  }

  render() {
    const {
      title,
      onClose,
      type,
      children,
      className,
      hideContentArea,
      centering,
      removeAnimation,
      footer,
      size,
      hideHeader,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <ModalContainer
        className={classNames('aries-modal', className)}
        centering={centering}
        onClick={() => onClose()}
        isOpen={isOpen}
        removeAnimation={removeAnimation}
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
            {...defaultProps}
          >
            {!hideHeader &&
              <ModalHeader className="modal-header">
                <h3>{ title }</h3>
                <button type="button" onClick={() => onClose()}>
                  <Icon name="close" color={hideContentArea ? 'white' : 'grey'} />
                </button>
              </ModalHeader>
            }
            <ModalBody
              className="modal-body"
              hideContentArea={hideContentArea}
            >
              {children}
            </ModalBody>
            {footer !== undefined &&
              <ModalFooter className="modal-footer">
                { footer }
              </ModalFooter>
            }
          </ModalContentArea>
        </ModalDialog>
      </ModalContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof ModalContentArea> {
  children: React.ReactNode;
  title?: string;
  isVisible?: boolean;
  type?: string;
  onClose?(): void;
  hideContentArea?: boolean;
  centering?: boolean;
  removeAnimation?: boolean;
  footer?: React.ReactElement[];
  size?: string;
  hideHeader?: boolean;
}

interface State {
  isOpen: boolean;
}

export default Modal;
