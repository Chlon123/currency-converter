import { z } from 'zod';

export const envSchema = z.object({
  APP_ENV: z.enum(['development', 'production', 'test']),
  VITE_ENABLE_MOCKING: z
    .string()
    .transform((value) => value === 'true')
    .default(false),
  VITE_API_KEY_CURRENCIES: z.string()
});
