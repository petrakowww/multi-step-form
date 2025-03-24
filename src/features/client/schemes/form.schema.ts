import { z } from 'zod';
import { personalInfoSchema } from './personal-info.schema';
import { pickAddonsSchema } from './pick-addons.scheme';
import { selectPlanSchema } from './select-plan.scheme';

export const formSchema = personalInfoSchema
    .merge(selectPlanSchema)
    .merge(pickAddonsSchema);

export type FormValues = z.infer<typeof formSchema>;
