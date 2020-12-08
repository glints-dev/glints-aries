import * as React from 'react';
import classNames from 'classnames';

import { SecondaryColor, Greyscale } from '../../Utils/Colors';
import { Toggle, ToggleBall } from './Styles';

export interface ToggleSwitchProps {
  active?: boolean;
  /** This will determine whether or not the component renders with an active or inactive state at the start. */
  defaultActive?: boolean;
  /** The icon components that will be used in both active and inactive states. Both icons have to be defined when opting to use this. */
  iconOptions?: {
    active: React.ReactType;
    inactive: React.ReactType;
  };
  /** Called when the state of the toggle has been changed. Called with true or false depending on whether the toggle became active or inactive. */
  onChange?: (active: boolean) => void;
  className?: string;
}

/** The <code>className</code> and <code>...defaultProps</code> are passed to the main toggle container. */
export const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  active,
  defaultActive = false,
  iconOptions,
  onChange,
  className,
  ...defaultProps
}: ToggleSwitchProps) => {
  const [innerActive, setInnerActive] = React.useState(active || defaultActive);

  const iconColor = innerActive ? SecondaryColor.actionblue : Greyscale.grey;
  const ActiveIcon = iconOptions ? iconOptions.active : null;
  const InactiveIcon = iconOptions ? iconOptions.inactive : null;
  const Icon = innerActive ? ActiveIcon : InactiveIcon;
  const isControlled = typeof active === 'boolean';

  React.useEffect(() => {
    if (!isControlled) {
      return;
    }

    if (active !== innerActive) {
      setInnerActive(active);
    }
  }, [active, innerActive, isControlled]);

  const handleClick = () => {
    const newActiveState = !innerActive;

    if (!isControlled) {
      setInnerActive(newActiveState);
    }

    if (onChange) onChange(newActiveState);
  };

  return (
    <Toggle
      aria-checked={innerActive}
      role="switch"
      className={classNames('aries-toggle-switch', className)}
      onClick={handleClick}
      active={innerActive}
      {...defaultProps}
    >
      <ToggleBall active={innerActive}>
        {ActiveIcon && InactiveIcon && <Icon color={iconColor} />}
      </ToggleBall>
    </Toggle>
  );
};

export default ToggleSwitch;
