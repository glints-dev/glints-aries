import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Icon } from '../Icon';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

export default {
  title: '@next/Tooltip',
  component: Tooltip,
  decorators: [withGlintsPortalContainer],
  argTypes: {},
} as Meta;

const AdaptiveLeftMiddleTemplate: Story<TooltipProps> = args => (
  <>
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: '5px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="left-middle-to-right-middle"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: '20px', marginLeft: '5px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="left-middle-to-top-right"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
      <div style={{ marginTop: '20px', marginLeft: '15px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="left-middle-to-top-middle"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
  </>
);

export const AdaptiveLeftMiddle = AdaptiveLeftMiddleTemplate.bind({});
AdaptiveLeftMiddle.args = {
  content: 'Tooltip',
  preferredPosition: 'left-middle',
};

const AdaptiveLeftTopTemplate: Story<TooltipProps> = args => (
  <div style={{ display: 'flex', marginTop: '50px' }}>
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="left-top-to-top-right"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveLeftTop = AdaptiveLeftTopTemplate.bind({});
AdaptiveLeftTop.args = {
  content: 'Tooltip',
  preferredPosition: 'left-top',
};

const AdaptiveLeftBottomTemplate: Story<TooltipProps> = args => (
  <div
    style={{
      display: 'flex',
      marginTop: 'calc(100vh - 60px)',
      marginLeft: '100px',
    }}
  >
    <div>
      <Tooltip {...args}>
        <Icon
          data-testid="left-bottom-to-left-middle"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveLeftBottom = AdaptiveLeftBottomTemplate.bind({});
AdaptiveLeftBottom.args = {
  content: 'Tooltip',
  preferredPosition: 'left-bottom',
};
