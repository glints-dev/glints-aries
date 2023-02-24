import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Card, CardProps } from './Card';
import { Typography } from '../Typography';
import { Red } from '../utilities/colors';
import styled from 'styled-components';

(Card as React.FunctionComponent<CardProps>).displayName = 'Card';

export default {
  title: '@next/Card',
  component: Card,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<CardProps> = args => {
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };
  return (
    <Card
      {...args}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    >
      <Card.Section>
        This is a section
        <Card.Section>This is a subsection</Card.Section>
        <Card.Section>This is a subsection</Card.Section>
      </Card.Section>
      <Card.Section>This is a section</Card.Section>
    </Card>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  heading: 'Heading',
  subheading: 'SubHeading',
  actionsAlignment: 'right',
};
Interactive.parameters = {
  docs: {
    source: {
      code: `
      <Card
      heading="Heading"
      primaryAction={{
        action: () => {console.log('Primary action!')},
        label: 'Yes'
      }}
      secondaryAction={{
        action: () => {console.log('Secondary action!')},
        label: 'No'
      }}
      subheading="Subheading"
    >
      <Card.Section>
          This is a section
        <Card.Section>
            This is a subsection
        </Card.Section>
        <Card.Section>
            This is a subsection
        </Card.Section>
      </Card.Section>
      <Card.Section>
        This is a section
      </Card.Section>
    </Card>
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const NoActionsTemplate: Story<CardProps> = args => {
  return (
    <Card {...args}>
      <Card.Section>
        This is a section
        <Card.Section>This is a subsection</Card.Section>
        <Card.Section>This is a subsection</Card.Section>
      </Card.Section>
      <Card.Section>This is a section</Card.Section>
    </Card>
  );
};

export const NoAction = NoActionsTemplate.bind({});
NoAction.args = {
  heading: 'Heading',
};

const PrimaryActionOnlyTemplate: Story<CardProps> = args => {
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  return (
    <Card {...args} primaryAction={primaryAction}>
      <Card.Section>
        This is a section
        <Card.Section>This is a subsection</Card.Section>
        <Card.Section>This is a subsection</Card.Section>
      </Card.Section>
      <Card.Section>This is a section</Card.Section>
    </Card>
  );
};

export const PrimaryActionOnly = PrimaryActionOnlyTemplate.bind({});
PrimaryActionOnly.args = {
  heading: 'Heading',
};

const SecondaryActionOnlyTemplate: Story<CardProps> = args => {
  const secondaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  return (
    <Card {...args} secondaryAction={secondaryAction}>
      <Card.Section>
        This is a section
        <Card.Section>This is a subsection</Card.Section>
        <Card.Section>This is a subsection</Card.Section>
      </Card.Section>
      <Card.Section>This is a section</Card.Section>
    </Card>
  );
};

export const SecondaryActionOnly = SecondaryActionOnlyTemplate.bind({});
SecondaryActionOnly.args = {
  heading: 'Heading',
};

const CustomHeadingSubHeadingTemplate: Story<CardProps> = args => {
  const StyledTypography = styled(Typography)`
    margin: 0;
  `;

  const heading = (
    <StyledTypography variant="subtitle1" color={Red.B74}>
      Custom Heading
    </StyledTypography>
  );

  const subheading = (
    <StyledTypography variant="subtitle2" color={Red.B65}>
      Custom Sub Heading
    </StyledTypography>
  );

  return (
    <Card {...args} heading={heading} subheading={subheading}>
      <Card.Section>This is a section</Card.Section>
    </Card>
  );
};

export const CustomHeadingSubHeading = CustomHeadingSubHeadingTemplate.bind({});
