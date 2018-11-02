import styled from 'styled-components';

import { SecondaryColor } from '../Colors';

export const TabsContainer = styled.div`
  position: relative;
`;

export const TabsHeader = styled.div`
  position: relative;
  border-bottom: 1px solid ${SecondaryColor.lightergrey};

  ul {
    position: relative;
    display: flex;
    white-space: nowrap;
    overflow: auto;
    font-size: 1.2em;
    
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: inline-flex;
      padding: 2rem 0;
      margin: 0 1rem;
      text-transform: uppercase;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        border-bottom: 2px solid ${SecondaryColor.black};

        button {
          font-weight: bold;
        }
      }

      button {
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
  }
`;

export const TabsBody = styled.div`
  position: relative;
  padding-top: 2rem;
`;

export const TabsContent = styled.div`
  position: relative;
`;
