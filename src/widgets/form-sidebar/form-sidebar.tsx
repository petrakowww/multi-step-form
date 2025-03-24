import { FallbackSidebar } from '@/shared/components/fallback-sidebar/fallback-sidebar';
import { Step } from '@/shared/components/step/step';
import { stepConfig } from '@config/form/form.config';
import * as classes from './form-sidebar.module.scss';
import { useStepContext } from '@/app/providers/step-provider';

export const FormSidebar = () => {
    const { pageIndex } = useStepContext();

    const isCurrentStep = (index: number) => pageIndex === index;
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
                            isCurrentStep={isCurrentStep(value.index)}
                        />
                    ))}
                </div>
            </FallbackSidebar>
        </aside>
    );
};
