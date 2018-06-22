import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from './../Style/Colors';
import {Link} from 'react-router-dom';

const Item = (props) => {
  const { title, url, imgUrl, isExternal, isReactRouter, subtitle } = props;
  return (
    <React.Fragment>
      <ItemWrapper>
        <ItemImage>
          <img src={imgUrl} alt='' />
        </ItemImage>
        <ItemContent>
          <h4>{title}</h4>
          {!isReactRouter &&
            <a href={url} target={isExternal ? "_blank" : "_self"}>{subtitle}</a>
          }

          {isReactRouter &&
            <Link to={url}>{subtitle}</Link>
          }
        </ItemContent>
      </ItemWrapper>
    </React.Fragment>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  margin: 1em 0;
  width: 100%;
  min-height: 0;
  background: 0 0;
  padding: 0;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: -webkit-box-shadow .1s ease;
  transition: -webkit-box-shadow .1s ease;
  transition: box-shadow .1s ease;
  transition: box-shadow .1s ease,-webkit-box-shadow .1s ease;
  z-index: '';
`;

const ItemImage = styled.span`
  flex: 0 0 auto;
  display: block;
  float: none;
  margin: 0;
  padding: 0;
`;

const ItemContent = styled.div`
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0;
  -ms-flex-item-align: top;
  align-self: top;
  padding-left: 1.2em;

  h4 {
    font-size: 1.1em;
    line-height: .8em;
    margin-bottom: .2em;
  }

  a {
    color: ${PrimaryColor.glintsblue};
    tet-decoration: none;

    &:hover {
      text-decoration: none;
      opacity: .75;
    }
  }
`;

Item.defaultProps = {
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png',
  isExternal: false,
  isReactRouter: false,
  subtitle: 'subtitle',
  title: 'default',
  url: '/',
};

export default Item;
