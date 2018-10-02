/* @flow */

import React, { Fragment } from 'react';
import { Heading, SubHeading } from '../../Style/General/PsychedelicTextStyle';

const renderPsychedelicText = ({
  children,
  type,
  psychTheme,
  className,
  ...defaultProps
} : Props) => {
  switch (type) {
    case 'heading':
      return (
        <Heading className={className} {...defaultProps}>
          {children}
        </Heading>
      );
    case 'subheading':
      return (
        <SubHeading className={className} psychTheme={psychTheme} {...defaultProps}>
          {children}
        </SubHeading>
      );
    default:
      return (
        <h3>
          {children}
        </h3>
      );
  }
};

const PsychedelicText = (props: Props) => (
  <Fragment>
    {renderPsychedelicText(props)}
  </Fragment>
);

type Props = {
  children: React$Node,
  type: string,
  psychTheme: string,
  className: string,
};

export default PsychedelicText;
