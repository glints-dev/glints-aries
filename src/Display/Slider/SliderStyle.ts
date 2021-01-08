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

interface ArrowContainerProps {
  disabled: boolean;
}

export const LeftArrowContainer = styled.div<ArrowContainerProps>`
  ${arrow};
  left: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const RightArrowContainer = styled.div<ArrowContainerProps>`
  ${arrow};
  right: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const SliderContainer = styled.div<SliderContainerProps>`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  outline: none;

  ${SliderItemWrapper} {
    padding: ${({ fullContent }) => !fullContent && '2em 4em'};
  }
`;

export const NavigationContainer = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationItem = styled.li`
  display: inline-flex;
  width: 6px;
  height: 6px;
  background: ${SecondaryColor.lightgrey};
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  margin: 0 3px;
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
    margin: 0 4px;

    &.active {
      width: 30px;
      height: 10px;
    }
  }
`;

interface SliderContainerProps {
  fullContent: boolean;
}
