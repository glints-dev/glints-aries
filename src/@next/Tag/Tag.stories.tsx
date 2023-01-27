import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Tag, TagProps } from './Tag';

(Tag as React.FunctionComponent<TagProps>).displayName = 'Tag';

export default {
  title: '@next/Tag',
  component: Tag,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    value: {
      description:
        'A value to supply, required when onRemove function is supplied',
      control: {
        type: null,
      },
    },
    onRemove: {
      description:
        'A function callback to pass in to when the remove icon is pressed',
      control: {
        type: null,
      },
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'Tags represent a set of interactive keywords that help label, organize, and categorize objects',
      },
    },
  },
} as Meta;

const DefaultTemplate: Story<TagProps> = () => {
  return <Tag>Basic Tag</Tag>;
};

const RemoveableTemplate: Story<TagProps> = () => {
  const [removedTagText, setRemoveTagText] = useState('');

  return (
    <>
      <Tag
        value={'removeable tag value'}
        onRemove={(value: string) => {
          setRemoveTagText(
            `on remove function is clicked, with argument of '${value}'`
          );
        }}
      >
        Tag
      </Tag>
      <div>{removedTagText}</div>
    </>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {};

export const Removeable = RemoveableTemplate.bind({});

Removeable.args = {};
