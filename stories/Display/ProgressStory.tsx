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
  ],
};

const ProgressStory = () => (
  <StorybookComponent
    title="Progress"
    code="import { Progress } from 'glints-aries'"
    propsObject={props}
    usage={'<Progress percentage={54} />'}
  >
    <Progress percentage={54} />
  </StorybookComponent>
);

export default ProgressStory;
