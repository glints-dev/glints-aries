import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Badge from '../../src/General/Badge';

const props = {
  Badge: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the label of Badge.',
    },
    {
      name: 'sup',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Badge into superscript type.',
    },
  ],
};

const BadgeStory = () => (
  <StorybookComponent
    title="Badge"
    code="import { Badge } from 'glints-aries'"
    propsObject={props}
    usage={'<Badge label="6" />'}
  >
    <div style={{ marginBottom: '2em' }}>
      <span style={{ marginRight: '.5em' }}>Jobs</span>
      <Badge label="6" sup />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <span style={{ marginRight: '.5em' }}>Location</span>
      <Badge label="15" />
    </div>
  </StorybookComponent>
);

export default BadgeStory;
