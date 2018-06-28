// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
import BannerStory from './BannerStory';
import BlockquoteStory from './BlockquoteStory';
import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
import HeadingStory from './HeadingStory';
import ItemStory from './ItemStory';
import LabelStory from './LabelStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import StatsStory from './StatsStory';
import TextFieldStory from './TextFieldStory';


storiesOf('Glints Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Accordion', () => <AccordionStory />)
  .add('Banner', () => <BannerStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Button', () => <ButtonStory />)
  .add('Card', () => <CardStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Item', () => <ItemStory />)
  .add('Label', () => <LabelStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Stats', () => <StatsStory />)
  .add('Text Field', () => <TextFieldStory />);
  