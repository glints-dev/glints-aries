import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ActionList, ActionListProps } from './ActionList';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { ActionListItem, Icon, ActionListSection } from '..';

export default {
  title: '@next/ActionList',
  component: ActionList,
  decorators: [withGlintsPortalContainer],
  argTypes: {},
} as Meta;

const Template: Story<ActionListProps> = () => {
  const activator = <Button>Show</Button>;
  const actions: ActionListItem[] = [
    { content: 'Import', action: () => console.log('Import') },
    { content: 'Export', action: () => console.log('Export') },
    { content: 'Duplicate', action: () => console.log('Duplicate') },
    { content: 'Share', action: () => console.log('Share') },
  ];
  return (
    <Popover
      active
      activator={activator}
      onClose={() => {
        console.log('close');
      }}
    >
      <ActionList items={actions} />
    </Popover>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
Interactive.parameters = {
  docs: {
    source: {
      code: `
      const activator = <Button>Show</Button>;
      const actions: ActionListItem[] = [
        { content: 'Import', action: () => console.log('Import') },
        { content: 'Export', action: () => console.log('Export') },
        { content: 'Duplicate', action: () => console.log('Duplicate') },
        { content: 'Share', action: () => console.log('Share') },
      ];
      return (
        <Popover
          active
          activator={activator}
          onClose={() => {
            console.log('close');
          }}
        >
          <ActionList items={actions} />
        </Popover>
      );
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithIconsTemplate: Story<ActionListProps> = () => {
  const activator = <Button>Show</Button>;
  const actions: ActionListItem[] = [
    { content: 'Add', icon: <Icon name="ri-add-circle-line" /> },
    { content: 'Move Up', icon: <Icon name="ri-arrow-up-line" /> },
    { content: 'Reply', icon: <Icon name="ri-reply-line" /> },
  ];
  return (
    <Popover
      active
      activator={activator}
      onClose={() => {
        console.log('close');
      }}
    >
      <ActionList items={actions} />
    </Popover>
  );
};

export const WithIcons = WithIconsTemplate.bind({});
WithIcons.args = {};
WithIcons.parameters = {
  docs: {
    source: {
      code: `
      const activator = <Button>Show</Button>;
      const actions: ActionListItem[] = [
        { content: 'Add', icon: <Icon name="ri-add-circle-line" /> },
        { content: 'Move Up', icon: <Icon name="ri-arrow-up-line" /> },
        { content: 'Reply', icon: <Icon name="ri-reply-line" /> },
      ];
      return (
        <Popover
          active
          activator={activator}
          onClose={() => {
            console.log('close');
          }}
        >
          <ActionList items={actions} />
        </Popover>
      );      
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithDescriptionsTemplate: Story<ActionListProps> = () => {
  const activator = <Button>Show</Button>;
  const actions: ActionListItem[] = [
    {
      content: 'Import',
      description: 'Import blogs published to your Online Store',
    },
    {
      content: 'Export',
      description: 'Export blogs published to your Online Store',
    },
    {
      content: 'Duplicate',
      description: 'Duplicate blogs published to your Online Store',
    },
  ];
  return (
    <Popover
      active
      activator={activator}
      onClose={() => {
        console.log('close');
      }}
    >
      <ActionList items={actions} />
    </Popover>
  );
};

export const WithDescriptions = WithDescriptionsTemplate.bind({});
WithDescriptions.args = {};
WithDescriptions.parameters = {
  docs: {
    source: {
      code: `
      const activator = <Button>Show</Button>;
      const actions: ActionListItem[] = [
        {
          content: 'Import',
          description: 'Import blogs published to your Online Store',
        },
        {
          content: 'Export',
          description: 'Export blogs published to your Online Store',
        },
        {
          content: 'Duplicate',
          description: 'Duplicate blogs published to your Online Store',
        },
      ];
      return (
        <Popover
          active
          activator={activator}
          onClose={() => {
            console.log('close');
          }}
        >
          <ActionList items={actions} />
        </Popover>
      );
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithSectionsTemplate: Story<ActionListProps> = () => {
  const activator = <Button>Show</Button>;
  const sections: ActionListSection[] = [
    {
      title: 'Sections',
      items: [
        { content: 'Add' },
        { content: 'Move Up' },
        { content: 'Reply', disabled: true },
      ],
    },
    {
      title: 'Section With Icons',
      items: [
        { content: 'Add', icon: <Icon name="ri-add-circle-line" /> },
        { content: 'Move Up', icon: <Icon name="ri-arrow-up-line" /> },
        {
          content: 'Reply',
          icon: <Icon name="ri-reply-line" />,
          disabled: true,
        },
      ],
    },
    {
      title: 'Section With Descriptions',
      items: [
        {
          content: 'Import',
          description: 'Import blogs published to your Online Store',
        },
        {
          content: 'Export',
          description: 'Export blogs published to your Online Store',
        },
        {
          content: 'Duplicate',
          description: 'Duplicate blogs published to your Online Store',
          disabled: true,
        },
      ],
    },
  ];
  return (
    <Popover
      active
      fullHeight
      activator={activator}
      onClose={() => {
        console.log('close');
      }}
    >
      <ActionList sections={sections} />
    </Popover>
  );
};

export const WithSections = WithSectionsTemplate.bind({});
WithSections.args = {};
WithSections.parameters = {
  docs: {
    source: {
      code: `
      const activator = <Button>Show</Button>;
      const sections: ActionListSection[] = [
        {
          title: 'Sections',
          items: [{ content: 'Add' }, { content: 'Move Up' }, { content: 'Reply', disabled: true }],
        },
        {
          title: 'Section With Icons',
          items: [
            { content: 'Add', icon: <Icon name="ri-add-circle-line" /> },
            { content: 'Move Up', icon: <Icon name="ri-arrow-up-line" /> },
            { content: 'Reply', icon: <Icon name="ri-reply-line" />, disabled: true },
          ],
        },
        {
          title: 'Section With Descriptions',
          items: [
            {
              content: 'Import',
              description: 'Import blogs published to your Online Store',
            },
            {
              content: 'Export',
              description: 'Export blogs published to your Online Store',
            },
            {
              content: 'Duplicate',
              description: 'Duplicate blogs published to your Online Store',
              disabled: true
            },
          ],
        },
      ];
      return (
        <Popover
          active
          fullHeight
          activator={activator}
          onClose={() => {
            console.log('close');
          }}
        >
          <ActionList sections={sections} />
        </Popover>
      );
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};
