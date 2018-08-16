import styled from 'styled-components';

export const CollapsibleContainer = styled.div`
  cursor: pointer;
  color: black;
  background-color: #ffffff;
  border: solid 1px #c6c6c6;
  font-size: 16px;
`;

export const CollapsibleHeadStyle = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  &:hover {
    color: #0076e0;
  }

  svg {
    margin-top: 6px;
  }
`;

export const CollapsibleBodyStyle = styled.div`
  margin-top: 17px;
  padding: 0 20px 20px 20px;
`;
