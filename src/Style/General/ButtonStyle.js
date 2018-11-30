import styled, { keyframes } from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';
import { Theme } from '../../Utils/StyleConfig';

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  min-width: 8.6em;
  padding: ${({ small }) => small ? '10px 20px' : '15px 40px'};
  background: transparent;
  transition: all .2s;
`;

/*
 * Default Button
 */

export const DefaultBtn = styled(Button)`
  width: ${({ block }) => block && '100%'};

  ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
          background-color: ${PrimaryColor.glintsred};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.BLUE}`:
        return `
          background-color: ${SecondaryColor.actionblue};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.YELLOW}`:
        return `
          background-color: ${PrimaryColor.glintsyellow};
          color: ${SecondaryColor.black};
        `;
      default:
        return `
          background-color: ${SecondaryColor.white};
          color: ${SecondaryColor.black};
        `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${SecondaryColor.lightgrey};
        cursor: not-allowed;
      `;
    }
    if (!disabled) {
      return `
      &:active {
        background: ${SecondaryColor.black};
        color: ${SecondaryColor.white};
        transform: translate3d(2px, 2px, 0);
        transition: all .2s;
      }

      &:after {
        content: '';
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(-50deg, transparent, transparent 5px, ${SecondaryColor.black} 7px);
        top: 6px;
        left: 6px;
        z-index: -1;
        transition: all .2s;
      }

      &:hover:after {
        opacity: 1;
        transition: all .2s;
      }

      &:active:after {
        transform: translate3d(-6px, -6px, 0);
        transition: all .2s;
      }
      `;
    }
  }}
`;

/*
 * Primary Button
 */

export const PrimaryContainer = styled.div`
  position: relative;
  display: ${({ block }) => block ? 'flex' : 'inline-flex'};
  z-index: 1;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 8px;
    left: 8px;
    transition: all .2s;

    ${(props) => {
    const themeBackgrounds = {
      [Theme.BLUE_RED]: PrimaryColor.glintsred,
    };
    if (props.disabled) {
      return 'background-color: none';
    }
    if (props.theme && themeBackgrounds[props.theme]) {
      return `background-color: ${themeBackgrounds[props.theme]};`;
    }
    return `background-color: ${PrimaryColor.glintsyellow};`;
  }}
  }

  &:hover:after {
    ${(props) => {
    if (props.disabled) {
      return 'background-color: none;';
    }
    return `
      background: ${SecondaryColor.black};
      transform: translate3d(-2px, -2px, 0);
      transition: all .2s;
    `;
  }}
  }

  &:active:after {
    ${(props) => {
    if (!props.disabled) {
      return `
        transform: translate3d(-4px, -4px, 0);
        transition: all .2s;
      `;
    }

    return false;
  }}
  }
`;

export const PrimaryBtn = styled(Button)`
  transition: all .2s;
  width: ${({ block }) => block && '100%'};

  ${(props) => {
    if (props.disabled) {
      return `
        cursor: not-allowed;
        background-color: ${SecondaryColor.lightgrey};
        color: ${SecondaryColor.white};
      `;
    }

    const themeColors = {
      [Theme.RED]: `
        background-color: ${PrimaryColor.glintsred};
        color: ${SecondaryColor.white};
      `,
      [Theme.BLUE]: `
        background-color: ${PrimaryColor.glintsblue};
        color: ${SecondaryColor.white};
      `,
      [Theme.BLUE_RED]: `
        background-color: ${PrimaryColor.glintsblue};
        color: ${SecondaryColor.white};
      `,
    };

    if (props.theme && themeColors[props.theme]) {
      return themeColors[props.theme];
    }

    return `
      background-color: ${SecondaryColor.white};
      color: ${PrimaryColor.glintsblue};

      &:active {
        color: ${SecondaryColor.white};
      }
    `;
  }}

  &:hover {
    ${(props) => {
    if (props.disabled) {
      return 'transform: none';
    }
    return `
      transform: translate3d(2px, 2px, 0);
      transition: all .2s;
    `;
  }}
  }

  &:active {
    ${(props) => {
    if (!props.disabled) {
      return `
        transform: translate3d(4px, 4px, 0);
        transition: all .2s;
        background-color: ${SecondaryColor.black};
      `;
    }

    return 'transform: none';
  }}
  }
`;

/*
 * Secondary Button
 */

const Bouncing = keyframes`
  25%, 75% {
    transform: translate3d(0, 0, 0);
  }

  50%, 100% {
    transform: translate3d(-4px, -4px, 0);
  }
