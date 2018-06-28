/* @flow */
import React from 'react';
import styled from 'styled-components';
import { CenteredFlex } from './../Style/FlexCenterStyle';

const FlexCenter = (props: Props) => {
  return (
    <CenteredFlex>{props.children}</CenteredFlex>
  );
}

type Props = {
  children: React$Node
}

export default FlexCenter;
