import * as React from 'react';
import { OmniSearchListItem } from '../../Style/Input/OmniSearchStyle';

const OmniSearchList: React.FunctionComponent<Props> = (props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchListItem
      id="omnisearch-listitem"
      className={className}
      role="list"
      {...defaultProps}
    >
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </OmniSearchListItem>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchListItem> {
  children: React.ReactNode;
  title: string;
}

export default OmniSearchList;
