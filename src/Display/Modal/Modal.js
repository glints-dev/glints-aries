/* @flow */

import React, { Component, Fragment } from 'react';

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

class Modal extends Component <Props, State> {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    const { onClose } = this.props;
    document.addEventListener('keydown', escEvent(onClose), false);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
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

  componentDidUpdate(prevProps) {
    const { isVisible } = this.props;
    if (!prevProps.isVisible && isVisible) {
      document.getElementById('modal-content').focus();
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
        id="aries-modal"
        className={className}
        centering={centering}
        onClick={() => onClose()}
        isOpen={isOpen}
        removeAnimation={removeAnimation}
      >
        <ModalDialog id="modal-dialog">
          <ModalContentArea
            id="modal-content"
            role="dialog"
            aria-modal="true"
            hideContentArea={hideContentArea}
            centering={centering}
            onClick={e => e.stopPropagation()}
            tabIndex={0}
            isOpen={isOpen}
            removeAnimation={removeAnimation}
            size={size}
            {...defaultProps}
          >
            <If condition={!hideHeader}>
              <ModalHeader id="modal-header">
                <h3>{ title }</h3>
                <button type="button" onClick={() => onClose()}>
                  <Icon name="close" color={hideContentArea ? 'white' : 'grey'} />
                </button>
              </ModalHeader>
            </If>
            <ModalBody
              id="modal-body"
              hideContentArea={hideContentArea}
            >
              {children}
            </ModalBody>
            <If condition={footer !== undefined}>
              <ModalFooter id="modal-footer">
                { footer.map(data => React.cloneElement(data, { key: data.props.children })) }
              </ModalFooter>
            </If>
          </ModalContentArea>
        </ModalDialog>
      </ModalContainer>
    );
  }
}

type Props = {
  children: React$Node,
  title: string,
  isVisible: boolean,
  type: string,
  onClose: Function,
  className: string,
  hideContentArea: boolean,
  centering: boolean,
  removeAnimation: boolean,
  footer: React$Node,
  size: string,
  hideHeader: boolean,
}

type State = {
  isOpen: boolean,
}

export default Modal;
