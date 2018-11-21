import React from 'react';

import NewDropdown from '../../src/Navigation/NewDropdown';
import StoryBookComponent from '../StoryBookComponent';

const props = {
  NewDropdown: [
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
  'NewDropdown.Item': [
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

const NewDropdownStory = () => (
  <StoryBookComponent
    title="NewDropdown"
    code="import { NewDropdown} from 'glints-aries'"
    propsObject={props}
  >
    <NewDropdown label="Career">
      <NewDropdown.Item value="EN">English</NewDropdown.Item>
      <NewDropdown.Item value="ID">Indonesian</NewDropdown.Item>
      <NewDropdown.Item value="Product Manager">Product Manager</NewDropdown.Item>
      <NewDropdown.Item value="Software Engineer">Software Engineer</NewDropdown.Item>
    </NewDropdown>
  </StoryBookComponent>
);

export default NewDropdownStory;
