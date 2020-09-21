import * as React from 'react';
import styled from 'styled-components';
import { Greyscale } from '../src/Utils/Colors';

interface Data {
  [key: string]: any;
}

interface Column {
  title: string;
  dataIndex: string;
  render?: (data: Data) => React.ReactNode;
}

const Table = styled.table`
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border-bottom: 1px solid ${Greyscale.lightgrey};
`;

const Th = styled.th`
  padding: 10px 20px;
  font-weight: normal;
  background-color: ${Greyscale.softgrey};
  text-align: left;
`;

const Td = styled.td`
  padding: 10px 20px;
  vertical-align: top;
`;

export const StorybookTable: React.FC<{
  title?: string;
  dataSource: Data[];
  columns: Column[];
}> = ({ title, dataSource, columns }) => {
  const columnTitles = columns.map(column => column.title);

  return (
    <>
      {title && <h3>{title}</h3>}
      <Table>
        <thead>
          <tr>
            {columnTitles.map(title => (
              <Th key={title}>{title}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, index) => (
            <Tr key={index}>
              {columns.map(column => {
                return (
                  <Td key={column.dataIndex}>
                    {column.render
                      ? column.render(data)
                      : data[column.dataIndex]}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
