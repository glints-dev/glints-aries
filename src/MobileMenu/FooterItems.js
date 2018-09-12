/* @flow */

import React from 'react';
import { MenuFooter, CustomLanguageSelect } from '../Style/MobileMenuStyle';

const FooterItems = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <MenuFooter className={className}>
      <CustomLanguageSelect
        center
        hoverColor="#0171A4"
        defaultItem={
          {
            label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
          }
        }
        languageItem={[
          {
            label: 'English', title: 'EN', value: 'english', countryIcon: 'gb',
          },
          {
            label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
          },
        ]}
      />
    </MenuFooter>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default FooterItems;
