// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
import BannerStory from './BannerStory';
import BlockquoteStory from './BlockquoteStory';
import BrandStory from './BrandStory';
import ButtonStory from './ButtonStory';
import DividerStory from './DividerStory';
import DropdownStory from './DropdownStory';
import FlexCenterStory from './FlexCenterStory';
import HeadingStory from './HeadingStory';
import InformationStory from './InformationStory';
import ItemStory from './ItemStory';
import JobCardStory from './JobCardStory';
import LabelStory from './LabelStory';
import MobileMenuStory from './MobileMenuStory';
import ProfilePictureStory from './ProfilePictureStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import SearchStory from './SearchStory';
import StatsStory from './StatsStory';
import TextFieldStory from './TextFieldStory';


storiesOf('Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Accordion', () => <AccordionStory />)
  .add('Banner', () => <BannerStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Brand', () => <BrandStory />)
  .add('Button', () => <ButtonStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Divider', () => <DividerStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Information', () => <InformationStory />)
  .add('Item', () => <ItemStory />)
  .add('Label', () => <LabelStory />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Search', () => <SearchStory />)
  .add('Stats', () => <StatsStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Mobile Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Menu', () => <MobileMenuStory />)

storiesOf('Utilitites', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Center (Flex)', () => <FlexCenterStory />)