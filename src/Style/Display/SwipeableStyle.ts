import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const SwipeableContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SwipeableItemWrapper = styled.div`
  display: inline-flex;
  margin: 0 1em;
  padding: 1em 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const SwipeableCardExample = styled.div`
  width: 150px;
  height: 150px;
  background: ${SecondaryColor.white};
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;
