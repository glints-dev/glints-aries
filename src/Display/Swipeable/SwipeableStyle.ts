import styled from 'styled-components';

import { ScreenSize } from '../../Utils/StyleConfig';
import { Greyscale } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';

export const SwipeableContainer = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;

  /* make the horizontal scrollbar visible on desktop */
  &::-webkit-scrollbar {
    appearance: none;
    height: 7px;
  }

  /* make the horizontal scrollbar visible on desktop */
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: ${ScreenSize.desktopS}px) {
    scrollbar-width: none; /* hide scrollbar on firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SwipeableItemWrapper = styled.div`
  display: inline-flex;
  margin: 0 1em;
  padding: 1em 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const SwipeableCardExample = styled.div`
  width: 150px;
  height: 150px;
  background: ${Greyscale.white};
  box-shadow: ${Shadow.down1};
  display: flex;
  justify-content: center;
  align-items: center;
`;
