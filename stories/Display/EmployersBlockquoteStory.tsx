import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import EmployersBlockquote from '../../src/Display/EmployersBlockquote';

const props = {
  'Employers Blockquote': [
    {
      name: 'profileURL',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>url | path</code>,
      require: 'yes',
      description: 'Sets profile picture photo.',
    },
    {
      name: 'alt',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets alt info for profile picture.',
    },
    {
      name: 'profileName',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'additionalInfo',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
  ],
};

const EmployersBlockquoteStory = () => (
  <StorybookComponent
    title="Employers Blockquote"
    code="import { EmployersBlockquote } from 'glints-aries'"
    propsObject={props}
    usage={`<EmployersBlockquote
  profileURL="..."
  alt="Jia Ann"
  profileName="Jia Ann"
  additionalInfo="Nanyang Technological University"
>
  The whole hiring process took less than 1 week.
</EmployersBlockquote>`}
  >
    <div style={{ marginBottom: '2em', width: '450px' }}>
      <EmployersBlockquote
        profileURL="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80"
        alt="Jia Ann"
        profileName="Jia Ann"
        additionalInfo="Nanyang Technological University"
      >
        The whole hiring process took less than 1 week. We had quite a lot of resumes coming in over a 24 hour period. We found our candidate 1 day later and the whole hiring process was completed quickly.
      </EmployersBlockquote>
    </div>
  </StorybookComponent>
);

export default EmployersBlockquoteStory;
