/* @flow */

import React from 'react';
import { AccordionLabelWrapper } from '../../Style/Display/AccordionStyle';

const AccordionLabel = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <AccordionLabelWrapper className={className}>
      {children}
    </AccordionLabelWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default AccordionLabel;
