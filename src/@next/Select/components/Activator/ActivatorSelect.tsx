import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../../../Icon';
import { Option } from '../../../Menu';

import { Typography } from '../../../Typography';
import { Blue, Neutral } from '../../../utilities/colors';
import { StyledSelect, StyledTag, TagsContainer } from './ActivatorStyle';

export interface ActivatorSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  allowMultiple?: boolean;
  hasError?: boolean;
  selectedValues?: string[];
  placeholder?: string;
  onRemoveTag?({ option }: { option: string }): void;
  onSelectClick?(): void;
  options?: Option[];
  width?: string;
}
export const ActivatorSelect = ({
  placeholder,
  selectedValues,
  onClick,
  onRemoveTag,
  width,
  allowMultiple = false,
  disabled = false,
  onSelectClick,
  hasError = false,
  options,
  ...props
}: ActivatorSelectProps) => {
  const [filteredValues, setFilteredValues] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const activatorRef = useRef(null);
  const hasSelectedValues = filteredValues.length > 0;

  useEffect(() => {
    const values = selectedValues?.filter(value => value != '');
    setFilteredValues(values);

    const selectedOptions = options?.filter(({ value }) =>
      values.includes(value)
    );
    setSelectedLabels(selectedOptions.map(option => option.label));
  }, [options, selectedValues]);

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
    if (!hasSelectedValues) {
      return placeholderMarkup;
    }

    if (hasSelectedValues) {
      return (
        <TagsContainer>
          <StyledTag
            key={`option-${selectedValues[0]}`}
            onRemove={onRemoveTag({ option: selectedValues[0] })}
            textColor={Blue.S99}
          >
            {selectedLabels[0]}
          </StyledTag>
          {selectedValues.length > 1 && (
            <Typography
              variant="caption"
              color={disabled ? Neutral.B85 : Neutral.B40}
            >
              ... and {selectedValues.length - 1} more
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
          {hasSelectedValues ? selectedLabels[0] : placeholderMarkup}
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
