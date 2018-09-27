// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import Provider from './Provider';

import StorybookStyle from '../src/Style/StorybookStyle';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
import AlertStory from './AlertStory';
import BadgeStory from './BadgeStory';
import BlockquoteStory from './BlockquoteStory';
import BrandStory from './BrandStory';
import BreadcrumbStory from './BreadcrumbStory';
import ButtonStory from './ButtonStory';
import CheckboxStory from './CheckboxStory';
import CollapsibleStory from './CollapsibleStory';
import ColorStory from './ColorStory';
import DeviceStory from './DeviceStory';
import DividerStory from './DividerStory';
import DropdownStory from './DropdownStory';
import GalleryStory from './GalleryStory';
import GlintsContainerStory from './GlintsContainerStory';
import HeadingStory from './HeadingStory';
import IconStory from './IconStory';
import InformationStory from './InformationStory';
import JobCardStory from './JobCardStory';
import JobOverviewStory from './JobOverviewStory';
import SideBarStory from './SideBarStory';
import LoadingStory from './LoadingStory';
import MobileMenuStory from './MobileMenuStory';
import ModalStory from './ModalStory';
import OmniSearchStory from './OmniSearchStory';
import PointingModalStory from './PointingModalStory';
import PopoverStory from './PopoverStory';
import ProfilePictureStory from './ProfilePictureStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import RadioButtonStory from './RadioButtonStory';
import SearchFilterStory from './SearchFilterStory';
import SelectStory from './SelectStory';
import SliderStory from './SliderStory';
import StatsStory from './StatsStory';
import SwipeableStory from './SwipeableStory';
import SwitchStory from './SwitchStory';
import TabsStory from './TabsStory';
import TagStory from './TagStory';
import TextareaStory from './TextareaStory';
import TextFieldStory from './TextFieldStory';
import LanguageSelectStory from './LanguageSelectStory';

storiesOf('Introduction', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Getting started', () => <IntroStory />);

storiesOf('General', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Alert', () => <AlertStory />)
  .add('Badge', () => <BadgeStory />)
  .add('Brand', () => <BrandStory />)
  .add('Button', () => <ButtonStory />)
  .add('Divider', () => <DividerStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Icon', () => <IconStory />)
  .add('Loading', () => <LoadingStory />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Tag', () => <TagStory />);

storiesOf('Input', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Checkbox', () => <CheckboxStory />)
  .add('Language Select', () => <LanguageSelectStory />)
  .add('Omni Search', () => <OmniSearchStory />)
  .add('Radio Button', () => <RadioButtonStory />)
  .add('Search Filter', () => <SearchFilterStory />)
  .add('Select', () => <SelectStory />)
  .add('Switch', () => <SwitchStory />)
  .add('Textarea', () => <TextareaStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Navigation', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Breadcrumb', () => <BreadcrumbStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('Mobile Menu', () => <MobileMenuStory />)
  .add('Side Bar', () => <SideBarStory />);

storiesOf('Display', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Accordion', () => <AccordionStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Collapsible', () => <CollapsibleStory />)
  .add('Modal', () => <ModalStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('Pop Over', () => <PopoverStory />)
  .add('Slider', () => <SliderStory />)
  .add('Swipeable', () => <SwipeableStory />)
  .add('Tabs', () => <TabsStory />);

storiesOf('Application', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Gallery', () => <GalleryStory />)
  .add('Information', () => <InformationStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Job Overview', () => <JobOverviewStory />)
  .add('Stats', () => <StatsStory />);

storiesOf('Utilities', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Colors', () => <ColorStory />)
  .add('Devices Size', () => <DeviceStory />)
  .add('Glints Container', () => <GlintsContainerStory />);
