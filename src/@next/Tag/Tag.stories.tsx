import { Meta, StoryFn } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Tag, TagProps } from './Tag';
import { Blue } from '../utilities/colors';

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
    onClick: {
      description:
        'A function callback to pass in to when the tag is clicked, if this is supplied, the tag will be clickable',
      control: {
        type: null,
      },
    },
    textColor: {
      description: 'Text color of the tag',
      control: 'color',
    },
    disabled: {
      description:
        'A prop to disable the tag, only works when onClick is supplied',
      control: null,
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

const DefaultTemplate: StoryFn<TagProps> = args => {
  return <Tag {...args}>Basic Tag</Tag>;
};

const RemoveableTemplate: StoryFn<TagProps> = () => {
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

const ClickableTemplate: StoryFn<TagProps> = args => {
  return (
    <Tag textColor={args.textColor} onClick={() => window.alert('Clicked')}>
      Clickable Tag
    </Tag>
  );
};

const ClickableDisabledTemplate: StoryFn<TagProps> = args => {
  return (
    <Tag
      textColor={args.textColor}
      onClick={() => window.alert('Clicked')}
      disabled
    >
      Clickable Tag - Disabled
    </Tag>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  onRemove: undefined,
  onClick: undefined,
};

export const Removeable = RemoveableTemplate.bind({});

Removeable.args = {};

export const Clickable = ClickableTemplate.bind({});

Clickable.args = {
  onRemove: null,
  textColor: Blue.S99,
};

export const ClickableDisabled = ClickableDisabledTemplate.bind({});
ClickableDisabled.args = {
  onRemove: null,
  textColor: Blue.S99,
  disabled: true,
};
