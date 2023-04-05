import React from 'react';
import { Typography } from '../../Typography';
import { Neutral } from '../../utilities/colors';

export const MenuOptionLabel = ({ label }: { label: React.ReactNode }) => {
  return (
    <Typography as="span" variant="body1" color={Neutral.B18}>
      {label}
    </Typography>
  );
};
