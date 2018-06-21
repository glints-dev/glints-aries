import React from 'react';
import { JobCardContainer, JobCardBtn } from './../Style/ButtonStyle';

const CTAButton = (props) => {
  const { children } = props;

  return (
    <JobCardContainer>
      <JobCardBtn>{children}</JobCardBtn>
    </JobCardContainer>
  )
};

const JobCardButton = ({ children, label, icon, ...defaultButtonProps }) =>  {

  return (
    <JobCardContainer {...defaultButtonProps}>
      <JobCardBtn>
        { label }
        {icon
          ? <Icon image={icon} position={'right'} />
          : null
        }
        {children}
      </JobCardBtn>
    </JobCardContainer>
  );
}

export default JobCardButton;