/* @flow */
import React, { Component, Fragment } from 'react';
import { StyledAccordionHeader, AccordionItemWrapper } from './../Style/AccordionStyle';
import { Icons } from './../Icon';

const AccordionHeader = (props: Props) => {
  const { children, isOpen, title, ...propsDefault } = props;
  return (
    <Fragment>
      <StyledAccordionHeader isOpen={isOpen} {...propsDefault}>
        <p>{title}</p>
        <Icons name="18-plus" extension="svg" />
      </StyledAccordionHeader>

      {isOpen &&
        <AccordionItemWrapper>
          {children}
        </AccordionItemWrapper>
      }
    </Fragment>
  );
}

type Props = {
  title?: string
}

export default AccordionHeader;
