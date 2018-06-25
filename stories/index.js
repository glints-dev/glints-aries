// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';
import IntroStory from './IntroStory';
import JobBannerStory from './JobBannerStory';
import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
import FormStory from './FormStory';
import StatsStory from './StatsStory';
import HeadingStory from './HeadingStory';
import ItemStory from './ItemStory';
import LabelStory from './LabelStory';

storiesOf('Glints Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Button', () => <ButtonStory />)
  .add('Card', () => <CardStory />)
  .add('Form', () => <FormStory />)
  .add('Stats', () => <StatsStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Item', () => <ItemStory />)
  .add('JobBanner', () => <JobBannerStory />)
  .add('Label', () => <LabelStory />);
  