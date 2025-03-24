import { PersonalInfoValues } from '@/features/client/schemes/personal-info.schema';
import * as classes from './personal-info-form.module.scss';
import { Input } from '@/shared/components/input/input';
import { Label } from '@/shared/components/label/label';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@/shared/components/error-message/error-message';

export const PersonalInfoStep = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<PersonalInfoValues>();

    return (
        <div className={classes['personal-info']}>
            <div className={classes['personal-info__field']}>
                <div className={classes['personal-info__header']}>
                    <Label className={classes['personal-info__label']}>
                        Name
                    </Label>
                    <ErrorMessage
                        message={errors.name?.message}
                        error={errors.name}
                    />
                </div>

                <Input {...register('name')} placeholder="e.g. Stephen King" />
            </div>
            <div className={classes['personal-info__field']}>
                <div className={classes['personal-info__header']}>
                    <Label className={classes['personal-info__label']}>
                        Email Address
                    </Label>
                    <ErrorMessage
                        message={errors.email?.message}
                        error={errors.email}
                    />
                </div>

                <Input
                    {...register('email')}
                    placeholder="e.g. stephenking@lorem.com"
                />
            </div>
            <div className={classes['personal-info__field']}>
                <div className={classes['personal-info__header']}>
                    <Label className={classes['personal-info__label']}>
                        Phone Number
                    </Label>
                    <ErrorMessage
                        message={errors.phone?.message}
                        error={errors.phone}
                    />
                </div>

                <Input
                    {...register('phone')}
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </div>
    );
};
