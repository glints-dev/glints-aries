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
import FlexCenterStory from './FlexCenterStory';
import HeadingStory from './HeadingStory';
import InformationStory from './InformationStory';
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
  .add('Information', () => <InformationStory />)
  .add('Item', () => <ItemStory />)
  .add('Label', () => <LabelStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Stats', () => <StatsStory />)
  .add('Text Field', () => <TextFieldStory />);
  

storiesOf('Glints Utilitites', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Center (Flex)', () => <FlexCenterStory />)