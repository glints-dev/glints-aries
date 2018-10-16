import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const DatePickerContainer = styled.div`
    position: absolute;
    width: 280px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: .5em;
`;

export const SectionContainer = styled.div`
    padding: 6px 10px;
    border-bottom: ${({ border }) => border ? '1px solid #E8E8E8' : null};
`;

export const FlexCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: center;
`;

export const IconHolder = styled.div`
    font-size: 8px;
    cursor: pointer;
`;

export const Table = styled.table`
    width: 100%;
    max-width: 100%;
`;

export const Td = styled.td`
   padding: 3px 0;
   text-align: center;
`;

export const Th = styled.th`
    padding: 3px 0;
    text-align: center;
`;

export const HoverContent = styled.div`
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    transition: background .3s ease;
    background-color: transparent;
    line-height: 22px;
    ${({ selectedDate, index }) => selectedDate && selectedDate === index
    ? `
        background-color: #1890ff;
        color: white;
    `
    : null}
    ${({ hoverAble }) => hoverAble
    ? `
        cursor: pointer;
        &:hover { 
            background-color: #E5F7FF;
        }
    `
    : null}
`;

export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: .5em;
`;
