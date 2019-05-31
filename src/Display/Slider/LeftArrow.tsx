import * as React from 'react';
import { Icon } from '../../General/Icon';
import { LeftArrowContainer } from '../../Style/Display/SliderStyle';

const LeftArrow = (props: Props) => {
  const {
    index,
    previousSlide,
    arrowWhite,
  } = props;

  let arrowColor = 'black';

  if (index === 1) arrowColor = '#c7c7c7';

  return (
    <LeftArrowContainer index={index} onClick={previousSlide}>
      <Icon name="arrow-back" color={arrowWhite ? '#FFFFFF' : arrowColor} />
    </LeftArrowContainer>
  );
};

interface Props {
  index: number;
  previousSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  arrowWhite: boolean;
}

export default LeftArrow;
