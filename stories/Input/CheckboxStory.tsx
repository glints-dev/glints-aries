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
      description: "It's a must to always put ID into checkbox to be clicked.",
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the value of the checkbox.',
    },
    {
      name: 'label',
      type: 'React.ReactNode',
      defaultValue: '',
      possibleValue: 'React.ReactNode',
      require: 'no',
      description: 'Sets the children of the checkbox label.',
    },
    {
      name: 'size',
      type: 'string',
      defaultValue: 'large',
      possibleValue: 'small | large',
      require: 'no',
      description: 'Sets the size of checkbox.',
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
