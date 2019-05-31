import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

const props = {
  StorybookComponent: [
    {
      name: 'title',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the title of storybook.',
    },
    {
      name: 'code',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Import rule.',
    },
    {
      name: 'propsObject',
      type: 'array',
      defaultValue: '',
      possibleValue: <pre>
        {`tableName: {
  name: "name",
  type: "type",
  defaultValue: "defaultValue",
  possibleValue: "possibleValue",
  require: "require",
  description: "description",
}`}
      </pre>,
      require: 'yes',
      description: 'Array of object to populate props name and description in the table.',
    },
    {
      name: 'usage',
      type: 'string',
      defaultValue: '',
      possibleValue: '<ComponentUsage />',
      require: 'yes',
      description: 'Shows the usage of component.',
    },
  ],
};

const StorybookComponentStory = () => (
  <StorybookComponent
    title="Storybook Template"
    code="import { StorybookComponent } from 'glints-aries'"
    propsObject={props}
    usage={`const props = {
  Divider: [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>black</code>,
      possibleValue: <code>red | blue | yellow | white | grey</code>,
      require: 'no',
      description: 'Sets Divider's color.',
    },
  ],
};

<StorybookComponent
  title="Divider"
  code="import { Divider } from 'glints-aries'"
  propsObject={props}
  usage={'<Divider />'}
>
  <Divider />
</StorybookComponent>`}
  />
);

export default StorybookComponentStory;
