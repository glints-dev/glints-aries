import React, { Fragment } from 'react';
import Label from './../Label';
import { StatsWrapper } from '../Style/StatsStyle';
import { Theme, Size } from '../Utils/StyleConfig';

const Stats = (props) => {
  const { caption, description, number, suffix } = props;
  return (
    <StatsWrapper>
      <Label block theme={Theme.GREY} size={Size.SMALL}>{caption}</Label>
      <Label block theme={Theme.RED} size={Size.LARGE}><b>{`${number}${suffix ? ` ${suffix}` : ''}`}</b></Label>
      <Label>{description}</Label>
    </StatsWrapper>
  );
}

export default Stats;
