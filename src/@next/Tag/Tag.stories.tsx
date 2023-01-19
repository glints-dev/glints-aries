import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Tag, TagProps } from './Tag';

(Tag as React.FunctionComponent<TagProps>).displayName = 'Tag';

const defaultText = 'Basic Tag';

export default {
  title: '@next/Tag',
  component: Tag,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args}>{defaultText}</Tag>;

export const Interactive = Template.bind({});

Interactive.args = {};
