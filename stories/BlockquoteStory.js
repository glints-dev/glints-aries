import React from 'react';
import Blockquote from './../src/Blockquote';

import BlockquotePicture from './../src/Blockquote/BlockquotePicture';
import BlockquoteContent from '../src/Blockquote/BlockquoteContent';
import Testimony from './../src/Blockquote/Testimony';
import Author from './../src/Blockquote/Author';
import Origin from './../src/Blockquote/Origin';

import { Theme } from '../src/Utils/StyleConfig';
import Profile from '../assets/image/profile.png';

const BlockquoteStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Blockquote</h1>
      <p>Usage: <code>{`import { Blockquote } from '@glints-dev/glints-aries'`}</code></p>

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
              <Blockquote theme={Theme.BLUE}>
                <BlockquotePicture profileImage={Profile} />
                <BlockquoteContent>
                  <Testimony>I didn't really know what I wanted to do and what were all the career paths out there - and was just exploring the careers on Glints - now I have discovered what I love to do and found my dream career!</Testimony>
                  <Author>Sean Goodwin</Author>
                  <Origin>National University of Singapore (NUS)</Origin>
                </BlockquoteContent>
              </Blockquote>
            </td>
            <td><pre>
{`<Blockquote theme={Theme.BLUE}>
  <BlockquotePicture profileImage={Profile} />
  <BlockquoteContent>
    <Testimony>Type your text here...</Testimony>
    <Author>Sean Goodwin</Author>
    <Origin>National University of Singapore (NUS)</Origin>
  </BlockquoteContent>
</Blockquote>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Available Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>type</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{`'blue'`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BlockquoteStory;
