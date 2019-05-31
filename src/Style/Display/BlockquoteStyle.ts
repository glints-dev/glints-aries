import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';
import { Device } from '../../Utils/StyleConfig';

export const BlockquoteTestimonyWrapper = styled.p`
  font-weight: 100;
  font-size: 1.1em;
  margin-bottom: .5em;
`;

export const BlockquoteAuthorWrapper = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.1em;
  opacity: .75;

  &:before {
    position: relative;
    content: '';
    display: inline-flex;
    width: 2em;
    height: 1px;
    bottom: .2em;
    margin-right: 1em;
    background: ${SecondaryColor.lightblack};
  }
`;

export const BlockquoteOriginWrapper = styled.span`
  font-weight: 100;
  font-size: 1em;
  opacity: .75;
`;

export const BlockquoteProfileWrapper = styled.div`
  position: absolute;
  font-size: 1.7em;
  transform: translate(-25%, 40%);


  @media ${Device.mobileL} {
    position: relative;
    display: flex;
    justify-content: center;
    transform: translateY(-75%);
    top: 0;
  }
`;

export const BlockquoteContainer = styled.div`
  position: relative;
  background: ${SecondaryColor.white};
  color: ${SecondaryColor.black};
  transition: all .2s;
  font-size: 1em;
  line-height: 1.5;
  
  @media ${Device.mobileL} {
    flex-direction: column;
    text-align: center;
  }
  
  &:hover {
    background: ${PrimaryColor.glintsblue};
    color: ${SecondaryColor.white};
  }

  svg {
    position: absolute;
    font-size: 3em;
    top: -20px;
    left: 120px;

    @media ${Device.mobileL} {
      display: inline-flex;
      align-self: center;
      position: relative;
      left: auto;
      top: 120px;
    }
  }
`;

export const BlockquoteContentWrapper = styled.div`
  padding: 2.86em 2.86em 3.57em 9em;
  
  @media ${Device.mobileL} {
    padding: 2.5em 2em 2.5em 2em;
  }
`;
