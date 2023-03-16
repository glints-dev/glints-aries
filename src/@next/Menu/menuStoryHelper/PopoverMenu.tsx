import React, { useCallback, useState } from 'react';
import { Button } from '../../Button';
import { Popover } from '../../Popover';
import { Menu, MenuProps } from '../Menu';

interface PopoverMenuProps extends MenuProps {
  activatorLabel?: string;
}

export const PopoverMenu = ({
  activatorLabel = 'Menu',
  ...props
}: PopoverMenuProps) => {
  const [popoverActive, setPopoverActive] = useState(true);
  const [selected, setSelected] = useState([]);

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );
  const activator = (
    <Button onClick={togglePopoverActive}>{activatorLabel}</Button>
  );

  return (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={() => setPopoverActive(false)}
    >
      <Popover.Pane>
        <Menu {...props} onClick={setSelected} selectedValues={selected} />
      </Popover.Pane>
    </Popover>
  );
};
