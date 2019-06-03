import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Checkbox from '../../src/Input/Checkbox';

const props = {
  Checkbox: [
    {
      name: 'id',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'It\'s a must to always put ID into checkbox to be clicked.',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the label of checkbox.',
    },
  ],
};

const CheckboxStory = () => (
  <StorybookComponent
    title="Checkbox"
    code="import { Checkbox } from 'glints-aries'"
    propsObject={props}
    usage={'<Checkbox id="software-engineer" value="Software Engineer" />'}
  >
    <Checkbox id="software-engineer" value="Software Engineer" />
  </StorybookComponent>
);

export default CheckboxStory;
