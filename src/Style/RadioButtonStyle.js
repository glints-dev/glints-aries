import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const RadioLabel = styled.span`
  display: inline-flex; 
  position: relative;
  padding-left: 1.8em;
  color: ${({ theme }) => theme === 'white' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};

  &:before {
    content: '';
    display: block; 
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: ${({ theme }) => theme === 'white' ? `1px solid ${SecondaryColor.white}` : `1px solid ${SecondaryColor.lightgrey}`};
    background: ${({ theme }) => theme === 'white' ? 'transparent' : `${SecondaryColor.white}`};
  }
  &:after {
    content: '';
    display: block; 
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme === 'white' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
    position: absolute;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    opacity: 0;
    transform: scale(0,0); 
    transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`;

export const RadioContainer = styled.label`
  display: inline-flex;
  cursor: pointer; 
  user-select:none;
  text-align: left;

  input {
    display: none;

    &+${RadioLabel};
    
    &:checked+span:after {
      opacity: 1;
      transform: scale(1,1);
    }
  }
`;
