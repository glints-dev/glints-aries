import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const Item = styled.label`
  cursor: pointer;
  span {
    margin: 0 .5em;
    color: ${SecondaryColor.lighterblack};
  }

  &.active {
    color: ${SecondaryColor.blue};
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${props => props.bgColor};
  padding: 10px;
  margin-bottom: ${props => props.marginBottom};
  color: ${SecondaryColor.lightblack};

  > label:last-child span {
    display: none;
  }
`;
