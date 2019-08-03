import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Progress from '../../src/Display/Progress';

const props = {
  Progress: [
    {
      name: 'percentage',
      type: 'number',
      defaultValue: '',
      possibleValue: '0 - 100',
      require: 'Yes',
      description: 'Sets progress value.',
    },
    {
      name: 'percentageRange',
      type: 'array',
      defaultValue: '[50]',
      possibleValue: '[], [50] or [15,60]. The numbers in the array can be any integer between 0-100. The maximum number of items in the array is 2.',
      require: 'No',
      description: 'Sets the percentage range to display a different color on the progress component.\n[] sets values from 0-100 to green.\n[50] sets values from 0-50 to orange, 51-100 to green.\n[15,60] sets values from 0-15 to red, 16-60 to orange, 61-100 to green.',
    },
    {
      name: 'size',
      type: 'number',
      defaultValue: '8',
      possibleValue: '1 - 10',
      require: 'No',
      description: 'Sets the size of the progress component.',
    },
    {
      name: 'content',
      type: 'any',
      defaultValue: '',
      possibleValue: '',
      require: 'No',
      description: 'Sets the content inside the progress component.',
    },
  ],
};

const ProgressStory = () => (
  <StorybookComponent
    title="Progress"
    code="import { Progress } from 'glints-aries'"
    propsObject={props}
    usage={'<Progress percentage={51} />'}
  >
    <Progress percentage={51} />
  </StorybookComponent>
);

export default ProgressStory;
