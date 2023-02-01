import { Meta, Story } from '@storybook/react';
import React, { useCallback, useState } from 'react';

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
  const [selectedTags, setSelectedTags] = useState([
    'Years of Experience: 0 to 3 Years, 3 to 5 Years',
    'Expected Salary: $1.000.000 to $3.000.000',
    'Current Location: Agats, Indonesia',
  ]);

  const removeTag = useCallback(
    tag => () => {
      setSelectedTags(previousTags =>
        previousTags.filter(previousTag => previousTag !== tag)
      );
    },
    []
  );

  const tagMarkup = selectedTags.map(option => (
    <Tag
      style={{ marginRight: '4px' }}
      key={option}
      onRemove={removeTag(option)}
    >
      {option}
    </Tag>
  ));

  return <>{tagMarkup}</>;
};

export const Default = DefaultTemplate.bind({});

Default.args = {};

export const Removeable = RemoveableTemplate.bind({});

Removeable.args = {};
