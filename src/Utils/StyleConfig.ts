export enum ETabAlignment {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum EHorizontalTabVariant {
  UNDERLINED = 'underlined',
  COLORED = 'colored',
}

export enum ETooltipPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum Variant {
  SOLID = 'solid',
  GHOST = 'ghost',
  LINK = 'link',
  SOLID_SHADOW = 'solid-shadow',
}

export const PsychedelicTheme = {
  BLUE_DOMINANT: 'blue-dominant',
  BLUE_DEFAULT: 'blue-default',
  RED_DOMINANT: 'red-dominant',
  RED_DEFAULT: 'red-default',
  YELLOW_DOMINANT: 'yellow-dominant',
  YELLOW_DEFAULT: 'yellow-default',
};

export enum Theme {
  RED = 'red',
  YELLOW = 'yellow',
  BLUE = 'blue',
  BLUE_RED = 'blue-red',
  WHITE = 'white',
  GREY = 'grey',
}

export enum Size {
  SMALL = 'small',
  LARGE = 'large',
}

/* Screen size library of Glints
 * Usage:
 * @media ${Device.mobileL} { ... }
 */

export const ScreenSize = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 640,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1260,
  desktopL: 1440,
};

export const Device = {
  mobileS: `(max-width: ${ScreenSize.mobileS}px)`,
  mobileM: `(max-width: ${ScreenSize.mobileM}px)`,
  mobileL: `(max-width: ${ScreenSize.mobileL}px)`,
  tablet: `(max-width: ${ScreenSize.tablet}px)`,
  desktopS: `(max-width: ${ScreenSize.desktopS}px)`,
  desktopM: `(max-width: ${ScreenSize.desktopM}px)`,
  desktopL: `(max-width: ${ScreenSize.desktopL}px)`,
};
