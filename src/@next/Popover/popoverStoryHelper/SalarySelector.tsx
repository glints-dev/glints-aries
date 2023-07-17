import React from 'react';
import { CurrencyInput } from '../../CurrencyInput/CurrencyInput';
import { Typography } from '../../Typography';

type Props = {
  onFromChanged: (amount: number) => void;
  onToChanged: (amount: number) => void;
};

export const SalarySelector = ({ onFromChanged, onToChanged }: Props) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <Typography as="div" variant="subtitle2">
          IDR
        </Typography>
        <div>
          <CurrencyInput currencyCode="USD" onChange={onFromChanged} />
        </div>
        <div>-</div>
        <div>
          <CurrencyInput currencyCode="USD" onChange={onToChanged} />
        </div>
      </div>
    </div>
  );
};
