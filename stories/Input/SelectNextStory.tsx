import * as React from 'react';

import { SelectNext } from '../../src/Input/SelectNext/SelectNext';
import StorybookComponent from '../StorybookComponent';

const propsObject = {
  SelectNext: [
    {
      name: 'active',
      type: 'boolean',
      require: 'No',
      possibleValue: <code>true | false</code>,
      description: 'Determine whether the ToggleSwitch is active',
    },
    // {
    //   name: 'defaultActive',
    //   type: 'boolean',
    //   defaultValue: <code>false</code>,
    //   require: 'No',
    //   possibleValue: <code>true | false</code>,
    //   description:
    //     'This will determine whether or not the component renders with an active or inactive state at the start.',
    // },
    // {
    //   name: 'iconOptions',
    //   type: 'object',
    //   require: 'No',
    //   possibleValue: (
    //     <code>{'{ active: EyeIcon, inactive: EyeSlashedIcon }'}</code>
    //   ),
    //   description:
    //     'The icon components that will be used in both active ' +
    //     'and inactive states. Both icons have to be defined when opting to use ' +
    //     'this.',
    // },
    // {
    //   name: 'onChange',
    //   type: 'function',
    //   defaultValue: '',
    //   require: 'No',
    //   possibleValue: 'function',
    //   description:
    //     'Called when the state of the toggle has been changed. Returns true or false depending on whether the toggle is active or inactive.',
    // },
  ],
};

const ToggleSwitchStory = () => (
  <StorybookComponent
    title="Next Select"
    code="import { SelectNext } from 'glints-aries'"
    propsObject={propsObject}
    usage={``}
  >
    <SelectNext />
  </StorybookComponent>
);

export default ToggleSwitchStory;
