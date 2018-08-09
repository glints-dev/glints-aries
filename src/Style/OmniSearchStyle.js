import styled from 'styled-components';
import { Device } from '../Utils/StyleConfig';
import { SecondaryColor } from './Colors';

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
    margin: 0;
    padding: 1.8rem 17rem 1.8rem 3rem;
    background: ${SecondaryColor.white};
    border: 5px solid ${SecondaryColor.lightgrey};
    font-size: 22px;
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
    right: 1rem;
    padding: 1.4rem 3rem;
    font-size: 22px;
    font-weight: normal;

    @media ${Device.mobileL} {
      top: 11rem;
      right: 0;
      width: 100%;
    }

    svg {
      margin-left: 1em;
    }
  }
`;

export const OmniSearchItemContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 2.14em 2.14em 2.86em 2.14em;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  @media ${Device.mobileL} {
    grid-template-columns: auto;
    grid-gap: 2em;
  }
`;

export const OmniSearchItemWrapper = styled.div`
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
