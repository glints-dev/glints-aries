// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';
import IntroStory from './IntroStory';
import JobBannerStory from './JobBannerStory';
import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
import FormStory from './FormStory';
<<<<<<< HEAD
import HeadingStory from './HeadingStory';
=======
import HeaderStory from './HeaderStory';
>>>>>>> b8454803fe1f1ae98e064f91c2c8fdc587a00bb8
import ItemStory from './ItemStory';
import LabelStory from './LabelStory';

storiesOf('Glints Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Button', () => <ButtonStory />)
  .add('Card', () => <CardStory />)
  .add('Form', () => <FormStory />)
<<<<<<< HEAD
  .add('Heading', () => <HeadingStory />)
=======
  .add('Header', () => <HeaderStory />)
>>>>>>> b8454803fe1f1ae98e064f91c2c8fdc587a00bb8
  .add('Item', () => <ItemStory />)
  .add('JobBanner', () => <JobBannerStory />)
  .add('Label', () => <LabelStory />);
  