import React, { HTMLAttributes, FC, useState, ReactNode } from 'react';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import { ArrowDownIcon } from '../../General/Icon/components';

import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleBody,
} from './CollapsibleStyle';

export const Collapsible: FC<Props> = ({
  label,
  children,
  className,
  isOpen,
  ...defaultProps
}) => {
  const [isOpenInternal, setIsOpenInternal] = useState<boolean>(
    isUndefined(isOpen) ? true : isOpen
  );

  const toggle = () => {
    setIsOpenInternal(!isOpenInternal);
  };

  return (
    <CollapsibleContainer
      className={classNames('aries-collapsible', className)}
      tabIndex={0}
      onClick={toggle}
      data-testid="collapsible-container"
      {...defaultProps}
    >
      <CollapsibleContent tabIndex={-1}>
        <CollapsibleHeader
          className="collapsible-title"
          role="tab"
          aria-expanded={isOpenInternal}
          isOpen={isOpenInternal}
        >
          {label}
          <ArrowDownIcon color="#000000" />
        </CollapsibleHeader>
        {isOpenInternal && (
          <CollapsibleBody
            className="collapsible-content"
            data-testid="collapsible-content"
            onClick={e => e.stopPropagation()}
          >
            {children}
          </CollapsibleBody>
        )}
      </CollapsibleContent>
    </CollapsibleContainer>
  );
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  isOpen?: boolean;
}

export default Collapsible;
