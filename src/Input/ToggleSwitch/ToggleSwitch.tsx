import * as React from 'react';
import classNames from 'classnames';

import { has } from 'lodash';

import { SecondaryColor } from '../../Style/Colors';
import Icon from '../../General/Icon';
import { Toggle, ToggleBall } from './Styles';

export interface ToggleSwitchProps {
  defaultActive?: boolean;
  iconOptions?: {
    active: string;
    inactive: string;
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
          <Icon
            color={active ? SecondaryColor.actionblue : SecondaryColor.grey}
            name={active ? iconOptions.active : iconOptions.inactive}
          />
        )}
      </ToggleBall>
    </Toggle>
  );
};

ToggleSwitch.defaultProps = {
  defaultActive: false,
};

export default ToggleSwitch;
