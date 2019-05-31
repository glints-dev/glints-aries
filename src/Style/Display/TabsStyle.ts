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
    font-size: 1em;
    padding: 0;
    margin: 0;
    
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: inline-flex;
      padding: 1.2em 0;
      margin: 0 .6em;
      text-transform: uppercase;
      list-style-type: none;

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
          text-transform: uppercase;
        }
      }

      &:focus {
        outline: none;
      }

      &:focus > button {
        outline: 5px auto -webkit-focus-ring-color;
      }

      button {
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        text-transform: uppercase;
      }
    }
  }
`;

export const TabsContent = styled.div`
  position: relative;
  outline: none;
`;

export const TabsBody = styled.div`
  position: relative;
  padding-top: 1.2em;

  &:focus {
    outline: none;
  }

  &:focus > ${TabsContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
