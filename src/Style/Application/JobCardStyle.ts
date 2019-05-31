import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PrimaryColor, SecondaryColor } from '../Colors';

import { Device } from '../../Utils/StyleConfig';

export const JobcardContainer = styled.div`
  position: relative;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  width: 100%;
  min-width: 300px;
  height: 100%;
  outline: none;

  a {
    text-decoration: none;
  }

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(-45deg, transparent, transparent 3px, ${SecondaryColor.lightgrey} 5px);
    top: .5em;
    left: .5em;
    z-index: 0;
    transition: all .2s;
  }

  &:hover:after {
    opacity: 1;
    transition: all .2s;
  }

  @media ${Device.mobileM} {
    width: 300px;
  }

  @media ${Device.mobileS} {
    width: 300px;
  }
`;

export const JobCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: white;
`;

export const JobcardHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1.4em;
  outline: none;
`;

export const JobcardHeaderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2em;
  border: 1px solid #C6C6C6;
  overflow: hidden;
  margin: auto;
`;

export const JobcardHeaderContent = styled.div`
  padding-left: 1.2em;
  cursor: pointer;

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
    margin: 0;
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

export const JobcardBodyWrapper = styled.div`
  position: relative;
  padding-top: 0;
  padding-right: 1.4em;
  padding-bottom: 1.4em;
  padding-left: 1.4em;
  margin-bottom: 3.4em;
  cursor: pointer;
  outline: none;

  &:before {
    content: '';
    background: ${SecondaryColor.lightgrey};
    width: 100%;
    height: 1px;
    display: flex;
  }
`;

export const JobcardDetailWrapper = styled.div`  
  padding-top: 1.5em;

  ul {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: .4em;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      display: flex;
      margin-left: 1em;
      list-style-type: none;

      svg {
        margin: .5em;
      }
    }

    @media ${Device.mobileM} {
      grid-template-columns: auto;
    }

    @media ${Device.mobileS} {
      grid-template-columns: auto;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const JobcardDescriptionWrapper = styled.div`
  margin-top: 2em;
  color: ${SecondaryColor.lightblack};
  font-weight: 100;
  p {
    position: relative;
    font-size: 14px;
    line-height: 1.6;
    height: 9.28571em;
    overflow: hidden;
    &:after {
      content: '';
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10em;
      height: 1.428571429em;
      background: linear-gradient(90deg, rgba(256, 256, 256, 0.0), rgba(256, 256, 256, 1.0) 75%);
    }
  }

  span {
    display: flex;
    align-items: center;
    margin-top: .5em;

    svg {
      margin-right: .5em;
    }
  }
`;

export const Title = styled.h3`
  word-break: break-word;
`;

export const SubtitleTitle = styled.p`
  color: ${SecondaryColor.blue};
  word-break: break-word;
`;

export const JobCardFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  outline: none;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 5em;
  width: 5em;
`;

export const LabelTag = styled.span`
  font-family: Poppins;
  display: inline-block;
  color: ${SecondaryColor.white};
  background-color: ${PrimaryColor.glintsblue};
  padding: .2em .6em;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: .5em;
  text-transform: uppercase;
`;

export const CustomLink = styled(Link)`
  color: ${SecondaryColor.black};
  cursor: pointer;
  &:hover {
    color: ${SecondaryColor.black};
  }
`;

export const IconHolder = styled.div`
  width: .5em;
  height: .5em;
`;
