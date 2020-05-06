import * as React from 'react';

import { AddIcon, TrashIcon } from '../../General/Icon/components';
import {
  StartIconContainer,
  EndIconContainer,
} from '../../Style/General/TagStyle';

import { AddTag } from './AddTag';
import { ResetTag } from './ResetTag';
import BasicTag from './BasicTag';

const Tag: React.FunctionComponent<{
  variant?: string;
  action?: string;
  block?: boolean;
  outline?: boolean;
  border?: string;
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  icon?: React.ReactNode;
}> = ({ variant, action, children, icon, onClick, ...resetProps }) => {
  if (variant === 'action') {
    switch (action) {
      case 'add':
        return (
          <AddTag onClick={onClick}>
            <StartIconContainer>
              <AddIcon />
            </StartIconContainer>
            {children}
          </AddTag>
        );
      case 'reset':
        return (
          <ResetTag onClick={onClick}>
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
      <BasicTag onClick={onClick}>
        {children}
        <EndIconContainer>{icon}</EndIconContainer>
      </BasicTag>
    );
  }
  return <BasicTag {...resetProps}>{children}</BasicTag>;
};

export default Tag;
