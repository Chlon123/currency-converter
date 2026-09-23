export type Currency = { short_code: string; name: string; symbol: string };

export type CurrenciesResponse = {
  meta: {
    code: number;
    disclaimer: string;
  };
  response: Currency[];
};
