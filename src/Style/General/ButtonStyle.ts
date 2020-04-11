import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../Colors';
import { Theme } from '../../Utils/StyleConfig';
import { ButtonStyleProps } from '../../General/Button/Button';

const focusStyle = css`
  &:active:hover {
    background-color: ${SecondaryColor.black};
    border-color: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    top: 2px;
    left: 2px;
  }
`;

const disabledStyle = css`
  background-color: ${SecondaryColor.lightgrey};
  border-color: ${SecondaryColor.lightgrey};
  color: ${SecondaryColor.white};
  cursor: not-allowed;

  &:before,
  &:after {
    content: none;
  }
`;

const shadowBackgroundStyle = css`
  position: relative;
  top: 0;
  left: 0;

  &:after {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
    transition: all 0.2s;
  }

  &:active:hover:after {
    top: 0;
    left: 0;
  }
`;

const slashShadowStyle = css`
  ${shadowBackgroundStyle}
  &:after {
    top: 5px;
    left: 5px;
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.5) 5px
    );
    opacity: 0;
  }
  &:hover:after {
    opacity: 1;
  }
`;

const solidShadowStyle = css`
  ${shadowBackgroundStyle}
  &:hover {
    top: 2px;
    left: 2px;
  }
  &:active:hover {
    top: 4px;
    left: 4px;
  }

  &:after {
    top: 8px;
    left: 8px;
    background-color: ${PrimaryColor.glintsred};
  }
  &:hover:after {
    top: 4px;
    left: 4px;
    background-color: ${SecondaryColor.black};
  }
`;

const Button = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ block }) => block && '100%'};
  padding: ${({ size }) => (size === 'small' ? '10px 20px' : '15px 40px')};
  border: none;
  outline: none;

  font-weight: bold;
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }

  ${({ disabled }) => {
    if (disabled) {
      return disabledStyle;
    }
    return css`
      ${focusStyle}
      transition: all 0.2s;
      cursor: pointer;
    `;
  }}
`;

export const SolidButton = styled(Button)`
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        ${({ theme }) => {
          switch (theme) {
            case `${Theme.BLUE}`:
              return `
                background-color: ${SecondaryColor.actionblue};
                color: ${SecondaryColor.white};
                &:hover {
                  color: ${SecondaryColor.white};
                }
              `;
            default:
              return `
                background-color: ${SecondaryColor.white};
                color: ${SecondaryColor.actionblue};
                &:hover {
                  color: ${SecondaryColor.actionblue};
                }
              `;
          }
        }}

        ${slashShadowStyle}
      `;
    }
  }}
`;

export const GhostButton = styled(Button)`
  padding: ${({ size }) => (size === 'small' ? '8px 18px' : '13px 38px')};

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        background-color: ${SecondaryColor.white};
        border: 2px solid ${SecondaryColor.actionblue};
        color: ${SecondaryColor.actionblue};
        &:hover {
          background-color: ${SecondaryColor.actionblue};
          color: ${SecondaryColor.white};
        }

        ${slashShadowStyle}
        &:after {
          top: 3px;
          left: 3px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
        }
        &:active:hover:after {
          top: -2px;
          left: -2.5px;
        }
      `;
    }
  }}
`;

export const SolidShadowButton = styled(Button)`
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        background-color: ${PrimaryColor.glintsyellow};
        color: ${SecondaryColor.black};

        ${solidShadowStyle}
      `;
    }
  }}
`;

export const LinkButton = styled(Button)`
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        background-color: ${Greyscale.white};
        color: ${SecondaryColor.actionblue};
        &:hover {
          background-color: ${Greyscale.softgrey};
          color: ${SecondaryColor.actionblue};
        }
      `;
    }
  }}
`;

export const StartIconContainer = styled.span`
  display: inline-flex;
  margin-right: 10px;
`;

export const EndIconContainer = styled.span`
  display: inline-flex;
  margin-left: 10px;
`;
