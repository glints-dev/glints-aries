import * as React from 'react';
import classNames from 'classnames';

import { has } from 'lodash';

import { SecondaryColor } from '../../Style/Colors';
import { Toggle, ToggleBall } from './Styles';

export interface ToggleSwitchProps {
  defaultActive?: boolean;
  iconOptions?: {
    active: React.ReactType;
    inactive: React.ReactType;
  };
  onChange?: (active: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  defaultActive,
  iconOptions,
  onChange,
  className,
  ...defaultProps
}) => {
  const [active, setActive] = React.useState(defaultActive);
  const iconColor = active ? SecondaryColor.actionblue : SecondaryColor.grey;
  const Icon = active ? iconOptions.active : iconOptions.inactive;

  return (
    <Toggle
      aria-checked={active}
      role="switch"
      className={classNames('aries-toggle-switch', className)}
      onClick={() => {
        const newActiveState = !active;
        setActive(newActiveState);
        if (onChange) onChange(newActiveState);
      }}
      active={active}
      {...defaultProps}
    >
      <ToggleBall active={active}>
        {has(iconOptions, 'active') && has(iconOptions, 'inactive') && (
          <Icon color={iconColor} />
        )}
      </ToggleBall>
    </Toggle>
  );
};

ToggleSwitch.defaultProps = {
  defaultActive: false,
};

export default ToggleSwitch;
