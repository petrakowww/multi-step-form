import * as classes from './layout.module.scss';

export const Layout = (props: { children: React.ReactNode }) => {
    return (
        <main className={classes.layout}>
            <section className={classes.layout__container}>
                {props.children}
            </section>
        </main>
    );
};
