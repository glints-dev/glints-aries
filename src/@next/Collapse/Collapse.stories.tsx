import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Typography } from '../Typography';
import { Collapse, CollapseProps } from './Collapse';
import { Badge } from '../Badge';
import { Icon } from '../Icon';

export default {
  title: '@next/Collapse',
  component: Collapse,
  decorators: [
    Story => <BaseContainer>{Story()}</BaseContainer>,
    withGlintsPortalContainer,
  ],
} as Meta;

const Template: Story<CollapseProps> = args => {
  const getItemContent = (index: number) => (
    <Typography as="span" variant="subtitle2">
      Sample Content No {index}
    </Typography>
  );

  return (
    <>
      <Badge>testtt</Badge>
      <Collapse name="TEST" {...args}>
        <Collapse.Item header="Sample Title 1">
          {getItemContent(1)}
        </Collapse.Item>
        <Collapse.Item header="Sample Title 2" defaultCollapsed={false}>
          {getItemContent(2)}
        </Collapse.Item>
        <Collapse.Item header="Sample Title 3" disabled={true}>
          {getItemContent(3)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 4"
          defaultCollapsed={false}
          disabled
        >
          {getItemContent(4)}
        </Collapse.Item>
        <Collapse.Item header="Sample Title 5" indicator="right">
          {getItemContent(5)}
        </Collapse.Item>
        <Collapse.Item header="Sample Title 6" indicator="none">
          {getItemContent(6)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 7"
          headerLeftExtra={<Badge>Neutral</Badge>}
          indicator="right"
        >
          {getItemContent(7)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 8"
          headerRightExtra={<Badge>Neutral</Badge>}
          indicator="none"
        >
          {getItemContent(8)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 9"
          headerRightExtra={<Icon name="ri-more" />}
          indicator="none"
        >
          {getItemContent(9)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 10"
          headerLeftExtra={<Badge>Neutral</Badge>}
          headerRightExtra={
            <>
              <Icon name="ri-more" />
              <Badge>AnotherBadge</Badge>
            </>
          }
          defaultCollapsed={false}
          indicator="right"
        >
          {getItemContent(10)}
        </Collapse.Item>
      </Collapse>
    </>
  );
};

export const Interactive = Template.bind({});
