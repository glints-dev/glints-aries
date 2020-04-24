import { ScreenSize, Device } from './StyleConfig';

describe('ScreenSize', () => {
  test('ScreenSize for various devices', () => {
    expect(ScreenSize).toEqual({
      mobileS: 320,
      mobileM: 480,
      mobileL: 640,
      tablet: 768,
      desktopS: 1024,
      desktopM: 1260,
      desktopL: 1440,
    });
  });
});

describe('Device', () => {
  test('Device according to the screen sizes', () => {
    expect(Device).toEqual({
      mobileS: `(max-width: ${ScreenSize.mobileS}px)`,
      mobileM: `(max-width: ${ScreenSize.mobileM}px)`,
      mobileL: `(max-width: ${ScreenSize.mobileL}px)`,
      tablet: `(max-width: ${ScreenSize.tablet}px)`,
      desktopS: `(max-width: ${ScreenSize.desktopS}px)`,
      desktopM: `(max-width: ${ScreenSize.desktopM}px)`,
      desktopL: `(max-width: ${ScreenSize.desktopL}px)`,
    });
  });
});
