/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label';
import { HeaderContainer, HeaderImage, HeaderContent } from '../Style/JobCardStyle';

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
    ...defaultProps
  } = props;

  return (
    <HeaderContainer className={className} paddingSize={paddingSize} {...defaultProps}>
      <HeaderImage>
        <img src={imgUrl} alt="" />
      </HeaderImage>
      <HeaderContent>
        {tag
          && (
            <Label>
              {tag}
            </Label>
          )
        }

        <h3>
          {`${title.slice(0, 50)}`}
        </h3>
        {!isReactRouter
          && (
            <a href={url} target={isExternal ? '_blank' : '_self'} rel="noopener noreferrer">
              {subtitle}
            </a>
          )
        }

        {isReactRouter
          && (
            <Link to={url}>
              {subtitle}
            </Link>
          )
        }
      </HeaderContent>
    </HeaderContainer>
  );
};

type Props = {
  title: string,
  tag: string,
  subtitle: string,
  imgUrl: string,
  isExternal: boolean,
  isReactRouter: boolean,
  paddingSize: string,
  url: string,
  className: string,
};

export default JobCardHeader;
