/* @flow */
import React from 'react';
import { AnimatedItem, StyledAccordionItem } from './../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    ...defaultAccordionProps
  } = props;
  
  return (
    <AnimatedItem>
      <StyledAccordionItem {...defaultAccordionProps}>
        {props.children}
      </StyledAccordionItem>
    </AnimatedItem>
  )
}

type Props = {
  title?: string
};

export default AccordionItem;
