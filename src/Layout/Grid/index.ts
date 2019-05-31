import GlintsContainer from '../../Style/GlintsContainerStyle';
import Col from './Col';
import Row from './Row';

type Grid = typeof GlintsContainer & {
  Col?: typeof Col;
  Row?: typeof Row;
}

const Grid: Grid = GlintsContainer;
Grid.Col = Col;
Grid.Row = Row;

export default Grid;
