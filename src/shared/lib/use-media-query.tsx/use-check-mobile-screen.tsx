import { useEffect, useState } from 'react';

interface UseCheckMobileScreenProps {
    mobileWidth: number;
}

export const useCheckMobileScreen = (props: UseCheckMobileScreenProps) => {
    const { mobileWidth } = props;
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return width <= mobileWidth;
};
