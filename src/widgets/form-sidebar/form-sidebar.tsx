import { FallbackSidebar } from '@/shared/components/fallback-sidebar/fallback-sidebar';
import { Step } from '@/shared/components/step/step';
import { stepConfig } from '@config/form/form.config';
import * as classes from './form-sidebar.module.scss';

export const FormSidebar = () => {
    return (
        <aside>
            <FallbackSidebar>
                <div className={classes['sidebar']}>
                    {stepConfig.map((value) => (
                        <Step
                            key={value.index}
                            index={value.displayIndex}
                            title={value.title}
                            preview={`step ${value.displayIndex}`}
                        />
                    ))}
                </div>
            </FallbackSidebar>
        </aside>
    );
};
