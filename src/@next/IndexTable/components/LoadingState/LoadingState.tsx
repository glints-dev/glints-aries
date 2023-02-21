import React from 'react';
import { Spinner } from '../../../Spinner';
import { Blue, Neutral } from '../../../utilities/colors';
import { LoadingStateContainer, SpinnerContainer } from './LoadingStateStyle';
import { Typography } from '../../../Typography';

interface LoadingStateProps {
  colSpan: number;
  label?: string;
}

export const LoadingState = ({ colSpan, label }: LoadingStateProps) => (
  <LoadingStateContainer colSpan={colSpan + 1}>
    <SpinnerContainer>
      <Spinner height={48} width={48} fill={Blue.S99} />
      <Typography variant="subtitle1" color={Neutral.B18}>
        {label}
      </Typography>
    </SpinnerContainer>
  </LoadingStateContainer>
);
