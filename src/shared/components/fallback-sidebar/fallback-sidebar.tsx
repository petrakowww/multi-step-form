import * as classes from './fallback-sidebar.module.scss';

export const FallbackSidebar = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <div className={classes['sidebar--fallback']}>{children}</div>;
};
