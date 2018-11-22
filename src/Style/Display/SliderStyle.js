import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

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

export const LeftArrowContainer = styled.div`
  ${arrow};
  left: 0;
  cursor: ${({ index }) => index === 1 ? 'not-allowed' : 'pointer'};
`;

export const RightArrowContainer = styled.div`
  ${arrow};
  right: 0;
  cursor: ${({ index, limit }) => index === limit ? 'not-allowed' : 'pointer'};
`;

export const SliderContainer = styled.div`
  position: relative;
  white-space: nowrap;
  overflow: hidden;

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

    li {
      display: inline-flex;
      width: 1em;
      height: 1em;
      background: ${SecondaryColor.lightgrey};
      border-radius: 50%;
      box-shadow: 0 1px 1px rgba(0,0,0,0.15);
      margin: 0 6px;
      cursor: pointer;

      &.active {
        width: 2.5em;
        border-radius: 1em;
        background: ${PrimaryColor.glintsyellow};
      }
    }
  }
`;
