import * as React from 'react';
import { ArrowNextIcon } from '../../General/Icon/components';
import { RightArrowContainer } from './SliderStyle';
import { getArrowColor } from './utils';

const RightArrow: React.FunctionComponent<Props> = props => {
  const { index, limit, nextSlide, arrowWhite } = props;
  const disabled = index === limit;
  const color = getArrowColor(arrowWhite, disabled);

  return (
    <RightArrowContainer
      disabled={disabled}
      onClick={nextSlide}
      data-testid="slider_right-arrow"
    >
      <ArrowNextIcon color={color} />
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
