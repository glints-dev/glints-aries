import React, { Component, Fragment } from 'react';

import Modal from '../../src/Display/Modal';
import Button from '../../src/General/Button';
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
          <Button type="default" theme="blue" onClick={this.handleOpen}>
            Open Modal
          </Button>
          <Modal
            title="What is Lorem Ipsum?"
            isVisible={visible}
            onClose={this.handleClose}
            footer={[
              <Button variant="ghost" theme="blue" onClick={this.handleClose}>
                Cancel
              </Button>,
              <Button variant="default" theme="blue" onClick={this.handleClose}>
                Save
              </Button>,
            ]}
          >
            <p>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</p>
          </Modal>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <pre>
              {`state = {
  visible: false,
}

handleOpen = () => {
  this.setState({ visible: true });
}

handleClose = () => {
  this.setState({ visible: false });
}

<Button type="default" theme="blue" onClick={this.handleOpen}>
  Open Modal
</Button>

<Modal
  title="What is Lorem Ipsum?"
  isVisible={visible}
  onClose={this.handleClose}
  footer={[
    <Button variant="ghost" theme="blue" onClick={this.handleClose}>
      Cancel
    </Button>,
    <Button variant="default" theme="blue" onClick={this.handleClose}>
      Save
    </Button>,
  ]}
>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                title
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
                Sets title of Modal.
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
                size
              </td>
              <td>
                string
              </td>
              <td>
                <code>m</code>
              </td>
              <td>
                <code>s | m | l | xl</code>
              </td>
              <td>
                no
              </td>
              <td>
                Sets size of Modal. Default size is medium.
                <p style={{ marginBottom: '0', marginTop: '1em', fontWeight: 'bold' }}>Size chart:</p>
                <p style={{ margin: '0' }}>Small: 300px</p>
                <p style={{ margin: '0' }}>Medium: 500px</p>
                <p style={{ margin: '0' }}>Large: 800px</p>
                <p style={{ margin: '0' }}>Extra Large: 920px</p>
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
                hideHeader
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
                Hides header area.
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