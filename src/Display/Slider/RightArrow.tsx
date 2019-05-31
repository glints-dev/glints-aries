import * as React from 'react';
import { Icon } from '../../General/Icon';
import { RightArrowContainer } from '../../Style/Display/SliderStyle';

const RightArrow: React.FunctionComponent<Props> = (props) => {
  const {
    index,
    limit,
    nextSlide,
    arrowWhite,
  } = props;

  let arrowColor = 'black';

  if (limit === index) arrowColor = '#c7c7c7';

  return (
    <RightArrowContainer index={index} limit={limit} onClick={nextSlide}>
      <Icon name="arrow-next" color={arrowWhite ? '#FFFFFF' : arrowColor} />
    </RightArrowContainer>
  );
};

interface Props {
  index: number;
  limit: number;
  nextSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  arrowWhite: boolean;
}

export default RightArrow;
