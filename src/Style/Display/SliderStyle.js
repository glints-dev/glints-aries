import styled, { css } from 'styled-components';

const arrow = css`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
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
  padding: 2em 4em;
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
