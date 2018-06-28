/* @flow */
import React from 'react';
import {
  AccordionContainer,
  StyledAccordionItem,
} from './../Style/AccordionStyle';

const Accordion = (props: Props) => {
  const {
    children
  } = props;

  return (
    <AccordionContainer>
      {children}
    </AccordionContainer>
  )
}

type Props = {
  children: React$Node,
};

export default Accordion;
