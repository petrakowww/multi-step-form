import '@styles/globals.scss';
import { MultiStepForm } from '@/pages/multi-step-form/multi-step-form.page';
import { StepContextProvider } from './providers/step-provider';
import { MultiFormContextProvider } from './providers/multi-form-provider';
import { Layout } from './layout';

export const App = () => {
    return (
        <MultiFormContextProvider>
            <StepContextProvider>
                <Layout>
                    <MultiStepForm />
                </Layout>
            </StepContextProvider>
        </MultiFormContextProvider>
    );
};
