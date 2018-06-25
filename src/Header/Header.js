import React, { Fragment } from 'react';
import Label from './../Label';

const Header = (props) => {
  const { caption, description, number, suffix } = props;
  return (
    <Fragment>
      <Label variant="secondary">{caption}</Label>
      <Label variant="danger">{`${number}${suffix ? ` ${suffix}` : ''}`}</Label>
      <Label>{description}</Label>
    </Fragment>
  );
}

export default Header;
