import { useStepContext } from '@/app/providers/step-provider';
import { useCallback } from 'react';

export const useFormNavigation = (callback?: (value: number) => void) => {
    const { setPageIndex, maxCountPages, pageIndex } = useStepContext();

    const prevPage = useCallback(() => {
        setPageIndex((prev) => {
            const newIndex = Math.max(prev - 1, 0);
            callback?.(newIndex);
            return newIndex;
        });
    }, [setPageIndex]);

    const nextPage = useCallback(async () => {
        setPageIndex((prev) => {
            const newIndex = Math.min(prev + 1, maxCountPages - 1);
            callback?.(newIndex);
            return newIndex;
        });
    }, [setPageIndex, maxCountPages]);

    return { pageIndex, maxCountPages, prevPage, nextPage };
};
