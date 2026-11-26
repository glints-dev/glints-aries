import React from 'react';
import { escapeRegExp } from 'lodash-es';
import { Option } from '../Menu';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';

export const highlightMatchedText = (
  options: Option[],
  searchValue?: string
): Option[] => {
  if (!searchValue) return options;
  const regex = new RegExp(`(${escapeRegExp(searchValue)})`, 'gi');

  return options.map(option => {
    if (typeof option.label !== 'string') return option;
    const parts = option.label.split(regex);
    return {
      ...option,
      label: parts.map((part, i) =>
        i % 2 === 1 ? (
          <Typography key={i} as="span" variant="body2" color={Neutral.B18}>
            {part}
          </Typography>
        ) : (
          part
        )
      ),
    };
  });
};
