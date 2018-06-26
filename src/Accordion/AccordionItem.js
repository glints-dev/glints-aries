/* @flow */
import React, { Component, Fragment } from 'react';
import { StyledAccordionItem } from './../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    ...defaultAccordionProps
  } = props;
  
  return (
    <StyledAccordionItem {...defaultAccordionProps}>
      {props.children}
    </StyledAccordionItem>
  )
}

type Props = {
  title?: string
};

export default AccordionItem;
