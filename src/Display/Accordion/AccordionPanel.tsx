import * as React from 'react';

import Icon from '../../General/Icon';

import {
  AccordionPanelWrapper,
  AccordionIconWrapper,
  AccordionContentWrapper,
  AccordionContent,
} from '../../Style/Display/AccordionStyle';

import { SecondaryColor } from '../../Style/Colors';

const AccordionPanel: React.FunctionComponent<Props> = (props) => {
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
      <AccordionContentWrapper className="accordion-content" tabIndex={-1}>
        <AccordionIconWrapper>
          <Icon name="add" color={SecondaryColor.lightblack} />
        </AccordionIconWrapper>
        <p>{label}</p>
        {active && (
          <AccordionContent
            onClick={e => e.stopPropagation()}
          >
            {content}
          </AccordionContent>
        )}
      </AccordionContentWrapper>
    </AccordionPanelWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof AccordionPanelWrapper> {
  label: string;
  content: string;
  active?: boolean;
}

export default AccordionPanel;
