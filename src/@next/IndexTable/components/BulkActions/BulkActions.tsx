import React from 'react';
import { Button } from '../../../Button';
import { ButtonGroup } from '../../../ButtonGroup';
import { Icon } from '../../../Icon';
import { Popover, PopoverProps } from '../../../Popover';

export interface Action {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string;
  /** Callback when an action takes place */
  onAction?(): void;
}

interface BulkActionsProps extends Omit<PopoverProps, 'bulkActions'> {
  bulkActions: Action[];
}

export const BulkActions = ({
  active,
  activator,
  onClose,
  ...props
}: BulkActionsProps) => {
  const Suffix = <Icon name="ri-arrow-m-up-fill" />;

  return (
    <div>
      <Popover
        {...props}
        active={active}
        activator={activator}
        onClose={onClose}
      >
        <Popover.Pane>
          <div style={{ padding: '10px' }}>
            <ButtonGroup>
              <Button>Action</Button>
              <Button icon={Suffix} iconPosition="right">
                Move to
              </Button>
            </ButtonGroup>
          </div>
        </Popover.Pane>
      </Popover>
    </div>
  );
};
