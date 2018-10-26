import React, { Component } from 'react';

import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

import Toast from '../../src/Display/Toast';

class ToastStory extends Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
            Toast
          </h1>
          <p>
            <code>
              {'import { Toast } from \'glints-aries\''}
            </code>
          </p>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Button type="default" theme="red" onClick={this.handleOpen}>
            Open Toast
          </Button>
          <Toast
            isVisible={isOpen}
            onClose={this.handleClose}
          >
            <h3>Glints is looking for you!</h3>
            <p>Glints is hiring for a talented Software Engineer.</p>
            <p>Click button below for more details</p>
            <Button type="default">More Details</Button>
          </Toast>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <pre>
              {`state = {
  isOpen: false,
}

handleOpen = () => {
  this.setState({ isOpen: true });
}

handleClose = () => {
  this.setState({ isOpen: false });
}

<Button
  type="default"
  theme="red"
  onClick={this.handleOpen}
>
  Open Toast
</Button>

<Toast
  isVisible={isOpen}
  onClose={this.handleClose}
>
  <Component />
</Toast>`}
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
              <th>Name</th>
              <th>Type</th>
              <th>Default Value</th>
              <th>Possible Value</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>isVisible</td>
              <td>boolean</td>
              <td>
                <code>
                  {'false'}
                </code>
              </td>
              <td>
                <code>
                  {'true | false'}
                </code>
              </td>
              <td>yes</td>
              <td>Shows the Toast.</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function</td>
              <td></td>
              <td>function</td>
              <td>yes</td>
              <td>Close the Toast.</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>string</td>
              <td>
                <code>
                  {'blue'}
                </code>
              </td>
              <td>
                <code>
                  {'blue | black'}
                </code>
              </td>
              <td>no</td>
              <td>{'Sets Toast\'s theme.'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToastStory;
