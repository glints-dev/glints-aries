export type SpacingScaleTypes =
  | '128'
  | '96'
  | '64'
  | '32'
  | '24'
  | '16'
  | '8'
  | '4'
  | '2'
  | '0';

export type SpacingScaleValues = 128 | 96 | 64 | 32 | 24 | 16 | 8 | 4 | 2 | 0;

type SpacingScale = {
  [key in SpacingScaleTypes]: SpacingScaleValues;
};

export const Spacing: SpacingScale = {
  128: 128,
  96: 96,
  64: 64,
  32: 32,
  24: 24,
  16: 16,
  8: 8,
  4: 4,
  2: 2,
  0: 0,
};
