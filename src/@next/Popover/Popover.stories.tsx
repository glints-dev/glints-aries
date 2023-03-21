import { Meta, Story } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Popover, PopoverProps } from './Popover';

(Popover as React.FunctionComponent<PopoverProps>).displayName = 'Popover';

export default {
  title: '@next/Popover',
  component: Popover,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
  argTypes: {
    preferredPosition: {
      control: 'select',
      options: ['above', 'below', 'mostSpace'],
    },
    preferredAlignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
} as Meta;

const PopoverExample = (props: PopoverProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [popoverActive2, setPopoverActive2] = useState(false);
  const [popoverActive3, setPopoverActive3] = useState(false);
  const Suffix = <Icon name="ri-arrow-m-up-fill" />;

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );

  const togglePopoverActive2 = useCallback(
    () => setPopoverActive2(popoverActive => !popoverActive),
    []
  );

  const togglePopoverActive3 = useCallback(
    () => setPopoverActive3(popoverActive => !popoverActive),
    []
  );

  const example1Activator = <Button onClick={togglePopoverActive}>Show</Button>;
  const example2Activator = (
    <Button onClick={togglePopoverActive2}>Show</Button>
  );
  const example3Activator = (
    <Button onClick={togglePopoverActive3}>Show</Button>
  );
  return (
    <div
      style={{
        marginLeft: '100px',
        paddingTop: '150px',
        display: 'flex',
        gap: '50px',
      }}
    >
      <Popover
        {...props}
        active={popoverActive}
        activator={example1Activator}
        onClose={togglePopoverActive}
      >
        <Popover.Pane>
          <div style={{ padding: '10px' }}>
            <div>
              <Typography as="span" variant="subtitle1">
                Title
              </Typography>
            </div>
            <div>
              <Typography variant="body1">Description</Typography>
            </div>
            <div>
              <ButtonGroup>
                <Button>Label</Button> <PrimaryButton>Label</PrimaryButton>
              </ButtonGroup>
            </div>
          </div>
        </Popover.Pane>
      </Popover>
      <Popover
        {...props}
        active={popoverActive2}
        activator={example2Activator}
        onClose={togglePopoverActive2}
      >
        <Popover.Pane fixed>
          <Popover.Section>
            <Typography as="span" variant="subtitle2">
              AVAILABLE SALES CHANNEL
            </Typography>
          </Popover.Section>
        </Popover.Pane>
        <Popover.Pane>
          <div style={{ padding: '0px 16px' }}>
            <div>
              <Typography variant="body1">Online</Typography>
            </div>
            <div>
              <Typography variant="body1">Facebook</Typography>
            </div>
            <div>
              <Typography variant="body1">Shopify POS</Typography>
            </div>
          </div>
        </Popover.Pane>
      </Popover>
      <Popover
        {...props}
        active={popoverActive3}
        activator={example3Activator}
        onClose={togglePopoverActive3}
      >
        <Popover.Pane>
          <div style={{ padding: '10px' }}>
            <ButtonGroup>
              <Button>Action</Button>
              <Button>Action</Button>
              <Button icon={Suffix} iconPosition="right">
                Move to
              </Button>
            </ButtonGroup>
          </div>
        </Popover.Pane>
      </Popover>
    </div>
  );
};

const Template: Story<PopoverProps> = args => <PopoverExample {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  preferredPosition: 'mostSpace',
  preferredAlignment: 'center',
};

Interactive.parameters = {
  docs: {
    source: {
      code: `const [popoverActive, setPopoverActive] = useState(false);
      const [popoverActive2, setPopoverActive2] = useState(false);
      const [popoverActive3, setPopoverActive3] = useState(false);
      const Suffix = <Icon name="ri-arrow-m-up-fill" />;
    
      const togglePopoverActive = useCallback(
        () => setPopoverActive(popoverActive => !popoverActive),
        []
      );
    
      const togglePopoverActive2 = useCallback(
        () => setPopoverActive2(popoverActive => !popoverActive),
        []
      );
    
      const togglePopoverActive3 = useCallback(
        () => setPopoverActive3(popoverActive => !popoverActive),
        []
      );
    
      const example1Activator = <Button onClick={togglePopoverActive}>Show</Button>;
      const example2Activator = (
        <Button onClick={togglePopoverActive2}>Show</Button>
      );
      const example3Activator = (
        <Button onClick={togglePopoverActive3}>Show</Button>
      );
      return (
        <div
          style={{
            marginLeft: '100px',
            paddingTop: '200px',
            display: 'flex',
            gap: '50px',
          }}
        >
          <Popover
            {...props}
            active={popoverActive}
            activator={example1Activator}
            onClose={togglePopoverActive}
          >
            <Popover.Pane>
              <div style={{ padding: '10px' }}>
                <div>
                  <Typography as="span" variant="subtitle1">
                    Title
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">Description</Typography>
                </div>
                <div>
                  <ButtonGroup>
                    <Button>Label</Button> <PrimaryButton>Label</PrimaryButton>
                  </ButtonGroup>
                </div>
              </div>
            </Popover.Pane>
          </Popover>
          <Popover
            {...props}
            active={popoverActive2}
            activator={example2Activator}
            onClose={togglePopoverActive2}
          >
            <Popover.Pane>
              <Popover.Section>
                <Typography variant="subtitle2">AVAILABLE SALES CHANNEL</Typography>
              </Popover.Section>
            </Popover.Pane>
            <Popover.Pane>
              <div>
                <Typography variant="body1">Online</Typography>
              </div>
              <div>
                <Typography variant="body1">Facebook</Typography>
              </div>
              <div>
                <Typography variant="body1">Shopify POS</Typography>
              </div>
            </Popover.Pane>
          </Popover>
          <Popover
            {...props}
            active={popoverActive3}
            activator={example3Activator}
            onClose={togglePopoverActive3}
          >
            <Popover.Pane>
              <div style={{ padding: '10px' }}>
                <ButtonGroup>
                  <Button>Action</Button>
                  <Button>Action</Button>
                  <Button icon={Suffix} iconPosition="right">
                    Move to
                  </Button>
                </ButtonGroup>
              </div>
            </Popover.Pane>
          </Popover>
        </div>
      );`,
    },
    language: 'javascript',
    type: 'auto',
  },
};
