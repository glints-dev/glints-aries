// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';
import IntroStory from './IntroStory';
import ButtonStory from './ButtonStory';
import BlockquoteStory from './BlockquoteStory';
import CardStory from './CardStory';
import FormStory from './FormStory';
import StatsStory from './StatsStory';
import HeadingStory from './HeadingStory';
import ItemStory from './ItemStory';
import JobBannerStory from './JobBannerStory';
import LabelStory from './LabelStory';
import PsychedelicTextStory from './PsychedelicTextStory';

storiesOf('Glints Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Button', () => <ButtonStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Card', () => <CardStory />)
  .add('Form', () => <FormStory />)
  .add('Stats', () => <StatsStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Item', () => <ItemStory />)
  .add('JobBanner', () => <JobBannerStory />)
  .add('Label', () => <LabelStory />)
  .add('PsychedelicText', () => <PsychedelicTextStory />);
  