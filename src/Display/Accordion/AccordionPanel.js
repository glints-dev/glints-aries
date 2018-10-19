/* @flow */

import React from 'react';

import Icon from '../../General/Icon';

import { AccordionPanelWrapper, AccordionIconWrapper, AccordionContent } from '../../Style/Display/AccordionStyle';
import { SecondaryColor } from '../../Style/Colors';

const AccordionPanel = (props: Props) => {
  const {
    className,
    label,
    content,
    active,
    ...defaultProps
  } = props;

  return (
    <AccordionPanelWrapper
      className={className}
      role="tab"
      aria-expanded={active}
      tabIndex={0}
      {...defaultProps}
    >
      <AccordionIconWrapper>
        <Icon name="add" color={SecondaryColor.lightblack} />
      </AccordionIconWrapper>
      <p>{label}</p>
      {active
        && (
          <AccordionContent>
            {content}
          </AccordionContent>
        )
      }
    </AccordionPanelWrapper>
  );
};

type Props = {
  className: string,
  label: string,
  content: string,
  active: boolean,
};

export default AccordionPanel;
