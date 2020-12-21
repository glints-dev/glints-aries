const ShadowOneDown = '0 2px 4px 0 rgba(0, 0, 0, 0.15)';
const ShadowTwoDown = '0 4px 8px 0 rgba(0, 0, 0, 0.15)';
const ShadowThreeDown = '0 6px 12px 0 rgba(0, 0, 0, 0.10)';
const ShadowFiveDown = '0 12px 24px 0 rgba(0, 0, 0, 0.10)';
const ShadowFiveUp = '0 -6px 12px 0 rgba(0, 0, 0, 0.10)';

export const Shadows = {
  1: {
    down: ShadowOneDown,
  },
  2: {
    down: ShadowTwoDown,
  },
  3: {
    down: ShadowThreeDown,
  },
  4: {
    down: ShadowFiveDown,
    up: ShadowFiveUp,
  },
} as const;

export type ShadowValueType =
  | typeof ShadowOneDown
  | typeof ShadowTwoDown
  | typeof ShadowThreeDown
  | typeof ShadowFiveDown
  | typeof ShadowFiveUp;
