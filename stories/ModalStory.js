import React, { Component } from 'react';
import Modal from '../src/Modal';

import Button from '../src/Button';

class ModalStory extends Component {
  state = {
    visible: false,
  }

  handleModal = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  closeWithESC = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
            Modal
          </h1>
          <p>
            <code>
              {'import { Modal } from \'glints-aries\''}
            </code>
          </p>
        </div>

        <table className="doc-table">
          <thead>
            <tr>
              <th colSpan="0">
                Preview
              </th>
              <th>
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <Button type="default" theme="blue" onClick={this.handleModal}>
                  Open Modal
                </Button>
                <Modal
                  visibility={visible}
                  close={this.handleModal}
                  closeWithESC={this.closeWithESC}
                  type="medium"
                >
                  <h1>
                    This is Modal
                  </h1>
                </Modal>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <pre>
                  {`state = {
  visible: false,
}

handleModal = () => {
  const { visible } = this.state;
  this.setState({ visible: !visible });
}

closeWithESC = () => {
  this.setState({ visible: false });
}

<Button 
  type="default"
  theme="blue"
  onClick={this.handleModal}
>
  Open Modal
</Button>

<Modal
  visibility={visible}
  close={this.handleModal}
  closeWithESC={this.closeWithESC}
  type="medium"
>
  This is modal
</Modal>`}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>
          Props
        </h1>
        <table className="doc-table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Type
              </th>
              <th>
                Value
              </th>
              <th>
                Required
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                visibility
              </td>
              <td>
                boolean
              </td>
              <td>
                <pre>
                  {'true | false'}
                </pre>
              </td>
              <td>
                yes
              </td>
              <td>
                Sets the visibility of Modal.
              </td>
            </tr>
            <tr>
              <td>
                close
              </td>
              <td>
                Function
              </td>
              <td>
                Function
              </td>
              <td>
                yes
              </td>
              <td>
                Sets to close Modal.
              </td>
            </tr>
            <tr>
              <td>
                closeWithESC
              </td>
              <td>
                Function
              </td>
              <td>
                Function
              </td>
              <td>
                no
              </td>
              <td>
                Sets to close active Modal using ESC button.
              </td>
            </tr>
            <tr>
              <td>
                hideContentArea
              </td>
              <td>
                boolean
              </td>
              <td>
                <pre>
                  {'true | false'}
                </pre>
              </td>
              <td>
                no
              </td>
              <td>
                Hides the content area.
              </td>
            </tr>
            <tr>
              <td>
                type
              </td>
              <td>
                string
              </td>
              <td>
                <pre>
                  {'small | medium | large | full-screen'}
                </pre>
              </td>
              <td>
                yes
              </td>
              <td>
                Sets the size of Modal Item.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ModalStory;
