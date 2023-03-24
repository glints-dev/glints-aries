import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Menu, MenuProps } from './Menu';
import { PopoverMenu } from './menuStoryHelper/PopoverMenu';

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
const BasicTemplate: Story<MenuProps> = args => (
  <PopoverMenu activatorLabel="Basic Menu" {...args} />
);
export const Basic = BasicTemplate.bind({});

Basic.args = {
  options,
  title: 'Basic Menu',
};

Basic.parameters = {
  docs: {
    source: {
      code: `
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
      
      const [popoverActive, setPopoverActive] = useState(true);
      const [selected, setSelected] = useState([]);
    
      const togglePopoverActive = useCallback(
        () => setPopoverActive(popoverActive => !popoverActive),
        []
      );
      const activator = (
        <Button onClick={togglePopoverActive}>Basic Menu</Button>
      );
    
      return (
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={() => setPopoverActive(false)}
        >
          <Popover.Pane>
            <Menu title='Basic Menu' onClick={setSelected} selectedValues={selected} />
          </Popover.Pane>
        </Popover>
      );
      `,
    },
  },
};

const AllowMultipleTemplate: Story<MenuProps> = args => (
  <PopoverMenu activatorLabel="Allow Multiple Menu" {...args} />
);

export const AllowMultiple = AllowMultipleTemplate.bind({});

AllowMultiple.args = {
  options,
  title: 'Allow Multiple Menu',
  allowMultiple: true,
};

AllowMultiple.parameters = {
  docs: {
    source: {
      code: `
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
      
      const [popoverActive, setPopoverActive] = useState(true);
      const [selected, setSelected] = useState([]);
    
      const togglePopoverActive = useCallback(
        () => setPopoverActive(popoverActive => !popoverActive),
        []
      );
      const activator = (
        <Button onClick={togglePopoverActive}>Allow Multiple Menu</Button>
      );
    
      return (
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={() => setPopoverActive(false)}
          allowMultiple
        >
          <Popover.Pane>
            <Menu title='Allow Multiple Menu' allowMultiple={true} onClick={setSelected} selectedValues={selected} />
          </Popover.Pane>
        </Popover>
      );
      `,
    },
  },
};

const sections = [
  {
    title: 'Most commonly used',
    options: [
      { label: 'Cambodia', value: 'Cambodia' },
      { label: 'Indonesia', value: 'Indonesia' },
      { label: 'Malaysia', value: 'Malaysia' },
    ],
  },
  {
    title: 'Countries',
    options: [
      { label: 'Philippines', value: 'Philippines' },
      { label: 'Singapore', value: 'Singapore' },
      { label: 'Taiwan', value: 'Taiwan' },
      { label: 'Thailand', value: 'Thailand' },
      { label: 'Vietnam', value: 'Vietnam' },
    ],
  },
];

const WithSectionsTemplate: Story<MenuProps> = args => (
  <PopoverMenu activatorLabel="Sections Menu" {...args} />
);

export const WithSections = WithSectionsTemplate.bind({});

WithSections.args = {
  sections,
  allowMultiple: true,
};
