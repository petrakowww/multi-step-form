import { lazy } from 'react';

const PersonalInfoStep = lazy(() =>
    import('../ui/parts/personal-info-step.form').then((module) => ({
        default: module.PersonalInfoStep,
    })),
);
const SelectPlanStep = lazy(() =>
    import('../ui/parts/select-plan-step.form').then((module) => ({
        default: module.SelectPlanStep,
    })),
);
const PickAddonsStep = lazy(() =>
    import('../ui/parts/pick-addons-step').then((module) => ({
        default: module.PickAddonsStep,
    })),
);
const FinishingUpStep = lazy(() =>
    import('../ui/parts/finishing-up-form').then((module) => ({
        default: module.FinishingUpStep,
    })),
);

export { PersonalInfoStep, SelectPlanStep, PickAddonsStep, FinishingUpStep };
