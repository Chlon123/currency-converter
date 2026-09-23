import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

const isMockingEnabled = import.meta.env.VITE_ENABLE_MOCKING === 'true';
const isDev = import.meta.env.DEV;

async function enableMocking () {
  if (!isDev || !isMockingEnabled) {
    return;
  }

  const { worker } = await import('../tests/mocks/browser');

  await worker.start({
    onUnhandledRequest: 'error'
  });
}

enableMocking().then(() => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>
    );
  });
});
