import '@styles/globals.scss';
import { Layout } from './layout';
import { MultiStepForm } from '@/pages/multi-step-form/page';

export const App = () => {
    return (
        <Layout>
            <MultiStepForm />
        </Layout>
    );
};
