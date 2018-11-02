/* @flow */

import React from 'react';

import { TabsContent } from '../../Style/Display/TabsStyle';

const TabPane = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <TabsContent
      className={className}
      {...defaultProps}
    >
      {children}
    </TabsContent>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default TabPane;
