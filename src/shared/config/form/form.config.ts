import { Step, StepDescription } from '@/shared/lib/types/step-state.type';

const __SIDEBAR_TITLE__ = ['your info', 'select plan', 'add-ons', 'summary'];

const __STEP_DESCRIPTION__: StepDescription[] = [
    {
        title: 'personal info',
        description:
            'please provide your name, email address, and phone number.',
    },
    {
        title: 'select your plan',
        description: 'you have the option of monthly or year biling.',
    },
    {
        title: 'pick add-ons',
        description: 'add-ons help enhance your gaming experience',
    },
    {
        title: 'finishing up',
        description: 'double-check everything looks OK before confirming',
    },
];

const __COUNT_STEPS__ = __SIDEBAR_TITLE__.length;

const __SIDEBAR_CONFIG__: Step[] = Array.from({
    length: __COUNT_STEPS__,
}).map((_, index) => {
    return {
        index: index,
        title: __SIDEBAR_TITLE__[index],
        displayIndex: index + 1,
    };
});

export { __SIDEBAR_CONFIG__ as stepConfig };
export { __STEP_DESCRIPTION__ as stepDescriptionConfig };
