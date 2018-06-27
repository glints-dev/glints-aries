/* @flow */
import React from 'react';
import { AnimatedItem, StyledAccordionItem } from './../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    ...defaultAccordionProps
  } = props;
  
  return (
    <AnimatedItem>
      <StyledAccordionItem className="accordion-item" {...defaultAccordionProps}>
        {props.children}
      </StyledAccordionItem>
    </AnimatedItem>
  )
}

type Props = {
  title?: string,
  children: React$Node,
};

export default AccordionItem;
