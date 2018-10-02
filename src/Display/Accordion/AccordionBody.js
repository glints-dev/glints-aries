/* @flow */

import React from 'react';
import { AccordionItemWrapper } from '../../Style/Display/AccordionStyle';

const AccordionBody = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <AccordionItemWrapper className={className}>
      {children}
    </AccordionItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default AccordionBody;
