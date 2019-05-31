import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Accordion from '../../src/Display/Accordion';

const props = {
  Accordion: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets Panel\'s title.',
    },
    {
      name: 'content',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets content.',
    },
  ],
};

const AccordionStory = () => (
  <StorybookComponent
    title="Accordion"
    code="import { Accordion } from 'glints-aries'"
    propsObject={props}
    usage={`<Accordion>
  <Accordion.Panel label="..." content="..." />
  <Accordion.Panel label="..." content="..." />
</Accordion>`}
  >
    <Accordion>
      <Accordion.Panel
        label="What is Lorem Ipsum?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Accordion.Panel
        label="What is Love?"
        content="Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love."
      />
    </Accordion>
  </StorybookComponent>
);

export default AccordionStory;
