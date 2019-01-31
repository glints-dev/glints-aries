import React, { Component } from 'react';

import Layout from '../../src/Layout/Layout';

class LayoutStory extends Component {
  renderHeader() {
    return (
      <div style={{ backgroundColor: '#7CBCEA', textAlign: 'center' }}>
        Header
      </div>
    );
  }

  renderBody() {
    return (
      <div style={{ backgroundColor: '#0F8EE9', textAlign: 'center', height: '100px' }}>
        Body
      </div>
    );
  }

  renderFooter() {
    return (
      <div style={{ backgroundColor: '#7CBCEA', textAlign: 'center' }}>
        Footer
      </div>
    );
  }

  render() {
    const { Body, Footer } = Layout;

    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
          Layout
          </h1>
          <p>
            <code>
              {'import { Layout } from \'glints-aries\''}
            </code>
          </p>
        </div>
        <Layout>
          <Body>
            Body
          </Body>
          <Footer>
            Footer
          </Footer>
        </Layout>
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
                  {`<Layout>
    <Layout.Header>
        Header
    </Layout.Header>
    <Layout.Body>
        Body
    </Layout.Body>
    <Layout.Footer>
        Footer
    </Layout.Footer>
</Layout>`}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LayoutStory;
