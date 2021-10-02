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
  block = false,
  outline = false,
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
    <BasicTag block={block} outline={outline} onClick={onClick} {...resetProps}>
      {children}
    </BasicTag>
  );
};

interface BasicTagProps {
  /** Set Tag into block style. */
  block?: boolean;
  /** Set Tag into outline style. */
  outline?: boolean;
}

interface ButtonTagProps {
  icon?: React.ReactNode;
}

export type TagActionType = 'add' | 'reset';
interface ActionTagProps {
  /** (Only for tags with variant=action). Chooses which kind of action the tag will indicate. */
  action?: TagActionType;
  /** A function triggered when icon or action tag is clicked. */
  onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

export type TagVariantType = 'button' | 'action';
export interface Props extends BasicTagProps, ButtonTagProps, ActionTagProps {
  children: React.ReactNode;
  /** button tags usually show a single piece of information, while action tags are elements in a list (e.g. a list of selected options). */
  variant?: TagVariantType;
}

export default Tag;
