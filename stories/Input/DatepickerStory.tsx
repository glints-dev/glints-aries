import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Datepicker from '../../src/Input/Datepicker';

const props = {
  Datepicker: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets input label for Datepicker.',
    },
  ],
};

const DatepickerStory = () => (
  <StorybookComponent
    title="Datepicker - Unfinished"
    code="import { Datepicker } from 'glints-aries'"
    propsObject={props}
    usage={'<Datepicker />'}
  >
    <div style={{ width: '300px' }}>
      <Datepicker />
    </div>
  </StorybookComponent>
);

export default DatepickerStory;
