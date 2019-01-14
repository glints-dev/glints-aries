import React, { Component } from 'react';

import Modal from '../../src/Display/Modal';
import Button from '../../src/General/Button';
import Divider from '../../src/General/Divider';
import Collapsible from '../../src/Display/Collapsible';

class ModalStory extends Component {
  state = {
    visible: false,
  }

  handleOpen = () => {
    this.setState({ visible: true });
  }

  handleClose = () => {
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

        <div style={{ marginBottom: '2em' }}>
          <Button variant="default" theme="blue" onClick={this.handleOpen}>
            Open Modal
          </Button>
          <Modal
            isVisible={visible}
            onClose={this.handleClose}
            headerTitle="What is Lorem Ipsum?"
          >
            <Modal.Body>
              <Divider theme="grey" />
              <Modal.Content>
                <span>
                  {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                </span>
              </Modal.Content>
              <Divider theme="grey" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" theme="blue" onClick={this.handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <pre>
              {`import { Divider } from 'glints-aries';

state = {
  visible: false,
}

handleOpen = () => {
  this.setState({ visible: true });
}

handleClose = () => {
  this.setState({ visible: false });
}

<Button 
  type="default"
  theme="blue"
  onClick={this.handleOpen}
>
  Open Modal
</Button>

<Modal
  isVisible={visible}
  onClose={this.handleClose}
  headerTitle="What is Lorem Ipsum?"
>
  <Modal.Body>
    <Divider theme="grey" />
      <Modal.Content>
        <span>
          {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </span>
      </Modal.Content>
    <Divider theme="grey" />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="default" theme="blue">
      Save
    </Button>
  </Modal.Footer>
</Modal>`}
            </pre>
          </Collapsible>
        </div>

        <table className="doc-table">
          <thead>
            <tr style={{ borderBottom: '1px solid lightgrey' }}>
              <th colSpan="6">
                <h3 style={{ margin: '.8em 0' }}>
                  Props
                </h3>
              </th>
            </tr>
            <tr>
              <th>
                Name
              </th>
              <th>
                Type
              </th>
              <th>
                Default Value
              </th>
              <th>
                Possible Value
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
                headerTitle
              </td>
              <td>
                string
              </td>
              <td></td>
              <td>any</td>
              <td>
                no
              </td>
              <td>
                Sets title for Modal.
              </td>
            </tr>
            <tr>
              <td>
                isVisible
              </td>
              <td>
                boolean
              </td>
              <td>
                <code>
                  false
                </code>
              </td>
              <td>
                <code>
                  true | false
                </code>
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
                onClose
              </td>
              <td>
                function
              </td>
              <td></td>
              <td>
                function
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
                centering
              </td>
              <td>
                boolean
              </td>
              <td>
                <code>
                  false
                </code>
              </td>
              <td>
                <code>
                  true | false
                </code>
              </td>
              <td>
                no
              </td>
              <td>
                Centering Modal.
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
                <code>
                  false
                </code>
              </td>
              <td>
                <code>
                  true | false
                </code>
              </td>
              <td>
                no
              </td>
              <td>
                Hides content area.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ModalStory;
