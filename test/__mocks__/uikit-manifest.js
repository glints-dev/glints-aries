// @flow
const IconsName = [
  'add',
  'bold',
  '18-plus',
  'bullet-list',
  'chevron-back',
  'chevron-next',
  'close',
  'code',
  'comment-active',
  'comment',
  'create-story',
  'drop-down',
  'elipsis-menu',
  'embed',
  'image',
  'italic',
  'like-active',
  'like',
  'link',
  'logout',
  'notification',
  'number-list',
  'profile',
  'search',
  'setting',
  'share-to-timeline',
  'share',
  'sosmed-facebook',
  'sosmed-instagram',
  'sosmed-linkedin',
  'sosmed-twitter',
  'sosmed-youtube',
  'underline',
  'verified',
];

const UikitManifest = {
  getManifest: () => {
    const mockUikitManifest = {};
    IconsName.forEach(name => {
      mockUikitManifest[
        `assets/icons/${name}.svg`
      ] = `assets/icons/${name}.svg`;
    });
    return mockUikitManifest;
  },
};

export default UikitManifest;
