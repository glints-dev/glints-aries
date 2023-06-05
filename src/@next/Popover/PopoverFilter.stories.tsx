/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Popover } from './Popover';
import { PopoverProps } from 'polaris-glints';
import { OutlineButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { CheckboxGroup } from './popoverStoryHelper/CheckboxGroup';
import { Typography } from '../Typography';
import { SalarySelector } from './popoverStoryHelper/SalarySelector';
import { Icon } from '../Icon';

(Popover as React.FunctionComponent<PopoverProps>).displayName = 'Popover';

export default {
  title: '@next/Popover as Filter',
  component: Popover,
  decorators: [
    Story => (
      <BaseContainer>
        {Story()}
        <div id="glints-portal-container"></div>
      </BaseContainer>
    ),
  ],
  argTypes: {},
} as Meta;

const cities = {
  Indonesia: ['Jakarta', 'Bandung', 'Bali'],
  Malaysia: ['Kuala Lumpur', 'Ipoh', 'Penang'],
  Singapore: ['Singapore'],
};

const PopoverAsFilterExample = () => {
  const [popoverCityActive, setPopoverCityActive] = useState(false);
  const [popoverSalaryActive, setPopoverSalaryActive] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [salaryFrom, setSalaryFrom] = useState(0);
  const [salaryTo, setSalaryTo] = useState(0);

  const Suffix = <Icon name="ri-arrow-m-down-fill" />;
  const togglePopoverCityActive = useCallback(
    () => setPopoverCityActive(popoverActive => !popoverActive),
    []
  );

  const toggleSalaryActive = useCallback(
    () => setPopoverSalaryActive(popoverActive => !popoverActive),
    []
  );

  const cityActivator = (
    <OutlineButton
      onClick={togglePopoverCityActive}
      icon={Suffix}
      iconPosition="right"
    >
      City
    </OutlineButton>
  );
  const salaryActivator = (
    <OutlineButton
      onClick={toggleSalaryActive}
      icon={Suffix}
      iconPosition="right"
    >
      Salary
    </OutlineButton>
  );

  const handleCityChanged = (action: 'Add' | 'Remove', cities: string[]) => {
    if (action === 'Add') {
      const selected = new Set([...selectedCities, ...cities]);
      setSelectedCities(Array.from(selected));
      return;
    }
    setSelectedCities(selectedCities.filter(sc => !cities.includes(sc)));
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      <ButtonGroup segmented isButtonWrapped>
        <Popover
          active={popoverCityActive}
          activator={cityActivator}
          autofocusTarget="first-node"
          onClose={togglePopoverCityActive}
          fullWidth
          fitContent
        >
          <Popover.Pane fixed>
            <Popover.Section>
              <Typography as="span" variant="subtitle2">
                Select Cities
              </Typography>
            </Popover.Section>
          </Popover.Pane>
          <Popover.Pane>
            <div style={{ padding: '10px' }}>
              {Object.keys(cities).map((country: string) => {
                return (
                  <CheckboxGroup
                    key={country}
                    country={country}
                    // @ts-ignore
                    cities={cities[country]}
                    onChanged={handleCityChanged}
                  />
                );
              })}
            </div>
          </Popover.Pane>
        </Popover>
        <Popover
          active={popoverSalaryActive}
          activator={salaryActivator}
          autofocusTarget="first-node"
          onClose={toggleSalaryActive}
          fullWidth
          fitContent
        >
          <Popover.Pane fixed>
            <Popover.Section>
              <Typography as="span" variant="caption">
                Salary
              </Typography>
            </Popover.Section>
          </Popover.Pane>
          <div>
            <SalarySelector
              onFromChanged={setSalaryFrom}
              onToChanged={setSalaryTo}
            />
          </div>
        </Popover>
      </ButtonGroup>
      <div style={{ marginTop: '10px' }}>
        <Typography as="span" variant="caption">
          Selected cities: {selectedCities.join(',')}
        </Typography>
      </div>
      <div>
        <Typography as="span" variant="caption">
          Selected salary range: {new Intl.NumberFormat().format(salaryFrom)} to{' '}
          {new Intl.NumberFormat().format(salaryTo)}
        </Typography>
      </div>
    </div>
  );
};

const Template: Story = () => <PopoverAsFilterExample />;

export const Interactive = Template.bind({});
Interactive.args = {};
Interactive.parameters = {
  docs: {
    source: {
      code: `
      import { Popover } from 'Popover';
      import { OutlineButton } from '../Button';
      import { ButtonGroup } from '../ButtonGroup';
      import { CheckboxGroup } from './popoverStoryHelper/CheckboxGroup';
      import { Typography } from '../Typography';
      import { SalarySelector } from './popoverStoryHelper/SalarySelector';
      import { Icon } from '../Icon';

      const cities = {
        Indonesia: ['Jakarta', 'Bandung', 'Bali'],
        Malaysia: ['Kuala Lumpur', 'Ipoh', 'Penang'],
        Singapore: ['Singapore'],
      };
      
      const [popoverCityActive, setPopoverCityActive] = useState(false);
      const [popoverSalaryActive, setPopoverSalaryActive] = useState(false);
      const [selectedCities, setSelectedCities] = useState([]);
      const [salaryFrom, setSalaryFrom] = useState(0);
      const [salaryTo, setSalaryTo] = useState(0);
    
      const Suffix = <Icon name="ri-arrow-m-down-fill" />;
      const togglePopoverCityActive = useCallback(
        () => setPopoverCityActive(popoverActive => !popoverActive),
        []
      );
    
      const toggleSalaryActive = useCallback(
        () => setPopoverSalaryActive(popoverActive => !popoverActive),
        []
      );
    
      const cityActivator = (
        <OutlineButton
          onClick={togglePopoverCityActive}
          icon={Suffix}
          iconPosition="right"
        >
          City
        </OutlineButton>
      );
      const salaryActivator = (
        <OutlineButton
          onClick={toggleSalaryActive}
          icon={Suffix}
          iconPosition="right"
        >
          Salary
        </OutlineButton>
      );
    
      const handleCityChanged = (action: 'Add' | 'Remove', cities: string[]) => {
        if (action === 'Add') {
          const selected = new Set([...selectedCities, ...cities]);
          setSelectedCities(Array.from(selected));
          return;
        }
        setSelectedCities(selectedCities.filter(sc => !cities.includes(sc)));
      };
    
      return (
        <div style={{ marginLeft: '10px' }}>
          <ButtonGroup segmented isButtonWrapped>
            <Popover
              active={popoverCityActive}
              activator={cityActivator}
              autofocusTarget="first-node"
              onClose={togglePopoverCityActive}
            >
              <Popover.Pane fixed>
                <Popover.Section>
                  <Typography as="span" variant="subtitle2">
                    Select Cities
                  </Typography>
                </Popover.Section>
              </Popover.Pane>
              <Popover.Pane>
                <div style={{ padding: '10px' }}>
                  {Object.keys(cities).map((country: string) => {
                    return (
                      <CheckboxGroup
                        key={country}
                        country={country}
                        cities={cities[country]}
                        onChanged={handleCityChanged}
                      />
                    );
                  })}
                </div>
              </Popover.Pane>
            </Popover>
            <Popover
              active={popoverSalaryActive}
              activator={salaryActivator}
              autofocusTarget="first-node"
              onClose={toggleSalaryActive}
              fullWidth
            >
              <Popover.Pane fixed>
                <Popover.Section>
                  <Typography as="span" variant="caption">
                    Salary
                  </Typography>
                </Popover.Section>
              </Popover.Pane>
              <div>
                <SalarySelector
                  onFromChanged={setSalaryFrom}
                  onToChanged={setSalaryTo}
                />
              </div>
            </Popover>
          </ButtonGroup>
          <div style={{ marginTop: '10px' }}>
            <Typography as="span" variant="caption">
              Selected cities: {selectedCities.join(',')}
            </Typography>
          </div>
          <div>
            <Typography as="span" variant="caption">
              Selected salary range: {new Intl.NumberFormat().format(salaryFrom)} to{' '}
              {new Intl.NumberFormat().format(salaryTo)}
            </Typography>
          </div>
        </div>
      );`,
    },
    language: 'javascript',
    type: 'auto',
  },
};
