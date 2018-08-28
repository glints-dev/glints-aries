import styled from 'styled-components';

import { Device } from '../Utils/StyleConfig';

import { SecondaryColor } from './Colors';

export const Container = styled.div`
  position: relative;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input { 
    margin: 0;
    padding: 1.8rem 17rem 1.8rem 3rem;
    background: ${SecondaryColor.white};
    border: 5px solid ${SecondaryColor.lightgrey};
    font-size: 22px;
    color: ${SecondaryColor.lightblack};
    width: 100%;

    @media ${Device.mobileL} {
      padding: 1rem 5.7rem 1rem 1rem;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 2rem;
    height: 100%;
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 2.14em 2.14em 2.86em 2.14em;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  z-index: 9999;
  
  @media ${Device.mobileL} {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const ItemWrapper = styled.div`
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

export const SearchFilterItems = styled.li`
  position: relative;
`;
