export var ETabAlignment;

(function (ETabAlignment) {
  ETabAlignment["HORIZONTAL"] = "horizontal";
  ETabAlignment["VERTICAL"] = "vertical";
})(ETabAlignment || (ETabAlignment = {}));

export var ETabThemeVariant;

(function (ETabThemeVariant) {
  ETabThemeVariant["BLUE"] = "blue";
  ETabThemeVariant["BLACK"] = "black";
})(ETabThemeVariant || (ETabThemeVariant = {}));

export var ETooltipPosition;

(function (ETooltipPosition) {
  ETooltipPosition["TOP"] = "top";
  ETooltipPosition["BOTTOM"] = "bottom";
  ETooltipPosition["LEFT"] = "left";
  ETooltipPosition["RIGHT"] = "right";
})(ETooltipPosition || (ETooltipPosition = {}));

export var ButtonVariant = {
  SOLID_WHITE: 'solid-white',
  SOLID_BLUE: 'solid-blue',
  YELLOW: 'yellow',
  GHOST: 'ghost',
  WHITE_GREY: 'white-grey',
  LINK: 'link'
};
export var RoundedCornerButtonVariant = {
  SOLID_WHITE: 'solid-white',
  SOLID_BLUE: 'solid-blue',
  GHOST: 'ghost',
  WHITE_GREY: 'white-grey'
};
export var PsychedelicTheme = {
  BLUE_DOMINANT: 'blue-dominant',
  BLUE_DEFAULT: 'blue-default',
  RED_DOMINANT: 'red-dominant',
  RED_DEFAULT: 'red-default',
  YELLOW_DOMINANT: 'yellow-dominant',
  YELLOW_DEFAULT: 'yellow-default'
};
export var ButtonTheme = {
  BLUE: 'blue',
  WHITE: 'white'
};
export var ScreenSize = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 640,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1260,
  desktopL: 1440
};
export var Device = {
  mobileS: "(max-width: " + ScreenSize.mobileS + "px)",
  mobileM: "(max-width: " + ScreenSize.mobileM + "px)",
  mobileL: "(max-width: " + ScreenSize.mobileL + "px)",
  tablet: "(max-width: " + ScreenSize.tablet + "px)",
  desktopS: "(max-width: " + ScreenSize.desktopS + "px)",
  desktopM: "(max-width: " + ScreenSize.desktopM + "px)",
  desktopL: "(max-width: " + ScreenSize.desktopL + "px)",
  desktopXL: "(min-width: " + (ScreenSize.desktopL + 1) + "px)"
};