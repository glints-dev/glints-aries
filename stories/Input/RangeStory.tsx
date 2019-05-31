import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Range from '../../src/Input/Range';

const props = {
  Range: [
    {
      name: 'min',
      type: 'number',
      defaultValue: 0,
      possibleValue: '>= 0',
      require: 'yes',
      description: 'Sets min value of Range.',
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
      possibleValue: 'number should higher than min',
      require: 'yes',
      description: 'Sets max value of Range.',
    },
    {
      name: 'value',
      type: 'number',
      defaultValue: 0,
      possibleValue: 'number should be in the range of min and max',
      require: 'no',
      description: 'Sets value of Range.',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Called when Range dot is slid.',
    },
    {
      name: 'block',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Range to have full width',
    },
  ],
};

const RangeStory = () => (
  <StorybookComponent
    title="Range"
    code="import { Range } from 'glints-aries'"
    propsObject={props}
    usage={`handleChange = (value) => {
  console.log('Get current value: ', value);
}

<Range min={0} max={100} onChange={this.handleChange}/>`}
  >
    <Range min={0} max={100} />
  </StorybookComponent>
);

export default RangeStory;
