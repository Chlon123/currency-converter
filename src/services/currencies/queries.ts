import { useQuery } from '@tanstack/react-query';

import { getCurrencies } from './api';
import { queryKeys } from './keys';

type Args = { enabled?: boolean };

export const useGetCurrencies = ({ enabled }: Args = {}) => {
  return useQuery({
    queryKey: queryKeys.all(),
    queryFn: ({ signal }) => getCurrencies({ signal }),
    select: (data) => data?.response,
    enabled
  });
};
