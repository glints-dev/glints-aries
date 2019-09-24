import styled from 'styled-components';

import { SecondaryColor } from '../Colors';
import { ScreenSize } from '../../Utils/StyleConfig';

export const TabsContainer = styled.div`
  position: relative;
`;

export const TabsHeader = styled.div`
  position: relative;
  
  .tabs-list-horizontal.white {
    border-bottom: 1px solid ${SecondaryColor.lightergrey};
    display: flex;
  }
  .tabs-list-horizontal.grey {
    border-bottom: 1px solid ${SecondaryColor.lightergrey};
    border-top: 1px solid ${SecondaryColor.lightergrey};
    display: flex;
  }
  
  .tabs-list-vertical {
    border-right: 1px solid ${SecondaryColor.lightergrey};
    display: flex;
    flex-direction: column;
    margin-right: 800px;
  }
  
  ul {
    position: relative;
    white-space: nowrap;
    overflow: auto;
    font-size: 1em;
    padding: 0;
    margin: 0;

    &::-webkit-scrollbar {
      display: none;
    }
    
    .horizontal-tab.grey {
      width: 100%;
      text-align:center;
      display: block;
      margin: 0;
    }
    
    .horizontal-tab.grey:hover {
      background-color: #f3f3f3;
      color: #017eb7;
      margin: 0;
    }
    
    .horizontal-tab.white,
    .vertical-tab {
      margin: 0 10px;
    }
    
    li {
      display: inline-flex;
      text-transform: uppercase;
      list-style-type: none;
      &:first-child
      .tabHorizontal {
        margin-left: 0;
      }
      
      &:last-child
      .tabHorizontal {
        margin-right: 0;
      }
      
      &:first-child
      .tabVertical {
        margin-top: 0;
      }

      &:last-child
      .tabVertical {
        margin-bottom: 0;
      }

      &.white.activeHorizontal {
        border-bottom: 2px solid ${SecondaryColor.black};

        button {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
      
      &.grey.activeHorizontal {
        background-color: #f3f3f3;
        
        button {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
      
      &.activeVertical {
        border-right: 2px solid ${SecondaryColor.black};

        button {
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      &:focus {
        outline: none;
      }

      button {
        padding: 20px 0;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        text-transform: uppercase;
      }
    }

    @media ${`(min-width: ${ScreenSize.desktopS}px)`} {
      li {
        margin: 0 15px;
      }
      .tab-vertical {
        margin-right: 0;
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
