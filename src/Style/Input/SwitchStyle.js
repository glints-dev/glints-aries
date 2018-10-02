import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  background: ${SecondaryColor.lighterblack};
  width: 300px;
  height: 50px;
  border-radius: 3rem;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${SecondaryColor.white};
    font-weight: 100;
    width: 100%;
    height: inherit;
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
    transform: ${({ ID, items, defaultValue }) => ID && items[0] === defaultValue ? 'translateX(0)' : 'translateX(150px)'};
    transition: transform .2s ease-out;
  }
`;

export const SwitchItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  cursor: pointer;
`;

export const LeftItemWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const RightItemWrapper = styled.div`
  position: relative;
  display: flex;
`;
