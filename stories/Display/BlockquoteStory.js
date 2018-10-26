import React from 'react';

import Blockquote from '../../src/Display/Blockquote';
import ProfilePicture from '../../src/General/ProfilePicture';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em' }}>
      <Blockquote>
        <Blockquote.Profile>
          <ProfilePicture>
            <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="profile" />
          </ProfilePicture>
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
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`import { Blockquote, ProfilePicture } from 'glints-aries';

<Blockquote>
  <Blockquote.Profile>
    <ProfilePicture size="large" assetUrl="..." />
  </Blockquote.Profile>
  <Blockquote.Content>
    <Blockquote.Testimony>...</Blockquote.Testimony>
    <Blockquote.Author>...</Blockquote.Author>
    <Blockquote.Origin>...</Blockquote.Origin>
  </Blockquote.Content>
</Blockquote>`}
        </pre>
      </Collapsible>
    </div>
  </div>
);

export default BlockquoteStory;
