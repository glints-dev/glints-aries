import * as React from 'react';
import classNames from 'classnames';

import { SecondaryColor, Greyscale } from '../../Utils/Colors';
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

ToggleSwitch.defaultProps = {
  defaultActive: false,
};

export default ToggleSwitch;
