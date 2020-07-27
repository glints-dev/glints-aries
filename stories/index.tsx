import '@glints/poppins';
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Provider from './Provider';

import StorybookStyle from '../src/Utils/StorybookStyle';

// Candidate
import IntroStory from './IntroStory';
import AccordionStory from './Display/AccordionStory';
import AlertStory from './General/AlertStory';
import AutoCompleteStory from './Input/AutoCompleteStory';
import BadgeStory from './General/BadgeStory';
import BlockquoteStory from './Display/BlockquoteStory';
import BrandStory from './General/BrandStory';
import BreadcrumbStory from './Navigation/BreadcrumbStory';
import ButtonStory from './General/ButtonStory';
import CheckboxStory from './Input/CheckboxStory';
import CollapsibleStory from './Display/CollapsibleStory';
import ColorStory from './Utilities/ColorStory';
import DatepickerStory from './Input/DatepickerStory';
import DeviceStory from './Utilities/DeviceStory';
import DividerStory from './General/DividerStory';
import DropdownStory from './Navigation/DropdownStory';
import DrawerStory from './Navigation/DrawerStory';
import GalleryStory from './Application/GalleryStory';
import GridStory from './Layout/GridStory';
import GlintsContainerStory from './Utilities/GlintsContainerStory';
import HeadingStory from './General/HeadingStory';
import IconStory from './General/IconStory';
import InformationStory from './Application/InformationStory';
import LoadingStory from './General/LoadingStory';
import ModalStory from './Display/ModalStory';
import NumberInputStory from './Input/NumberInputStory';
import OmniSearchStory from './Input/OmniSearchStory';
import PointingModalStory from './Display/PointingModalStory';
import PopoverStory from './Display/PopoverStory';
import ProfilePictureStory from './General/ProfilePictureStory';
import PsychedelicTextStory from './General/PsychedelicTextStory';
import RadioButtonStory from './Input/RadioButtonStory';
import SearchFilterStory from './Input/SearchFilterStory';
import SelectStory from './Input/SelectStory';
import SliderStory from './Display/SliderStory';
import StorybookComponentStory from './Utilities/StorybookComponentStory';
import SwipeableStory from './Display/SwipeableStory';
import TabsStory from './Display/TabsStory';
import TagStory from './General/TagStory';
import TextareaStory from './Input/TextareaStory';
import TextFieldStory from './Input/TextFieldStory';
import ToastStory from './Display/ToastStory';
import TooltipStory from './Display/TooltipStory';
import TypographyStory from './General/TypographyStory';

// Employers
import EmployersBlockquoteStory from './Display/EmployersBlockquoteStory';
import ToggleSwitchStory from './Input/ToggleSwitchStory';

storiesOf('Introduction', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Getting started', () => <IntroStory />);

storiesOf('General', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
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
  .add('Tag', () => <TagStory />)
  .add('Typography', () => <TypographyStory />);

storiesOf('Layout', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Grid', () => <GridStory />);

storiesOf('Input', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Auto Complete', () => <AutoCompleteStory />)
  .add('Checkbox', () => <CheckboxStory />)
  .add('Datepicker', () => <DatepickerStory />)
  .add('NumberInput', () => <NumberInputStory />)
  .add('Omni Search', () => <OmniSearchStory />)
  .add('Radio Button', () => <RadioButtonStory />)
  .add('Search Filter', () => <SearchFilterStory />)
  .add('Select', () => <SelectStory />)
  .add('Toggle Switch', () => <ToggleSwitchStory />)
  .add('Textarea', () => <TextareaStory />)
  .add('Text Field', () => <TextFieldStory />);

storiesOf('Navigation', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Breadcrumb', () => <BreadcrumbStory />)
  .add('Drawer', () => <DrawerStory />)
  .add('Dropdown', () => <DropdownStory />);

storiesOf('Display', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Accordion', () => <AccordionStory />)
  .add('Blockquote', () => <BlockquoteStory />)
  .add('Collapsible', () => <CollapsibleStory />)
  .add('Employers Blockquote', () => <EmployersBlockquoteStory />)
  .add('Modal', () => <ModalStory />)
  .add('Pointing Modal', () => <PointingModalStory />)
  .add('Pop Over', () => <PopoverStory />)
  .add('Slider', () => <SliderStory />)
  .add('Swipeable', () => <SwipeableStory />)
  .add('Tabs', () => <TabsStory />)
  .add('Toast', () => <ToastStory />)
  .add('Tooltip', () => <TooltipStory />);

storiesOf('Application', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Gallery', () => <GalleryStory />)
  .add('Information', () => <InformationStory />);

storiesOf('Utilities', module)
  .addDecorator(story => (
    <Provider>
      <StorybookStyle>{story()}</StorybookStyle>
    </Provider>
  ))
  .add('Colors', () => <ColorStory />)
  .add('Device Size', () => <DeviceStory />)
  .add('Glints Container', () => <GlintsContainerStory />)
  .add('Storybook Template', () => <StorybookComponentStory />);
