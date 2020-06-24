import * as React from 'react';
import { SliderItemWrapper } from './SliderStyle';

const SliderItem: React.FunctionComponent<Props> = props => {
  const { children } = props;

  return (
    <SliderItemWrapper className="slider-item">{children}</SliderItemWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
}

export default SliderItem;
