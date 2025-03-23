import { z } from 'zod';

export const personalInfoScheme = z.object({
    name: z.string().min(2, 'The name must contain at least 2 characters.'),
    email: z.string().email('This field must contain your email address.'),
    phone: z
        .string()
        .regex(
            /^\+1 \d{3} \d{3} \d{3}$/,
            'Phone must be in format: +1 234 567 890',
        ),
});
