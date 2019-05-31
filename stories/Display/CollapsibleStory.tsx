import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Collapsible from '../../src/Display/Collapsible';

const props = {
  Collapsible: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets title for Collapsible.',
    },
    {
      name: 'isOpen',
      type: 'boolean',
      defaultValue: <code>true</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Collapsing as default.',
    },
  ],
};

const CollapsibleStory = () => (
  <StorybookComponent
    title="Collapsible"
    code="import { Collapsible } from 'glints-aries'"
    propsObject={props}
    usage={`<Collapsible label="Personal Detail">
  ...
</Collapsible>`}
  >
    <Collapsible
      label="Personal Detail"
    >
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </Collapsible>
  </StorybookComponent>
);

export default CollapsibleStory;
