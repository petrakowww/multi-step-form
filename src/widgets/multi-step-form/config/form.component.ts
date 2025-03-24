import { maxCountPages, stepDescriptionConfig } from '@config/form/form.config';
import {
    FinishingUpStep,
    PersonalInfoStep,
    PickAddonsStep,
    SelectPlanStep,
} from './form.import';

const components = [
    PersonalInfoStep,
    SelectPlanStep,
    PickAddonsStep,
    FinishingUpStep,
];

export const steps = Array.from({ length: maxCountPages }).map((_, index) => {
    return {
        component: components[index],
        header: stepDescriptionConfig[index],
    };
});
