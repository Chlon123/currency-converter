export type ConvertResponse = {
  meta: {
    code: number;
    disclaimer: string;
  };
  response: {
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
  };
};

export type ConvertQueryArgs = { from: string; to: string; amount: number };
