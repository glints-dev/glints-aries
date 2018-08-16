/* @flow */

import React from 'react';
import createReactContext, { type Context } from 'create-react-context';
import {
  CollapsibleContainer,
  CollapsibleHeadStyle,
  CollapsibleBodyStyle,
} from '../Style/CollapsibleStyle';
import { Icon } from '../Icon';

type isOpen = true | false;
type children = React$Node;
const CollapsibleContext: Context<isOpen> = createReactContext(false);


const Collapsible = (props: Props) => {
  const {
    children,
    isOpen,
    style,
    title,
    ...defaultProps
  } = props;

  return (
    <CollapsibleContainer style={style} {...defaultProps}>
      <CollapsibleContext.Provider value={isOpen}>
        {children}
      </CollapsibleContext.Provider>
    </CollapsibleContainer>
  );
};

export const CollapsibleHead = (props: HeadProps) => {
  return (
    <CollapsibleContext.Consumer>
      {(isOpenContext) => {
        return (
          <CollapsibleHeadStyle>
            <span>
              {
                props.children
              }
            </span>
            {isOpenContext && <Icon name="arrow-up" size="12" color="#000000" />}
            {!isOpenContext && <Icon name="arrow-down" size="12" color="#000000" />}
          </CollapsibleHeadStyle>
        )
      }}
    </CollapsibleContext.Consumer>
  );
}

export const CollapsibleBody = (props: BodyProps) => {
  return (
    <CollapsibleContext.Consumer>
      {(isOpenContext) => {
        if (isOpenContext) {
          return (
            <CollapsibleBodyStyle>
              {
                props.children
              }
            </CollapsibleBodyStyle>
          );
        }

        return null;
      }}
    </CollapsibleContext.Consumer>
  );
};

type Props = {
  children?: children,
  style?: Object,
  isOpen?: isOpen,
  title: String,
}

type HeadProps = {
  children?: children,
  style?: Object,
}

type BodyProps = {
  children?: children,
  style?: Object,
}

Collapsible.defaultProps = {
  isOpen: false,
};

export default Collapsible;
