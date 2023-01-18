import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { TagStyle } from './TagStyle';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Tag = ({ children, ...props }: TagProps) => {
  const content =
    typeof children === 'string' ? (
      <Typography variant="caption" color={Neutral.B18} as={'span'}>
        {children}
      </Typography>
    ) : (
      children
    );

  return <TagStyle {...props}>{content}</TagStyle>;
};
