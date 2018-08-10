export const Variant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
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

export const Theme = {
  RED: 'red',
  YELLOW: 'yellow',
  BLUE: 'blue',
  BLUE_RED: 'blue-red',
  WHITE: 'white',
  GREY: 'grey',
};

export const Size = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

export const Thickness = {
  THIN: 'thin',
  NORMAL: 'normal',
  THICK: 'thick',
};

/* Screen size library of Glints
 * Usage:
 * @media ${Device.mobileL} { ... }
 */

export const size = {
  mobileS: '320px',
  mobileM: '480px',
  mobileL: '640px',
  tablet: '768px',
  desktopS: '1024px',
  desktopM: '1260px',
  desktopL: '1440px',
};

export const Device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  desktopS: `(max-width: ${size.desktopS})`,
  desktopM: `(max-width: ${size.desktopM})`,
  desktopL: `(max-width: ${size.desktopL})`,
};
