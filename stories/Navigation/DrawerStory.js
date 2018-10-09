import React, { Component } from 'react';
import Drawer from '../../src/Navigation/Drawer';
import Button from '../../src/General/Button';

class SideBarStory extends Component {
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
          Side Bar
          </h1>
          <p>
            <code>
              {'import { SideBar } from \'glints-aries\''}
            </code>
          </p>
        </div>
        <table className="doc-table">
          <thead>
            <tr>
              <th>
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ maxWidth: 200, padding: 20 }}>
                <div style={{ boxShadow: '0 1px 0 0 #d4d4d4' }}>
                  <Button
                    theme="blue"
                    hoverColor="red"
                    onClick={() => this.setState({ isOpen: true })}
                  >
                    OPEN
                  </Button>
                </div>
                <Drawer
                  isOpen={isOpen}
                  handleClose={() => this.setState({ isOpen: false })}
                >
                  {this.renderSideBar()}
                </Drawer>
              </td>
            </tr>
          </tbody>
        </table>
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
              <td>
                <pre>
                  {`<Drawer
    isOpen={isOpen}
    handleClose={() => this.setState({ isOpen: false })}
  >
    {this.renderSideBar()}
</Drawer>`}
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
              <td>isOpen</td>
              <td>boolean</td>
              <td><pre>true | false</pre></td>
              <td>no</td>
              <td>Open/Close sidebar</td>
            </tr>
            <tr>
              <td>handleClose</td>
              <td>function</td>
              <td>-</td>
              <td>no</td>
              <td>Handle sidebar close</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SideBarStory;
