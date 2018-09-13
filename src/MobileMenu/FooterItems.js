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
      />
    </MenuFooter>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default FooterItems;
