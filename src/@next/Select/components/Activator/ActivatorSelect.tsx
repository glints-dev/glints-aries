import React, { useRef } from 'react';
import { Icon } from '../../../Icon';

import { Typography } from '../../../Typography';
import { Blue, Neutral } from '../../../utilities/colors';
import { useActivatorSelect } from './ActivatorContext';
import { StyledSelect, StyledTag, TagsContainer } from './ActivatorStyle';

export interface ActivatorSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  values?: string[];
  placeholder?: string;
  onRemoveTag?({ option }: { option: string }): void;
  width?: string;
}
export const ActivatorSelect = ({
  placeholder,
  values, //rename to selectedValues
  onClick,
  onRemoveTag,
  width,
  ...props
}: ActivatorSelectProps) => {
  const activatorRef = useRef(null);
  const filteredValues = values?.filter(value => value != '');
  const hasValue = filteredValues.length > 0;
  const activatorContext = useActivatorSelect();
  const { allowMultiple, disabled, onSelectClick, hasError } = activatorContext;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    onSelectClick();
    onClick;
  };

  const placeholderMarkup = (
    <Typography
      variant="body1"
      as="span"
      color={disabled ? Neutral.B85 : Neutral.B40}
    >
      {placeholder}
    </Typography>
  );

  const tagsMarkup = () => {
    const hasSelectedValues = values.length > 0;

    if (!hasSelectedValues) {
      return placeholderMarkup;
    }

    if (hasSelectedValues) {
      return (
        <TagsContainer>
          <StyledTag
            key={`option-${values[0]}`}
            onRemove={onRemoveTag({ option: values[0] })}
            textColor={Blue.S99}
          >
            {values[0]}
          </StyledTag>
          {values.length > 1 && (
            <Typography
              variant="caption"
              color={disabled ? Neutral.B85 : Neutral.B40}
            >
              ... and {values.length - 1} more
            </Typography>
          )}
        </TagsContainer>
      );
    }
  };

  return (
    <StyledSelect
      {...props}
      ref={activatorRef}
      data-error={hasError}
      onClick={handleClick}
      disabled={disabled}
      width={width}
    >
      {allowMultiple ? (
        tagsMarkup()
      ) : (
        <Typography
          variant="body1"
          color={disabled ? Neutral.B85 : Neutral.B40}
        >
          {hasValue ? filteredValues[0] : placeholderMarkup}
        </Typography>
      )}
      <Icon
        height={24}
        name="ri-arrow-m-down-line"
        fill={disabled ? Neutral.B85 : Neutral.B40}
      />
    </StyledSelect>
  );
};
