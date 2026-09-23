import { request } from '../utils/request';

import type { ConvertResponse } from './types';

const apiKey = import.meta.env.VITE_API_KEY_CURRENCIES;

export const getConvert = async (args: {
  signal?: AbortSignal;
  from: string;
  to: string;
  amount: number;
}): Promise<ConvertResponse> => {
  const { signal, from, to, amount } = args;
  return request<ConvertResponse>(`/api/currencybeacon/convert?from=${from}&to=${to}&amount=${amount}`, {
    cache: 'default',
    token: apiKey,
    ...(signal ? { signal } : {})
  });
};
