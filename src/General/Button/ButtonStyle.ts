import styled from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';
import { ButtonTheme } from '../../Utils/StyleConfig';

const generalButtonPadding = [15, 40];
const smallButtonPadding = [10, 20];

interface ButtonProps {
  small?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ small }) => (small ? '14px' : '16px')};
  line-height: 1.5;
  padding: ${({ small }) =>
    small
      ? `${smallButtonPadding[0]}px ${smallButtonPadding[1]}px`
      : `${generalButtonPadding[0]}px ${generalButtonPadding[1]}px`};
  background: transparent;
  transition: all 0.2s;
  text-decoration: none;

  ${({ disabled }) => {
    if (disabled) {
      return `
        &:hover {
          cursor: not-allowed;
        }
      `;
    }
  }}
`;

/*
 * Default Button
 */

interface SolidBtnContainerProps {
  block?: boolean;
  disabled?: boolean;
}

interface SolidBtnProps {
  block?: boolean;
}

export const SolidBtn = styled(Button)<SolidBtnProps>`
  width: ${({ block }) => block && '100%'};

  &:active {
    background-color: ${Greyscale.black};
    color: ${Greyscale.white};
  }

  ${props => {
    switch (props.theme) {
      case `${ButtonTheme.BLUE}`:
        return `
          background-color: ${SecondaryColor.actionblue};
          color: ${Greyscale.white};

          &:hover {
            color: ${Greyscale.white};
          }
        `;
      default:
        return `
          background-color: ${Greyscale.white};
          color: ${SecondaryColor.actionblue};

          &:hover {
            color: ${SecondaryColor.actionblue};
          }
        `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${Greyscale.lightgrey};
        color: ${Greyscale.white};
      `;
    }
  }}

  &:hover {
    text-decoration: none;
    ${({ disabled }) => {
      if (disabled) {
        return `
          background-color: ${Greyscale.lightgrey};
          color: ${Greyscale.white};
        `;
      }
    }}
  }
`;

export const SolidBtnContainer = styled.div<SolidBtnContainerProps>`
  position: relative;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  z-index: 1;

  ${({ disabled }) => {
    if (!disabled) {
      return `
      &:active {
        background: ${Greyscale.black};
        color: ${Greyscale.white};
        transform: translate3d(2px, 2px, 0);
        transition: all .2s;
      }

      &:after {
        content: '';
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);
        top: 5px;
        left: 5px;
        z-index: -1;
        transition: all .2s;
        cursor: pointer;
      }

      &:hover:after {
        opacity: 1;
        transition: all .2s;
      }

      &:active:after {
        transform: translate3d(-5px, -5px, 0);
        transition: all .2s;
      }
      `;
    }
  }}

  &:hover {
    ${SolidBtn} {
      ${props => {
        if (props.disabled) {
          return `
            background-color: none;
          `;
        }
      }}
    }
  }

  &:active {
    ${SolidBtn} {
      ${props => {
        if (props.disabled) {
          return `
            background-color: none;
          `;
        }
        return `
          background-color: ${Greyscale.black};
          color: ${Greyscale.white};
        `;
      }}
    }
  }
`;

/*
 * SolidShadow Button
 */

interface SolidShadowContainerProps {
  block?: boolean;
  disabled?: boolean;
}

interface SolidShadowBtnProps {
  block?: boolean;
}

export const SolidShadowBtn = styled(Button)<SolidShadowBtnProps>`
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  width: 100%;

  &:hover {
    text-decoration: none;
  }

  ${props => {
    if (props.disabled) {
      return `
        background-color: ${Greyscale.lightgrey};
        color: ${Greyscale.white};
      `;
    }
    return `
      background-color: ${PrimaryColor.glintsyellow};
      color: ${Greyscale.black};
    `;
  }}
`;

export const SolidShadowContainer = styled.div<SolidShadowContainerProps>`
  position: relative;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  z-index: 1;
  cursor: pointer;

  &:hover {
    ${props => {
      if (props.disabled) {
        return 'transform: none';
      }
      return `
        transform: translate(2px, 2px);
        transition: all .2s;
      `;
    }}
  }

  &:active {
    ${props => {
      if (!props.disabled) {
        return `
          transform: translate(3px, 3px);
          transition: all .2s;
          color: ${Greyscale.white};
        `;
      }

      return 'transform: none';
    }}

    ${SolidShadowBtn} {
      ${props => {
        if (props.disabled) {
          return `
            background-color: none;
          `;
        }
        return `
          background-color: ${Greyscale.black};
          color: ${Greyscale.white};
        `;
      }}
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5px;
    left: 5px;
    transition: all 0.2s;

    ${props => {
      if (props.disabled) {
        return 'background-color: none';
      }
      return `background-color: ${PrimaryColor.glintsred};`;
    }}
  }

  &:hover:before {
    ${props => {
      if (props.disabled) {
        return `
          cursor: default;
          background-color: none;
        `;
      }
      return `
      background: ${Greyscale.black};
      transform: translate(-2px, -2px);
      transition: all .2s;
    `;
    }}
  }

  &:active:before {
    ${props => {
      if (!props.disabled) {
        return `
        transform: translate(-5px, -5px);
        transition: all .2s;
      `;
      }

      return false;
    }}
  }
`;

/*
 * Ghost Button
 */

export const GhostBtn = styled(Button)<GhostBtnProps>`
  transition: background-color 0.5s;
  width: ${({ block }) => block && '100%'};
  background: ${Greyscale.white};
  padding: ${({ small }) =>
    small
      ? `${smallButtonPadding[0] - 2}px ${smallButtonPadding[1] - 2}px`
      : `${generalButtonPadding[0] - 2}px ${generalButtonPadding[1] - 2}px`};
  border: 2px solid ${SecondaryColor.actionblue};
  color: ${SecondaryColor.actionblue};

  &:hover {
    transition: background-color 0.5s;
    text-decoration: none;

    ${({ disabled }) => {
      if (!disabled) {
        return `
          background-color: ${SecondaryColor.actionblue};
          color: ${Greyscale.white};
        `;
      }
    }}
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${SecondaryColor.lightgrey};
        color: ${SecondaryColor.white};
        border: none;
      `;
    }
  }}
