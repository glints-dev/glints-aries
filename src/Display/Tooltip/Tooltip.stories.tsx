import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Tooltip, StringTooltip, HtmlTooltip } from './Tooltip';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import Tag from '../../General/Tag/BasicTag';

const Container = styled(BaseContainer)`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const defaultText = 'Lorem Ipsum';

export default {
  title: 'General/Tooltip',
  component: Tooltip,
  decorators: [Story => <Container>{Story()}</Container>],
} as Meta;

const StringTooltipTemplate: Story<StringTooltip> = ({ text, ...args }) => (
  <Tooltip {...args} text={text || defaultText}>
    <Tag>Glints Aries</Tag>
  </Tooltip>
);

const HtmlTooltipTemplate: Story<HtmlTooltip> = ({ text, ...args }) => (
  <Tooltip {...args} text={text || defaultText}>
    <Tag>Glints Aries</Tag>
  </Tooltip>
);

export const Interactive = StringTooltipTemplate.bind({});
Interactive.args = {
  text: defaultText,
  position: 'top',
};

export const DifferentPosition = StringTooltipTemplate.bind({});
DifferentPosition.args = {
  position: 'left',
};

export const WithHtmlContent = HtmlTooltipTemplate.bind({});
WithHtmlContent.args = {
  text: <b>Hello World</b>,
  textAsString: 'Hello World',
};
