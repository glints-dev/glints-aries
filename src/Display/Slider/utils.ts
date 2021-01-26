import { Greyscale } from '../../Utils/Colors';

export const getArrowColor = (isWhite: boolean, isDisabled: boolean) => {
  const color = isWhite ? Greyscale.white : Greyscale.black;
  return isDisabled ? '#c7c7c7' : color;
};
