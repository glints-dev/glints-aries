import React, { useState } from 'react';
import { Input, InputProps } from '../Input/Input';

export type CurrencyInputProps = Omit<
  InputProps,
  'type' | 'prefix' | 'onChange' | 'value'
> & {
  locale?: string;
  value?: number;
  onChange?: (value: number) => void;
  prefix?: string;
};

export const CurrencyInput = React.forwardRef<
  HTMLInputElement,
  CurrencyInputProps
>(function CurrencyInput(
  { locale = 'en', value = 0, onChange, prefix, ...props }: CurrencyInputProps,
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

  const [formattedValue, setFormattedValue] = useState(
    formatter.format(getRawNumber(value.toString()))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = getRawNumber(e.currentTarget.value);
    onChange(rawValue);
    setFormattedValue(formatter.format(rawValue));
  };

  return (
    <Input
      ref={ref}
      type="text"
      prefix={<div>{prefix ?? '$'}</div>}
      {...props}
      value={formattedValue === '0' ? '' : formattedValue}
      onChange={handleChange}
    />
  );
});
