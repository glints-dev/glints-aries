// @flow
import React from 'react';
import type, { Width } from '../View/View';
import Icon, { type IconSize, type IconBgColor } from './Icon';

type IconName =
  | 'add'
  | 'bold'
  | '18-plus'
  | 'bullet-list'
  | 'chevron-back'
  | 'chevron-next'
  | 'close'
  | 'close-white'
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

const Icons = ({ name, className, ...iconProps }: Props) => (
  <Icon className={className} {...iconProps}>
    <img className={className} src={require(`../../assets/icons/${name}.svg`)} alt={name} />
  </Icon>
);

type Props = {
  name: IconName,
  size: IconSize,
  padding: Width,
  backgroundColor: IconBgColor,
  rounded: boolean,
  className: string,
};

export type { IconName };
export default Icons;
