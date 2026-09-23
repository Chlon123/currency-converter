import { render, waitFor } from '@testing-library/react';
import { ConverterView } from './converter-view';
import { expect, test } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

test('should render Converter view properly', async () => {
  const { getByText, findByTestId } = render(
    <QueryClientProvider client={queryClient}>
      <ConverterView />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(getByText('US Dollar')).toBeInTheDocument();
  });

  const title = getByText('Currency converter');
  const dollarMeta = getByText('1 US Dollar converts to');
  const euroMeta = getByText('1.000 Euro');

  expect(title).toBeVisible();
  expect(dollarMeta).toBeVisible();
  expect(euroMeta).toBeVisible();
});
