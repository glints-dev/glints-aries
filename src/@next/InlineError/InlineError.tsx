import React from 'react';
import { StyledText, StyledWrapper } from './InlineErrorStyle';
import { Icon } from '../Icon';
import { Red } from '../utilities/colors';

export interface InlineErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const InlineError = ({ text, ...props }: InlineErrorProps) => {
  const error = !!text;

  return error ? (
    <StyledWrapper {...props}>
      <Icon
        name="ri-error-warning-fill"
        fill={Red.B93}
        width={20}
        height={20}
      />
      <StyledText variant="subtitle2">{text}</StyledText>
    </StyledWrapper>
  ) : (
    <></>
  );
};
