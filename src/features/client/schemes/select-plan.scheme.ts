import { z } from 'zod';

export const selectPlanSchema = z.object({
    type: z
        .enum(['Arcade', 'Advanced', 'Pro'], {
            message:
                'Invalid plan type. Please select Arcade, Advanced, or Pro.',
        })
        .default('Arcade'),
    payPlan: z
        .enum(['Monthly', 'Yearly'], {
            message: 'Invalid payment plan. Please choose Monthly or Yearly.',
        })
        .default('Monthly'),
});

export type SelectPlanValues = z.infer<typeof selectPlanSchema>;
