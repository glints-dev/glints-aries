import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Heading from '../../src/General/Heading';

const props = {
  Heading: [
    {
      name: 'inline',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Heading into inline element.',
    },
    {
      name: 'uppercaseText',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Heading text to uppercase.',
    },
  ],
};

const HeadingStory = () => (
  <StorybookComponent
    title="Heading"
    code="import { Heading } from 'glints-aries'"
    propsObject={props}
    usage={`<Heading>
  This is Heading
</Heading>`}
  >
    <Heading>
      This is Heading
    </Heading>
  </StorybookComponent>
);

export default HeadingStory;
