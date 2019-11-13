import * as React from 'react';

import ToggleSwitch from '../../src/Input/ToggleSwitch/ToggleSwitch';
import StorybookComponent from '../StorybookComponent';
import { SecondaryColor } from '../../src/Style/Colors';

const propsObject = {
  ToggleSwitch: [
    {
      name: 'defaultActive',
      type: 'boolean',
      defaultValue: <code>false</code>,
      require: 'No',
      possibleValue: <code>true | false</code>,
      description:
        'This will determine whether or not the component renders with an active or inactive state at the start.',
    },
    {
      name: 'iconOptions',
      type: 'object',
      require: 'No',
      possibleValue: (
        <code>{'{ active: "eye", inactive: "eye-slashed" }'}</code>
      ),
      description:
        'The name of icons that will be used in both active ' +
        'and inactive states. Both icons have to be defined when opting to use ' +
        'this.',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      require: 'No',
      possibleValue: 'function',
      description:
        'Called when the state of the toggle has been changed. Returns true or false depending on whether the toggle is active or inactive.',
    },
  ],
};

const ToggleSwitchStory = () => (
  <StorybookComponent
    title="Toggle Switch"
    code="import { ToggleSwitch } from 'glints-aries'"
    propsObject={propsObject}
    usage={`
      <ToggleSwitch
        defaultActive={false}
        iconOptions={{
          active: 'eye',
          inactive: 'eye-slashed',
        }}
      />
    `}
  >
    <ToggleSwitch
      defaultActive={false}
      iconOptions={{
        active: 'eye',
        inactive: 'eye-slashed',
      }}
    />
  </StorybookComponent>
);

export default ToggleSwitchStory;
