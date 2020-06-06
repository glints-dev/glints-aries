export enum ETabAlignment {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum EHorizontalTabVariant {
  UNDERLINED = 'underlined',
  COLORED = 'colored',
}

export enum ETabColourVariant {
  GREY = 'grey',
  BLACK = 'black',
}

export enum ETooltipPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export const ButtonVariant = {
  SOLID_WHITE: 'solid-white',
  SOLID_BLUE: 'solid-blue',
  YELLOW: 'yellow',
  GHOST: 'ghost',
  WHITE_GREY: 'white-grey',
  LINK: 'link',
};

export const PsychedelicTheme = {
  BLUE_DOMINANT: 'blue-dominant',
  BLUE_DEFAULT: 'blue-default',
  RED_DOMINANT: 'red-dominant',
  RED_DEFAULT: 'red-default',
  YELLOW_DOMINANT: 'yellow-dominant',
  YELLOW_DEFAULT: 'yellow-default',
};

export const ButtonTheme = {
  BLUE: 'blue',
  WHITE: 'white',
};

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
