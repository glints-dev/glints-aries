import * as React from 'react';

import classNames from 'classnames';

import { ArrowDownIcon } from '../../General/Icon/components';

import {
  PopoverContainer,
  PopoverContentWrapper,
  PopoverChildren,
  PopoverIcon,
  PopOverContent,
  PopoverItemWrapper,
} from './PopoverStyle';

const Popover = ({ className, children, content }: Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOnClick = () => setIsOpen(!isOpen);

  const handleClickOutside = () => setIsOpen(false);

  return (
    <PopoverContainer
      className={classNames('aries-popover', className)}
      onBlur={handleClickOutside}
      aria-haspopup="true"
      aria-busy="false"
      tabIndex={0}
    >
      <PopoverChildren data-testid="popover-children" onClick={handleOnClick}>
        {children}
      </PopoverChildren>
      <PopoverContentWrapper onClick={handleOnClick}>
        <PopoverItemWrapper>
          <PopoverIcon>
            <ArrowDownIcon color="black" />
          </PopoverIcon>
          {isOpen && <PopOverContent>{content}</PopOverContent>}
        </PopoverItemWrapper>
      </PopoverContentWrapper>
    </PopoverContainer>
  );
};

interface Props {
  className?: string;
  children: React.ReactNode;
  content: React.ReactNode;
}

export default Popover;
