/* @flow */

import React from 'react';
import { Paragraph } from './../Style/BlockquoteStyle';

const BlockquoteContent = (props: Props) => {
    const {
      children,
      ...defaultLabelProps
    } = props;
  
    return (
        <Paragraph>
            {children}
        </Paragraph>
    );
  }
  
  export default BlockquoteContent;