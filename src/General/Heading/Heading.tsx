import * as React from 'react';
import classNames from 'classnames';
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
        className={classNames('aries-heading', className)}
        inline={inline}
        uppercaseText={uppercaseText}
        {...defaultProps}
      >
        <span className="heading-text">
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
