import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const RadioLabel = styled.span`
  display: inline-flex; 
  position: relative;
  font-size: 1em;
  color: ${({ theme }) => theme === 'white' ? `${SecondaryColor.white}` : `${SecondaryColor.black}`};
  outline: none;

  &:before {
    content: '';
    display: block; 
    position: relative;
    top: 0;
    left: 0;
    margin-right: 8px;
    border-radius: 50%;
    width: 1.4em;
    height: 1.4em;
    border: ${({ theme }) => theme === 'white' ? `1px solid ${SecondaryColor.white}` : `1px solid ${SecondaryColor.lightgrey}`};
    background: ${({ theme }) => theme === 'white' ? 'transparent' : `${SecondaryColor.white}`};
  }
  &:after {
    content: '';
    display: block; 
    width: 1em;
    height: 1em;
    background: ${({ theme }) => theme === 'white' ? `${SecondaryColor.white}` : `${SecondaryColor.darkgreen}`};
    position: absolute;
    border-radius: 50%;
    top: .2em;
    left: .2em;
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

  &:focus {
    outline: none;
  }

  &:focus > ${RadioLabel} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
