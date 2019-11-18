import * as React from 'react';

import StorybookComponent from '../StorybookComponent';
import * as AllIcons from '../../src/General/Icon/components';

const props = {
  Icon: [
    {
      name: 'color',
      type: 'string',
      defaultValue: <code>black</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: 'Sets color for icon.',
    },
  ],
};

const IconStory = () => (
  <StorybookComponent
    title="Icon"
    code="import { AddCircleOutlineIcon } from 'glints-aries'"
    propsObject={props}
    usage={'<AddCircleOutlineIcon />'}
  >
    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px' }}>
      {Object.values(AllIcons)
        .sort()
        .map(Icon => (
          <div style={{ flex: '1 1 20%', margin: '1em' }} key={Icon.name}>
            <Icon />
            <p style={{ marginTop: '1em', fontSize: '12px' }}>
              <code style={{ fontSize: '14px' }}>{Icon.name}</code>
            </p>
          </div>
        ))}
    </div>
  </StorybookComponent>
);

export default IconStory;
