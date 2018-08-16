import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

/*
 * Job Card
 */

export const JobCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  width: 380px;
  max-height: 32em;
  min-height: 32em;

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, ${SecondaryColor.lightgrey} 7px);
    top: .5em;
    left: .5em;
    z-index: -1;
    transition: all .2s;
  }

  &:hover:after {
    opacity: 1;
    transition: all .2s;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: ${({ paddingSize }) => paddingSize};
`;

export const HeaderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2em;
  height: 5em;
  width: 5em;
  border: 1px solid #C6C6C6;

  img {
    object-fit: contain;
  }
`;

export const HeaderContent = styled.div`
  padding-left: 1.2em;

  label {
    background: ${PrimaryColor.glintsblue};
    color: ${SecondaryColor.white};
    text-transform: uppercase;
    padding: .2em .6em;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: .5em;
  }

  h3 {
    font-weight: 600;
  }

  a {
    color: ${SecondaryColor.blue};
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: none;
      opacity: .75;
    }
  }
`;

export const Body = styled.div`
  position: relative;
  padding-top: 0;
  padding-right: 1.4em;
  padding-bottom: 1.4em;
  padding-left: 1.4em;

  &:before {
    content: '';
    background: ${SecondaryColor.lightgrey};
    width: 100%;
    height: 1px;
    display: flex;
  }
`;

export const JobDetail = styled.div`  
  padding-top: 1.5em;

  ul {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: .4em;

    li {
      display: flex;
      align-items: center;

      svg {
        margin-right: .5em;
      }
    }
  }
`;

export const JobDescription = styled.div`
  margin-top: 2em;
  color: ${SecondaryColor.lightblack};
  font-weight: 100;

  p {
    font-size: 14px;
    line-height: 1.6;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  label {
    display: flex;
    align-items: center;
    margin-top: .5em;

    svg {
      margin-right: .5em;
    }
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;

  > *:nth-child(2) {
    margin-right: ${({ totalItems }) => totalItems === 3 && '6em'};
  }
  
`;
