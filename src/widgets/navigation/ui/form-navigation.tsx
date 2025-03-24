import * as classes from './form-navigation.module.scss';
import { Button } from '@/shared/components/button/button';
import { useFormNavigation } from '../hook/useFormNavigation';

export const FormNavigation = () => {
    const { pageIndex, maxCountPages, nextPage, prevPage } =
        useFormNavigation();

    return (
        <div className={classes['form-navigation']}>
            {pageIndex > 0 && (
                <Button variant="ghost" onClick={prevPage}>
                    go back
                </Button>
            )}
            <div className={classes['form-navigation--right']}>
                {pageIndex !== maxCountPages - 1 ? (
                    <Button onClick={nextPage}>next step</Button>
                ) : (
                    <Button variant="accent">confirm</Button>
                )}
            </div>
        </div>
    );
};
