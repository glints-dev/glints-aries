import React from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  TagContentStyle,
  TagIconWrapper,
  TagRemoveContainerStyle,
  TagStyle,
} from './TagStyle';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: string;
  onRemove?: (() => void) | null;
  textColor?: string;
}

export type TagRemoveContainerProps = React.HTMLAttributes<HTMLDivElement>;

export type TagContentProps = React.HTMLAttributes<HTMLSpanElement> & TagProps;

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(function Tag(
  { children, onRemove, value, textColor, ...props }: TagProps,
  ref
) {
  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <Typography
        variant="caption"
        color={textColor ?? Neutral.B18}
        as={'span'}
      >
        {children}
      </Typography>
    ) : (
      children
    );

  const removeButton = onRemove && (
    <TagRemoveContainerStyle>
      <TagIconWrapper role="button" tabIndex={0}>
        <Icon
          name="ri-close"
          fill={Neutral.B40}
          height={20}
          onClick={onRemove}
        />
      </TagIconWrapper>
    </TagRemoveContainerStyle>
  );

  return (
    <TagStyle ref={ref} {...props} value={value}>
      <TagContentStyle data-removeable={!!onRemove}>{content}</TagContentStyle>
      {removeButton}
    </TagStyle>
  );
});
