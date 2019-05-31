import * as React from 'react';
import { HeadingContainer } from '../../Style/General/HeadingStyle';

const Heading: React.FunctionComponent<Props> = (props) => {
  const {
    className,
    inline,
    children,
    uppercaseText,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <HeadingContainer
        id="aries-heading"
        className={className}
        inline={inline}
        uppercaseText={uppercaseText}
        {...defaultProps}
      >
        <span id="heading-text">
          {children}
        </span>
      </HeadingContainer>
    </React.Fragment>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof HeadingContainer> {
  children: React.ReactNode;
}

export default Heading;
