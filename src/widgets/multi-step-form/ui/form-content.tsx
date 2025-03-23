import * as classes from './form-content.module.scss';
import { Suspense } from 'react';
import { StepDescription } from '@/shared/components/description/description';
import { steps } from '../config/form.component';
import { useFormContext } from '@/app/providers/step-provider';

export const FormContent = () => {
    const { pageIndex } = useFormContext();
    const { component: StepComponent, header } = steps[pageIndex];

    return (
        <Suspense>
            <div className={classes['form-content__header']}>
                <StepDescription {...header} />
            </div>

            <StepComponent />
        </Suspense>
    );
};
