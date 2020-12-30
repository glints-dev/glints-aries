import { SecondaryColor } from '../../Utils/Colors';

export const getArrowColor = (isWhite: boolean, isDisabled: boolean) => {
  const color = isWhite ? SecondaryColor.white : SecondaryColor.black;
  return isDisabled ? '#c7c7c7' : color;
};
