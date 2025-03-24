import { maxCountPages } from '@config/form/form.config';
import React, { useState } from 'react';

interface StepContextProps {
    pageIndex: number;
    maxCountPages: number;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const fallbackProviderValue: StepContextProps = {
    pageIndex: 0,
    maxCountPages: maxCountPages,
    setPageIndex: () => {},
};

const StepContext = React.createContext<StepContextProps>(
    fallbackProviderValue,
);

export const StepContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [pageIndex, setPageIndex] = useState(fallbackProviderValue.pageIndex);
    return (
        <StepContext.Provider
            value={{
                ...fallbackProviderValue,
                pageIndex,
                setPageIndex,
            }}
        >
            {children}
        </StepContext.Provider>
    );
};

export const useStepContext = () => {
    const context = React.useContext(StepContext);

    if (!context) {
        throw new Error(
            'useFormContext must be used within a FormContextProvider',
        );
    }

    return context;
};
