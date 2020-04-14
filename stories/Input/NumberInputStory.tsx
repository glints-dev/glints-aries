import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import NumberInput from '../../src/Input/NumberInput';
import Heading from '../../src/General/Heading';

import { props as TextFieldDescriptionProps } from './TextFieldStory';

const props = {
  NumberInput: TextFieldDescriptionProps.TextField.concat([
    {
      name: 'min',
      type: 'Number',
      defaultValue: '',
      possibleValue: 'Any Number',
      require: 'no',
      description: 'Minimum value for number input',
    },
    {
      name: 'max',
      type: 'Number',
      defaultValue: '',
      possibleValue: 'Any Number',
      require: 'no',
      description: 'Maximum value for number input',
    },
    {
      name: 'step',
      type: 'Number',
      defaultValue: '',
      possibleValue: 'Any Number',
      require: 'no',
      description: 'Step size for number input',
    },
  ]).filter(prop => prop.name !== 'type'),
};

const NumberInputStory = () => {
  const [number, setNumber] = React.useState('4');

  return (
    <React.Fragment>
      <StorybookComponent
        propsObject={props}
        usage={
          '<NumberInput type="number" label="Number" value="4" min="-10" max="10" step="2" />'
        }
      >
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Number
        </Heading>
        <div style={{ width: '300px' }}>
          <NumberInput
            label="Number"
            value={number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            min={-10}
            max={10}
            step={2}
          />
        </div>
      </StorybookComponent>
    </React.Fragment>
  );
};

export default NumberInputStory;
