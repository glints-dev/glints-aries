import React, { Component } from 'react';

import Button from '../src/General/Button';

import Alert from '../src/General/Alert';

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
              Open
          </Button>
          <Alert
            message="message"
            isOpen={isOpen}
            onClose={this.handleOnClose}
          />
        </div>

        <table className="doc-table">
          <thead>
            <tr>
              <th>
                  Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 20 }}>
                <pre>
                  {`state = {
  isOpen: false,
}

handleOnClose = () => {
  this.setState({ isOpen: false });
}

<Alert
  message="message"
  isOpen={isOpen}
  onClose={this.handleOnClose}
/>`}
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
              <th>Name</th>
              <th>Type</th>
              <th>Value</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>message</td>
              <td>string</td>
              <td>any</td>
              <td>yes</td>
              <td>Sets message for notification</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>bool</td>
              <td>
                <pre>
                  true | false
                </pre>
              </td>
              <td>no</td>
              <td>Sets notification to show</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function</td>
              <td>-</td>
              <td>no</td>
              <td>Function to close notification</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlertStory;
