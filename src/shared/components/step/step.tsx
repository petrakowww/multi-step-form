import classNames from 'classnames';
import * as classes from './step.module.scss';

interface StepProps {
    title: string;
    preview: string;
    index: number;
    isCurrentStep: boolean;
}

export const Step = (props: StepProps) => {
    const { title, preview, index, isCurrentStep } = props;

    const isCurrentStepClassname = (value: boolean) => {
        return classNames(
            classes['step__display'],
            { [classes['step__display--current']]: value }, // ✅ Правильный синтаксис
        );
    };

    return (
        <div className={classes['step']}>
            <span className={isCurrentStepClassname(isCurrentStep)}>
                {index}
            </span>
            <article className={classes['step__card']}>
                <p className={classes['step__card--preview']}>{preview}</p>
                <h3 className={classes['step__card--title']}>{title}</h3>
            </article>
        </div>
    );
};
