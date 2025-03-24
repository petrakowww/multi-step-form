import { formSchema, FormValues } from '@/features/client/schemes/form.schema';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const MultiFormContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            type: 'Arcade',
            payPlan: 'Monthly',
            onlineService: false,
            largeStorage: false,
            customizableProfile: false,
        },
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
};
