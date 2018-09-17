/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label';
import {
  HeaderContainer, HeaderImage, HeaderContent, Image, TitleLink,
} from '../Style/JobCardStyle';

const JobCardHeader = (props: Props) => {
  const {
    title,
    tag,
    url,
    imgUrl,
    isExternal,
    isReactRouter,
    paddingSize,
    subtitle,
    className,
    jobTitleClass,
    companyNameClass,
    ...defaultProps
  } = props;

  return (
  <HeaderContainer className={className} paddingSize={paddingSize} {...defaultProps}>
      <HeaderImage>
        <Choose>
          <When condition={typeof imgUrl === 'string'}>
            <Image src={imgUrl} alt="" />
          </When>
          <Otherwise>
            {imgUrl}
          </Otherwise>
        </Choose>
      </HeaderImage>
      <HeaderContent>
        {tag
          && (
            <Label>
              {tag}
            </Label>
          )
        }

        <TitleLink>
          <h3 className={jobTitleClass}>
            {`${title.slice(0, 50)}`}
          </h3>
        </TitleLink>
        {!isReactRouter
          && (
            <a 
              href={url}
              className={companyNameClass}
              target={isExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {subtitle}
            </a>
          )
        }

        {isReactRouter
          && (
            <Link to={url} className={companyNameClass}>
              {subtitle}
            </Link>
          )
        }
      </HeaderContent>
    </HeaderContainer>
  );
};

type Props = {
  className: string,
  companyNameClass: string,
  title: string,
  tag: string,
  subtitle: string,
  imgUrl: string,
  isExternal: boolean,
  isReactRouter: boolean,
  jobTitleClass: string,
  paddingSize: string,
  url: string,
};

JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
};

export default JobCardHeader;
