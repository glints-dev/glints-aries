import React from 'react';

import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';

export const Label = ({ children }: { children: React.ReactNode }) => (
  <Typography as="span" variant="subtitle2" color={Neutral.B18}>
    {children}
  </Typography>
);
