export enum ETabAlignment {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum EHorizontalTabVariant {
  UNDERLINED = 'underlined',
  COLORED = 'colored',
}

export enum ETabThemeVariant {
  BLUE = 'blue',
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
  mobileS: `(max-width: ${ScreenSize.mobileM - 1}px)`,
  mobileM: `(min-width: ${ScreenSize.mobileM}px)`,
  mobileL: `(min-width: ${ScreenSize.mobileL}px)`,
  tablet: `(min-width: ${ScreenSize.tablet}px)`,
  desktopS: `(min-width: ${ScreenSize.desktopS}px)`,
  desktopM: `(min-width: ${ScreenSize.desktopM}px)`,
  desktopL: `(min-width: ${ScreenSize.desktopL}px)`,
};
