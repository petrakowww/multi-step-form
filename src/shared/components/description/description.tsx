import * as classes from './description.module.scss';

interface StepDescriptionProps {
    title: string;
    description: string;
}

export const StepDescription = (props: StepDescriptionProps) => {
    const { title, description } = props;
    return (
        <section className={classes['description']}>
            <h3 className={classes['description__header']}>{title}</h3>
            <p className={classes['description__content']}>{description}</p>
        </section>
    );
};