`;

export const SecondaryBtn = styled(Button)`
  background-color: ${SecondaryColor.whitesmoke};
  color: ${SecondaryColor.black};
  z-index: 2;
  width: ${({ block }) => block && '100%'};

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${SecondaryColor.lightgrey};
        color: ${SecondaryColor.white};
        cursor: not-allowed;
      `;
    }
  }}
`;

export const SecondaryContainer = styled.div`
  position: relative;
  display: ${({ block }) => block ? 'flex' : 'inline-flex'};

  &:after {
    content: '';
    opacity: 0;
    background-color: ${PrimaryColor.glintsred};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 6px;
    left: 6px;
    transition: all .2s;
    transform: translate3d(-4px, -4px, 0);
    z-index: 1;
  }

  &:hover {
    ${SecondaryBtn} {
      ${({ disabled }) => {
    if (!disabled) {
      return `
          background-color: ${PrimaryColor.glintsyellow};
          transform: translate3d(-4px, -4px, 0);
          transition: transform .2s;
        `;
    }
  }}
    }
  }

  &:active {
    ${SecondaryBtn} {
      background-color: ${SecondaryColor.black};
      color: ${SecondaryColor.white};
      transition: all .2s;
      transform: translate3d(0, 0, 0);
    }
  }

  &:active:after {
    background-color: ${SecondaryColor.black};
    transform: translate3d(-6px, -6px, 0);
    transition: all .2s;
  }

  ${({ disabled }) => {
    if (!disabled) {
      return `
        &:hover:after {
          opacity: 1;
          transition: opacity .8s linear;
          animation: ${Bouncing} .5s linear;
        }
      `;
    }
  }}
`;

/*
 * Ghost Button
 */

export const GhostBtn = styled(Button)`
  transition: background-color .5s;
  width: ${({ block }) => block && '100%'};

  ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
          border: 2px solid ${PrimaryColor.glintsred};
          color: ${PrimaryColor.glintsred};
        `;
      case `${Theme.YELLOW}`:
        return `
          border: 2px solid ${PrimaryColor.glintsyellow};
          color: ${PrimaryColor.glintsyellow};
        `;
      case `${Theme.BLUE}`:
        return `
          border: 2px solid ${SecondaryColor.actionblue};
          color: ${SecondaryColor.actionblue};
        `;
      case `${Theme.WHITE}`:
        return `
          border: 2px solid ${SecondaryColor.white};
          color: ${SecondaryColor.white};
        `;
      default:
        return null;
    }
  }}

  &:hover {
    transition: background-color .5s;
  
    ${({ disabled, theme }) => {
    if (!disabled) {
      switch (theme) {
        case `${Theme.RED}`:
          return `
            background-color: ${PrimaryColor.glintsred};
            color: ${SecondaryColor.white};
          `;
        case `${Theme.YELLOW}`:
          return `
            background-color: ${PrimaryColor.glintsyellow};
            color: ${SecondaryColor.white};
          `;
        case `${Theme.BLUE}`:
          return `
            background-color: ${SecondaryColor.actionblue};
            color: ${SecondaryColor.white};
          `;
        case `${Theme.WHITE}`:
          return `
            background-color: ${SecondaryColor.white};
            color: ${PrimaryColor.glintsblue};
          `;
        default:
          return null;
      }
    }
  }
}
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${SecondaryColor.lightgrey};
        color: ${SecondaryColor.white};
        border: none;
        cursor: not-allowed;
      `;
    }
    if (!disabled) {
      return `
        &:active {
          background-color: ${SecondaryColor.black};
          color: ${SecondaryColor.white};
          border: 2px solid ${SecondaryColor.black};
          transition: background-color .5s; 
          transform: translate3d(2px, 2px, 0);
          transition: all .2s;
        }

        &:after {
          content: '';
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(-50deg, transparent, transparent 5px, ${SecondaryColor.black} 7px);
          top: 6px;
          left: 6px;
          z-index: -1;
          transition: all .2s;
        }

        &:hover:after {
          opacity: 1;
          transition: all .2s;
        }

        &:active:after {
          transform: translate3d(-6px, -6px, 0);
          transition: all .2s;
        }
        `;
    }
  }}
`;

/*
 * Link Button
 */

export const LinkBtn = styled(Button)`
  font-weight: normal;
  text-transform: inherit;
  width: ${({ block }) => block && '100%'};
  padding: 0;
  justify-content: flex-start;
  color: ${SecondaryColor.actionblue};

  label {
    cursor: pointer;
  }

  &:hover {
    color: ${SecondaryColor.darkblue};
  }

  &:active {
    color: ${SecondaryColor.black};
  }
`;
