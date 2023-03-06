import { Meta, Story } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button } from '../Button';
import { Popover } from '../Popover';
import { Menu, MenuProps } from './Menu';

(Menu as React.FunctionComponent<MenuProps>).displayName = 'Menu';

export default {
  title: '@next/Menu',
  component: Menu,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
} as Meta;

const options = [
  {
    active: false,
    disabled: false,
    id: '1',
    label: 'All status',
    value: 'All status',
  },
  {
    active: false,
    disabled: false,
    id: '2',
    label: 'Completed',
    value: 'Completed',
  },
  {
    active: false,
    disabled: false,
    id: '3',
    label: 'Pending',
    value: 'Pending',
  },
  {
    active: false,
    disabled: true,
    id: '4',
    label: 'Expired',
    value: 'Expired',
  },
  {
    active: false,
    disabled: false,
    id: '5',
    label: 'Cancelled',
    value: 'Cancelled',
  },
];
const BasicTemplate: Story<MenuProps> = args => {
  const [popoverActive, setPopoverActive] = useState(true);
  const [selected, setSelected] = useState([]);

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );
  const activator = <Button onClick={togglePopoverActive}>Basic Menu</Button>;

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={() => setPopoverActive(false)}
    >
      <Popover.Pane>
        <Menu
          {...args}
          title="Basic Menu"
          onChange={setSelected}
          selectedValues={selected}
        />
      </Popover.Pane>
    </Popover>
  );
};

export const Basic = BasicTemplate.bind({});

Basic.args = {
  options,
};
