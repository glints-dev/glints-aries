/* @flow */

import React from 'react';
import { MenuFooter, CustomLanguageSelect } from '../Style/MobileMenuStyle';

const FooterItems = (props: Props) => {
  const {
    className,
    defaultItem,
    languageItem,
    center,
    hoverColor,
    onChange,
  } = props;

  return (
    <MenuFooter
      className={className}
    >
      <CustomLanguageSelect
        center={center}
        hoverColor={hoverColor}
        defaultItem={defaultItem}
        languageItem={languageItem}
        onChange={onChange}
      />
    </MenuFooter>
  );
};

type Props = {
  children: React$Node,
  className: string,
  defaultItem: object,
  languageItem: array,
  center: boolean,
  hoverColor: string,
  onChange:Function
}

export default FooterItems;
