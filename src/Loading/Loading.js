/* @flow */

import React from 'react';
import Label from '../Label';
import { LoadingContainer, Spinner } from './../Style/LoadingStyle';

const Loading = (props: Props) => {
  const { 
    size, 
    text, 
    className 
  } = props;

  return (
    <LoadingContainer className={className}>
        <Spinner size={size} />
        {text && 
            <Label size="medium" theme="red">{ text }</Label>
        }
    </LoadingContainer>
  );
}

type Props = {
  size: string,
  text: string,
  className: string,
};

export default Loading;
