import * as React from 'react';

import { AddIcon, TrashIcon } from '../../General/Icon/components';
import { StartIconContainer, EndIconContainer } from './TagStyle';

import { AddTag } from './ActionTags/AddTag';
import { ResetTag } from './ActionTags/ResetTag';
import BasicTag from './BasicTag';

const Tag: React.FunctionComponent<Props> = ({
  variant,
  action,
  children,
  icon,
  block,
  outline,
  onClick,
  ...resetProps
}) => {
  if (variant === 'action') {
    switch (action) {
      case 'add':
        return (
          <AddTag onClick={onClick} {...resetProps}>
            <StartIconContainer>
              <AddIcon />
            </StartIconContainer>
            {children}
          </AddTag>
        );
      case 'reset':
        return (
          <ResetTag onClick={onClick} {...resetProps}>
            <StartIconContainer>
              <TrashIcon />
            </StartIconContainer>
            {children}
          </ResetTag>
        );
      default:
    }
  } else if (variant === 'button') {
    return (
      <BasicTag {...resetProps}>
        {children}
        <EndIconContainer>{icon}</EndIconContainer>
      </BasicTag>
    );
  }
  return (
    <BasicTag block={block} outline={outline} {...resetProps}>
      {children}
    </BasicTag>
  );
};

interface BasicTagProps {
  block?: boolean;
  outline?: boolean;
}

interface ButtonTagProps {
  icon?: React.ReactNode;
}

interface ActionTagProps {
  action?: string;
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

interface Props extends BasicTagProps, ButtonTagProps, ActionTagProps {
  children: React.ReactNode;
  variant?: string;
}

export default Tag;
