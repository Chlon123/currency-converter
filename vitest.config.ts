import { defineConfig, configDefaults, coverageConfigDefaults } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, './types/**', './tests/e2e/**'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'istanbul',
      exclude: [...coverageConfigDefaults.exclude]
    }
  }
});
