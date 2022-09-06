"use strict";

exports.__esModule = true;
exports.ScreenSize = exports.RoundedCornerButtonVariant = exports.PsychedelicTheme = exports.ETooltipPosition = exports.ETabThemeVariant = exports.ETabAlignment = exports.Device = exports.ButtonVariant = exports.ButtonTheme = void 0;
var ETabAlignment;
exports.ETabAlignment = ETabAlignment;

(function (ETabAlignment) {
  ETabAlignment["HORIZONTAL"] = "horizontal";
  ETabAlignment["VERTICAL"] = "vertical";
})(ETabAlignment || (exports.ETabAlignment = ETabAlignment = {}));

var ETabThemeVariant;
exports.ETabThemeVariant = ETabThemeVariant;

(function (ETabThemeVariant) {
  ETabThemeVariant["BLUE"] = "blue";
  ETabThemeVariant["BLACK"] = "black";
})(ETabThemeVariant || (exports.ETabThemeVariant = ETabThemeVariant = {}));

var ETooltipPosition;
exports.ETooltipPosition = ETooltipPosition;

(function (ETooltipPosition) {
  ETooltipPosition["TOP"] = "top";
  ETooltipPosition["BOTTOM"] = "bottom";
  ETooltipPosition["LEFT"] = "left";
  ETooltipPosition["RIGHT"] = "right";
})(ETooltipPosition || (exports.ETooltipPosition = ETooltipPosition = {}));

var ButtonVariant = {
  SOLID_WHITE: 'solid-white',
  SOLID_BLUE: 'solid-blue',
  YELLOW: 'yellow',
  GHOST: 'ghost',
  WHITE_GREY: 'white-grey',
  LINK: 'link'
};
exports.ButtonVariant = ButtonVariant;
var RoundedCornerButtonVariant = {
  SOLID_WHITE: 'solid-white',
  SOLID_BLUE: 'solid-blue',
  GHOST: 'ghost',
  WHITE_GREY: 'white-grey'
};
exports.RoundedCornerButtonVariant = RoundedCornerButtonVariant;
var PsychedelicTheme = {
  BLUE_DOMINANT: 'blue-dominant',
  BLUE_DEFAULT: 'blue-default',
  RED_DOMINANT: 'red-dominant',
  RED_DEFAULT: 'red-default',
  YELLOW_DOMINANT: 'yellow-dominant',
  YELLOW_DEFAULT: 'yellow-default'
};
exports.PsychedelicTheme = PsychedelicTheme;
var ButtonTheme = {
  BLUE: 'blue',
  WHITE: 'white'
};
exports.ButtonTheme = ButtonTheme;
var ScreenSize = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 640,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1260,
  desktopL: 1440
};
exports.ScreenSize = ScreenSize;
var Device = {
  mobileS: "(max-width: " + ScreenSize.mobileS + "px)",
  mobileM: "(max-width: " + ScreenSize.mobileM + "px)",
  mobileL: "(max-width: " + ScreenSize.mobileL + "px)",
  tablet: "(max-width: " + ScreenSize.tablet + "px)",
  desktopS: "(max-width: " + ScreenSize.desktopS + "px)",
  desktopM: "(max-width: " + ScreenSize.desktopM + "px)",
  desktopL: "(max-width: " + ScreenSize.desktopL + "px)",
  desktopXL: "(min-width: " + (ScreenSize.desktopL + 1) + "px)"
};
exports.Device = Device;