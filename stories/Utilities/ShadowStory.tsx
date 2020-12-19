import * as React from 'react';

import StorybookComponent from '../StorybookComponent';
import { StorybookTable } from '../StorybookTable';
import { Shadows, ShadowValueType } from '../../src/Utils/Shadows';
import styled from 'styled-components';

import { Box } from '../../src/Layout/Box';

type Data = {
  level: string;
  value: {
    up: ShadowValueType;
    down: ShadowValueType;
  };
  usage: string;
};

const ShadowBox = styled(Box)`
  background: '#fff';
  height: 60px;
  width: 60px;
`;

const dataSource = [
  {
    level: 1,
    value: Shadows[1],
    usage: 'Elements that uses shadow by default',
  },
  {
    level: 2,
    value: Shadows[2],
    usage: 'Elements in hovered state',
  },
  {
    level: 3,
    value: Shadows[3],
    usage: 'Sticky elements, dropdown elements',
  },
  {
    level: 4,
    value: Shadows[4],
    usage: 'Alerts',
  },
];

const columns = [
  { title: 'Elevation level', dataIndex: 'level' },
  {
    title: 'Value',
    dataIndex: 'value',
    // eslint-disable-next-line react/display-name
    render: ({ value }: Data) => {
      const { up, down } = value;

      return (
        <div>
          {down && (
            <Box mt={16}>
              down: <code>{down}</code>
            </Box>
          )}
          {up && (
            <div>
              up: <code>{up}</code>
            </div>
          )}
        </div>
      );
    },
  },
  {
    title: 'Example of shadow down',
    dataIndex: 'example',
    // eslint-disable-next-line react/display-name
    render: ({ value }: Data) => <ShadowBox boxShadow={value.down} />,
  },
  {
    title: 'Recommended usage',
    dataIndex: 'usage',
  },
];

const usage = `import { Shadows, Box } from 'glints-aries';

// use with Box component
<Box boxShadow={Shadows[1].down} />

// use with box-shadow property
const Card = styled.div\`
  box-shadow: \$\{Shadows[1].down\};
\`
`;

const ShadowStory = () => (
  <StorybookComponent
    title="Shadow"
    code="import { Shadows } from 'glints-aries'"
    usage={usage}
  >
    <StorybookTable dataSource={dataSource} columns={columns} />
  </StorybookComponent>
);

export default ShadowStory;
