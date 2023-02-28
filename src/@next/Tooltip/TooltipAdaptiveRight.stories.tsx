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

const AdaptiveRightMiddleTemplate: Story<TooltipProps> = args => (
  <>
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: 'calc(100vw - 70px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="right-middle-to-left-middle"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: '20px', marginLeft: 'calc(100vw - 80px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="right-middle-to-top-center"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
      <div style={{ marginTop: '20px', marginLeft: '5px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="right-middle-to-top-left"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
  </>
);

export const AdaptiveRightMiddle = AdaptiveRightMiddleTemplate.bind({});
AdaptiveRightMiddle.args = {
  content: 'Tooltip',
  preferredPosition: 'right-middle',
};

const AdaptiveRightTopTemplate: Story<TooltipProps> = args => (
  <div
    style={{
      display: 'flex',
      marginTop: '50px',
      marginLeft: 'calc(100vw - 50px)',
    }}
  >
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="right-top-to-top-left"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveRightTop = AdaptiveRightTopTemplate.bind({});
AdaptiveRightTop.args = {
  content: 'Tooltip',
  preferredPosition: 'right-top',
};

const AdaptiveRightBottomTemplate: Story<TooltipProps> = args => (
  <div
    style={{
      display: 'flex',
      marginTop: '0',
      marginLeft: 'calc(100vw - 70px)',
    }}
  >
    <div>
      <Tooltip {...args}>
        <Icon
          data-testid="right-bottom-to-left-bottom"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveRightBottom = AdaptiveRightBottomTemplate.bind({});
AdaptiveRightBottom.args = {
  content: 'Tooltip',
  preferredPosition: 'right-bottom',
};
