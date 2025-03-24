import { z } from 'zod';

export const personalInfoSchema = z.object({
    name: z
        .string({ message: 'This field is required' })
        .min(2, 'At least 2 characters'),
    email: z
        .string({ message: 'This field is required' })
        .email('Invalid email format'),
    phone: z
        .string({ message: 'This field is required' })
        .regex(/^\+1 \d{3} \d{3} \d{3}$/, 'Format: +1 234 567 890'),
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
