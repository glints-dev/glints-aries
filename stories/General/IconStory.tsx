import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Icon from '../../src/General/Icon';

import { ICONS } from '../../src/Utils/IconLibrary';

const props = {
  Icon: [
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      possibleValue: 'based on the list above',
      require: 'yes',
      description: '',
    },
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
    code="import { Icon } from 'glints-aries'"
    propsObject={props}
    usage={'<Icon name="add" color="black" />'}
  >
    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px' }}>
      {Object.keys(ICONS).sort().map(data => (
        <div style={{ flex: '1 1 20%', margin: '1em' }} key={data}>
          <Icon name={data.toLowerCase().replace(/-/g, '_')} color="black" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>{data.toLowerCase().replace(/_/g, '-')}</code>
          </p>
        </div>
      ))}
    </div>
  </StorybookComponent>
);

export default IconStory;
