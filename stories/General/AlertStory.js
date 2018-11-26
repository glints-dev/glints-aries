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
            type="success"
            message="You have successfully applied to Glints as Software Engineer."
            isOpen={isOpen}
            onClose={this.handleOnClose}
            autoClose={3000}
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
  type="success"
  message="You have successfully applied to Glints as Software Engineer."
  isOpen={isOpen}
  onClose={this.handleOnClose}
  autoClose={3000}
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
              <td>type</td>
              <td>string</td>
              <td>
                <code>info</code>
              </td>
              <td>
                <code>success | warning | danger | info</code>
              </td>
              <td>yes</td>
              <td>{'Sets Alert\'s style'}</td>
            </tr>
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
              <td>onClose</td>
              <td>function</td>
              <td></td>
              <td>function</td>
              <td>yes</td>
              <td>Function to close Alert.</td>
            </tr>
            <tr>
              <td>autoClose</td>
              <td>number</td>
              <td></td>
              <td>
                number in millisecond
              </td>
              <td>no</td>
              <td>Sets Alert to close by itself. The value is in millisecond.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AlertStory;
