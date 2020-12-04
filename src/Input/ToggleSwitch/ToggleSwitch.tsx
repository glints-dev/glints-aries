import * as React from 'react';
import classNames from 'classnames';

import { SecondaryColor } from '../../Utils/Colors';
import { Toggle, ToggleBall } from './Styles';

export interface ToggleSwitchProps {
  /** This will determine whether or not the component renders with an active or inactive state at the start. */
  defaultActive?: boolean;
  /** The icon components that will be used in both active and inactive states. Both icons have to be defined when opting to use this. */
  iconOptions?: {
    active: React.ReactType;
    inactive: React.ReactType;
  };
  /** Called when the state of the toggle has been changed. Returns true or false depending on whether the toggle is active or inactive. */
  onChange?: (active: boolean) => void;
  className?: string;
}

/** The <code>className</code> and <code>...defaultProps</code> are passed to the main toggle container. */
export const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  defaultActive = false,
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

export default ToggleSwitch;
