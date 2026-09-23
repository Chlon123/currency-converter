import type { ConvertQueryArgs } from './types';

export const queryKeys = {
  convert: ({ amount, from, to }: ConvertQueryArgs) => [{ scope: 'convert', from, to, amount }] as const
};
