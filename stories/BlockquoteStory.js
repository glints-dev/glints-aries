import React from 'react';
import Blockquote, { BlockquoteContent, Testimony, Author, Origin } from './../src/Blockquote';

const BlockquoteStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Blockquote</h1>
      <p>Usage: <code>{`import Blockquote, { BlockquoteContent, Testimony, Author, Origin } from 'glints-aries'`}</code></p>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Blockquote inverted>
                <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                <BlockquoteContent>
                  <Testimony>I didn't really know what I wanted to do and what were all the career paths out there - and was just exploring the careers on Glints - now I have discovered what I love to do and found my dream career!</Testimony>
                  <Author>Sean Goodwin</Author>
                  <Origin>National University of Singapore (NUS)</Origin>
                </BlockquoteContent>
              </Blockquote>
            </td>
            <td><pre>
{`<Blockquote inverted>
  <img src={url} />
  <BlockquoteContent>
    <Testimony>Type your text here...</Testimony>
    <Author>Sean Goodwin</Author>
    <Origin>National University of Singapore (NUS)</Origin>
  </BlockquoteContent>
</Blockquote>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Props</h1>
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
            <td>inverted</td>
            <td>string</td>
            <td><pre>{`true | false`}</pre></td>
            <td>no</td>
            <td>Sets blockquote into blue.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BlockquoteStory;
