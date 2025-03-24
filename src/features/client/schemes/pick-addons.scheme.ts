import { z } from 'zod';

export const pickAddonsSchema = z.object({
    onlineService: z.boolean(),
    largeStorage: z.boolean(),
    customizableProfile: z.boolean(),
});

export type PickAddonsValues = z.infer<typeof pickAddonsSchema>;
