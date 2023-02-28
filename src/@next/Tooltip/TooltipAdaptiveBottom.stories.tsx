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

const AdaptiveBottomCenterTemplate: Story<TooltipProps> = args => (
  <>
    <div style={{ display: 'flex', marginTop: 'calc(100vh - 70px)' }}>
      <div style={{ marginLeft: '5px' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="bottom-center-to-right-middle"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>

      <div style={{ marginLeft: 'calc(100vw - 75px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="bottom-center-to-left-middle"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
    <div style={{ display: 'flex', marginTop: '-55px' }}>
      <div>
        <Tooltip {...args}>
          <Icon
            data-testid="bottom-center-to-bottom-right"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
      <div style={{ marginBottom: '10px', marginLeft: 'calc(100vw - 75px)' }}>
        <Tooltip {...args}>
          <Icon
            data-testid="bottom-center-to-bottom-left"
            name="ri-information-line"
            height="24px"
            width="24px"
          />
        </Tooltip>
      </div>
    </div>
  </>
);

export const AdaptiveBottomCenter = AdaptiveBottomCenterTemplate.bind({});
AdaptiveBottomCenter.args = {
  content: 'Tooltip',
  preferredPosition: 'bottom-center',
};

const AdaptiveBottomLeftTemplate: Story<TooltipProps> = args => (
  <div style={{ display: 'flex', marginTop: '50px' }}>
    <div>
      <Tooltip {...args}>
        <Icon
          data-testid="bottom-left-to-bottom-right"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="bottom-left-to-bottom-center"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveBottomLeft = AdaptiveBottomLeftTemplate.bind({});
AdaptiveBottomLeft.args = {
  content: 'Tooltip',
  preferredPosition: 'bottom-left',
};

const AdaptiveBottomRightTemplate: Story<TooltipProps> = args => (
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
          data-testid="bottom-right-to-bottom-center"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
    <div style={{ marginLeft: '0' }}>
      <Tooltip {...args}>
        <Icon
          data-testid="bottom-right-to-bottom-left"
          name="ri-information-line"
          height="24px"
          width="24px"
        />
      </Tooltip>
    </div>
  </div>
);

export const AdaptiveBottomRight = AdaptiveBottomRightTemplate.bind({});
AdaptiveBottomRight.args = {
  content: 'Tooltip',
  preferredPosition: 'bottom-right',
};
