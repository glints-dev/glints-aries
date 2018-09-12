// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import Provider from './Provider';

import { Button } from '../src/Button';
import StorybookStyle from '../src/Style/StorybookStyle';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
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
import LabelStory from './LabelStory';
import LoadingStory from './LoadingStory';
import MobileMenuStory from './MobileMenuStory';
import ModalStory from './ModalStory';
import OmniSearchStory from './OmniSearchStory';
import PointingModalStory from './PointingModalStory';
import PopoverStory from './PopoverStory';
import ProfilePictureStory from './ProfilePictureStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import RadioButtonStory from './RadioButtonStory';
import SearchStory from './SearchStory';
import SearchFilterStory from './SearchFilterStory';
import SelectStory from './SelectStory';
import SliderStory from './SliderStory';
import StatsStory from './StatsStory';
import SwipeableStory from './SwipeableStory';
import SwitchStory from './SwitchStory';
import TabsStory from './TabsStory';
import TagStory from './TagStory';
import TextFieldStory from './TextFieldStory';
import LanguageSelectStory from './LanguageSelectStory';

storiesOf('Components', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .addDecorator(withKnobs)
  .add('Introduction', () => <IntroStory />)
  .add('Knob', () => {
    const options = ['primary', 'secondary', 'ghost', 'link'];
    const colors = ['red', 'yellow', 'blue'];
    const value = select('Type', options, 'primary');
    const calorValue = select('Theme', colors, 'red');
    return (
      <Button variant={value} theme={calorValue}>
        Knob
      </Button>
    );
  })
  .add('Accordion', () => <AccordionStory />)
  .add('Badge', () => <BadgeStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Brand', () => <BrandStory />)
  .add('Breadcrumb', () => <BreadcrumbStory />)
  .add('Button', () => <ButtonStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('Collapsible', () => <CollapsibleStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Job Overview', () => <JobOverviewStory />)
  .add('Divider', () => <DividerStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('Gallery', () => <GalleryStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Icon', () => <IconStory />)
  .add('Information', () => <InformationStory />)
  .add('Label', () => <LabelStory />)
  .add('Loading', () => <LoadingStory />)
  .add('Modal', () => <ModalStory />)
  .add('Omni Search', () => <OmniSearchStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('Pop Over', () => <PopoverStory />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Radio Button', () => <RadioButtonStory />)
  .add('Search', () => <SearchStory />)
  .add('Search Filter', () => <SearchFilterStory />)
  .add('Select', () => <SelectStory />)
  .add('Slider', () => <SliderStory />)
  .add('Stats', () => <StatsStory />)
  .add('Switch', () => <SwitchStory />)
  .add('Tabs', () => <TabsStory />)
  .add('Tag', () => <TagStory />)
  .add('Text Field', () => <TextFieldStory />)
  .add('Side Bar', () => <SideBarStory />)
  .add('test', () => <LanguageSelectStory />);

storiesOf('Mobile Components', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>
        {React.createElement(story)}
      </StorybookStyle>
    </Provider>
  ))
  .add('Menu', () => <MobileMenuStory />)
  .add('Swipeable', () => <SwipeableStory />);

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
