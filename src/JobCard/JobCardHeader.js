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
    jobTitleId,
    companyNameId,
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

        <TitleLink className={jobTitleId}>
          <h3>
            {`${title.slice(0, 50)}`}
          </h3>
        </TitleLink>
        {!isReactRouter
          && (
            <a 
              href={url}
              className={companyNameId}
              target={isExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {subtitle}
            </a>
          )
        }

        {isReactRouter
          && (
            <Link to={url} className={companyNameId}>
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
  companyNameId: string,
  title: string,
  tag: string,
  subtitle: string,
  imgUrl: string,
  isExternal: boolean,
  isReactRouter: boolean,
  jobTitleId: string,
  paddingSize: string,
  url: string,
};

JobCardHeader.defaultProps = {
  jobTitleId: '',
  companyNameId: '',
};

export default JobCardHeader;
