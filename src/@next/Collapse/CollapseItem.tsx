import React, { useState } from 'react';

export interface CollapseItemProps {
  title: string;
  children?: React.ReactNode;
}

export const CollapseItem = ({ title, children }: CollapseItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        style={{
          width: '100%',
          cursor: 'pointer',
          border: '1px solid black',
          backgroundColor: 'lightgray',
          padding: '8px',
        }}
      >
        Title: {title}
      </div>
      {!isCollapsed && (
        <div
          style={{
            width: '100%',
            backgroundColor: 'lightblue',
            padding: '8px',
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};
