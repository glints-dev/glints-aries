import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${SecondaryColor.lighterblack};
  width: 300px;
  height: 50px;
  border-radius: 3rem;

  label {
    color: ${SecondaryColor.white};
    font-weight: 100;
  }

  &:before {
    content: '';
    background: ${PrimaryColor.glintsblue};
    width: 150px;
    height: 50px;
    border-radius: 3rem;
    display: flex;
    position: absolute;
    left: 0;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    transform: ${({ ID, value, defaultValue }) => ID && value[0] === defaultValue ? 'translateX(0)' : 'translateX(150px)'};
    transition: transform .2s ease-out;
  }
`;

export const LeftItemWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const RightItemWrapper = styled.div`
  position: relative;
  display: flex;
`;
