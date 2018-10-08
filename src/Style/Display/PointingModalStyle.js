import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const PointingModalContainer = styled.div`
  position: relative;
  background: ${SecondaryColor.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const PointingModalHeaderArrow = styled.div`
  position: absolute;
  right: 1em;
  top: -.7em;
  width: 1.5em;
  height: 1.5em;
  transform: rotate(45deg);
  background-color: white;
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
`;

export const PointingModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;

  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }

  > * {
    margin-left: .5em;
    margin-right: .5em;
  }

  .aries-modal-profile {
    font-weight: 700;
  }

  span {
    font-size: 1em;
    font-weight: 500;
  }

  p {
    font-size: 1.2em;
    margin: 0;
  }
`;

export const PointingModalBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ul {
    padding: 2rem 0;
  }
`;

export const PointingModalItemWrapper = styled.li`
  font-weight: 600;
  cursor: pointer;
  padding: .5em 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  * {
    cursor: pointer;
  }

  &:hover {
    background: ${SecondaryColor.whitesmoke};
  }
`;

export const PointingModalFooterWrapper = styled.footer`
  display: flex;
  position: relative;
  padding: 2rem;
`;
