import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const CarouselContent = styled.div`
  flex-shrink: 0;
  width: 100%;

  &.inactive {
    display: none;
    height: 0;
    padding: 0 !important;
    pointer-events: none;
  }
`;
