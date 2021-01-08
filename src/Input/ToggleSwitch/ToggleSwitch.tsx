import * as React from 'react';
import classNames from 'classnames';

import { SecondaryColor } from '../../Utils/Colors';
import { Toggle, ToggleBall } from './Styles';

export interface ToggleSwitchProps {
  active?: boolean;
  defaultActive?: boolean;
  iconOptions?: {
    active: React.ReactType;
    inactive: React.ReactType;
  };
  onChange?: (active: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  active,
  defaultActive,
  iconOptions,
  onChange,
  className,
  ...defaultProps
}: ToggleSwitchProps) => {
  const [innerActive, setInnerActive] = React.useState(defaultActive);
  const iconColor = innerActive
    ? SecondaryColor.actionblue
    : SecondaryColor.grey;
  const ActiveIcon = iconOptions ? iconOptions.active : null;
  const InactiveIcon = iconOptions ? iconOptions.inactive : null;
  const Icon = innerActive ? ActiveIcon : InactiveIcon;

  const isControlled = typeof active !== 'undefined';
  const isActive = isControlled ? active : innerActive;

  const handleClick = () => {
    const newActiveState = !isActive;
    setInnerActive(newActiveState);
    if (onChange) onChange(newActiveState);
  };

  return (
    <Toggle
      aria-checked={isActive}
      role="switch"
      className={classNames('aries-toggle-switch', className)}
      onClick={handleClick}
      active={isActive}
      {...defaultProps}
    >
      <ToggleBall active={isActive}>
        {ActiveIcon && InactiveIcon && <Icon color={iconColor} />}
      </ToggleBall>
    </Toggle>
  );
};

ToggleSwitch.defaultProps = {
  defaultActive: false,
};

export default ToggleSwitch;
