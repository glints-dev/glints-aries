import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { SecondaryColor } from '../Colors';

export const SearchFilterContainer = styled.div`
  position: relative;
`;

export const SearchFilterBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input { 
    padding: 25px 3.5em 25px 30px;
    background: ${SecondaryColor.white};
    border: 3px solid ${SecondaryColor.darkgrey};
    font-size: 1.5em;
    line-height: 1.5;
    color: ${SecondaryColor.lightblack};
    width: 100%;

    @media ${Device.mobileL} {
      padding: 1em 5em 1em 1em;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 1em;
    font-size: 1.5em;
    height: 100%;
  }
`;

export const SearchFilterResultContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  font-size: 1.1em;
  grid-template-columns: auto auto auto;
  padding: 25px 3.5em 25px 30px;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  z-index: 9999;
  
  @media ${Device.mobileL} {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const SearchFilterListWrapper = styled.div`
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

export const SearchFilterItemWrapper = styled.li`
  position: relative;
`;
