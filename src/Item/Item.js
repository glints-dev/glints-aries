import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from './../Style/Colors';

const Item = (props) => {
  const { title, url, imgUrl } = props;
  return (
    <React.Fragment>
      <ItemWrapper>
        <ItemImage>
          <img src={imgUrl} alt='' />
        </ItemImage>
        <ItemContent>
          <h4>{title}</h4>
          <a href={url} target="_blank">company name</a>
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
    margin-bottom: 0;
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
  title: 'default',
  url: '/',
  imgUrl: 'https://placeimg.com/64/64/any',
  isExternal: false,
  isReactRouter: false,
};

export default Item;
