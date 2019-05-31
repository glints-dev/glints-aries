import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Dropdown from '../../src/Navigation/Dropdown';

const props = {
  Dropdown: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets label of Dropdown.',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'To get value of Dropdown\'s item.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Disabling Dropdown.',
    },
    {
      name: 'hoverToOpen',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Opens Dropdown on hovering.',
    },
    {
      name: 'showHoverLine',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Show underline when hovered.',
    },
    {
      name: 'leftIconName',
      type: 'string',
      defaultValue: '',
      possibleValue: 'based on the Icon list',
      require: 'no',
      description: 'Icon to show at the left side of dropdown button.',
    },
    {
      name: 'dropDownPlacement',
      type: 'string',
      defaultValue: <code>left</code>,
      possibleValue: <code>left | right</code>,
      require: 'no',
      description: 'Placement position for dropdown.',
    },
    {
      name: 'noLineBreak',
      type: 'boolean',
      defaultValue: <code>true</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'No break line in dropdown.',
    },
    {
      name: 'itemElement',
      type: 'element',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Dropdown label in component.',
    },
    {
      name: 'showFullWidth',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Dropdown take full width',
    },
    {
      name: 'iconDefaultColor',
      type: 'string',
      defaultValue: 'black',
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: 'Dropdown icon color',
    },
  ],
  'Dropdown.Item': [
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets Dropdown\'s item value',
    },
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: '',
    },
  ],
};

const DropdownStory = () => (
  <StorybookComponent
    title="Dropdown"
    code="import { Dropdown} from 'glints-aries'"
    propsObject={props}
  >
    <Dropdown label="Career">
      <Dropdown.Item value="Product Manager">Product Manager</Dropdown.Item>
      <Dropdown.Item value="Software Engineer">Software Engineer</Dropdown.Item>
    </Dropdown>
  </StorybookComponent>
);

export default DropdownStory;
