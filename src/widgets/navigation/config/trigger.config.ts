import { FormValues } from '@/features/client/schemes/form.schema';

export type FieldName<T> = keyof T;

interface TriggerStep<T> {
    trigger: FieldName<T>[] | null;
}

export const triggers: TriggerStep<FormValues>['trigger'][] = [
    ['name', 'email', 'phone'],
    ['type', 'payPlan'],
    ['onlineService', 'largeStorage', 'customizableProfile'],
    null,
];
