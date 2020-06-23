import styled from 'styled-components';
import { SecondaryColor } from '../../Utils/Colors';

const DEFAULTS = {
  activeBackgroundColor: SecondaryColor.actionblue,
  inactiveBackgroundColor: SecondaryColor.grey,
  inactiveBallColor: SecondaryColor.white,
  activeBallColor: SecondaryColor.white,
};

interface ToggleProps {
  active: boolean;
}

const Toggle = styled.button<ToggleProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${({ active }) =>
    active ? DEFAULTS.activeBackgroundColor : DEFAULTS.inactiveBackgroundColor};
  height: 25px;
  width: 56px;
  border-radius: 14px;
  padding: 0px;
  border: none;
`;

const ToggleBall = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  background-color: ${DEFAULTS.inactiveBallColor};
  height: 19px;
  width: 19px;
  margin: 3px;
  transform: ${props =>
    props.active ? `translateX(31px)` : 'translateX(0px)'};
  &:active {
    background-color: ${DEFAULTS.activeBallColor};
  }
`;

export { ToggleBall, Toggle };
