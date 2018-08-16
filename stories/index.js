// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import Provider from './Provider';

import { Button } from '../src/Button';
import GlintsContainer from '../src/Style/GlintsContainer';

import IntroStory from './IntroStory';
import AccordionStory from './AccordionStory';
import BadgeStory from './BadgeStory';
import BlockquoteStory from './BlockquoteStory';
import BrandStory from './BrandStory';
import ButtonStory from './ButtonStory';
import CheckboxStory from './CheckboxStory';
import CollapsibleStory from './CollapsibleStory';
import ColorStory from './ColorStory';
import ContainerStory from './ContainerStory';
import DeviceStory from './DeviceStory';
import DividerStory from './DividerStory';
import DropdownStory from './DropdownStory';
import GlintsContainerStory from './GlintsContainerStory';
import HeadingStory from './HeadingStory';
import IconStory from './IconStory';
import InformationStory from './InformationStory';
import JobCardStory from './JobCardStory';
import JobOverviewStory from './JobOverviewStory';
import LabelStory from './LabelStory';
import LoadingStory from './LoadingStory';
import MobileMenuStory from './MobileMenuStory';
import OmniSearchStory from './OmniSearchStory';
import PointingModalStory from './PointingModalStory';
import PopoverStory from './PopoverStory';
import ProfilePictureStory from './ProfilePictureStory';
import PsychedelicTextStory from './PsychedelicTextStory';
import RadioButtonStory from './RadioButtonStory';
import SearchStory from './SearchStory';
import SearchFilterStory from './SearchFilterStory';
import SliderStory from './SliderStory';
import StatsStory from './StatsStory';
import SwipeableStory from './SwipeableStory';
import SwitchStory from './SwitchStory';
import TextFieldStory from './TextFieldStory';

storiesOf('Components', module)
  .addDecorator(story => (
    <Provider>
      <GlintsContainer>
        {React.createElement(story)}
      </GlintsContainer>
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
  .add('Button', () => <ButtonStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('Collapsible', () => <CollapsibleStory />)
  .add('Job Card', () => <JobCardStory />)
  .add('Job Overview', () => <JobOverviewStory />)
  .add('Divider', () => <DividerStory />)
  .add('Dropdown', () => <DropdownStory />)
  .add('Heading', () => <HeadingStory />)
  .add('Icon', () => <IconStory />)
  .add('Information', () => <InformationStory />)
  .add('Label', () => <LabelStory />)
  .add('Loading', () => <LoadingStory />)
  .add('Omni Search', () => <OmniSearchStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('Pop Over', () => <PopoverStory />)
  .add('Profile Picture', () => <ProfilePictureStory />)
  .add('Psychedelic Text', () => <PsychedelicTextStory />)
  .add('Radio Button', () => <RadioButtonStory />)
  .add('Search', () => <SearchStory />)
  .add('Search Filter', () => <SearchFilterStory />)
  .add('Slider', () => <SliderStory />)
  .add('Stats', () => <StatsStory />)
  .add('Switch', () => <SwitchStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Mobile Components', module)
  .addDecorator(story => (
    <Provider>
      <GlintsContainer>
        {React.createElement(story)}
      </GlintsContainer>
    </Provider>
  ))
  .add('Menu', () => <MobileMenuStory />)
  .add('Swipeable', () => <SwipeableStory />);

storiesOf('Utilities', module)
  .addDecorator(story => (
    <Provider>
      <GlintsContainer>
        {React.createElement(story)}
      </GlintsContainer>
    </Provider>
  ))
  .add('Colors', () => <ColorStory />)
  .add('Container', () => <ContainerStory />)
  .add('Devices Size', () => <DeviceStory />)
  .add('Glints Container', () => <GlintsContainerStory />);
