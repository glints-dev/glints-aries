import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Accordion from '../../src/Display/Accordion';

const props = {
  Accordion: [
    {
      name: 'iconPosition',
      type: 'string',
      defaultValue: <code>'left'</code>,
      possibleValue: <code>'left' | 'right'</code>,
      require: 'no',
      description: 'Sets the position of the icon.',
    },
  ],
  'Accordion.Panel': [
    {
      name: 'label',
      type: 'ReactNode',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the label.',
    },
    {
      name: 'content',
      type: 'ReactNode',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the content.',
    },
  ],
};

const AccordionStory = () => (
  <StorybookComponent
    title="Accordion"
    code="import { Accordion } from 'glints-aries'"
    propsObject={props}
    usage={`<React.Fragment>
  <h2 style={{ marginBottom: '15px' }}>
    <code style={{ fontSize: 'inherit' }}>iconPosition='left'</code>
  </h2>
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
  <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>
    <code style={{ fontSize: 'inherit' }}>iconPosition='right'</code>
  </h2>
  <Accordion iconPosition="right">
    <Accordion.Panel
      label="What is Lorem Ipsum?"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
    <Accordion.Panel
      label="What is Love?"
      content="Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love."
    />
  </Accordion>
</React.Fragment>`}
  >
    <React.Fragment>
      <h2 style={{ marginBottom: '15px' }}>
        <code style={{ fontSize: 'inherit' }}>iconPosition='left'</code>
      </h2>
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
      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>
        <code style={{ fontSize: 'inherit' }}>iconPosition='right'</code>
      </h2>
      <Accordion iconPosition="right">
        <Accordion.Panel
          label="What is Lorem Ipsum?"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Accordion.Panel
          label="What is Love?"
          content="Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love."
        />
      </Accordion>
    </React.Fragment>
  </StorybookComponent>
);

export default AccordionStory;
