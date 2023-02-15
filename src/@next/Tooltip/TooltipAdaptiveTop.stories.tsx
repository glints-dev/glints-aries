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

const AdaptiveTopCenterTemplate: Story<TooltipProps> = args => (
  <>
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: '5px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="top-center-to-right-center"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>

      <div style={{ marginLeft: 'calc(100vw - 75px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="top-center-to-left-center"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ marginTop: '10px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="top-center-to-top-right"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
      <div style={{ marginTop: '10px', marginLeft: 'calc(100vw - 70px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="top-center-to-top-left"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
  </>
);

export const AdaptiveTopCenter = AdaptiveTopCenterTemplate.bind({});
AdaptiveTopCenter.args = {
  content: 'Tooltip',
  preferredPosition: 'top-center',
};

const AdaptiveTopLeftTemplate: Story<TooltipProps> = args => (
  <div style={{ display: 'flex', marginTop: '50px' }}>
    <div>
      <Tooltip {...args}>
        <Icon
          data-testid="top-left-to-top-right"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="top-left-to-top-center"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveTopLeft = AdaptiveTopLeftTemplate.bind({});
AdaptiveTopLeft.args = {
  content: 'Tooltip',
  preferredPosition: 'top-left',
};

const AdaptiveTopRightTemplate: Story<TooltipProps> = args => (
  <div
    style={{
      display: 'flex',
      marginTop: '50px',
      marginLeft: 'calc(100vw - 70px)',
    }}
  >
    <div>
      <Tooltip {...args}>
        <Icon
          data-testid="top-right-to-top-center"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="top-right-to-top-left"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveTopRight = AdaptiveTopRightTemplate.bind({});
AdaptiveTopRight.args = {
  content: 'Tooltip',
  preferredPosition: 'top-right',
};
