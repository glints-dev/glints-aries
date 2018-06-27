/* @flow */
import React, { Fragment } from 'react';
import { Heading, SubHeading } from '../Style/PsychedelicTextStyle';

const PsychedelicText = (props: Props) => {
  const {
    children,
    heading,
    subheading,
    psychTheme,
    ...defaultLabelProps
  } = props;

  return (
    <Fragment>
      {heading
        ? <Heading>{children}</Heading>
        : subheading
        ? <SubHeading psychTheme={psychTheme}>{children}</SubHeading>
        : <h3>{children}</h3>
      }
    </Fragment>
  );
}

export default PsychedelicText;
