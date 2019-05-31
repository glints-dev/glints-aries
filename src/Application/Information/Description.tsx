import * as React from 'react';
import { DescriptionWrapper } from '../../Style/Application/InformationStyle';

const Description: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <React.Fragment>
      <DescriptionWrapper className={className}>
        {children}
      </DescriptionWrapper>
    </React.Fragment>
  );
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default Description;
