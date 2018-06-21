/* @flow */
import React from 'react';
import {
  JobCardContainer,
  Header,
  Body,
  CompanyWrapper,
  CompanyImageWrapper,
  Company,
  JobDetail,
  JobDescription,
  Footer
} from './../Style/CardStyle';

import DefaultButton from './../Button/DefaultButton';
import Button from './../Button';

import ManIcon from './../../assets/icons/man.svg';
import CurrencyIcon from './../../assets/icons/currency.svg';
import LocationIcon from './../../assets/icons/pin.svg';
import ClockIcon from './../../assets/icons/clock.svg';
import ShareIcon from './../../assets/icons/share.svg';
import StarIcon from './../../assets/icons/star.svg';
import NavigateIcon from './../../assets/icons/navigate.svg';

const JobCard = ({
  FeaturedImage,
  FeaturedLabel,
  CompanyLogo,
  CompanyName,
  JobTitle,
  JobCategory,
  JobSalary,
  JobLocation,
  JobType
}) => (
  <JobCardContainer>
    <Header FeaturedImage={ FeaturedImage }>
      <label>{ FeaturedLabel }</label>
    </Header>
    <Body>
      <CompanyWrapper>
        <CompanyImageWrapper>
          <img src={CompanyLogo} />
        </CompanyImageWrapper>
        <Company>
          <label>{ JobTitle }</label>
          <span>{ CompanyName }</span>
        </Company>
      </CompanyWrapper>
      <JobDetail>
        <label><img src={ManIcon} /> { JobCategory }</label>
        <label><img src={CurrencyIcon} /> { JobSalary }</label>
        <label><img src={LocationIcon} /> { JobLocation }</label>
        <label><img src={ClockIcon} /> { JobType }</label>
      </JobDetail>
      <JobDescription>
        <p>Relentless. College Dropouts. Venture-backed. Straits Times called us the "Stuff of Many Singaporeans Parents' Nightmares", due to our "fundamental naughtiness and healthy disrespect for rules”. We were nearly flung into military prison for rebelling against irrational rules. Grow fast, dare to do what we love, and break conventions. That’s how we started, that's how we roll here at this crazy company ;)</p>
      </JobDescription>
    </Body>
    <Footer>
      <DefaultButton label={'Share'} icon={ShareIcon} />
      <DefaultButton label={'Save'} icon={StarIcon} />
      <Button variant={'job'}>Apply</Button>
    </Footer>
  </JobCardContainer>
);

export default JobCard;