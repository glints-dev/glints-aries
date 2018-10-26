import React, { Component } from 'react';

import Drawer from '../../src/Navigation/Drawer';
import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

class DrawerStory extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  renderSideBar = () => {
    const { isOpen } = this.state;
    return (
      <div>
        <Button
          theme="blue"
          hoverColor="red"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          CLOSE
        </Button>
      </div>
    );
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
            Drawer
          </h1>
          <p>
            <code>
              {'import { Drawer } from \'glints-aries\''}
            </code>
          </p>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Button
            theme="blue"
            hoverColor="red"
            onClick={() => this.setState({ isOpen: true })}
          >
            OPEN
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={() => this.setState({ isOpen: false })}
          >
            {this.renderSideBar()}
          </Drawer>
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <pre>
              {`<Drawer
    isOpen={isOpen}
    onClose={() => this.setState({ isOpen: false })}
  >
    <Component />
</Drawer>`}
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
              <td>isOpen</td>
              <td>boolean</td>
              <td><code>false</code></td>
              <td><code>true | false</code></td>
              <td>no</td>
              <td>Open/Close sidebar</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function</td>
              <td></td>
              <td>function</td>
              <td>no</td>
              <td>Handle sidebar close</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DrawerStory;
