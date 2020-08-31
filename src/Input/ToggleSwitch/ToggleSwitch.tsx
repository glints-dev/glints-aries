import * as React from 'react';
import classNames from 'classnames';

import { has } from 'lodash';

import { SecondaryColor } from '../../Utils/Colors';
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
}: ToggleSwitchProps) => {
  const [active, setActive] = React.useState(defaultActive);
  const iconColor = active ? SecondaryColor.actionblue : SecondaryColor.grey;
  const ActiveIcon = iconOptions ? iconOptions.active : null;
  const InactiveIcon = iconOptions ? iconOptions.inactive : null;
  const Icon = active ? ActiveIcon : InactiveIcon;

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
        {ActiveIcon && InactiveIcon && <Icon color={iconColor} />}
      </ToggleBall>
    </Toggle>
  );
};

ToggleSwitch.defaultProps = {
  defaultActive: false,
};

export default ToggleSwitch;
