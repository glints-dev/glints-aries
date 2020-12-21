import React from 'react';
import { Story, Meta } from '@storybook/react';

import Accordion, { Props as AccordionProps } from './Accordion';
import { Props as AccordionPanelProps } from './AccordionPanel';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Display/Accordion',
  component: Accordion,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    label: {
      description: 'Sets the label for <Accordion.Panel />',
      control: {
        type: 'text',
      },
    },
    content: {
      description: 'Sets the content for <Accordion.Panel />',
      control: {
        type: 'text',
      },
    },
  },
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<AccordionProps & AccordionPanelProps> = ({
  iconPosition,
  label = 'What is Lorem Ipsum?',
  content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
}) => (
  <Accordion iconPosition={iconPosition}>
    <Accordion.Panel label={label} content={content} />
  </Accordion>
);

export const Interactive = Template.bind({});
Interactive.args = {
  iconPosition: 'left',
};

export const DifferentIconPosition = Template.bind({});
DifferentIconPosition.args = {
  iconPosition: 'right',
};
