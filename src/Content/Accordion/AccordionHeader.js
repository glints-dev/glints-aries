/* @flow */

import React, { Fragment } from 'react';
import { AccordionHeaderWrapper } from '../../Style/AccordionStyle';
import { Icon } from '../../General/Icon';

const AccordionHeader = (props: Props) => {
  const {
    children,
    isOpen,
    title,
    className,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <AccordionHeaderWrapper className={className} isOpen={isOpen} {...defaultProps}>
        <p>
          {title}
        </p>
        <Icon name={isOpen ? 'arrow-back' : 'arrow-down'} size="15" color="black" />
      </AccordionHeaderWrapper>

      {isOpen
        && (
          <Fragment>
            {children}
          </Fragment>
        )
      }
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  title: string,
  isOpen: boolean,
  className: string,
}

export default AccordionHeader;
