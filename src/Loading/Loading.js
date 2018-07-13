/* @flow */
import React from 'react';
import Label from '../Label';
import { LoadingContainer, Spinner } from './../Style/LoadingStyle';

const Loading = (props: Props) => {
  const { size, text } = props;

  return (
    <LoadingContainer>
        <Spinner size={size} />
        {text && 
            <Label size="medium" theme="red">{ text }</Label>
        }
        
    </LoadingContainer>
  );
}

export default Loading;
