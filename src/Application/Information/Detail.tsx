import * as React from 'react';
import { DetailWrapper } from '../../Style/Application/InformationStyle';

const Detail: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <DetailWrapper className={className}>
      {children}
    </DetailWrapper>
  );
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default Detail;
