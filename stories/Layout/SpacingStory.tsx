import * as React from 'react';

import StorybookComponent from '../StorybookComponent';
import { StorybookTable } from '../StorybookTable';
import { SecondaryColor } from '../../src/Utils/Colors';
import { Spacing } from '../../src/Layout/Spacing';

type Data = {
  value: number;
  usage: string;
};

const dataSource: Data[] = Object.values(Spacing)
  .sort(function(a, b) {
    return b - a;
  })
  .map(value => {
    return {
      value: value,
      usage: value > 64 ? 'Layout' : 'Element Layout',
    };
  });

const columns = [
  { title: 'Value', dataIndex: 'value' },
  {
    title: 'Example',
    dataIndex: 'example',
    // eslint-disable-next-line react/display-name
    render: (data: Data) => (
      <div
        style={{
          width: `${data.value}px`,
          height: `${data.value}px`,
          background: SecondaryColor.violet,
        }}
      />
    ),
  },
  {
    title: 'Recommended usage',
    dataIndex: 'usage',
  },
];

const SpacingStory = () => (
  <StorybookComponent title="Spacing" usage="...">
    <StorybookTable dataSource={dataSource} columns={columns} />
  </StorybookComponent>
);

export default SpacingStory;
