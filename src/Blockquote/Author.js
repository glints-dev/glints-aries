/* @flow */

import React, { Fragment } from 'react';
import { Author } from './../Style/BlockquoteStyle';

const AuthorSection = (props: Props) => {
    const {
      children,
      ...defaultLabelProps
    } = props;
  
    return (
      <Fragment>
        <Author>{children}</Author>
      </Fragment>
    );
  }
  
  export default AuthorSection;