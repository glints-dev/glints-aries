import * as React from 'react';
import classNames from 'classnames';
import { Heading, SubHeading } from '../../Style/General/PsychedelicTextStyle';

const renderPsychedelicText: React.FunctionComponent<Props> = ({
  children,
  type,
  psychTheme,
  className,
  ...defaultProps
}) => {
  switch (type) {
    case 'heading':
      return (
        <Heading
          className={classNames('aries-psyctext', className)}
          {...defaultProps}
        >
          {children}
        </Heading>
      );
    case 'subheading':
      return (
        <SubHeading
          className={classNames('aries-psyctext', className)}
          psychTheme={psychTheme}
          {...defaultProps}
        >
          {children}
        </SubHeading>
      );
    default:
      return (
        <h3>
          {children}
        </h3>
      );
  }
};

const PsychedelicText: React.FunctionComponent<Props> = (props) => (
  <React.Fragment>
    {renderPsychedelicText(props)}
  </React.Fragment>
);

interface Props {
  children: React.ReactNode;
  type?: string;
  psychTheme?: string;
  className?: string;
};

export default PsychedelicText;
