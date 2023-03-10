import React from 'react';

export type OptionType = {
  value: string;
  label: string;
};

export const SelectOption = ({ value, label }: OptionType) => {
  return <option value={value}>{label}</option>;
};

export const formatOption = ({ option }: { option: string }) => {
  return { label: option, value: option };
};

export const renderOptions = ({
  options,
}: {
  options: string[] | OptionType[];
}) => {
  return options?.map(option => {
    let optionValue, optionLabel;

    if (typeof options[0] === 'object' && options[0] != null) {
      const { value, label } = option as OptionType;
      optionValue = value;
      optionLabel = label;
    }

    if (typeof options[0] === 'string') {
      const formattedOption = formatOption({ option: option as string });
      const { value, label } = formattedOption as OptionType;
      optionValue = value;
      optionLabel = label;
    }

    return (
      <SelectOption
        key={`select-option-${optionValue}`}
        label={optionLabel}
        value={optionValue}
      />
    );
  });
};
