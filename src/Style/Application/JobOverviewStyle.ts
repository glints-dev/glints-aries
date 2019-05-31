import styled from 'styled-components';
import { Device } from '../../Utils/StyleConfig';

export const JobOverviewContainer = styled.div`
  position: relative;
  display: flex;
`;

export const JobOverviewHeaderStyle = styled.div`
  min-width: 64px;
`;

export const JobOverviewBodystyle = styled.div`
  margin-left: 30px;
  width: 100%;
`;

export const JobOverviewLabelStyle = styled.p`
  display: inline-block;
  color: #ffffff;
  background: #00aeef;
  padding: 1px 6px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 15px !important;
`;

export const JobOverviewHeadingStyle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 10px !important;
`;

export const JobOverviewLinkStyle = styled.div`
  margin-bottom: 15px;
  a {
    display: block;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0076e0;
    cursor: pointer;
  }
`;

export const JobOverviewInfostyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  

  @media ${Device.tablet} {
    display: block;
    flex-wrap: none;
  }

  p {
    margin-right: 30px !important;
    margin-bottom: 10px !important;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    display: flex;
    
    span svg {
      margin-top: 0;
    }

    svg {
      vertical-align: middle;
      margin-right: 5px;
      margin-top: 7px;
      width: 6px;
      height: 6px;
    }
  }
`;
