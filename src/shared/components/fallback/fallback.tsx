import * as classes from './fallback.module.scss';
import DesktopFallbackSVG from '@/shared/assets/images/bg-sidebar-desktop.svg';
import MobileFallbackSVG from '@/shared/assets/images/bg-sidebar-mobile.svg';
import classNames from 'classnames';

interface FallbackProps {
    isMobile: boolean;
    children: React.ReactNode;
}

export const FallbackMobile = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={classNames(
                classes.fallback,
                classes['fallback--mobile'],
            )}
        >
            <MobileFallbackSVG />
            {children}
        </div>
    );
};

export const FallbackDesktop = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <DesktopFallbackSVG />
            {children}
        </div>
    );
};

export const Fallback = (props: FallbackProps) => {
    const { children, isMobile } = props;
    const FallbackCalculate = isMobile ? FallbackMobile : FallbackDesktop;

    return <FallbackCalculate>{children}</FallbackCalculate>;
};
