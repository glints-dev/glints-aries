import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Typography } from '../Typography';
import { Collapse, CollapseProps } from './Collapse';
import { Badge } from '../Badge';
import { Neutral } from '../utilities/colors';
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
    <Typography as="span" variant="subtitle2" color={Neutral.B18}>
      Sample Content No {index}
    </Typography>
  );

  return (
    <>
      <Collapse {...args}>
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
        <Collapse.Item
          header="Sample Title 5"
          headerLeftExtra={<Badge>Neutral</Badge>}
        >
          {getItemContent(5)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 6"
          headerRightExtra={<Badge>Neutral</Badge>}
        >
          {getItemContent(6)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 7"
          headerRightExtra={<Icon name="ri-more" />}
        >
          {getItemContent(7)}
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 8"
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
          {getItemContent(8)}
        </Collapse.Item>
      </Collapse>
    </>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  hasBorder: true,
  indicator: 'left',
};
