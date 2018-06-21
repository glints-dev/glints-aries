import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import './GlobalStyle';

/*
 * Job Card
 */

export const JobCardContainer = styled.div`
  position: relative;
  cursor: pointer;
  background: ${SecondaryColor.white};
  border: 1px solid ${SecondaryColor.lightgrey};
  width: 380px;

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

export const Header = styled.header`
  position: relative;
  background-image: url(${props => props.FeaturedImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 12em;

  label {
    position: absolute;
    bottom: 0;
    left: 1.4em;
    background: ${PrimaryColor.glintsblue};
    color: ${SecondaryColor.white};
    text-transform: uppercase;
    font-weight: 600;
    padding: .2em 1em;
  }
`;

export const Body = styled.div`
  position: relative;
  padding: 1.4em;
`;

export const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  padding-bottom: 1.5em;
  border-bottom: 1px solid ${SecondaryColor.lightgrey};
`;

export const CompanyImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 4em;
  height: 4em;
  border: 1px solid ${SecondaryColor.lightgrey};
  padding: .2em;

  img {
    width: 100%;
  }
`;

export const Company = styled.div`
  position: relative;

  label {
    display: flex;
    font-weight: bold;
  }

  span {
    color: ${PrimaryColor.glintsblue};
  }
`;

export const JobDetail = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: .4em;
  padding-top: 1.5em;

  label {
    display: flex;
    align-items: center;
    img {
      height: 14px;
      width: 14px;
      margin-right: .6em;
    }
  }
`;

export const JobDescription = styled.div`
  margin-top: 2em;
  > p {
    font-size: 14px;
    line-height: 1.6;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: auto auto auto;
`;