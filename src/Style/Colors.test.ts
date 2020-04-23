import { PrimaryColor, SecondaryColor, Greyscale } from './Colors';

describe('Colors', () => {
  test('PrimaryColor', () => {
    expect(PrimaryColor).toEqual({
      glintsyellow: '#FFF240',
      glintsred: '#EC272B',
      glintsblue: '#0BAEEC',
    });
  });

  test('SecondaryColor', () => {
    expect(SecondaryColor).toEqual({
      actionblue: '#017EB7',
      green: '#93BD49',
      darkgreen: '#008464',
      magenta: '#FF00E5',
      violet: '#9013FE',
      orange: '#F5A623',

      // deprecated
      ivory: '#FFFAEA',
      lighterblack: '#AAAAAA',
      lightergrey: '#EEEEEE',
      blue: '#0869C2',
      darkerblue: '#027EB7',
      lightgreen: '#EEF6F4',
      lightorange: '#FFF6E8',
      lightred: '#FFF2F3',
      lightblue: '#D6F4FF',
      darkblue: '#004b68',

      // renamed
      purplepizza: '#FF00E5',
      bluegem: '#9013FE',

      // moved to Greyscale
      white: '#FFFFFF',
      whitesmoke: '#F3F3F3',
      black: '#000000',
      lightblack: '#777777',
      grey: '#777777',
      darkgrey: '#777777',
      lightgrey: '#C6C6C6',
    });
  });

  test('Greyscale', () => {
    expect(Greyscale).toEqual({
      black: '#000000',
      grey: '#777777',
      lightgrey: '#C6C6C6',
      softgrey: '#F3F3F3',
      white: '#FFFFFF',
    });
  });
});