`;

interface GhostBtnProps {
  block?: boolean;
}

export const GhostBtnContainer = styled.div<GhostBtnContainerProps>`
  position: relative;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};
  z-index: 1;

  ${({ disabled }) => {
    if (!disabled) {
      return `
        &:active {
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
          background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);
          top: 5px;
          left: 5px;
          z-index: -1;
          transition: all .2s;
          cursor: pointer;
        }

        &:hover:after {
          opacity: 1;
          transition: all .2s;
        }

        &:active:after {
          transform: translate3d(-5px, -5px, 0);
          transition: all .2s;
        }
        `;
    }
  }}

  ${GhostBtn} {
    ${({ disabled }) => {
      if (!disabled) {
        return `
        &:active {
          background-color: ${Greyscale.black};
          color: ${Greyscale.white};
          border: 2px solid ${Greyscale.black};
        }
      `;
      }
    }}
  }
`;

interface GhostBtnContainerProps {
  block?: boolean;
  disabled?: boolean;
}

/*
 * White-Grey Button
 */
export const WhiteGreyBtn = styled(Button)<WhiteGreyBtnProps>`
  width: ${({ block }) => block && '100%'};

  ${({ disabled }) => {
    if (!disabled) {
      return `
        background-color: ${Greyscale.white};
        color: ${SecondaryColor.actionblue};

        &:hover {
          background-color: ${Greyscale.softgrey};
          color: ${SecondaryColor.actionblue};
        }

        &:active {
          background-color: ${Greyscale.black};
          color: ${Greyscale.white};
        }
      `;
    }
    return `
      background-color: ${Greyscale.lightgrey};
      color: ${Greyscale.white};
    `;
  }}
`;

interface WhiteGreyBtnProps {
  block?: boolean;
}

/*
 * Link Button
 */

export const LinkBtn = styled(Button)<LinkBtnProps>`
  font-weight: normal;
  text-transform: inherit;
  width: ${({ block }) => block && '100%'};
  padding: 0;
  justify-content: flex-start;
  color: ${SecondaryColor.actionblue};

  ${({ disabled }) => {
    if (disabled) {
      return `
        color: ${Greyscale.grey};
      `;
    } else {
      return `
        &:hover {
          color: ${SecondaryColor.darkblue};
          text-decoration: none;
        }
      
        &:active {
          color: ${Greyscale.black};
        }
      `;
    }
  }}
`;

interface LinkBtnProps {
  block?: boolean;
  disabled?: boolean;
}

export const StartIconContainer = styled.span`
  display: inline-flex;
  margin-right: 10px;
`;

export const EndIconContainer = styled.span`
  display: inline-flex;
  margin-left: 10px;
`;
