import type { FC } from 'react';
import { CurrencyConverter } from '@/features/currency-converter/currency-converter';

export const ConverterView: FC = () => {
  return (
    <div>
      <span className="font-bold text-2xl font-sans">Currency converter</span>
      <section className="flex p-12 align-middle justify-center bg-gray-100 rounded-2xl">
        <CurrencyConverter />
      </section>
    </div>
  );
};
