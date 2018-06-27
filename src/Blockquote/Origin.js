/* @flow */

import React, { Fragment } from 'react';
import { Origin } from './../Style/BlockquoteStyle';

const OriginSection = (props: Props) => {
    const {
      children,
      ...defaultLabelProps
    } = props;
  
    return (
      <Fragment>
        <Origin>{children}</Origin>
      </Fragment>
    );
  }
  
  export default OriginSection;