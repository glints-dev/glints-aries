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
    if (allowMultiple) {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    } else {
      setSelectedOptions([value]);
    }
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
