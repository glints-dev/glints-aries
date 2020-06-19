export const canWarn =
  typeof console !== 'undefined' && process.env.NODE_ENV === 'development';
