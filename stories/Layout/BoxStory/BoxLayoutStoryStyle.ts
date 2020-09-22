import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  font-size: 16px;
`;

export const List = styled.div`
  background-color: #f3f3f3;

  > p {
    display: flex;
    align-items: center;
    margin-right: 10px;
    text-align: center;
    font-size: 20px;
  }
`;
