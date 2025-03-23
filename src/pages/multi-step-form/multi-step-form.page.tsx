import { FormSidebar } from '@/widgets/form-sidebar/form-sidebar';
import * as classes from './multi-step-form.module.scss';

export const MultiStepForm = () => {
    return (
        <main>
            <section className={classes['multi-step-form']}>
                <FormSidebar />
                <div className={classes['multi-step-form__content']}>Hello</div>
            </section>
        </main>
    );
};
