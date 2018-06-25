import React, { Fragment } from 'react';
import Label from './../Label';
import { StatsWrapper } from '../Style/StatsStyle';

const Stats = (props) => {
  const { caption, description, number, suffix } = props;
  return (
    <StatsWrapper>
      <Label block theme="secondary" size="small">{caption}</Label>
      <Label block theme="red" size="large"><b>{`${number}${suffix ? ` ${suffix}` : ''}`}</b></Label>
      <Label>{description}</Label>
    </StatsWrapper>
  );
}

export default Stats;
