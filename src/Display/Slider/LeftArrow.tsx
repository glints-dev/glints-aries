import * as React from 'react';
import { ArrowBackIcon } from '../../General/Icon/components';
import { LeftArrowContainer } from '../../Style/Display/SliderStyle';

const LeftArrow = (props: Props) => {
  const { index, previousSlide, arrowWhite } = props;

  let arrowColor = 'black';

  if (index === 1) arrowColor = '#c7c7c7';

  return (
    <LeftArrowContainer index={index} onClick={previousSlide}>
      <ArrowBackIcon color={arrowWhite ? '#FFFFFF' : arrowColor} />
    </LeftArrowContainer>
  );
};

interface Props {
  index: number;
  previousSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  arrowWhite: boolean;
}

export default LeftArrow;
