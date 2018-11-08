import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { SecondaryColor } from '../Colors';

export const OmniSearchContainer = styled.div`
  position: relative;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
`;

export const OmniSearchBar = styled.div`
  display: flex;
  align-items: center;
  
  @media ${Device.mobileL} {
    flex-direction: column;
  }

  input { 
    padding: 25px 8em 25px 30px;
    background: ${SecondaryColor.white};
    border: 3px solid ${SecondaryColor.darkgrey};
    font-size: 1.5em;
    line-height: 1.5;
    color: ${SecondaryColor.lightblack};
    width: 100%;
    
    @media ${Device.mobileL} {
      padding: 1em;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    padding: 25px 30px;
    right: 3px;
    font-size: 1.5em;
    font-weight: normal;
    z-index: 1;

    @media ${Device.mobileL} {
      top: 5em;
      right: 0;
      width: 100%;
    }

    svg {
      margin-left: 1em;
    }
  }
`;

export const OmniSearchBody = styled.div`
  position: relative;
  display: ${({ open }) => open ? 'block' : 'none'};
`;

export const OmniSearchResultContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 25px 30px;
  font-size: 1.1em;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  z-index: 9999;
  
  @media ${Device.mobileL} {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const OmniSearchListItem = styled.div`
  position: relative;

  label {
    color: ${SecondaryColor.lightblack};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .3px;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: .6em;
      cursor: pointer;

      &:first-child {
        margin-top: .5em;
      }

      &:last-child {
        margin-bottom: 0;
      }

      svg,
      img {
        margin-right: 1em;
      }

      img {
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

export const OmniSearchItemWrapper = styled.li`
  position: relative;
`;
