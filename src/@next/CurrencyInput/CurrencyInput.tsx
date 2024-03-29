import React from 'react';
import { Input, InputProps } from '../Input/Input';

export type CurrencyInputProps = Omit<
  InputProps,
  'type' | 'prefix' | 'onChange' | 'value'
> & {
  locale?: string;
  value?: number | null;
  allowEmptyValue?: boolean;
  onChange?: (value: number | undefined) => void;
  currencyCode: string;
  currencySymbol?: string;
};

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(function CurrencyInput(
  {
    locale = 'en',
    value,
    allowEmptyValue = false,
    onChange,
    currencyCode,
    currencySymbol,
    ...props
  }: CurrencyInputProps,
  ref
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const supportedLocale = Intl.ListFormat.supportedLocalesOf(locale);
  const localeValue = supportedLocale.length > 0 ? supportedLocale[0] : 'en';

  if (supportedLocale.length === 0) {
    console.warn(`Locale value of ${locale} is unsupported, "en" will be used`);
  }

  const formatter = new Intl.NumberFormat(localeValue);

  const getRawNumber = (value: string) => {
    if (typeof value === 'number') {
      return value;
    }

    const parts = formatter.formatToParts(1000.1);
    const thousandSeparator = parts[1].value;
    const decimalSeparator = parts[3].value;

    const cleanedValue = parseFloat(
      value
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );

    return Number.isNaN(cleanedValue) ? 0 : cleanedValue;
  };

  const getCurrencySymbol = (
    locale: string,
    currencyCode: string,
    currencySymbol?: string
  ) => {
    if (currencySymbol) {
      return currencySymbol;
    }

    try {
      const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
      });

      const parts = formatter.formatToParts(0);
      const returnedCurrencySymbol = parts.find(
        part => part.type === 'currency'
      )?.value;

      return returnedCurrencySymbol;
    } catch (e) {
      console.warn(
        `Currency code of ${currencyCode} is unsupported, "$" will be used`
      );
    }

    return '$';
  };

  const formattedValue =
    allowEmptyValue && value === null
      ? null
      : formatter.format(getRawNumber((value ?? 0).toString())) ?? '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allowEmptyValue && e.currentTarget.value === '') {
      onChange(null);
      return;
    }

    const rawValue = getRawNumber(e.currentTarget.value);
    onChange(rawValue);
  };

  return (
    <Input
      ref={ref}
      type="text"
      prefix={
        <div>
          {getCurrencySymbol(localeValue, currencyCode, currencySymbol)}
        </div>
      }
      {...props}
      value={formattedValue}
      onChange={handleChange}
    />
  );
});
