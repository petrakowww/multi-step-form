import * as classes from './personal-info-form.module.scss';
import { Input } from '@/shared/components/input/input';
import { Label } from '@/shared/components/label/label';

export const PersonalInfoStep = () => {
    return (
        <div className={classes['personal-info']}>
            <Label className={classes['personal-info__field']}>
                name
                <Input placeholder="e.g. Stephen King" />
            </Label>
            <Label className={classes['personal-info__field']}>
                email address
                <Input placeholder="e.g. stephenking@lorem.com" />
            </Label>
            <Label className={classes['personal-info__field']}>
                phone number
                <Input placeholder="e.g. +1 234 567 890" />
            </Label>
        </div>
    );
};
