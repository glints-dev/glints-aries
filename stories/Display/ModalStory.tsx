import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Modal from '../../src/Display/Modal';
import Button from '../../src/General/Button';

class ModalStory extends React.Component {
  state = {
    visible: false,
    visibleCenteredModal: false,
    visibleCenteredModalWithMoreText: false,
  };

  handleOpen = () => {
    this.setState({ ...this.state, visible: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, visible: false });
  };

  handleCenteredModalOpen = () => {
    this.setState({ ...this.state, visibleCenteredModal: true });
  };

  handleCenteredModalClose = () => {
    this.setState({ ...this.state, visibleCenteredModal: false });
  };

  handleCenteredModalWithMoreTextOpen = () => {
    this.setState({ ...this.state, visibleCenteredModalWithMoreText: true });
  };

  handleCenteredModalWithMoreTextClose = () => {
    this.setState({ ...this.state, visibleCenteredModalWithMoreText: false });
  };

  render() {
    const {
      visible,
      visibleCenteredModal,
      visibleCenteredModalWithMoreText,
    } = this.state;

    const props = {
      Modal: [
        {
          name: 'title',
          type: 'React.ReactNode',
          defaultValue: '',
          possibleValue: 'React.ReactNode',
          require: 'no',
          description: 'Sets title of Modal.',
        },
        {
          name: 'isVisible',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'yes',
          description: 'Sets the visibility of Modal.',
        },
        {
          name: 'onClose',
          type: 'onClose',
          defaultValue: '',
          possibleValue: 'function',
          require: 'yes',
          description: 'Sets to close Modal.',
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: <code>m</code>,
          possibleValue: <code>s | m | l | xl</code>,
          require: 'no',
          description: [
            'Sets size of Modal. Default size is medium.',
            <p
              key="sizeChart"
              style={{
                marginBottom: '0',
                marginTop: '1em',
                fontWeight: 'bold',
              }}
            >
              Size chart:
            </p>,
            <p key="small" style={{ margin: '0' }}>
              Small: 300px
            </p>,
            <p key="medium" style={{ margin: '0' }}>
              Medium: 500px
            </p>,
            <p key="large" style={{ margin: '0' }}>
              Large: 800px
            </p>,
            <p key="extraLarge" style={{ margin: '0' }}>
              Extra Large: 920px
            </p>,
          ],
        },
        {
          name: 'centering',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'no',
          description: 'Centering Modal.',
        },
        {
          name: 'hideHeader',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'no',
          description: 'Hides header area.',
        },
        {
          name: 'hideContentArea',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'no',
          description: 'Hides content area.',
        },
        {
          name: 'removeAnimation',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'no',
          description: 'Removes animation when opening and closing the modal.',
        },
        {
          name: 'footer',
          type: 'array',
          defaultValue: '',
          possibleValue: 'an array of React Elements',
          require: 'no',
          description: 'Sets the footer of the modal',
        },
      ],
    };

    return (
      <React.Fragment>
        <StorybookComponent
          title="Modal"
          code="import { Modal } from 'glints-aries'"
          propsObject={props}
          usage={`state = {
            visible: false,
          }

          handleOpen = () => {
            this.setState({ visible: true });
          }

          handleClose = () => {
            this.setState({ visible: false });
          }

          <Button theme="blue" onClick={this.handleOpen}>
            Open Modal
          </Button>

          <Modal
            title="What is Lorem Ipsum?"
            isVisible={visible}
            onClose={this.handleClose}
            footer={[
              <Button key="cancel" variant="ghost" theme="blue" small onClick={this.handleClose}>
                Cancel
              </Button>,
              <Button key="save" variant="default" theme="blue" small onClick={this.handleClose}>
                Save
              </Button>,
            ]}
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Modal>`}
        >
          <Button variant="solid-blue" onClick={this.handleOpen}>
            Open Modal
          </Button>
          <Modal
            title="What is Lorem Ipsum?"
            isVisible={visible}
            onClose={this.handleClose}
            footer={[
              <Button
                key="cancel"
                variant="ghost"
                small
                onClick={this.handleClose}
              >
                Cancel
              </Button>,
              <Button
                key="save"
                variant="solid-blue"
                small
                onClick={this.handleClose}
              >
                Save
              </Button>,
            ]}
          >
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
            </p>
          </Modal>
        </StorybookComponent>

        <StorybookComponent
          title="Screen Centered Modal"
          code="import { Modal } from 'glints-aries'"
          usage={`state = {
          visible: false,
        }

        handleOpen = () => {
          this.setState({ visible: true });
        }

        handleClose = () => {
          this.setState({ visible: false });
        }

        <Button theme="blue" onClick={this.handleOpen}>
          Open Modal
        </Button>

        <Modal
          title="What is Lorem Ipsum?"
          isVisible={visible}
          centering={true}
          onClose={this.handleClose}
          footer={[
            <Button key="cancel" variant="ghost" theme="blue" small onClick={this.handleClose}>
              Cancel
            </Button>,
            <Button key="save" variant="default" theme="blue" small onClick={this.handleClose}>
              Save
            </Button>,
          ]}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </Modal>`}
        >
          <Button variant="solid-blue" onClick={this.handleCenteredModalOpen}>
            Open Modal
          </Button>
          <Modal
            title="What is Lorem Ipsum?"
            isVisible={visibleCenteredModal}
            centering={true}
            onClose={this.handleCenteredModalClose}
            footer={[
              <Button
                key="cancel"
                variant="ghost"
                small
                onClick={this.handleCenteredModalClose}
              >
                Cancel
              </Button>,
              <Button
                key="save"
                variant="solid-blue"
                small
                onClick={this.handleCenteredModalClose}
              >
                Save
              </Button>,
            ]}
          >
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.`}
            </p>
          </Modal>
        </StorybookComponent>

        <StorybookComponent
          title="Screen centered modal with a lot of content"
          code="import { Modal } from 'glints-aries'"
          usage={`state = {
          visible: false,
        }

        handleOpen = () => {
          this.setState({ visible: true });
        }

        handleClose = () => {
          this.setState({ visible: false });
        }

        <Button theme="blue" onClick={this.handleOpen}>
          Open Modal
        </Button>

        <Modal
          title="What is Lorem Ipsum?"
          isVisible={visible}
          centering={true}
          onClose={this.handleClose}
          footer={[
            <Button key="cancel" variant="ghost" theme="blue" small onClick={this.handleClose}>
              Cancel
            </Button>,
            <Button key="save" variant="default" theme="blue" small onClick={this.handleClose}>
            Save
            </Button>,
          ]}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
          
          Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of 
          the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.

          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.

          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          </p>
        </Modal>`}
        >
          <Button
            variant="solid-blue"
            onClick={this.handleCenteredModalWithMoreTextOpen}
          >
            Open Modal
          </Button>
          <Modal
            title="What is Lorem Ipsum?"
            isVisible={visibleCenteredModalWithMoreText}
            centering={true}
            onClose={this.handleCenteredModalWithMoreTextClose}
            footer={[
              <Button
                key="cancel"
                variant="ghost"
                small
                onClick={this.handleCenteredModalWithMoreTextClose}
              >
                Cancel
              </Button>,
              <Button
                key="save"
                variant="solid-blue"
                small
                onClick={this.handleCenteredModalWithMoreTextClose}
              >
                Save
              </Button>,
            ]}
          >
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`}{' '}
              <br />
              {`Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of 
          the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.`}
              <br />
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.`}
              <br />
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.`}
            </p>
          </Modal>
        </StorybookComponent>
      </React.Fragment>
    );
  }
}

export default ModalStory;
