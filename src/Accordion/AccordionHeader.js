/* @flow */
import React, { Fragment } from 'react';
import { StyledAccordionHeader, AccordionItemWrapper } from './../Style/AccordionStyle';
import { Icons } from './../Icon';

const AccordionHeader = (props: Props) => {
  const { children, isOpen, title, ...propsDefault } = props;
  return (
    <Fragment>
      <StyledAccordionHeader isOpen={isOpen} {...propsDefault}>
        <p>{title}</p>
        <Icons
          name={isOpen ? "chevron-back" : "drop-down"}
          paddingRight={14}
          paddingTop={6}
          IconBgColor="#fff"
        />
      </StyledAccordionHeader>

      {isOpen &&
        <AccordionItemWrapper>
          {children}
        </AccordionItemWrapper>
      }
    </Fragment>
  );
}

type Props = {
  title?: string,
  isOpen: boolean
}

export default AccordionHeader;
