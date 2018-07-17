/* @flow */

import React, { Fragment } from 'react';
import { Heading, SubHeading } from '../Style/PsychedelicTextStyle';

const PsychedelicText = (props: Props) => {
  const {
    children,
    heading,
    subheading,
    psychTheme,
    className
  } = props;

  return (
    <Fragment>
      {heading
        ? <Heading className={className}>{children}</Heading>
        : subheading
        ? <SubHeading className={className} psychTheme={psychTheme}>{children}</SubHeading>
        : <h3>{children}</h3>
      }
    </Fragment>
  );
}

type Props = {
  children: React$Node,
  heading: boolean,
  subheading: boolean,
  psychTheme: string,
  className: string,
};

export default PsychedelicText;
