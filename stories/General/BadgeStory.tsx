import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Badge from '../../src/General/Badge';
import { ArrowDownIcon } from '../../src';

const props = {
  Badge: [
    {
      name: 'label',
      type: 'string | number',
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
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'default',
      possibleValue: <code>default | dimmed</code>,
      require: 'no',
      description: 'Sets the variant of the badge',
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
      Default
      <Badge label="4" />
      <Badge label="36" />
      <Badge label="872" />
      <Badge label="28.397" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      Dimmed
      <Badge label="4" variant="dimmed" />
      <Badge label="36" variant="dimmed" />
      <Badge label="872" variant="dimmed" />
      <Badge label="28.397" variant="dimmed" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      My Applications
      <Badge label="4" />
      <ArrowDownIcon />
    </div>
  </StorybookComponent>
);

export default BadgeStory;
