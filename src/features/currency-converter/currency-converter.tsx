import { useState, type FC } from 'react';
import { Meta } from './components/meta';
import { CurrencyInput } from './components/currency-input';
import { useGetConvertCurrencies } from '@/services/convert/queries';

export const CurrencyConverter: FC = () => {
  const [converterArgs, setConverterArgs] = useState({
    from: 'USD',
    to: 'EUR',
    amountFrom: 1,
    amountTo: 1,
    direction: 'from'
  });

  const isConversionReversed = converterArgs.direction === 'to';

  const directionBasedData = {
    from: isConversionReversed ? converterArgs.to : converterArgs.from,
    to: isConversionReversed ? converterArgs.from : converterArgs.to,
    amount: isConversionReversed ? converterArgs.amountTo : converterArgs.amountFrom
  };

  const {
    data,
    refetch: convertCurrencies,
    isPending,
    isLoading
  } = useGetConvertCurrencies({
    enabled: true,
    ...directionBasedData
  });

  const isDisabled = isLoading || isPending;

  const handleFromChange = (amount: number, symbol: string) => {
    setConverterArgs({ ...converterArgs, from: symbol, amountFrom: amount, direction: 'from' });
    convertCurrencies();
  };

  const handleToChange = (amount: number, symbol: string) => {
    setConverterArgs({ ...converterArgs, to: symbol, amountTo: amount, direction: 'to' });
    convertCurrencies();
  };

  return (
    <div className="flex flex-col gap-4">
      <Meta
        key={`${converterArgs.from}-${converterArgs.to}-${converterArgs.direction}`}
        from={converterArgs.from}
        to={converterArgs.to}
      />
      <div className="grid grid-cols-1 gap-2 max-w-[320px]">
        <CurrencyInput
          onChange={handleFromChange}
          disabled={isDisabled}
          convertedAmount={converterArgs.direction === 'to' ? data?.value : undefined}
          defaultCode={converterArgs.from}
          defaultAmount={converterArgs.amountFrom}
        />
        <CurrencyInput
          onChange={handleToChange}
          disabled={isDisabled}
          convertedAmount={converterArgs.direction === 'from' ? data?.value : undefined}
          defaultCode={converterArgs.to}
          defaultAmount={converterArgs.amountTo}
        />
      </div>
    </div>
  );
};
