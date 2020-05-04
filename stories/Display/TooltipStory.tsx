import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import { ETooltipPosition } from '../../src/Utils/StyleConfig';
import Tooltip from '../../src/Display/Tooltip';
import Tag from '../../src/General/Tag';

const props = {
  Tooltip: [
    {
      name: 'text',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets text for Tooltip.',
    },
    {
      name: 'position',
      type: 'string',
      defaultValue: <code>{ETooltipPosition.TOP}</code>,
      possibleValue: (
        <code>
          {ETooltipPosition.BOTTOM} | {ETooltipPosition.LEFT} |{' '}
          {ETooltipPosition.RIGHT}
        </code>
      ),
      require: 'no',
      description: 'Sets position of Tooltip to be shown. ',
    },
  ],
};

const TooltipStory = () => (
  <StorybookComponent
    title="Tooltip"
    code="import { Tooltip } from 'glints-aries'"
    propsObject={props}
    usage={`<Tooltip text="Click here to apply as Software Engineer at Glints">
  <Component />
</Tooltip>`}
  >
    <Tooltip
      text="Click here to apply as Software Engineer at Glints"
      position={ETooltipPosition.BOTTOM}
    >
      <Tag>Software Engineer</Tag>
    </Tooltip>
  </StorybookComponent>
);

export default TooltipStory;
