import styled from 'styled-components';

export const BrandContainer = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus > img {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const BrandImage = styled.img<{ $variant?: 'square' | 'horizontal' }>`
  object-fit: contain;
  width: ${({ $variant }) => ($variant === 'square' ? '3em' : '5em')};
  height: 3em;
  outline: none;
`;
