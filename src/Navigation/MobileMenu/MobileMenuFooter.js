/* @flow */

import React from 'react';
import { MobileMenuFooterWrapper, CustomLanguageSelect } from '../../Style/Navigation/MobileMenuStyle';

const MobileMenuFooter = (props: Props) => {
  const {
    className,
    defaultItem,
    languageItem,
    center,
    hoverColor,
    onChange,
    ...defaultProps
  } = props;

  return (
    <MobileMenuFooterWrapper
      className={className}
      {...defaultProps}
    >
      <CustomLanguageSelect
        center={center}
        hoverColor={hoverColor}
        defaultItem={defaultItem}
        languageItem={languageItem}
        onChange={onChange}
      />
    </MobileMenuFooterWrapper>
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

export default MobileMenuFooter;
