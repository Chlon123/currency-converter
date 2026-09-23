import { useQuery } from '@tanstack/react-query';

import { getConvert } from './api';
import { queryKeys } from './keys';
import type { ConvertQueryArgs } from './types';

type Args = { enabled?: boolean } & ConvertQueryArgs;

export const useGetConvertCurrencies = ({ enabled, from, to, amount }: Args) => {
  return useQuery({
    queryKey: queryKeys.convert({ from, to, amount }),
    queryFn: ({ signal }) => getConvert({ signal, from, to, amount }),
    select: (data) => data.response,
    enabled
  });
};
