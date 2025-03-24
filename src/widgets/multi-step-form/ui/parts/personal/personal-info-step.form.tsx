import { PersonalInfoValues } from '@/features/client/schemes/personal-info.schema';
import * as classes from './personal-info-form.module.scss';
import { Input } from '@/shared/components/input/input';
import { Label } from '@/shared/components/label/label';
import { useFormContext } from 'react-hook-form';

export const PersonalInfoStep = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<PersonalInfoValues>();
    console.log(errors);
    return (
        <div className={classes['personal-info']}>
            <Label className={classes['personal-info__field']}>
                name
                <Input {...register('name')} placeholder="e.g. Stephen King" />
                {errors.name && <p>{errors.name.message}</p>}
            </Label>
            <Label className={classes['personal-info__field']}>
                email address
                <Input
                    {...register('email')}
                    placeholder="e.g. stephenking@lorem.com"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </Label>
            <Label className={classes['personal-info__field']}>
                phone number
                <Input
                    {...register('phone')}
                    placeholder="e.g. +1 234 567 890"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </Label>
        </div>
    );
};
