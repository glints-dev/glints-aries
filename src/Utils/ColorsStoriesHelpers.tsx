import React from 'react';
import styled from 'styled-components';
import { Shadow } from './Shadow';

export const ColorSampler = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export interface ColorBoxProps {
  bgColor: string;
  fontColor: string;
}

const StyledColorSample = styled.div`
  margin: 1em;
  flex: '1 20%';
`;

const ColorBox = styled.div<ColorBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 80px;
  margin: 1em auto;
  background-color: ${({ bgColor }) => bgColor};
  font-size: 14px;
  font-weight: bold;
  color: ${({ fontColor }) => fontColor};
  box-shadow: ${Shadow.down1};
`;

const ColorLabel = styled.code`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

export interface ColorSampleProps extends ColorBoxProps {
  name: string;
}

export const ColorSample: React.FunctionComponent<ColorSampleProps> = ({
  bgColor,
  fontColor,
  name,
}) => (
  <StyledColorSample>
    <ColorBox bgColor={bgColor} fontColor={fontColor}>
      <code>{bgColor}</code>
    </ColorBox>
    <ColorLabel>{name}</ColorLabel>
  </StyledColorSample>
);
