import { http, HttpResponse } from 'msw';
import { responses } from './responses';

export const handlers = [
  http.get('/api/currencybeacon/convert', ({ request }) => {
    const url = new URL(request.url);

    const from = url.searchParams.get('from');
    const to = url.searchParams.get('to');
    const amount = url.searchParams.get('amount');

    if (!from || !to || !amount) {
      return new HttpResponse(null, { status: 400 });
    }

    const response = from === 'EUR' ? responses.convert.eurToUsd : responses.convert.usdToEur;

    return HttpResponse.json(response, { status: 200 });
  }),
  http.get('/api/currencybeacon/currencies', () => {
    return HttpResponse.json(responses.currencies, { status: 200 });
  })
];
