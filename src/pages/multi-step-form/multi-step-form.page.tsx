import { FormSidebar } from '@/widgets/form-sidebar/form-sidebar';
import * as classes from './multi-step-form.module.scss';
import { FormContent } from '@/widgets/multi-step-form/ui/form-content';
import { FormNavigation } from '@/widgets/navigation/ui/form-navigation';

export const MultiStepForm = () => {
    return (
        <div className={classes['multi-step-form']}>
            <FormSidebar />
            <div className={classes['multi-step-form__content']}>
                <main className={classes['multi-step-form__main']}>
                    <FormContent />
                    <FormNavigation />
                </main>
            </div>
        </div>
    );
};
