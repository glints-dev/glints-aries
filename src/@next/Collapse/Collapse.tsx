import React from 'react';
import { CollapseItem } from './CollapseItem';

export interface CollapseProps {
  name: string;
  children?: React.ReactNode;
}

const CollapseComponent = React.forwardRef<HTMLDivElement, CollapseProps>(
  function Collapse({ name, children }: CollapseProps, ref) {
    const temp = 'temp';

    return (
      <>
        <div ref={ref}>
          TODO - Collapse Component {name} {temp}
          {children}
        </div>
      </>
    );
  }
);

export const Collapse = Object.assign(CollapseComponent, {
  Item: CollapseItem,
});
