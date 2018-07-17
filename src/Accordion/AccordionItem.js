/* @flow */

import React from 'react';
import { AccordionItemList } from './../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    children,
    className,
    ...propsDefault
  } = props;
  
  return (
    <AccordionItemList className={className} {...propsDefault}>
      {children}
    </AccordionItemList>
  )
}

type Props = {
  children: React$Node,
  className: string,
};

export default AccordionItem;
