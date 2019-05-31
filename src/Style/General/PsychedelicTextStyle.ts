import styled from 'styled-components';
import { PrimaryColor } from '../Colors';
import { PsychedelicTheme } from '../../Utils/StyleConfig';

export const Heading = styled.h1`
  text-shadow: 2px 0 0 ${PrimaryColor.glintsblue}, -2px 0 0 ${PrimaryColor.glintsyellow}, 0 2px 0 ${PrimaryColor.glintsred};
`;

export const SubHeading = styled.h3<SubHeadingProps>`
  ${(props) => {
    switch (props.psychTheme) {
      case `${PsychedelicTheme.BLUE_DOMINANT}`:
        return `
          color: ${PrimaryColor.glintsblue};
          text-shadow: 1px 0 0 ${PrimaryColor.glintsred}, 1px 1px 0 ${PrimaryColor.glintsyellow};
        `;
      case `${PsychedelicTheme.BLUE_DEFAULT}`:
        return `
          text-shadow: 1px 0 0 ${PrimaryColor.glintsyellow}, 1px 1px 0 ${PrimaryColor.glintsred};
        `;
      case `${PsychedelicTheme.RED_DOMINANT}`:
        return `
          color: ${PrimaryColor.glintsred};
          text-shadow: 1px 0 0 ${PrimaryColor.glintsyellow}, 1px 1px 0 ${PrimaryColor.glintsblue};
        `;
      case `${PsychedelicTheme.RED_DEFAULT}`:
        return `
          text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsyellow};
        `;
      case `${PsychedelicTheme.YELLOW_DOMINANT}`:
        return `
          color: ${PrimaryColor.glintsyellow};
          text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsred};
        `;
      case `${PsychedelicTheme.YELLOW_DEFAULT}`:
        return `
          text-shadow: 1px 0 0 ${PrimaryColor.glintsblue}, 1px 1px 0 ${PrimaryColor.glintsred};
        `;
      default:
        return null;
    }
  }}
`;

interface SubHeadingProps {
  psychTheme: string;
}
