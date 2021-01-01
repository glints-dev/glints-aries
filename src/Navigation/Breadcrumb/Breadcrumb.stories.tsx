import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Breadcrumb, Props } from './Breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<Props> = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/jobs">Jobs</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <a href="/software-engineer">Software Engineer</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export const Default = Template.bind({});
