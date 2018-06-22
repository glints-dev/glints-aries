// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';
import IntroStory from './IntroStory';
import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
import FormStory from './FormStory';
import LabelStory from './LabelStory';

storiesOf('Glints Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Button', () => <ButtonStory />)
  .add('Card', () => <CardStory />)
  .add('Form', () => <FormStory />)
  .add('Label', () => <LabelStory />);
  