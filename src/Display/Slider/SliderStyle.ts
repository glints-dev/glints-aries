import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { ScreenSize } from '../../Utils/StyleConfig';

const arrow = css`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2em;
`;

export const SliderContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SliderItemWrapper = styled.div`
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  width: 100%;
  white-space: normal;
`;

export const LeftArrowContainer = styled.div<LeftArrowContainerProps>`
  ${arrow};
  left: 0;
  cursor: ${({ index }) => (index === 1 ? 'not-allowed' : 'pointer')};
`;

interface LeftArrowContainerProps {
  index: number;
}

export const RightArrowContainer = styled.div<RightArrowContainerProps>`
  ${arrow};
  right: 0;
  cursor: ${({ index, limit }) =>
    index === limit ? 'not-allowed' : 'pointer'};
`;

interface RightArrowContainerProps {
  index: number;
  limit: number;
}

export const SliderContainer = styled.div<SliderContainerProps>`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  outline: none;

  ${SliderItemWrapper} {
    padding: ${({ fullContent }) => !fullContent && '2em 4em'};
  }

  ul {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: inline-flex;
      width: 4px;
      height: 4px;
      background: ${SecondaryColor.lightgrey};
      border-radius: 50%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      margin: 0 4px;
      cursor: pointer;

      &.active {
        width: 20px;
        height: 6px;
        border-radius: 8px;
        background: ${PrimaryColor.glintsyellow};
      }

      @media (min-width: ${ScreenSize.tablet}px) {
        width: 8px;
        height: 8px;

        &.active {
          width: 30px;
          height: 10px;
        }
      }
    }
  }
`;

interface SliderContainerProps {
  fullContent: boolean;
}
