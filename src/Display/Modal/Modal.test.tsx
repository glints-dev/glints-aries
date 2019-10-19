import * as React from 'react';
import Modal from '.';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

const props = {
  title: 'Modal Title',
  content: 'Modal Content',
  footer: 'Modal Footer',
  onClose: jest.fn(),
};

const OpenedModal = (
  <Modal
    title={props.title}
    isVisible={true}
    footer={[<button key="button">{props.footer}</button>]}
    onClose={props.onClose}
  >
    <p>{props.content}</p>
  </Modal>
);

function setupModal(isVisible: boolean) {
  const onClose = jest.fn();
  const ModalComponent = (
    <Modal
      title={props.title}
      isVisible={isVisible}
      footer={[<button key="button">{props.footer}</button>]}
      onClose={onClose}
    >
      <p>{props.content}</p>
    </Modal>
  );
  const { getByTestId, getByRole } = render(ModalComponent);
  const modalContainer = getByTestId('modal-container');
  const modalDialog = getByRole('dialog');
  return [modalContainer, onClose, modalDialog];
}

it('<Modal> should render with a title, content, footer and an onClick handler', () => {
  const ModalSnapshot = renderer.create(OpenedModal).toJSON();
  expect(ModalSnapshot).toMatchSnapshot();
});

describe('when modal is opened', () => {
  it('should be visible', () => {
    const [modalContainer] = setupModal(true);
    expect(modalContainer).toHaveStyle('visibility: visible');
  });

  it('should not be closed if the modal is clicked', () => {
    const [, onClose, modalDialog] = setupModal(true);
    fireEvent.click(modalDialog as Element);
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});

describe('when modal is opened', () => {
  it('should display the title', () => {
    const { getByText } = render(OpenedModal);
    const modalHeader = getByText(props.title);
    expect(modalHeader).toHaveTextContent(props.title);
  });

  it('should display the content', () => {
    const { getByText } = render(OpenedModal);
    const modalContent = getByText(props.content);
    expect(modalContent).toHaveTextContent(props.content);
  });

  it('should display the footer', () => {
    const { getByText } = render(OpenedModal);
    const modalFooter = getByText(props.footer);
    expect(modalFooter).toHaveTextContent(props.footer);
  });
});

describe('when modal is closed', () => {
  it('should not be visible', () => {
    const [modalContainer] = setupModal(false);
    expect(modalContainer).toHaveStyle('visibility: hidden');
  });
});

describe('onClose should be called once when:', () => {
  it('area outside modal is clicked', () => {
    const [modalContainer, onClose] = setupModal(true);
    fireEvent.click(modalContainer as Element);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('escape key is pressed', () => {
    const [modalContainer, onClose] = setupModal(true);
    fireEvent.keyDown(modalContainer as Element, {
      key: 'Escape',
      keyCode: 27,
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
