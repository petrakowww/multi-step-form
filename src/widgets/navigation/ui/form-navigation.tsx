import * as classes from './form-navigation.module.scss';
import { Button } from '@/shared/components/button/button';
import { useFormNavigation } from '../hook/useFormNavigation';
import { triggers as triggerSteps } from '../config/trigger.config';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '@/features/client/schemes/form.schema';

export const FormNavigation = () => {
    const { pageIndex, maxCountPages, nextPage, prevPage } =
        useFormNavigation();
    const { trigger } = useFormContext<FormValues>();

    const handleNextPage = async () => {
        const triggerFields = triggerSteps[pageIndex];

        if (!triggerFields) {
            return;
        }

        const output = await trigger(triggerFields as (keyof FormValues)[], {
            shouldFocus: true,
        });

        if (output) {
            nextPage();
        }
    };

    return (
        <div className={classes['form-navigation']}>
            {pageIndex > 0 && (
                <Button variant="ghost" onClick={prevPage}>
                    go back
                </Button>
            )}
            <div className={classes['form-navigation--right']}>
                {pageIndex !== maxCountPages - 1 ? (
                    <Button onClick={handleNextPage}>next step</Button>
                ) : (
                    <Button variant="accent">confirm</Button>
                )}
            </div>
        </div>
    );
};
