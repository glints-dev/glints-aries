export const Variant = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  LINK: 'link',
};

export const Theme = {
  RED: 'red',
  YELLOW: 'yellow',
  BLUE: 'blue',
  WHITE: 'white',
  GREY: 'grey',
};

export const Size = {
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

/* Screen size library of Glints
 * Usage:
 * @media ${device.mobileL} { ... }
 */

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
