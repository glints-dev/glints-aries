import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Input, InputProps } from '../Input/Input';

export type CurrencyInputProps = Omit<
  InputProps,
  'type' | 'prefix' | 'onChange' | 'value'
> & {
  locale?: string;
  value?: number;
  onChange?: (value: number) => void;
  currencyCode: string;
  currencySymbol?: string;
};

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(function CurrencyInput(
  {
    locale = 'en',
    value = 0,
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

  const formatter = useMemo(
    () => new Intl.NumberFormat(localeValue),
    [localeValue]
  );

  const getRawNumber = useCallback(
    (value: string) => {
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
    },
    [formatter]
  );

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

  const [formattedValue, setFormattedValue] = useState(
    formatter.format(getRawNumber(value.toString()))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = getRawNumber(e.currentTarget.value);
    onChange(rawValue);
    setFormattedValue(formatter.format(rawValue));
  };

  useEffect(() => {
    setFormattedValue(formatter.format(getRawNumber(value.toString())));
  }, [formatter, getRawNumber, value]);

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
      value={formattedValue === '0' ? '' : formattedValue}
      onChange={handleChange}
    />
  );
});
