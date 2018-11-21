import React, { Component } from 'react';

import Alert from '../../src/General/Alert';
import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

class AlertStory extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleOnClick = () => {
    this.setState({ isOpen: true });
  }

  handleOnClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
            Alert
          </h1>
          <p>
            <code>
              {'import { Alert } from \'glints-aries\''}
            </code>
          </p>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Button
            theme="blue"
            onClick={this.handleOnClick}
          >
              Open Alert
          </Button>
          <Alert
            style={{
              color: "#fff",
              backgroundColor: "#f60",
              border: "1px solid magenta"
            }}
            closeIconColor="magenta"
            autoClose={5000}
            message="Our system is currently busy. Please try again."
            isOpen={isOpen}
            onClose={this.handleOnClose}
          />
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <pre>
              {`state = {
  isOpen: false,
}

handleOnClose = () => {
  this.setState({ isOpen: false });
}

<Alert
  message="Our system is currently busy. Please try again."
  isOpen={isOpen}
  onClose={this.handleOnClose}
/>`}
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
              <td>message</td>
              <td>string</td>
              <td></td>
              <td>any</td>
              <td>yes</td>
              <td>Sets message for Alert.</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>bool</td>
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
              <td>yes</td>
              <td>Sets Alert to show.</td>
            </tr>
            <tr>
              <td>autoClose</td>
              <td>number</td>
              <td><code>null</code></td>
              <td>
                any number
              </td>
              <td>no</td>
              <td>auto close alert in millisecond</td>
            </tr>
            <tr>
              <td>style</td>
              <td>object</td>
              <td><code>null</code></td>
              <td>
                <pre>{`{ backgroundColor: 'red' }`}</pre>
              </td>
              <td>no</td>
              <td>style object</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function</td>
              <td></td>
              <td>function</td>
              <td>yes</td>
              <td>Function to close Alert.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlertStory;
