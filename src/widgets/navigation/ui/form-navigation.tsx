import * as classes from './form-navigation.module.scss';
import { Button } from '@/shared/components/button/button';
import { useFormNavigation } from '../hook/useFormNavigation';

export const FormNavigation = () => {
    const { pageIndex, maxCountPages, nextPage, prevPage } =
        useFormNavigation();

    return (
        <div className={classes['form-navigation']}>
            <Button
                variant="ghost"
                onClick={prevPage}
                disabled={pageIndex === 0}
            >
                go back
            </Button>
            <Button
                onClick={nextPage}
                disabled={pageIndex === maxCountPages - 1}
            >
                next step
            </Button>
        </div>
    );
};
