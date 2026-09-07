import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    HOST: z.string().min(1).default("0.0.0.0"),
    PORT: z.coerce.number().int().positive().max(65_535).default(3000),
});

const result = envSchema.safeParse(process.env);
if (!result.success) {
    console.error('Invalid environment variables:', result.error.format());
    process.exit(1);
}

export const env = result.data;