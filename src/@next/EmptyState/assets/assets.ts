import * as Images from './images';

export const imageNames = [
  'empty-carton',
  'empty-mailbox',
  'safety-cone',
] as const;

export type ImageName = typeof imageNames[number];

export const imageMapping: Record<ImageName, string> = {
  'empty-carton': Images.emptyCarton,
  'empty-mailbox': Images.emptyMailbox,
  'safety-cone': Images.safetyCone,
};
