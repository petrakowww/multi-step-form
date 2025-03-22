import { Fallback } from '@/shared/components/fallback/fallback';
import { useCheckMobileScreen } from '@/shared/lib/use-media-query.tsx/use-check-mobile-screen';

export const MultiStepForm = () => {
    const isMobile = useCheckMobileScreen({ mobileWidth: 768 });
    return (
        <div>
            <Fallback isMobile={isMobile}>Hello world</Fallback>
        </div>
    );
};
