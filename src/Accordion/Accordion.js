/* @flow */
import React, { Component } from 'react';
import {
  StyledAccordionWrapper,
  StyledAccordionItem,
} from './../Style/AccordionStyle';

const Accordion = (props) => {
  return (
    <StyledAccordionWrapper>
      <StyledAccordionItem>
        {props.children}
      </StyledAccordionItem>
    </StyledAccordionWrapper>
  )
}

export default Accordion;
