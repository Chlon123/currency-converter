export const responses = {
  convert: {
    eurToUsd: {
      meta: {},
      response: { timestamp: 1710515400, date: '2024-03-15', from: 'EUR', to: 'USD', amount: 1, value: 1.54 }
    },
    usdToEur: {
      meta: {},
      response: {
        timestamp: 1710515401,
        date: '2024-03-16',
        from: 'USD',
        to: 'EUR',
        amount: 1.54,
        value: 1
      }
    }
  },
  currencies: {
    meta: {},
    response: [
      { short_code: 'USD', name: 'US Dollar', symbol: '$' },
      { short_code: 'EUR', name: 'Euro', symbol: '€' },
      { short_code: 'GBP', name: 'British Pound', symbol: '£' },
      { short_code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
      { short_code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
      { short_code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
      { short_code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
      { short_code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
      { short_code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
      { short_code: 'NZD', name: 'New Zealand Dollar', symbol: '$' }
    ]
  }
};
