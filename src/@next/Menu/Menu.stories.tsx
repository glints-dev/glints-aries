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
    active: true,
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
    active: true,
    disabled: false,
    id: '5',
    label: 'Cancelled',
    value: 'Cancelled',
  },
];
const DefaultTemplate: Story<MenuProps> = args => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [selected, setSelected] = useState([]);

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );
  const activator = <Button onClick={togglePopoverActive}>Show</Button>;

  return (
    <Popover active={popoverActive} activator={activator}>
      <Menu
        {...args}
        title="Basic Menu"
        onChange={setSelected}
        selected={selected}
      />
    </Popover>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  options,
};
