import { z } from 'zod';
import { personalInfoSchema } from './personal-info.schema';
import { pickAddonsSchema } from './pick-addons.scheme';
import { selectPlanSchema } from './select-plan.scheme';

export const formSchema = z.object({
    personalInfoSchema,
    pickAddonsSchema,
    selectPlanSchema,
});

export type FormValues = z.infer<typeof formSchema>;
