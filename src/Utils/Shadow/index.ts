const up1 = '0 -2px 4px 0 rgba(0, 0, 0, 0.15)';
const down1 = '0 2px 4px 0 rgba(0, 0, 0, 0.15)';

const up2 = '0 -4px 8px 0 rgba(0, 0, 0, 0.15)';
const down2 = '0 4px 8px 0 rgba(0, 0, 0, 0.15)';

const up3 = '0 -6px 12px 0 rgba(0, 0, 0, 0.10)';
const down3 = '0 6px 12px 0 rgba(0, 0, 0, 0.10)';

const up4 = '0 -12px 24px 0 rgba(0, 0, 0, 0.10)';
const down4 = '0 12px 24px 0 rgba(0, 0, 0, 0.10)';

const card =
  '0px 0px 5px rgba(71, 71, 71, 0.1), 0px 1px 2px rgba(71, 71, 71, 0.2)';

export const Shadow = {
  up1,
  down1,
  up2,
  down2,
  up3,
  down3,
  up4,
  down4,
  card,
} as const;

export type ShadowValueType = typeof Shadow[keyof typeof Shadow];

export type ShadowKeyType = keyof typeof Shadow;
