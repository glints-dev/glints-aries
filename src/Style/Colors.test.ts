import { PrimaryColor, SecondaryColor, Greyscale } from './Colors';

describe('Colors', () => {
  test('PrimaryColor', () => {
    expect(PrimaryColor).toMatchSnapshot();
  });

  test('SecondaryColor', () => {
    expect(SecondaryColor).toMatchSnapshot();
  });

  test('Greyscale', () => {
    expect(Greyscale).toMatchSnapshot();
  });
});
