import * as classes from './fallback-loading.module.scss';
import { Loading } from '@/shared/components/loading/loading';
import { Skeleton } from '@/shared/components/skeleton/skeleton';

export const FallbackLoading = () => {
    return (
        <div className={classes['fallback-form']}>
            <div className={classes['fallback-form__bg-skeleton']}>
                <Skeleton />
            </div>
            <div className={classes['fallback-form__md-skeleton']}>
                <Skeleton />
            </div>

            <div className={classes['fallback-form__loading']}>
                <Loading />
                <p>Wait, we are loading the next stage.</p>
            </div>
        </div>
    );
};
