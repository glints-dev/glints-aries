import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Divider from '../../src/General/Divider';

const props = {
  Divider: [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>black</code>,
      possibleValue: <code>red | blue | yellow | white | grey</code>,
      require: 'no',
      description: 'Sets Divider\'s color.',
    },
  ],
};

const DividerStory = () => (
  <StorybookComponent
    title="Divider"
    code="import { Divider } from 'glints-aries'"
    propsObject={props}
    usage={'<Divider />'}
  >
    <Divider />
  </StorybookComponent>
);

export default DividerStory;
