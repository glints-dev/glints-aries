import { Greyscale } from '../../Utils/Colors';
export var getArrowColor = function getArrowColor(isWhite, isDisabled) {
  var color = isWhite ? Greyscale.white : Greyscale.black;
  return isDisabled ? '#c7c7c7' : color;
};