import * as React from 'react';
import { TitleWrapper } from './InformationStyle';

const Title: React.FunctionComponent<Props> = props => {
  const { children, bold, className, ...defaultProps } = props;

  return (
    <TitleWrapper className={className} bold={bold} {...defaultProps}>
      {children}
    </TitleWrapper>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof TitleWrapper> {
  children: React.ReactNode;
  bold?: boolean;
}

export default Title;
