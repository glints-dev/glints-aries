import * as React from 'react';
import { InformationContainer } from '../../Style/Application/InformationStyle';

import Description from './Description';
import Detail from './Detail';
import Title from './Title';

const Information: Information = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <InformationContainer className={className} {...defaultProps}>
      {children}
    </InformationContainer>
  );
};

type Information = React.FunctionComponent<Props> & {
  Title: typeof Title;
  Description: typeof Description;
  Detail: typeof Detail;
}

Information.Title = Title;
Information.Description = Description;
Information.Detail = Detail;

interface Props extends React.ComponentPropsWithoutRef<typeof InformationContainer> {
  children: React.ReactNode;
};

export default Information;
