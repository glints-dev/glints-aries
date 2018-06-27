import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Style/Colors';
import { PsychedelicTheme } from '../Utils/StyleConfig';

export const Heading = styled.h1`
    text-shadow: 2px 0 0 ${PrimaryColor.glintsblue}, -2px 0 0 ${PrimaryColor.glintsyellow}, 0 2px 0 ${PrimaryColor.glintsred};
`;

export const SubHeading = styled.h3`
    ${props => {
      switch(props.psychTheme) {
        case `${PsychedelicTheme.BLUEDOMINANT_COLOR}`:
          return`
            color: ${PrimaryColor.glintsblue};
            text-shadow: 1px 0 0 ${PrimaryColor.glintsred}, 1px 1px 0 ${PrimaryColor.glintsyellow};
          `;
        case `${PsychedelicTheme.BLUEDOMINANT_DEFAULT}`:
          return`
            text-shadow: 1px 0 0 ${PrimaryColor.glintsyellow}, 1px 1px 0 ${PrimaryColor.glintsred};
          `;
        case `${PsychedelicTheme.REDDOMINANT_COLOR}`:
          return`
            color: ${PrimaryColor.glintsred};
            text-shadow: 1px 0 0 ${PrimaryColor.glintsyellow}, 1px 1px 0 ${PrimaryColor.glintsblue};
          `;
        case `${PsychedelicTheme.REDDOMINANT_DEFAULT}`:
          return`
            text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsyellow};
          `;
        case `${PsychedelicTheme.YELLOWDOMINANT_COLOR}`:
          return`
            color: ${PrimaryColor.glintsyellow};
            text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsred};
          `;
        case `${PsychedelicTheme.YELLOWDOMINANT_DEFAULT}`:
          return`
            text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsred};
          `;
        default:
          null;
      }
    }}
`;

