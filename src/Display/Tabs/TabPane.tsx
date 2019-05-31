import * as React from 'react';

import { TabsContent } from '../../Style/Display/TabsStyle';

const TabPane: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <TabsContent
      className={className}
      {...defaultProps}>
      {children}
    </TabsContent>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof TabsContent> {
  children: React.ReactNode;
  tab?: string;
}

export default TabPane;
