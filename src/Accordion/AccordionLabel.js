/* @flow */
import React from 'react';
import { AccordionLabelWrapper } from './../Style/AccordionStyle';

const AccordionLabel = (props: Props) => {
  const {
    children
  } = props;
  
  return (
    <AccordionLabelWrapper>
      {children}
    </AccordionLabelWrapper>
  )
}

type Props = {
  children: React$Node,
};

export default AccordionLabel;
