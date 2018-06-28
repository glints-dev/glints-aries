/* @flow */
import React from 'react';
import { AccordionItemList } from './../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    children,
    ...defaultAccordionProps
  } = props;
  
  return (
    <AccordionItemList {...defaultAccordionProps}>
      {children}
    </AccordionItemList>
  )
}

type Props = {
  title?: string,
  children: React$Node,
};

export default AccordionItem;
