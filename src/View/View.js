// @flow
import React from 'react';
import styled, {css} from 'styled-components';

import Unit from '../Utils/Unit';

type Width = 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 40;
type Opacity = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

type Props = {
  children: React$Node,
  opacity: Opacity,
  margin?: Width,
  marginTop?: Width,
  marginBottom?: Width,
  marginLeft?: Width,
  marginRight?: Width,
  marginY?: Width,
  marginX?: Width,
  padding?: Width,
  paddingTop?: Width,
  paddingBottom?: Width,
  paddingLeft?: Width,
  paddingRight?: Width,
  paddingY?: Width,
  paddingX?: Width,
};

const StyledView = styled.div`
  ${props =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `};
  ${props =>
    props.margin &&
    css`
      margin: ${Unit.numToRem(props.margin)};
    `};
  ${props =>
    props.marginTop &&
    css`
      margin-top: ${Unit.numToRem(props.marginTop)};
    `};
  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${Unit.numToRem(props.marginBottom)};
    `};
  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${Unit.numToRem(props.marginLeft)};
    `};
  ${props =>
    props.marginRight &&
    css`
      margin-right: ${Unit.numToRem(props.marginRight)};
    `};
  ${props =>
    props.marginY &&
    css`
      margin-top: ${Unit.numToRem(props.marginY)};
      margin-bottom: ${Unit.numToRem(props.marginY)};
    `};
  ${props =>
    props.marginX &&
    css`
      margin-left: ${Unit.numToRem(props.marginX)};
      margin-right: ${Unit.numToRem(props.marginX)};
    `};
  ${props =>
    props.padding &&
    css`
      padding: ${Unit.numToRem(props.padding)};
    `};
  ${props =>
    props.paddingTop &&
    css`
      padding-top: ${Unit.numToRem(props.paddingTop)};
    `};
  ${props =>
    props.paddingBottom &&
    css`
      padding-bottom: ${Unit.numToRem(props.paddingBottom)};
    `};
  ${props =>
    props.paddingLeft &&
    css`
      padding-left: ${Unit.numToRem(props.paddingLeft)};
    `};
  ${props =>
    props.paddingRight &&
    css`
      padding-right: ${Unit.numToRem(props.paddingRight)};
    `};
  ${props =>
    props.paddingY &&
    css`
      padding-top: ${Unit.numToRem(props.paddingY)};
      padding-bottom: ${Unit.numToRem(props.paddingY)};
    `};
  ${props =>
    props.paddingX &&
    css`
      padding-left: ${Unit.numToRem(props.paddingX)};
      padding-right: ${Unit.numToRem(props.paddingX)};
    `};
`;

const View = (props: Props) => (
  <StyledView
    opacity={props.opacity}
    margin={props.margin}
    marginTop={props.marginTop}
    marginBottom={props.marginBottom}
    marginLeft={props.marginLeft}
    marginRight={props.marginRight}
    marginY={props.marginY}
    marginX={props.marginX}
    padding={props.padding}
    paddingTop={props.paddingTop}
    paddingBottom={props.paddingBottom}
    paddingLeft={props.paddingLeft}
    paddingRight={props.paddingRight}
    paddingY={props.paddingY}
    paddingX={props.paddingX}>
    {props.children}
  </StyledView>
);

View.defaultProps = {
  margin: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginY: 0,
  marginX: 0,
  padding: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingY: 0,
  paddingX: 0,
  opacity: 1,
};

export type {Width};
export default View;
