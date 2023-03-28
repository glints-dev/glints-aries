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
  onRemove?: (() => void) | null | void;
  textColor?: string;
  disabled?: boolean;
}

export type TagRemoveContainerProps = React.HTMLAttributes<HTMLDivElement>;

export type TagContentProps = React.HTMLAttributes<HTMLSpanElement> & TagProps;

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(function Tag(
  {
    children,
    onRemove,
    value,
    textColor,
    onClick,
    disabled,
    ...props
  }: TagProps,
  ref
) {
  const handleTextColor = () => {
    if (disabled) {
      return Neutral.B85;
    }

    if (textColor) {
      return textColor;
    }

    return Neutral.B18;
  };

  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <Typography variant="caption" color={handleTextColor()} as={'span'}>
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
    <TagStyle
      ref={ref}
      {...props}
      value={value}
      onClick={!disabled && onClick}
      data-clickable={!!onClick}
      role={!!onClick ? 'button' : undefined}
      data-disabled={disabled}
      as={!!onClick ? 'button' : 'div'}
    >
      <TagContentStyle data-removeable={!!onRemove}>{content}</TagContentStyle>
      {removeButton}
    </TagStyle>
  );
});
