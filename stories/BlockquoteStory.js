import React from 'react';
import Blockquote from '../src/Blockquote';
import ProfilePictureShadow from '../src/ProfilePictureShadow';

const BlockquoteStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Blockquote
      </h1>
      <p>
        <code>
          {'import { Blockquote } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
              Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <Blockquote>
              <Blockquote.Profile>
                <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
              </Blockquote.Profile>
              <Blockquote.Content>
                <Blockquote.Testimony>
                  {'I didn\'t really know what I wanted to do and what were all the career paths out there - and was just exploring the careers on Glints - now I have discovered what I love to do and found my dream career!'}
                </Blockquote.Testimony>
                <Blockquote.Author>
                  Sean Goodwin
                </Blockquote.Author>
                <Blockquote.Origin>
                  National University of Singapore (NUS)
                </Blockquote.Origin>
              </Blockquote.Content>
            </Blockquote>
          </td>
          <td>
            <pre>
              {`<Blockquote>
  <Blockquote.Profile>
    <ProfilePictureShadow size="large" assetUrl="..." />
  </Blockquote.Profile>
  <Blockquote.Content>
    <Blockquote.Testimony>...</Blockquote.Testimony>
    <Blockquote.Author>...</Blockquote.Author>
    <Blockquote.Origin>...</Blockquote.Origin>
  </Blockquote.Content>
</Blockquote>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <div style={{ marginBottom: '2em' }}>
      <h1>
        Note
      </h1>
      <p>
        You can
        {' '}
        <code>
          {'import ProfilePicture from \'glints-aries\''}
        </code>
        {' '}
        to use ProfilePicture Component.
      </p>
    </div>

  </div>
);

export default BlockquoteStory;
