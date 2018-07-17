/* @flow */

import React, { Fragment } from 'react';
import { AccordionHeaderWrapper, AccordionItemWrapper } from './../Style/AccordionStyle';
import { Icons } from './../Icon';

const AccordionHeader = (props: Props) => {
  const { 
    children, 
    isOpen, 
    title, 
    className,
    ...propsDefault 
  } = props;

  return (
    <Fragment>
      <AccordionHeaderWrapper className={className} isOpen={isOpen} {...propsDefault}>
        <p>{title}</p>
        <Icons name={isOpen ? "chevron-back" : "drop-down"} />
      </AccordionHeaderWrapper>

      {isOpen &&
        <AccordionItemWrapper>
          {children}
        </AccordionItemWrapper>
      }
    </Fragment>
  );
}

type Props = {
  children: React$Node,
  title: string,
  isOpen: boolean,
  className: string,
}

export default AccordionHeader;
