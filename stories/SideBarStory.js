import React, { Component } from 'react';
import { SideBar, Button } from '../src';
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
          SIDEBAR
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
                <div>HEADER</div>
                <SideBar
                  mobileMediaQuery={1000}
                  sideBarComponent={this.renderSideBar()}
                  tempRows="90px 1fr"
                  headerHeight={90}
                  isOpen={isOpen}
                  handleClose={() => this.setState({ isOpen: false })}
                  sidebarWidth="60vw"
                >
                  <div>
                    <Button
                      theme="blue"
                      hoverColor="red"
                      onClick={() => this.setState({ isOpen: !isOpen })}
                    >
                      CONTENT
                    </Button>
                  </div>
                </SideBar>
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
                  {`<SideBar
      mobileMediaQuery={300}
      headerComponent={<div>header</div>}
      sideBarComponent={<div>sometin</div>}
      tempRows="60px 1fr"
      headerHeight={60}
      isOpen
      handleClose={...function}
      sidebarWidth="60vw"
      >
          <div>content</div>
  </SideBar>`}
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
              <td>mobileMediaQuery</td>
              <td>number</td>
              <td>any</td>
              <td>no</td>
              <td>Max width for Media Query to render sidebar</td>
            </tr>
            <tr>
              <td>headerHeight</td>
              <td>number</td>
              <td>any</td>
              <td>no</td>
              <td>Height for header</td>
            </tr>
            <tr>
              <td>headerComponent</td>
              <td>ReactNode</td>
              <td>-</td>
              <td>no</td>
              <td>Component to render in header</td>
            </tr>
            <tr>
              <td>sideBarComponent</td>
              <td>ReactNode</td>
              <td>-</td>
              <td>no</td>
              <td>Component to render in sidebar</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>boolean</td>
              <td><pre>true | false</pre></td>
              <td>no</td>
              <td>Open/Close sidebar</td>
            </tr>
            <tr>
              <td>tempRows</td>
              <td>string</td>
              <td>any</td>
              <td>no</td>
              <td>Grid template for rows</td>
            </tr>
            <tr>
              <td>tempCols</td>
              <td>string</td>
              <td>any</td>
              <td>no</td>
              <td>Grid template for cols</td>
            </tr>
            <tr>
              <td>handleClose</td>
              <td>function</td>
              <td>-</td>
              <td>no</td>
              <td>Handle sidebar close</td>
            </tr>
            <tr>
              <td>sidebarWidth</td>
              <td>string</td>
              <td>any</td>
              <td>no</td>
              <td>
                Set sidebar width
                <pre>defaultValue: 40vh</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SideBarStory;
