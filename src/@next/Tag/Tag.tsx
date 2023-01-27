import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { TagContentStyle, TagRemoveContainerStyle, TagStyle } from './TagStyle';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  value?: string;
  onRemove?: (() => void) | null;
}

export type TagStyleProps = {
  isPressed: boolean;
  isHover: boolean;
} & TagProps;

export type TagRemoveContainerProps = React.HTMLAttributes<HTMLDivElement>;

export type TagContentProps = React.HTMLAttributes<HTMLSpanElement> & TagProps;

export const Tag = ({ children, onRemove, value, ...props }: TagProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const content =
    typeof children === 'string' ? (
      <Typography variant="caption" color={Neutral.B18} as={'span'}>
        {children}
      </Typography>
    ) : (
      children
    );

  const removeButton = onRemove && (
    <TagRemoveContainerStyle
      role="button"
      tabIndex={0}
      onMouseDown={() => setIsPressed(true)}
      onBlur={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false);
        setIsHover(false);
      }}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHover(true)}
    >
      <Icon name="ri-close" fill={Neutral.B40} height={20} onClick={onRemove} />
    </TagRemoveContainerStyle>
  );

  return (
    <TagStyle
      {...props}
      onRemove={onRemove}
      value={value}
      isPressed={isPressed}
      isHover={isHover}
    >
      <TagContentStyle onRemove={onRemove}>{content}</TagContentStyle>
      {removeButton}
    </TagStyle>
  );
};
