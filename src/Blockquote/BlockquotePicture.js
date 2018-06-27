/* @flow */

import React, { Fragment } from 'react';

const BlockquotePicture = (props: Props) => {
    const {
        profileImage,
      ...defaultLabelProps
    } = props;
  
    return (
        <Fragment>
            <img src={profileImage} />
        </Fragment>
    );
  }
  
  export default BlockquotePicture;