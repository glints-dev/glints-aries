/* @flow */

import React from 'react';
import { AccordionItemList } from '../../Style/AccordionStyle';

const AccordionItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <AccordionItemList className={className} {...defaultProps}>
      {children}
    </AccordionItemList>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default AccordionItem;
