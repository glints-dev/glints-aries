import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Bar, BarProps } from './Bar';
import { Colors, Typography } from '..';
import { PopoverMenu } from '../Menu/menuStoryHelper/PopoverMenu';
import { StyledCustomHeadingWrapper } from './BarStyle';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

(Bar as React.FunctionComponent<BarProps>).displayName = 'Bar';

export default {
  title: '@next/Bar',
  component: Bar,
  decorators: [
    Story => (
      <>
        <BaseContainer style={{ height: '200px' }}>{Story()}</BaseContainer>
      </>
    ),
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<BarProps> = args => {
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };
  const tertiaryAction = {
    label: 'No',
    action: () => console.log('Tertiary action!'),
  };
  return (
    <Bar
      {...args}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      tertiaryAction={tertiaryAction}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  heading: 'Heading',
  subheading: 'SubHeading',
  position: 'top',
};
Interactive.parameters = {
  docs: {
    source: {
      code: `
      <Bar
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
      tertiaryAction={{
        action: () => {console.log('Tertiary action!')},
        label: 'No'
      }}
    />
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const PrimaryActionOnlyTemplate: Story<BarProps> = args => {
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  return <Bar {...args} primaryAction={primaryAction} />;
};

export const PrimaryActionOnly = PrimaryActionOnlyTemplate.bind({});
PrimaryActionOnly.args = {
  heading: 'Heading',
};

const CustomHeadingTemplate: Story<BarProps> = args => {
  const headingMarkup = (
    <StyledCustomHeadingWrapper>
      <Typography as="span">Status:</Typography>
      <Typography as="span" color={Colors.Orange.S86}>
        DRAFT
      </Typography>
    </StyledCustomHeadingWrapper>
  );
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Yes'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('No'),
  };

  return (
    <Bar
      {...args}
      heading={headingMarkup}
      subheading={'Autosaved to draft'}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
    />
  );
};

export const CustomHeading = CustomHeadingTemplate.bind({});

const BackButtonTemplate: Story<BarProps> = args => {
  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };
  const tertiaryAction = {
    label: 'No',
    action: () => console.log('Tertiary action!'),
  };
  return (
    <Bar
      {...args}
      heading={'Page Title'}
      subheading={'Additional Content'}
      primaryAction={primaryAction}
      secondaryAction={secondaryAction}
      tertiaryAction={tertiaryAction}
      showBackButton={true}
      onBack={() => console.log('back button clicked')}
    />
  );
};

export const BackButton = BackButtonTemplate.bind({});
BackButton.parameters = {
  docs: {
    source: {
      code: `
      <Bar
        {...args}
        heading={'Page Title'}
        subheading={'Additional Content'}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        tertiaryAction={tertiaryAction}
        showBackButton={true}
        onBack={() => console.log('back button clicked')}
      />
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const options = [
  {
    active: false,
    disabled: false,
    id: '1',
    label: 'All status',
    value: 'All status',
  },
  {
    active: false,
    disabled: false,
    id: '2',
    label: 'Completed',
    value: 'Completed',
  },
  {
    active: false,
    disabled: false,
    id: '3',
    label: 'Pending',
    value: 'Pending',
  },
];

const customActionGroupTemplate: Story<BarProps> = args => {
  const customActionGroup = (
    <>
      <PopoverMenu
        title="Select"
        options={options}
        activatorLabel="Basic Menu"
        {...args}
      />
    </>
  );

  return (
    <Bar
      {...args}
      heading={'Page Title 2'}
      subheading={'Additional Content'}
      customActionGroup={customActionGroup}
    />
  );
};

export const customActionGroup = customActionGroupTemplate.bind({});
customActionGroup.parameters = {
  docs: {
    source: {
      code: `
      const customActionGroup = (
        <>
          <PopoverMenu
            title="Select"
            options={options}
            activatorLabel="Basic Menu"
            {...args}
          />
        </>
      );
    
      return (
        <Bar
          {...args}
          heading={'Page Title 2'}
          subheading={'Additional Content'}
          customActionGroup={customActionGroup}
        />
      );
    `,
    },
    language: 'javascript',
    type: 'auto',
  },
};
