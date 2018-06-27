/* @flow */

import React, { Fragment } from 'react';
import { Testimony } from './../Style/BlockquoteStyle';

const TestimonySection = (props: Props) => {
    const {
      children,
      ...defaultLabelProps
    } = props;
  
    return (
      <Fragment>
        <Testimony>{children}</Testimony>
      </Fragment>
    );
  }
  
  export default TestimonySection;