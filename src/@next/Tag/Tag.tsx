import React from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  TagContentStyle,
  TagIconWrapper,
  TagRemoveContainerStyle,
  TagStyle,
  TagContentWrapper,
} from './TagStyle';
import { IconNames } from '../Icon/icons/icons';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: string;
  onRemove?: (() => void) | null | void;
  textColor?: string;
  disabled?: boolean;
  contentType?: 'neutral' | 'success' | 'warning';
  iconName?: IconNames;
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
    contentType = 'neutral',
    iconName,
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
      <Typography variant="subtitle2" color={handleTextColor()} as={'span'}>
        {children}
      </Typography>
    ) : (
      children
    );

  const removeButton = onRemove && (
    <TagRemoveContainerStyle>
      <TagIconWrapper role="button" tabIndex={0}>
        <Icon name="ri-close" fill={Neutral.B40} onClick={onRemove} />
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
      data-removeable={!!onRemove}
      data-content-type={contentType}
      role={!!onClick ? 'button' : undefined}
      data-disabled={disabled}
      as={!!onClick ? 'button' : 'div'}
    >
      <TagContentStyle data-removeable={!!onRemove}>
        {iconName && <Icon name={iconName} fill={Neutral.B40} height={20} />}
        <TagContentWrapper>{content}</TagContentWrapper>
      </TagContentStyle>
      {removeButton}
    </TagStyle>
  );
});
