import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import PsychedelicText from '../../src/General/PsychedelicText';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';

const props = {
  'Psychedelic Text': [
    {
      name: 'type',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>heading | subheading</code>,
      require: 'yes',
      description: 'It\'s used to display two different styles.',
    },
    {
      name: 'psychTheme',
      type: 'string',
      defaultValue: '',
      possibleValue: <pre>
        {`blue-dominant |
blue-default |
red-dominant |
red-default |
yellow-dominant |
yellow-default`}
      </pre>,
      require: 'yes',
      description: ['This props is only available along with ', <b>subheading</b>, ' type. It\'s a required props to display Psychedelic Effect on the text.'],
    },
  ],
};

const PsychedelicTextStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Psychedelic Text"
      code="import { PsychedelicText } from 'glints-aries'"
      usage={`<PsychedelicText type="heading">
  Glints
</PsychedelicText>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Heading</Heading>
      <PsychedelicText type="heading">
        Glints
      </PsychedelicText>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      propsObject={props}
      usage={`<PsychedelicText
  type="subheading"
  psychTheme="yellow-dominant"
>
  Glints
</PsychedelicText>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Subheading</Heading>
      <PsychedelicText type="subheading" psychTheme="yellow-dominant">
        Glints
      </PsychedelicText>
    </StorybookComponent>
  </React.Fragment>
);

export default PsychedelicTextStory;
