import React, { useCallback, useState } from 'react';
import { Button } from '../../Button';
import { Popover } from '../../Popover';
import { Menu, MenuProps } from '../Menu';

interface PopoverMenuProps extends MenuProps {
  activatorLabel?: string;
}

export const PopoverMenu = ({
  activatorLabel = 'Menu',
  allowMultiple,
  ...props
}: PopoverMenuProps) => {
  const [popoverActive, setPopoverActive] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const togglePopoverActive = useCallback(
    () => setPopoverActive(popoverActive => !popoverActive),
    []
  );

  const handleSelect = ({ value }: { value: string }) => {
    if (!allowMultiple) {
      setSelectedOptions([value]);
      return;
    }

    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
      return;
    }

    setSelectedOptions(selectedOptions.filter(option => option !== value));
  };

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
        <Menu
          {...props}
          allowMultiple={allowMultiple}
          onClick={handleSelect}
          selectedValues={selectedOptions}
        />
      </Popover.Pane>
    </Popover>
  );
};
