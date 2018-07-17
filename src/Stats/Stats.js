/* @flow */

import React from 'react';
import Label from './../Label';
import { StatsWrapper } from '../Style/StatsStyle';
import { Theme, Size } from '../Utils/StyleConfig';

const Stats = (props: Props) => {
  const { caption, 
    description, 
    number, 
    suffix, 
    className 
  } = props;

  return (
    <StatsWrapper className={className}>
      <Label block theme={Theme.GREY} size={Size.SMALL}>{caption}</Label>
      <Label block theme={Theme.RED} size={Size.LARGE}><b>{`${number}${suffix ? ` ${suffix}` : ''}`}</b></Label>
      <Label>{description}</Label>
    </StatsWrapper>
  );
}

type Props = {
  caption: string,
  description: string,
  number: string,
  suffix: string,
  className: string,
}

export default Stats;
