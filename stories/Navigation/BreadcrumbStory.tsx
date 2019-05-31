import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Breadcrumb from '../../src/Navigation/Breadcrumb';

const props = {
  Breadcrumb: [
    {
      name: 'active',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'yes',
      description: 'Sets the current position on Breadcrumb.',
    },
  ],
};

const BreadcrumbStory = () => (
  <StorybookComponent
    title="Breadcrumb"
    code="import { Breadcrumb } from 'glints-aries'"
    propsObject={props}
    usage={`<Breadcrumb>
  <Breadcrumb.Item>
    <a href="/home">Home</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="/jobs">Jobs</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item active>
    <a href="/software-engineer">
      Software Engineer
    </a>
  </Breadcrumb.Item>
</Breadcrumb>`}
  >
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
  </StorybookComponent>
);

export default BreadcrumbStory;
