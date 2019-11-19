import * as React from 'react';

import ToggleSwitch from '../../src/Input/ToggleSwitch/ToggleSwitch';
import { EyeIcon, EyeSlashedIcon } from '../../src/General/Icon/components';
import StorybookComponent from '../StorybookComponent';

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
        <code>{'{ active: EyeIcon, inactive: EyeSlashedIcon }'}</code>
      ),
      description:
        'The icon components that will be used in both active ' +
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
          active: EyeIcon,
          inactive: EyeSlashedIcon,
        }}
      />
    `}
  >
    <ToggleSwitch
      defaultActive={false}
      iconOptions={{
        active: EyeIcon,
        inactive: EyeSlashedIcon,
      }}
    />
  </StorybookComponent>
);

export default ToggleSwitchStory;
