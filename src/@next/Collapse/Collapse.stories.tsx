import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
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
  return (
    <>
      <Collapse {...args}>
        <Collapse.Item header="Sample Title 1">
          Sample Content No 1
        </Collapse.Item>
        <Collapse.Item header="Sample Title 2" defaultCollapsed={false}>
          Sample Content No 2
        </Collapse.Item>
        <Collapse.Item header="Sample Title 3" disabled={true}>
          Sample Content No 3
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 4"
          defaultCollapsed={false}
          disabled
        >
          Sample Content No 4
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 5"
          headerLeftExtra={<Badge>Neutral</Badge>}
        >
          Sample Content No 5
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 6"
          headerRightExtra={<Badge>Neutral</Badge>}
        >
          Sample Content No 6
        </Collapse.Item>
        <Collapse.Item
          header="Sample Title 7"
          headerRightExtra={<Icon name="ri-more" />}
        >
          Sample Content No 7
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
          temporibus nisi distinctio necessitatibus rem esse, maiores
          dignissimos numquam voluptate amet laudantium in quasi doloribus, qui
          sapiente ad aperiam magnam praesentium?
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
