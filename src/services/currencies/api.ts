import { request } from '../utils/request';

import type { CurrenciesResponse } from './types';

const apiKey = import.meta.env.VITE_API_KEY_CURRENCIES;

export const getCurrencies = async (args: { signal?: AbortSignal } = {}): Promise<CurrenciesResponse> => {
  const { signal } = args;

  return request<CurrenciesResponse>(`/api/currencybeacon/currencies?api_key=${apiKey}`, {
    cache: 'default',
    token: apiKey,
    ...(signal ? { signal } : {})
  });
};
