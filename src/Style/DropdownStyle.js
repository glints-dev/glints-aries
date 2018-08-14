import styled, { keyframes } from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import { Size } from '../Utils/StyleConfig';

const growing = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: auto;
  }
`;

export const DropdownLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1em;
`;

export const DropdownLabel = styled.div`
  margin-right: 3em;
  cursor: pointer;
`;

export const DropdownItemWrapper = styled.div`
  position: absolute;
  width: auto;
  background: ${SecondaryColor.white};
  padding: .4em 1em;
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);
  max-height: 180px;
  overflow-y: auto;
  animation: ${growing} .2s linear;
`;

export const DropdownItem = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: .5em;
  color: ${SecondaryColor.lightblack};
    
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${PrimaryColor.glintsblue};
  }
`;

export const DropdownContainer = styled.div`
  outline: none;

  ${DropdownLabelWrapper} {
    background: ${({ open }) => open ? `${SecondaryColor.blue}` : `${SecondaryColor.white}`};
    color: ${({ open }) => open ? `${SecondaryColor.white}` : `${SecondaryColor.blue}`};
    transition: all .3s;

    &:hover {
      background: ${SecondaryColor.blue};
      color: ${SecondaryColor.white};
      transition: all .3s;
    }
  }
    
  ${DropdownLabel} {
    font-size: ${props => props.size === `${Size.SMALL}`
    ? '12px'
    : props.size === `${Size.MEDIUM}`
    ? '16px'
    : props.size === `${Size.LARGE}`
    ? '22px'
    : '14px'};
  }

  ${DropdownItem} {
    font-size: ${props => props.size === `${Size.SMALL}`
    ? '10px'
    : props.size === `${Size.MEDIUM}`
    ? '12px'
    : props.size === `${Size.LARGE}`
    ? '14px'
    : '12px'};
  }
`;
