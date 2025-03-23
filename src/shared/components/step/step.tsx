import * as classes from './step.module.scss';

interface StepProps {
    title: string;
    preview: string;
    index: number;
}

export const Step = (props: StepProps) => {
    const { title, preview, index } = props;
    return (
        <div className={classes['step']}>
            <span className={classes['step__display']}>{index}</span>
            <article className={classes['step__card']}>
                <p className={classes['step__card--preview']}>{preview}</p>
                <h3 className={classes['step__card--title']}>{title}</h3>
            </article>
        </div>
    );
};
