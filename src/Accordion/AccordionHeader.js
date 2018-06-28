/* @flow */
import React, { Fragment } from 'react';
import { AccordionHeaderWrapper, AccordionItemWrapper } from './../Style/AccordionStyle';
import { Icons } from './../Icon';

const AccordionHeader = (props: Props) => {
  const { children, isOpen, title, ...propsDefault } = props;
  return (
    <Fragment>
      <AccordionHeaderWrapper isOpen={isOpen} {...propsDefault}>
        <p>{title}</p>
        <Icons name={isOpen ? "chevron-back" : "drop-down"}
        />
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
  title?: string,
  isOpen: boolean
}

export default AccordionHeader;
