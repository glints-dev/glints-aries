import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Blockquote from '../../src/Display/Blockquote';
import ProfilePicture from '../../src/General/ProfilePicture';

const BlockquoteStory = () => (
  <StorybookComponent
    title="Blockquote"
    code="import { Blockquote } from 'glints-aries'"
    usage={`import { Blockquote, ProfilePicture } from 'glints-aries';

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
  >
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
  </StorybookComponent>
);

export default BlockquoteStory;
