import * as React from 'react';
import { ArrowBackIcon } from '../../General/Icon/components';
import { LeftArrowContainer } from './SliderStyle';
import { getArrowColor } from './utils';

const LeftArrow = (props: Props) => {
  const { index, previousSlide, arrowWhite, renderLeftIcon } = props;
  const disabled = index === 1;
  const color = getArrowColor(arrowWhite, disabled);

  return (
    <LeftArrowContainer
      disabled={disabled}
      onClick={previousSlide}
      data-testid="slider_left-arrow"
    >
      {renderLeftIcon ? (
        renderLeftIcon(disabled)
      ) : (
        <ArrowBackIcon color={color} />
      )}
    </LeftArrowContainer>
  );
};

interface Props {
  index: number;
  previousSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  arrowWhite: boolean;
  renderLeftIcon?: (disabled: boolean) => React.ReactElement;
}

export default LeftArrow;
