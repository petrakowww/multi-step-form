import '@styles/globals.scss';
import { MultiStepForm } from '@/pages/multi-step-form/multi-step-form.page';
import { StepContextProvider } from './providers/step-provider';

export const App = () => {
    return (
        <StepContextProvider>
            <MultiStepForm />
        </StepContextProvider>
    );
};
