import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const Container = styled.div`
  position: relative;

  ul {
    position: relative;
    display: flex;
    white-space: nowrap;
    border-bottom: 1px solid ${SecondaryColor.lightergrey};
    overflow: auto;
    
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: inline-flex;
      margin-right: 1em;
      cursor: pointer;
      text-transform: uppercase;

      &.active {
        font-weight: bold;
        border-bottom: 2px solid ${SecondaryColor.black};
      }
    }
  }
`;
