// @flow
import React from 'react';
import PropTypes from 'prop-types';
import type {Width} from '../View/View';
import Icon, {type IconSize, type IconBgColor} from './Icon';
import {UikitConsumer} from '../Provider';

type IconName =
  | 'add'
  | 'bold'
  | '18-plus'
  | 'bullet-list'
  | 'chevron-back'
  | 'chevron-next'
  | 'close'
  | 'code'
  | 'comment-active'
  | 'comment'
  | 'comment-white'
  | 'create-story'
  | 'drop-down'
  | 'elipsis-menu'
  | 'embed'
  | 'image'
  | 'italic'
  | 'like-active'
  | 'like-active-white'
  | 'like'
  | 'like-white'
  | 'link'
  | 'logout'
  | 'notification'
  | 'number-list'
  | 'pin-map'
  | 'profile'
  | 'search'
  | 'setting'
  | 'share-to-timeline'
  | 'share'
  | 'signal'
  | 'share-white'
  | 'sosmed-facebook'
  | 'sosmed-instagram'
  | 'sosmed-linkedin'
  | 'sosmed-twitter'
  | 'sosmed-youtube'
  | 'underline'
  | 'verified'
  | 'verified-green';

type Props = {
  name: IconName,
  size?: IconSize,
  padding?: Width,
  backgroundColor?: IconBgColor,
  rounded?: boolean,
};

const Icons = ({name, ...iconProps}: Props) => (
  <UikitConsumer>
    {uikit => (
      <Icon {...iconProps}>
        <img src={uikit.getUrl(`assets/icons/${name}.svg`)} />
      </Icon>
    )}
  </UikitConsumer>
);

Icons.contextTypes = {
  uikitAssets: PropTypes.object,
};

export type {IconName};
export default Icons;
