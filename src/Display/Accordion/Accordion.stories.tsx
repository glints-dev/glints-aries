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

const defaultPanels = [
  {
    label: 'What is Lorem Ipsum?',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

const Template: Story<AccordionProps & AccordionPanelProps> = ({
  iconPosition = 'left',
  panels = defaultPanels,
}) => (
  <Accordion iconPosition={iconPosition}>
    {panels.map(({ label, content }: { label: string; content: string }) => {
      return <Accordion.Panel key={label} label={label} content={content} />;
    })}
  </Accordion>
);

export const Interactive = Template.bind({});

export const DifferentIconPosition = Template.bind({});
DifferentIconPosition.args = {
  iconPosition: 'right',
};

export const MultiplePanels = Template.bind({});
MultiplePanels.args = {
  panels: [
    {
      label: 'What is Lorem Ipsum?',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      label: 'What is Love?',
      content:
        'Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love.',
    },
  ],
};
