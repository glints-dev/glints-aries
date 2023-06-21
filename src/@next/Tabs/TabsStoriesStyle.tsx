/* eslint-disable react/jsx-key */
import styled from 'styled-components';

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const StyledColumn = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const StyledHeaderColumn = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const CustomMarginModificationContainer = styled.div`
  .tabs-header-container {
    margin-bottom: 8px;
  }
`;
