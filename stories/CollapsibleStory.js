import React, { Component } from 'react';
import Collapsible from '../src/Collapsible';

class CollapsibleStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2.5em' }}>
          <h1>
            Collapsible
          </h1>

          <Collapsible isOpen={isOpen} onClick={this.toggleCollapsible}>
            <Collapsible.Head>
              title children
            </Collapsible.Head>

            <Collapsible.Body>
              <p>this is the collapsible body. lorem ipsum dolor sit amed</p>
            </Collapsible.Body>
          </Collapsible>
        </div>

        <div>
          <pre>{`<Collapsible isOpen={boolean} onClick={this.toggleCollapsible}>
  <Collapsible.Head>
    title children
  </Collapsible.Head>

  <Collapsible.Body>
    <p>this is the collapsible body. lorem ipsum dolor sit amed</p>
  </Collapsible.Body>
</Collapsible>`}</pre>
        </div>
      </div>
    );
  }
};

export default CollapsibleStory;
