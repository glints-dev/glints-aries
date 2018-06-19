// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import View from '../View';
import type {Width} from '../View/View';
import StyleMatcher from '../Utils/Matcher';

type IconSize = 'default' | 'medium' | 'small' | 'xsmall';
type IconBgColor =
  | 'regular'
  | 'cyan'
  | 'gray'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'white'
  | 'purple';

type Props = {
  size?: IconSize,
  children: React$Element<'img' | 'svg' | 'i'>,
  padding?: Width,
  backgroundColor?: IconBgColor,
  rounded?: boolean,
};

const iconSizeHandler = StyleMatcher.create('size', [
  ['default', '2.4rem'],
  ['medium', '2.0rem'],
  ['small', '1.8rem'],
  ['xsmall', '1.2rem'],
]);

const IconWrapper = styled.span`
  display: block;
  position: relative;
  margin: 0 auto;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${StyleMatcher.create('backgroundColor', [
        ['regular', '#000000'],
        ['cyan', '#00a1b0'],
        ['gray', '#999999'],
        ['red', '#f44336'],
        ['green', '#4CAF50'],
        ['blue', '#2196F3'],
        ['orange', '#FF9800'],
        ['white', '#FFFFFF'],
        ['purple', '#673AB7'],
      ])};
    `};
  ${props =>
    props.rounded &&
    css`
      border-radius: 50%;
    `};
`;

const IconContentWrapper = styled.div`
  width: ${iconSizeHandler};
  height: ${iconSizeHandler};
`;

const Icon = ({children, padding, ...iconProps}: Props) => (
  <IconWrapper {...iconProps}>
    <View padding={padding}>
      <IconContentWrapper {...iconProps}>
        {React.cloneElement(children, {
          style: {
            display: 'block',
            width: iconSizeHandler(iconProps),
            height: iconSizeHandler(iconProps),
          },
        })}
      </IconContentWrapper>
    </View>
  </IconWrapper>
);

Icon.defaultProps = {
  size: 'default',
};

export type {IconSize, IconBgColor};
export default Icon;
