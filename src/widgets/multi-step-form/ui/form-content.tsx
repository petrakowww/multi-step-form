import * as classes from './form-content.module.scss';
import { Suspense } from 'react';
import { steps } from '../config/form.component';
import { useStepContext } from '@/app/providers/step-provider';
import { FallbackLoading } from './utils/fallback-loading';
import { StepDescription } from '@/shared/components/description/description';

export const FormContent = () => {
    const { pageIndex } = useStepContext();
    const { component: StepComponent, header } = steps[pageIndex];

    return (
        <>
            <div className={classes['form-content__header']}>
                <StepDescription {...header} />
            </div>
            <Suspense fallback={<FallbackLoading />}>
                <div className={classes['form-content__main']}>
                    <StepComponent />
                </div>
            </Suspense>
        </>
    );
};
