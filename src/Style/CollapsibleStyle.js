import styled, { keyframes } from 'styled-components';
import { SecondaryColor } from './Colors';

const animateCollapsible = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  cursor: pointer;
  color: black;
  background-color: ${SecondaryColor.white};
  border: solid 1px ${SecondaryColor.lightgrey};
  font-size: 1em;
`;

export const Header = styled.div`
  background: ${SecondaryColor.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;

  &:hover {
    color: ${SecondaryColor.blue};
  }
`;

export const Body = styled.p`
  padding: 0 1.2em 1.2em 1.2em;
  margin-bottom: 0;
  animation: ${animateCollapsible} .3s linear;
`;
