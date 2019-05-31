import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import ProfilePicture from '../../src/General/ProfilePicture';

const props = {
  'Profile Picture': [
    {
      name: 'editable',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Showing edit icon when it\'s hovered.',
    },
  ],
};

const ProfilePictureStory = () => (
  <StorybookComponent
    title="Profile Picture"
    code="import { ProfilePicture } from 'glints-aries'"
    propsObject={props}
    usage={`<ProfilePicture editable>
  <img src="..." alt="..." />
</ProfilePicture>`}
  >
    <ProfilePicture editable>
      <img src="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80" alt="Ying Cong" />
    </ProfilePicture>
  </StorybookComponent>
);

export default ProfilePictureStory;
