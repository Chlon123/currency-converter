import { reactRouter } from '@react-router/dev/vite';
import { envSchema } from './config/env-schema';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const rawEnv = loadEnv(mode, process.cwd(), '');

  const env = envSchema.parse(rawEnv);

  const isProd = mode === 'production';
  const isTest = mode === 'test';

  return {
    plugins: [
      reactRouter(),
      tsconfigPaths(),
      tailwindcss(),

      ...(!isTest
        ? [
            visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true
            })
          ]
        : [])
    ],

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },

    server: {
      port: 5173,
      open: true,
      ...(isTest
        ? {}
        : {
            proxy: {
              '/api/currencybeacon': {
                target: 'https://api.currencybeacon.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/currencybeacon/, '/v1')
              }
            }
          })
    },

    preview: {
      port: 5173
    },

    resolve: {
      dedupe: ['react', 'react-dom']
    },

    build: {
      sourcemap: !isProd,

      rollupOptions: {
        output: {
          manualChunks (id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'react-vendor';
              }

              if (id.includes('zod')) {
                return 'zod';
              }

              return 'vendor';
            }

            if (id.includes('/src/routes/')) {
              const match = id.split('/src/routes/')[1];
              if (match) {
                const name = match.split('/')[0];
                return `route-${name}`;
              }
            }
          }
        }
      }
    },

    clearScreen: false
  };
});
