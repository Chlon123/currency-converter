import type { FC } from 'react';
import { useGetConvertCurrencies } from '@/services/convert/queries';
import { useGetCurrencies } from 'src/services/currencies/queries';

export const Meta: FC<{ from: string; to: string }> = ({ from, to }) => {
  const { data } = useGetConvertCurrencies({
    enabled: true,
    amount: 1,
    from,
    to
  });

  const { data: currenciesData } = useGetCurrencies({ enabled: true });

  const labelFrom = currenciesData?.find((opt) => opt.short_code === from)?.name || '';
  const labelTo = currenciesData?.find((opt) => opt.short_code === to)?.name || '';

  console.log({ data });

  return (
    <div className="flex flex-col gap-2 font-sans" data-testid="meta-container">
      <span className="text-sm text-gray-500">1 {labelFrom} converts to</span>
      <span className="font-semibold text-4xl">
        {data?.value.toFixed(3)} {labelTo}
      </span>
    </div>
  );
};
