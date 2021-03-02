import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';

export const PointingModalContainer = styled.div`
  position: relative;
  background: ${Greyscale.white};
  box-shadow: ${Shadow.down2};
  outline: none;
`;

export const PointingModalHeaderArrow = styled.div`
  position: absolute;
  right: 1em;
  top: -0.7em;
  width: 1.5em;
  height: 1.5em;
  transform: rotate(45deg);
  background-color: white;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
`;

export const PointingModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2em;

  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }

  > * {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .aries-modal-profile {
    font-weight: 700;
  }

  span {
    font-size: 1em;
    font-weight: 500;
  }

  a {
    display: flex;
    color: ${Greyscale.black};
    font-size: 1.2em;
    margin: 0;
  }
`;

export const PointingModalBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ul {
    padding: 1.2em 0;
    margin: 0;
  }
`;

export const PointingModalItemWrapper = styled.li`
  font-weight: 600;
  cursor: pointer;
  padding: 0.5em 1.2em;
  list-style-type: none;

  &:last-child {
    margin-bottom: 0;
  }

  * {
    cursor: pointer;
    color: ${Greyscale.black};
  }

  &:hover {
    background: ${Greyscale.softgrey};
  }
`;

export const PointingModalFooterWrapper = styled.footer`
  display: flex;
  position: relative;
  padding: 1.2em;
`;
